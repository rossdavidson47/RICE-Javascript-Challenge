// from data.js
var tableData = data;

// Grab the table and ids
const tableBody = d3.select('tbody');
// Select the filter button
const filterButton = d3.select('#filterButton');
// Select the clear filter button
const clearButton = d3.select('#clearButton');
// Select the form
const dateForm = d3.select('#form');
// Select the date
const dateValue = d3.select('#datetime');

//Populate table from data file (uses code from 03-Evr_D3_Table
function buildTable(dataSample){
    dataSample.forEach((dataReport) => {
        var row = tableBody.append("tr");
        Object.entries(dataReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};

//build the table the first time
buildTable(data);

// Create event handlers for clicking the button or pressing the enter key
filterButton.on("click", runFilterFunction);
dateForm.on("submit", runFilterFunction);
clearButton.on("click", runClearFunction);

// Create the function to run for both events
function runFilterFunction(){
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Get the value property of the input element
  var inputValue = dateValue.property("value");
  //print to console to check
  console.log(inputValue);
  //find filtered data
  var filteredData = tableData.filter(row => row.datetime === inputValue);
  //print to console to check
  console.log(filteredData);
  //clear table
  tableBody.selectAll('tr').remove()
  buildTable(filteredData)
}

function runClearFunction(){
    tableBody.selectAll('tr').remove()
    buildTable(data);
}

