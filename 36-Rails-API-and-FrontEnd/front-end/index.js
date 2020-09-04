console.log("Front-end js")


fetch("http://localhost:3000/api/v1/instructors")
.then(res => res.json())
.then(console.log)

fetch("http://localhost:3000/api/v1/instructors", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: "Raul S."
    })
})
.then(res => res.json())
.then(console.log)