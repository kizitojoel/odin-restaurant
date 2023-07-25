export function generateContactpage(){
    const content = document.getElementById("content");

    const contactForm = document.createElement("form");
    contactForm.innerHTML = `
    <form action="">
        <div class="form-header"><em>Kindly Fill in your Details</em></div>
        <div class="input">
            <label for="fname" title="First Name">*First Name: </label>
            <input type="text" id="fname" name="fname" required autofocus placeholder="John">
        </div>
        <div class="input">
            <label for="lname" title="Last Name">*Last Name: </label>
            <input type="text" id="lname" name="lname" required placeholder="Doe">
        </div>
        <div class="input">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com">
        </div>
        <div class="input">
            <label for="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="+254722000000">
        </div>
        <div class="input">
            <label for="comments">Comments</label>
            <input type="text" name="comments" id="comments">

        </div>
        <button class="button" type="submit">Submit</button>
    </form>
    `
    content.appendChild(contactForm);

}