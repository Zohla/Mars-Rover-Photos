let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h`
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const sol = document.getElementById('sol');

async function getSpace(){
    const response = await fetch(apiUrl);
    let jsonResults = await response.json();
    let photos= jsonResults.photos;
    container.innerHTML += `<p>Earth date taken: ${photos[0].earth_date}</p>`

   
    for (let i = 0; i < photos.length; i++) {
        const element = photos[i];
       /*  if (i >1){
            break;
        } */

        //! Make a function to add html
        //todo Add limit to photos shown?
        //todo Make a function to choose "sol-date"
        
        container.innerHTML+= `<div class="image" style="background-image: url('${element.img_src}')"></div>`
        
        
    }
    
}

/* rovers.addEventListener('change', (event) => {
    let result = event.target.value;
    console.log(result);
})

sol.addEventListener('change', (e) => {
    let result = e.target.value;
    console.log(result);
}) */

function findRover() {
    let rover = rovers.value;
    console.log(rover)
    return rover;
    /* if (rover === "curiosity"){
        
    } else if (rover === 'spirit'){
        console.log('spirittt')
    }else if (rover === 'opportunity'){
        console.log('opportunist')
    } */
    
}


/* function createHTML(jsonResults){


} */
getSpace();


