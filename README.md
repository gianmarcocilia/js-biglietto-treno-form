###Esercizio
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
- Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
- Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

###Soluzione

**Dati**
- Prelevare il numero dei chilometri da percorrere dall'input
- Prelevare l'età del passeggero dall'input
- Creare una variabile con prezzo per chilometro

**Logica**
- Calcolo del prezzo per chilometro (chilometro * 0.21 €)
- Calcolo dello sconto:
SE (età < 18) sconto = prezzo base * 0.20 
ALTRIMENTI SE (età > 65) sconto = prezzo base * 0.40 
ALTRIMENTI sconto = 0
- Calcolo prezzo finale = prezzo base - sconto

**Output**
-Scriviamo in pagina il prezzo finale (prezzo formattato con massimo due decimali)
-Milestone 2