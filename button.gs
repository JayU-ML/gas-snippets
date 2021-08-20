function onOpen(){

    let ui = SpreadsheetApp.getUi()
    let menu = ui.createMenu("ボタン名");
    
    menu.addItem("イベント名","addEvent");
  
    //スプレッドシートにボタンを反映
    menu.addToUi();
  }