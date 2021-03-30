var calcolaBtn = document.getElementById('btn-calcola');
calcolaBtn.addEventListener('click', function(){

    var validaNome= document.getElementById('your-burger-name');
    var valoreNome = validaNome.value;
    
    if( valoreNome == ""){
        alert("Il Nome inserito non è corretto!");
        
    }else {

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

    // Creo array codici sconto:
    var codSconto= ["Sconto10","12345", "ABCDE"];

    // salvo l'imput per confronto
    var inputCliente= document.getElementById('discount');

    var coupon = inputCliente.value;

    // faccio verifiche
    
    var verifyCupon= codSconto.includes(coupon);

    if(verifyCupon == true){
        prezzoPanino -= (prezzoPanino * 0.1); 
    } 
    // stampo prezzo finale
    document.getElementById('prezzo-finale').innerHTML = prezzoPanino.toFixed(2) + ' €';


}});