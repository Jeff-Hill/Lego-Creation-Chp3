const legoCreation = {
    id: 1,
    creator: "Per Sun",
    color: "Black",
    shape: "Animal",
    creation: "Black Cow"
}

// Some starter code
document.querySelector(".lego_save").addEventListener("click", event => {
    console.log("button clicked")
    const creator = document.querySelector("#lego_creator").value
    console.log(creator)
    const color = document.querySelector("#lego_color").value
    const shape = document.querySelector("#lego_shape").value
    const creation = document.querySelector("#lego_creation").value

    // Once you have collected all the values, build your data structure
    const legoToSave =  {
        creator: creator,
        color: color,
        shape: shape,
        creation: creation
    }

    fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})

})
