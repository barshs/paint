window.addEventListener("load",()=>{
    let canvas=document.querySelector("#canvas");
const cntx=canvas.getContext("2d");
const colorEl = document.getElementById("color");
const brushE1=document.getElementById("brush");
let color = "black";
window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});
let painting=false;
function startp()
{
    painting=true;
    
}
function endp()
{
    painting=false;
   cntx.beginPath();
}
function draw(e)
{
    if(!painting) return;
    else
    {
        
        cntx.lineWidth=3;
        cntx.lineCap="round";
        
        cntx.lineTo(e.clientX,e.clientY)
cntx.stroke();

    }
}

function colorset(e)
{
    color = e.target.value;
    cntx.strokeStyle=color;
}

canvas.addEventListener("mousedown",startp);
canvas.addEventListener("mouseup",endp);
canvas.addEventListener("mousemove",draw);
colorEl.addEventListener("change",colorset);

});



 