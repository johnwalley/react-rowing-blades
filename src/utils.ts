type Category = "cambridge" | "international" | "oxford" | "uk";

const clubs: { [category in Category]: any[] } = {
  cambridge: [],
  international: [],
  oxford: [],
  uk: [],
};

const shortNames: { [category in Category]: object } = {
  cambridge: {},
  international: {},
  oxford: {},
  uk: {},
};

const shortShortNames: { [category in Category]: object } = {
  cambridge: {},
  international: {},
  oxford: {},
  uk: {},
};

const names: { [category in Category]: object } = {
  cambridge: {},
  international: {},
  oxford: {},
  uk: {},
};

const abbreviations: { [category in Category]: object } = {
  cambridge: {},
  international: {},
  oxford: {},
  uk: {},
};

/*
  ley: 'Leys School Boat Club',
  trc: 'Thames Rowing Club',
*/

clubs.uk = [
  "abn",
  "abs",
  "age",
  "akn",
  "avn",
  "bau",
  "bbl",
  "bed",
  "ber",
  "bms",
  "bou",
  "brd",
  "bra",
  "cab",
  "cam",
  "cbs",
  "cfu",
  "cha",
  "cls",
  "cnn",
  "crc",
  "cox",
  "dur",
  "dus",
  "etn",
  "glw",
  "iel",
  "imp",
  "ldr",
  "ldu",
  "mau",
  "oxb",
  "pet",
  "rdu",
  "rho",
  "rob",
  "sne",
  "son",
  "srg",
  "tss",
  "twk",
  "ucl",
  "uyo",
  "vet",
  "wrc",
  "xpr",
  "yrk",
];

abbreviations.uk = {
  A: "Addenbrooke's",
  CB: "Camb Blue",
  CV: "Camb Veterans",
  Ct: "Cantabs",
  Cy: "City",
  Ch: "Chesterton",
  Ca: "Caius",
  CT: "CCAT",
  Cr: "Christ's",
  Cu: "Churchill",
  CH: "Clare Hall",
  Cl: "Clare",
  CC: "Corpus Christi",
  COT: "Champs",
  Dn: "Domino",
  Dw: "Darwin",
  D: "Downing",
  E: "Emmanuel",
  F: "Fitzwilliam",
  FP: "Free Press",
  G: "Girton",
  H: "Homerton",
  HH: "Hughes Hall",
  Hn: "Hornets",
  I: "Ionica",
  IOE: "Isle of Ely",
  J: "Jesus",
  K: "King's",
  L: "LMBC",
  LC: "Lucy Cavendish",
  LS: "Lady Somerset",
  M: "Magdalene",
  ME: "Maximum Entropy",
  MM: "Mott MacDonald",
  NH: "New Hall",
  N: "Newnham",
  NN: "99",
  P: "Peterborough",
  Pb: "Pembroke",
  Ph: "Peterhouse",
  QM: "QMABC",
  Q: "Queens'",
  RR: "Rob Roy",
  R: "Robinson",
  Sm: "Simoco",
  SI: "St Ives",
  SN: "St Neots",
  SR: "St Radegund",
  S: "Selwyn",
  SS: "Sidney Sussex",
  SC: "St Catharine's",
  SE: "St Edmund's",
  T: "1st & 3rd",
  TC: "Theological Colleges",
  Te: "Telephones",
  TH: "Trinity Hall",
  US: "Univ Sports",
  VS: "Vet School",
  W: "Wolfson",
  X: "X-Press",
};

shortShortNames.uk = {
  abn: "Abingdon",
  abs: "Abingdon School",
  age: "Agecroft",
  akn: "Auriol Kensington",
  avn: "Avon County",
  bau: "Bath University",
  bbl: "Barnes Bridge Ladies",
  bed: "Bedford",
  ber: "Berwick",
  bms: "Bedford Modern School",
  bou: "Bournemouth University",
  brd: "Bradford",
  bra: "Bristol Ariel",
  cab: "Cantabs",
  cam: "City",
  cbs: "Cambois",
  cfu: "Cardiff University",
  cha: "Champs",
  cls: "Chester-Le-Street",
  cnn: "99",
  cox: "City of Oxford",
  crc: "Chesterton",
  dur: "Durham",
  dus: "Durham School",
  etn: "Eton College",
  glw: "Glasgow",
  iel: "Isle of Ely",
  imp: "Imperial College",
  ldr: "Leander",
  ldu: "Leeds University",
  ley: "Leys School",
  mau: "Manchester University",
  oxb: "Oxford Brookes",
  pet: "Peterborough",
  rdu: "Reading University",
  rho: "Royal Holloway",
  rob: "Rob Roy",
  sne: "St Neots",
  son: "Sons of the Thames",
  srg: "St Radegund",
  trc: "Thames",
  tss: "Tideway Scullers",
  twk: "Twickenham",
  ucl: "University College London",
  uyo: "York University",
  vet: "Camb Veterans",
  wrc: "Wallingford",
  xpr: "X-Press",
  yrk: "York City",
};

shortNames.uk = {
  abn: "Abingdon",
  abs: "Abingdon School",
  age: "Agecroft",
  akn: "Auriol Kensington",
  avn: "Avon County",
  bau: "Bath University",
  bbl: "Barnes Bridge Ladies",
  bed: "Bedford",
  ber: "Berwick",
  bms: "Bedford Modern School",
  bou: "Bournemouth University",
  brd: "Bradford",
  bra: "Bristol Ariel",
  cab: "Cantabrigian",
  cam: "City of Cambridge",
  cbs: "Cambois",
  cfu: "Cardiff University",
  cha: "Champion Of The Thames",
  cls: "Chester-Le-Street",
  cnn: "Cambridge 99",
  cox: "City of Oxford",
  crc: "Chesterton",
  dur: "Durham",
  dus: "Durham School",
  etn: "Eton College",
  glw: "Glasgow",
  iel: "Isle of Ely",
  imp: "Imperial College",
  ldr: "Leander",
  ldu: "Leeds University",
  ley: "Leys School",
  mau: "Manchester University",
  oxb: "Oxford Brookes University",
  pet: "Peterborough City",
  rdu: "Reading University",
  rho: "Royal Holloway",
  rob: "Rob Roy",
  sne: "St Neots",
  son: "Sons of the Thames",
  srg: "St Radegund",
  trc: "Thames",
  tss: "Tideway Scullers School",
  twk: "Twickenham",
  ucl: "University College London",
  uyo: "York University",
  vet: "Cambridge Veterans",
  wrc: "Wallingford",
  xpr: "X-Press",
  yrk: "York City",
};

names.uk = {
  abn: "Abingdon Rowing Club",
  abs: "Abingdon School Rowing Club",
  age: "Agecroft Rowing Club",
  akn: "Auriol Kensington Rowing Club",
  avn: "Avon County Rowing Club",
  bau: "Bath University Boat Club",
  bbl: "Barnes Bridge Ladies Rowing Club",
  bed: "Bedford Amateur Rowing Club",
  ber: "Berwick Rowing Club",
  bms: "Bedford Modern School Boat Club",
  bou: "Bournemouth University Boat Club",
  brd: "Bradford Amateur Rowing Club",
  bra: "Bristol Ariel Rowing Club",
  cab: "Cantabrigian Rowing Club",
  cam: "City of Cambridge Rowing Club",
  cbs: "Cambois Rowing Club",
  cfu: "Cardiff University Rowing Club",
  cha: "Champion Of The Thames Rowing Club",
  cls: "Chester-Le-Street Amateur Rowing Club",
  cnn: "Cambridge 99 Rowing Club",
  cox: "City of Oxford Rowing Club",
  crc: "Chesterton Rowing Club",
  dur: "Durham Amateur Rowing Club",
  dus: "Durham School Boat Club",
  etn: "Eton College Boat Club",
  glw: "Glasgow Rowing Club",
  iel: "Isle of Ely Rowing Club",
  imp: "Imperial College Boat Club",
  ldr: "Leander Club",
  ldu: "University of Leeds Boat Club",
  ley: "Leys School Boat Club",
  oxb: "Oxford Brookes University Boat Club",
  pet: "Peterborough City Rowing Club",
  rdu: "Reading University Boat Club",
  rho: "Royal Holloway Boat Club",
  rob: "Rob Roy Boat Club",
  sne: "St Neots Rowing Club",
  son: "Sons of the Thames Rowing Club",
  srg: "St Radegund Boat Club",
  trc: "Thames Rowing Club",
  tss: "Tideway Scullers School",
  twk: "Twickenham Rowing Club",
  ucl: "University College London Boat Club",
  uyo: "University of York Boat Club",
  vet: "Camb Veterans Rowing Club",
  wrc: "Wallingford Rowing Club",
  xpr: "X-Press Boat Club",
  yrk: "York City Rowing Club",
};

clubs.cambridge = [
  "ad",
  "aru",
  "cai",
  "cco",
  "chu",
  "cla",
  "clh",
  "cor",
  "daw",
  "dow",
  "emm",
  "fit",
  "ftt",
  "gir",
  "hom",
  "huh",
  "jec",
  "kcb",
  "lcc",
  "lmb",
  "mgd",
  "mec",
  "nnm",
  "pem",
  "pbc",
  "qcc",
  "roc",
  "sel",
  "sid",
  "scc",
  "sec",
  "trh",
  "woc",
];

abbreviations.cambridge = {
  A: "Addenbrooke's",
  AR: "Anglia Ruskin",
  Ca: "Caius",
  CC: "Corpus Christi",
  CH: "Clare Hall",
  Cl: "Clare",
  Cr: "Christ's",
  CT: "CCAT",
  Cu: "Churchill",
  D: "Downing",
  Dw: "Darwin",
  E: "Emmanuel",
  F: "Fitzwilliam",
  G: "Girton",
  H: "Homerton",
  HH: "Hughes Hall",
  HHL: "Hughes/Lucy",
  J: "Jesus",
  K: "King's",
  L: "Lady Margaret",
  LC: "Lucy Cavendish",
  M: "Magdalene",
  ME: "Murray Edwards",
  N: "Newnham",
  NH: "New Hall",
  Pb: "Pembroke",
  Ph: "Peterhouse",
  Q: "Queens'",
  QM: "QMABC",
  R: "Robinson",
  S: "Selwyn",
  SC: "St. Catharine's",
  SE: "St. Edmund's",
  SS: "Sidney Sussex",
  T: "First and Third",
  TC: "Theological Colleges",
  TH: "Trinity Hall",
  VS: "Vet School",
  W: "Wolfson",
};

shortShortNames.cambridge = {
  ad: "Addenbrooke's",
  aru: "Anglia Ruskin",
  cai: "Caius",
  cco: "Christ's",
  chu: "Churchill",
  cla: "Clare",
  clh: "Clare Hall",
  cor: "Corpus Christi",
  daw: "Darwin",
  dow: "Downing",
  emm: "Emmanuel",
  ftt: "First and Third",
  fit: "Fitzwilliam",
  gir: "Girton",
  hom: "Homerton",
  huh: "Hughes Hall",
  jec: "Jesus",
  kcb: "King's",
  lcc: "Lucy Cavendish",
  lmb: "Lady Margaret",
  mgd: "Magdalene",
  mec: "Murray Edwards",
  nnm: "Newnham",
  pem: "Pembroke",
  pbc: "Peterhouse",
  qcc: "Queens'",
  roc: "Robinson",
  sel: "Selwyn",
  sid: "Sidney Sussex",
  scc: "St. Catharine's",
  sec: "St. Edmund's",
  trh: "Trinity Hall",
  woc: "Wolfson",
};

shortNames.cambridge = {
  ad: "Addenbrooke's",
  aru: "Anglia Ruskin",
  cai: "Caius",
  cco: "Christ's College",
  chu: "Churchill College",
  cla: "Clare",
  clh: "Clare Hall",
  cor: "Corpus Christi College",
  daw: "Darwin College",
  dow: "Downing College",
  emm: "Emmanuel",
  ftt: "First and Third",
  fit: "Fitzwilliam College",
  gir: "Girton College",
  hom: "Homerton College",
  huh: "Hughes Hall",
  jec: "Jesus College",
  kcb: "King's College",
  lcc: "Lucy Cavendish College",
  lmb: "Lady Margaret",
  mgd: "Magdalene",
  mec: "Murray Edwards College",
  nnm: "Newnham College",
  pem: "Pembroke College",
  pbc: "Peterhouse",
  qcc: "Queens' College",
  roc: "Robinson College",
  sel: "Selwyn College",
  sid: "Sidney Sussex",
  scc: "St. Catharine's College",
  sec: "St. Edmund's College",
  trh: "Trinity Hall",
  woc: "Wolfson College",
};

names.cambridge = {
  ad: "Addenbrooke's Student Boat Club",
  aru: "Anglia Ruskin Boat Club",
  cai: "Caius Boat Club",
  cco: "Christ's College Boat Club",
  chu: "Churchill College Boat Club",
  cla: "Clare Boat Club",
  clh: "Clare Hall Boat Club",
  cor: "Corpus Christi College Boat Club",
  daw: "Darwin College Boat Club",
  dow: "Downing College Boat Club",
  emm: "Emmanuel Boat Club",
  ftt: "First and Third Boat Club",
  fit: "Fitzwilliam College Boat Club",
  gir: "Girton College Boat Club",
  hom: "Homerton College Boat Club",
  huh: "Hughes Hall Boat Club",
  jec: "Jesus College Boat Club",
  kcb: "King's College Boat Club",
  lcc: "Lucy Cavendish College Boat Club",
  lmb: "Lady Margaret Boat Club",
  mgd: "Magdalene Boat Club",
  mec: "Murray Edwards College Boat Club",
  nnm: "Newnham College Boat Club",
  pem: "Pembroke College Boat Club",
  pbc: "Peterhouse Boat Club",
  qcc: "Queens' College Boat Club",
  roc: "Robinson College Boat Club",
  sel: "Selwyn College Boat Club",
  sid: "Sidney Sussex Boat Club",
  scc: "St. Catharine's College Boat Club",
  sec: "St. Edmund's College Boat Club",
  trh: "Trinity Hall Boat Club",
  woc: "Wolfson College Boat Club",
};

/*
  osg: 'Osler House Boat Club',
  sjo: 'St John's College Boat Club',
  wro: 'Worcester College Boat Club',
*/

clubs.oxford = [
  "bal",
  "brc",
  "chb",
  "coo",
  "exc",
  "gtm",
  "hec",
  "jeo",
  "keb",
  "lic",
  "lin",
  "lmh",
  "mag",
  "man",
  "mer",
  "nec",
  "oro",
  "osg",
  "pmb",
  "qco",
  "rpc",
  "som",
  "sac",
  "say",
  "sbh",
  "sco",
  "seh",
  "shi",
  "shg",
  "spc",
  "tro",
  "uxo",
  "wad",
  "woo",
  "wro",
];

abbreviations.oxford = {
  B: "Balliol",
  Br: "Brasenose",
  Ch: "Christ Church",
  Co: "Corpus Christi",
  E: "Exeter",
  GT: "Green Templeton",
  H: "Hertford",
  J: "Jesus",
  K: "Keble",
  L: "Linacre",
  Lc: "Lincoln",
  LM: "L.M.H.",
  Mg: "Magdalen",
  Mf: "Mansfield",
  Mt: "Merton",
  N: "New College",
  O: "Oriel",
  OG: "Osler-Green",
  P: "Pembroke",
  Q: "Queen's",
  R: "Regent's Park",
  SE: "S.E.H.",
  S: "Somerville",
  SAn: "St Anne's",
  SAt: "St Antony's",
  SB: "St Benet's Hall",
  SC: "St Catherine's",
  SHi: "St Hilda's",
  SHu: "St Hugh's",
  SJ: "St John's",
  SP: "St Peter's",
  T: "Trinity",
  U: "University",
  Wh: "Wadham",
  Wf: "Wolfson",
  Wt: "Worcester",
};

shortShortNames.oxford = {
  bal: "Balliol",
  brc: "Brasenose",
  chb: "Christ Church",
  coo: "Corpus Christi",
  exc: "Exeter",
  gtm: "Green Templeton",
  hec: "Hertford",
  jeo: "Jesus",
  keb: "Keble",
  lic: "Lincoln",
  lin: "Linacre",
  lmh: "L.M.H.",
  mag: "Magdalen",
  man: "Mansfield",
  mer: "Merton",
  nec: "New College",
  oro: "Oriel",
  osg: "Osler House",
  pmb: "Pembroke",
  qco: "Queen's",
  rpc: "Regent's Park",
  som: "Somerville",
  sac: "St Anne's",
  say: "St Antony's",
  sbh: "St Benet's Hall",
  sco: "St Catherine's",
  seh: "S.E.H.",
  shi: "St Hilda's",
  shg: "St Hugh's",
  sjo: "St John's",
  spc: "St Peter's",
  tro: "Trinity",
  uxo: "University",
  wad: "Wadham",
  woo: "Wolfson",
  wro: "Worcester",
};

shortNames.oxford = {
  bal: "Balliol College",
  brc: "Brasenose College",
  chb: "Christ Church",
  coo: "Corpus Christi College",
  exc: "Exeter College",
  gtm: "Green Templeton",
  hec: "Hertford College",
  jeo: "Jesus College",
  keb: "Keble College",
  lic: "Lincoln College",
  lin: "Linacre College",
  lmh: "Lady Margaret Hall",
  mag: "Magdalen College",
  man: "Mansfield College",
  mer: "Merton College",
  nec: "New College",
  oro: "Oriel College",
  osg: "Osler House",
  pmb: "Pembroke College",
  qco: "Queen's College",
  rpc: "Regent's Park College",
  som: "Somerville College",
  sac: "St Anne's College",
  say: "St Antony's College",
  sbh: "St Benet's Hall",
  sco: "St Catherine's College",
  seh: "St Edmund Hall",
  shi: "St Hilda's College",
  shg: "St Hugh's College",
  sjo: "St John's College",
  spc: "St Peter's College",
  tro: "Trinity College",
  uxo: "University College",
  wad: "Wadham College",
  woo: "Wolfson College",
  wro: "Worcester College",
};

names.oxford = {
  bal: "Balliol College Boat Club",
  brc: "Brasenose College Boat Club",
  chb: "Christ Church Boat Club",
  coo: "Corpus Christi College Boat Club",
  exc: "Exeter College Boat Club",
  gtm: "Green Templeton Boat Club",
  hec: "Hertford College Boat Club",
  jeo: "Jesus College Boat Club",
  keb: "Keble College Boat Club",
  lic: "Lincoln College Boat Club",
  lin: "Linacre College Boat Club",
  lmh: "Lady Margaret Hall Boat Club",
  mag: "Magdalen College Boat Club",
  man: "Mansfield College Boat Club",
  mer: "Merton College Boat Club",
  nec: "New College Boat Club",
  oro: "Oriel College Boat Club",
  osg: "Osler House Boat Club",
  pmb: "Pembroke College Boat Club",
  qco: "The Queen's College Boat Club",
  rpc: "Regent's Park College Boat Club",
  som: "Somerville College Boat Club",
  sac: "St Anne's College Boat Club",
  say: "St Antony's College Boat Club",
  sbh: "St Benet's Hall Boat Club",
  sco: "St Catherine's College Boat Club",
  seh: "St Edmund Hall Boat Club",
  shi: "St Hilda's College Boat Club",
  shg: "St Hugh's College Boat Club",
  sjo: "St John's College Boat Club",
  spc: "St Peter's College Boat Club",
  tro: "Trinity College Boat Club",
  uxo: "University College Boat Club",
  wad: "Wadham College Boat Club",
  woo: "Wolfson College Boat Club",
  wro: "Worcester College Boat Club",
};

clubs.international = [
  "arg",
  "aus",
  "aut",
  "bel",
  "bul",
  "can",
  "cro",
  "den",
  "esp",
  "est",
  "fra",
  "gbr",
  "ger",
  "gre",
  "ita",
  "nor",
  "nzl",
  "pol",
  "rou",
  "rsa",
  "sui",
  "usa",
];

names.international = {
  arg: "Argentina",
  aus: "Australia",
  aut: "Austria",
  bel: "Belgium",
  bul: "Bulgaria",
  can: "Canada",
  cro: "Croatia",
  den: "Denmark",
  esp: "Spain",
  est: "Estonia",
  fra: "France",
  gbr: "Great Britain",
  ger: "Germany",
  gre: "Greece",
  ita: "Italy",
  nor: "Norway",
  nzl: "New Zealand",
  pol: "Poland",
  rou: "Romania",
  rsa: "South Africa",
  sui: "Switzerland",
  usa: "United States of America",
};

shortNames.international = {
  arg: "Argentina",
  aus: "Australia",
  aut: "Austria",
  bel: "Belgium",
  bul: "Bulgaria",
  can: "Canada",
  cro: "Croatia",
  den: "Denmark",
  esp: "Spain",
  est: "Estonia",
  fra: "France",
  gbr: "Great Britain",
  ger: "Germany",
  gre: "Greece",
  ita: "Italy",
  nor: "Norway",
  nzl: "New Zealand",
  pol: "Poland",
  rou: "Romania",
  rsa: "South Africa",
  sui: "Switzerland",
  usa: "United States of America",
};

export { clubs, names, shortNames, shortShortNames, abbreviations };
