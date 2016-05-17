/* Uncomment the following line to use jQuery */
// var $ = require('jquery')
var d3 = require('d3')

var path = d3.geo.path()

var width = 960,
    height = 1160;

var svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height);

d3.json('../data/us-states.json', function (json) {
  console.log(json)
  svg.selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path)

})
