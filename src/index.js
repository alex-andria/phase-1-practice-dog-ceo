console.log('%c HI', 'color: firebrick')

const breeds = [];

document.addEventListener('DOMContetLoaded', function(){
    fetchImages()
    fetchBreeds()
})

//Challenge 1
//on page load, will fetch the image using the url
//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//parses the response as JSON

//adds image elements to the DOM *for each* image in the array

// fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then((resp) => resp.json())
//     .then((json) => {renderDogs(json)});

// function renderDogs(image) {
//     const div = document.getElementById('dog-image-container')
//     image.message.forEach(url => {
//         const img = document.createElement('img')
//         img.src = url;
//         div.appendChild(img);  
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     renderDogs();
// });

function fetchImages(){

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        //first thing you always want to print the data!
        //console.log(data)

        data.message.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            document.querySelector("#dog-image-container").appendChild(img);
        })
    
    })
}

//Challenge 2
//After first, will fetch all dog breds using the url
//const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//adds the breeds to the page in the <ul> provided in index.html

// fetch("https://dog.ceo/api/breeds/list/all")
//     .then((resp) => resp.json())
//     .then((json) => {renderDogs(json)});

// function renderBreed(breed) {
//     const ul = document.getElementById('dog-breeds')
//     Object.keys(breed.message).forEach(breed => {
//         const li = document.createElement('li');
//         li.innerText = breed;
//         ul.appendChild(li);  
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     renderBreed();
// });

function fetchBreeds(){

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        //first thing you always want to print the data!
        console.log(data)

        //alternative to Object.keys, in order to iterate over an object
        //is the for-in loop

        //Object.keys --> returns an array
        Object.keys(data.message).forEach(breed => {
            const ul = document.querySelector('#dog-breeds');
            const li = document.createElement('li');
            li.textContent = breed;


            //Challenge 3
            li.addEventListener("click"), function(){//e){
                li.style.color = "pink";
                //or
                //e.target.style.color = 'pink';
                //or
                //this.style.color = 'pink';
            }

            //slap the li's onto the <ul> DOM
            ul.appendChild(li);
            //Challenge 4
            breeds.push(breed)
        })
        //Challenge 4
        filter(breeds)
    })
}

//Challenge 3
//After others, add JavaScript so that, when the user clicks on any one of the <li>s, 
//the font color of that <li> changes. This can be a color of your choosing.


//Challenge 4
//Once we are able to load all of the dog breeds onto the page, 
//add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
//For example, if the user selects 'a' in the dropdown, 
//only show the breeds with names that start with the letter a. 
//For simplicity, the dropdown only includes the letters a-d. 
//However, we can imagine expanding this to include the entire alphabet.

function filter(breeds){
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
        //filterBreeds(event.target.value);
        let ul = document.querySelector('#dog-breeds');

            if(event.target.value !== ''){
            //.filter() returns an array, so newBreeds is an array
            //if the breed starts with 'event.target.value', then add it to newBreeds
            let newBreeds = breeds.filter(breed => breed.startsWith(event.target.value))
            //console.log(newBreeds)

                //inside of this loop, we're recreating the list with only
                //the breeds that we want
                newBreeds.forEach(breed => {
                    const li = document.createElement('li')
                    li.innerText = breed;
                    ul.append(li)
                })
            }else{
                //if the first, blank option is selected, show all the breeds
            }
    })
}