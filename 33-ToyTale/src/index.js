let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollectionDiv = document.querySelector("div#toy-collection")
  const toyForm = document.querySelector("form.add-toy-form")

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  //getting all the toys from server
  fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(toys => displayToys(toys))

  // array iteration
  function displayToys(toys){
    toys.forEach(toy => appendToy(toy))
  }

  // single toy on DOM
  function appendToy(toy){
    // console.log(toy)

  //   <div class="card">
  //     <h2>Woody</h2>
  //     <img src=toy_image_url class="toy-avatar" />
  //     <p>4 Likes </p>
  //     <button class="like-btn">Like <3</button>
  // </div>

  const div = document.createElement('div')
  div.className = "card"

  const h2 = document.createElement('h2')
  h2.innerText = toy.name

  const img = document.createElement('img')
  img.src = toy.image
  img.className = "toy-avatar"

  const p = document.createElement('p')
  p.innerText = toy.likes + " Likes" // 4 Likes

  const btn = document.createElement('button')
  btn.className = "like-btn"
  btn.innerText = "Like <3"

  btn.addEventListener("click", () => {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        // likes: ++toy.likes // toy.likes = toy.likes + 1  toy.likes+= 1
        likes: toy.likes + 1  // toy.likes++ 
      })
    })
    .then(res => res.json())
    .then(updatedToy => {
      toy = updatedToy // assign updated value to current toy
      p.innerText = updatedToy.likes + " Likes"
    })
  })

  div.append(h2, img, p, btn)

  // console.log(div.append(p))
  // console.log(div.appendChild(p))
  
  toyCollectionDiv.append(div)
  }

  toyForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // debugger
    let name = e.target[0].value
    let image = e.target[1].value

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0
        // name, image, likes: 0
      })
    })
    .then(res => res.json())
    .then(newToy => {
      // add a new toy on DOM
      appendToy(newToy)

      // clear form
      toyForm.reset()

      //close the form
      addToy = !addToy;
      addToy ? toyFormContainer.style.display = "block" : toyFormContainer.style.display = "none"
      // condition ? true : false
    })


  })

});
