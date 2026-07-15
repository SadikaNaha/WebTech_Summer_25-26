function collect_data()
{
   let isloginValid=collect_login(); 
   return false;
}
let attempts = 0;
let locked = false;
function collect_login()
{
     let username = document.getElementById("username").value;
     let password = document.getElementById("Password").value;
    
    if(username === ""||password==="")
    {
        document.getElementById("Error").innerHTML="Username and Password Can Not Be Empty";
        return false;
    }
    if (username == "AIUB"&& password == "$_student")
    {
        document.getElementById("Error").innerHTML ="Successfully Logged In";
        console.log(username);
        console.log(password);
        attempts = 0;
        return false;
    }
    attempts++;

    if (attempts == 1)
    {
        document.getElementById("Error").innerHTML ="You have 3 attempts left.";
        return false;
    }
    else if (attempts == 2)
    {
        document.getElementById("Error").innerHTML ="You have 2 attempts left.";
        return false;
    }
    else if (attempts == 3)
    {
        document.getElementById("Error").innerHTML ="You have 1 attempt left. You are locked for 5 minutes.";

        locked = true;
        
    }
    else if (locked)
    {
        document.getElementById("Error").innerHTML ="You are locked. Please wait 5 minutes.";
        return false;
    }

   
    return false;
}
