let sec=3;
let min;
let hrs;
let time;
let timerSplit;
let notZero=true;
let isPaused=false;
let isPressed=false;
let tot;

localStorage.setItem("credits", 3);
function doPause()
{
    clearInterval(myInter);                
    isPaused=true;
    console.log("pause");
}
function stopPlay()
{
    document.getElementById("timer-text").innerHTML=String(0).padStart(2, '0')+":"+String(0).padStart(2, '0');
    clearInterval(myInter);  
    isPaused=false              
}

function onPlay()
{
    if(!isPaused)
    {
        isPressed=false
        time=prompt("How long do you want to set your timer");
        document.getElementById("timer-text").innerHTML=time;
        console.log(time);
        let cTime=Date.now()/1000;
        timerSplit=time.split(":")
        hrs=timerSplit[0];
        min=timerSplit[1];
        sec=timerSplit[2]; 
        tot=((hrs*60)*60)+Number(min)*60+Number(sec);
        var delta = (Date.now()*1000)+tot;
        
        console.log(delta);
        diffTime=1000000;
        let cur=Date.now()/1000-cTime;

        // while(tot>cur)
        // {
        //     cur=Date.now()/1000-cTime;
        //     diffTime=cur
        //     hrs=Math.floor(tot/(60*60))
        //     //  tot=tot-(hrs*(60*60))
        //     let min=Math.floor(tot/60)-(hrs*60);
        //     if(cur%1000)
        //     {
        //         console.log("cur:"+cur);
        //     }
        //     // tot=tot-(min*60);
        //     let sec=Math.floor(tot-(hrs*3600)-(min*60));        
        //     document.getElementById("timer-text").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0');
        // } 
        // alert("done");
        
    }
    
 
    let timeinSec=sec+(min*60)+((hrs*60)*60);

    // alert("before")

    // while(tot>0)
    // {
    // }

    myInter=setInterval(function ()
        {

            console.log("arr");
            console.log("hrs:"+hrs);
            console.log("tot:"+tot)
            // tot=tot-1;
            // hrs=Math.floor(tot/(60*60))
            // tot=tot-(hrs*(60*60))
            // let min=Math.floor(tot/60)-(hrs*60);
            // tot=tot-(min*60);
            // let sec=Math.floor(tot-(hrs*3600)-(min*60));
            document.getElementById("timer-text").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0')+":"+String(sec).padStart(2, '0');
            console.log("h1:"+hrs+" mins:"+min+" sec:"+sec);
            console.log("tot2:"+tot)
            tot=tot-1;
        

        if(hrs>=0)
        {
            if(min>=0)
            {
                if(sec>0)
                {
                    sec--;
                }
                else
                {
                    sec=59;
                    min--;
                }



            }
            
          
        }
        if(0>=hrs&&0>=min&&0>=sec)
        {
            clearInterval(myInter); 
            alert("done"); 

        }
        document.getElementById("timer-text").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0')+":"+String(sec).padStart(2, '0');

        // if(sec<=0)
        // {
        //     sec=59;
        //     console.log("in the big if");
        //     if(min<=0)
        //     {
   
        //         console.log("mins are zero")
        //         min=Number(min)-1;
                
                
                
 
    
        //     }

        //     if(hrs>0)
        //     {
        //         console.log("hrs not zero")
        //         hrs=Number(hrs)-1;
        //         min=59;
        //         sec=59;
        //     }

            

        // }
        // console.log("hrs:"+hrs+"mins:"+min+"sec:"+sec);
        // if(0>=hrs&&0>=min&&0>=sec)
        //     {
        //         isPaused=false;
        //         alert("done");

        //         document.getElementById("timer-text").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0');
        //         clearInterval(myInter);                
        //     }
        
        
        // console.log("secTest:"+sec)
        // document.getElementById("timer-text").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0');
        // console.log(hrs+":"+min+":"+sec);

    }, 1000);
    
    document.getElementById("timer-text").innerHTML=String(hrs).padStart(2, '0')+":"+String(min).padStart(2, '0');

// }

function minSec()
{
    sec=sec-1

    if(min>0&&sec==0)
    {
        sec=59;
    }
    document.getElementById("timer-text").innerHTML=hrs+":"+min+":"+sec;
}
function minMin()
{
    min=min-1

    if(hrs>0&&min<=0)
    {
        min=59;
    }
    document.getElementById("timer-text").innerHTML=hrs+":"+min+":"+sec; 
}

function minHour()
{
    hrs=hrs-1
    document.getElementById("timer-text").innerHTML=hrs+":"+min+":"+sec;
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
}
