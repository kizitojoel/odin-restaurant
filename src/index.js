import "./style.css"
import { generateHomepage } from "./homepage";

// Create the main content div and append it to the body
const contentDiv = document.createElement("div");
contentDiv.id = "content";

const pageHeader = document.createElement("h1");
pageHeader.textContent = "Joel's Bistro";
contentDiv.appendChild(pageHeader);

// Create the nav bar
const nav = document.createElement("nav");

// Create the different tabs and add them to the nav bar
const homeTab = document.createElement("div");
homeTab.textContent = "Home";
homeTab.classList.add("tab");
const menuTab = document.createElement("div");
menuTab.textContent = "Menu"
menuTab.classList.add("tab");
const contactTab = document.createElement("div");
contactTab.textContent = "Contact"
contactTab.classList.add("tab");

nav.append(homeTab, menuTab, contactTab);


contentDiv.appendChild(nav);


document.body.appendChild(contentDiv);

document.addEventListener("DOMContentLoaded", generateHomepage);