$(".h2-play").click(function() {
    $('.juego').empty();
    $('.principal').empty();
    $('#juego').hide();
    $('.principal').attr('class','nuevito');
    agregar();
})
function agregar() {
    $('.nuevito').empty().height(600);
    $('#juego').hide();
    $("<div>", {
        'id': 'divGrande'
        }).append ($("<div>", {
            'id': 'divdeTexto'
        }).html('Road Blocks')
          ).append( $("<div>", {
            'id': 'divdeButton'
          }).append($("<button>").html('★ Start Game').addClass('button').on('click', startGame)
            ).append($("<button>").html('★ Instructions').addClass('button').on('click', instructions)
            ).append($("<button>").html('★ Credits').addClass('button').on('click', credits))
        ).appendTo('.nuevito');
}

function startGame() {
    level=1;
    actual=mapas.length-1;
    mapa=mapas[actual];
    $('.nuevito').empty().height(50).append(
        $('<button>').attr('id','B4').html('Menu').addClass('button').on('click', agregar)
    );
    $('#juego').show();
    isrunning=false;
    iniciar();
    generarMapa(map);
}
function instructions() {
    $('.nuevito').empty().append(
      $('<button>').attr('id','B4').html('Menu').addClass('button').on('click', agregar)
    ).append(
      $('<div>').addClass('divdeParrafo').append('<h1> INSTRUCTIONS<span> &#160; </span> </h1>'
      ).append("<h4> Ayuda a la nave a aterrizar en un planeta, evita chocar y ayudate de los agujeros negros</h4>"
      ).append("<h4> Tienes que usar los botones del teclado para poder jugar. En total hay seis niveles uno mas complicado que el otro... Te deseo mucha suerte! </h4>"
    ));

}
function credits() {
  $('.nuevito').empty().append(
    $('<button>').attr('id','B4').html('Menu').addClass('button').on('click', agregar)
  ).append(
    $('<div>').addClass("star-wars").append(
      $('<div>').addClass("crawl").append(
        $('<h1>').addClass("title").html("CREDITS")
      ).append(
        $('<p>').html('Melanie Laura Ocharan Cardenas<br>Diana Quispe Ccallo')
    )));
}

function ganar() {
    isrunning=true;
    $('#juego').empty().append(
      $('<div>').addClass('ganador').append(
        $('<img>').attr('src','assets/img/cohete.gif')
      ).append($('<p>').html('Ganaste!'))
    )
    level=1;
}
