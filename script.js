let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h`
const container = document.querySelector('.container');
const loader = document.querySelector('.loader');
const sol = document.getElementById('sol');
const earthDayContainer = document.querySelector('.earth-day')

async function getSpace(){
    try{
        const response = await fetch(apiUrl);
        let jsonResults = await response.json();
        let photos= jsonResults.photos;
        console.log(jsonResults);
        earthDayContainer.innerHTML += `<p class="earth-day">Taken: ${photos[0].earth_date} by ${photos[0].rover.name}</p>`
    
        for (let i = 0; i < photos.length; i++) {
            const element = photos[i];
    //todo Add limit to photos shown?
            if (i >10){
                break;
            }
            container.innerHTML+= `<a href="details.html?" class="image" style="background-image: url('${element.img_src}')"></a>`
        }
    }catch(error) {
        container.innerHTML = `Error: ${error.message}`
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
    newUrl.searchParams.set('sol', `${solDay}`)
    console.log(newUrl)
    return newUrl;
    
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


//Contact.html

//form validation

function validateName(){
    const nameField = document.querySelector('#name');
    console.log(nameField.value)
    const nameRegEx =   /^[a-zA-Z\s]*$/;
    let nameResult = nameRegEx.test(`${nameField.value}`)

    if (nameResult==true && nameField.value.length >0){
        nameField.classList.remove('incorrect');
    } else{
        nameField.classList.add('incorrect');
        console.log(nameResult)
    }

}
function validateSubject() {
    const subjectField = document.querySelector('#subject');
    const subjectRegEx = /^[a-zA-Z0-9\s]{10,}$/;
    let subjectResult = subjectRegEx.test(`${subjectField.value}`)
    
    if (subjectResult == true){
        subjectField.classList.remove('incorrect')
    } else{
        subjectField.classList.add('incorrect')
    }
    
}

function validateEmail() {
    const emailField = document.querySelector('#mail');
    const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    let emailResult = emailRegEx.test(`${emailField.value}`)

    if (emailResult == true && emailField.value.length > 0){
        emailField.classList.remove('incorrect')
    } else{
        emailField.classList.add('incorrect')
    }
    
}
