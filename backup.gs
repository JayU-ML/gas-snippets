function Backup() {  
    let file = DriveApp.getFileById('<file id>');
    let folder = DriveApp.getFolderById('folder id');
    file.makeCopy(file.getName()+'_'+Utilities.formatDate(new Date(), 'JST', 'yyyy-MM-dd-HH'),folder);   
  }