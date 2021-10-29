
const querystring= document.location.search;
const params = new URLSearchParams(querystring);
const photoId = params.get('id');
console.log(photoId)
const rover = params.get('rover');
const apiKey = 'api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h'


const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?id=${photoId}&sol=100&${apiKey}`;

let displayPhoto='';

const container = document.querySelector('.photo-container')

async function getDetails() {
    container.textContent = '';
    const response = await fetch(apiUrl);
    const result = await response.json();
    let photo= result.photos;
    for (let i = 0; i < photo.length; i++) {
        const element = photo[i];
        console.log(element)
        if (element.id == photoId) {
            displayPhoto = element.img_src;
            console.log(element.id)
            container.innerHTML = 
            `<div class="card"><p>This picture is taken by ${element.rover.name} on ${element.earth_date}.<br> This image is shot with ${element.rover.name}s ${element.camera.full_name}. </p><div style="background-image: url('${displayPhoto}')"></div></div>`   
        }
    }
}
getDetails();
 
