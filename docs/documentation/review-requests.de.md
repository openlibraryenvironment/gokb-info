# Arbeiten mit Prüfanfragen

Prüfanfragen sind zentrale Workflow-Komponenten der GOKb. Über Prüfanfragen wird Ihnen 
mitgeteilt, ob bei der Bearbeitung oder dem Einspielen von Komponenten Fehler aufgetreten sind oder 
mögliche Ungereimtheiten entdeckt wurden. Auch einfache Informationen und Rückmeldungen werden 
Ihnen in Form von Prüfanfragen zurückgemeldet. 

Das Ziel jeder Kuratorengruppe sollte sein, alle Prüfanfragen zu einer Paketeinspielung anzusehen, 
ggf. zu bearbeiten und zu schließen. Dabei ist zu beachten:
  
  * Die Bearbeitung einer Prüfanfrage erfordert - abhängig von der Art der Prüfanfrage - eine 
  Bearbeitung der jeweiligen Komponente. Die Prüfanfrage muss danach manuell geschlossen werden.
  * Viele Prüfanfragen dienen nur zur Information und können ohne Bearbeitung geschlossen werden.
  * Die GOkb reagiert sehr sensibel auf mögliche Ungereimtheiten in den Daten. Gegebenenfalls 
  können so von dem System Prüfanfragen geöffnet werden, die nur vermeintlich einen Fehler 
  beschreiben, obwohl alles korrekt ist. Diese können nach Prüfung geschlossen werden. 

## Prüfanfragen finden

In der GOKb gibt es drei Wege, um Prüfanfragen zu finden.

  * Im Dashboard
  * In der Paketsicht
  * In der Prüfanfragen-Sicht
  
### Dashboard

Im Dashboard werden alle Prüfanfragen angezeigt, die der ausgewählten Kuratorengruppe zugeordnet sind. 

![GOKb review requests dashboard](../assets/dashboard.de.png "GOKb Prüfanfragen im Dashboard")


### In der Paketsicht

In der Paketsicht sind alle Prüfanfragen aufgeführt, die zum augenblicklich ausgewählten Paket gehören. 
Das umfasst sowohl Prüfanfragen, die das Paket insgesamt betreffen sowie Prüfanfragen zu den enhaltenen 
Pakettiteln sowie den zugehörigen Referenztiteln.

![GOKb review requests package view](../assets/review-requests-package-view.de.png "GOKb Prüfanfragen in Paketsicht")

### In der Prüfanfragen-Sicht

Zur Prüfanfragen-Sicht gelangen Sie über das Menü. Hier können Sie alle Prüfanfragen der GOKb
finden und nach folgenden Kriterien filtern:

  * **Ursache** - Ein Freitextfeld
  * **Kuratorengruppe** - Auswahl der Kuratorengruppe, der die Prüfanfrage zugeordnet ist
  * **Komponente** - Ein Auswahlfeld, in dem alle Komponenten (Anbieter, Pakete, Titel etc.) suchbar sind
  * **Kategorie** - Eine Auswahl der Kategorien der Prüfanfragen. Eine Übersicht der Kategorien finden 
  Sie weiter unten.
  * **Status** - Eine Auswahl des Status der Prüfnafrage (Offen, Geschlossen, Gelöscht)
  
![GOKb review request search view](../assets/review-requests-search.de.png "GOKb Prüfanfragensicht")
  
## Prüfanfragen einsehen und bearbeiten

In der jeweiligen Ergebnisliste finden Sie eine Übersicht über die Komponente, den Komponententyp (wie 
Journal, Paket etc.), die Kategorie der Prüfanfragen und das Erstellungsdatum. 

Über die Checkbox zu Beginn jeder Zeile können Sie eine oder mehrere Prüfanfragen anwählen und über den Button 
"Schließen" den Status auf "Geschlossen" setzen. 

Für eine Detailsicht der Prüfanfrage wählen Sie den Link unter der Spalte "Komponente" an

### Detailsicht

In der Detailsicht erhalten Sie verschiedene Informationen und Optionen:

  * **Erstellt am:** Das Feld zeigt das Datum der Erstellung der Prüfanfrage.
  * **Status:** Der Status ("Offen" oder "Geschlossen") gibt den Status der Prüfanfrage an. Wenn eine 
  Prüfanfrage bearbeitet ist, d.h. die geprüfte Komponente von Ihnen als korrekt angesehen wird (nach 
  einer Korrektur oder weil die Prüfanfrage keine weitere Bearbeitung erfordert), können Sie den Status 
  auf "Geschlossen" setzen.
  * **Komponente:** Dieses Feld gibt die genaue Komponente an, d.h. welches Paket, welche Plattform oder 
  welcher Anbieter für die Prüfanfrage ursächlich ist. 
  * **Durchgeführte Aktion:** Dieses Feld gibt an, wie die GOKb automatisiert mit dem festgestellten 
  Problem verfahren ist.
  * **Ursache:** Dieses Feld gibt die Ursache an, die zum Öffnen der Prüfanfrage geführt hat. 
  * **Weitere Komponenten:** Gibt es weitere Komponenten neben der zuvor angegebenen, die für die Prüfanfrage 
  ursächlich ist, so werden diese hier angezeigt. Sie können weitere Komponenten selbständig verknüpfen.
  * **To Do**: Falls eine Handlung von Ihnen als Nutzer*in erforderlich ist, erhalten Sie hier eine Anleitung.
  
Sie können die Prüfanfragen an dieser Stelle schließen und die Detailsicht über den Button "Aktualisieren" 
wieder verlassen. 
  
![GOKb review requests details](../assets/review-requests-details.de.png "GOKb Prüfanfragen Detailsicht")

# Typen von Prüfanfragen

Hier finden Sie eine Auflistung von Prüfanfragen. Sie können über den Titel der Prüfanfrage direkt zum 
richtigen Eintrag springen.

  * Prüfanfragen für die Paketkuratierung
    * [Ungültige Pakettitel](#ungultige-pakettitel)
    * [Unterschiedliche Namensräume](#unterschiedliche-namensraume)
    * [Ungültiger KBART-Datensatz](#ungultiger-kbart-datensatz)
    * [Uneindeutiger KBART-Datensatz](#uneindeutiger-kbart-datensatz)
    * [Identifikatoren-Konflikt beim KBART-Import](#identifikatoren-konflikt-beim-kbart-import)
    * [Ergebnisbericht einer KBART-Einspielung](#ergebnisbericht-einer-kbart-einspielung)
  * Prüfanfragen für die Titelredaktion
    * [Uneindeutige Titelübereinstimmung](#uneindeutige-titelubereinstimmung)
    * [Unterschiedliche Namensräume](#unterschiedliche-namensraume)
    * [Identifikatoren-Konflikt (Neuer Titel)](#identifikatoren-konflikt-neuer-titel)
    * [Identifikatoren-Konflikt (ID ergänzt)](#identifikatoren-konflikt-id-erganzt)
    * [Generischer Matchingkonflikt](#generischer-matchingkonflikt)
    * [Abdeckungskonflikt](#abdeckungskonflikt)
  * Prüfanfragen für die Zentralredaktion
    * [Mehrere EZB-/ZDB-Kandidaten](#mehrere-ezb-zdb-kandidaten)
    * [EZB-ID/ZDB-ID bereits verwendet](#ezb-idzdb-id-bereits-verwendet)
    * [Keine EZB-/ZDB-Aufnahme gefunden](#keine-ezb-zdb-aufnahme-gefunden)
    
    

Jeder Eintrag ist wie folgt aufgebaut:
 
  * **Info:** Eine Erklärung, was es mit der Prüfanfrage auf sich hat.
  * **Aktion:** Ein Hinweis darauf, wie das GOKb-System automatisiert auf die Ursache der Prüfanfrage 
  reagiert hat. Ist der Eintrag leer, hat die GOKb nichts unternehmen können.
  * **toDo:** Hier ist erläutert, wie Sie als Kurator*in den möglichen Konflikt prüfen und lösen können. 
  Ist der Eintrag leer, diente die Prüfanfrage lediglich zu Ihrer Information und Sie müssen nichts 
  weiter tun.


## Anleitung zur Bearbeitung von Prüfanfragen
### Im Folgenden erklären wir Ihnen in einzelnen Schritten, wie Sie bestimmte Typen von Prüfanfragen bearbeiten können.

### ISSN Konflikt

Der Konflikt ist entstanden, weil der Pakettitel eine e-ISSN enthält, die einer bestehenden p-ISSN des Referenztitels entspricht, oder umgekehrt.

![Screenshot_ISSN_Konflikt_052023](https://user-images.githubusercontent.com/127318583/236470236-f3174403-6222-454a-9fea-49a4b22af37c.png)

1. In der Kachel wird der zu korrigierende Titel mit den enthaltenen Identifikatoren angezeigt. Durch anklicken des Kästchens in der Tabelle wählen Sie die zu löschende ISSN aus.
2. Die Löschung aktivieren Sie überden Button "Titeländerungen Abschicken".
3. Um einen neuen Identifikator hinzuzufügen, klicken Sie auf den Titel. Es öffnet sich dann in einem neuen Fenster die Detailansicht.
4. Im Anschluss klicken Sie auf den Button "Prüfanfrage Abschliessen".

**Hinweis:** Print- und Onlineversion einer Zeitschrift müssen mit eigenen ISSNs ausgezeichnet werden. Verschiedene Nachweissysteme benutzen jedoch eine ISSN fälschlich für beide Versionen. Die autorisierten ISSNs finden Sie unter https://portal.issn.org/.


### Fehlerhafter Name

Der Konflikt ist entstanden, weil der Name des Titels ein fehlerhaftes Zeichen enthält.

![Screenshot_invalid_name3_052023](https://user-images.githubusercontent.com/127318583/236760551-481b36d7-b309-40f6-ab86-56dfb827c092.png)

1. Klicken Sie auf das Stift-Icon in der Kachel, das hinter dem zu prüfenden Titel angezeigt wird. Sie können so direkt im Feld die fehlerhaften Zeichen im Titelnamen anpassen. Die Korrektur wird übernommen, indem Sie den Haken am Ende des Feldes aktivieren.
2. Speichern Sie die Änderung des Titels über den Button "Titeländerungen Abschicken".
3. Überprüfen Sie ebenfalls die in der Kachel angezeigten Paket- bzw. Referenztitel. Mit einem Klick auf den Namen öffnet sich die Detailansicht in einem neuen Fenster. 
4. Die Prüfanfrage beenden Sie über den Button "Prüfunanfrage Abschliessen".

**Hinweis:** Fehlerhafte Zeichen im Titel tauchen immer dann auf, wenn KBART-Dateien eingespielt werden, die nicht UTF-8-konform sind. In der Dokumentation finden Sie eine [Anleitung](https://gokb.org/de/documentation/kbart-editing.html), wie man mit einem Tabellenkalkulationsprogramm Dateien in UTF-8 umwandelt und speichert. Für die korrekte Titelaufnahme kann die Verzeichnung in externen Quellen helfen.

### Identifikatoren-Konflikt beim KBART-Import

Der Konflikt ist entstanden, weil die GOKb zwar den KBART-Datensatz einem bestehenden Pakettitel zuordnen konnte, aber sich ein oder mehrere andere Identifikatoren unterscheiden.

![Screenshot_import_identifier_mismatch11052023](https://github.com/openlibraryenvironment/gokb-info/assets/127318583/f8f4d43d-d33d-4213-b1c7-8225221c85dc)

1. Neben dem zu prüfenden Pakettitel werden Ihnen bereits bestehende Pakettitel angezeigt, die anhand übereinstimmender Identifikatoren zugeordnet werden konnten. Gleichen Sie die Pakettitel miteinander ab und achten Sie dabei auf mögliche Titel-Splits.
2. Prüfen Sie anschließend, welcher Identifikator fehlerhaft ist und korrigieren Sie diesen im entsprechenden Datensatz in der KBART-Datei. Löschen Sie den fehlerhaften Pakettitel in der Detailansicht.
3. Importieren Sie anschließend die korrigierte KBART-Datei neu im angelegten Paket, um den Fehler zu beheben. Alternativ markieren Sie den falschen Identifikator in der betreffenden Kachel aus und löschen ihn mit „Titeländerung Abschicken“. 
4. Klicken Sie dann den Referenztitel an, um in die Detailansicht zu gelangen und dort den korrekten Identifikator zu ergänzen.
5. Schließen Sie die Prüfanfrage über den Button „Prüfanfrage Abschließen“.
