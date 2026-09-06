const USC = [34.022415, -118.285530];
const Home = [50.7867, 4.4168];
const NYC = [40.7128, -74.0060];

const map = L.map("map").setView(USC, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker(USC).addTo(map).bindPopup("USC");
L.marker(Home).addTo(map).bindPopup("My Hometown");
L.marker(NYC).addTo(map).bindPopup("New York City");

const homeButton = document.getElementById("home-button");
const statusText = document.getElementById("status");

homeButton.addEventListener("click", function() {
    map.flyTo(Home,11);
    statusText.textContent = "Flying to My Hometown!";
}
);

const uscButton = document.getElementById("usc-button");
const statusText2 = document.getElementById("status2");

uscButton.addEventListener("click", function() {
    map.flyTo(USC,13);
    statusText2.textContent = "Flying to USC!";
}
);

const nycButton = document.getElementById("nyc-button");
const statusText3 = document.getElementById("status3");

nycButton.addEventListener("click", function() {
    map.flyTo(NYC,11);
    statusText3.textContent = "Flying to New York City!";
}
);  