/**
 * Main function to get spreadsheet data and start the document creation process
 */
function getSpreadsheetData() {
  logEvent('Script Started'); // Log the start of the script

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.toast('Script Initialized', 'Start'); // Notify the user

  // Access the "Data" tab
  var dataSheet = ss.getSheetByName('Data');
  if (!dataSheet) {
    logEvent('Data sheet not found');
    ss.toast('Data sheet not found', 'Error');
    return;
  }

  // Get all data from the "Data" sheet
  var data = dataSheet.getDataRange().getValues();
  if (data.length <= 1) {
    logEvent('No data available in Data sheet');
    ss.toast('No data available in Data sheet', 'Error');
    return;
  }

  // Configuration to get the data directly from the "Data" tab
  var spreadsheetData = {
    spreadsheet: ss,
    dataSheet: dataSheet,
    data: data
  };

  // Call the function to create Google Docs
  createDocs(spreadsheetData);
}
