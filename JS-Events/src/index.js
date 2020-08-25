// document.addEventListener("DOMContentLoaded", function(){

// })

let btn = document.querySelector("button#button1")
// console.log(btn)
// btn.addEventListener("click", print)

// function print(){
//     console.log("08-25-2020")
// }

btn.addEventListener("click", function(){
    console.log("08-25-2020")

    console.log(event.target)
})

let form = document.querySelector("form#comment-form")
let commentDiv = document.querySelector("div#comments-container")

let ul = document.createElement("ul")
commentDiv.append(ul)

form.addEventListener("submit", function(e){
    // debugger
    // event.preventDefault() // to stop reloading
    e.preventDefault()

    // debugger
    let li = document.createElement("li")
    li.innerText = document.querySelector("input#new-comment").value
    // pTag.innerText = e.target[0].value

    ul.append(li)

    e.target.reset() //clear the form

    console.log("form submitted!!!")

})

let btnDiv = document.querySelector("div#helicopter-parent")

btnDiv.addEventListener("click", function(){
    // console.log("Inside Div is clicked")

    // debugger

    // if(event.target.dataset.name === "log"){
    //     console.log("Something!!!!")
    // }

    switch(event.target.dataset.name){
        case "log":
            console.log("Something!!")
            break
        case "alert":
            alert("THIS IS THE DAY!!!")
            break
        case "error":
            console.error("This is an error!!!")
            break
        default:
            console.log("You haven't clicked on any of the buttons!!!")
    }
    
})

// function(){}
// () => {}

// function sum(a,b) { }

// let sum = (a,b) => { }
