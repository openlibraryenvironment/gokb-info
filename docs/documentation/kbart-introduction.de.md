# Einführung in KBART

Die Abkürzung KBART steht für "Knowledge Base And Related Tools".

## Ziele

+  NISO-"Best Practice" für die
    *   Übermittlung von Titellisten von vom Provider angebotenen Titeln in einer Paketzusammenstellung
    *   Übermittlung von Bestandsinformationen / Holdings Data vom Provider an Knowledge Bases zum Einsatz beispielsweise in Link Resolvern (OpenURL)
    *   Austausch von KBs untereinander: "KBART is on data exchange among and between knowledge bases"
+   Soll die Qualität der von Providern an Knowledge Bases gelieferten Daten verbessern.
+   Soll bisherige Metadatenformate von Providern wie ONIX-SOH ergänzen.

## Links

+ [NISO-Spezifikation (PDF)](https://groups.niso.org/apps/group_public/download.php/16900/RP-9-2014_KBART.pdf)
+ [KBART Style Guide (Public version)](https://docs.google.com/document/d/1jF154euh8s_RWKX0Tb0ci1W_gzziYKd5ayy5SrjyVEg/edit)
+ [KBART - a publisher's view (PDF)](https://www.doria.fi/bitstream/handle/10024/93441/Kessler_KBART_Helsinki.pdf?sequence=2)
+ [A deep dive into KBart](https://de.slideshare.net/NASIG/deep-dive-into-kbart)

## Dateiformat

[KBART-Datei-Vorlage (mit tabulatorgetrennten Spalten)](../assets/[provider]_[scope]_[package_name]_[year]_YYYY-MM-DD.txt)

## Dateiname

```
{ProviderName}_{Region/Consortia}_{PackageName}_{YYYY-MM-DD}.txt
```

+ **ProviderName:** Verständlicher Kurzname des Anbieters, z. B. Herdt, Springer, Emerald
+ **Region/Consortia:** Geltungsbereich des Pakets
    * Region: Wenn das Paket nur in einem Land oder einem anderen regional abgrenzbaren Bereich angeboten wird, sollte das Land bzw. die Region hier vermerkt werden. Beispiel: `Springer_Asia-Pacific_Medicine_2013-01-28.txt`.
    * Consortia: Wenn das Paket in dieser Zusammenstellung nur für ein Konsortium gilt, sollte das hier vermerkt werden. Beispiel: `IOP_NESLi2_Option1-2011_2012-05-31.txt`.
    * Wenn das Paket universell angeboten wird, d.h. keiner vorher gemachten Einschränkung unterliegt, sollte "global" vermerkt werden. Beispiel: `TaylorandFrancis_Global_AllTitles_2012-08-30.txt`.
+ **PackageName:** Eindeutiger Name des Pakets  
    *   Eindeutiger Name des Pakets bzw. anbieterseitig eindeutige Kurzbezeichnung des Pakets
    *   Wenn es sich um keinen spezifischen Namen des Pakets handelt, sondern um eine Gesamttitelliste, sollte "AllTitles" vermerkt werden bzw. "AllJournals". Beispiel: `TaylorandFrancis_Global_AllTitles_2012-08-30.txt`.
+ **YYYY-MM-DD:** Datum der KBART-Datei im ISO-8601-Format.

## Dateiinhalt

+   Tabulator als Trennzeichen
+   UTF-8 kodiert
+   Datumsangaben nach ISO 8601
+   Keine leere Zeile zwischen Kopfzeile und Inhalt
+   Titel sollen alphabetisch sortiert sein.
+   Ein Titel soll mehrfach gelistet werden, falls ein "coverage gap" von mindestens 12 Monaten besteht.


## KBART-Felder

Siehe [Knowledge Bases and Related Tools (KBART)Recommended Practice, Table 5: KBART data fields](https://groups.niso.org/apps/group_public/download.php/16900/RP-9-2014_KBART.pdf) 

|Feldbezeichnung|Beschreibung|Serial/Monograph|
|----------|-----------|----------------|
|publication_title|Vollständiger Titel der fortlaufenden Ressource oder der Monographie. Titel von Konferenz-Schriftenreihen sollten als Reihentitel eingegeben werden, während die Titel von Bänden als Monographientitel eingegeben werden.|S/M|
|print_identifier|Print-Identifikator. ISSN für fortlaufende Ressourcen, ISBN für Monographien etc. Konferenz-Schriftenreihen können fortlaufende ISSNs haben, während jeder Band seine eigene ISBN haben kann.|S/M|
|online_identifier|Online-Identifikator. eISSN für fortlaufende Ressourcen, eISBN für Monographien usw. Konferenzschriften können fortlaufende eISSNs haben, während jeder Band seine eigene eISBN haben kann.|S/M|
|date_first_issue_online|Datum des ersten online verfügbaren Heftes. Gilt nur für fortlaufende Ressourcen.|S|
|num_first_vol_online|Nummer des ersten online verfügbaren Bandes. Gilt nur für fortlaufende Ressourcen.|S|
|num_first_issue_online|Nummer des ersten online verfügbaren Heftes. Gilt nur für fortlaufende Ressourcen.|S|
|date_last_issue_online|Datum des letzten online verfügbaren Heftes. Leer lassen, wenn es sich um das aktuelle Heft handelt. Gilt nur für fortlaufende Ressourcen.|S|
|num_last_vol_online|Nummer des letzten online verfügbaren Bandes. Leer lassen, wenn es sich um den aktuellen Band handelt. Gilt nur für fortlaufende Ressourcen.|S|
|num_last_issue_online|Nummer des letzten online verfügbaren Heftes. Leer lassen, wenn es sich um das aktuelle Heft handelt. Gilt nur für fortlaufende Ressourcen.|S|
|title_url|URL auf Titelebene. Gilt sowohl für fortlaufende Ressourcen als auch für Monographien. Bei Konferenzschriften  sollten die title_url für die Konferenz-Schriftenreihe und die title_url für jeden Band unterschiedlich sein.|S/M|
|first_author|Erster Autor/erste Autorin. Gilt nur für Monographien.|M|
|title_id|Identifikator des Titels. Gilt sowohl für fortlaufende Ressourcen als auch für Monographien. Bei Konferenzschriften  sollten die title_id für die Konferenz-Schriftenreihe und die title_id für jeden Band unterschiedlich sein.|S/M|
|embargo_info|Embargo-Information. Umfasst alle Einschränkungen hinsichtlich des Zeitpunktes, wann eine Ressource online verfügbar ist.|S/M|
|coverage_depth|Umfang der Abdeckung. Gibt zum Beispiel an, ob es sich um ein Abstract oder einen Volltext handelt.|S/M|
|notesNotes|Freitextfeld, das beschreibt, welche Besonderheiten bezüglich der Vereinbarung zur Abdeckung bestehen.|S/M|
|publisher_name|Name des Verlags. Nicht zu verwechseln mit dem Namen des Plattform- bzw. Inhaltsanbieters.|S/M|
|publication_type|Fortlaufende Ressource oder Monographie. Verwenden Sie "serial" für Zeitschriften und Konferenz-Schriftenreihen. Verwenden Sie "monograph" für E-Books und Einzelbände.|S/M|
|date_monograph_published_print|Datum, wann die Monographie erstmals in Druckform erschienen ist.|M|
|date_monograph_published_online|Datum, wann die Monographie erstmals online erschienen ist.|M|
|monograph_volume|Bandnummer der Monographie. Gilt für E-Books und Konferenzschriften. Für Konferenzschriften ist der Band innerhalb der Konferenz-Schriftenreihe  zu verwenden.|M|
|monograph_edition|Auflage der Monographie|M|
|first_editor|Erster Herausgeber. Gilt für Monographien, d. h. E-Books oder Konferenzschriften.|M|
|parent_publication_title_id|Titelidentifikator der übergeordneten Veröffentlichung. Bei einem Konferenzschriftenband ist die parent_publication_title_id die title_id der Konferenz-Schriftenreihe.||
|preceding_publication_title_id|Titelidentifikator eines vorangegangenen Titels. Gilt für fortlaufende Sammelwerke und Konferenz-Schriftenreihen.|S|
|access_type|Zugriffstyp. Entweder „F“ (Free = kostenloser Inhalt) oder „P“ (Paid = kostenpflichtiger Inhalt).|S/M|

## Proprietäre GOKb-Erweiterungen

|Feldbezeichnung|Beschreibung|Serial/Monograph|
|----------|-----------|----------------|
|zdb_id|Titel-ID der Zeitschriftendatenbank|S|
|last_changed|Datum der letzten Änderung des Datensatzes|S/M|  
|access_start_date|Das Datum, an dem der Titel dem Paket beigetreten ist. Datum des frühestmöglichen Zugriffs im Rahmen des Pakets|S/M|
|access_end_date|Das Datum, an dem der Titel das Paket verlassen hat. Datum des letztmöglichen Zugriffs im Rahmen des Pakets|S/M|
|medium|detaillierter Medientyp der Publikation|S/M|  
|doi_identifier|DOI identifier or DOI link|M|
|ezb_id|Titel-ID aus der Elektronischen Zeitschriftenbibliothek (EZB)|S| 
|monograph_parent_collection_title|Erweiterung für Reihentitel|S/M|
|subject_area|Vorbehalten für Themenklassen. Idealerweise DDC-Klassen.|S/M|
