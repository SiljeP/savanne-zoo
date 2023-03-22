// DOM referencer

const pointBox = document.querySelector("#score");  //point tavle
const dragFoodBox = document.querySelectorAll(".foodcontainer article"); //mad
const targetAnimal = document.querySelectorAll ("#animals div"); //dyrene
const foodBox = document.querySelector(".foodcontainer"); //madkassen

//EVENTS på elementerne

dragFoodBox.forEach(function(element){
    element.addEventListener("dragstart",startDrag);
})

targetAnimal.forEach(function(element){
    element.addEventListener("dragover", cancelDefault);
    element.addEventListener("drop", dropMad);
})

//FUNKTIONER

function startDrag (event){
    //console("jo jo den kan hives");
    //console.log(this.dataset.food);
    event.dataTransfer.setData("foodId", this.id)
    event.dataTransfer.setData("foodName", this.dataset.food)
}

function cancelDefault(event){
    event.preventDefault();
    //kan bruges til at "aflyse" eventet
}

function dropMad(event){
    //console.log("Der er droppet mad");

    let madId = event.dataTransfer.getData("foodId");
    let madType = event.dataTransfer.getData("foodName");

    if (madType == this.dataset.food) {
        // let heart = document.createTextNode("💖");
        // this.appendChild(heart);
        //let heart = document.createTextNode("🤍");
        //this.removeChild(0);
        //this.removeChild(this.firstChild)
        const sp1 = document.createElement("span");

        // Give it an id attribute called 'newSpan'
        sp1.id = "newSpan";

        // Create some content for the new element.
        let heart = document.createTextNode("💖");

        // Apply that content to the new element
        sp1.appendChild(heart);

        // Build a reference to the existing node to be replaced
        const sp2 = document.querySelector(this.firstChild);

        const parentDiv = sp2.parentNode;

        // Replace existing node sp2 with the new span element sp1
        parentDiv.replaceChild(sp1, sp2);

        
    // console.log(this);
        //pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
    } else {
        alert("Puhaaaaaaaa! Er du dum eller hvad?");
        pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
        foodBox.removeChild(document.querySelector("#" + madId));
    }

}   
