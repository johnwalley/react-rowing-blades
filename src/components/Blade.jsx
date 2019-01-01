import React from 'react';
import PropTypes from 'prop-types';

const Blade = React.forwardRef(({ className, size, club }, ref) => {
  let decal;
  let fill;

  switch (club) {
    case 'emmanuel':
      decal = emmanuel;
      fill = '#000077';
      break;
    case 'city':
      decal = city;
      fill = '#13294b';
      break;
    case 'catz':
      decal = catz;
      fill = '#780025';
      break;
    case 'catzoxford':
      decal = catzoxford;
      fill = '#8cf';
      break;
    case 'neots':
      decal = neots;
      fill = '#00AEEF';
      break;
    case 'darwin':
      decal = darwin;
      fill = '#000080';
      break;
    case 'lmbc':
      decal = null;
      fill = '#DC0000';
      break;
    case 'putney':
      decal = putney;
      fill = '#000033';
      break;
    case 'cantabs':
      decal = cantabs;
      fill = '#000033';
      break;
    case 'barnes':
      decal = barnes;
      fill = '#1667F6';
      break;
    case 'nines':
      decal = nines;
      fill = '#599bfc';
      break;
    case 'champs':
      decal = null;
      fill = '#fc6621';
      break;
    case 'balliol':
      decal = balliol;
      fill = '#000000';
      break;
    case 'brasenose':
      decal = null;
      fill = '#202020';
      break;
    case 'caius':
      decal = caius;
      fill = '#202020';
      break;
    case 'christchurch':
      decal = null;
      fill = '#000065';
      break;
    case 'christs':
      decal = christs;
      fill = '#00214E';
      break;
    case 'churchill':
      decal = null;
      fill = '#FF70A0';
      break;
    case 'clare':
      decal = null;
      fill = '#FFCC00';
      break;
    case 'clarehall':
      decal = clarehall;
      fill = '#FFCC00';
      break;
    case 'corpus':
      decal = corpus;
      fill = '#8d0603';
      break;
    case 'corpuschristioxford':
      decal = corpusoxford;
      fill = '#000040';
      break;
    case 'downing':
      decal = null;
      fill = '#AB0F62';
      break;
    case 'edmunds':
      decal = edmunds;
      fill = '#0063cb';
      break;
    case 'exeter':
      decal = null;
      fill = '#DF0000';
      break;
    case 'fat':
      decal = null;
      fill = '#000044';
      break;
    case 'fitz':
      decal = null;
      fill = 'lightgray';
      break;
    case 'girton':
      decal = girton;
      fill = '#004600';
      break;
    case 'greentempleton':
      decal = greentempleton;
      fill = '#000032';
      break;
    case 'hertford':
      decal = hertford;
      fill = '#8E0000';
      break;
    case 'homerton':
      decal = homerton;
      fill = '#f9f9f9';
      break;
    case 'hh':
      decal = hh;
      fill = '#ffffff';
      break;
    case 'jesus':
      decal = jesus;
      fill = '#202020';
      break;
    case 'jesusOxford':
      decal = null;
      fill = '#009C3A';
      break;
    case 'keble':
      decal = keble;
      fill = '#F9F9F9';
      break;
    case 'kings':
      decal = null;
      fill = 'purple';
      break;
    case 'magdalene':
      decal = magdalene;
      fill = '#8c00cd';
      break;
    case 'mansfield':
      decal = mansfield;
      fill = '#d40000';
      break;
    case 'merton':
      decal = merton;
      fill = '#ebebeb';
      break;
    case 'murray':
      decal = null;
      fill = '#F5F5F5';
      break;
    case 'new':
      decal = newCollege;
      fill = '#800080';
      break;
    case 'newnham':
      decal = newnham;
      fill = '#000066';
      break;
    case 'pembroke':
      decal = pembroke;
      fill = '#AAF0FF';
      break;
    case 'pembrokeOxford':
      decal = pembrokeOxford;
      fill = '#F0F0F0';
      break;
    case 'peterhouse':
      decal = peterhouse;
      fill = '#0000CC';
      break;
    case 'queens':
      decal = queens;
      fill = 'darkgreen';
      break;
    case 'queensOxford':
      decal = queensOxford;
      fill = '#000066';
      break;
    case 'regentspark':
      decal = regentspark;
      fill = '#EE0000';
      break;
    case 'robinson':
      decal = robinson;
      fill = '#0099FF';
      break;
    case 'selwyn':
      decal = selwyn;
      fill = '#F5F5F5';
      break;
    case 'sidney':
      decal = sidney;
      fill = '#000066';
      break;
    case 'somerville':
      decal = somerville;
      fill = '#EE0000';
      break;
    case 'tithall':
      decal = null;
      fill = '#202020';
      break;
    case 'wolfson':
      decal = wolfson;
      fill = '#0000FF';
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

const emmanuel = (
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

const city = (
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

const catz = (
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

const catzoxford = (
  <g>
    <circle
      cx="375"
      cy="115"
      r="50"
      stroke="#900"
      stroke-width="17"
      fill="#8cf"
    />
    <circle cx="375" cy="115" r="6" stroke-width="0" fill="#900" />
    <g transform="translate(367.625,55.59467)" id="WheelSpike">
      <path
        fill="#900"
        stroke-width="0"
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
      id="use4966"
      transform="matrix(0.5,-0.8660254,0.8660254,0.5,87.98071,382.42606)"
      width="200"
      height="230"
    />
  </g>
);

const neots = (
  <g transform="matrix(0.99756405,-0.06975647,0.06975647,0.99756405,397.77684,-2.7542188)">
    >
    <path
      d="m -30.534,26.522 -0.521,174.724 58.477,4.757 0.136,-178.76 -58.092,-0.721 z"
      style={{ fill: '#2e3192' }}
    />
  </g>
);

const darwin = (
  <g>
    <path
      id="rect5394"
      d="m 337.53904,53.926029 18.1628,0.199425 -0.12489,171.551716 -18.05434,-1.84468 z"
      style={{
        fill: '#ffff00',
        stroke: '#ffff00',
        strokeWidth: 0.8894608,
      }}
      transform="matrix(0.99725744,-0.07401084,0.06574439,0.9978365,0,0)"
    />
    <path
      id="rect5394-1"
      d="m 398.76443,48.783955 17.90459,0 -0.0784,176.637665 -17.82622,-1.24753 z"
      style={{
        fill: '#ff0000',
        stroke: '#ff0000',
        strokeWidth: 0.8975876,
      }}
      transform="matrix(0.9981883,-0.0601674,0.0627044,0.99803214,0,0)"
    />
    <path
      id="rect5394-7"
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

const putney = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#ffffff', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const cantabs = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#cccccc', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const caius = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#95E3C9', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const barnes = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#ffffff', strokeWidth: 32, fill: 'none' }}
    />
  </g>
);

const nines = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#fffd38', strokeWidth: 32, fill: 'none' }}
    />
  </g>
);

const balliol = (
  <path
    style={{ fill: '#d40000', stroke: 'none', strokeWidth: 1 }}
    d="M 109.76752,42.435275 76.110919,192.11109 428.81461,203.01844 z"
  />
);

const christs = (
  <g transform="rotate(-4) translate(410, 85)">
    <path d="M 0,0 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
    <path d="M 0,55 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
    <path d="M 0,110 l 0,30 l 25,-30 l 0,-30 z" fill="white" />
  </g>
);

const clarehall = (
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

const corpus = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: '#FFFFFF', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const corpusoxford = (
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

const edmunds = (
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

const girton = (
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

const greentempleton = (
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

const hertford = (
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

const homerton = (
  <path
    d="m 396.15605,25.14572 23.99452,-1.642361 14.7652,176.467821 -23.90835,-0.0963 z"
    style={{
      fill: '#000000',
      fillOpacity: 1,
      stroke: '#000000',
      strokeWidth: 1,
    }}
  />
);

const hh = (
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

const jesus = (
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

const keble = (
  <g transform="rotate(-4)  translate(355,143) ">
    <path
      d="M 60,-100 L -15,0 L 60,100"
      style={{ stroke: '#FF191C', strokeWidth: 25, fill: 'none' }}
    />
  </g>
);

const magdalene = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 6,0 l 0,300"
      style={{ stroke: '#000fb0', strokeWidth: 20, fill: 'none' }}
    />
  </g>
);

const mansfield = (
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

const merton = (
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

const newCollege = (
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

const newnham = (
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

const pembroke = (
  <g transform="rotate(-4) translate(410,85)">
    <path d="M -60,-33 l 00,00 l 60,00 l 00,40 z" fill="#000066" />
    <path d="M -60,14 l 00,40 l 60,43 l 00,-40 z" fill="#000066" />
    <path d="M -60,100 l 00,40 l 60,6 l 0,00 z" fill="#000066" />
  </g>
);

const pembrokeOxford = (
  <g>
    <path d="M 432,0 l 16,250" style={{ strokeWidth: 35, stroke: '#ff7777' }} />
  </g>
);

const peterhouse = (
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

const queens = (
  <g transform="rotate(-4) translate(400,20)">
    <path
      d="M 0,0 l 0,300 "
      style={{ stroke: 'white', strokeWidth: 30, fill: 'none' }}
    />
  </g>
);

const queensOxford = (
  <g transform="rotate(-3) scale(0.71 0.81) translate(140,50)">
    <rect fill="#FFFFFF" width="100%" height="33.33%" y="33.33%" />
    <rect fill="#000066" width="100%" height="33.33%" y="66.66%" />
  </g>
);

const regentspark = (
  <path
    transform="rotate(-3) translate(100,30)"
    d="M 280,0 L 280,200 M 0,100 L 400,100"
    fill="none"
    stroke="white"
    strokeWidth="25"
  />
);

const robinson = (
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

const selwyn = (
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

const sidney = (
  <g transform="rotate(-4) translate(410,80)">
    <path d="M 0,0 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,40 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,80 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
    <path d="M 0,120 l 0,15 l 15,-15 l 0,-15 z" fill="red" />
  </g>
);

const somerville = (
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

const wolfson = (
  <path
    d="m 398.56359,25.01348 21.01371,-1.395417 12.93093,176.316257 -20.93824,-0.17775 z"
    style={{ fill: '#ffff00', stroke: '#ffff00', strokeWidth: 0.97328287 }}
  />
);

Blade.propTypes = {
  /**
   * Size of the SVG illustration
   * */
  size: PropTypes.number,
  club: PropTypes.oneOf(['city', 'emmanuel', 'catz', 'neots']),
};

export default Blade;
