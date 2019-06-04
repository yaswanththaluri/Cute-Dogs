$(document).ready(function()
                 {
    
    var refresh = document.getElementById("refresh");
    var loader = document.getElementById("loader-div");
    
    var imageDiv = document.getElementById("imgDiv");
    imageDiv.style.display = "block";
    
    refresh.addEventListener("click", function()
                            {
        
        loader.style.display = "block";
        imageDiv.style.display = "none";
        refresh.style.display = "none";
        sendRequestToServer();
        
    });
    
});


function sendRequestToServer()
{
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://dog.ceo/api/breed/labrador/images/random", true);
    httpRequest.send();
    
    httpRequest.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200)
            {
                displayDetails(this.responseText);
            }
        
    }
}

function displayDetails(response)
{
    var responceObject = JSON.parse(response);
    var link = responceObject["message"];
    
    var img = document.getElementById("myImg");
    img.src = link;
    
    var imageDiv = document.getElementById("imgDiv");
    imageDiv.style.display = "block";
    
    var refresh = document.getElementById("refresh");
    refresh.style.display = "block";
    
    var loader = document.getElementById("loader-div");
    loader.style.display = "none";
}