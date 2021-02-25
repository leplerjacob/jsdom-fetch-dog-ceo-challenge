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
    fetch(imgUrl).then(res => res.json()).then(data => data.message.forEach((img) => {
        // create li and adds image
        let li = document.createElement('li');
        let imgEl = document.createElement('img')
        imgEl.src = img
        imgEl.style.width = "400px"
        li.append(imgEl)
        ul.appendChild(li)
    }))
}

const addBreeds = () => {
    
}