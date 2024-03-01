function SaveAttachement(attachment, targetDirectory) {
  console.log(attachment.getName())
  var newsweek = DriveApp.getFoldersByName(targetDirectory).next();
  newsweek.createFile(attachment);
  console.log(newsweek.getName());
}

function myFunction() {

  var searchQuery = PropertiesService.getScriptProperties().getProperty("SearchQuery");
  var targetDirectory = PropertiesService.getScriptProperties().getProperty("TargetDirectory");

  var threads = GmailApp.search(searchQuery)
  console.log("threads count")
  console.log(threads.length)
  for (var t = 0; t < threads.length; t++) {
    var thread = threads[t]
    var msgs = thread.getMessages();
    console.log("messages count")
    console.log(msgs.length);
    for (var j = 0; j < msgs.length; j++) {
      var attachments = msgs[j].getAttachments();
      for (var k = 0; k < attachments.length; k++) {
        console.log("saving attachement")
        SaveAttachement(attachments[k], targetDirectory)
        
        thread.reply("Dziękuje")
        thread.moveToArchive();
      }
    }
  }
}
