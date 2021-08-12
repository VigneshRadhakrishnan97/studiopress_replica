var t=1;
function toggle(){
    
    //console.log("hi");
    if(t===1){
    document.getElementsByClassName("over")[0].style.display = "block";
    t=0;
    }
    else{
    document.getElementsByClassName("over")[0].style.display = "none";
    t=1;
    }
     //console.log(document.getElementsByClassName("over")[0].style);
}