let credit=4;
localStorage.setItem("onwed", 1,2,3);
localStorage.setItem("useing", 1);
let buyMsg="buy";
let owndMsg="use"
let useing="useing";
function onwing()
{
    let onwedList=localStorage.getItem("onwed");
    console.log("re"+onwedList);
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
    onwedListLen=onwedList.length;
    // onwedList="1,2,3";
    console.log(onwedListLen)
    console.log("onwedList "+onwedList)
    ownListTwo=onwedList.split(',')
    console.log("arr:"+ownListTwo)
    console.log("len:"+ownListTwo.length)
    for(let i=0;i<ownListTwo.length;i++)
    {
        
        
        let a =Math.floor(onwedList%10)
        let idTest="I"+Number(ownListTwo[i]);
        console.log("idName "+idTest)
        console.log("elemtns:"+document.getElementById(idTest));
        document.getElementById(idTest).innerHTML="use";
        onwedList=Math.floor(onwedList/10);
    }

}
function eLoad()
{
    alert("gi");
    document.getElementById("credit-count").innerHTML="You have "+credit+"credits.";
    onwing();
}


