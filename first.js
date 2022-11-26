var counterElement = document.getElementById("counterText");
var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("decrement");
var clearBtn = document.getElementById("clear");
var counter = counterElement.innerText;
function increment() {
    
    counter++;
    console.log(counter);
    counterElement.innerText = counter;
    line.innerText = null;
    texterror.innerHTML = null;
}
function decrement() 
{
  if(counter<=0)
  {
    console.log('Error:cannot go below 0');
    line.innerText = "________________________"
    texterror.innerHTML = "Error : Cannot go below 0"
  }
   if(counter>0)
   {
    texterror.innerHTML = null;
   }
   if(counter>0){
    counter--;
    console.log(counter);
    counterElement.innerText = counter;
  }
    
}
function clear()
{
    if(counter!=0)
    {
        counter = 0;
        console.log(counter);
        counterElement.innerText = counter;
    }
    else{
      line.innerText = null;
      texterror.innerHTML = null;
    }
}
incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
clearBtn.onclick = clear;