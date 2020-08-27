let url = "http://localhost:3000/books/" // "/books/book.id"

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

  const btn = document.createElement("button")
  if(book.read){
    btn.innerText = "Mark Unread"
  }
  else{
    btn.innerText = "Mark Read"
  }

  // read/unread a book => patch
  btn.addEventListener("click", () => {
    //url+book.id
    //`http://localhost:3000/books/${book.id}`
    // url + `${book.id}`
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        read: !book.read
      })
    }

    fetch(url+book.id, configObj)
    .then(res => res.json())
    .then(updatedBook => {
      // if(updatedBook.read){
      //   btn.innerText = "Mark Unread"
      // }
      // else{
      //   btn.innerText = "Mark Read"
      // }
      updatedBook.read ? btn.innerText = "Mark Unread" : btn.innerText = "Mark Read"
      // condition ? true : false
    })


  })

  // Delete Btn

  const delBtn = document.createElement("button")
  delBtn.innerText = "Delete"

  delBtn.addEventListener("click", () => {
    deleteBook(book, div)
    // fetch(url+book.id, {
    //   method: "DELETE"
    // })
    // // .then(res => res.json())
    // .then(() => div.remove())
  })

  div.append(img, h3, p, btn, delBtn)

  const book_div = document.querySelector("div#book-list") 

  book_div.append(div)
}

function deleteBook(book, div){
  fetch(url+book.id, {
    method: "DELETE"
  })
  // .then(res => res.json())
  .then(() => div.remove())
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

// create a book
// 1. select form and attach an eventListener
// 2. Post request with user inputs
// 3. Manupilate the DOM


let form = document.querySelector("form#new-book")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  // event.preventDefault()

  // debugger
  let title = e.target[0].value
  // let title = document.querySelector("input#book-title").value
  let author = e.target[1].value
  let cover = e.target[2].value

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Accept": "application/json"
    },
    body: JSON.stringify({
      title: title,
      author: author,
      img: cover,
      read: false
    })
  }

  fetch(url, configObj)
  .then(res => res.json())
  .then(newBook => {
    addBook(newBook)
    // event.target.reset() => not going to work
    form.reset() //pessimistic rendering
    // e.target.reset()
  })

  // form.reset() //optimistic rendering 


})