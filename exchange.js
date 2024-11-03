localStorage.setItem("credits", 3);
localStorage.setItem("onwed", 123);
localStorage.setItem("useing", 1);
let buyMsg="buy";
let owndMsg="use"
let useing="useing";


function eLoad()
{
    alert("gi");
    document.getElementById("credit-count").innerHTML="You have "+localStorage.getItem("credits")+" credits.";
    onwing();
}
function onwing()
{
    let onwedList=localStorage.getItem("onwed");
    while(onwedList>0)
    {
        
        let num=onwedList%10;
        let idny="I"+num;
        document.getElementById(idny).innerHTML=buyMsg;
        num=onwedList/10;
        
    }
}
