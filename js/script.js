let baseUrl =`https://api.nasa.gov/mars-photos/api/v1/`
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const sol = document.getElementById('sol');
const earthDayContainer = document.querySelector('.earth-day')
loader.innerHTML = `<p class= 'choose'>Choose a rover to see pictures they have taken on their x'th day(sol) on mars</p>`
let solDay = 100;

async function getSpace(){
    container.textContent ='';
    earthDayContainer.textContent ='';
    loader.innerHTML= '<p>Loading...</p>';
    try{
        const response = await fetch(baseUrl);
        let jsonResults = await response.json();
        let photos= jsonResults.photos;
        console.log(photos);
        loader.innerHTML=';'
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
            container.innerHTML = `Sorry, it looks like there's no pictures from <a href="rover.html?rover=${photos[0].rover.name.toLowerCase()}" class="rover-link"> ${photos[0].rover.name}</a> at that sol. The rovers don't have pictures from all days(sols), but the max sol for thr rover can be found if you click the rover name`
        } else{
            container.innerHTML = `<p class="error">Error: ${error.message}<p>`
        }

        console.log(error)
    }
    
}
//Get result from choosing a rover and change baseUrl
let resultRover = 'Choose...';
 rovers.addEventListener('change', (event) => {
     
    resultRover = event.target.value;   
    baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${resultRover}/photos?sol=100&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h`
    getSpace();
})

//Get result from choosing a sol and add error if rover not chosen
const solForm = document.querySelector('.sol-form');
const roverSelect = document.querySelector('#rovers')

solForm.addEventListener('change', (e) => {
    solDay = e.target.value;    
    let parsedSolInt = parseInt(solDay);
    let newUrl = new URL(`${baseUrl}`)
    newUrl.searchParams.set('sol', `${parsedSolInt}`)
    baseUrl = newUrl;
    console.log(parsedSolInt)
    console.log(newUrl)
    if (resultRover == 'Choose...') {
        container.innerHTML = `<p class="error">Please choose a rover</p>`
        roverSelect.style.borderColor='red';        
    }else{
        roverSelect.style.borderColor='black';
        getSpace(); 
    }       
})

/* solForm.addEventListener('submit', (e)=>{
    e.preventDefault();
}) */ 




 //! Make a function to add html

/* function createHTML(jsonResults){


} */


