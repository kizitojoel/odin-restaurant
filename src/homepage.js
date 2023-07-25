export function generateHomepage() {
    const content = document.getElementById("content");

    // Section 1
    const section1 = document.createElement("div");
    section1.classList.add("section");

    const p1 = document.createElement("p");
    p1.innerHTML = `Welcome to Joel's Bistro, a haven of delicacies where we stick to one motto: 
        <br><br><br> 
        <i>Every meal should be an unforgettable experience.</i>
        <br><br><br>
        Situated in the heart of the continent, our restaurant offers a delightful fusion of local delicacies and international dishes. 
        With passion-infused creations, we promise an unforgettable dining experience that embraces both tradition and innovation.`;

    section1.appendChild(p1);
    content.appendChild(section1);

    // Section 2
    const section2 = document.createElement("div");
    section2.classList.add("section");

    const p2 = document.createElement("p");
    p2.textContent = `At Joel's Bistro, our menu is a celebration of East African culinary heritage, featuring signature dishes like Nyama Choma, Ugali, and flavorful stews. 
        Alongside these treasured local favorites, we present a diverse selection of international cuisine crafted with the finest ingredients. 
        From Mediterranean-inspired delights to Asian-infused delicacies, there's something to delight every palate.`;

    section2.appendChild(p2);
    content.appendChild(section2);

    // Section 3
    const section3 = document.createElement("div");
    section3.classList.add("section");

    const p3 = document.createElement("p");
    p3.textContent = `Step into Joel's Bistro and immerse yourself in a warm and welcoming ambiance that mirrors the region's hospitality. 
        Our attentive staff is dedicated to ensuring your dining pleasure, making your visit an extraordinary culinary journey. 
        Whether you're seeking a taste of home or an exploration of global flavors, Joel's Bistro is where unforgettable memories and delectable experiences come together.`;

    section3.appendChild(p3);
    content.appendChild(section3);

}
