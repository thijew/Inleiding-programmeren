console.log('Halooo')
// Hier zorg ik ervoor dat wanneer je een naam submit, de naam boven het diertje komt te staan.
var naamveld = document.querySelector('#naamDier');

function naamdier (naam) {
    console.log("teste");
    naamveld.textContent = naam;
};

function verwerkNaam () {
    var inputNaam = document.querySelector('#inputnaam').value;

    naamdier (inputNaam);
};

var button = document.querySelector('button');

button.addEventListener('click', verwerkNaam);
//Tot hier.

// Hier maak ik een aantal variabels aan voor het stukje code hieronder.
var food = document.querySelector('.food');
var healthbar = document.querySelector('#health');
var toys = document.querySelector('.toys');
var happinessbar = document.querySelector('#happiness');
var dier = document.querySelector('#dier');

// Hier zorg ik ervoor dat wanneer je op het eten klikt er 25 bij de healtbar erbij komt.
function giveFood () {

    healthbar.value = healthbar.value + 25;
    console.log(healthbar.value);
    dier.src = 'images/when-given-food.svg';

    // In het stukje code hier onder check in een aantal waarders. Waardoor de image van het diertje veranderd.
    if (healthbar.value== 100 && happinessbar.value == 100) {
        console.log('Diertje is helemaal tevreden');
        dier.src = 'images/all-full.svg';
    };

    // Met setTimeout zorg ik ervoor dat er na een seconde een andere image getoont wordt.
    if (healthbar.value < 99 ) {
        console.log('Je diertje heeft honger');
        setTimeout(() => {
            dier.src = 'images/hungry.svg';
        }, 1000);
    };

    if (healthbar.value == 100 && happinessbar.value < 99) {
        console.log('Speel met je diertje');
        setTimeout(() => {
            dier.src = 'images/wants-to-play.svg';
        }, 1000);
    }
};

// Hier zorg ik ervoor dat de images van het eten klikbaar worden.
food.addEventListener('click', giveFood);


// De functie hieronder is gelijk aan de functie hierboven maar dan voor het speelgoed.
// Zie annotaties vorige functie.
function giveToy () {

    happinessbar.value = happinessbar.value +25;
    console.log(happinessbar.value);
    dier.src = 'images/when-played-with.svg';

    if (happinessbar.value == 100 && healthbar.value == 100) {
        console.log('Diertje is helemaal tevreden');
        dier.src = 'images/all-full.svg';
    };

    if (happinessbar.value < 99) {
        console.log('Speel met je diertje');
        setTimeout(() => {
            dier.src = 'images/wants-to-play.svg';
        }, 1000);
    };

    if (happinessbar.value == 100 && healthbar.value < 99) {
        console.log('Je diertje heeft honger');
        setTimeout(() => {
            dier.src = 'images/hungry.svg';
        }, 1000);
    };
};
toys.addEventListener('click', giveToy);

// Deze setInterval zorg ervoor dat elke 30 seconden er 25 levens van beide progressbars afgaan.
    setInterval(() => {

        happinessbar.value = happinessbar.value -25;
        healthbar.value = healthbar.value -25;

        if (happinessbar.value < 99 && healthbar.value < 99){
            dier.src = 'images/hungry.svg';
        }

        if (happinessbar.value == 0 && healthbar.value == 0) {
            dier.src = 'images/allempty.svg';
        }
    }, 30000);

// Hier maak ik een variabele waar ik later met een functie iets instop.
   // var checkDrag; 
// Vanaf hier zorg ik ervoor dat wanneer je een food of toy op het diertje sleept het een functie aanroept.
// In deze functie hieronder zorg ik ervoor dat je iets kunt droppen op het diertje.
    function allowDrop(event) {
        event.preventDefault();
    };

// Dit is het stukje code wat ik heb veranderd
// Hier maak ik een functie aan met daarin 2 parameters
// Deze functie gaat kijken wat er op het diertje gesleept wordt. Wanneer het toys is voert hij giveToy uit en anders giveFood
// Wanneer de kat zelf op de kat wordt gesleept zal er niks gebeuren.
    function drag (x, y) {
        
        if ( y != 'kat') {
            if ( x == 'toy') {
                giveToy();
            }
            else {
                giveFood();
            }   
            
            
        }
        
    };
    
    food.addEventListener('dragend', function(){
        drag('food');

    });
    toys.addEventListener('dragend', function(){
        drag('toy');
    });
    
