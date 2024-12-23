# Release 1.8 (with updates 1.8.1 and 1.8.2)
_Published on 29 November 2024_

## GUI framework Vue version 3
With the update of the GUI framework to the latest version, the front end has been made future-proof and various optimisations have also been made. These changes are not immediately obvious, but have accounted for a large part of the work on the release.

## Extension of registration/login
Registration has been completely revised and made more user-friendly. Firstly, there is a drop-down with a selection of the curatory group. This can now be selected independently if it already exists. In the event that the assigned password has been forgotten, a request to reset the password can now be sent directly in the login window via the "Forgot password" link.

## New filter function for test requests and unique URL
The additional search filter for reviews is a new addition. The "Component type" filter has been added. This requirement came from practice and is aimed at enabling different library areas to explicitly display the review requests to be processed for them. It is possible to filter by reference titles, journals, monographs, etc. Another useful enhancement is that the review requests, which in the past could only be opened as a modal dialogue, can now be opened in a detailed view via the "Open Full view" button for optimal processing. This view is loaded in a separate tab in the browser window. The URL is unique and can be passed on.

## Revision of the review request _Import identifier mismatch_
When a package is updated and a title identifier is corrected, this review request is triggered, as the GOKB must incorrectly assume that a title has been removed from the package and a new one added. At the same time, the review request is opened to decide whether it is merely a title update or actually a new title. In the first case, there is a new function with which the former title can be corrected.

## Repositioning of the curatory group
When editing packages, the curator groups are no longer displayed as a separate panel in the "Package properties" tab. Instead, there is now a label with the curatory group in the "Summary" tab. The contact details can be called up by clicking on the name of the curatory group. Also worth mentioning is the addition of the "Created on" column to the results list display. This allows the list to be sorted according to the most recent packages.

## Dialogue window for KBART import
When importing KBART manually, the two options "Partial update" and "Delete removed titles" can be folded out under the new item _More options_. This visual reduction in the dialogue window was made to prevent confusion for users during import. At the package title level, the previous price information area has been removed. This was not used in the past.

## Automatic setting of the access start date for initial import deactivated
Previously, for each package title that was included in the GOKB for the first time as part of a package recording, the recording date was counted as the "access start date" if no explicit date was available. This is often a correct estimate for the package history, but is usually incorrect for the first import of a package. For this reason, the date is no longer set automatically when a package is imported for the first time.

## Note on changing the URL structure
The URL structure for components has also been adapted with the release. The _# character_ in the original URL, e.g. https://gokb.org/gokb-ui/#/package/[component], is no longer correct. The correct link for components is now https://gokb.org/gokb-ui/[component]. The UUID URLs are not affected by this. We therefore recommend that you always use the persistent UUID URLs when customising saved links.

## New interface for importing data from external sources (we:kb) and labelling them
A new feature is the we:kb-GOKB interface. This allows data from the we:kb knowledge base to be automatically transferred to the GOKB at the click of a mouse. When creating a package, the data import is started via the new button "Import from external source". A modal dialogue opens in which the data to be transferred is displayed and, if necessary, adjusted to activate the process.

## Labelling the origin of packages from external repositories
Packages from other repositories such as we:kb and the EZB are identified by specifying the ‘Import source' in the package information. This information is also output via the APIs so that it can be filtered in third-party systems.

## Complete overview of changes
A complete overview of all changes can be found in the [Github repo of GOKB](https://github.com/openlibraryenvironment/gokb-ui/releases/tag/v.1.8.0).

# Release 1.7
_Published on 26 January 2024_

The central innovations of version 1.7 are the integration of the DDC classification at title and package level and the fact that more views of the GOKB can now be accessed via unique URLs.

## Implementation of DDC subject categories
As an innovative and important new feature, the DDC subject categories are now integrated into the GOKB. On the one hand, this is made possible by an automated enrichment of the reference titles of journals and periodicals via the ZDB. On the other hand, the DDC notations can be added manually via a drop-down menu at the package and package title level as well as for the reference titles. Two new fields have been integrated for this data. The options "Subject" (Type) and "Value" can be used to filter the search for DDC subject categories. In edit mode, the subject categories can be added under the tab of the same name. With the "Edit package title" option, the data is selected and saved via the "Add" button in the field. Multiple assignments are accepted.

## Unique URLs
As a further supporting innovation, more views of the GOKB can be accessed via unique URLs, so that you can save the links to specific searches, tabs of the detailed views and package titles as bookmarks or copy and share them. When switching between the tabs of a detailed view, a separate URL is generated for each tab so that users can be taken directly to a tab. In the package, reference title and provider detail view, a code is added to the URL for the individual tab views. The detailed view of a package title is displayed via the "Open full view" button. A new tab opens in the browser window. This generated URL also leads directly to the title called up. Search queries in the packages, reference titles, review requests, providers and users components also generate a unique URL. The specified parameters are appended in the URL during the search query.

## Complete overview of changes
A complete overview of all changes can be found in the [Github repo of GOKB](https://github.com/openlibraryenvironment/gokb-ui/releases/tag/v1.7.0).

# Release 1.6
_Published on 26 July 2023_

The central innovations of version 1.6 are the extension of the search and filter functionality as well as the visual division of the edit view for adding platforms.

## New search and filter functionality
In the search views, the "Namespace" filter function has been added for the identifiers. It is now possible to filter specifically for these.

As a further feature, the search results can be exported as CSV.

## Create/edit providers and platforms
A recommended short form can now be stored for providers. This is possible both when creating and in the editing view.

The view under the "Platforms" tab for adding platforms have been visually split to make it easier to create or edit an existing platform. On the one hand, there is now the option "Select" to search for and edit an existing platform. If no platform can be found, there is the option to create a new platform via the "Add new" item.

## Create and edit packages and package title
Incorrect identifiers are now marked if they cause a validation error. A manually created reference title cannot be saved until a title _type_ has been selected. Another new feature is that when manually creating a new package title, the existing name and IDs are taken as default when selecting the reference title.

## KBART import
New options have been added for the KBART import. Firstly, package titles that are no longer included in an updated list can optionally be marked as "deleted" instead of "archived". Moreover, monographs with a future date in the column "date_monograph_published_online" are displayed with the status "expected" in the title list.

## New Login process
The login process has been revised. You remain logged in within a browser. This also applies to opening new tabs. Non-permanent logins are automatically logged out after a certain time and no longer when closing the browser tab.

## Complete overview of changes
A complete overview of all changes can be found in the [Github repo of GOKB](https://github.com/openlibraryenvironment/gokb-ui/releases/tag/v1.6.0).

# Release 1.5
_Published on 17 April 2023_

The central innovations of version 1.5 are an improved display of the review requests as well as optimizations in the validation and the import of KBART files.

## Improved display of review requests
In order to improve usability, a new workflow interface is available for processing review requests. The display is now clearer, allowing title and identifier inconsistencies as well as duplicates to be cleaned up more intuitively. Meaningful instructions and hint texts, as well as color highlighting of important information, also ensure better usability. The buttons, which can be used to make title changes, select titles, and merge duplicates, among other things, are now also more informative and thus help to make it easier to process review requests.

## Optimizations for validation and import of KBART files
When validating KBART files, a warning now appears if title_id is missing. In addition, conflicts regarding the coverage of journals are identified. Also, more checks are made for incorrect character sets. The system also provides more detailed feedback when importing KBART files, so that users can better understand the sources of errors. Finally, another new feature is that incorrect lines in a KBART file will cause that file to be rejected and thus cause the import to fail. This ensures that packages can be imported into the GOKB in a controlled manner in their entirety (and not unintentionally without important package titles).

## Complete overview of changes
A complete overview of all changes can be found in the [Github repo of GOKB](https://github.com/openlibraryenvironment/gokb/releases).

# Release 1.4
_Published on 15 December 2022_

The main innovations of the version 1.4 are better KBART validation and a public KBART Validator

## Improved KBART validation
The validation of KBART files has been revised and is significantly more expressive. Errors in the KBART file
are given out with the line number and the erroneous value. This makes it much easier to correct corrupt
KBART values.

## Public KBART validator
Based on the improved KBART validation, a [public KBART validator](https://gokb.org/gokb-ui/#/kbart-validator) has
been added. The KBART validator can be used without logging into the GOKB and offers the possibility
to validate arbitrary KBART files regarding their correctness and to display errors. Thus it represents a tool both
for libraries as well as for providers who want to check their own files. Thereby the Validator validates the KBART
records in a stricter way than the validation during the package upload, since it strictly adheres to the KBART
standard of the NISO. Thus it throws out errors for values which are accepted by the GOKB but are not included
in the KBART standard (like *publication_type* "Database").

## Package list on provider view
On the provider detail view there is now a new tab for the packages of this particular provider. This
gives a faster overview of the portfolio of a provider. Furthermore, the package search can still be used to
filter for a provider to get an identical overview.

## KBART export in the package view
Until now, packages could only be exported as KBART files via the package search. In the new release you will find
an export button in the package title view of each package. As usual, you can choose the options "Raw" or "Processed". "Raw" outputs the KBART file based on the package titles - just as the curator has imported the file. "Processed" exports additional information of the reference titles in its output (e.g. the biblographical correct title version by the ZDB or further identifiers like the ZDB-ID).

## Linking of external resources
One primary goal of the GOKB is that it provides identifiers from different sources. Via a link symbol next to the #
identifiers of a resource, it is now possible to jump directly to the corresponding resource in the third-party system,
e.g. to the ZDB Opac, to the ISIL agency or to the portal of the ISSN agency. This makes it much easier to search for
and, if necessary, correct data. A prerequisite for successful linking is that the third-party system supports direct
linking via the identifier.

## Complete overview of changes
A complete overview of all changes can be found in the
[Github repo of GOKB](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.24.0).

# Release 1.3
_Published on 04 August 2022_

The core features of release 1.3 are a significant improvement of the import behavior and an optimization of the 
search functionality.

## New import process
The import process has been significantly revised internally. The import tool YGOR has been removed. 
Since the import process now takes place entirely within the GOKB system, it is much faster and provides
better feedback. In addition, there are several improvements to the import:

### Import progress bar in the package view.
The progress of the import as well as the result report can now be viewed within the  package view so that
you no longer need to return to the dashboard. After submitting a new import, the progress bar is displayed 
in the views head section. After completion, the result can be viewed via a snack bar message at the bottom 
of the view.

### Revision of the job overview
The new import list on the dashboard replaces the former job overview. Here, running and completed imports 
are shown with the result (`Success' or `Failed`). The links take you to a detailed import report respectively 
to the package itself. Clickable icons above the list allow you to switch between imports of your own curator 
group or between personally initiated imports, as well as to switch on/off the automatic update of the view.

### Test run for package import
When uploading a KBART file, the `Test run` option can now be selected. If a KBART file is imported with the 
'Test run' option, an import report is shown in the same way as in the productive import, but no changes to the 
data have been done. Thus, the new function offers the possibility to check in advance in case of unsafe KBART 
files whether the import is acceptable or the file should be edited beforehand.

## New search and filter functionality
The search and filter views for packages, reference titles, etc. have been revised. The search for the name of 
a component now supports boolean operators like `AND`, `OR`, `NOT` (watch out for capitalization!). The default 
search setting has been changed so that all search terms must occur (`AND` operator). To filter the data by one 
of several search terms, these must be explicitly linked with `OR`. In addition, the search supports right and
left truncation with asterisk (`*`).

## System messages as snackbar
System messages such as "Failed Import" or "Successful Import" now appear with a green or red background as a 
snackbar, i.e. as an overlaying UI element at the bottom of the vuew. This makes it possible to perceive the 
respective message without scrolling, even in extensive views.

## Review requests of linked reference titles are visible in the package view
In the package view, the "Review Requests" tab previously showed all review requests related to the package
itself or individual package titles. This gives curator groups the ability to edit all open review requests. 
As new addition a button allow to switch to the review requests of all reference titles associated with the 
package titles. This allows users to see whether there are duplicates or unsuccessful enrichments for the 
linked reference titles, for example, and to rectify these themselves or report them to the responsible curator group.

## Creating and linking new platforms
In the view for editing a provider, creating a platform has become much more powerful. Not only can you 
create new platforms, but you can also search and add existing platforms if they are not already linked to 
another provider. This makes creating platform duplicates much less likely.

## "Cool URI" for components
Each component such as providers, packages, platforms, titles, etc. is now accessible by a fixed URI based
on the GOKB UUID. The URI can be found in the header field of each resource next to the UUID in the interface
and can be copied to the clipboard via the corresponding button. The URI is also output via the APIs. This makes 
it possible to jump back to the specific GOKB dataset from any system that makes use of the URI.

## OpenSearch instead of Elastic Search
Due to changes in licensing terms, ElasticSearch has been completely replaced by
[OpenSearch](https://opensearch.org/), a fork that continues the software under the free Apache license.

## Complete overview of changes
For a complete overview of all changes, see the [Github repo of GOKB](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.23.0).

# Release 1.2
_Veröffentlicht am 18. März 2022_

## Differenzierung von Paketkuratierung und Titelredaktion
Die GOKB schafft Mehrwerte für verschiedene Nutzungsszenarien: Für die Erwerbung einerseits und den Datenfluss in
Nachweissysteme andererseits. Um diesen unterschiedlichen Szenarien gerecht zu werden, sind Paket- und
Referenztitelebene in der GOKB getrennt, aber verknüpft. Um die Verwaltung der beiden Ebenen zu erleichtern,
können Kuratierungsgruppen jetzt entsprechend ihrer Möglichkeiten und Interessen als Paketkuratierung, als
Titelredaktion oder, wie bisher, beiden Bereichen zugeordnet werden. Beispielsweise kann die Erwerbungsabteilung
einer Einrichtung die Paketkuratierung übernehmen, während die Katalogisierungsabteilung die Titelredaktion
übernimmt. Eine Zuordnung erfolgt durch das GOKB-Team und kann über _info_at_gokb.org_ oder _gokb_at_hbz-nrw.de_
angefragt werden. Es sollte zudem eine zugehörige Titelredaktionsgruppe genannt werden, da ansonsten eine Lücke
in der Korrektur und Verwaltung der zugehörigen Titel entsteht.

## Eskalationsmöglichkeit für Prüfanfragen
Die Kuratorengruppen für Paketkuratierung erhalten die Möglichkeit, Prüfanfragen über einen Buttonan eine ihnen zugeordnete
Titelredaktionsgruppe zu eskalieren. So kann eine Frage, die über das Arbeitsgebiet von z.B. Erwerbungsabteilungen
hinausreicht, die zuständige Titelredaktion diese klären. Für Titelredaktionen ist dieselbe Funktion für die Eskalation
von Prüfanfragen zu Zeitschriften an die ZDB möglich.

## EZB-Anreicherung

Zeitschriften als Referenztitel werden nun automatisiert dem Titelidentifikator EZB-ID der EZB (Elektronische
Zeitschriftenbibliothek) angereichert. Dadurch kann eine Referenzierung von Zeitschriftentiteln in anderen Systemen,
die mit der EZB arbeiten, eindeutiger und eiffizienter erfolgen. Sobald in der GOKb ein neuer
Zeitschriftentitel angelegt wird, beispielsweise durch die Einspielung eines Pakets, wird im
Hintergrund eine Anfrage an die EZB gesendet. Kann ein Zeitschriftentitel eindeutig gefunden werden,
wird die entsprechende ID aus der EZB angehängt. Die bisherige Anreicherung über das Anhaken von "EZB"
während der Paketeinspielung entfällt.

## Verbesserte KBART-Validierung
Die Validierung hochgeladener KBART-Dateien wurde verbessert, sodass jetzt mehr Fehler der Datei abgefangen
werden und die Rückmeldung an die Nutzer*innen klarer verständlich ist.

## Entfernung der globalen Suche
Die Kopfleiste für die globale Suche wurde entfernt. Es hat sich herausgestellt, dass bei zu vielen Treffern
auf eine Suche die Darstellung zu verkürzt und nutzerunfreundlich ist. Die Überarbeitung der globalen Suche ist
ein Ziel des nächsten Releases 1.3.

## Update-Verhalten von KBART-Datensätzen in Paketen
Damit Paket-Updates durch KBART-Dateien sauberer und fehlerfreien durchlaufen, ist das Verfahren zum Abgleich
mit schon vorhandenen Pakettiteln verbessert worden. Wenn sich nur ein relevanter Identifikator unterscheidet,
wird ein neuer Pakettitel angelegt (Bei Zeitschriften: proprietäre Titel-ID im Feld _title_id_, ZDB-ID, eISSN,
DOI, Print-ISSN; bei Monographien: proprietäre Titel-ID im Feld _title_id_, ISBN der Online-Ausgabe, , ISBN der Print-Ausgabe, DOI).
Damit ist eine falsche Zuordnung praktisch ausgeschlossen. Leere Identifikatoren werden ignoriert, sodass diese
nachträglich hinzugefügt werden können, ohne dass eine falsche Zuordnung stattfindet.

## Vollständige Übersicht über Änderungen
Eine Gesamtübersicht über alle Neuerungen finden Sie im
[Github-Repo der GOKB](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.21.0).

# Release 1.1.1
_Veröffentlicht am 12. Januar 2022_

Prüfanfragen können jetzt als Bulk geschlossen werden. Dadurch vereinfacht sich das Schließen rein
informativer Prüfanfragen.

# Release 1.1

Released on _2021 November 11_

## Neue Webseiten und Dokumentation

Die Webseiten der GOKB unter [https://gokb.org](https://gokb.org) wurden neu gestaltet und aktualisiert. 
Hier finden Sie neben News, Präsentationen und Publikationen auch die Dokumentation der GOKB. 
Außerdem werden dort künftig auch die Protokolle der Infostunden sowie die Release Notes 
zu neuen Versionen hinterlegt werden. Die Dokumentation im service-Wiki des hbz' wird daher 
nicht mehr aktualisiert.

## Neue Farbgestaltung

Die Farbgestaltung der Oberfläche wurde überarbeitet. Verschwunden sind die 
Brauntöne und haben, im Zuge eines einheitlichen Layouts, dem GOKB-Rot Raum 
gegeben, das über die Website der GOKB bekannt ist. In diesem Zuge werden auch 
Test- und Produktivsystem farblich differenziert: Das [Produktivsystem](https://gokb.org/gokb-ui/) 
besitzt eine rote Kopfzeile, das [Testsystem](https://gokbt.gbv.de/gokb-ui/) eine blaue. 
Damit wird eine Unterscheidung beider Systeme erleichtert.

## Umstellung des Einspielprozesses

Der Einspielprozess wurde überarbeitet und läuft nun deutlich fehlertoleranter. 
Auf der Oberfläche macht sich die Umstellung kaum bemerkbar, im Hintergrund 
arbeitet die GOKB jedoch jetzt in einem mehrstufigen Einspielprozess:

1. KBART-Datei wird eingelesen und Pakettitel importiert bzw. aktualisiert
1. Die Pakettitel werden mit den Referenztiteln verknüpft
1. Die Referenztitel (Journals) werden mit der ZDB-ID angereichert.

Damit ist der alte Prozess, bei dem schon während der Einspielung 
eine Referenztitelverknüpfung und eine ZDB-Anreicherung versucht wurde, 
hinfällig. Die Vorteile des neuen Prozesses sind:

1.  Der Einspielprozess scheitert nicht mehr durch eine 
fehlgeschlagene Verknüpfung oder Anreicherung
1.  Pakettitel werden immer angelegt oder aktualisiert, 
sofern der KBART-Datensatz dem Standard entspricht
1.  Fehlende Verknüpfungen oder Anreicherungsprobleme werden als 
Prüfanfragen ausgegeben, ohne dass der Pakettitel selbst falsch ist

## Neue Typen von Prüfanfragen

Die Umgestaltung des Einspielprozesses füjrt auch zu neuen Prüfanfragen. 
Genauere Informationen dazu werden zurzeit in der Dokumentation aufbereitet.

## Auswahl der aktiven Kuratorengruppe

Wenn Sie Mitglied mehrerer Kuratierungsgruppen sind (z.B. weil Sie in der 
GOKB mit mehreren Hüten unterwegs sind, z.B. als Einrichtung sowie Verbund), 
können Sie oben rechts in der Kopfzeile Ihre momentan aktive Kuratierungsgruppe 
auswählen. Diese wird dann beispielsweise automatisch im Paket vermerkt, 
wenn Sie dieses neu erstellen.

## Automatisiertes Daten von "Zugriffsanfang" und "Zugriffsende"

"Zugriffsanfang" und "Zugriffsende" sind Datumsfelder von Pakettiteln, 
die den Zeitpunkt bestimmen, wann ein Titel neu im Rahmen eines bestehendes 
Paket erscheint bzw. wann der Titel aus dem Paket fällt (z.B. bei einem Titeltransfer). 
Diese Daten sind keine Pflichtfelder, bietet aber langfristig über mehrere 
Paketaktualisierungen hinweg die hilfreiche Information, wie sich ein Paket 
historisch gewandelt hat. So kann zum Beispiel der Bestand eines Pakets 
zu einem bestimmten Datum in der Vergangenheit ausgegeben werden.

Diese Daten können über die KBART-Datei bereitgestellt werden, was 
allerdings Anbieter noch nicht tun. Stattdessen interpretiert die GOKB 
die Daten der KBART-Datei nun dahingehend, dass diese Daten automatisiert 
anhand des KBART-Dateinamens gesetzt werden, der laut Standard ein Datum enthalten muss.

# Detaillierte Übersicht

Eine detaillierte Übersicht über die Änderungen finden Sie im Github-Repo. 
