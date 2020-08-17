// from data.js
var tableData = data;

// Grab the table and ids
const tableBody = d3.select('tbody');
// Select the clear filter button
const clearButton = d3.select('#clearButton');
// Select the filter button
const filterButton = d3.select('#filterButton');

//Populate table from data file (uses code from 03-Evr_D3_Table)
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
// dateForm.on("submit", runFilterFunction);
clearButton.on("click", runClearFunction);
filterButton.on("click", runFilterFunction);

//Clear filters and rebuild
function runClearFunction(){
    tableBody.selectAll('tr').remove()
    buildTable(data);
//Please tell me how to reset the form defaults to blank?? I tried so hard
}

// Create the function to run filters
function runFilterFunction(){
  // Prevent the page from refreshing
  d3.event.preventDefault();
  //initialise filterData with full data
  filteredData = data

  //find filtered data by date 
  var inputValue = d3.select('#datetime').property("value");
    if (inputValue != "") {
        console.log(inputValue);
        var filteredData = filteredData.filter(row => row.datetime === inputValue);
        }
  //find filtered data by city 
  var inputValue = d3.select('#city').property("value");
    if (inputValue != "") {
        console.log(inputValue);
        var filteredData = filteredData.filter(row => row.city === inputValue);
        }
  //find filtered data by State 
  var inputValue = d3.select('#state').property("value");
    if (inputValue != "") {
        console.log(inputValue);
        var filteredData = filteredData.filter(row => row.state === inputValue);
        }
  //find filtered data by Country 
  var inputValue = d3.select('#country').property("value");
    if (inputValue != "") {
        console.log(inputValue);
        var filteredData = filteredData.filter(row => row.country === inputValue);
        }
  //find filtered data by Shape
  var inputValue = d3.select('#shape').property("value");
    if (inputValue != "") {
        console.log(inputValue);
        var filteredData = filteredData.filter(row => row.shape === inputValue);
        }
  //print to console to check
  console.log(filteredData);
  //clear table and rebuild with filtered data
  tableBody.selectAll('tr').remove()
  buildTable(filteredData)
}