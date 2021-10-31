let baseUrl =`https://api.nasa.gov/mars-photos/api/v1/`
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const sol = document.getElementById('sol');
const earthDayContainer = document.querySelector('.earth-day')
loader.innerHTML = `<p class= 'choose'>Choose a rover to see pictures they have taken on their x'th day(sol) on mars</p>`
let solDay = 100;
let rover;
async function getSpace(){
    container.textContent ='';
    earthDayContainer.textContent ='';
    loader.innerHTML= '<p>Loading...</p>';
    try{
        const response = await fetch(baseUrl);
        let jsonResults = await response.json();
        let photos= jsonResults.photos;
        loader.innerHTML=';'
        rover = photos[0].rover.name;
        earthDayContainer.innerHTML += `<p class="earth-day">Taken: ${photos[0].earth_date} by:  <a href="rover.html?rover=${photos[0].rover.name.toLowerCase()}" class="rover-link"> ${photos[0].rover.name}</a></p>`
        
        for (let i = 0; i < photos.length; i++) {
            const element = photos[i];            
    //Adds limit to photos shown
            if (i >10){
                break;
            }
            container.innerHTML+= `<a href="details.html?id=${element.id}&rover=${resultRover}&sol=${solDay}" class="image" style="background-image: url('${element.img_src}')"></a>`
        }
    }catch(error) {
        if (error.message.startsWith('Cannot read properties of undefined')) {
            container.innerHTML = `<p>Sorry, it looks like there's no pictures from ${rover}</a> at that sol. The rovers don't have pictures from all days(sols), but the max sol for this rover can be found<a href="rover.html?rover=${rover.toLowerCase()}" class="bold">here</a>.</p>`
        } else{
            container.innerHTML = `<p class="error">Error: ${error.message}<p>`
        }
    }
    
}
//Get result from choosing a rover and change baseUrl
const roverSelect = document.querySelector('#rovers')
let resultRover = 'Choose...';
 roverSelect.addEventListener('change', (event) => {
     
    resultRover = event.target.value;   
    baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${resultRover}/photos?sol=100&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h`
    getSpace();
})

//Get result from choosing a sol and add error if rover not chosen
const solForm = document.querySelector('.sol-form');


solForm.addEventListener('change', (e) => {
    solDay = e.target.value;    
    let parsedSolInt = parseInt(solDay);
    let newUrl = new URL(`${baseUrl}`)
    newUrl.searchParams.set('sol', `${parsedSolInt}`)
    baseUrl = newUrl;
    if (resultRover == 'Choose...') {
        container.innerHTML = `<p class="error">Please choose a rover</p>`
        roverSelect.style.borderColor='red';        
    }else{
        roverSelect.style.borderColor='black';
        getSpace(); 
    }       
})
//avaoid reload when using keyboard to change sol
solForm.addEventListener('submit', (e)=>{
    e.preventDefault();
}) 




 //! Make a function to add html

/* function createHTML(jsonResults){


} */


