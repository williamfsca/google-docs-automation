# Google Docs Automation with Google Sheets

This project provides Google Apps Script code to automate the creation of Google Docs from data stored in a Google Sheet. Each row in the sheet can specify different destination folders and templates, allowing for a flexible and customizable document generation process.

## Features

- Automatically create Google Docs based on data from a Google Sheet.
- Use different destination folders and templates for each row.
- Dynamically insert data such as URLs and titles into the generated documents.
- Track progress and errors with log events.
- Custom menu for easy script execution.
- Test access to folders and templates to ensure correct setup.

## Setup

### 1. Prepare Your Google Sheet

Create a Google Sheet with a tab named **Data**. The **Data** tab should have the following columns:

| **URL** | **Title** | **Document Link** | **Folder ID** | **Template File ID** |
|---------|-----------|-------------------|---------------|----------------------|
| URL1    | Title 1   |                   | Folder ID 1   | Template ID 1        |
| URL2    | Title 2   |                   | Folder ID 2   | Template ID 2        |
| ...     | ...       |                   | ...           | ...                  |

- **URL**: The URL to be inserted into the generated document.
- **Title**: The title of the document to be created.
- **Document Link**: (Leave empty) The link to the created document will be placed here.
- **Folder ID**: The ID of the destination folder where the document will be stored.
- **Template File ID**: The ID of the Google Docs template to use for the document.

### 2. Create the Script Files

Go to **Extensions > Apps Script** in your Google Sheet and create the following script files:

1. **DataHandler.gs** - Contains the script to read data from the sheet and initiate the document creation process.
2. **DocCreator.gs** - Contains the script to create the documents based on the data provided.
3. **Menu.gs** - Adds a custom menu to the Google Sheets UI to run the script.
4. **Logger.gs** - Contains functions to log events in the spreadsheet.
5. **TestAccess.gs** - Contains a function to test access to the destination folder and template file.
