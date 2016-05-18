/* Uncomment the following line to use jQuery */
// var $ = require('jquery')
var d3 = require('d3')


var width = 960,
    height = 960;

var svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height);

var projection = d3.geo.albersUsa()
  .translate([width / 2, height / 2])
  .scale([1000]);

var path = d3.geo.path()
  .projection(projection)


d3.json('assets/data/us-states.json', function (error, json) {
  if (error) {
    console.log("error getting us-states.json: ", error)
    return
  }
  svg.selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('fill', 'steelblue')


})
