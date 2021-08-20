// シート1「YourCalendarID」でカレンダーIDを取得
const calendarss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('<カレンダーIDシート>');
const calendarId = calendarss.getRange('A2').getValue();

function addEvent() {
  const calendar = CalendarApp.getCalendarById(calendarId);

  const values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('<シート名>').getDataRange().getValues();;
  values.shift();

  for(let i = 0; i < values.length; i++){
    
    const title = values[i][0];
    const startTime = new Date(values[i][1]);
    const endTime = new Date(values[i][2]);
    const description = values[i][3];

    calendar.createEvent(title, startTime, endTime, description);
  }
}