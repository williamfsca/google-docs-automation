/**
 * Main function to get spreadsheet data and start the document creation process
 */
function getSpreadsheetData() {
  logEvent('Script Iniciado'); // Log the start of the script

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.toast('Script Inicializado', 'Start'); // Notify the user

  // Acessa a aba "Data"
  var dataSheet = ss.getSheetByName('Data');
  if (!dataSheet) {
    logEvent('Data sheet not found');
    ss.toast('Data sheet not found', 'Error');
    return;
  }

  // Obtém todos os dados da planilha "Data"
  var data = dataSheet.getDataRange().getValues();
  if (data.length <= 1) {
    logEvent('No data available in Data sheet');
    ss.toast('No data available in Data sheet', 'Error');
    return;
  }

  // Configuração para pegar os dados diretamente da aba "Data"
  var spreadsheetData = {
    spreadsheet: ss,
    dataSheet: dataSheet,
    data: data
  };

  // Chama a função para criar os documentos do Google Docs
  createDocs(spreadsheetData);
}
