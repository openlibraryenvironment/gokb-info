# Release 1.8 (mit Updates 1.8.1 und 1.8.2)
_Veröffentlicht am 28. November 2024_

## GUI Framework Vue Version 3
Mit dem Update des GUI Frameworks auf die neueste Version wurde das Frontend zukunftssicher gemacht und zudem verschiedenste Optimierungen vorgenommen. Diese Änderungen sind nicht direkt ersichtlich, haben aber einen großen Teil der Arbeit des Releases ausgemacht.

## Erweiterung von Registrierung/Anmeldung
Die Registrierung wurde komplett überarbeitet und nutzerfreundlicher gestaltet. Zum einen gibt es ein Drop-down mit einer Auwahl der Kuratorengruppe. Diese kann nun, soweit bereits vorhanden, eigenständig ausgewählt werden. Für den Fall, dass das vergebene Passwort vergessen wurde, kann zukünftig im Anmeldefenster über den angegebenen Link "Passwort vergessen" direkt eine Anfrage für das Zurücksetzen des Passworts abgeschickt werden.

## Neue Filterfunktion bei Prüfanfragen und eindeutige URL
Neu hinzugekommen ist der zusätzliche Suchfilter bei den Prüfanfragen. Ergänzt wurde der Filter "Komponententyp". Diese Anforderung kam aus der Praxis und zielt darauf ab, dass sich unterschiedliche Bibliotheksbereiche die für sie zu bearbeitenden Prüfanfragen explizit anzeigen lassen können. Es gibt die Möglichkeit, nach Referenztiteln, Journal, Monographien usw. zu filtern. Eine weitere nützliche Erweiterung ist, dass die Prüfanfragen, die in der Vergangenheit nur als modaler Dialog geöffnet konnten, nun in einer Detailsicht über den Button "Vollansicht" für eine optimale Bearbeitung geöffnet werden können. Diese Ansicht wird in einem separaten Tab im Browserfenster geladen. Die URL ist eindeutig und kann weitergegeben werden.

## Überarbeitung der Prüfanfrage _Identifikatorenkonflikt beim KBART-Import_
Bei einem Update eines Pakets, bei dem ein Identifikator eines Titels korrigiert wird, wird diese Prüfanfrage ausgelöst, da die GOKB fälschlich davon ausgehen muss, dass ein Titel aus dem Paket entfernt und ein neuer aufgenommen wird. Gleichzeitig wird die Prüfanfrage geöffnet, um zu entscheiden, ob es sich lediglich um eine Titelaktualisierung handelt oder tatsächlich um einen neuen Titel. Für den ersten Fall gibt es eine neue Funktion, mit der der ehemalige Titel korrigiert werden kann.

## Neupositionierung der Kuratorengruppe in den Paketdetails
Bei der Paketbearbeitung ist das Panel der Kuratorengruppen unter dem Reiter "Paketeigenschaften" neu positioniert worden. Auf diese Weise wurde in der Zusammenfassung Platz geschaffen, um die Prüfanfragenleiste prominenter und in der vollen Breite darstellen zu können. Dafür ist es in der Ansicht "Zusammenfassung" nun möglich, sich die Kontaktdaten der angegebenen Kuratorengruppe per Mausklick auf den Namen aufzurufen. Auch erwähnenswert ist die Erweiterung der Anzeige der Ergebnisliste um die Spalte "Erstellt am". Die Liste lässt sich dadurch nach den neuesten Paketen sortieren.

## Dialogfenster für den KBART-Import
Beim manuellen KBART-Import sind die beiden Optionen "Teil-Update" und "Fehlende Titel als gelöscht markieren" unter dem neuen Punkt _Weitere Optionen_ ausklappbar. Diese visuelle Reduzierung im Dialogfenster, wurde vorgenommen, um Irritationen der Nutzenden beim Import zu verhindern. In der Pakettitelebene ist neu, dass der bisherige Bereich der Preisinformationen weggefallen ist. Dieser wurde in der Vergangenheit nicht genutzt.

## Automatisches Setzen des Zugriffsanfangs für Erstimport deaktiviert
Bisher wurde für jeden Pakettitel, der erstmalig im Rahmen einer Paketeinspielung in die GOKB aufgenommen wurde, das Einspieldatum als "Zugriffsanfang" gewertet, sofern kein explizites Datum vorliegt. Das ist für die Pakethistorie eine häufig korrekte Schätzung, aber meistens falsch für die Ersteinspielung eines Pakets. Daher wird das Datum bei einer Ersteinspielung nicht mehr automatisch gesetzt.

## Hinweis zur Änderung der URL-Struktur
Mit dem Release wurde auch die URL-Struktur für Komponenten angepasst. Das _#-Zeichen_ in der ursprünglichen URL z. B. https://gokb.org/gokb-ui/#/package/[komponente] ist nicht mehr korrekt. Die korrekte Verlinkung für Komponenten ist nun https://gokb.org/gokb-ui/[komponente]. Die UUID-URLs sind davon nicht betroffen. Daher empfehlen wir, bei der Anpassung gespeicherter Links grundsätzlich die persistenten UUID-URLs zu verwenden.

## Neue Schnittstelle für den Datenimport externer Quellen (we:kb) und deren Auszeichnung
Ein neues Feature ist die we:kb-GOKB Schnittstelle. Dadurch können Daten aus der Knowledge Base we:kb automatisiert per Mausklick in die GOKB übertragen werden. Bei der Anlage eines Pakets wird über den neuen Button "Aus externer Datenquelle importieren" der Datenimport gestartet. Es öffnet sich ein modaler Dialog, in dem die zu übertragenen Daten angezeigt und ggf. angepasst werden, um den Prozess zu aktivieren.

## Auszeichnung der Herkunft von Paketen aus fremden Repositorien
Pakete aus anderen Repositorien wie der we:kb und der EZB werden durch die Angabe der "Importquelle" in den Paketinformationen kenntlich gemacht. Diese Information wird auch über die APIs ausgegeben, sodass in Drittsystemen danach gefiltert werden kann.

## Vollständige Liste der Neuerungen
Eine Gesamtübersicht aller Neuerungen finden Sie im [Github-Repo der GOKB](https://github.com/openlibraryenvironment/gokb-ui/releases/tag/v.1.8.0).


# Release 1.7
_Veröffentlicht am 26. Januar 2024_

Die zentralen Neuerungen der Version 1.7 sind zum einen die Integration der DDC-Klassifikation auf Titel- und Paketebene und zum anderen sind mehr Sichten der GOKB durch eindeutige URLs ansteuerbar.

## Implementierung DDC-Sachgruppen
Als innovative und wichtige Neuerung werden nun die DDC-Sachgruppen in der GOKB eingebunden. Möglich ist dies zum einen durch eine automatisierte Anreichung der Referenztitel von Journals und Periodika über die ZDB. Zum anderen können die DDC-Notationen auf Paket- und Pakettitelebene wie auch bei den Referenztiteln manuell über ein Dropdown Menü ergänzt werden. Für diese Daten wurden zwei neue Felder integriert. Über die Optionen "Sacherschließung" (System) und "Wert" kann in der Suche nach den DDC-Sachgruppen gefiltert werden. Im Bearbeitungsmodus können unter dem gleichnamigen Reiter die Sachgruppen hinzugefügt werden. Bei der Option "Pakettitel bearbeiten" werden über den Button "Hinzufügen" in dem Feld die Daten ausgewählt und gespeichert. Mehrfachbelegungen werden akzeptiert.

## Eindeutige URLs 
Als weitere unterstützende Neuerung sind mehr Sichten der GOKB durch eindeutige URLs ansteuerbar, sodass Sie die Links zu konkreten Suchen, Reiter der Detailsichten und Pakettiteln als Lesezeichen speichern oder kopieren und weitergeben können.
Beim Wechsel zwischen den Reitern einer Detailansicht wird für jeden Reiter eine eigene URL erzeugt, damit Nutzende direkt auf einen Reiter geleitet werden können. In der Paket-, Referenztitel- und Anbieterdetailansicht wird für die einzelnen Reiteransichten ein Code in der URL ergänzt. Die Detailansicht eines Pakettitels wird über den Button "Vollansicht öffnen" angezeigt. Es öffnet sich ein neuer Tab im Browserfenster. Diese generierte URL führt nun ebenfalls direkt zu dem aufgerufenen Titel. Auch Suchanfragen in den Komponenten Pakete, Referenztitel, Prüfanfragen, Anbieter und Benutzer generieren eine eindeutige URL. Die angegebenen Parameter werden in der URL während der Suchanfrage angehängt.

## Vollständige Übersicht der Änderungen
Eine Gesamtübersicht aller Neuerungen finden Sie im [Github-Repo der GOKB](https://github.com/openlibraryenvironment/gokb-ui/releases/tag/v1.7.0).

# Release 1.6
_Veröffentlicht am 26. Juli 2023_

Die zentralen Neuerungen der Version 1.6 sind die Erweiterung der Such- und Filterfunktion sowie die visuelle Aufteilung der Bearbeitungsansicht zum Hinzufügen von Plattformen.

## Neue Such- und Filterfunktion
In den Suchansichten wurde für die Identifikatoren die Filterfunktion „Namensraum“ ergänzt. Es kann nun gezielt nach diesen gefiltert werden.

Als weiteres Feature können die Suchergebnisse als CSV exportiert werden.

## Anlegen/Bearbeiten von Anbietern und Plattformen
Für Anbieter kann nun eine empfohlene Kurzform hinterlegt werden. Dies ist sowohl beim Anlegen als auch in der Bearbeitungssicht möglich.

Das Fenster unter dem Reiter „Plattformen“ zum Hinzufügen von Plattformen wurden visuell aufgeteilt, um die Neuerstellung oder Bearbeitung einer bestehenden Plattform zu erleichtern. Es gibt nun zum einen die Möglichkeit „Auswählen“, um eine existierende Plattform zu suchen und zu bearbeiten. Kann keine Plattform gefunden werden, gibt es die Möglichkeit über den Punkt „Neu“, eine neue Plattform anzulegen. 

## Pflege von Paketen und Pakettiteln
Es werden nun fehlerhafte Identifikatoren markiert, wenn sie einen Validierungsfehler verursachen. Ein manuell erstellter Referenztitel kann erst gespeichert werden, wenn der _Typ_ des Titels ausgewählt wurde. Eine weitere Neuerung ist, dass bei der manuellen Erstellung eines neuen Pakettitels bei der Auswahl des Referenztitels der bestehende Name und die IDs als Standard übernommen werden.

## KBART-Import
Für den KBART-Import wurden neue Optionen hinzugefügt. Zum einen können Pakettitel, die in einer aktualisierten Liste nicht mehr enthalten sind, optional als "gelöscht" statt "archiviert" markiert werden. Zum anderen werden Monographien mit einem zukünftigen Datum in der Spalte "date_monograph_published_online" in der Titelliste mit dem Status "erwartet" angezeigt.

## Login-Verfahren
Das Login-Verfahren wurde überarbeitet. Sie bleiben innerhalb eines Browsers eingeloggt. Dies gilt auch für das Öffnen neuer Tabs. Nicht-dauerhafte Anmeldungen werden automatisch nach einer bestimmten Zeit abgemeldet und nicht mehr beim Schließen des Browser-Tabs.

## Vollständige Übersicht der Änderungen
Eine Gesamtübersicht aller Neuerungen finden Sie im [Github-Repo der GOKB](https://github.com/openlibraryenvironment/gokb-ui/releases/tag/v1.6.0).

# Release 1.5
_Veröffentlicht am 17. April 2023_

Die zentralen Neuerungen der Version 1.5 sind eine verbesserte Darstellung der Prüfanfragen sowie Optimierungen bei der Validierung und beim Import von KBART-Dateien.

## Verbesserte Darstellung der Prüfanfragen
Im Sinne einer besseren Usability steht eine neue Workflow-Oberfläche zur Bearbeitung der Prüfanfragen zur Verfügung. Die Darstellung ist nun übersichtlicher, wodurch sich Titel- und Identifikator-Inkonsistenzen sowie Dubletten intuitiver bereinigen lassen. Aussagekräftige Anweisungen und Hinweistexte sowie farbliche Hervorhebungen wichtiger Informationen sorgen ebenfalls für eine bessere Bedienbarkeit. Auch die einzelnen Aktionsbuttons, über die sich unter anderem Titeländerungen vornehmen, Titel auswählen und Dubletten zusammenführen lassen, sind nun aussagekräftiger gestaltet und tragen somit dazu bei, dass Prüfanfragen einfacher bearbeitet werden können.

## Optimierungen bei Validierung und Import von KBART-Dateien
Bei der Validierung von KBART-Dateien erscheint nun eine Warnung bei fehlender title_id. Außerdem werden Konflikte in der Abdeckung von Journals identifiziert und es finden mehr Überprüfungen auf fehlerhafte Zeichensätze statt. Auch beim Import von KBART-Dateien erfolgt eine detailreichere Rückmeldung seitens des Systems, sodass Nutzer*innen die Fehlerquellen besser nachvollziehen können. Eine weitere Neuerung ist schließlich, dass fehlerhafte Zeilen in einer KBART-Datei zur Ablehnung dieser Datei und somit zum Scheitern des Imports führen. Hierdurch wird sichergestellt, dass Pakete kontrolliert in ihrer Gesamtheit in die GOKB eingespielt werden können (und nicht ungewollt ohne wichtige Pakettitel).

## Vollständige Übersicht der Änderungen
Eine Gesamtübersicht aller Neuerungen finden Sie im [Github-Repo der GOKB](https://github.com/openlibraryenvironment/gokb/releases).

# Release 1.4
_Veröffentlicht am 15. Dezember 2022_

Die zentralen Neuerungen der Version 1.4 sind die aussagekräftigere KBART-Validierung und der öffentliche KBART-Validator.

## Aussagekräftige KBART-Validierung
Die Validierung der KBART-Dateien wurde überarbeitet und ist deutlich aussagekräftiger. Fehler in der KBART-Datei
werden mit der Zeilennummer und dem fehlerhaften Wert ausgegeben. Dadurch wird die Korrektur fehlerhafter
KBART-Werte deutlich erleichtert.

## Öffentlicher KBART-Validator
Auf der Basis der verbesserten KBART-Validierung gibt es nun einen [öffentlichen KBART-Validator](https://gokb.org/gokb-ui/#/kbart-validator).
Der KBART-Validator kann auch ohne Einloggen in die GOKB genutzt werden und bietet die Möglichkeit, beliebige
KBART-Dateien auf ihre Korrektheit zu überprüfen und sich Fehler ausgeben zu lassen. Damit stellt er ein Tool sowohl
für Bibliotheken wie für Anbieter dar, die ihre eigenen Dateien überprüfen wollen. Dabei ist der Validator
strenger als die Validierung während des Paket-Uploads, da er sich strikt an den KBART-Standard der NISO hält.
Somit wirft er Fehler bei Werten aus, die von der GOKB akzeptiert werden aber
nicht im KBART-Standard enthalten sind (wie *publication_type* "Database").

## Paketliste auf Anbietersicht
Auf der Anbieter-Detailsicht gibt es nun einen neuen Reiter für die für diesen Anbieter eingespielten Pakete. Dadurch
ist eine schnellere Übersicht über das Portfolio eines Anbieters möglich. Weiterhin kann über die Paketsuche nach
einem Anbieter gefiltert werden, um dieselbe Übersicht zu erhalten.

## KBART-Export in der Paketsicht
Bisher konnten Pakete nur über die Paketsuche als KBART exportiert werden. Im neuen Release findet sich ein Export-Button
in der Pakettitel-Sicht jedes einzelnen Pakets. Wie gewohnt kann man hier die Optionen "Original" oder "Angereichert"
wählen. "Original" gibt dabei die KBART-Datei auf Basis der Pakettitel aus - so, wie man die Datei auch schon eingespielt
hat. "Angereichert" bedeutet, dass zusätzlich Informationen der Referenztitel ausgegeben werden (z. B. der von der ZDB
angesetzte Titel oder weitere Identifikatoren wie die ZDB-ID).

## Verlinkung von externen Ressourcen
Die GOKB zeichnet sich dadurch aus, dass die enthaltenenen Daten mit Identifikatoren aus verschiedensten Quellen
angereichert werden. Im neuen Release ist es über ein Linksymbol neben den Identifikatoren möglich, direkt zur
Ressource im Drittsystem zu springen, so z. B. zum ZDB-Opac, zur ISIL-Agentur oder zum Portal der ISSN-Agentur.
Dadurch wird die Recherche und ggf. Korrektur von Daten deutlich erleichtert. Voraussetzung für eine erfolgreiche
Verlinkung ist, dass das Drittsystem eine direkte Verlinkung über den Identifikator unterstützt.

## Vollständige Übersicht über Änderungen
Eine Gesamtübersicht über alle Neuerungen finden Sie im
[Github-Repo der GOKB](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.24.0).

# Release 1.3
_Veröffentlicht am 04. August 2022_

Die zentralen Neuerungen der Version 1.3 ist eine deutliche Verbesserung des Importverhaltens sowie eine Optimierung 
der Suchfunktionen.

## Neuer Importprozess 
Der Importprozess wurde intern deutlich überarbeitet. So wird im Hintergrund nicht mehr das Import-Tool YGOR 
aufgerufen, das - verborgen vor den Nutzer*innen - bisher den Import übernahm. Dadurch, dass der Importprozess 
komplett innerhalb des GOKB-Systems stattfindet, ist er nun deutlich schneller und liefert früher bessere 
Rückmeldungen. Darüber hinaus gibt es mehrere Verbesserungen des Imports:

### Importfortschritt in der Paketsicht
Den Fortschritt des Imports sowie den Ergebnisbericht kann man nun in der jeweiligen Paketsicht ansehen und muss 
nicht mehr zum Dashboard zurückkehren. In der Kopfzeile der Seite wird nach `Abschicken` eines neuen Imports der 
Fortschritt blau unterlegt dargestellt. Nach Abschluss ist über eine Snackbar am Fuß des Sichtbereichs das Ergebnis
abrufbar. 

### Überarbeitung der Job-Anzeige
Die neue Import-Liste auf dem Dashboard ersetzt die ehemalige Jobanzeige. Hier werden laufende und abgeschlossene 
Importe mit dem Ergebnis (`Erfolgreich` oder `Fehlerhaft`) angezeigt. Über die Links gelangt man zu einem 
ausführlichen Import-Bericht bzw. zum Paket selbst. Über anklickbare Icons oberhalb der Liste kann man zwischen
Importen der eigenen Kuratorengruppe bzw. zwischen persönlich angestoßenen Importen wechseln sowie die automatische
Aktualisierung der Auszeige an- und ausschalten.

### Testlauf für Paketimport
Beim Hochladen einer KBART-Datei kann nun die Option `Testlauf` angewählt werden. Wird eine KBART-Datei mit der
Option `Testlauf` importiert, wird wie im produktiven Import ein Importbericht ausgegeben, allerdings ändert sich 
an den Daten nichts. So bietet die neue Funktion die Möglichkeit, bei unsicheren KBART-Dateien vorab zu prüfen, 
ob der Import sinnvoll ist oder die Datei nachgebessert werden müsste.

## Neue Such- und Filterfunktionalität
Die Such- und Filtersichten für Pakete, Referenztitel etc. wurden überarbeitet. So unterstützt die Suche nach dem 
Namen einer Komponente boolesche Operatoren wie `AND`, `OR`, `NOT` (auf die Großschreibung achten!). Die 
Standardeinstellung der Suche ist dahingehend geändert worden, dass alle Suchbegriffe vorkommen müssen
(`AND`-Verknüpfung). Für die Filterung der Daten nach einem von mehreren Suchbegriffen müssen diese explizit 
mit `OR` verknüpft werden. Zudem unterstützt die Suche Rechts- und Linkstrunkierung mit Asterisk (`*`).

## Systemmeldungen als Snackbar
Systemmeldungen wie "Fehlerhafter Import" oder "Gelungener Import" erscheinen jetzt grün oder rot unterlegt 
als Snackbar, d.h. als überlagerndes UI-Element am Fuß der Seite. So kann man auch bei umfangreichen Sichten
ohne Scrollen die jeweilige Meldung wahrnehmen. 

## Prüfanfragen verknüpfter Referenztitel sind im Paket sichtbar
In der Paketsicht zeigte der Reiter "Prüfanfragen" bisher alle Prüfanfragen, die das Paket selbst oder einzelne 
Pakettitel betreffen. So erhalten Kuratorengruppen die Möglichkeit, alle offenen Prüfanfragen zu bearbeiten. Neu 
hinzugekommen ist ein Schalter, über den man eine Sicht auf die Prüfanfragen aller mit den Pakettiteln verknüpften
Referenztiteln erhält. So können Nutzer*innen erkennen, ob bei den verknüpften Referenztiteln beispielsweise 
Dubletten oder missglückte ZDB-Anreicherungen vorliegen und diese selbst beheben bzw. der zuständigen Kuratorengruppe
melden. 

## Anlegen und Verknüpfen neuer Plattformen
In der Sicht zum Bearbeiten eines Anbieters wurde das Anlegen einer Plattform deutlich mächtiger. Man kann nicht nur
neue Plattformen erstellen, sondern auch existierende Plattformen suchen und hinzufügen, sofern diese nicht schon
mit einem anderen Anbieter verknüpft sind. Dadurch wird das Anlegen von Plattformdubletten deutlich unwahrscheinlicher.

## "Cool URI" für Komponenten
Jede Komponente wie Anbieter, Pakete, Plattformen, Titel etc. ist jetzt anhand der GOKB-UUID über eine feste URI 
erreichbar. Die URI findet sich in der Oberfläche im Kopffeld jeder Ressource neben der UUID und kann über einen 
Button in die Zwischenablage kopiert werden. Über die APIs wird die URI ebenfalls ausgegeben. Dadurch ist es 
möglich, von jedem System, das die URI berücksichtigt, eindeutig auf den GOKB-Datensatz zurückzuspringen. 

## OpenSearch statt Elastic Search
Aufgrund von Änderungen der Lizenzbestimmungen wurde ElasticSearch als Suchmaschine vollständig durch [OpenSearch](https://opensearch.org/)
ersetzt, eine Abspaltung, die die Software unter der freien Apache-Lizenz weiterführt. 

## Vollständige Übersicht über Änderungen
Eine Gesamtübersicht über alle Neuerungen finden Sie im
[Github-Repo der GOKB](https://github.com/openlibraryenvironment/gokb/releases/tag/v8.23.0).

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
Die Kuratorengruppen für Paketkuratierung erhalten die Möglichkeit, Prüfanfragen über einen Button an eine ihnen zugeordnete
Titelredaktionsgruppe zu eskalieren. So kann eine Frage, die über das Arbeitsgebiet von z.B. Erwerbungsabteilungen
hinausreicht, die zuständige Titelredaktion diese klären. Für Titelredaktionen ist dieselbe Funktion für die Eskalation
von Prüfanfragen zu Zeitschriften an die ZDB möglich. 

## EZB-Anreicherung

Zeitschriften als Referenztitel werden nun automatisiert dem Titelidentifikator EZB-ID der EZB (Elektronische 
Zeitschriftenbibliothek) angereichert. Dadurch kann eine Referenzierung von Zeitschriftentiteln in anderen Systemen, 
die mit der EZB arbeiten, eindeutiger und eiffizienter erfolgen. Sobald in der GOKB ein neuer 
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
Damit Paket-Updates durch KBART-Dateien sauberer und fehlerfreier durchlaufen, ist das Verfahren zum Abgleich 
mit schon vorhandenen Pakettiteln verbessert worden. Unterscheidet sich nur ein relevanter Identifikator 
wird ein neuer Pakettitel angelegt (Bei Zeitschriften: proprietäre Titel-ID im Feld _title_id_, ZDB-ID, eISSN, 
DOI, Print-ISSN; bei Monographien: proprietäre Titel-ID im Feld _title_id_, ISBN der Online-Ausgabe, ISBN der Print-Ausgabe, DOI). 
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

_Veröffentlicht am 09. November 2021_

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

Die Umgestaltung des Einspielprozesses führt auch zu neuen Prüfanfragen. 
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
