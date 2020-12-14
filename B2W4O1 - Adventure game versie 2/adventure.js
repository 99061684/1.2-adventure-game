//https://brainly.in/question/1096434 answer crack_the_code.jpg (0-4-2)
//https://forum.cfx.re/t/standalone-datacrack-hacking-mini-game/1066972 

const game_container = document.getElementById('game-container');
const title = document.getElementById('title');
const description = document.getElementById('description');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const inventoryItem = document.getElementById('inventoryItem');
const item1 = document.getElementById('item1');

var oppakken = {rooster:false, kaart:false, knipschaar:false, sleutel:false, code_kraken:false, camera:true};
var button_titels = {button1:"", button2:"", button3:""};
var level_onclick = {button1:"", button2:"", button3:""};

// button1.onclick = function() {change_img(2)};
// button2.onclick = function() {change_img(2)};
// button3.onclick = function() {change_img(3)};

//padding: 25px 50px 75px 100px;
    //  top padding is 25px
    //  right padding is 50px
    //  bottom padding is 75px
    //  left padding is 100px  

// inventoryItem.src = "images/crack_the_code.jpg";

//start de game
start();

// ------- te doen. ------
//  controleren pagina's

//  ----- extra ------
//  minigame toevoegen. 


//de game start en Instructies 

function start() { //de start pagina 
    title.innerHTML = '';
    description.innerHTML = '';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/escape_the_bunker.png")';

    title.style.fontFamily = "myFirstFont1, sans-serif";

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    button_titels["button2"] = "controls";
    level_onclick["button2"] = "Instructies()";

    buttons(5, button_titels, level_onclick);
}

function Instructies() { //de instructies pagina 
    title.innerHTML = 'Instructies game';
    description.innerHTML = "In de game krijg je meerdere keuzes door op de button te klikken ga je naar een andere pagina. In sommige pagina's kan je spullen oppakken door erop te klikken. Deze spullen kan je gebruiken in de game om nieuwe keuzes vrij te spelen of voor bijv. betere navigatie.";

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'none';

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    buttons(1, button_titels, level_onclick);
}

//de pagina keuzes/locaties

function begin_verhaal() { //kerker cel
    title.innerHTML = 'Begin Verhaal';
    description.innerHTML = 'Je zit gevangen in een ondergrondse kamer. Het laatste wat je je herinnerd is dat een vrouw je bewusteloos had geslagen en in een busje had gegooid. Toen je wakker begon te worden hoorde je nog net dat de vrouw zei dat ze je hier ging achterlaten in deze kamer voordat ze weg ging en de deur sloot.';
    game_container.style.color = "white";

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/kerker_donker.jpg")';

    oppakken = {rooster:false, kaart:false, knipschaar:false, sleutel:false, camera:true};

    //buttons
    button_titels["button1"] = "Om hulp roepen!";
    level_onclick["button1"] = "keuze_2()";

    button_titels["button2"] = "De kamer inspecteren";
    level_onclick["button2"] = "keuze_3()";

    buttons(5, button_titels, level_onclick);
}

function keuze_2() { //kerker cel
    title.innerHTML = 'Om hulp roepen!';
    description.innerHTML = 'je begint met roepen om hulp, maar niemand hoord je…';

    inventoryItem.style.display = "none";

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    buttons(1, button_titels, level_onclick);
}

function keuze_3() { //kerker cel
    title.innerHTML = 'De kamer inspecteren';
    description.innerHTML = 'je ziet een dichte traliedeur en een tralierooster in het dak je probeerd de deur eerst, hij zit op slot… je gaat naar het tralierooster in het dak. Je ziet dat het omogelijk is om er door heen te klimmen om dat er een lange tunnel naar boven is van waarschijnlijk meer dan 7 meter. Het rooster in het dak kan je wel aanraken, je voelt dat deze los zit.';

    inventoryItem.style.display = "block";
    inventoryItem.src = "images/rooster_kerker_donker_zonder_background.png";

    //oppakken check
    inventoryItem.onclick = function (){
        oppakken["rooster"] = true;
        keuze_3(); 
    };

    if (oppakken["rooster"] == true) {
        button1.style.display = "inline-block";
    } else {
        button1.style.display = "none"; 
    }    

    //button 1
    button1.innerHTML = 'Los rooster';
    button1.onclick = function() {keuze_4()};

    //button 2
    button2.style.display = "none"; 

    //button 3
    button3.style.display = "none"; 
}

function keuze_4() { //kerker cel
    title.innerHTML = 'Rooster weg';
    description.innerHTML = 'het lukt om het rooster los te krijgen en trekt het rooster uit het dak. Waneer deze op de grond ligt trek je een stang uit het rooster, waardoor je een losse stang krijgt.';

    inventoryItem.style.display = "none";

    //buttons
    button_titels["button1"] = "met de stang de deur open proberen te krijgen";
    level_onclick["button1"] = "keuze_5()";

    button_titels["button2"] = "Door het gat in het dak klimmen";
    level_onclick["button2"] = "einde_1()";

    buttons(5, button_titels, level_onclick);
}

function keuze_5() { //de gang
    title.innerHTML = 'gang';
    description.innerHTML = 'het lukt om de stang tussen de traliedeur en de muur te zetten en breekt de deur open. Je loopt door een gang en ziet 3 deuren. ';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/bunker_gang.jpg")';

    title.style.fontFamily = "myFirstFont5, sans-serif";

    //oppakken check
    if (oppakken["kaart"] == true) {
        description.innerHTML = 'Je loopt door een gang en ziet 3 deuren. ';
        button_titels["button1"] = 'kamer 1, eet/slaapkamer';
        button_titels["button2"] = 'kamer 2, gereedschapkamer';
        button_titels["button3"] = 'kamer 3, gevangenis';
    } else {
        button_titels["button1"] = 'kamer 1';
        button_titels["button2"] = 'kamer 2';
        button_titels["button3"] = 'kamer 3';
    }

    if (oppakken["camera"] == true) {
        level_onclick["button3"] = "einde_2()";
    } else {
        level_onclick["button3"] = "keuze_8()";
    }

    //buttons
    level_onclick["button1"] = "keuze_6()";
    level_onclick["button2"] = "keuze_7()";

    buttons(4, button_titels, level_onclick);
}

function keuze_6() { //kamer 1, eet/slaapkamer
    description.innerHTML = 'je zit in een soort slaap en eet ruimte waar vroeger waarschijnlijk soldaten hebben gewoond en nu bewoond is door de vrouw die je heeft ontvoerd. Je kan de kamer doorzoeken op nuttige spullen, maar waarschijnlijk is er niet veel te vinden.';

    inventoryItem.style.display = "block";
    inventoryItem.src = "images/oorlogskaart.jpg";
    game_container.style.backgroundImage = 'url("images/bunker_kamer.jpg")';

    //oppakken check
    inventoryItem.onclick = function(){
        oppakken["kaart"] = true;
        new_window_image(1);
        inventoryItem.style.width = "initial";
        inventoryItem.style.height = "initial";
        keuze_6();  
    };

    if (oppakken["kaart"] == true) {
        title.innerHTML = 'kamer 1, eet/slaapkamer';
    } else {
        title.innerHTML = 'kamer 1';
    }

    //buttons
    button_titels["button1"] = "terug naar de gang";
    level_onclick["button1"] = "keuze_5()";

    buttons(1, button_titels, level_onclick);
}

function keuze_7() { //kamer 2, gereedschapkamer
    description.innerHTML = 'je zit in een ruimte vol met gereedschap en een radio. Ook zie je dat er een trap is naar boven. Je probeert de radio, maar deze is kapot. Het meeste gereedschap is niet echt bruikbaar, maar misschien ligt er nog iets nuttigs bij. Je kan de kamer doorzoeken op nuttige spullen.';

    inventoryItem.src = "images/schaar_zonder_achtergrond_klein.png";
    inventoryItem.style.display = "block";
    game_container.style.backgroundImage = 'url("images/bunker_kamer_gereedschap.jpg")';
    
    //oppakken check
    if (oppakken["kaart"] == true) {
        title.innerHTML = 'kamer 2, gereedschapkamer';
        button_titels["button2"] = 'trap omhoog naar de machinekamer';
    } else {
        title.innerHTML = 'kamer 2';
        button_titels["button2"] = 'trap omhoog';
    }

    inventoryItem.onclick = function (){
        oppakken["knipschaar"] = true;
        keuze_7();
    };

    if (oppakken["knipschaar"] == true) {
        inventoryItem.style.display = "none";
    } else {
        inventoryItem.style.display = "block";
    }

    //buttons
    button_titels["button1"] = "terug naar de gang";
    level_onclick["button1"] = "keuze_5()";

    level_onclick["button2"] = "keuze_9()";

    buttons(5, button_titels, level_onclick);
}

function keuze_8() { //kamer 3, gevangenis (met camera uit)
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een gevangenis, er staan cellen aan beiden kanten van de kamer. Je loopt rond in de kamer als je een camera aan de muur ziet, hij staat uit. Snel ren je de gevangenis door naar het eind van de kamer. Je ziet een deur die je opent. Zie je een kamer met een bunker deur zoals bij een onderzeeër en een deur in de zijkant van de kamer';

    game_container.style.backgroundImage = 'url("images/gevangenis_met_cellen.jpg")';   
    
    //oppakken check
    if (oppakken["kaart"] == true) {
        title.innerHTML = 'kamer 3, gevangenis';
    } else {
        title.innerHTML = 'kamer 3';
    }

    //buttons
    button_titels["button1"] = "open de deur in de zijkant";
    level_onclick["button1"] = "einde_3()";

    button_titels["button2"] = "Open de bunker deur rechtdoor";
    level_onclick["button2"] = "Win_Einde_1()";

    buttons(5, button_titels, level_onclick);
}

function keuze_9() { //machinekamer (vanuit gereedschapkamer)
    title.innerHTML = 'machinekamer ingang';
    description.innerHTML = 'je komt in een grote ruimte met een aantal machines, in de machine kamer zijn 4 deuren: 1 links onderaan de trap en 1 links bovenaan de trap, 1 rechts en 1 in de muur met een bord uitgang erbij. Bovenaan de trap staat een elektriciteits kast.  ';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';   

    //buttons
    button_titels["button1"] = "Terug naar de gereedschapkamer";
    level_onclick["button1"] = "keuze_7()";

    button_titels["button2"] = "Naar links gaan";
    level_onclick["button2"] = "keuze_9_1()";

    button_titels["button3"] = "door de deur aan de rechterkant gaan";
    level_onclick["button3"] = "einde_3()";

    buttons(4, button_titels, level_onclick);
}

function keuze_9_1() { //machinekamer (links)
    title.innerHTML = 'machinekamer links';
    description.innerHTML = 'Er zijn 3 deuren links 2 op de begane grond, 1 daarvan heeft een bord met uitgang erbij. bovenaan de trap is ook een deur, waar ook een elektriciteits kast hangt.';

    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';   

    //buttons
    button_titels["button1"] = "Terug gaan naar de ingang";
    level_onclick["button1"] = "keuze_9()";

    button_titels["button2"] = "De trap omhoog";
    level_onclick["button2"] = "keuze_9_3()";

    button_titels["button3"] = "De deuren beneden gaan bekijken";
    level_onclick["button3"] = "keuze_9_2()";

    buttons(4, button_titels, level_onclick);
}

function keuze_9_2() { //machinekamer (links begane grond)
    title.innerHTML = 'machinekamer links begane grond';
    description.innerHTML = 'Er zijn 2 deuren, 1 rechtvoor je en 1 aan de zijkant met een bord met uitgang erbij.';

    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';   
    
    //oppakken check
    if (oppakken["camera"] == true) {
        level_onclick["button2"] = "einde_4()";
    } else {
        level_onclick["button2"] = "keuze_12()";
    }

    if (oppakken["sleutel"] == true) {
        level_onclick["button3"] = "Win_Einde_2()";
    } else {
        level_onclick["button3"] = "keuze_13()";
    }

    if (oppakken["kaart"] == true) {
        button_titels["button2"] = 'Door de deur naar de office';
    } else {
        button_titels["button2"] = 'Door de deur recht voor je';
    }

    //button 2 
    button2.style.display = "inline-block";

    //button 3
    button3.innerHTML = 'Door de deur met uitgang erbij';
    button3.style.display = "inline-block";

    //buttons
    button_titels["button1"] = "Terug gaan naar de ingang";
    level_onclick["button1"] = "keuze_9()";

    button_titels["button3"] = "Door de deur met uitgang erbij";

    buttons(4, button_titels, level_onclick);
}

function keuze_9_3() { //machinekamer (met knipschaar links trap omhoog)
    title.innerHTML = 'machinekamer links trap omhoog';

    game_container.style.backgroundImage = 'url("images/machine_kamer_bunker.jpg")';    
    
    //buttons
    button_titels["button1"] = "De trap omlaag";
    level_onclick["button1"] = "keuze_9_2()";

    button_titels["button3"] = "De deuren beneden gaan bekijken";
    level_onclick["button3"] = "keuze_12()";

    buttons(7, button_titels, level_onclick);

    //oppakken check
    if (oppakken["knipschaar"] == true) {
        description.innerHTML = 'Bovenaan de trap staat een elektriciteits kast, je kan deze niet openmaken. De draden die eruit lopen zou je misschien wel kunnen doorknippen met een knipschaar. Ook zou je de deur door kunnen gaan naast de elektriciteits kast. ';
        button2.style.display = "inline-block";
        button2.onclick = function() {
            oppakken["camera"] = false;
            alert("camera's zijn uitgeschakeld.");
        };
    } else {
        description.innerHTML = 'Bovenaan de trap staat een elektriciteits kast, je kan deze niet openmaken. De draden die eruit lopen zou je misschien wel kunnen doorknippen met een knipschaar, maar deze heb je helaas niet bij je. Ook zou je de deur door kunnen gaan naast de elektriciteits kast. ';
        button2.style.display = "none";
    }

    if (oppakken["kaart"] == true) {
        button_titels["button3"] = 'door de deur naar de locker room gaan';
    } else {
        button_titels["button3"] = 'door de deur naast de elektriciteits kast gaan';
    }

    //button 2 
    button2.innerHTML = 'draden doorknippen';

}

function keuze_11() { //office (met camera uit)
    title.innerHTML = 'office';
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een office, er staat een computer en een kastje. Je loopt rond in de kamer om te kijken of je iets bruikbaars ziet als je een camera aan de muur ziet hangen… gelukkig staat het lampje uit wat betekent dat hij niet aan staat. je ademt opgelucht uit. Je ziet niks beruikbaars in de kamer. ';
    
    game_container.style.backgroundImage = 'url("images/office_prison.jpg")';    

    //buttons
    button_titels["button1"] = "Terug naar de machinekamer";
    level_onclick["button1"] = "keuze_9_2()";

    buttons(1, button_titels, level_onclick);
}
 
function keuze_12() { //locker room
    title.innerHTML = 'locker room';

    //buttons
    button_titels["button1"] = "Terug naar de machinekamer";
    level_onclick["button1"] = "keuze_9_2()";

    buttons(1, button_titels, level_onclick);
    
    //oppakken check
    if (oppakken["code_kraken"] == true) {
        //sleutel kan opgepakt worden
        description.innerHTML = '';
        inventoryItem.style.display = "inline-block";
        inventoryItem.src = "images/sleutel.jpg";

        inventoryItem.onclick = function (){
            oppakken["sleutel"] = true;
            inventoryItem.style.display = "none";
        };
        game_container.style.backgroundImage = 'url("images/leeg_open_kluisje.jpg")'; 

        button2.style.display = "none";
    } else {
        //kluis is dicht en sleutel kan niet opgepakt worden. wel kan code kraken worden gedaan. 

        //moet nog code schrijven.
        inventoryItem.style.display = "none";
        game_container.style.backgroundImage = 'url("images/kleine_kleedkamer.jpg")'; 
        description.innerHTML = 'Je kijkt om het muurtje bij de ingang de kamer in en ziet dat het een lockerroom is. Langs de muren staan kluisjes. Je voelt aan een aantal kleusjes of deze open kunnen, maar deze zitten allemaal op slot. Net voordat je weg wilt gaan zie je een brief hangen met een gecodeerde code en loopt ernaartoe.';  
        
        button2.style.display = "inline-block";
    }

    //button 2 
    button2.innerHTML = 'code kraken';
    button2.onclick = function() {code_kraken()};

    //button 3
    button3.style.display = "none";
}

function keuze_13() { //de bunker kluis deur (zonder sleutel)
    title.innerHTML = 'de bunker kluis deur uitgang';
    description.innerHTML = 'Je komt in een lange gang en loopt naar het einde, daar ga je een kamer in aan de zijkant. Voor je staat een gigantische kluis deur. Je probeert de deur te openen, maar deze zit op slot. Je bedenkt dat de sleutel waarschijnlijk ergens in de bunker ligt.';

    game_container.style.backgroundImage = 'url("images/kluisdeur.jpg")';  
    
    //buttons
    button_titels["button1"] = "Terug naar de machinekamer";
    level_onclick["button1"] = "keuze_9_2()";

    buttons(1, button_titels, level_onclick);
}

//de slechte eindes 

function einde_1() {
    title.innerHTML = 'naar boven klimmen door het dakrooster';
    description.innerHTML = 'Terwijl je probeert door het dak te klimmen lukt het om de eerste paar meters omhoog te komen door je armen en benen tegen de muren aan te zetten. Je ziet dat zodra je halverwege bent dat je al erg hoog zit doordat je achterom kijkt verlies je het grip van je arm en val je met je hoofd naarbeneden tegen de grond. De klap is hard genoeg om je te doden en je ziet dat het wit word voor je ogen.';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/game_over.png")';

    //buttons
    button_titels["button1"] = "start";
    level_onclick["button1"] = "begin_verhaal()";

    buttons(1, button_titels, level_onclick);
}

function einde_2() {
    title.innerHTML = 'gevangenis camera';
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een gevangenis, er staan cellen aan beiden kanten van de kamer. Je loopt rond in de kamer als je een raar geluid hoort… Je kijkt naar de plek waar het geluid vandaan komt en ziet dat een camera je aan het volgen is. Snel ren je de gevangenis door naar het eind van de kamer. Je ziet een deur die je opent. Aan de andere kant zie je de vrouw staan die je ontvoerd heeft met een masker op en een geweer in haar handen. Voordat je kan vluchten schiet de vrouw je dood….';
    game_container.style.color = "black";
    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/camera.png")';

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/game_over.png")';
        game_container.style.color = "white";
    }, 1500);

    //buton 1
    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer); 
        begin_verhaal();        
    };

    //buton 2
    button2.style.display = "none"; 
    //buton 3
    button3.style.display = "none"; 
}

function einde_3() {
    title.innerHTML = 'ontvoerder';
    description.innerHTML = 'Je opent de deur naar de kamer en kijkt om je heen. De kamer ziet eruit als een recreatiekamer en op de bank zit de vrouw die je ontvoerde met een masker op tv te kijken. Ze kijkt je aan en richt een geweer op jou. Voordat je kan vluchten schiet de vrouw je dood….';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/ontvoerder.png")';

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/game_over.png")';
    }, 1500);

    //buton 1
    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };
    
    //buton 2
    button2.style.display = "none"; 
    //buton 3
    button3.style.display = "none"; 
}

function einde_4() {
    title.innerHTML = 'ontvoerder';
    description.innerHTML = 'Je gaat de kamer in en kijkt om je heen. De kamer ziet eruit als een office, er staat een computer en een kastje. Je loopt rond in de kamer om te kijken of je iets bruikbaars ziet als je een camera aan de muur ziet hangen met het lampje aan… Je opent de deur van de kamer om weg te gaan en aan de andere kant zie je de vrouw staan die je ontvoerd heeft met een masker op en een geweer in haar handen. Voordat je kan vluchten schiet de vrouw je dood….';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/ontvoerder.png")';

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/game_over.png")';
    }, 1500);

    //buton 1
    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };

    //buton 2
    button2.style.display = "none"; 
    //buton 3
    button3.style.display = "none"; 
}

//de goede eindes 

function Win_Einde_1() {
    title.innerHTML = 'win einde 1, onsnapt';
    description.innerHTML = 'Je opent de deur en ziet dat deze uitkomt in een kleine kamer met een andere deur. Je loopt rechtdoor en opent de volgende deur. Deze komt buiten uit in een bos. Je rent snel door het bos weg en vind na stuk rennen een tankstation waar je om hulp vraagt. Zij bellen de politie en de politie brengt je thuis. De vrouw die je had ontvoerd werd een paar dagen later opgepakt door de politie.';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/metaaldeur_bunker.jpg")';

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/verscholen_bunker.jpg")';
    }, 2000);

    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };

    button2.style.display = "none"; 
    button3.style.display = "none"; 
}

function Win_Einde_2() {
    title.innerHTML = 'win einde 2, onsnapt';
    description.innerHTML = 'Je komt in een lange gang en loopt naar het einde, daar ga je een kamer in aan de zijkant. Voor je staat een gigantische kluis deur je opent de deur met de sleutel en ziet dat deze uitkomt in in een bos. Je rent snel door het bos weg en vind na een stuk rennen een tankstation waar je om hulp vraagt. Zij bellen de politie en de politie brengt je thuis. De vrouw die je had ontvoerd werd een paar dagen later opgepakt door de politie.';

    inventoryItem.style.display = "none";
    game_container.style.backgroundImage = 'url("images/kluisdeur.jpg")';

    //time out
    var timer = setTimeout(function(){  
        game_container.style.backgroundImage = 'url("images/bunker_ingang.jpg")';
    }, 2000);

    button1.innerHTML = 'start';
    button1.onclick = function() {
        clearTimeout(timer);
        begin_verhaal();
    };

    button2.style.display = "none"; 
    button3.style.display = "none"; 
}

//minigames, code kraken en andere functies

function code_kraken() {
    title.innerHTML = 'code_kraken';
    description.innerHTML = 'kraak de code en druk daarna op de knop code invoeren, voer de code daarna in. Als de img niet goed te lezen is dan kan je er op klikken voor een betere afbeelding.';

    inventoryItem.style.display = "block";
    inventoryItem.src = "images/crack_the_code2.png";
    inventoryItem.style.width= 100+"px";
    inventoryItem.style.height= 100+"px";

    inventoryItem.onclick = function (){
        new_window_image(0);
    };

    game_container.style.backgroundImage = 'url("images/crack_the_code.png")';

    //button 1
    button1.innerHTML = 'stoppen met code kraken';
    button1.onclick = function() {
        keuze_12();
        inventoryItem.style.width = "initial";
        inventoryItem.style.height = "initial";
    };
    
    //button 2
    button2.innerHTML = 'code invoeren';
    button2.onclick = function() {
        var ans = prompt("voer hier de code in...", "000");

        if(ans == "042") {
            oppakken["code_kraken"] = true;
            alert("code is goed, stop met code kraken.");
        } else {
            alert("code is fout");
        }

    };

    //button 3
    button3.style.display = "none"; 
}

function new_window_image(img) {
    if (img == 0) {
        var largeImage = document.getElementById('inventoryItem');
        
    } else if(img == 1){
        var url_before = inventoryItem.getAttribute('src');
        inventoryItem.src = "images/plattegrond.png";
        var largeImage = document.getElementById('inventoryItem');
    }

    largeImage.style.display = 'block';
    largeImage.style.width= 100+"px";
    largeImage.style.height= 100+"px";
    var url=largeImage.getAttribute('src');
    window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');

    inventoryItem.src = url_before;
}

function buttons(button, button_titels, level_onclick) {
    //4 = alle buttons
    //5 = 1 en 2
    //6 = 2 en 3
    //7 = 1 en 3
    if (button == 1 || button == 4 || button == 5 || button == 7) {
        button1.innerHTML = button_titels["button1"];
        button1.setAttribute("onclick", level_onclick["button1"]);
        // button1.onclick = function() {level_onclick["button1"];};
        button1.style.display = "inline-block";

    }
    if (button == 2 || button == 4 || button == 5 || button == 6) {
        button2.innerHTML = button_titels["button2"];
        button2.setAttribute("onclick", level_onclick["button2"]);
        // button2.onclick = function() {level_onclick["button2"];};
        button2.style.display = "inline-block";

    }
    if (button == 3 || button == 4 || button == 6 || button == 7) {
        button3.innerHTML = button_titels["button3"];
        button3.setAttribute("onclick", level_onclick["button3"]);
        // button3.onclick = function() {level_onclick["button3"]};
        button3.style.display = "inline-block";
    } 

    display_none(button);
}

function display_none(button) {
    if (button == 2 || button == 3 || button == 6) {
        button1.style.display = "none";

    }
    if (button == 1 || button == 3 || button == 7) {
        button2.style.display = "none";

    } 
    if (button == 1 || button == 2 || button == 5) {
        button3.style.display = "none";
    } 
}