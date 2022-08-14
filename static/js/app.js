// from data.js
var tableData = data;
var filter_btn = d3.select("#filter-btn");
// get table references
var tbody = d3.select("tbody");
var reset_table = d3.select("#reset_table");
filter_btn.on("click", function(){
  d3.event.preventDefault();
  tbody.selectAll("td").remove();

  var datetime = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");
  var filter = "var filtered_table = tableData";

  if(datetime) { filter = filter.concat(".filter(sighting => sighting.datetime === datetime)"); }
  if(city) { filter = filter.concat(".filter(sighting => sighting.city === city)"); }
  if(state) { filter = filter.concat(".filter(sighting => sighting.state === state)"); }
  if(country) { filter = filter.concat(".filter(sighting => sighting.country === country)"); }
  if(shape) { filter = filter.concat(".filter(sighting => sighting.shape === shape)"); }

    console.log(filter);
    eval(filter);

    

});


function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
