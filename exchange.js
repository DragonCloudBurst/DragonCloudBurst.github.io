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
    let i=0;
    while(i>3)
    {
        
        let num=onwedList%10;
        let idny="I"+num;
        console.log(console.log("indy:"+indny))
        // document.getElementById(idny).innerHTML=buyMsg;
        num=onwedList/10;
        i++; 
    }
}
