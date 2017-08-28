
var map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];

var  map2=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map3=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map4= ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];

var map5= ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                     ",
    "         *                             *                     I W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;


var map6=[  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];
var jueguito=document.getElementById('juego');
var x;
var y;
var yinicial;
var xinicial;
var yfinal;
var xfinal;
var xtransport=[];
var ytransport=[];

var mapas = [map1, map2, map3, map4, map5, map6];
var actual=mapas.length-1;
var mapa = mapas[actual];
var level=1;
var map = [];
var isrunning=false;

function iniciar(){
  map=[];
  for (var i = 0; i < mapa.length; i++){
    map[i]=[];
    for (var j = 0; j < mapa[0].length; j++) {
      map[i][j]=mapa[i][j];
      if(map[i][j]=='o'){
          xinicial=j;
          yinicial=i;
      }
    }
  }
}

function generarMapa(map, direccion) {
  xtransport=[];
  ytransport=[];
  yfinal=map.length-1;
  xfinal=map[0].length-1;
  jueguito.innerHTML='';
  var texto=document.createElement('div');
  texto.innerHTML='Nivel '+level;
  texto.setAttribute('class','ganador');
  var tabla = document.createElement('table');
  tabla.setAttribute('cellspacing','0');
  for (var i = 0; i < map.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < map[i].length; j++) {
        var celda = document.createElement('td');
        if(map[i][j]=='*'){
          celda.setAttribute('class','pared');
        } else if(map[i][j]=='o'){
          x=j;
          y=i;
          celda.setAttribute('class','nave');
          celda.setAttribute('id',direccion);
        } else if
         (map[i][j]=='W') {
          celda.setAttribute('class', 'llegada');
        } else if (map[i][j]=='I'){
         celda.setAttribute('class','transporte');
          xtransport.push(j);
          ytransport.push(i);
        }
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  jueguito.appendChild(texto);
  jueguito.appendChild(tabla);
}

function subirNivel() {
  isrunning=false;
  jueguito.className='';
  if(actual<0){
    ganar();
    actual=mapas.length-1;
    mapa=mapas[actual];
  } else {
    level++;
    mapa=mapas[actual];
    iniciar();
    generarMapa(map, 'empezar');
  }
}

function reiniciar() {
  map[y][x]=' ';
  map[yinicial][xinicial]='o';
  isrunning=false;
  generarMapa(map, 'empezar');
}

function ganar() {
    isrunning=true;
    jueguito.innerHTML='';
    level=1;
    var div=document.createElement('div');
    div.setAttribute('class', 'ganador');
    var imagen = document.createElement('img');
    imagen.setAttribute('src','assets/img/cohete.gif');
    var p=document.createElement('p');
    var texto= document.createTextNode('Ganaste!');
    p.appendChild(texto);
    div.appendChild(imagen);
    div.appendChild(p);
    jueguito.appendChild(div);
}
var t;
var d;
function move(a, b, direccion)
{ 
  isrunning=true;
  if(map[y+a][x+b]=="*"){
      clearTimeout(t);
      isrunning=false;
      return;
  }
  if(map[y+a][x+b]=="W"){
      clearTimeout(t);
      jueguito.className='rotar';
      actual--;
      d = setTimeout(subirNivel, 1500);
      return;
  }
  if( y+a==0 || x+b==0 || y+a==yfinal || x+b==xfinal){
      reiniciar();
      clearTimeout(t);
      return;
  }
  if(map[y+a][x+b]==' '){
    map[y][x]=' ';
    map[y+a][x+b]='o';
  }
  if(map[y+a][x+b]=='I'){
    map[y][x]=' ';
    if(y+a==ytransport[0]){
      y=ytransport[1];
      x=xtransport[1];
    } else {
      y=ytransport[0];
      x=xtransport[0];
    }
    map[y+a][x+b]='o';
  }
  generarMapa(map, direccion);

  t = setTimeout(function(){ move(a, b, direccion) }, 50);
}

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", movimiento);

function movimiento(evento)
{
  if(isrunning==false){
    switch(evento.keyCode)
    {
      case teclas.UP:
        move(-1, 0, 'up');
      break;
      case teclas.DOWN:
        move(1, 0, 'down');
      break;
      case teclas.LEFT:
        move(0, -1, 'left');
      break;
      case teclas.RIGHT:
        move(0, 1, 'right');
      break;
    }
  }
}


