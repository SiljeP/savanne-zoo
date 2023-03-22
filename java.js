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
        const sp1 = document.createElement("span");
        sp1.className = "fullHeart";let heart = document.createTextNode("💖");
        sp1.appendChild(heart);

       let target = this.querySelector(".hearts");
       console.log(target);
       
       const sp2 = target.querySelector(".heart");
       console.log(sp2);
    //    animationen
       this.classList.add('animate__animated', 'animate__pulse');
       setInterval(()=>{
        this.classList.remove('animate__animated', 'animate__pulse')
       }, 3000);
        
        
       const parentDiv = sp2.parentNode;
       parentDiv.replaceChild(sp1, sp2);
       pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
    } else {
        alert("Puhaaaaaaaa! Er du dum eller hvad?");
        pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
        //foodBox.removeChild(document.querySelector("#" + madId));
    }

}   
