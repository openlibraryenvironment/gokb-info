
# Editing of KBART files

## Frequent errors

When editing KBART files, some errors occur very frequently and should be avoided.

* **Incorrect character encoding:** The character encoding of the KBART file must be UTF-8. Some providers differ from this standard, but the character encoding can also change unintentionally in the course of editing KBART files. Therefore, you should always check it.
* **Reformatting dates:** Dates such as publication dates, coverage dates, etc. must be given in the format YYYY-MM-DD. Spreadsheet programmes sometimes automatically change this formatting to other formats such as DD.MM.YYYY. This reformatting must be avoided.
* **Reformatting ISBNs:** Sometimes the ISBN-13 in particular is present without hyphens. Spreadsheet programs then misinterpret it as a numerical value and display it in exponential notation (e.g. 9.78179E+12). This causes the last digits to be lost and the ISBN becomes unusable.

## Microsoft Excel

KBART files cannot be loaded with Excel via the "Open" menu. They must be imported in an empty workbook via the menu item _Data_ > _From Text/CSV_.

![Screenshot_Documentation_Excel_file_open](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/ec082e6d-d815-4b9b-a357-f42e9a8071b6)

### Import settings

An import window will open. In this window it is extremely important to make the following settings correctly:

![Screenshot_Documentation_import_settings](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/97a6105b-7acd-4e9a-ae82-496f942ce900)

* _File origin:_ Here you can select the character encoding in which the KBART file is available. This is not automatically recognized by Excel. Excel suggests the encoding "1252: Western European (Windows)", which is wrong in most cases. According to the NISO standard, the encoding must be "65001: Unicode (UTF-8)". Select this encoding from the dropdown. _Note:_ It is possible that providers do not follow the NISO standard and choose a different encoding. In this case, please select the encoding used by the provider. To learn how to identify the encoding, see the section "Recognize and correct character encoding".
* _Separators options:_ For KBART files, tab stops are default separators. Therefore, select tab stops. Usually this selection is already preset.
* _Data type Detection:_ Select "Do not detect data types", because Excel can corrupt the data by an incorrect data type recognition.

### Correction of header line

Excel does not recognize the column heading row of the KBART file as headings and adds another row.

![Screenshot_Documentation_Excel_Header_correction](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/4996e542-6c90-4157-a300-d05070b49a84)

* Deselect this line as a heading line. To do this, remove the check mark under _Design_ > _Header Row_.
* Now delete the empty row by right-clicking on the row number "1" and selecting _Delete_ from the context menu.

### Editing the KBART file

You can now edit the file as you wish. Please note the standards of the KBART format, which are summarized [here](https://gokb.org/documentation/kbart-introduction.html).

### Saving the KBART file

Save the KBART file via _File_ > _Save as_. After you have selected a storage location, a window appears. Here you have to select the following settings:

  * _File type:_ Text (tab-delimited) (*.txt)
  * _Tools_ > _Web Options_ > _Encoding_ tab > _Save document as_: "Unicode (UTF-8)"

*Important note:* Excel often saves in an incorrect character encoding despite correct procedures. Therefore, check the file for its character encoding as indicated in the section "Recognize and correct character encoding".


## LibreOffice Calc

[LibreOffice Calc](https://de.libreoffice.org/discover/calc/) is a free spreadsheet program suitable for editing KBART files. KBART files can be opened simply via _File_ > _Open_.

### Import settings

An import window will open. In this window it is extremely important to make the following settings correctly:

![Screenshot_LibreOffice_Calc_text_import_settings](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/1365ba48-87b9-4358-ac64-5e8334161bae)

* _Import:_ Here you can select the Character set in which the KBART file is available. This is not automatically recognized by LibreOffice Calc. LibreOffice Calc suggests the encoding "Unicode (UTF-8)" which is correct in most cases. According to the NISO standard, the encoding must be "Unicode (UTF-8)". _Note:_ It is possible that providers do not follow the NISO standard and choose a different encoding. In this case, please select the encoding used by the provider. To learn how to identify the encoding, see the section "Recognize and correct character encoding".
* _Separator options:_ For KBART files, tab stops are default separators. Therefore, select tab stops. Usually this selection is already preset.
* _Other options:_ Deselect all options here. In particular, the "Detect special numbers" must be switched off, because an incorrect number detection can corrupt the data.

### Editing the KBART file

You can now edit the file as you wish. Please note the standards of the KBART format, which are summarized [here](https://gokb.org/documentation/kbart-introduction.html).

### Saving the KBART file

Save the KBART file via _File_ > _Save as_. Please select the following settings here:

  * _File name:_ Specify the file name with the suffix ".txt" or ".tsv". The GOKb accepts both extension.
  * _File type:_ CSV (*.csv)
  * _Automatic file name extension:_ Remove the check mark from this option
  * _Edit filter settings:_ Select this option

![Screenshot_Saving_KBART_file_settings](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/76378976-a7f7-48ef-82ca-11cb588bd67a)

After selecting the "Save" button, the program asks you to confirm that the file should be saved in CSV format. Confirm the dialogue.

A new Export text file dialogue then opens. Make the following settings here:

  * _Character set:_ Unicode (UTF-8)
  * _Field delimiter:_ {Tabulator}
  * _String delimiter:_ " (Superscript double quotes)
  * _Save cell formulae instead fo calculated values:_ Select or check the box
  * All other options: Deselect or uncheck

![Screenshot_LibreOffice_Calc_settings](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/40c1844b-0c1d-4e2f-9082-8cf78e0a1fbe)

You confirm the selection via "OK".

## Recognize and correct character encoding

To recognize and edit the character encoding, the GOKb team recommends the free tool [Notepad++](https://notepad-plus-plus.org/). Since KBART files are text files, they can be edited with the text editor Notepad++.

Open the KBART file in Notepad++. Normally Notepad++ recognizes the character encoding of the file and displays it in the footer of the window. If the encoding has not been recognized correctly, you will recognize this by incorrect characters that are displayed by Notepad++ with a black background:

  * Punctuation marks like apostrophes
  * Umlauts like ä, ö, ü
  * Other letters and characters outside the standard Latin alphabet (accents etc.)

![Screenshot_Notepad_file_encoding](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/3233c51a-d33d-4e6c-8303-13c2f53e6af7)


You can use the menu item _Encoding_ to select the correct character encoding of the file so that the characters mentioned are displayed correctly. Using the same menu item _Encoding_ > _Convert to UTF-8_ you can change the encoding to the correct character encoding UTF-8 recommended by the KBART standard and then save it.

![Screenshot_Notepad_file_encoding_convert](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/516635f7-46db-49e0-b5c1-118e42f88333)

