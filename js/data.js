// =========================================
// FIFA WORLD CUP 2026 - Fase de Grupos
// 48 equipos · 12 Grupos · 72 partidos
// =========================================

const GROUPS = [
  {
    id: "A",
    teams: [
      { name: "México", flag: "🇲🇽" },
      { name: "Sudáfrica", flag: "🇿🇦" },
      { name: "Corea del Sur", flag: "🇰🇷" },
      { name: "República Checa", flag: "🇨🇿" },
    ],
    matches: [
      { id: "A1", home: { name: "México", flag: "🇲🇽" }, away: { name: "Sudáfrica", flag: "🇿🇦" }, date: "11 Jun" },
      { id: "A2", home: { name: "Corea del Sur", flag: "🇰🇷" }, away: { name: "República Checa", flag: "🇨🇿" }, date: "12 Jun" },
      { id: "A3", home: { name: "México", flag: "🇲🇽" }, away: { name: "Corea del Sur", flag: "🇰🇷" }, date: "16 Jun" },
      { id: "A4", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "República Checa", flag: "🇨🇿" }, date: "16 Jun" },
      { id: "A5", home: { name: "México", flag: "🇲🇽" }, away: { name: "República Checa", flag: "🇨🇿" }, date: "20 Jun" },
      { id: "A6", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Corea del Sur", flag: "🇰🇷" }, date: "20 Jun" },
    ],
  },
  {
    id: "B",
    teams: [
      { name: "Canadá", flag: "🇨🇦" },
      { name: "Bosnia y Herz.", flag: "🇧🇦" },
      { name: "Qatar", flag: "🇶🇦" },
      { name: "Suiza", flag: "🇨🇭" },
    ],
    matches: [
      { id: "B1", home: { name: "Canadá", flag: "🇨🇦" }, away: { name: "Bosnia y Herz.", flag: "🇧🇦" }, date: "12 Jun" },
      { id: "B2", home: { name: "Suiza", flag: "🇨🇭" }, away: { name: "Qatar", flag: "🇶🇦" }, date: "12 Jun" },
      { id: "B3", home: { name: "Canadá", flag: "🇨🇦" }, away: { name: "Suiza", flag: "🇨🇭" }, date: "16 Jun" },
      { id: "B4", home: { name: "Bosnia y Herz.", flag: "🇧🇦" }, away: { name: "Qatar", flag: "🇶🇦" }, date: "17 Jun" },
      { id: "B5", home: { name: "Canadá", flag: "🇨🇦" }, away: { name: "Qatar", flag: "🇶🇦" }, date: "21 Jun" },
      { id: "B6", home: { name: "Suiza", flag: "🇨🇭" }, away: { name: "Bosnia y Herz.", flag: "🇧🇦" }, date: "21 Jun" },
    ],
  },
  {
    id: "C",
    // ❌ ANTES: Bosnia y Herz. + Suecia (incorrectos) — ✅ AHORA: Haití + Escocia
    teams: [
      { name: "Brasil", flag: "🇧🇷" },
      { name: "Marruecos", flag: "🇲🇦" },
      { name: "Haití", flag: "🇭🇹" },
      { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    ],
    matches: [
      { id: "C1", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Marruecos", flag: "🇲🇦" }, date: "13 Jun" },
      { id: "C2", home: { name: "Haití", flag: "🇭🇹" }, away: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, date: "13 Jun" },
      { id: "C3", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Haití", flag: "🇭🇹" }, date: "17 Jun" },
      { id: "C4", home: { name: "Marruecos", flag: "🇲🇦" }, away: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, date: "17 Jun" },
      { id: "C5", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Escocia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, date: "21 Jun" },
      { id: "C6", home: { name: "Haití", flag: "🇭🇹" }, away: { name: "Marruecos", flag: "🇲🇦" }, date: "21 Jun" },
    ],
  },
  {
    id: "D",
    teams: [
      { name: "USA", flag: "🇺🇸" },
      { name: "Paraguay", flag: "🇵🇾" },
      { name: "Australia", flag: "🇦🇺" },
      { name: "Turquía", flag: "🇹🇷" },
    ],
    matches: [
      { id: "D1", home: { name: "USA", flag: "🇺🇸" }, away: { name: "Paraguay", flag: "🇵🇾" }, date: "12 Jun" },
      { id: "D2", home: { name: "Australia", flag: "🇦🇺" }, away: { name: "Turquía", flag: "🇹🇷" }, date: "12 Jun" },
      { id: "D3", home: { name: "USA", flag: "🇺🇸" }, away: { name: "Australia", flag: "🇦🇺" }, date: "17 Jun" },
      { id: "D4", home: { name: "Paraguay", flag: "🇵🇾" }, away: { name: "Turquía", flag: "🇹🇷" }, date: "17 Jun" },
      { id: "D5", home: { name: "USA", flag: "🇺🇸" }, away: { name: "Turquía", flag: "🇹🇷" }, date: "21 Jun" },
      { id: "D6", home: { name: "Paraguay", flag: "🇵🇾" }, away: { name: "Australia", flag: "🇦🇺" }, date: "21 Jun" },
    ],
  },
  {
    id: "E",
    // ❌ ANTES: Ecuador (incorrecto) — ✅ AHORA: Ecuador reemplazado por Ecuador... 
    // Grupo E real: Alemania, Curazao, Costa de Marfil, Ecuador ✅ (este sí estaba bien)
    teams: [
      { name: "Alemania", flag: "🇩🇪" },
      { name: "Curazao", flag: "🇨🇼" },
      { name: "Costa de Marfil", flag: "🇨🇮" },
      { name: "Ecuador", flag: "🇪🇨" },
    ],
    matches: [
      { id: "E1", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Curazao", flag: "🇨🇼" }, date: "14 Jun" },
      { id: "E2", home: { name: "Costa de Marfil", flag: "🇨🇮" }, away: { name: "Ecuador", flag: "🇪🇨" }, date: "14 Jun" },
      { id: "E3", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, date: "17 Jun" },
      { id: "E4", home: { name: "Curazao", flag: "🇨🇼" }, away: { name: "Ecuador", flag: "🇪🇨" }, date: "18 Jun" },
      { id: "E5", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Ecuador", flag: "🇪🇨" }, date: "22 Jun" },
      { id: "E6", home: { name: "Curazao", flag: "🇨🇼" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, date: "22 Jun" },
    ],
  },
  {
    id: "F",
    // ❌ ANTES: Portugal, Francia, Uruguay, Arabia Saudita (todo incorrecto)
    // ✅ AHORA: Países Bajos, Japón, Túnez + playoff europeo (se usa Túnez como 4º confirmado)
    teams: [
      { name: "Países Bajos", flag: "🇳🇱" },
      { name: "Japón", flag: "🇯🇵" },
      { name: "Túnez", flag: "🇹🇳" },
      { name: "Suecia", flag: "🇸🇪" }, // ← Senegal está en Grupo I; aquí era playoff europeo → se pone el equipo confirmado
    ],
    matches: [
      { id: "F1", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Japón", flag: "🇯🇵" }, date: "14 Jun" },
      { id: "F2", home: { name: "Túnez", flag: "🇹🇳" }, away: { name: "Suecia", flag: "🇸🇪" }, date: "14 Jun" },
      { id: "F3", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Túnez", flag: "🇹🇳" }, date: "19 Jun" },
      { id: "F4", home: { name: "Japón", flag: "🇯🇵" }, away: { name: "Suecia", flag: "🇸🇪" }, date: "19 Jun" },
      { id: "F5", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Suecia", flag: "🇸🇪" }, date: "23 Jun" },
      { id: "F6", home: { name: "Japón", flag: "🇯🇵" }, away: { name: "Túnez", flag: "🇹🇳" }, date: "23 Jun" },
    ],
  },
  {
    id: "G",
    // ❌ ANTES: España, Camerún, Chile, Eslovaquia (todos incorrectos)
    // ✅ AHORA: Bélgica, Egipto, Irán, Nueva Zelanda
    teams: [
      { name: "Bélgica", flag: "🇧🇪" },
      { name: "Egipto", flag: "🇪🇬" },
      { name: "Irán", flag: "🇮🇷" },
      { name: "Nueva Zelanda", flag: "🇳🇿" },
    ],
    matches: [
      { id: "G1", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Egipto", flag: "🇪🇬" }, date: "15 Jun" },
      { id: "G2", home: { name: "Irán", flag: "🇮🇷" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, date: "15 Jun" },
      { id: "G3", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Irán", flag: "🇮🇷" }, date: "19 Jun" },
      { id: "G4", home: { name: "Egipto", flag: "🇪🇬" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, date: "19 Jun" },
      { id: "G5", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, date: "23 Jun" },
      { id: "G6", home: { name: "Egipto", flag: "🇪🇬" }, away: { name: "Irán", flag: "🇮🇷" }, date: "23 Jun" },
    ],
  },
  {
    id: "H",
    // ❌ ANTES: Inglaterra, Senegal, Irán, Nueva Zelanda (incorrectos)
    // ✅ AHORA: España, Cabo Verde, Arabia Saudí, Uruguay
    teams: [
      { name: "España", flag: "🇪🇸" },
      { name: "Cabo Verde", flag: "🇨🇻" },
      { name: "Arabia Saudí", flag: "🇸🇦" },
      { name: "Uruguay", flag: "🇺🇾" },
    ],
    matches: [
      { id: "H1", home: { name: "España", flag: "🇪🇸" }, away: { name: "Cabo Verde", flag: "🇨🇻" }, date: "15 Jun" },
      { id: "H2", home: { name: "Arabia Saudí", flag: "🇸🇦" }, away: { name: "Uruguay", flag: "🇺🇾" }, date: "15 Jun" },
      { id: "H3", home: { name: "España", flag: "🇪🇸" }, away: { name: "Arabia Saudí", flag: "🇸🇦" }, date: "19 Jun" },
      { id: "H4", home: { name: "Cabo Verde", flag: "🇨🇻" }, away: { name: "Uruguay", flag: "🇺🇾" }, date: "19 Jun" },
      { id: "H5", home: { name: "España", flag: "🇪🇸" }, away: { name: "Uruguay", flag: "🇺🇾" }, date: "23 Jun" },
      { id: "H6", home: { name: "Cabo Verde", flag: "🇨🇻" }, away: { name: "Arabia Saudí", flag: "🇸🇦" }, date: "23 Jun" },
    ],
  },
  {
    id: "I",
    // ❌ ANTES: Países Bajos, Japón, Túnez, Dinamarca (incorrectos)
    // ✅ AHORA: Francia, Senegal, Irak, Noruega
    teams: [
      { name: "Francia", flag: "🇫🇷" },
      { name: "Senegal", flag: "🇸🇳" },
      { name: "Irak", flag: "🇮🇶" },
      { name: "Noruega", flag: "🇳🇴" },
    ],
    matches: [
      { id: "I1", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Senegal", flag: "🇸🇳" }, date: "16 Jun" },
      { id: "I2", home: { name: "Irak", flag: "🇮🇶" }, away: { name: "Noruega", flag: "🇳🇴" }, date: "16 Jun" },
      { id: "I3", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Irak", flag: "🇮🇶" }, date: "20 Jun" },
      { id: "I4", home: { name: "Senegal", flag: "🇸🇳" }, away: { name: "Noruega", flag: "🇳🇴" }, date: "20 Jun" },
      { id: "I5", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Noruega", flag: "🇳🇴" }, date: "24 Jun" },
      { id: "I6", home: { name: "Senegal", flag: "🇸🇳" }, away: { name: "Irak", flag: "🇮🇶" }, date: "24 Jun" },
    ],
  },
  {
    id: "J",
    // ❌ ANTES: Argentina, Sudáfrica, Rumania, Polonia (incorrectos)
    // ✅ AHORA: Argentina, Austria, Argelia, Jordania
    teams: [
      { name: "Argentina", flag: "🇦🇷" },
      { name: "Austria", flag: "🇦🇹" },
      { name: "Argelia", flag: "🇩🇿" },
      { name: "Jordania", flag: "🇯🇴" },
    ],
    matches: [
      { id: "J1", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Austria", flag: "🇦🇹" }, date: "15 Jun" },
      { id: "J2", home: { name: "Argelia", flag: "🇩🇿" }, away: { name: "Jordania", flag: "🇯🇴" }, date: "15 Jun" },
      { id: "J3", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Argelia", flag: "🇩🇿" }, date: "19 Jun" },
      { id: "J4", home: { name: "Austria", flag: "🇦🇹" }, away: { name: "Jordania", flag: "🇯🇴" }, date: "19 Jun" },
      { id: "J5", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Jordania", flag: "🇯🇴" }, date: "23 Jun" },
      { id: "J6", home: { name: "Austria", flag: "🇦🇹" }, away: { name: "Argelia", flag: "🇩🇿" }, date: "23 Jun" },
    ],
  },
  {
    id: "K",
    // ❌ ANTES: Bélgica, México, Colombia, Haití (incorrectos — Bélgica y México estaban en otros grupos)
    // ✅ AHORA: Portugal, RD Congo, Uzbekistán, Colombia
    teams: [
      { name: "Portugal", flag: "🇵🇹" },
      { name: "RD Congo", flag: "🇨🇩" },
      { name: "Uzbekistán", flag: "🇺🇿" },
      { name: "Colombia", flag: "🇨🇴" },
    ],
    matches: [
      { id: "K1", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "RD Congo", flag: "🇨🇩" }, date: "17 Jun" },
      { id: "K2", home: { name: "Uzbekistán", flag: "🇺🇿" }, away: { name: "Colombia", flag: "🇨🇴" }, date: "17 Jun" },
      { id: "K3", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Uzbekistán", flag: "🇺🇿" }, date: "21 Jun" },
      { id: "K4", home: { name: "RD Congo", flag: "🇨🇩" }, away: { name: "Colombia", flag: "🇨🇴" }, date: "21 Jun" },
      { id: "K5", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Colombia", flag: "🇨🇴" }, date: "25 Jun" },
      { id: "K6", home: { name: "RD Congo", flag: "🇨🇩" }, away: { name: "Uzbekistán", flag: "🇺🇿" }, date: "25 Jun" },
    ],
  },
  {
    id: "L",
    // ❌ ANTES: Italia, Nigeria, Albania, Venezuela (todos incorrectos — Italia no clasificó)
    // ✅ AHORA: Inglaterra, Croacia, Ghana, Panamá
    teams: [
      { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { name: "Croacia", flag: "🇭🇷" },
      { name: "Ghana", flag: "🇬🇭" },
      { name: "Panamá", flag: "🇵🇦" },
    ],
    matches: [
      { id: "L1", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Croacia", flag: "🇭🇷" }, date: "16 Jun" },
      { id: "L2", home: { name: "Ghana", flag: "🇬🇭" }, away: { name: "Panamá", flag: "🇵🇦" }, date: "16 Jun" },
      { id: "L3", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Ghana", flag: "🇬🇭" }, date: "20 Jun" },
      { id: "L4", home: { name: "Croacia", flag: "🇭🇷" }, away: { name: "Panamá", flag: "🇵🇦" }, date: "20 Jun" },
      { id: "L5", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Panamá", flag: "🇵🇦" }, date: "24 Jun" },
      { id: "L6", home: { name: "Croacia", flag: "🇭🇷" }, away: { name: "Ghana", flag: "🇬🇭" }, date: "24 Jun" },
    ],
  },
];

// Total de partidos en fase de grupos: 72
const TOTAL_MATCHES = GROUPS.reduce((sum, g) => sum + g.matches.length, 0);