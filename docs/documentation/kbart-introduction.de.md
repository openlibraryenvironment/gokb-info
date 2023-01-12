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

[KBART tab-separated template file](https://service-wiki.hbz-nrw.de/download/attachments/470024321/kbart_template_gokb.txt?version=1&modificationDate=1601291143438&api=v2)

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
|publication_title|Publication title for serial or monograph. Conference proceedings series titles should be entered as serial titles, while volume titles should be entered as monograph titles.|S/M|
|print_identifier|Print-format identifier. ISSN for serials, ISBN for monographs, etc. Conference proceedings may have serial ISSNs while each proceeding volume may have its own ISBN.|S/M|
|online_identifier|Online identifier. eISSN for serials, eISBN for monographs, etc. Conference proceedings may have serial eISSNs while each proceeding volume many have its own eISBN.|S/M|
|date_first_issue_online|Date of first serial issue available online. Applicable only to serials.|S|
|num_first_vol_online|Number of first volume available online. Applicable only to serials.|S|
|num_first_issue_online|Number of first issue available online. Applicable only to serials.|S|
|date_last_issue_online|Date of last issue available online. Leave blank if coverage is to the present. Applicable only to serials.|S|
|num_last_vol_online|Number of last volume available online. Leave blank if coverage is to the present. Applicable only to serials.|S|
|num_last_issue_online|Number of last issue available online. Leave blank if coverage is to the present. Applicable only to serials.|S|
|title_url|Title-level URL. Applicable to both serials and monograph. For conference proceedings, the `title_url` for the proceedings series and the `title_url` for each volume should be different.|S/M|
|first_author|First author. Applicable only to monographs.|M|
|title_id|Title identifier. Applicable to both serials and monographs. For conference proceedings, the `title_id` for the conference proceedings series and the `title_id` for each proceeding volume should be different.|S/M|
|embargo_info|Embargo information. Describes any limitations on when resources become available online.|S/M|
|coverage_depth|Coverage depth. For example, abstracts or full text.|S/M|
|notesNotes|Free-text field to describe the specifics of the coverage policy.|S/M|
|publisher_name|Publisher name. Not to be confused with third-party platform hosting name.|S/M|
|publication_type|Serial or monograph. Use "serial" for journals and conference proceeding series. Use "monograph" for e-books and conference proceeding volumes.|S/M|
|date_monograph_published_print|Date the monograph is first published in print|M|
|date_monograph_published_online|Date the monograph is first published online|M|
|monograph_volume|Number of volume for monograph. Applicable to e-books and conference proceedings. For proceedings, use the volume within the conference proceedings series.|M|
|monograph_edition|Edition of the monograph|M|
|first_editor|First editor, Applicable to monographs, i.e., e-books or conference proceedings volumes.|M|
|parent_publication_title_id|Title identifier of the parent publication. For a conference proceeding volume, the `parent_publication_title_id` is the `title_id` of the conference proceedings series.||
|preceding_publication_title_id|Title identifier of any preceding publication title. Applicable to serials and conference proceedings series.|S|
|access_type|Access type.|S/M|

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
|listprice_eur|Listenpreis in Euro (ohne Währungssymbol) als Zahlwert|S/M|
|listprice_gbp|Listenpreis in Britischen Pfund (ohne Währungssymbol) als Zahlwert|S/M|
|listprice_usd|Listenpreis in US Dollar (ohne Währungssymbol) als Zahlwert|S/M|
