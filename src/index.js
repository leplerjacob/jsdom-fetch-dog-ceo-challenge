// Base URL
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', () => {
    addImgElement();
    addBreeds();
})

// Another function

// Upon page load fetch images from api
const addImgElement = () => {
    // Grab image container html
    const imgContainer = document.querySelector('#dog-image-container');
    
    // Creates ul element
    let ul = document.createElement('ul');
    ul.className = "img-list"
    ul.style.listStyleType = "none";
    imgContainer.appendChild(ul)
    
    // fetch images from api
    fetch(imgUrl)
        .then(res => res.json())
        .then(imgData => imgData.message.forEach((img) => {
        // create li element and add images
        let li = document.createElement('li');
        let imgEl = document.createElement('img')
        imgEl.src = img
        imgEl.style.width = "400px"
        li.append(imgEl)
        ul.appendChild(li)
    }))
}

// fetchs api for breeds and adds breed to ul
const addBreeds = () => { 

    // grab dog breed ul
    const breedContainer = document.getElementById("dog-breeds")

    // fetches breed from api and appends created li to ul
    fetch(breedUrl)
    .then(res => res.json())
    .then(breedData => {
        for (breed in breedData.message) {
            let li = document.createElement('li');
        li.innerText = breed
        // console.log(li)
        breedContainer.appendChild(li)
        debugger 
        }
    })

    
    // using Object.keys
    // .then(breedData => console.log(Object.keys(breedData.message).forEach(breed))
    // )
}

