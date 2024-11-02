localStorage.setItem("credits", 3);

function eLoad()
{
    alert("gi");
    document.getElementById("credit-count").innerHTML="You have "+localStorage.getItem("credits")+" credits.";

}