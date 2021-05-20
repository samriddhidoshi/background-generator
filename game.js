
var ul=document.getElementsByTagName("ul")[0];
var ui=document.getElementById("userinput");
var button=document.getElementById("insert");
function newitem(ui){
    {
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(ui.value));
        ul.appendChild(li);
        ui.value="";
    }
}
button.addEventListener("click",function(){
   newitem(ui);
}) 

ui.addEventListener("keypress",function(event){
   if(ui.value.length>0 && event.keyCode===13)
   newitem(ui);
   

})