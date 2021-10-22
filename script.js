let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h`
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const sol = document.getElementById('sol');

async function getSpace(){
    const response = await fetch(apiUrl);
    let jsonResults = await response.json();
    let photos= jsonResults.photos;
    console.log(photos)
    container.innerHTML += `<p>Earth date taken: ${photos[0].earth_date}</p>`

   
    for (let i = 0; i < photos.length; i++) {
        const element = photos[i];
//todo Add limit to photos shown?
        if (i >10){
            break;
        }

       
        
        
        
        container.innerHTML+= `<div class="image" style="background-image: url('${element.img_src}')"></div>`
        
        
    }
    
}
getSpace();
/* rovers.addEventListener('change', (event) => {
    let result = event.target.value;
    console.log(result);
})

sol.addEventListener('change', (e) => {
    let result = e.target.value;
    console.log(result);
}) */
//todo Make a function to choose "sol-date"

function searchSol() {
    let solDay = sol.value;
    let newUrl = new URL('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h&')
    /* let params = new URLSearchParams(newUrl.search) */
    newUrl.searchParams.set('sol', `${solDay}`)
    /* params.set('sol', `${solDay}`) */
    /* let updatedParams = params.toString(); */
    
    console.log(newUrl)
   /*  const findParams = apiUrl.searchParams;
    findParams.set('sol', '100')
    apiUrl.search = findParams.toString();
    let updatedUrl = apiUrl.toString();
    console.log(solDay)
    console.log(updatedUrl) */
    
}
function findRover() {
    let rover = rovers.value;
    console.log(rover)
    //Todo Can i change the url to update rover?
    /* return rover; */
    /* if (rover === "curiosity"){
        
    } else if (rover === 'spirit'){
        console.log('spirittt')
    }else if (rover === 'opportunity'){
        console.log('opportunist')
    } */
    
}
 //! Make a function to add html

/* function createHTML(jsonResults){


} */



