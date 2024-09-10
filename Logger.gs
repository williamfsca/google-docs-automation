function logEvent(action) {
  var theUser = Session.getActiveUser().getEmail();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var logSheet = ss.getSheetByName('Log');
  
  if (!logSheet) {
    logSheet = ss.insertSheet('Log');
    logSheet.appendRow(['Timestamp', 'User', 'Action']);
  }

  var dateTime = new Date();
  var timeZone = ss.getSpreadsheetTimeZone();
  var niceDateTime = Utilities.formatDate(dateTime, timeZone, "dd/MM/yy @ HH:mm:ss");
  var logData = [niceDateTime, theUser, action];
  logSheet.appendRow(logData);
}
