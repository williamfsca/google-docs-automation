/**
 * Function to test access to the destination folder and template file
 */
function testAccess() {
  try {
    var destinationFolderId = 'YOUR_FOLDER_ID'; // Replace with the correct folder ID
    var templateFileId = 'YOUR_TEMPLATE_FILE_ID'; // Replace with the correct template file ID

    // Test access to the folder
    var destinationFolder = DriveApp.getFolderById(destinationFolderId);
    Logger.log('Access to folder successful: ' + destinationFolder.getName());
    
    // Test access to the template file
    var templateFile = DriveApp.getFileById(templateFileId);
    Logger.log('Access to template file successful: ' + templateFile.getName());

  } catch (e) {
    Logger.log('Error accessing the folder or template file: ' + e.message);
  }
}
