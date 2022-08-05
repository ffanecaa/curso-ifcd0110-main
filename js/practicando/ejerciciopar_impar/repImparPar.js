let num = parseInt(
  prompt(`introduce un numero para comprobar si es par o impar`)
);

for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    document.getElementById("ele").innerHTML += `<br>el numero${i} es par`;
     console.log(`${i} - es par`);
  } else {
    document.getElementById("ele").innerHTML += `<br>el numero${i} es impar`;
    console.log(`${i} - es impar`);
  }
}
