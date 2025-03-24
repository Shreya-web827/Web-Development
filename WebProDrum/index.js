// var noOfDrum = document.querySelectorAll(".drum").length;
// for(var i = 0; i<=noOfDrum; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
// }
// function handleClick(){
//     var buttonInnerHTML = this.innerHTML;
//     press(buttonInnerHTML);
// }

// function handleClick(){
//     alert("I got clicked");
// }


document.getElementById("I").addEventListener("click", function()
{
    document.getElementById("guAudio").play();
});
document.getElementById("II").addEventListener("click", function()
{
    document.getElementById("fluteAudio").play();
});

document.getElementById("III").addEventListener("click", function()
{
    document.getElementById("drumAudio").play();
});

document.getElementById("IV").addEventListener("click", function()
{
    document.getElementById("pcAudio").play();
});



alert("hehehe");