import React from 'react';

const Blade = React.forwardRef(({ className, size, club }, ref) => {
  let decal;
  let fill;

  switch (club) {
    case 'age':
      decal = age;
      fill = '#AB0A19';
      break;
    case 'akn':
      decal = akn;
      fill = '#008620';
      break;
    case 'aru':
      decal = aru;
      fill = '#000000';
      break;
    case 'avn':
      decal = avn;
      fill = '#202020';
      break;
    case 'bal':
      decal = bal;
      fill = '#000000';
      break;
    case 'bbl':
      decal = bbl;
      fill = '#1667F6';
      break;
    case 'bed':
      decal = bed;
      fill = '#8e0000';
      break;
    case 'ber':
      decal = ber;
      fill = '#000077';
      break;
    case 'bra':
      decal = bra;
      fill = '#F5F5F5';
      break;
    case 'brc':
      decal = null;
      fill = '#202020';
      break;
    case 'brd':
      decal = brd;
      fill = '#00214E';
      break;
    case 'cab':
      decal = cab;
      fill = '#000033';
      break;
    case 'cai':
      decal = cai;
      fill = '#202020';
      break;
    case 'cam':
      decal = cam;
      fill = '#13294b';
      break;
    case 'cbs':
      decal = cbs;
      fill = '#008001';
      break;
    case 'cco':
      decal = cco;
      fill = '#00214E';
      break;
    case 'cha':
      decal = null;
      fill = '#fc6621';
      break;
    case 'chb':
      decal = null;
      fill = '#000065';
      break;
    case 'chu':
      decal = null;
      fill = '#FF70A0';
      break;
    case 'cla':
      decal = null;
      fill = '#FFCC00';
      break;
    case 'clh':
      decal = clh;
      fill = '#FFCC00';
      break;
    case 'cls':
      decal = cls;
      fill = '#1909AF';
      break;
    case 'cnn':
      decal = cnn;
      fill = '#599bfc';
      break;
    case 'coo':
      decal = coo;
      fill = '#000040';
      break;
    case 'cor':
      decal = cor;
      fill = '#8d0603';
      break;
    case 'cox':
      decal = cox;
      fill = '#003366';
      break;
    case 'crc':
      decal = crc;
      fill = '#ffffff';
      break;
    case 'daw':
      decal = daw;
      fill = '#000080';
      break;
    case 'dow':
      decal = null;
      fill = '#AB0F62';
      break;
    case 'emm':
      decal = emm;
      fill = '#000077';
      break;
    case 'exc':
      decal = null;
      fill = '#DF0000';
      break;
    case 'fit':
      decal = null;
      fill = 'lightgray';
      break;
    case 'ftt':
      decal = null;
      fill = '#000044';
      break;
    case 'gir':
      decal = gir;
      fill = '#004600';
      break;
    case 'gtm':
      decal = gtm;
      fill = '#000032';
      break;
    case 'hec':
      decal = hec;
      fill = '#8E0000';
      break;
    case 'hom':
      decal = hom;
      fill = '#f9f9f9';
      break;
    case 'huh':
      decal = huh;
      fill = '#ffffff';
      break;
    case 'iel':
      decal = iel;
      fill = '#ffffff';
      break;
    case 'jec':
      decal = jec;
      fill = '#202020';
      break;
    case 'jeo':
      decal = null;
      fill = '#009C3A';
      break;
    case 'kcb':
      decal = null;
      fill = 'purple';
      break;
    case 'keb':
      decal = keb;
      fill = '#F9F9F9';
      break;
    case 'lcc':
      decal = lcc;
      fill = '#136bfb';
      break;
    case 'lic':
      decal = lic;
      fill = '#000032';
      break;
    case 'lin':
      decal = lin;
      fill = '#ffcc00';
      break;
    case 'lmb':
      decal = null;
      fill = '#DC0000';
      break;
    case 'lmh':
      decal = lmh;
      fill = '#000032';
      break;
    case 'mag':
      decal = mag;
      fill = '#151515';
      break;
    case 'man':
      decal = man;
      fill = '#d40000';
      break;
    case 'mec':
      decal = null;
      fill = '#F5F5F5';
      break;
    case 'mer':
      decal = mer;
      fill = '#ffffff';
      break;
    case 'mgd':
      decal = mgd;
      fill = '#8c00cd';
      break;
    case 'nec':
      decal = nec;
      fill = '#800080';
      break;
    case 'nnm':
      decal = nnm;
      fill = '#000066';
      break;
    case 'oro':
      decal = oro;
      fill = '#002163';
      break;
    case 'pbc':
      decal = pbc;
      fill = '#0000CC';
      break;
    case 'pem':
      decal = pem;
      fill = '#AAF0FF';
      break;
    case 'pet':
      decal = pet;
      fill = '#071cd0';
      break;
    case 'pmb':
      decal = pmb;
      fill = '#F0F0F0';
      break;
    case 'ptr':
      decal = ptr;
      fill = '#000033';
      break;
    case 'qcc':
      decal = qcc;
      fill = 'darkgreen';
      break;
    case 'qco':
      decal = qco;
      fill = '#000066';
      break;
    case 'rob':
      decal = rob;
      fill = '#7e0308';
      break;
    case 'roc':
      decal = roc;
      fill = '#0099FF';
      break;
    case 'rpc':
      decal = rpc;
      fill = '#EE0000';
      break;
    case 'sac':
      decal = sac;
      fill = '#B20000';
      break;
    case 'say':
      decal = say;
      fill = '#d40000';
      break;
    case 'sbh':
      decal = sbh;
      fill = '#f9f9f9';
      break;
    case 'scc':
      decal = scc;
      fill = '#780025';
      break;
    case 'sco':
      decal = sco;
      fill = '#8cf';
      break;
    case 'sec':
      decal = ed;
      fill = '#0063cb';
      break;
    case 'seh':
      decal = seh;
      fill = '#ffcc00';
      break;
    case 'sel':
      decal = sel;
      fill = '#F5F5F5';
      break;
    case 'shg':
      decal = shg;
      fill = '#010066';
      break;
    case 'shi':
      decal = shi;
      fill = '#f9f9f9';
      break;
    case 'sid':
      decal = sid;
      fill = '#000066';
      break;
    case 'sne':
      decal = sne;
      fill = '#00AEEF';
      break;
    case 'som':
      decal = som;
      fill = '#EE0000';
      break;
    case 'spc':
      decal = spc;
      fill = '#FFFFFF';
      break;
    case 'srg':
      decal = srg;
      fill = '#FF0000';
      break;
    case 'trh':
      decal = null;
      fill = '#202020';
      break;
    case 'tro':
      decal = tro;
      fill = '#010178';
      break;
    case 'uxo':
      decal = uxo;
      fill = '#000032';
      break;
    case 'vet':
      decal = null;
      fill = '#A3C1AD';
      break;
    case 'wad':
      decal = wad;
      fill = '#add8e6';
      break;
    case 'woc':
      decal = woc;
      fill = '#0000FF';
      break;
    case 'woo':
      decal = woo;
      fill = '#FFD050';
      break;
    case 'xpr':
      decal = null;
      fill = '#000000';
      break;
    default:
      decal = null;
      fill = 'white';
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...size !== undefined && { width: size, height: (size * 230) / 500 }}
      viewBox="0 0 500 230"
      ref={ref}
      className={className}
    >
      <defs>
        <path
          id="spoonPath"
          d="M 105,75 C 105,76 106,77 107,77 C 139,89 170,149 177,181 C 231,199 389,201 455,201 C 458,201 461,198 461,195 L 450,27 C 450,24 447,21 444,21 L 113,43 C 112,43 111,44 111,45  Z"
        />

        <clipPath id="spoonClip">
          <use xlinkHref="#spoonPath" />
        </clipPath>
      </defs>
      <g>
        <use
          xlinkHref="#spoonPath"
          style={{ stroke: 'black', strokeWidth: 1, fill: fill }}
        />
        <g clipRule="nonzero" clipPath="url(#spoonClip)">
          {decal}
        </g>
      </g>
    </svg>
  );
});

const age = (
  <g>
    <path d="M 0,55 L 145,199 L 500,205 L 500,137 Z" fill="#023A6B" />
    <path d="M 0,27 L 0,5 L 500,5 L 500,109 Z" fill="#FFFFFF" />
  </g>
);

const akn = (
  <g>
    <path d="M 345,0 L 260,230 L 500,230 L 500,0 Z" fill="#c679b6" />
  </g>
);

const aru = (
  <g transform="rotate(-3)  translate(0,130)">
    <rect fill="#000000" x="0" y="0" width="100%" height="50%" />
    <path d="M 465,-100 L 350,0 L 455,100 Z" fill="orange" />
  </g>
);

const avn = (
  <path d="M 412,0 l 16,250" style={{ strokeWidth: 75, stroke: '#FEE41B' }} />
);

const bal = (
  <path
    style={{ fill: '#d40000', stroke: 'none', strokeWidth: 1 }}
    d="M 109.76752,42.435275 76.110919,192.11109 428.81461,203.01844 z"
  />
);

const bbl = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#ffffff', strokeWidth: 32, fill: 'none' }}
    />
  </g>
);

const bed = (
  <g transform="matrix(0.99756405,-0.06975647,0.06975647,0.99756405,400.42075,-7.9513085)">
    <path
      d="M 5,0 5,300"
      style={{ fill: 'none', stroke: '#000063', strokeWidth: 20 }}
    />
    <path
      d="m -15,0 0,300"
      style={{ fill: 'none', stroke: '#ffffff', strokeWidth: 20 }}
    />
    <path
      d="m -55,0 0,300"
      style={{ fill: 'none', stroke: '#ffffff', strokeWidth: 20 }}
    />
    <path
      d="m -75,0 0,300"
      style={{ fill: 'none', stroke: '#000063', strokeWidth: 20 }}
    />
  </g>
);

const ber = (
  <g transform="rotate(-4) translate(290, 143)">
    <path
      d="M 100,-100 L 0,0 L 100,100"
      stroke="white"
      stroke-width="20"
      fill="none"
    />
    <path
      d="M 150,-100 L 50,0 L 150,100"
      stroke="white"
      stroke-width="20"
      fill="none"
    />
  </g>
);

const bra = (
  <g transform="rotate(-2) translate(260, 15) scale(0.085)">
    <path
      fill="#1B1D56"
      d="M 1224,2062 C 1222,2062 1221,2062 1220,2062 C 1220,2062 1220,2062 1219,2062 C 1218,2062 1217,2062 1216,2062 C 1216,2062 1215,2062 1215,2062 C 1214,2062 1213,2062 1212,2062 C 1125,2062 1039,2062 952,2062 C 1106,1915 1135,1641 1140,1402 L 1139.1403,1354.8831 L 1084,1356 C 834,1357 591,1379 444,1496 C 444,1429 444,1356 444,1288 C 444,1287 444,1286 444,1285 C 444,1218 444,1144 444,1077 C 591,1194 834,1217 1084,1218 L 1140.4181,1218.5702 L 1140,1170 C 1135,930 1107,654 952,505 C 1039,505 1125,505 1212,505 C 1213,505 1214,505 1215,505 C 1215,505 1216,505 1216,505 C 1217,505 1218,505 1219,505 C 1220,505 1220,505 1220,505 C 1221,505 1222,505 1224,505 C 1310,505 1396,505 1483,505 C 1328,654 1300,930 1295,1170 L 1293.773,1217.0018 L 1354,1218 C 1605,1217 1852,1195 2000,1077 C 2000,1144 2000,1218 2000,1285 C 2000,1286 2000,1287 2000,1288 C 2000,1356 2000,1429 2000,1496 C 1852,1378 1605,1357 1354,1356 L 1293.8154,1355.2033 L 1295,1402 C 1300,1641 1329,1915 1483,2062 C 1396,2062 1310,2062 1224,2062 z "
    />
  </g>
);

const brd = (
  <g transform="rotate(-4) translate(370, 90)">
    <path d="M 0,0 l 0,-33 l 55,33 l 0,33 z" fill="white" />
    <path d="M 0,53 l 0,-33 l 55,33 l 0,33 z" fill="white" />
    <path d="M 0,104 l 0,-33 l 55,33 l 0,33 z" fill="white" />
  </g>
);

const cab = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#cccccc', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const cai = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#95E3C9', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const cam = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 10,00 l 0,300 "
      style={{ stroke: '#daaa00', strokeWidth: 17, fill: 'none' }}
    />
    <path
      d="M -12.5,00 l 0,300 "
      style={{ stroke: '#7e2d40', strokeWidth: 28, fill: 'none' }}
    />
    <path
      d="M -35,00 l 0,300 "
      style={{ stroke: '#daaa00', strokeWidth: 17, fill: 'none' }}
    />
  </g>
);

const cbs = (
  <g transform="rotate(-3) translate(-20, 130)">
    <path d="M 480,-120 L 350,0 L 480,120 Z" fill="#ffffff" />
  </g>
);

const cls = (
  <g transform="rotate(-4) translate(280, 20)">
    <path
      d="M 85,00 l 200,300 "
      style={{ stroke: '#E60707', strokeWidth: 120, fill: 'none' }}
    />
    <path
      d="M 0,00 l 200,300 "
      style={{ stroke: 'white', strokeWidth: 35, fill: 'none' }}
    />
  </g>
);

const cnn = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#fffd38', strokeWidth: 32, fill: 'none' }}
    />
  </g>
);

const cco = (
  <g transform="rotate(-4) translate(410, 85)">
    <path d="M 0,0 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
    <path d="M 0,55 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
    <path d="M 0,110 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
  </g>
);

const clh = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: '#d40000', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: '#000000', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const cor = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#FFFFFF', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const coo = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: '#800020', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: '#800020', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const cox = (
  <g>
    <g transform="rotate(-4) translate(170)">
      <path
        d="M 95,-5 l 390,300 "
        style={{ stroke: '#CC0000', strokeWidth: 160, fill: 'none' }}
      />
    </g>
    <g transform="rotate(-60) scale(1) translate(50, 100)">
      <rect x="0" y="0" width="35" height="400" style={{ fill: '#f9f9f9' }} />
    </g>
  </g>
);

const crc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -218,300 l 300,-320 "
      style={{ stroke: 'rgb(76, 165, 224)', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -245.4146402,300 l 300,-320 "
      style={{ stroke: 'rgb(46, 49, 146)', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -272.8292805,300 l 300,-320 "
      style={{ stroke: 'rgb(249, 222, 6)', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const daw = (
  <g>
    <path
      d="m 337.53904,53.926029 18.1628,0.199425 -0.12489,171.551716 -18.05434,-1.84468 z"
      style={{
        fill: '#ffff00',
        stroke: '#ffff00',
        strokeWidth: 0.8894608,
      }}
      transform="matrix(0.99725744,-0.07401084,0.06574439,0.9978365,0,0)"
    />
    <path
      d="m 398.76443,48.783955 17.90459,0 -0.0784,176.637665 -17.82622,-1.24753 z"
      style={{
        fill: '#ff0000',
        stroke: '#ff0000',
        strokeWidth: 0.8975876,
      }}
      transform="matrix(0.9981883,-0.0601674,0.0627044,0.99803214,0,0)"
    />
    <path
      d="m 367.78846,48.36276 18.00852,-0.199632 -0.11215,174.167182 -17.90915,-1.34752 z"
      style={{
        fill: '#00ffff',
        stroke: '#00ffff',
        strokeWidth: 0.8922177,
      }}
      transform="matrix(0.99831419,-0.05804124,0.06411709,0.99794238,0,0)"
    />
  </g>
);

const emm = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -50,00 l 80,300 "
      style={{ stroke: '#FF7777', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -85,00 l 80,300 "
      style={{ stroke: '#FF7777', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const ed = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 19,00 l 0,300 "
      style={{ stroke: 'white', strokeWidth: 18, fill: 'none' }}
    />
    <path
      d="M -17,00 l 0,300 "
      style={{ stroke: '#0097ff', strokeWidth: 18, fill: 'none' }}
    />
  </g>
);

const gir = (
  <g>
    <path
      d="m 398.76443,48.783955 17.90459,0 -0.0797,176.659105 -17.77288,-1.07283 z"
      style={{
        fill: '#ffffff',
        stroke: '#ffffff',
        strokeWidth: 0.8975876,
      }}
      transform="matrix(0.9981883,-0.0601674,0.0627044,0.99803214,0,0)"
    />
    <path
      d="m 380.01546,49.005023 17.92068,-0.25637 -0.0121,175.582417 -17.80795,-1.53822 z"
      style={{
        fill: '#ff0000',
        stroke: '#ff0000',
        strokeWidth: 0.8975876,
      }}
      transform="matrix(0.9981883,-0.0601674,0.0627044,0.99803214,0,0)"
    />
    <path
      d="m 363.65879,27.224199 17.87215,-1.168078 10.99775,173.410529 -17.80795,-0.36422 z"
      style={{
        fill: '#ffffff',
        stroke: '#ffffff',
        strokeWidth: 0.8975876,
      }}
    />
  </g>
);

const gtm = (
  <g>
    <path
      d="M 470,10 145,199 500,230 z"
      style={{ fill: '#00792c', stroke: 'none' }}
    />
    <path
      d="m 432.14757,21.780669 12.2463,-0.840751 c 1.41425,0.238775 2.84975,0.817522 3.75407,1.651223 0.84763,1.131188 1.50412,2.26233 1.82057,3.542251 l 0.6532,9.027091 -261.11613,149.440487 -7.7643,-2.0481 -4.67062,-1.37297 -1.23447,-5.12152 -2.0185,-6.74448 -2.97685,-8.42085 z"
      style={{ fill: '#ffff00', stroke: 'none' }}
    />
  </g>
);

const hec = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: '#FFFFFF', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: '#FFFFFF', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const hom = (
  <path
    d="m 396.15605,25.14572 23.99452,-1.642361 14.7652,176.467821 -23.90835,-0.0963 z"
    style={{
      fill: '#010864',
      fillOpacity: 1,
      stroke: '#010864',
      strokeWidth: 1,
    }}
  />
);

const huh = (
  <g>
    <path
      d="m 405.83742,24.395387 12.00785,-0.827315 7.38908,176.444758 -12.00785,-0.12253 z"
      style={{ fill: '#000080', stroke: '#000080', strokeWidth: 0.73573327 }}
    />
    <path
      d="m 382.99609,25.922937 12.01186,-0.799737 7.39159,174.60026 -12.01186,-0.19714 z"
      style={{ fill: '#0096ff', stroke: '#0096ff', strokeWidth: 0.73471797 }}
    />
  </g>
);

const iel = (
  <g>
    <path d="M 397,0 l 16,250" style={{ strokeWidth: 35, stroke: '#a1d3b9' }} />
    <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: '#020c7e' }} />
  </g>
);

const jec = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: 'darkred', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: 'darkred', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const keb = (
  <g transform="rotate(-4)  translate(355,143) ">
    <path
      d="M 60,-100 L -15,0 L 60,100"
      style={{ stroke: '#FF191C', strokeWidth: 25, fill: 'none' }}
    />
  </g>
);

const lcc = (
  <g transform="rotate(-3)  translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: '#000000' }} />
  </g>
);

const lic = (
  <g>
    <path
      d="m 112.15417,44.883847 201.94289,45.675172 0.0377,-0.0011 -208.35394,-15.89754 z"
      style={{ fill: '#7ca5cd' }}
    />
    <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: '#7ca5cd' }} />
  </g>
);

const lin = (
  <g>
    <path d="M 180,200 424,13" style={{ stroke: '#000000', strokeWidth: 20 }} />
    <path d="M 180,30 440,215" style={{ stroke: '#000000', strokeWidth: 20 }} />
  </g>
);

const lmh = (
  <path
    d="m 112.15417,44.883847 201.94289,45.675172 0.0377,-0.0011 -208.35394,-15.89754 z"
    style={{ fill: '#ffe600' }}
  />
);

const mag = (
  <g transform="rotate(-2)  translate(275,17)  scale(2.7)">
    <g transform="matrix(0.4701374,0.8825933,-0.8825933,0.4701374,57.211567,-103.7955)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: '#fede20', fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: 'none',
          fillRule: 'evenod',
          stroke: '#fede20',
          strokeWidth: 2,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="translate(-86.707773,-38.73351)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: '#fede20', fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: 'none',
          fillRule: 'evenodd',
          stroke: '#fede20',
          strokeWidth: 2,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(0.8948254,0.4464163,-0.4464163,0.8948254,-38.257953,-84.447648)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: '#fede20', fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: 'none',
          fillRule: 'evenodd',
          stroke: '#fede20',
          strokeWidth: 2,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      style={{
        fill: '#ffffff',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M 28.133947,27.625083 C 26.252087,27.610473 26.974757,23.176173 28.449617,19.133493 C 30.843507,19.143933 34.932237,21.383663 35.362847,25.320673 L 35.520687,26.962173 L 33.752917,35.674743 L 29.964847,31.507863 L 28.133947,27.625083 z"
    />
    <g transform="matrix(0.6509648,0.759108,-0.759108,0.6509648,20.495457,-104.93273)">
      <path
        transform="matrix(0.9645439,-0.7042761,0.651746,1.0422852,-34.86803,73.954067)"
        d="M 112.00066,59.382229 A 2.0834396,1.5152289 0 1 1 107.83378,59.382229 A 2.0834396,1.5152289 0 1 1 112.00066,59.382229 z"
        style={{ fill: '#fede20', fillOpacity: 1 }}
      />
      <path
        d="M 110.09967,58.943823 L 114.65928,64.818775"
        style={{
          opacity: 1,
          fill: 'none',
          fillRule: 'evenodd',
          stroke: '#fede20',
          strokeWidth: 2,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      style={{
        fill: '#ffffff',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M 52.188207,20.648723 C 48.984937,21.353103 45.746617,21.969873 43.854447,25.952023 L 45.369677,40.094153 L 53.198357,31.760393 C 53.842367,27.566143 54.198417,23.515863 52.188207,20.648723 z"
    />
    <path
      style={{
        fill: '#ffffff',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M 19.358247,36.306083 C 33.719007,34.386583 25.890907,59.188293 40.121577,59.188293 C 54.604787,59.188293 47.083157,33.292843 61.279577,36.306083 C 61.204607,15.923273 44.378697,28.839913 43.349367,49.690603 C 44.190717,39.213433 53.282727,28.592703 40.571447,16.608113 C 28.554297,27.879993 36.141967,42.054093 36.783377,49.943143 C 30.961667,11.078523 15.395387,27.543193 19.358247,36.306083 z"
    />
    <path
      style={{
        fill: '#ffffff',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M 28.955517,19.376023 L 31.623077,27.335683"
    />
    <path
      style={{
        fill: 'none',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M 51.935667,21.027523 L 48.905207,27.846053"
    />
    <path
      style={{
        fill: '#008000',
        fillRule: 'evenodd',
        stroke: '#000000',
        strokeWidth: 1,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
      d="M 29.537967,67.274035 C 27.729217,67.240585 28.877857,63.677445 31.336957,63.677445 C 34.252227,63.677445 37.743407,64.144715 37.825767,62.602075 L 37.952037,58.687735 C 39.130547,57.340865 40.477417,57.340865 41.992647,58.687735 C 42.012967,67.259665 41.847697,67.274035 29.537967,67.274035 z"
    />
  </g>
);

const man = (
  <g
    style={{ fill: '#ffff00' }}
    transform="matrix(0.26159327,-0.01731013,0.01858136,0.28080429,341.4759,-142.53978)"
  >
    <path
      style={{ fill: '#ffff00', stroke: '#000000', strokeWidth: 3 }}
      d="m 92.4091,758.86218 0,32.45455 41.443,0 0,94.81817 -94.8976,0 0,-41.44318 -32.4545,0 0,115.26137 32.4545,0 0,-41.44319 94.8976,0 0,94.8977 -41.443,0 0,32.4546 115.2612,0 0,-32.4546 -41.443,0 0,-94.8977 94.8181,0 0,41.44319 32.4546,0 0,-115.26137 -32.4546,0 0,41.44318 -94.8181,0 0,-94.81817 41.443,0 0,-32.45455 -115.2612,0 z"
    />
  </g>
);

const mer = (
  <g
    transform="matrix(0.28883635,-0.01855137,0.01855137,0.28883635,344.39461,109.9603)"
    style={{ fill: '#440055' }}
  >
    <g transform="translate(-630.86889,642.81708)" style={{ fill: '#440055' }}>
      <path
        d="m 701.93802,-785.42365 0,107.625 -107.625,0 0,71.75 107.625,0 0,107.625 71.75,0 0,-107.625 107.625,0 0,-71.75 -107.625,0 0,-107.625 -71.75,0 z"
        style={{
          fill: '#440055',
          fillOpacity: 1,
          fillRule: 'evenodd',
          stroke: '#000000',
          strokeWidth: 3,
        }}
      />
    </g>
  </g>
);

const mgd = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 6,0 l 0,300"
      style={{ stroke: '#000fb0', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const nec = (
  <g>
    <path
      d="m 396.15605,25.301409 23.99452,-1.642361 14.7652,176.234292 -23.90835,-0.2131 z"
      style={{ fill: '#fdd017', stroke: '#fdd017', strokeWidth: 1 }}
    />
    <path
      d="m 357.75677,27.187088 23.99452,-1.642361 14.7652,174.434323 -23.90835,-0.55595 z"
      style={{ fill: '#fdd017', stroke: 'none' }}
    />
  </g>
);

const nnm = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -60,00 l 80,300 "
      style={{ stroke: 'gold', strokeWidth: 60, fill: 'none' }}
    />
    <path
      d="M -60,00 l 80,300 "
      style={{ stroke: 'silver', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const oro = (
  <g transform="rotate(-4) translate(400,20)">
    <path d="M 5,00 l 0,300" style={{ stroke: '#FFFFFF', strokeWidth: 20 }} />
    <path d="M -35,00 l 0,300" style={{ stroke: '#FFFFFF', strokeWidth: 20 }} />
  </g>
);

const pbc = (
  <g transform="rotate(-4) translate(400, 20)">
    <path
      d="M 19,00 l 0,300 "
      style={{ stroke: 'white', strokeWidth: 18, fill: 'none' }}
    />
    <path
      d="M -17,00 l 0,300 "
      style={{ stroke: 'white', strokeWidth: 18, fill: 'none' }}
    />
  </g>
);

const pem = (
  <g transform="rotate(-4) translate(410,85)">
    <path d="M -60,-33 l 00,00 l 60,00 l 00,40 z" fill="#000066" />
    <path d="M -60,14 l 00,40 l 60,43 l 00,-40 z" fill="#000066" />
    <path d="M -60,100 l 00,40 l 60,6 l 0,00 z" fill="#000066" />
  </g>
);

const pet = (
  <g transform="rotate(-3)  translate(0,130)">
    <path d="M 465,-100 350,0 455,100 z" style={{ fill: '#ffff00' }} />
  </g>
);

const pmb = (
  <g>
    <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: '#ff7777' }} />
  </g>
);

const ptr = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#ffffff', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const qcc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: 'white', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const qco = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect fill="#FFFFFF" width="100%" height="33.33%" y="33.33%" />
    <rect fill="#000066" width="100%" height="33.33%" y="66.66%" />
  </g>
);

const rob = (
  <g>
    <path
      d="M 455,10 350,199 500,230 z"
      style={{ fill: '#ffffff', stroke: 'none' }}
    />
  </g>
);

const roc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: 'gold', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: 'gold', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const rpc = (
  <path
    transform="rotate(-3) translate(100,30)"
    d="M 280,0 L 280,200 M 0,100 L 400,100"
    fill="none"
    stroke="white"
    strokeWidth="25"
  />
);

const sac = (
  <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: '#CBCBCB' }} />
);

// TODO: Confirm design is accurate
const say = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -10,0 l 0,300 "
      style={{ stroke: '#ffcc00', strokeWidth: 120, fill: 'none' }}
    />
    <path
      d="M -80,0 l 0,300 "
      style={{ stroke: '#000000', strokeWidth: 40, fill: 'none' }}
    />
  </g>
);

const sbh = (
  <path
    d="m 396.15605,25.14572 23.99452,-1.642361 14.7652,176.467821 -23.90835,-0.0963 z"
    style={{ fill: '#000050', stroke: '#000050', strokeWidth: 1 }}
  />
);

const scc = (
  <g
    transform="matrix(0.65386408,0,0,0.65386408,32.566722,-135.8729)"
    style={{ fill: '#ffffff', stroke: '#ffffff' }}
  >
    <path
      d="m 538.74596,418.05956 c 1.35639,-0.1009 2.58832,-0.72665 3.45468,-1.5978 1.77142,-1.78123 2.1111,-2.23858 2.1111,-5.11287 l -0.0956,-50.04276 0.0292,0 0.15973,-50.52208 c 0.69082,-3.63935 -0.11358,-3.22553 2.27114,-5.65618 -0.99651,-0.64547 -1.98875,-0.92317 -2.9428,-0.95865 -0.19873,-0.005 -0.3821,-0.0149 -0.57568,0 -1.35636,0.1009 -2.58831,0.72664 -3.45457,1.5978 -1.77152,1.78122 -2.11115,2.23862 -2.11115,5.11291 l 0.0956,50.04275 -0.0291,0 -0.15973,50.52204 c -0.69081,3.63938 0.11359,3.22553 -2.27112,5.65618 0.99658,0.64548 1.98874,0.9232 2.94287,0.95866 0.19874,0.005 0.3821,0.0149 0.57566,0 z"
      style={{
        fill: '#ffffff',
        stroke: '#ffffff',
        strokeWidth: 0,
      }}
    />
    <path
      style={{
        fill: '#ffffff',
        stroke: '#ffffff',
        strokeWidth: 0,
      }}
      d="m 579.65873,402.94141 c 0.88809,-1.03019 1.31645,-2.34403 1.31299,-3.57259 -0.005,-2.51214 -0.0901,-3.07571 -2.12252,-5.10822 l -35.45341,-35.31769 0.0203,-0.0204 -35.61145,-35.8376 c -2.08473,-3.06211 -2.36128,-2.20031 -2.39361,-5.60545 -1.16106,0.24826 -2.05897,0.7535 -2.75869,1.40302 -0.14534,0.13525 -0.28002,0.25962 -0.4073,0.40726 -0.88808,1.03019 -1.31644,2.34404 -1.31296,3.5726 0.005,2.51218 0.0901,3.07578 2.1225,5.1082 l 35.45341,35.31778 -0.0203,0.0203 35.61143,35.83762 c 2.08474,3.06201 2.36129,2.20022 2.39361,5.60536 1.16108,-0.24827 2.05897,-0.75348 2.7587,-1.40302 0.14535,-0.13526 0.28003,-0.2599 0.40728,-0.40726 z"
    />
    <path
      d="m 597.89831,363.32152 c -0.1009,-1.35639 -0.72665,-2.58833 -1.5978,-3.45459 -1.78142,-1.77129 -2.23866,-2.11115 -5.11293,-2.11115 l -50.04276,0.0956 0,-0.0291 -50.52208,-0.15973 c -3.63937,-0.69083 -3.22552,0.11358 -5.6561,-2.27111 -0.64549,0.99651 -0.92319,1.98875 -0.95874,2.94279 -0.005,0.19872 -0.0149,0.3821 0,0.57567 0.1009,1.35639 0.72665,2.58832 1.59781,3.45456 1.78143,1.7713 2.23868,2.11118 5.11297,2.11118 l 50.04275,-0.0959 0,0.0292 50.52208,0.15974 c 3.63934,0.69081 3.22551,-0.11359 5.65614,2.27112 0.64552,-0.99659 0.92311,-1.98877 0.95866,-2.94287 0.005,-0.19872 0.0149,-0.3821 0,-0.57569 z"
      style={{
        fill: '#ffffff',
        stroke: '#ffffff',
        strokeWidth: 0,
      }}
    />
    <path
      style={{
        fill: '#ffffff',
        stroke: '#ffffff',
        strokeWidth: 0,
      }}
      d="m 582.78007,322.40879 c -1.03015,-0.88805 -2.34409,-1.31641 -3.57255,-1.31297 -2.5122,0.005 -3.0758,0.0901 -5.10823,2.1226 l -35.31779,35.45336 -0.0204,-0.0204 -35.83763,35.61142 c -3.06211,2.08477 -2.20022,2.36132 -5.60536,2.3936 0.24825,1.16109 0.75348,2.05907 1.40298,2.75882 0.13525,0.14534 0.25992,0.28002 0.40731,0.40729 1.03018,0.88806 2.34401,1.31641 3.57257,1.31298 2.51211,-0.005 3.07571,-0.0901 5.10822,-2.12253 l 35.3177,-35.45342 0.0204,0.0204 35.8376,-35.61137 c 3.06211,-2.08481 2.20032,-2.36135 5.60544,-2.39365 -0.24825,-1.16107 -0.75348,-2.059 -1.403,-2.75873 -0.13526,-0.14534 -0.25991,-0.28002 -0.4073,-0.40729 z"
    />
    <path
      transform="matrix(0.99504378,0,0,0.99504378,184.15885,70.201165)"
      d="m 370.35716,292.36218 c 0,6.50907 -5.27665,11.78572 -11.78572,11.78572 -6.50907,0 -11.78571,-5.27665 -11.78571,-11.78572 0,-6.50907 5.27664,-11.78571 11.78571,-11.78571 6.50907,0 11.78572,5.27664 11.78572,11.78571 z"
      style={{
        fill: '#ffffff',
        fillOpacity: 1,
        stroke: '#ffffff',
        strokeWidth: 0,
      }}
    />
    <path
      transform="matrix(3.6544449,0,0,3.6544449,-769.42641,-707.30716)"
      d="m 370.35716,292.36218 c 0,6.50907 -5.27665,11.78572 -11.78572,11.78572 -6.50907,0 -11.78571,-5.27665 -11.78571,-11.78572 0,-6.50907 5.27664,-11.78571 11.78571,-11.78571 6.50907,0 11.78572,5.27664 11.78572,11.78571 z"
      style={{
        fill: 'none',
        stroke: '#ffffff',
        strokeWidth: 3.86204243,
      }}
    />
  </g>
);

const sco = (
  <g>
    <circle
      cx="375"
      cy="115"
      r="50"
      stroke="#900"
      strokeWidth="17"
      fill="#8cf"
    />
    <circle cx="375" cy="115" r="6" strokeWidth="0" fill="#900" />
    <g transform="translate(367.625,55.59467)" id="WheelSpike">
      <path
        fill="#900"
        strokeWidth="0"
        d="M 0.125,-0.125 C 2.8241831,-14.718465 0.37994487,-16.164559 0.125,-20.125 C 10.772964,-14.747921 12.635905,-11.317461 15.125,-0.125 C 11.115395,-0.70054519 4.4572137,-1.0540513 0.125,-0.125 z"
      />
    </g>
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(0.5,0.8660254,-0.8660254,0.5,287.25289,-266.9912)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(-0.5,0.8660254,-0.8660254,-0.5,661.75289,-152.02153)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(0.5,-0.8660254,0.8660254,0.5,88.037439,382.42762)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(-0.5,-0.8660254,0.8660254,-0.5,463.2949,497.73017)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelSpike"
      transform="matrix(-1,0,0,-1,749.3511,229.95588)"
      width="200"
      height="230"
    />
    <g id="WheelHub" transform="matrix(1,0,0,0.9808198,0,1.7377014)">
      <g id="HalfHub" transform="matrix(1,0,0,0.9891943,356.81499,75.281599)">
        <path
          style={{ fill: '#990000', strokeWidth: 0 }}
          d="M 18.26601,-0.98669238 C 21.039196,-0.98669238 23.811427,-0.61381072 26.452556,0.13195261 L 24.665586,4.2676717 C 21.291046,3.4501274 22.541945,3.8738881 22.22675,4.109357 C 23.011456,3.4890423 20.597372,4.3396074 21.543884,8.0913483 C 22.213371,10.745028 24.429719,17.210682 24.487937,21.197108 C 24.506445,22.464427 23.840115,26.616021 20.682395,29.594385 C 20.882093,29.729244 21.237732,29.686993 22.22675,30.45966 L 21.302881,34.118596 C 20.159131,33.536018 19.533178,33.443887 18.26601,33.368426 C 18.241806,31.99473 18.258325,-0.16313877 18.26601,-0.98669238 z"
        />
      </g>
      <use
        height="230"
        width="500"
        transform="matrix(-1,0,0,1,750.17692,0)"
        xlinkHref="#HalfHub"
        y="0"
        x="0"
      />
    </g>
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(-0.5,0.8660254,-0.8660254,-0.5,661.84266,-152.5083)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(0.5,0.8660254,-0.8660254,0.5,286.7542,-267.59977)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(-1,0,0,-1,750.17692,229.74097)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(-0.5,-0.8660254,0.8660254,-0.5,463.06917,497.34074)"
      width="200"
      height="230"
    />
    <use
      x="0"
      y="0"
      xlinkHref="#WheelHub"
      transform="matrix(0.5,-0.8660254,0.8660254,0.5,87.98071,382.42606)"
      width="200"
      height="230"
    />
  </g>
);

const seh = (
  <g
    style={{ fill: '#d40000', stroke: 'none' }}
    transform="matrix(0.26159327,-0.01731013,0.01858136,0.28080429,341.4759,-142.53978)"
  >
    <path
      style={{
        fill: '#d40000',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 3,
      }}
      d="m 92.4091,758.86218 0,32.45455 41.443,0 0,94.81817 -94.8976,0 0,-41.44318 -32.4545,0 0,115.26137 32.4545,0 0,-41.44319 94.8976,0 0,94.8977 -41.443,0 0,32.4546 115.2612,0 0,-32.4546 -41.443,0 0,-94.8977 94.8181,0 0,41.44319 32.4546,0 0,-115.26137 -32.4546,0 0,41.44318 -94.8181,0 0,-94.81817 41.443,0 0,-32.45455 -115.2612,0 z"
    />
  </g>
);

const sel = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: 'gold', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: 'maroon', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const shi = (
  <path
    d="m 282.83473,22.488545 -181.38882,16.46439 7.51845,156.678165 362.67705,15.01403 z"
    style={{ fill: '#000032' }}
  />
);

const shg = (
  <g transform="rotate(-3)  translate(0,130) ">
    <rect fill="#010066" x="0" y="0" width="100%" height="50%" />
    <path d="M 465,-100 L 350,0 L 455,100 Z" fill="#FFFFFF" />
    <path d="M 453,-100 L 410,0 L 450,100 Z" fill="#FFFF00" />
  </g>
);

const sid = (
  <g transform="rotate(-4) translate(410,80)">
    <path d="M 0,0 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,40 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,80 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,120 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
  </g>
);

const sne = (
  <g transform="matrix(0.99756405,-0.06975647,0.06975647,0.99756405,397.77684,-2.7542188)">
    >
    <path
      d="m -30.534,26.522 -0.521,174.724 58.477,4.757 0.136,-178.76 -58.092,-0.721 z"
      style={{ fill: '#2e3192' }}
    />
  </g>
);

const som = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 5,00 l 0,300 "
      style={{ stroke: '#000000', strokeWidth: 20, fill: 'none' }}
    />
    <path
      d="M -30,00 l 0,300 "
      style={{ stroke: '#000000', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const spc = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M -170,10 l 320,300 "
      style={{ stroke: '#006600', strokeWidth: 60, fill: 'none' }}
    />
    <path
      d="M -170,10 l 320,300 "
      style={{ stroke: '#FFCC00', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const srg = (
  <g>
    <linearGradient id="gradient_to_transparent" x1="0%" x2="100%">
      <stop offset="0" stopColor="#ffcc00" stopOpacity="0" />
      <stop offset="0.5" stopColor="#ffcc00" stopOpacity="1" />
      <stop offset="1" stopColor="#ffcc00" stopOpacity="1" />
    </linearGradient>
    <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
      <rect
        fill="url(#gradient_to_transparent)"
        width="50%"
        height="100%"
        x="50%"
      />
    </g>
  </g>
);

const tro = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#FFFFFF', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const uxo = (
  <path
    d="m 424.42026,89.075166 c -4.09987,10.072123 -9.43267,12.970924 -12.56042,13.259354 -3.12776,0.28843 -9.59816,0.8851 -9.61019,0.96737 -0.012,0.0823 -0.58156,-6.457871 -0.86999,-9.585619 -0.28842,-3.127751 1.61684,-8.926434 10.73873,-14.773437 -4.08387,-3.166333 -7.74153,-2.783318 -10.48148,-1.387772 -2.59335,-4.880959 -4.97276,-7.084454 -9.61588,-8.685959 -4.27528,2.387515 -6.21159,4.988979 -7.8686,10.261889 -2.94896,-0.870939 -6.61498,-0.578587 -10.05093,3.281195 10.03734,4.080218 12.97092,9.432671 13.25934,12.560431 0.28844,3.127751 0.87896,9.531472 0.95884,9.528382 0.0798,-0.004 -6.58227,0.61058 -9.71003,0.89902 -3.12775,0.28842 -8.92642,-1.61684 -14.76059,-10.723428 -3.17917,4.068567 -2.79616,7.726228 -1.40061,10.466178 -0.78165,0.41766 -5.96508,2.37725 -8.64986,9.61255 2.42363,4.27195 5.02509,6.20827 10.298,7.86526 -0.87094,2.94897 -0.5786,6.61498 3.28119,10.05095 4.08022,-10.03735 9.43267,-12.97094 12.56042,-13.25937 3.12776,-0.28843 9.7315,-0.8974 9.65584,-0.97022 -0.0756,-0.0729 0.53028,6.4976 0.81871,9.62536 0.28843,3.12775 -1.61684,8.92642 -10.73873,14.77342 0.1424,0.10996 4.02461,4.08003 10.48148,1.38778 0.41766,0.78165 2.37725,5.96508 9.61257,8.64985 4.27193,-2.42361 6.20825,-5.02508 7.86524,-10.29799 2.94896,0.87094 6.61498,0.57859 10.05093,-3.28119 -10.03733,-4.08022 -12.97091,-9.43267 -13.25934,-12.56044 -0.28843,-3.12775 -0.89125,-9.66482 -0.96573,-9.57677 -0.0745,0.088 6.52924,-0.52095 9.65699,-0.80938 3.12776,-0.28843 8.92643,1.61685 14.77343,10.73874 0.11405,-0.14772 4.0543,-3.99452 1.38778,-10.48148 0.78115,-0.4174 5.99207,-2.39945 8.68596,-9.6159 -2.38752,-4.27526 -4.98898,-6.21158 -10.2619,-7.868581 0.87095,-2.948962 0.59824,-6.64976 -3.28119,-10.050929 z"
    style={{
      fill: '#fdd400',
      fillOpacity: 1,
      fillRule: 'evenodd',
      stroke: '#000000',
      strokeWidth: 0,
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
    }}
  />
);

const wad = (
  <g
    transform="matrix(0.28266997,-0.02406952,0.02406952,0.28266997,323.94612,-142.59428)"
    style={{ fill: '#ffffff', stroke: 'none' }}
  >
    <path
      d="m 75.70255,758.86218 c 30.0825,37.7971 39.7439,76.0451 37.9979,106.9883 -30.9796,1.8011 -69.319,-7.8481 -107.2006,-37.9978 2.9542,24.4032 16.7929,44.5271 16.7929,74.2974 0,29.7703 -13.8387,50.1066 -16.7929,74.5097 37.8816,-30.1496 76.221,-40.0111 107.2006,-38.2101 l 0,0.212 c 1.801,30.9796 -7.8481,69.31902 -37.9979,107.20052 24.4032,-2.9542 44.5272,-16.7929 74.2975,-16.7929 29.7703,0 50.1065,13.8387 74.5097,16.7929 -30.1497,-37.8815 -40.0112,-76.22092 -38.2101,-107.20052 l 0,-0.212 c 30.9796,-1.801 69.319,8.0605 107.2005,38.2101 -2.9542,-24.4031 -16.7929,-44.7394 -16.7929,-74.5097 0,-29.7703 13.8387,-49.8942 16.7929,-74.2974 -37.8815,30.1497 -76.2209,39.7989 -107.2005,37.9978 -1.7451,-30.9432 8.1276,-69.1912 38.2101,-106.9883 -24.4032,2.9543 -44.7394,16.7929 -74.5097,16.7929 -29.7703,0 -49.8943,-13.8386 -74.2975,-16.7929 z"
      style={{ fill: '#ffffff', stroke: 'none' }}
    />
  </g>
);

const woc = (
  <path
    d="m 398.56359,25.01348 21.01371,-1.395417 12.93093,176.316257 -20.93824,-0.17775 z"
    style={{ fill: '#ffff00', stroke: '#ffff00', strokeWidth: 0.97328287 }}
  />
);

const woo = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#8B0000', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

export default Blade;
