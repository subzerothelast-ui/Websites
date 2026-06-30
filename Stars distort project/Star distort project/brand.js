//alert("KRONOVA TEST");
//alert("JS IS WORKING");
let starsContainer = document.querySelector(".stars"); //finds the element/ class called star which then stors a refernce within the variable called 'stars cointainer'

let mouseX = 0;
let mouseY = 0;

function getRandomX() {
return Math.random() * window.innerWidth; 
}
function getRandomY() {
    return Math.random() *window.innerHeight;
}

function createStar() {



    let star = document.createElement("div"); //adds class/element
    let x = getRandomX();
    let y = getRandomY();

    star.style.left = x + "px";
    star.style.top = y + "px";

    star.dataset.x = x;
    star.dataset.y = y;

    let delay = Math.random() * 5;
    star.style.animationDelay = delay + "s";

    star.classList.add("star"); //adds the class 'star'to this element 'div'
    starsContainer.appendChild(star); //inserts the element star inside another element named star
    
}

for (let i = 0; i < 300; i++){
createStar();
}

document.addEventListener("mousemove", function(event){
    console.log(event.clientX, event.clientY);
    mouseX = event.clientX;
    mouseY = event.clientY;
    



let stars = document.querySelectorAll(".star");
for (let star of stars) {
    //console.log(star)
    let starX = Number(star.dataset.x);
    let starY = Number(star.dataset.y);

    let dx = starX - mouseX
    let dy = starY - mouseY

    let distance = Math.hypot(dx, dy);

    if (distance < 150) {
        starX +=dx * 0.1;
        starY +=dx * 0.1;

        star.style.left = starX + "px";
        star.style.left = starX + "px";
    }
    console.log(distance);
   
}
})
//let logo = document.querySelector(".logo");
//document.addEventListener("mousemove", function(event) {
    
   // logo.style.position = "absolute"
    
    //logo.style.left = event.clientX + "px";

    //logo.style.top = event.clientY + "px";


//})
