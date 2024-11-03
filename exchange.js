let credit=4;
localStorage.setItem("onwed", 123);
localStorage.setItem("useing", 1);
let buyMsg="buy";
let owndMsg="use"
let useing="useing";


function eLoad()
{
    alert("gi");
    document.getElementById("credit-count").innerHTML="You have "+credit+"credits.";
    onwing();
}
function onwing()
{
    let onwedList=localStorage.getItem("onwed");
    let i=0;
    let num=0;;
    // while(num<3)
    // {
    //     console.log("numStart:"+num)
    //     // num=onwedList%10;
    //     num++;
    //     let idTest="I"+num;
    //     console.log("idName:"+idTest)

    //     // console.log("indy:"+document.getElementById("idTest"))
    //     // document.getElementById(idny).innerHTML=buyMsg;
    //     num=onwedList/10;
    // }
    for(let i=0;i<3;i++)
    {
        console.log("i:"+i);
        let idTest="I"+i;
        console.log("idTest:"+document.getElementById(idTest)).in;
    }
}
