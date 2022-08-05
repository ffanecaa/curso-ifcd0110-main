let nTurno;
nTurno = 0;
function sumar(n1) {
  console.log("aqui");
  if (n1 == 1) {
    nTurno++;
  }
  if (n1 == -1) {
    nTurno--;
  }

  document.getElementById("ele").innerHTML = `contador: ${nTurno}`;
}

// se vincula onclick poniendo la funcion sumar +1 -1

//for(var i = 0; i < list.length; i++)
//{
//sumar += parseInt((list[i].id));

//}

//for ( let i=0;i<=10; i++)
//document.getElementById("suma").innerHTML = (`suma ${num+1} un turno`);let resultado = n1 + n2;
