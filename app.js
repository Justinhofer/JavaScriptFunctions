var number=0;
var reset=0;

function eleMaker (name,damage){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    ele.style.color="Red";
    ele.addEventListener("click",function(){
        increase(damage);
    })
    document.body.querySelector(".main").appendChild(ele);

}

function increase (damage){
    number=number+damage;
document.body.querySelector(".number").innerHTML=number;
}

function refreshPage(){
    window.location.reload();
}

document.body.querySelector(".captainamerica").addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Boom! (click to attack)",4);

})

document.body.querySelector(".ironman").addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("POW! (Click to attack)",6);

})

document.body.querySelector(".blackwidow").addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("BLAM! (Click to attack)",10)

})

document.body.querySelector(".scarletwitch").addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("AHHH! (Click to attack)",12)

})



