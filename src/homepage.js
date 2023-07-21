import burgerImage from "./burger.jpg";

export function generateHomepage(){
    const content = document.createElement("div");
    content.setAttribute("id", "content")

    const header = document.createElement("h1");
    header.textContent = "Joel's Bistro";
    content.appendChild(header);

    const image1 = new Image();
    image1.src = burgerImage;
    content.appendChild(image1);
    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to Joel's Bistro, a haven of delicacies where we stick to one motto, every meal should be an unforgettable experience.";
    content.appendChild(paragraph);

    document.body.appendChild(content);

}