class Image{

    constructor(caption, url){
        this.caption = caption,
        this.url = url

        // console.log(this)
    }

    render(){
        let p = document.createElement('p')
        p.innerText = this.caption

        let image = document.createElement('img')
        image.src = this.url

        // document.body.append(p,image)
        let div = document.createElement('div')
        div.append(image, p)

        return div
    }

    static sayHi(){
        console.log("I am a class method")
    }

}

let imgForm = document.querySelector("form.new-form")

imgForm.addEventListener("submit", () => {
    event.preventDefault()

    let caption = event.target[0].value
    let url = event.target[1].value

    let img = new Image(caption, url)

    // let imgDiv = img.render()

    // document.body.append(imgDiv)
    document.body.append(img.render())

})


class Person{
    // constructor(name,age){
    //     this.name = name
    // this.age = age
    // }

    // constructor({name: personName, age: num}){
    //     this.name = personName
    //     this.age = num
    // }

    constructor(name){
        this.name = name
    }
}

class Student extends Person{

    constructor(name, major){
        super(name)
        this.major = major
    }

    render(){
        let p = document.createElement("p")
        p.innerText = this.name + ": I am a Student!!"

        return p
    }
}

class Teacher extends Person{

    render(){
        let p = document.createElement("p")
        p.innerText = this.name + ": I am a Teacher!!"

        return p
    }
    
}

let taskForm = document.querySelector("form.task-form")

taskForm.addEventListener("submit", () => {
    event.preventDefault()

    // debugger
    let name = event.target[0].value

    let p

    switch(event.target[1].value){
        case "Student":
            let s = new Student(name)
            p = s.render()
            break
        case "Teacher":
            let t = new Teacher(name)
            p = t.render()
            break
        default:
            console.log("not a valid selection")
    }

    document.body.append(p)
})






















// debugger