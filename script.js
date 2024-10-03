const output=document.getElementsByClassName("output")[0];
output.textContent="";
const button=document.querySelectorAll(".btn");
flag=0;
button.forEach(element => {
    element.addEventListener("click",function(){
        clr();
        let idvalue=this.getAttribute("id");
        if(idvalue!='equal'&&idvalue!='clear'&&idvalue!='back'&&idvalue!='ce'){
            output.textContent+=idvalue;
        }
        else if(idvalue=='equal'){
            try {
                output.textContent = eval(output.textContent); // Calculate and display result
                flag=1;
            } catch (error) {
                output.textContent = ""; // Display an error if eval() fails
            }
            
        }
        else if(idvalue=='clear'||idvalue=='ce'){
            output.textContent="";
        }
        else if(idvalue=='back'){
            backspace();
        }
    })

});
function backspace(){
    currentValue=output.textContent;
    if(currentValue.length>0){
        output.textContent=currentValue.slice(0,-1);
    }
}
function clr(){
    if(flag==1){
        output.textContent="";
        flag=0;
    }
    
}