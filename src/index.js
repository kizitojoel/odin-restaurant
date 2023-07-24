import "./style.css"
import { generateHomepage } from "./homepage";
import { generateMenupage } from "./menu";

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
homeTab.classList.add("tab", "tab-active");

const menuTab = document.createElement("div");
menuTab.textContent = "Menu"
menuTab.classList.add("tab");
menuTab.addEventListener('click', generateMenupage);

const contactTab = document.createElement("div");
contactTab.textContent = "Contact"
contactTab.classList.add("tab");

nav.append(homeTab, menuTab, contactTab);
contentDiv.appendChild(nav);

document.body.appendChild(contentDiv);

// Function to clear content after a tab is clicked
function clearContent(){
    while (nav.nextElementSibling){
        nav.nextElementSibling.remove();
    }
}

// Add event listeners to the tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        if (!tab.classList.contains("tab-active")){
            tabs.forEach(tab => tab.classList.remove("tab-active"));
            this.classList.add("tab-active");
            clearContent();
        }
    })
})


document.addEventListener("DOMContentLoaded", generateHomepage);