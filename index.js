 const contextMenu=document.querySelector(".container")
 const shareMenu=document.querySelector(".share-menu")
 document.addEventListener("contextmenu",(e)=>{
    e.preventDefault() //preventing default context of the browser
    let x=e.offsetX;
    let y=e.offsetY;
    let winWidth=window.innerWidth;// window lenghth
    let cmWidth=contextMenu.offsetWidth;
    let winHeight=window.innerHeight;
    let cmHeight=contextMenu.offsetHeight;
    x= x +cmWidth>winWidth ?winWidth-cmWidth : x
    y = y + cmHeight> winHeight ? winHeight-cmHeight : y
    if (x>winWidth - cmWidth-shareMenu.offsetWidth){
        shareMenu.style.left="-170"
    }else{
        shareMenu.style.left="260"
    }

   
    contextMenu.style.left=`${x}px`;
    contextMenu.style.top=`${y}px`;

    

   
    contextMenu.style.visibility="visible"
 })
document.addEventListener("click",(e)=>{
    contextMenu.style.visibility="hidden"
}) 