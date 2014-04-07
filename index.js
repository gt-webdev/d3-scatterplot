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

/**
 *  4. Load data
 */

/**
 *  5. Append axes with no labels
 */

/**
 *  6. Append data elements to the data
 */

/**
 *  7. Differentiate categories of data elements with color
 */

/**
 *  8. Add legend
 */