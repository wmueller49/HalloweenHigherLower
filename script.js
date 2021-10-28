function startGame(){
    document.getElementById("startWrapper").style.visibility = "collapse";
    document.getElementById("gameWrapper").style.visibility = "visible";
    document.getElementById("clueBox").innerHTML = facts[count];
    document.getElementById("page").style.backgroundImage = images[count];
    setHigher();
}

var count = 0;
var facts = ["Americans spent 9 million dollars on Halloween this year", "The world's heaviest pumpkim was 2352 pounds", "60 percent of kids prefer to receive chocolate candy for Halloween", "Harry Houdini died on Halloween in 1928", "Halloween has been around for around 4,000 years",
"Children are 3 times more likely to be killed in a car accident on Halloween than any other night", "The record for most Jack O'Lanters lit at once is 29,572", "The average bag of candy that one child will collect on Halloween contains about 10,000 calories"];
var bools = ["higher", "higher", "lower", "lower", "higher", "lower", "higher", "higher"];
var images = ["url(img/halloween-candy.png)", "url(img/pumpkins.png)", "url(img/halloween-candy.png)", "url(img/halloween.png)", "url(img/halloween2.png)", "url(img/halloween.png)", "url(img/pumpkins.png)", "url(img/halloween-candy.png)"];
var higher = false;

function setHigher(){
    if(bools[count] == "higher"){
        higher = true;
    }
    else{
        higher = false;
    }
}

function checkHigher(){
    count++;
    if(count == 8){
        document.getElementById("gameWrapper").style.visibility = "collapse";
        document.getElementById("winWrapper").style.visibility = "visible";
        document.getElementById("page").style.backgroundImage = "none";
    }
    else if(higher){
        document.getElementById("clueBox").innerHTML = facts[count];
        document.getElementById("page").style.backgroundImage = images[count];
        setHigher();
    }
    else{
        document.getElementById("gameWrapper").style.visibility = "collapse";
        document.getElementById("loseWrapper").style.visibility = "visible";
        document.getElementById("page").style.backgroundImage = "none";
    }
}

function checkLower(){
    count++;

    if(count == 8){
        document.getElementById("gameWrapper").style.visibility = "collapse";
        document.getElementById("winWrapper").style.visibility = "visible";
        document.getElementById("page").style.backgroundImage = "none";
    }
    else if(!higher){
        document.getElementById("clueBox").innerHTML = facts[count];
        document.getElementById("page").style.backgroundImage = images[count];
        setHigher();
    }
    else{
        document.getElementById("gameWrapper").style.visibility = "collapse";
        document.getElementById("loseWrapper").style.visibility = "visible";
        document.getElementById("page").style.backgroundImage = "none";
    }
}

function resetGame(){
    count = 0;
    document.getElementById("loseWrapper").style.visibility = "collapse";
    document.getElementById("winWrapper").style.visibility = "collapse";
    document.getElementById("startWrapper").style.visibility = "visible";
    document.getElementById("page").style.backgroundImage = "none";
}
