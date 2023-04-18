# Release 1.5
_Published on 17 April 2023_

The central innovations of version 1.5 are an improved display of the review requests as well as optimizations in the validation and the import of KBART files.

## Improved display of review requests
In order to improve usability, a new workflow interface is available for processing review requests. The display is now clearer, allowing title and identifier inconsistencies as well as duplicates to be cleaned up more intuitively. Meaningful instructions and hint texts, as well as color highlighting of important information, also ensure better usability. The buttons, which can be used to make title changes, select titles, and merge duplicates, among other things, are now also more informative and thus help to make it easier to process review requests.

## Optimizations for validation and import of KBART files
When validating KBART files, a warning now appears if title_id is missing. In addition, conflicts regarding the coverage of journals are identified. Also, more checks are made for incorrect character sets. The system also provides more detailed feedback when importing KBART files, so that users can better understand the sources of errors. Finally, another new feature is that incorrect lines in a KBART file will cause that file to be rejected and thus cause the import to fail. This ensures that packages can be imported into the GOKb in a controlled manner in their entirety (and not unintentionally without important package titles).

## Complete overview of changes
A complete overview of all changes can be found in the [Github repo of GOKb](https://github.com/openlibraryenvironment/gokb/releases).

# Release 1.4
_Published on 15 December 2022_

The main innovations of the version 1.4 are better KBART validation and a public KBART Validator

## Improved KBART validation
The validation of KBART files has been revised and is significantly more expressive. Errors in the KBART file
are given out with the line number and the erroneous value. This makes it much easier to correct corrupt
KBART values.

## Public KBART validator
Based on the improved KBART validation, a [public KBART validator](https://gokb.org/gokb-ui/#/kbart-validator) has
been added. The KBART validator can be used without logging into the GOKb and offers the possibility
to validate arbitrary KBART files regarding their correctness and to display errors. Thus it represents a tool both
for libraries as well as for providers who want to check their own files. Thereby the Validator validates the KBART
records in a stricter way than the validation during the package upload, since it strictly adheres to the KBART
standard of the NISO. Thus it throws out errors for values which are accepted by the GOKb but are not included
in the KBART standard (like *publication_type* "Database").

## Package list on provider view
On the provider detail view there is now a new tab for the packages of this particular provider. This
gives a faster overview of the portfolio of a provider. Furthermore, the package search can still be used to
filter for a provider to get an identical overview.

## KBART export in the package view
Until now, packages could only be exported as KBART files via the package search. In the new release you will find
an export button in the package title view of each package. As usual, you can choose the options "Raw" or "Processed". "Raw" outputs the KBART file based on the package titles - just as the curator has imported the file. "Processed" exports additional information of the reference titles in its output (e.g. the biblographical correct title version by the ZDB or further identifiers like the ZDB-ID).

## Linking of external resources
One primary goal of the GOKb is that it provides identifiers from different sources. Via a link symbol next to the #
identifiers of a resource, it is now possible to jump directly to the corresponding resource in the third-party system,
e.g. to the ZDB Opac, to the ISIL agency or to the portal of the ISSN agency. This makes it much easier to search for
and, if necessary, correct data. A prerequisite for successful linking is that the third-party system supports direct
linking via the identifier.

## Complete overview of changes
A complete overview of all changes can be found in the
[Github repo of GOKb](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.24.0).

# Release 1.3
_Published on 04 August 2022_

The core features of release 1.3 are a significant improvement of the import behavior and an optimization of the 
search functionality.

## New import process
The import process has been significantly revised internally. The import tool YGOR has been removed. 
Since the import process now takes place entirely within the GOKb system, it is much faster and provides
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
on the GOKb UUID. The URI can be found in the header field of each resource next to the UUID in the interface
and can be copied to the clipboard via the corresponding button. The URI is also output via the APIs. This makes 
it possible to jump back to the specific GOKb dataset from any system that makes use of the URI.

## OpenSearch instead of Elastic Search
Due to changes in licensing terms, ElasticSearch has been completely replaced by
[OpenSearch](https://opensearch.org/), a fork that continues the software under the free Apache license.

## Complete overview of changes
For a complete overview of all changes, see the [Github repo of GOKb](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.23.0).

# Release 1.2
_Veröffentlicht am 18. März 2022_

## Differenzierung von Paketkuratierung und Titelredaktion
Die GOkb schafft Mehrwerte für verschiedene Nutzungsszenarien: Für die Erwerbung einerseits und den Datenfluss in
Nachweissysteme andererseits. Um diesen unterschiedlichen Szenarien gerecht zu werden, sind Paket- und
Referenztitelebene in der GOKb getrennt, aber verknüpft. Um die Verwaltung der beiden Ebenen zu erleichtern,
können Kuratierungsgruppen jetzt entsprechend ihrer Möglichkeiten und Interessen als Paketkuratierung, als
Titelredaktion oder, wie bisher, beiden Bereichen zugeordnet werden. Beispielsweise kann die Erwerbungsabteilung
einer Einrichtung die Paketkuratierung übernehmen, während die Katalogisierungsabteilung die Titelredaktion
übernimmt. Eine Zuordnung erfolgt durch das GOKb-Team und kann über _info_at_gokb.org_ oder _gokb_at_hbz-nrw.de_
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
[Github-Repo der GOKb](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.21.0).

# Release 1.1.1
_Veröffentlicht am 12. Januar 2022_

Prüfanfragen können jetzt als Bulk geschlossen werden. Dadurch vereinfacht sich das Schließen rein
informativer Prüfanfragen.

# Release 1.1

Released on _2021 November 11_

## Neue Webseiten und Dokumentation

Die Webseiten der GOKb unter [https://gokb.org](https://gokb.org) wurden neu gestaltet und aktualisiert. 
Hier finden Sie neben News, Präsentationen und Publikationen auch die Dokumentation der GOKb. 
Außerdem werden dort künftig auch die Protokolle der Infostunden sowie die Release Notes 
zu neuen Versionen hinterlegt werden. Die Dokumentation im service-Wiki des hbz' wird daher 
nicht mehr aktualisiert.

## Neue Farbgestaltung

Die Farbgestaltung der Oberfläche wurde überarbeitet. Verschwunden sind die 
Brauntöne und haben, im Zuge eines einheitlichen Layouts, dem GOKb-Rot Raum 
gegeben, das über die Website der GOKb bekannt ist. In diesem Zuge werden auch 
Test- und Produktivsystem farblich differenziert: Das [Produktivsystem](https://gokb.org/gokb-ui/) 
besitzt eine rote Kopfzeile, das [Testsystem](https://gokbt.gbv.de/gokb-ui/) eine blaue. 
Damit wird eine Unterscheidung beider Systeme erleichtert.

## Umstellung des Einspielprozesses

Der Einspielprozess wurde überarbeitet und läuft nun deutlich fehlertoleranter. 
Auf der Oberfläche macht sich die Umstellung kaum bemerkbar, im Hintergrund 
arbeitet die GOKb jedoch jetzt in einem mehrstufigen Einspielprozess:

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
GOKb mit mehreren Hüten unterwegs sind, z.B. als Einrichtung sowie Verbund), 
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
allerdings Anbieter noch nicht tun. Stattdessen interpretiert die GOKb 
die Daten der KBART-Datei nun dahingehend, dass diese Daten automatisiert 
anhand des KBART-Dateinamens gesetzt werden, der laut Standard ein Datum enthalten muss.

# Detaillierte Übersicht

Eine detaillierte Übersicht über die Änderungen finden Sie im Github-Repo. 
