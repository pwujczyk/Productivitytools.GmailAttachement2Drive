function SaveAttachement(attachment, targetDirectory){
  console.log(attachment.getName())
  var newsweek=DriveApp.getFoldersByName(targetDirectory).next();
  newsweek.createFile(attachment);
  console.log(newsweek.getName());
}

function myFunction() {

var searchQuery=PropertiesService.getScriptProperties().getProperty("SearchQuery");
var targetDirectory=PropertiesService.getScriptProperties().getProperty("TargetDirectory");

  var threads = GmailApp.search(searchQuery)
  var msgs = GmailApp.getMessagesForThreads(threads);
  for (var i = 0; i < msgs.length; i++) {
    for (var j = 0; j < msgs[i].length; j++) {
      var attachments = msgs[i][j].getAttachments();
      for (var k = 0; k < attachments.length; k++) {
        SaveAttachement(attachments[k], targetDirectory)
      }
    }
  }
}
