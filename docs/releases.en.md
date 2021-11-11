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
