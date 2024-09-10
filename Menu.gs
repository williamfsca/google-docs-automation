/**
 * Adds a custom menu to the Google Sheets UI to run the script.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Content Generator')
    .addItem('Generate Documents', 'getSpreadsheetData')
    .addToUi();
}
