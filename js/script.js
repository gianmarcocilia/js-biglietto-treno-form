// Inizio
const userNomeElem = document.getElementById("nome");
console.log(nome);

const userChilometriElem = document.getElementById("chilometri");
console.log(userChilometriElem);

const userEtaElem = document.getElementById("eta");
console.log(userEtaElem);

const inviaBtn = document.getElementById("invia");
console.log(inviaBtn);

const risultato = document.querySelector(".risultato")
console.log(risultato);

const prezzoChilometro = 0.21;

let sconto = "";

// Raccolta Dati al cliccare dell'invia
inviaBtn.addEventListener("click", function () {
    console.log("Ciao!");
    const userChilometri = parseInt(userChilometriElem.value);
    const userEta = userEtaElem.value;
    console.log(typeof userChilometri, userEta);
    const prezzoBase = prezzoChilometro * userChilometri;
    console.log(prezzoBase);
    const userNome = userNomeElem.value;
    console.log(userNome);
    // Calcolo Sconto
    if (userEta === "minorenne") {
        sconto = prezzoBase * 0.2;
    } else if (userEta === "over") {
        sconto = prezzoBase * 0.4;
    } else {
        sconto = 0;
    }
    console.log(sconto);

    // Calcolo Prezzo Finale
    const prezzoFinale = prezzoBase - sconto;
    console.log(prezzoFinale.toFixed(2));

    // NUMERI RANDOM

    const postoBiglietto = Math.floor(Math.random() * 33) + 1;
    console.log(postoBiglietto);
    // OUTPUT
    document.getElementById("nomebiglietto").innerHTML = userNome;
    document.getElementById("numeroposto").innerHTML = postoBiglietto;
    document.getElementById("costobiglietto").innerHTML = `Prezzo biglietto: €${prezzoFinale.toFixed(2)}`;
    document.getElementById("sconto").innerHTML = `Sconto applicato: €${sconto}`;
    risultato.classList.remove("nascosto");
})

document.getElementById("clear").addEventListener("click", function () {
    userNomeElem.value = "";
    userChilometriElem.value = "";
    risultato.classList.add("nascosto");
    userEtaElem.value = "";
  });

