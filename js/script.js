let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h`
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const sol = document.getElementById('sol');
const earthDayContainer = document.querySelector('.earth-day')
container.innerHTML = `<p class= 'choose'>Choose a rover to see pictures they have taken on their x'th day on mars</p>`

async function getSpace(){
    container.textContent = '';
    earthDayContainer.textContent = '';
    try{
        const response = await fetch(apiUrl);
        let jsonResults = await response.json();
        let photos= jsonResults.photos;
        console.log(photos);
        earthDayContainer.innerHTML += `<p class="earth-day">Taken: ${photos[0].earth_date} by:  <a href=details.html?> ${photos[0].rover.name}</a></p>`
    
        for (let i = 0; i < photos.length; i++) {
            const element = photos[i];
    //Adds limit to photos shown
            if (i >10){
                break;
            }
            container.innerHTML+= `<a href="details.html?id=${photos[i].id}" class="image" style="background-image: url('${element.img_src}')"></a>`
        }
    }catch(error) {
        container.innerHTML = `Error: ${error.message}`
    }
    
}

//funskjon for å hente rover og redirekte til annen side
//url med rovernavn->bytte navn og henge på info i querystringen(landingsdato, bilder tatt osv)
//https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity?api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h
 rovers.addEventListener('change', (event) => {
     
    let result = event.target.value;   
    apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${result}/photos?sol=100&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h`
    getSpace();
    
})

/* sol.addEventListener('change', (e) => {
    let solDay = e.target.value;
    let newUrl = new URL(`${apiUrl}`)
    newUrl.searchParams.set('sol', `=${solDay}`)
    getSpace();
    
}) */


//todo Make a function to choose "sol-date"

 //! Make a function to add html

/* function createHTML(jsonResults){


} */


