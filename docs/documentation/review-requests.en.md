# Working with Review Requests

Review requests are central workflow components of the GOKb. Review requests inform you whether errors occurred during processing or import of components or whether possible inconsistencies were discovered. Simple information and feedback is also reported back to you in the form of review requests.

The aim of each curatory group should be to view, edit if necessary, and close all review requests related to a package submission. In doing so, it should be noted:

* Processing a review request requires - depending on the type - processing of the respective component. The review request must then be closed manually.
* Many review requests are for information only and can be closed without processing.
* The GOKb reacts very sensitively to possible inconsistencies in the data. If necessary, review requests can be opened by the system, which only supposedly describe an error, although everything is correct. These can be closed after checking.

## Find review requests

There are three ways to find review requests in the GOKb.

* In the Dashboard
* In the Package view
* In the Review view

### Dashboard

The dashboard displays all review requests associated with the selected curatory group.

![Screenshot_view_dashboard_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/b0aa713c-9c56-4983-89a3-78d33507660f)

### Package view

The "Summary" tab in the package view lists all reviews that belong to the currently selected package. This includes reviews that relate to the package as a whole or individual package titles, as well as reviews for the linked reference titles. You can switch the display of the respective reviews using the button. A list of results then appears, from which you can access the full view for processing or close selected reviews directly.

![Screenshot_package_view_review_quest_referencetitles_2024_en](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/9985cfd1-0cfb-4f93-8114-96b5e1cc17e8)

By processing the linked reference titles, you can directly recognize whether these titles contain duplicates or incorrect identifiers, for example, and correct them yourself or report them to the relevant curatory group. This has the advantage that correct reference data is processed in the ERM systems in addition to the corrected package data.

### Review view

You can access the review request view via the menu. Here you can find all review requests and filter them by the following criteria:

* **Cause** - A free text field
* **Curatory Group** - Selection of the curatory group to which the review request is assigned.
* **Component to review** - A selection field in which all components (providers, packages, titles, etc.) are searchable.
* **Category** - A selection of review request categories. An overview of the categories can be found below.
* **Status** - A selection of the review request status (Open, Closed, Deleted).

![Screenshot_view_reviews_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/0d348480-b4fc-4bae-8338-0b0e475e98ed)


## View and edit review requests

In the respective result list you will find an overview of the component to review, the component type (such as journal, package, etc.), the category and the creation date.

You can use the checkbox at the beginning of each line to select one or more review requests and use the "Close" button to set the status to "Closed".

For a detail view of the review request, select the link under the column „Component to review“.

### Detail view

In the detail view you get various information and options:

* **Date Created:** The field shows the date when the review request was created.
* **Status:** The status ("Open" or "Closed") indicates the status of the review request. When a review request is processed, i.e. the reviewed component is considered correct by you (after a correction or because the review request does not require further processing), you can set the status to "Closed".
* **Curatory Groups:** The responsible curatory groups are displayed in this field.
* **Action Taken:** This field indicates how the GOKb has automatically dealt with the identified problem. If the entry is empty, the GOKb was unable to take any action.
* **Cause:** This field specifies the cause that resulted the review request being opened.
* **Blue Info Box (To Do):** If an action is required from you as a user, you will receive instructions here. If the entry is empty, the review request was for your information only. You can then close it by clicking "Mark Finished".
* **Component to review:** This field specifies the exact component, i.e., which package, platform, or provider is the cause of the review request.
* **Other Components to review:** If there are other components besides the one previously specified that are causal for the review request, they are displayed here. You can link further components independently.

You can close the review requests at this point and exit the detail view by clicking the "Refresh" button.

![Screenshot_reviews_detail_view_refresh_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/291db63c-07d7-4fe5-a034-6449424b7e82)


## Types of review requests

Here you will find a list of current review requests. You can jump directly to the appropriate entry via the review request type.

* [ISSN Conflict](#issn-conflict)
* [Invalid Name](#invalid-name)
* [Import Identifier Mismatch](#import-identifier-mismatch)
* [Reference Title Conflict](#reference-title-conflict)
* [Ambiguous Title Matches](#ambiguous-title-matches)
* [Secondary Identifier Conflict](#secondary-identifier-conflict)

## Handling guide for review requests

In the following, we explain in individual steps how to process certain types of review requests.


### ISSN Conflict

The conflict has arisen because the package title contains an e-ISSN that corresponds to an existing p-ISSN of the reference title, or the other way.

![Screenshot_ISSN_Konflikt_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/495a950b-6fa6-43da-9537-ba2f3f5ab33a)

1. The tiles display the components to be corrected with the identifiers they contain. By clicking on the box in the table, you select the ISSN(s) to be deleted.
2. You activate the deletion via the button "Confirm Title Changes".
3. To add a new identifier, click on the relevant title. The detailed view will then open in a new window.
4. Afterwards, click on the button "Mark Finished".

**Notes:** Print and online versions of a journal must be labelled with their own ISSNs. However, various reference systems use one ISSN incorrectly for both versions. The authorised ISSNs can be found at [https://portal.issn.org/](https://portal.issn.org/).


### Invalid Name

The conflict arose because the name of the title contains incorrect characters.

![Screenshot_invalid_name_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/13998e40-c440-4fc2-87e5-bea15a408130)

1. Click on the pencil icon in the tile that is displayed behind the title to be checked. This allows you to adjust the incorrect characters in the title name directly in the field. The correction is applied by activating the check mark at the end of the field.
2. Save the change of the title via the button "Confirm title changes".
3. Also check the package or reference titles displayed in the tile. Click on the name to open the detailed view in a new window.
4. You can end the check request by clicking on the button "Mark Finished".

**Notes:** Incorrect characters in the title always appear when KBART files are imported that are not UTF-8 compliant. For correct title recording, indexing in external sources can help.

### Import Identifier Mismatch

The conflict arose because although the GOKb was able to match the KBART record to an existing package title, one or more other identifiers differed.

![Screenshot_import_identifier_mismatch_en_62023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/2796d68e-ef99-4288-be72-7e29e6b3baff)

1.	Next to the package title to be checked, you will see existing package titles that could be assigned on the basis of matching identifiers. Match the package titles with each other and pay attention to possible title splits.
2.	Then check which identifier is incorrect and correct it in the corresponding record in the KBART file. Delete the incorrect package title in the detail view.
3.	Then re-import the corrected KBART file in the created package to correct the error. Alternatively, mark the wrong identifier in the relevant tile and delete it with "Confirm title change". Please note that the data from the KBART file will be overwritten by the data enrichment from the ZDB. It is therefore important to inform the ZDB about conflicts before a new KBART import and to have them corrected.
4.	Then click on the reference title to go to the detail view and add the correct identifier there.
5.	Close the check request via the button "Mark Finished".

### Reference Title Conflict

The conflict arose because a new reference title was created due to an identifier conflict.

![Screenshot_reference_title_conflict_1_en_20230515](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/15cd91e6-9f25-4748-8574-1cce625d7746)

![Screenshot_reference_title_conflict_2_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/4610c39a-c5a9-44ca-8bb9-9cba313d540e)

1.	Match the data of the two reference titles to see if they are duplicates.
2.	If there is a duplicate, click the "Select Target" button to merge the two matching titles.
3.	The remaining title is displayed in green, the duplicate in red. You are shown in the tile marked in red which identifiers are "already linked" (green tick) and which are "not linked" (red x). You can add the unlinked identifiers by clicking on them.
4.	Use the "Merge duplicate" button to complete the check request.

**Notes:** Instead of duplicates, similar titles may also be previous and subsequent titles, which may then not be merged. Identifiers can also be incorrect. In this case, a check of the identifiers as well as the publication and title history can help. When selecting the correct title, the coverage of the package title and the publication history of the reference title can be helpful. Correct identifiers can be added if you jump to the editing view of the title via the name.

### Ambiguous Title Matches

The conflict arose because the GOKb could not link a reference title based on the available identifiers.

Step 1:

![Screenshot_ambiguous_title_matches_1_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/643517be-52c8-4a29-b53a-24b79f2bfe08)

1.	First check whether the two titles are duplicates. Pay attention to possible title splits.
2.	If it is a duplicate, select the reference title to be transferred via "Select target" and then click "Merge duplicate" to link the titles.
3.	If it is not a duplicate, clean up any incorrect identifiers by placing a check mark in the relevant tile and submitting the title change.
4.	The "Next" button takes you to the 2nd step.

Step 2:

![Screenshot_ambiguous_title_matches_2_en_062023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/d3c9de2f-eef9-4487-a4cf-5aa9a73f77d5)

1. Match the title to be checked with the displayed reference titles. Then select the title you want to link via "Select target" and confirm this. Incorrect identifiers can also be corrected later in the title.
2. If there is no match with any of the listed reference titles, you can search for an existing title or create a new one via the last tile.
3. Use the "Close check request" button to end the processing.

**Notes:** Instead of duplicates, similar titles may also be previous and subsequent titles, which may then not be merged. Identifiers can also be incorrect. In this case, a check of the identifiers as well as the publication and title history can help. When selecting the correct title, the coverage of the package title and the publication history of the reference title can be helpful. Correct identifiers can be added if you jump to the editing view of the title via the name. This view opens in a new tab of the browser when you click on the title.

### Secondary Identifier Conflict

The conflict arose when an identifier was added to the reference title during matching that differed from the existing identifiers.

1.	Check the displayed identifiers of the reference title for correctness.
2.	Delete incorrect identifiers by marking them with a check mark and then clicking the "Confirm title changes" button.
3.	Then close the review request.

**Notes:** In case of an identifier conflict, a new title is usually created. The fact that only an ID is added, as is the case here, occurs with identifiers that do not help to uniquely identify the resource, e.g. ISBNs of the parallel print edition.
