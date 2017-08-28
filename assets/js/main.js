var principal = document.getElementsByClassName("principal")[0];
var juego = document.getElementsByClassName("juego")[0];
var jueguito=document.getElementById('juego');


$(".h2-play").click(function() {
    $('.juego').empty();
    $('.principal').empty();
    $('.principal').attr('class','nuevito');
    agregar();
})
function agregar() {
    $('.nuevito').empty();
    principal.style.height='600px';
    jueguito.style.display='none';
    $("<div>", {
        'id': 'divGrande'
        }).append ($("<div>", {
            'id': 'divdeTexto',
            'text': 'Road Blocks'
        })).append( $("<div>", {
            'id': 'divdeButton'
            }).append($("<button>", {
                'class': 'button',
                'onclick':'startGame()',
                'text': '★ Start Game'
            })).append($("<button>", {
                'class': 'button',
                'onclick':'instructions()',
                'text': '★ Instructions'
            })).append($("<button>", {
                'class': 'button',
                'onclick':'credits()',
                'text': '★ Credits'
                }))
        ).appendTo('.nuevito');
}
function startGame() {
    level=1;
    s=mapas.length-1;
    mapa=mapas[s];
    var B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML = "Menu";
    B4.setAttribute("class","button");
    jueguito.style.display='block';
    var nuevito = document.getElementsByClassName("nuevito")[0];
        while (nuevito.firstChild) {
      nuevito.removeChild(nuevito.firstChild);
    }
    nuevito.appendChild(B4);
    nuevito.style.height='50px';

    iniciar();
    generarMapa(map);
    isrunning=false;
}
function instructions() {
    var B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML = "Menu";
    B4.setAttribute("class","button");
    var divdeParrafo = document.createElement("div");
    divdeParrafo.style.fontFamily = 'Orbitron';
    divdeParrafo.setAttribute("class","divdeParrafo");
    divdeParrafo.innerHTML = "<h1> INSTRUCTIONS<span> &#160; </span> </h1>";
    divdeParrafo.innerHTML += "<h4> Ayuda a la nave a aterrizar en un planeta, evita chocar y ayudate de los agujeros negros</h4>";
    divdeParrafo.innerHTML += "<h4> Tienes que usar los botones del teclado para poder jugar. En total hay seis niveles uno mas complicado que el otro... Te deseo mucha suerte! </h4>";
       var nuevito = document.getElementsByClassName("nuevito")[0];
     while (nuevito.firstChild) {
      nuevito.removeChild(nuevito.firstChild);
    }
    nuevito.appendChild(B4);
    nuevito.appendChild(divdeParrafo)
}
function credits() {
    var B4 = document.createElement("button");
    B4.setAttribute("id","B4");
    B4.setAttribute("onclick", "agregar()");
    B4.innerHTML += "Menu";
    B4.setAttribute("class","button");
    var divdeCredits = document.createElement("section");
    divdeCredits.style.fontFamily = 'Orbitron';
    divdeCredits.setAttribute("class","star-wars");
    var divdV = document.createElement("div");
    divdV.setAttribute("class","crawl");
    var divtitle = document.createElement("div");
    divtitle.setAttribute("class","title");
    var h1 = document.createElement("h1");
    var textoh1 = document.createTextNode("CREDITS");
    h1.appendChild(textoh1);
    divtitle.appendChild(h1);
    var p = document.createElement("p");
    p.innerHTML='Melanie Laura Ocharan Cardenas<br>Diana Quispe Ccallo'
    divdV.appendChild(divtitle);
    divdV.appendChild(p);
    divdeCredits.appendChild(divdV);
    var nuevito = document.getElementsByClassName("nuevito")[0];
        while (nuevito.firstChild) {
      nuevito.removeChild(nuevito.firstChild);
    }
         nuevito.appendChild(divdeCredits);
        nuevito.appendChild(B4);
}
