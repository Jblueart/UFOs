// import the data from data.js // don't want variable to be reassigned 
const tableData = data;

//referencce the html table using d3
var tbody = d3.select("tbody");

//let vegetables = ['Carrots', 'Peas', 'Lettuce', 'Tomatoes'];

//for (var i = 0; i<vegetables.length; i++){
//    console.log("I love "= vegetables[i]);
//};

//build a table

function buildTable(data) {
    //first clear out any existing data
    tbody.html("");


// loop thru each object, append a row to the html tabel add each value from the object into a cell.

//tr = tablerow. td = tabledata standard abreviations

data.forEach((dataRow) => {
    let row = tbody.append("tr");

//loop thru each field in the data row and add each value as a table cell (td)

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

}

function handleClick() {

  let date = d.3.select("#datetime").property("value");
  let filteredData = tableData;

//if-statement syntax: if (condition) {code to execute }

if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);
};
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);

};
