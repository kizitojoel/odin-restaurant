import burger from "./burger.jpg";
import spaghetti from "./spaghetti.jpg";
import chapati from "./chapati.jpg";

function createMenuElement(foodName, foodDescription, foodPrice, imageSource){
    const line = document.createElement("div");
    line.classList.add("line");
    const menu1 = document.createElement("div");
    menu1.classList.add("menu");
    const h1 = document.createElement("h1");
    h1.textContent = foodName;
    h1.append(line);
    const p1 = document.createElement("p");
    p1.textContent = foodDescription;
    const price1 = document.createElement("span");
    price1.textContent = foodPrice;
    price1.classList.add("price");
    p1.append(price1);
    const image1 = new Image();
    image1.src = imageSource;

    menu1.append(h1,image1, p1);

    return menu1;
}

export function generateMenupage(){
    const content = document.getElementById("content");
    const line = document.createElement("div");
    line.classList.add("line");

    content.append(createMenuElement(
        "Cheese Burger",
        "A cheese burger with a variety of options. Vegetarian options available upon request.",
        "$9.50",
        burger
        )
    );
    content.append(
        createMenuElement(
            "Spaghetti",
            "Long Italian Spaghetti cooked with minced beef and freshly ground spices and lightly coated with cheese. Served with Ketchup and local fruit smoothies",
            "$5.50",
            spaghetti
        )
    );
    content.append(
        createMenuElement(
            "Chapati",
            "Soft and delicious East African flatbread, Chapati, perfect for savoring with flavorful curries and stews. A must-try delicacy!",
            "$2.50",
            chapati
        )
    );


    
}