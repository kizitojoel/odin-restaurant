import burgerImage from "./burger.jpg";

export function generateHomepage(){
    const content = document.getElementById("content");

    const section1 = document.createElement("div");
    section1.classList.add("section");

    
    const p = document.createElement("p");
    p.innerHTML = "Welcome to Joel's Bistro, a haven of delicacies where we stick to one motto: <br><br><br> <i>Every meal should be an unforgettable experience.</i><br><br><br>";
    section1.appendChild(p);

    const p1 = document.createElement("p");
    p1.textContent = "Our menu contains a rich variety of delicacies ranging from African cuisines imbued with locally sourced spices and a variety of continental dishes " +
    "";
    section1.appendChild(p1);

    content.append(section1);


    document.body.appendChild(content);

}