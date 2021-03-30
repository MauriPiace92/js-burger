var calcolaBtn = document.getElementById('btn-calcola');
calcolaBtn.addEventListener('click', function(){

    var prezzoPanino = 8;
    var addOnPanino= document.getElementsByClassName('addon');

    // seleziono tutte le checkbox e sommo i prezzi delle scelte (parseint);
    for(var i=0; i < addOnPanino.length; i++) {

        var checkMoment=addOnPanino[i];

        // se check v aggiungo gli addon al pezzo finale
        if(checkMoment.checked == true){
            var prezzoAddon = parseInt(checkMoment.value);
            prezzoPanino += prezzoAddon;
            console.log(prezzoPanino);
        }

    }
    // stampo prezzo finale
    document.getElementById('prezzo-finale').innerHTML = prezzoPanino.toFixed(2) + ' €';

    // Creo array codici sconto:
    var codSconto= ["Sconto10","12345", "ABCDE"];


});