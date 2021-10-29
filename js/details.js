
const querystring= document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get('id');
const rover = params.get('rover');
const apiKey = 'api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h'


const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?id=${id}&sol=100&${apiKey}`;



const container = document.querySelector('.photo-container')
async function getDetails() {
    container.textContent = '';
    const response = await fetch(apiUrl);
    const result = await response.json();
    let photo= result.photos[0];
    //!shows only first photo either way,need to use id properly
    console.log(photo)
    
    container.innerHTML = 
    `<div class="card"><div style="background-image: url('${photo.img_src}')"></div><p>This picture is taken by ${photo.rover.name} on ${photo.earth_date}.<br> This image is shot with ${photo.rover.name}s ${photo.camera.full_name}. </p></div>`   
    
    
    
}
getDetails();
 
