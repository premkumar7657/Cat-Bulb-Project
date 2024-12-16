const on = document.getElementById("on");
const off = document.getElementById("off");
const heading = document.getElementById("heading");
const bulbimg = document.getElementById("bulb-img");
const catimg = document.getElementById("cat-img");


on.addEventListener("click", ()=>{
    // console.log("on button clicked");
    bulbimg.src="https://ik.imagekit.io/asgxttv7mq/Revamp/bulb-go-on-img.png";
    catimg.src="https://ik.imagekit.io/asgxttv7mq/Revamp/cat-img.png";
    on.style.backgroundColor="#CBD2D9";
    off.style.backgroundColor="green";
    heading.textContent="Switched ON";
    heading.style.color="green";

})

off.addEventListener("click", ()=>{
    console.dir(bulbimg);
    // console.log("off button clicked");
    bulbimg.src="https://ik.imagekit.io/asgxttv7mq/Revamp/bulb-go-off-img.png";
    catimg.src="https://ik.imagekit.io/asgxttv7mq/Revamp/cat-eyes-img.png";
    off.style.backgroundColor="#CBD2D9";
    on.style.backgroundColor="red";
    heading.textContent="Switched OFF";
    heading.style.color="red";
})


