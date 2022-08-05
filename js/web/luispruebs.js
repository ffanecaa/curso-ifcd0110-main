let i = 0;
let texto= 'hola mundo';
function escribe(texto) {
    document.getElementById("ele").innerHTML = texto
  i++;
  if (i >100) {
    return;
  }

  setTimeout(function () {
    escribe(texto + "  " + i);
  },100);
}
