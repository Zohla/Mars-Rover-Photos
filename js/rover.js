const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/?&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h'
const container = document.querySelector('.container')
async function getDetails() {
    container.textContent = '';
    const response = await fetch(apiUrl);
    const result = await response.json();
    console.log(result);
    
    
}
getDetails();

