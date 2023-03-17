clicked = false;
counter = 0
function set_hello(){
    console.log("hello!!! i worked! congrats!!");
    if (!clicked){
        document.getElementById("id1").innerHTML = "thanks for clicking";
        clicked = true;
    }else{
        document.getElementById("id1").innerHTML = "you clicked again";
        clicked = false;
    }
    counter++;
    document.getElementById("counter").innerHTML = counter;
}