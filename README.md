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

### How to Find the Folder ID and Template File ID

To use the automation script properly, you need to find the correct **ID** for both the **Folder ID** and the **Template File ID** in Google Drive.

The **ID** can be found in the URL of the Google Drive item (like a folder or a Google Docs template). The **ID** is the part of the URL that comes after `/d/` and before the next `/`.

#### Example

For a URL like this:

https://docs.google.com/spreadsheets/d/XXXXXXXXXX/edit?gid=YYYYYYYY#gid=YYYYYYYY

The ID you need to use is the string that appears after `/d/` and before `/edit`.

In the example above, the ID would be the part labeled `XXXXXXXXXX`.

### 2. Create the Script Files

Go to **Extensions > Apps Script** in your Google Sheet and create the following script files:

1. **DataHandler.gs** - Contains the script to read data from the sheet and initiate the document creation process.
2. **DocCreator.gs** - Contains the script to create the documents based on the data provided.
3. **Menu.gs** - Adds a custom menu to the Google Sheets UI to run the script.
4. **Logger.gs** - Contains functions to log events in the spreadsheet.
5. **TestAccess.gs** - Contains a function to test access to the destination folder and template file.

### 3. Prepare the Google Docs Template

To use this automation, you need to create a **Google Docs template** with specific placeholders (variables) that will be dynamically replaced with data from your Google Sheet.

- **Create a Google Docs Template**:
  - Format your template as needed, adding any headers, paragraphs, or other elements you want in every generated document.
- **Define Variables in the Template**:
  - Use double angle brackets (`<< >>`) to indicate variables that should be dynamically replaced by the script:
    - `<<url>>` - Will be replaced by the URL from the "URL" column in the Google Sheet.
    - `<<title>>` - Will be replaced by the title from the "Title" column in the Google Sheet.

#### Example of Template Variables

Your Google Docs template might contain text like:

```
Title: <<title>>

You can access the page using this link: <<url>>
```
#### Example of Google Sheets

https://docs.google.com/spreadsheets/d/1IPl0DYPs0oUvn5gea6ga8kpb71irI1yjHL0gx5JUgB8/edit?usp=sharing

## Conclusion

By following this guide, you will have a fully automated process for generating Google Docs from data in a Google Sheet, complete with customizable templates, error tracking, and an easy-to-use menu interface.

---

Inspired by the script from Phil Bainbridge: [Bulk Create Google Docs from Google Sheets](https://www.pbainbridge.co.uk/2020/05/bulk-create-google-docs-from-google.html)
