const ul = document.querySelector("ul#quote-list")
const form = document.querySelector("form#new-quote-form")

fetch("http://localhost:3000/quotes?_embed=likes")
.then(res => res.json())
.then(quotes => allQuotes(quotes))
// .then(function(quotes){
//     allQuotes(quotes)
// })

// () => {}

function allQuotes(quotes){
    quotes.forEach(quote => addQuote(quote))
}

function addQuote(quote){
    // console.log(quote)

    /* <li class='quote-card'>
        <blockquote class="blockquote">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous</footer>
            <br>
            <button class='btn-success'>Likes: <span>0</span></button>
            <button class='btn-danger'>Delete</button>
        </blockquote>
    </li> */

    const li = document.createElement("li")
    li.className = "quote-card"

    const bq = document.createElement("blockquote")
    bq.className = "blockquote"

    const p = document.createElement("p")
    p.className = "mb-0"
    p.innerText = quote.quote

    const footer = document.createElement("footer")
    footer.className = "blockquote-footer"
    footer.innerText = quote.author

    const br = document.createElement("br")

    const likeBtn = document.createElement("button")
    likeBtn.className = "btn-success"
    likeBtn.innerText = "Likes: "

    const span = document.createElement("span")
    span.innerText = quote.likes.length

    likeBtn.append(span)

    likeBtn.addEventListener("click", () => {

        fetch("http://localhost:3000/likes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                quoteId: quote.id
            })
        })
        .then(res => res.json())
        .then(newLike => {
            quote.likes.push(newLike)
            span.innerText = quote.likes.length
        })
    })

    const delBtn = document.createElement("button")
    delBtn.className = "btn-danger"
    delBtn.innerText = "Delete"

    delBtn.addEventListener("click", () => {

        fetch(`http://localhost:3000/quotes/${quote.id}`, {
            method: "DELETE"
        })
        .then(() => li.remove())
    })

    bq.append(p, footer, br, likeBtn, delBtn)

    li.append(bq)

    ul.append(li)

}


// 1. select a form and attach an eventListener to it
// 2. Get user inputs
// 3. Make a fetch request - POST
// 4. Update DOM


form.addEventListener("submit", (e) => {
    e.preventDefault()

    // debugger
    let quote = e.target[0].value
    let author = e.target[1].value

    fetch("http://localhost:3000/quotes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            quote: quote,
            author: author
        })
    })
    .then(res => res.json())
    .then(newQuote => {
        newQuote.likes = []
        addQuote(newQuote)

        form.reset()
    })

})