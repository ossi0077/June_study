var buttons = document.querySelectorAll(".check");
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        if(this.style.color!="red"){
            this.style.color = "red"; 
        }else if(this.style.color == "red"){
            this.style.color = "#ccc"
        }
    })
}