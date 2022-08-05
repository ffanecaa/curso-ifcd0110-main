class Libro {
  constructor(titulo, autor, ano, genero) {
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
    this.genero = genero
  }
  consigueAutor(){
    return this.autor
  }
  informacion() {
    return `el libro se titula ${this.titulo} de ${this.autor} del
     ano ${this.ano} y pertenece al genero ${this.genero}`
  }
}

let books = []

while (books.length <3) {
  let titulo = prompt('introduce el titulo de un libro')
  let autor = prompt("introduce el autor del libro")
  let ano = prompt("introduce el  año del titulo de un libro")
  let genero = prompt("introduce genero de un libro")
  .toLowerCase()


  if (titulo != "" &&
    autor != "" &&
    !isNaN(ano) &&
    ano.length == 4 &&
    (genero == "aventura" || genero == "terror" || genero == "fantasia")) {
    
      books.push(new Libro(titulo, autor, genero, ano))
  }
}
const muestraBooks = () => {
  console.log(books);
}
//muestraBooks()


const losAutores = () => {
  let autors= []
 for (const libro of books){
  autors.push(Libro.consigueAutor());
 }
 console.log(autors.consigueAutor.sort());
}
//losAutores()


const elGeneroo
