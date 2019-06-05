var React = require('react');
var ReactDOMServer = require('react-dom/server');
var fs = require('fs');
var ReactRowingBlades = require('../lib/index');

var Blade = ReactRowingBlades.default;

var clubs = [
  ...ReactRowingBlades.clubs.cambridge,
  ...ReactRowingBlades.clubs.oxford,
  ...ReactRowingBlades.clubs.uk,
];

clubs.forEach(club => {
  var output = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Blade, { size: 500, club: club }, null)
  );

  fs.writeFile('blades/' + club + '.svg', output, err => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log(club + ' saved');
  });
});
