let credit=4;
// localStorage.setItem("onwed", 1,2,3);
localStorage.setItem("useing", 1);
let buyMsg="buy";
let owndMsg="use"
let useing="useing";
function onwing()
{
    localStorage.setItem("onwed",localStorage.getItem("onwed") || '1,2,3');
    // seeIfBuy(money,inUse,cost,id,num)
    seeIfBuy(credit,localStorage.getItem("useing"),2,"I2",2);
    seeIfBuy(credit,localStorage.getItem("useing"),4,"I3",3);
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
        console.log("num:"+Number(ownListTwo[i]));
        let idTest="I"+Number(ownListTwo[i]);
        console.log("idName "+idTest)
        console.log("elemtns:"+document.getElementById(idTest));
        document.getElementById(idTest).innerHTML="use";
        onwedList=Math.floor(onwedList/10);
    }
    let dis=localStorage.getItem("useing");
    
    let idIn="I"+Number(dis);

    document.getElementById(idIn).innerHTML="useing";
    document.getElementById(idIn).disabled = true;



}
function seeIfBuy(money,inUse,cost,id,num)
{
    onwList=localStorage.getItem("onwed");
    onwList=onwList.split(',')
    if(!onwList.includes(num))
   {
        document.getElementById(id).innerHTML="Buy ["+cost+"]";
        if(money<cost)
        {
            document.getElementById(id).disabled=true;
        }

   }
    else
    {  

            if(inUse!=num)
            {
                document.getElementById(id).innerHTML="Use";


            }
            else
            {
                document.getElementById(id).innerHTML="useing";

            }
        }
}

function btnclik()
{

    onwList=localStorage.getItem("onwed");
    onwList=onwList.split(',')
    if(!onwList.includes(num))
   {
       document.getElementById(id).innerHTML="buy ["+cost+"]";
       document.getElementById(id).innerHTML="buy";


   }
   else if(inUse!=num)
   {
    document.getElementById(id).disabled=true;
    document.getElementById(id).innerHTML="equip";
   }
   else
   {
    document.getElementById(id).innerHTML="equiped";
    document.getElementById(id).disabled=true;



   }
}
function eLoad()
{
    alert("gi");
    document.getElementById("credit-count").innerHTML="You have "+credit+"credits.";
    onwing();
}


