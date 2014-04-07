/**
 *  1. Define document sizes
 */
var margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

/**
 *  2. Define scales and axes
 *  7. (Later) Define category colors
 */
// Scales map an input domain to an output range;
// AKA maps values from your data to some pixel value,
// because we're defining the range as the pixel values
// encompassed by the main SVG element.
//
// We set the domain later when we load the data.
var x = d3.scale.linear()
  .range([0, width]); // x and y are functions
var y = d3.scale.linear()
  .range([height, 0]); // height to 0, because origin is top left corner

// Axes are the reference lines for scales that are actually seen
// on the screen. d3 handles labeling, spacing of ticks, etc. with
// the axis function.
var xAxis = d3.svg.axis()
  .scale(x) // Pass in the scale the axis is based on
  .orient("bottom");
var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left");

/**
 *  3. Append SVG to place elements in.
 */
// Appending an svg element to the body and
// a g element that's moved over to account for margins
//
  // A g element is a container used to group objects.
var svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/**
 *  4. Load data
 */
d3.tsv("data.tsv", function(error, data) {
  data.forEach(function(d) {
    d.sepalLength = +d.sepalLength; // + operator converts string to integer
    d.sepalWidth = +d.sepalWidth;
  });

  // Defines domain of scales.
  //
  // Extent is a d3 function that returns the minimum and maximum
  // function in an array that is passed in.
  x.domain(d3.extent(data, function(d) {return d.sepalWidth;}));
  y.domain(d3.extent(data, function(d) {return d.sepalLength}));

  /**
   *  6. Append axes with no labels
   */

  /**
   *  5. Append data elements to the data
   */
  // When d3 selects all elements with the class dot, no elements
  // are currently on the page.
  // d3 creates new elements that are circles with the enter() function
  // and binds the data passed into the data function to each of these elements.
  // Each data point's x and y coordinates are based on its
  // sepalWidth and sepalLength values.
  svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("r", 3.5) // Each data point has a radius of 3.5 pixels.
    .attr("cx", function(d) {return x(d.sepalWidth);})
    .attr("cy", function(d) {return y(d.sepalLength);});

  /**
   *  7. Differentiate categories of data elements with color
   */

  /**
   *  8. Add legend
   */
});