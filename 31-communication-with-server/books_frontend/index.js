// console.log(books)

function addBook(book){
{/* <div class = 'card'>
  <img src = 'https://images-na.ssl-images-amazon.com/images/I/31AYTZWPCPL._SX309_BO1,204,203,200_.jpg'/>
  <h3>Soul Kiss</h3>
  <p>Shay Youngblood</p>
</div> */}
  
  const div = document.createElement("div")
  div.className = "card"

  const img = document.createElement("img")
  img.src = book.img

  const h3 = document.createElement("h3")
  h3.innerText = book.title

  const p = document.createElement("p")
  p.innerText = book.author

  div.append(img, h3, p)

  const book_div = document.querySelector("div#book-list") 

  book_div.append(div)
}

function showBooks(books){
  books.forEach(function(book){
    addBook(book)
  })
}

// showBooks(books)

// console.log(fetch("http://localhost:3000/books"))

// function abc(ar1, ar2){} 

// let abc = (ar1,ar2) => { }

fetch("http://localhost:3000/books")
// .then(function(res){
//   return res.json()
// })
// .then((res) => {  return res.json()})
.then(res => res.json())
// .then(console.log)
// .then(function(books){
//   showBooks(books)
// })
.then(books => showBooks(books))



async function getbooks(){

  let res = await fetch("http://localhost:3000/books")
  let books = await res.json()

  // console.log(books)
  showBooks(books)

}

getbooks()

// .then(function(){
//   console.log("Line 40")
// }
//   )


// console.log("Line 45")


