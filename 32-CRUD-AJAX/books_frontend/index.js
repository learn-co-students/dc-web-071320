
// Append single book on DOM
function addBook(book){
  
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

// Iterating over an array
function showBooks(books){
  books.forEach(book => {
    addBook(book)
  })
}

// fetching books
function getBooks(){
  fetch(url)
  .then(res => res.json())
  .then(books => showBooks(books))
}

getBooks()