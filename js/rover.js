const apiKey = "?&api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h";
const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const rover = params.get("rover");
const roverHeader = document.querySelector(".roverHeader");
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}${apiKey}`;
const container = document.querySelector(".container");
async function getRoverDetails() {
  container.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    const roverName = result.rover;

    roverHeader.innerHTML = `<h1>${roverName.name}</h1>`;
    container.innerHTML = `<div class="rover-details"><p>${roverName.name} was launched on <span class='rover-span'>${roverName.launch_date}</span> and landed on Mars <span class='rover-span'>${roverName.landing_date}</span>.</p>
 <p>The rover has <span class='rover-span'>${roverName.cameras.length}</span> cameras and has taken a total of <span class='rover-span'>${roverName.total_photos}</span> photos in its time on Mars. The max sol to search for photos are: <span class='rover-span'>${roverName.max_sol}</span>.</p>
 <p>${roverName.name}s journey is <span class='rover-span'>${roverName.status}</span>.</p></div>`;
  } catch (error) {
    container.innerHTML = `Something went wrong:${error.message}`;
  }
}
getRoverDetails();
