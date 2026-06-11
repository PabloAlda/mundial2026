// =========================================
// QUINIELA MUNDIAL 2026 - App Logic
// =========================================

const STATE = {
  groupName: "",
  playerName: "",
  picks: {},        // { matchId: 'home' | 'draw' | 'away' }
  currentGroup: 0,
};

// ── Utilidades ─────────────────────────────
function $(id) { return document.getElementById(id); }

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(`screen-${name}`).classList.add('active');
  if (name === 'main') renderMain();
}

function totalPicks() {
  return Object.keys(STATE.picks).length;
}

function updateProgress() {
  $('progress-text').textContent = `${totalPicks()}/${TOTAL_MATCHES}`;
}

// ── WELCOME ────────────────────────────────
$('btn-start').addEventListener('click', () => {
  const gName = $('group-name').value.trim();
  const pName = $('player-name').value.trim();
  if (!gName || !pName) {
    alert('Por favor escribe el nombre del grupo y tu nombre.');
    return;
  }
  STATE.groupName = gName;
  STATE.playerName = pName;
  showScreen('main');
});

$('btn-load').addEventListener('click', () => {
  const code = prompt('Pega aquí el código de tu quiniela guardada:');
  if (!code) return;
  try {
    const data = JSON.parse(atob(code.trim()));
    STATE.groupName = data.groupName || 'Mi Quiniela';
    STATE.playerName = data.playerName || 'Jugador';
    STATE.picks = data.picks || {};
    showScreen('main');
  } catch (e) {
    alert('Código inválido. Verifica que copiaste bien el código completo.');
  }
});

// ── MAIN SCREEN ────────────────────────────
function renderMain() {
  $('header-group-name').textContent = STATE.groupName;
  $('header-player-name').textContent = STATE.playerName;
  renderTabs();
  renderGroup(STATE.currentGroup);
  updateProgress();
}

function renderTabs() {
  const nav = $('group-tabs');
  nav.innerHTML = '';
  GROUPS.forEach((g, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === STATE.currentGroup ? ' active' : '');
    const groupPicks = g.matches.filter(m => STATE.picks[m.id]).length;
    if (groupPicks > 0) btn.classList.add('has-picks');
    btn.innerHTML = `GRUPO ${g.id} <span class="tab-badge"></span>`;
    btn.addEventListener('click', () => switchGroup(i));
    nav.appendChild(btn);
  });
}

function switchGroup(index) {
  STATE.currentGroup = index;
  renderTabs();
  renderGroup(index);
  $('matches-container').scrollTop = 0;
}

function renderGroup(index) {
  const container = $('matches-container');
  container.innerHTML = '';

  const g = GROUPS[index];
  const section = document.createElement('div');
  section.className = 'group-section active';

  // Heading
  const heading = document.createElement('div');
  heading.className = 'group-heading';
  heading.innerHTML = `GRUPO <span>${g.id}</span>`;
  section.appendChild(heading);

  // Teams chips
  const chips = document.createElement('div');
  chips.className = 'group-teams';
  g.teams.forEach(t => {
    const chip = document.createElement('div');
    chip.className = 'team-chip';
    chip.innerHTML = `<span class="flag">${t.flag}</span>${t.name}`;
    chips.appendChild(chip);
  });
  section.appendChild(chips);

  // Matches
  g.matches.forEach(match => {
    section.appendChild(buildMatchCard(match));
  });

  container.appendChild(section);
}

function buildMatchCard(match) {
  const card = document.createElement('div');
  card.className = 'match-card' + (STATE.picks[match.id] ? ' has-pick' : '');
  card.id = `card-${match.id}`;

  card.innerHTML = `
    <div class="match-date">📅 ${match.date}</div>
    <div class="match-teams">
      <div class="team-side">
        <div class="team-flag">${match.home.flag}</div>
        <div class="team-name">${match.home.name}</div>
      </div>
      <div class="vs-badge">VS</div>
      <div class="team-side right">
        <div class="team-flag">${match.away.flag}</div>
        <div class="team-name">${match.away.name}</div>
      </div>
    </div>
    <div class="pick-area">
      <button class="pick-btn pick-home ${STATE.picks[match.id] === 'home' ? 'selected-home' : ''}"
        data-match="${match.id}" data-pick="home">
        🏠 Gana<br>${match.home.name.split(' ')[0]}
      </button>
      <button class="pick-btn pick-draw ${STATE.picks[match.id] === 'draw' ? 'selected-draw' : ''}"
        data-match="${match.id}" data-pick="draw">
        🤝 Empate
      </button>
      <button class="pick-btn pick-away ${STATE.picks[match.id] === 'away' ? 'selected-away' : ''}"
        data-match="${match.id}" data-pick="away">
        ✈️ Gana<br>${match.away.name.split(' ')[0]}
      </button>
    </div>
  `;

  // Eventos pick
  card.querySelectorAll('.pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mId = btn.dataset.match;
      const pick = btn.dataset.pick;
      setPick(mId, pick);
    });
  });

  return card;
}

function setPick(matchId, pick) {
  STATE.picks[matchId] = pick;

  // Actualizar card visualmente
  const card = $(`card-${matchId}`);
  if (!card) return;

  card.classList.add('has-pick');
  const btns = card.querySelectorAll('.pick-btn');
  btns.forEach(b => {
    b.classList.remove('selected-home', 'selected-draw', 'selected-away');
  });

  const map = { home: 'selected-home', draw: 'selected-draw', away: 'selected-away' };
  card.querySelector(`.pick-${pick}`).classList.add(map[pick]);

  updateProgress();

  // Actualizar badge de tab
  const g = GROUPS[STATE.currentGroup];
  const groupPicks = g.matches.filter(m => STATE.picks[m.id]).length;
  const tabBtn = $('group-tabs').querySelectorAll('.tab-btn')[STATE.currentGroup];
  if (groupPicks > 0) tabBtn.classList.add('has-picks');

  // Guardar en localStorage automáticamente
  autoSave();
}

function autoSave() {
  try {
    const data = { groupName: STATE.groupName, playerName: STATE.playerName, picks: STATE.picks };
    localStorage.setItem('quiniela_mundial_2026', JSON.stringify(data));
  } catch(e) {}
}

// ── NAVEGACIÓN PREV/NEXT ────────────────────
$('btn-next').addEventListener('click', () => {
  if (STATE.currentGroup < GROUPS.length - 1) switchGroup(STATE.currentGroup + 1);
  else showShareModal();
});

$('btn-prev').addEventListener('click', () => {
  if (STATE.currentGroup > 0) switchGroup(STATE.currentGroup - 1);
});

// ── MENÚ ───────────────────────────────────
$('btn-menu').addEventListener('click', () => {
  $('menu-panel').classList.remove('hidden');
});
$('menu-overlay').addEventListener('click', () => {
  $('menu-panel').classList.add('hidden');
});

$('btn-export-json').addEventListener('click', () => {
  $('menu-panel').classList.add('hidden');
  showShareModal();
});

$('btn-reset-picks').addEventListener('click', () => {
  if (!confirm('¿Seguro que quieres borrar todas tus predicciones?')) return;
  STATE.picks = {};
  $('menu-panel').classList.add('hidden');
  renderMain();
});

$('btn-compare').addEventListener('click', () => {
  $('menu-panel').classList.add('hidden');
  $('modal-compare').classList.remove('hidden');
  $('compare-result').classList.add('hidden');
  $('compare-input').value = '';
});

// ── GUARDAR Y COMPARTIR ────────────────────
$('btn-save-share').addEventListener('click', showShareModal);

function showShareModal() {
  const data = {
    groupName: STATE.groupName,
    playerName: STATE.playerName,
    picks: STATE.picks,
    ts: Date.now(),
  };
  const code = btoa(JSON.stringify(data));
  $('share-code').value = code;
  $('modal-share').classList.remove('hidden');
}

$('btn-copy-code').addEventListener('click', () => {
  const code = $('share-code').value;
  navigator.clipboard.writeText(code).then(() => {
    $('btn-copy-code').textContent = '✅ ¡Copiado!';
    setTimeout(() => { $('btn-copy-code').textContent = '📋 Copiar código'; }, 2000);
  }).catch(() => {
    $('share-code').select();
    document.execCommand('copy');
    $('btn-copy-code').textContent = '✅ ¡Copiado!';
    setTimeout(() => { $('btn-copy-code').textContent = '📋 Copiar código'; }, 2000);
  });
});

$('btn-whatsapp').addEventListener('click', () => {
  const code = $('share-code').value;
  const msg = `🏆 *Quiniela Mundial 2026*\n👤 ${STATE.playerName} · Grupo: ${STATE.groupName}\n\nMis predicciones (${totalPicks()}/${TOTAL_MATCHES} partidos):\n\n${buildPicksSummary()}\n\n🔑 Código para comparar:\n${code}`;
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

function buildPicksSummary() {
  let lines = [];
  GROUPS.forEach(g => {
    let groupLines = [];
    g.matches.forEach(m => {
      const pick = STATE.picks[m.id];
      if (pick) {
        const result = pick === 'home' ? `${m.home.flag} ${m.home.name}` :
                       pick === 'away' ? `${m.away.flag} ${m.away.name}` :
                       '🤝 Empate';
        groupLines.push(`  Grupo ${g.id}: ${m.home.name} vs ${m.away.name} → ${result}`);
      }
    });
    if (groupLines.length) lines.push(...groupLines);
  });
  return lines.join('\n');
}

$('share-backdrop').addEventListener('click', () => $('modal-share').classList.add('hidden'));
$('btn-close-modal').addEventListener('click', () => $('modal-share').classList.add('hidden'));

// ── COMPARAR ───────────────────────────────
$('compare-backdrop').addEventListener('click', () => $('modal-compare').classList.add('hidden'));
$('btn-close-compare').addEventListener('click', () => $('modal-compare').classList.add('hidden'));

$('btn-do-compare').addEventListener('click', () => {
  const code = $('compare-input').value.trim();
  if (!code) return;
  try {
    const other = JSON.parse(atob(code));
    const otherPicks = other.picks || {};
    const myPicks = STATE.picks;

    let coincidences = 0;
    let myTotal = 0;
    let otherTotal = 0;
    let bothPicked = 0;

    const allMatchIds = GROUPS.flatMap(g => g.matches.map(m => m.id));

    allMatchIds.forEach(id => {
      if (myPicks[id]) myTotal++;
      if (otherPicks[id]) otherTotal++;
      if (myPicks[id] && otherPicks[id]) {
        bothPicked++;
        if (myPicks[id] === otherPicks[id]) coincidences++;
      }
    });

    const pct = bothPicked > 0 ? Math.round((coincidences / bothPicked) * 100) : 0;

    const result = $('compare-result');
    result.classList.remove('hidden');
    result.innerHTML = `
      <div class="compare-stat">
        <span class="label">Comparando con</span>
        <span class="value">${other.playerName || 'Desconocido'}</span>
      </div>
      <div class="compare-stat">
        <span class="label">Partidos en común predichos</span>
        <span class="value">${bothPicked}</span>
      </div>
      <div class="compare-stat">
        <span class="label">Predicciones iguales</span>
        <span class="value">${coincidences}</span>
      </div>
      <div class="compare-stat">
        <span class="label">Coincidencia</span>
        <span class="value" style="color:${pct >= 60 ? 'var(--accent)' : pct >= 40 ? 'var(--accent2)' : 'var(--red)'}">${pct}%</span>
      </div>
      <div class="compare-stat">
        <span class="label">Sus picks</span>
        <span class="value">${otherTotal}/${TOTAL_MATCHES}</span>
      </div>
    `;
  } catch (e) {
    alert('Código inválido. Verifica que copiaste bien el código completo.');
  }
});

// ── INIT ───────────────────────────────────
(function init() {
  // Intentar cargar guardado automático
  try {
    const saved = localStorage.getItem('quiniela_mundial_2026');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.playerName && data.groupName) {
        $('group-name').value = data.groupName;
        $('player-name').value = data.playerName;
        STATE.groupName = data.groupName;
        STATE.playerName = data.playerName;
        STATE.picks = data.picks || {};
      }
    }
  } catch(e) {}
})();
