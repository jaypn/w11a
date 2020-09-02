function makePurple(){
    titleElement.style.color = "purple";
}
    var titleElement = document.getElementById("title");
    titleElement.addEventListener("click", function(){
        titleElement.style.color = "red";
        titleElement.style.fontsize = "50px";
    });


 var contentElement = document.getElementById("content");
 contentElement.addEventListener("keypress",function(eventDetails){
     console.log(eventDetails);
     if(eventDetails.code == "Space"){
         contentElement.style.fontSize = "150px";

     }

 });


 


 var contentElement = document.getElementById("content");
 contentElement.addEventListener("mouseenter", function(event){
     event.target.style.color = "red";
 });

 var contentElement = document.getElementById("content");
 contentElement.addEventListener("mouseleave", function(event){
     event.target.style.color = "black";
 });


