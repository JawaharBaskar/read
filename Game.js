var msg;
sumbitButton.onclick=()=>
{
    let inputNumber=document.getElementById("number-input").value;
    lives--;
    if(inputNumber==randomNumber)
    {
       location.href="win.html"
    }
    else if(inputNumber>randomNumber)
    {
       msg="Oops! Your guess is high"
    }
    else if(inputNumber<randomNumber)
    {
        msg="Oops! Your guess is low"

    }
    else if(lives==0)
    {
      location.href="lose.html"
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    lives.innerHTML=lives;
}