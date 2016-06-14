//Funcion que envia a la ventana de chat el mensaje del usuario//
function add() {
   var li = document.createElement('li');
   li.className = 'row';
   var msn = document.getElementById('intro').value;
   li.innerHTML ='<div class= "r-chat">'+ msn + '<span>'+moment().format("HH:mm")+'</span>'+'</div';
   document.getElementById('mensajitos').appendChild(li);
}
//Limpiar el imput #intro cuando se envia el mensaje//
$('#send').click(function(){
   var texto = $('#intro').val();
   $('#intro').val('');
});
//Enviar mensaje cuando se presiona la tecla ENTER (#13)
$('#intro').keypress(function(e){
   if (e.which == 13) {   // 13 es el codigo de la tecla ENTER
   var texto = $('#intro').val();
   console.log(texto);
   add (texto);
   $('#intro').val('');
   }
}); 

//Buscar contactos //
function search(){
   var table = document.getElementById('datos');
   var searchText = document.getElementById('search').value.toLowerCase();
   var cells="";
   var found=false;
   var compareWith="";
// Recorremos todas las filas con contenido de la tabla
   for (var i = 1; i < table.rows.length; i++){
      cells = table.rows[i].getElementsByTagName('td');
      found = false;
// Recorremos todas las celdas
   for (var j = 0; j < cells.length && !found; j++){
   compareWith = cells[j].innerHTML.toLowerCase();
// Buscamos el texto en el contenido de la celda
   if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)){
      found = true;
      }
   }
   if(found){
      table.rows[i].style.display = '';
   } else {
// si no ha encontrado ninguna coincidencia, esconde la fila de la tabla
      table.rows[i].style.display = 'none';
      }
   }
}

//Limpiar ventana de chat//
$(".contacts-chat").click(function(){
      $(".chat").empty();
    });



