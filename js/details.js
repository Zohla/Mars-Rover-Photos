const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const photoId = params.get("id");
const rover = params.get("rover");
const sol = params.get("sol");
const apiKey = "api_key=7C3efywnhiZulYlDVdUYW9M5u71tIS22nmcak61h";
const title = document.querySelector("title");
const heading = document.querySelector("h1");
title.innerText = `${rover} photo`;

const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?id=${photoId}&sol=${sol}&${apiKey}`;

let displayPhoto = "";

const container = document.querySelector(".photo-container");

async function getDetails() {
  container.innerHTML = "<p>Loading...</p>";
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    let photo = result.photos;
    for (let i = 0; i < photo.length; i++) {
      const element = photo[i];
      if (element.id == photoId) {
        displayPhoto = element.img_src;
        container.innerHTML = `<div class="card"><p>This picture was taken by ${element.rover.name} on <span class='rover-span'>${element.earth_date}</span>. It was shot with ${element.rover.name}'s <span class='rover-span'>${element.camera.full_name}</span>. </p><div style="background-image: url('${displayPhoto}')"></div></div>`;
        heading.innerText = `Mars ${element.rover.name} Photos`;
      }
    }
  } catch (error) {
    container.innerHTML = `Something went wrong: ${error.message}`;
  }
}
getDetails();
