import React from 'react';
import PropTypes from 'prop-types';

const Blade = ({ size, club }) => {
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
    case 'caius':
      decal = caius;
      fill = '#202020';
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
    case 'kings':
      decal = null;
      fill = 'purple';
      break;
    case 'magdalene':
      decal = magdalene;
      fill = '#8c00cd';
      break;
    case 'murray':
      decal = null;
      fill = '#F5F5F5';
      break;
    case 'newnham':
      decal = newnham;
      fill = '#000066';
      break;
    case 'pembroke':
      decal = pembroke;
      fill = '#AAF0FF';
      break;
    case 'peterhouse':
      decal = peterhouse;
      fill = '#0000CC';
      break;
    case 'queens':
      decal = queens;
      fill = 'darkgreen';
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
      width={(size * 500) / 230}
      height={size}
      viewBox="0 0 500 230"
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
};

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

const magdalene = (
  <g transform="rotate(-4) translate(431, 20)">
    <path
      d="M 6,0 l 0,300 "
      style={{ stroke: '#000fb0', strokeWidth: 20, fill: 'none' }}
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

Blade.defaultProps = {
  size: 100,
  club: 'city',
};

export default Blade;
