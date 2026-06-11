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
      { name: "Suiza", flag: "🇨🇭" },
      { name: "Qatar", flag: "🇶🇦" },
      { name: "Bosnia y Herz.", flag: "🇧🇦" },
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
    teams: [
      { name: "Brasil", flag: "🇧🇷" },
      { name: "Marruecos", flag: "🇲🇦" },
      { name: "Bosnia y Herz.", flag: "🇧🇦" },
      { name: "Suecia", flag: "🇸🇪" },
    ],
    matches: [
      { id: "C1", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Marruecos", flag: "🇲🇦" }, date: "13 Jun" },
      { id: "C2", home: { name: "Croacia", flag: "🇭🇷" }, away: { name: "Suecia", flag: "🇸🇪" }, date: "13 Jun" },
      { id: "C3", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Croacia", flag: "🇭🇷" }, date: "17 Jun" },
      { id: "C4", home: { name: "Marruecos", flag: "🇲🇦" }, away: { name: "Suecia", flag: "🇸🇪" }, date: "17 Jun" },
      { id: "C5", home: { name: "Brasil", flag: "🇧🇷" }, away: { name: "Suecia", flag: "🇸🇪" }, date: "21 Jun" },
      { id: "C6", home: { name: "Croacia", flag: "🇭🇷" }, away: { name: "Marruecos", flag: "🇲🇦" }, date: "21 Jun" },
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
    teams: [
      { name: "Alemania", flag: "🇩🇪" },
      { name: "Ecuador", flag: "🇪🇨" },
      { name: "Costa de Marfil", flag: "🇨🇮" },
      { name: "Curazao", flag: "🇨🇼" },
    ],
    matches: [
      { id: "E1", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Ecuador", flag: "🇪🇨" }, date: "13 Jun" },
      { id: "E2", home: { name: "Costa de Marfil", flag: "🇨🇮" }, away: { name: "Curazao", flag: "🇨🇼" }, date: "13 Jun" },
      { id: "E3", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, date: "17 Jun" },
      { id: "E4", home: { name: "Ecuador", flag: "🇪🇨" }, away: { name: "Curazao", flag: "🇨🇼" }, date: "18 Jun" },
      { id: "E5", home: { name: "Alemania", flag: "🇩🇪" }, away: { name: "Curazao", flag: "🇨🇼" }, date: "22 Jun" },
      { id: "E6", home: { name: "Ecuador", flag: "🇪🇨" }, away: { name: "Costa de Marfil", flag: "🇨🇮" }, date: "22 Jun" },
    ],
  },
  {
    id: "F",
    teams: [
      { name: "Portugal", flag: "🇵🇹" },
      { name: "Francia", flag: "🇫🇷" },
      { name: "Uruguay", flag: "🇺🇾" },
      { name: "Arabia Saudita", flag: "🇸🇦" },
    ],
    matches: [
      { id: "F1", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Francia", flag: "🇫🇷" }, date: "14 Jun" },
      { id: "F2", home: { name: "Uruguay", flag: "🇺🇾" }, away: { name: "Arabia Saudita", flag: "🇸🇦" }, date: "14 Jun" },
      { id: "F3", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Uruguay", flag: "🇺🇾" }, date: "18 Jun" },
      { id: "F4", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Arabia Saudita", flag: "🇸🇦" }, date: "18 Jun" },
      { id: "F5", home: { name: "Portugal", flag: "🇵🇹" }, away: { name: "Arabia Saudita", flag: "🇸🇦" }, date: "22 Jun" },
      { id: "F6", home: { name: "Francia", flag: "🇫🇷" }, away: { name: "Uruguay", flag: "🇺🇾" }, date: "22 Jun" },
    ],
  },
  {
    id: "G",
    teams: [
      { name: "España", flag: "🇪🇸" },
      { name: "Camerún", flag: "🇨🇲" },
      { name: "Chile", flag: "🇨🇱" },
      { name: "Eslovaquia", flag: "🇸🇰" },
    ],
    matches: [
      { id: "G1", home: { name: "España", flag: "🇪🇸" }, away: { name: "Camerún", flag: "🇨🇲" }, date: "14 Jun" },
      { id: "G2", home: { name: "Chile", flag: "🇨🇱" }, away: { name: "Eslovaquia", flag: "🇸🇰" }, date: "14 Jun" },
      { id: "G3", home: { name: "España", flag: "🇪🇸" }, away: { name: "Chile", flag: "🇨🇱" }, date: "18 Jun" },
      { id: "G4", home: { name: "Camerún", flag: "🇨🇲" }, away: { name: "Eslovaquia", flag: "🇸🇰" }, date: "18 Jun" },
      { id: "G5", home: { name: "España", flag: "🇪🇸" }, away: { name: "Eslovaquia", flag: "🇸🇰" }, date: "23 Jun" },
      { id: "G6", home: { name: "Camerún", flag: "🇨🇲" }, away: { name: "Chile", flag: "🇨🇱" }, date: "23 Jun" },
    ],
  },
  {
    id: "H",
    teams: [
      { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { name: "Senegal", flag: "🇸🇳" },
      { name: "Irán", flag: "🇮🇷" },
      { name: "Nueva Zelanda", flag: "🇳🇿" },
    ],
    matches: [
      { id: "H1", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Senegal", flag: "🇸🇳" }, date: "15 Jun" },
      { id: "H2", home: { name: "Irán", flag: "🇮🇷" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, date: "15 Jun" },
      { id: "H3", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Irán", flag: "🇮🇷" }, date: "19 Jun" },
      { id: "H4", home: { name: "Senegal", flag: "🇸🇳" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, date: "19 Jun" },
      { id: "H5", home: { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Nueva Zelanda", flag: "🇳🇿" }, date: "23 Jun" },
      { id: "H6", home: { name: "Senegal", flag: "🇸🇳" }, away: { name: "Irán", flag: "🇮🇷" }, date: "23 Jun" },
    ],
  },
  {
    id: "I",
    teams: [
      { name: "Países Bajos", flag: "🇳🇱" },
      { name: "Japón", flag: "🇯🇵" },
      { name: "Túnez", flag: "🇹🇳" },
      { name: "Dinamarca", flag: "🇩🇰" },
    ],
    matches: [
      { id: "I1", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Japón", flag: "🇯🇵" }, date: "15 Jun" },
      { id: "I2", home: { name: "Túnez", flag: "🇹🇳" }, away: { name: "Dinamarca", flag: "🇩🇰" }, date: "15 Jun" },
      { id: "I3", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Túnez", flag: "🇹🇳" }, date: "19 Jun" },
      { id: "I4", home: { name: "Japón", flag: "🇯🇵" }, away: { name: "Dinamarca", flag: "🇩🇰" }, date: "19 Jun" },
      { id: "I5", home: { name: "Países Bajos", flag: "🇳🇱" }, away: { name: "Dinamarca", flag: "🇩🇰" }, date: "23 Jun" },
      { id: "I6", home: { name: "Japón", flag: "🇯🇵" }, away: { name: "Túnez", flag: "🇹🇳" }, date: "23 Jun" },
    ],
  },
  {
    id: "J",
    teams: [
      { name: "Argentina", flag: "🇦🇷" },
      { name: "Sudáfrica", flag: "🇿🇦" },
      { name: "Rumania", flag: "🇷🇴" },
      { name: "Polonia", flag: "🇵🇱" },
    ],
    matches: [
      { id: "J1", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Sudáfrica", flag: "🇿🇦" }, date: "15 Jun" },
      { id: "J2", home: { name: "Rumania", flag: "🇷🇴" }, away: { name: "Polonia", flag: "🇵🇱" }, date: "15 Jun" },
      { id: "J3", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Rumania", flag: "🇷🇴" }, date: "19 Jun" },
      { id: "J4", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Polonia", flag: "🇵🇱" }, date: "19 Jun" },
      { id: "J5", home: { name: "Argentina", flag: "🇦🇷" }, away: { name: "Polonia", flag: "🇵🇱" }, date: "23 Jun" },
      { id: "J6", home: { name: "Sudáfrica", flag: "🇿🇦" }, away: { name: "Rumania", flag: "🇷🇴" }, date: "23 Jun" },
    ],
  },
  {
    id: "K",
    teams: [
      { name: "Bélgica", flag: "🇧🇪" },
      { name: "México", flag: "🇲🇽" },
      { name: "Colombia", flag: "🇨🇴" },
      { name: "Haiti", flag: "🇭🇹" },
    ],
    matches: [
      { id: "K1", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Colombia", flag: "🇨🇴" }, date: "16 Jun" },
      { id: "K2", home: { name: "México", flag: "🇲🇽" }, away: { name: "Haiti", flag: "🇭🇹" }, date: "16 Jun" },
      { id: "K3", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "México", flag: "🇲🇽" }, date: "20 Jun" },
      { id: "K4", home: { name: "Colombia", flag: "🇨🇴" }, away: { name: "Haiti", flag: "🇭🇹" }, date: "20 Jun" },
      { id: "K5", home: { name: "Bélgica", flag: "🇧🇪" }, away: { name: "Haiti", flag: "🇭🇹" }, date: "24 Jun" },
      { id: "K6", home: { name: "México", flag: "🇲🇽" }, away: { name: "Colombia", flag: "🇨🇴" }, date: "24 Jun" },
    ],
  },
  {
    id: "L",
    teams: [
      { name: "Italia", flag: "🇮🇹" },
      { name: "Nigeria", flag: "🇳🇬" },
      { name: "Albania", flag: "🇦🇱" },
      { name: "Venezuela", flag: "🇻🇪" },
    ],
    matches: [
      { id: "L1", home: { name: "Italia", flag: "🇮🇹" }, away: { name: "Nigeria", flag: "🇳🇬" }, date: "16 Jun" },
      { id: "L2", home: { name: "Albania", flag: "🇦🇱" }, away: { name: "Venezuela", flag: "🇻🇪" }, date: "16 Jun" },
      { id: "L3", home: { name: "Italia", flag: "🇮🇹" }, away: { name: "Albania", flag: "🇦🇱" }, date: "20 Jun" },
      { id: "L4", home: { name: "Nigeria", flag: "🇳🇬" }, away: { name: "Venezuela", flag: "🇻🇪" }, date: "20 Jun" },
      { id: "L5", home: { name: "Italia", flag: "🇮🇹" }, away: { name: "Venezuela", flag: "🇻🇪" }, date: "24 Jun" },
      { id: "L6", home: { name: "Nigeria", flag: "🇳🇬" }, away: { name: "Albania", flag: "🇦🇱" }, date: "24 Jun" },
    ],
  },
];

// Total de partidos en fase de grupos: 72
const TOTAL_MATCHES = GROUPS.reduce((sum, g) => sum + g.matches.length, 0);
