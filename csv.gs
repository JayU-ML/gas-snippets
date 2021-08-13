function CSV(URL, mojicode) {

  let code = "UTF-8";

  if (!URL) {
    return;
  }

  // 文字コード
  if (mojicode === 0) {
    code = "UTF-8";
  }else if (mojicode === 1) {
    code = "Shift_JIS";
  }else if (mojicode === 2) {
    code = "EUC-JP";
  }else{
    code = "UTF-8";
  }

  // CSVファイル取得
  response = UrlFetchApp.fetch(URL);
  let csv = response.getContentText(code); 
  // CSVデータをパースする
  let csvdata = Utilities.parseCsv(csv);

  return csvdata
}