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
DOI, Print-ISSN; bei Monographien: proprietäre Titel-ID im Feld _title_id_, ISBN der Online-Ausgabe, DOI). 
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

_Veröffentlicht am 09. November 2021_

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
