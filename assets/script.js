var x = document.getElementById("myBtn1");
x.addEventListener("mouseover", myFunction1);


var y = document.getElementById("myBtn2");
y.addEventListener("mouseover", myFunction2);


var z = document.getElementById("myBtn3");
z.addEventListener("mouseover", myFunction3);


function myFunction1() {
    document.getElementById("btnInfo1").innerHTML = "Try and find the hidden pairs";
    x.style = 'color: #4CAF50'
}

function myFunction2() {
    document.getElementById("btnInfo2").innerHTML = "Try and find the hidden pairs";
    y.style = 'color: #4CAF50'
}

function myFunction3() {
    document.getElementById("btnInfo3").innerHTML = "Try and find the hidden pairs";
    z.style = 'color: #4CAF50'
}
