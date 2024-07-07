let count =0;
const countevent=document.getElementById("count");
const resetevent= document.getElementById("count");
const up = document.getElementById("up");
const down = document.getElementById("down");
function increament()
{
count=count +1;
countevent.innerHTML= count;

}
up.addEventListener('click',increament); 
const reset =document.getElementById("count");
function resetall()
{

    count=0;
    

resetevent.innerHTML= count;
}
reset.addEventListener('click',resetall);
function decreament()
{
    
count=count -1;
if (count < 0) {
    count = 0;
}

countevent.innerHTML= count;

}
down.addEventListener('click',decreament); 