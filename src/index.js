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
    ul.style.display = "grid"
    ul.style.gridTemplateColumns = "21vw 21vw 21vw 21vw"
    ul.style.gridTemplateRows = "auto"

    imgContainer.appendChild(ul)
    
    // fetch images from api
    fetch(imgUrl)
        .then(res => res.json())
        .then(imgData => imgData.message.forEach((img) => {
        // create li element and add images
        let li = document.createElement('li');
        let imgEl = document.createElement('img')
        imgEl.style.width = "100%"
        imgEl.style.height = "100%"
        imgEl.src = img
        li.style.overflow = "hidden"
        li.style.objectFit = "cover"
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
        breedContainer.appendChild(li)
        }
    // using Object.keys
    // .then(breedData => console.log(Object.keys(breedData.message).forEach(breed))
    // )
        for (let i = 0; i < breedContainer.children.length; i++) {
            breedContainer.addEventListener("click", (j = breedContainer.children[i]) => { 
                j.target.style.color = "red"
            })   
        }  

    }) 
    
}

