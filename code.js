// test.addEventListener("load", onLoad());
let sec=3;
let min;
let hrs;
let time;
let timerSplit;
let notZero=true;
// function test()
// {
//     time=prompt("How long do you want to set your timer");
// }
function onLoad()
{
    time=prompt("How long do you want to set your timer");
    document.getElementById("timer").innerHTML=time;
    console.log(time);
    let cTime=Date.now()/1000;
    timerSplit=time.split(":")
    hrs=timerSplit[0];
    min=timerSplit[1];
    sec=timerSplit[2]; 
    let timeinSec=sec+(min*60)+((hrs*60)*60);
    // let timeT=cTime+timeinSec;
    // let timeR=timeT-cTime;
    alert("before")
    myInter=setInterval(function (){
        console.log("arr");
        
        // timeR-=1; 
        // console.log("secs:"+timeR);
        sec=Number(sec)-1;
        if(sec==0)
        {
            if(min!=0)
            {
                console.log("mins are zero")
                min=Number(min)-1;
                sec=59;
    
            }
            else
            {
                if(hrs!=0)
                {
                    console.log("hrs not zero")
                    hrs=Number(hrs)-1;
                    min=59;
                    sec=59;


                }
                else
                {
                    alert("done");
                    document.getElementById("timer").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0')+":"+String(sec).padStart(2, '0');
                    clearInterval(myInter);                }
            }

        }
        console.log("secTest:"+sec)
        document.getElementById("timer").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0')+":"+String(sec).padStart(2, '0');
        console.log(hrs+":"+min+":"+sec);

    },1000)
    document.getElementById("timer").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0')+":"+String(sec).padStart(2, '0');



    // while(notZero)
    // {
    //     if(hrs==0&&min==0&&sec==0)
    //     {
    //         notZero=false;
    //         document.getElementById("timer").innerHTML=hrs+":"+min+":"+sec;

    //     }
    //     // setInterval(updateTimer, 1000);
    //     // setTimeout(minSec, 1000);
    //     // setInterval(minMin, 60000);
    //     // setInterval(minHour, 3600000);
    //     // setInterval(function()
    //     // {
    //     //     let cTime=Date.now();

    //     // })


        
        


    // }
    // // alert("gi");

   



}
function minSec()
{
    sec=sec-1

    if(min>0&&sec==0)
    {
        sec=59;
    }
    document.getElementById("timer").innerHTML=hrs+":"+min+":"+sec;


}
function minMin()
{
    min=min-1

    if(hrs>0&&min==0)
    {
        min=59;
    }
    document.getElementById("timer").innerHTML=hrs+":"+min+":"+sec;

    
    

}
function minHour()
{
    hrs=hrs-1

    // if(hrs>0&&min==0)
    // {
    //     min=59;
    // }
    document.getElementById("timer").innerHTML=hrs+":"+min+":"+sec;

    

}



function updateTimer()
{
    console.log("Update!")
    timerSplit=time.split(":")
    hrs=timerSplit[0];
    min=timerSplit[1];
    sec=timerSplit[2]; 
    console.log("hrs:"+hrs);
    console.log("min:"+min);
    console.log("sec:"+sec);
    sec--;
    if(sec==0)
    {
        min--;
        sec=59;
    }
    if(min=0)
    {
        hrs--;
        min=0;
    }
    if(hrs==0&&min==0&&sec==0)
    {
        notZero=false;
    }


}
