const apiKey ='?&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h'
const querystring= document.location.search;
const params = new URLSearchParams(querystring);
const rover = params.get('rover');
const roverHeader = document.querySelector('.roverHeader')
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}${apiKey}`
const container = document.querySelector('.container')
async function getRoverDetails() {
    container.innerHTML = '<p>Loading...</p>';
    try{
        const response = await fetch(apiUrl);
        const result = await response.json();
        const roverName = result.rover;

         roverHeader.innerHTML=`<h1>${roverName.name}</h1>`
         container.innerHTML = `<div class="rover-details"><p>${roverName.name} was launched ${roverName.launch_date} and landed on Mars ${roverName.landing_date}.</p>
 <p>The rover has ${roverName.cameras.length} cameras and has taken a total of ${roverName.total_photos} photos in its time on Mars. The max sol to search for photos are: ${roverName.max_sol}.</p>
 <p>${roverName.name}s journey is ${roverName.status}.</p></div>`
    
    }catch(error){
        container.innerHTML=`Something went wrong:${error.message}`
    }
    
    
}
getRoverDetails();

