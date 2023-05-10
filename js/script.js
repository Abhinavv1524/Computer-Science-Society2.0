

const detail=document.querySelectorAll(".link-detailed");
const visible=document.querySelector(".visible");
const hidden=document.querySelector(".hidden");
for(i=0;i<detail.length;i++){
    detail[i].addEventListener("click",function (){
        visible.classList.toggle("open");
        hidden.classList.toggle("open");
    })
}

// detail.addEventListener("click",()=>{
//     visible.classList.toggle("open");
//     hidden.classList.toggle("open");
// })
// detail.forEach(n=>n.addEventListener("click",()=>{
//     visible.classList.toggle("open");
//     hidden.classList.toggle("open");
// }))



// const detail1=document.getElementsByClassName("link-detailed");
// const visible1=document.querySelectorAll("visible");
// const hidden1=document.querySelectorAll("hidden");
// for(i=0;i<detail1.length;i++){
//     detail1[i].addEventListener("click",function (){
//         visible1.classList[i].toggle("open");
//         hidden1.classList[i].toggle("open");
//         })
// }