

const navMenu=document.getElementById("nav-menu"),
navToggle=document.getElementById("nav-toggle"),
navClose=document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("showMenu")
    })
}



if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("showMenu")
    })
}



// --------------------- remove menu mobile ---------------------------

const navLink=document.querySelectorAll(".nav__link");

function linkAction(){
    const navMenu=document.getElementById("nav-menu")
    navMenu.classList.remove("showMenu")
}
navLink.forEach(link=>link.addEventListener("click",linkAction))





// ---------------------slider---------------------------

  
let controls=document.querySelectorAll("#controls > span")

let dots=document.querySelectorAll("#dots > span")




 let slides=document.querySelectorAll("#slides > div")
let textSlide;
 let selectSlide=undefined;
  let index=0;
  
  
  
  
 let play=()=>{
 console.log("index",index)
   let boxWhite=document.querySelectorAll(".boxWhite");

  // (index>=3) ?  index=0: null;
      (index>=3) ?  index=0: index < 0 ? index=2 : null ;

 for(slide of slides){
  // console.log(index,"0")
slide.classList.remove("slide")
slide.lastElementChild.classList.remove("textSlide")


}


 for(d of dots){
  // console.log(index,"0")
d.style.background="#f1f5f9"

}


 for(box of boxWhite){
  // console.log(index,"0")
box.classList.remove("boxWhite");


}



  
slides[index].classList.add("slide")

slides[index].lastElementChild.classList.add("textSlide")
dots[index].style.background="#202020"
selectSlide=slides[index].children

  index++;
   selectSlide=Array.from(selectSlide)
 
 
 setTimeout(()=>{
 let first=[]
 let arr=[]
for(let i=0;i<15;i++)
  {
    first[i]=i
    
  }
  
  
  for(let i=0;i<15;i++){
 let rand=Math.floor((Math.random() * 15)+0 )

      if(first[rand]!=="0"){
        arr[i]=first[rand];
        first.splice(rand,1,"0")
      }
      else{
        i--
              
    }
}


 arr.forEach((value,ind)=>{
   arr[ind]=selectSlide[value]
 })
arr.forEach(function(obj,index){
  
  setTimeout(()=>{obj.classList.add("boxWhite")},40*index)
  
})

 },100)

  
 }
  
   let clearSlide=setInterval(play,5000)

  play();


controls.forEach((control,ind)=>{
control.addEventListener("click",()=>{
if(ind===1)
{index=index-2;

console.log(index,"----")}
clearInterval(clearSlide)

  play();
clearSlide=setInterval(play,5000)

})
})

dots.forEach((dot,ind)=>{
dot.addEventListener("click",()=>{
if(ind===0){index=0;}
else if(ind===1){index=1}
else if (ind===2){index=2}
console.log(index,"----")
clearInterval(clearSlide)

  play();
clearSlide=setInterval(play,5000)

})
})





// ----------------------change background header when scroll down -----------------------
window.onscroll=function(){

    if(document.documentElement.scrollTop>80){
        let header=document.getElementById("header")
        header.classList.add("changeHeader")
    }
}








// -----------------------------count-down  ------------------------------
let countDate=new Date('august 10,2023 00:00:00').getTime()
function countDown(){
    let now=new Date().getTime();
    gap=countDate - now
    let second=1000;
    let minute=second*60;
    let hour=minute*60;
    let day=hour*24
    // console.log(hour);
let d=Math.floor(gap/(day));
let h=Math.floor((gap % (day)) / (hour));
let m=Math.floor((gap%hour)/minute)
let s=Math.floor((gap%minute)/second)

document.getElementById("day").innerHTML=d;
document.getElementById("hour").innerHTML=h;
document.getElementById("minute").innerText=m;
document.getElementById("second").innerText=s;
}


// console.log(countDate);

setInterval(countDown,1000)



// -----------------------------------faq icon----------------------------------
let faq__icons=document.querySelectorAll("#faq__icon")
let closeFaq=(icon)=>{
faq__icons.forEach(element=>{icon!==element ?element.nextElementSibling.classList.remove("faq__content-active"):null})
    icon.nextElementSibling.classList.toggle("faq__content-active")
}

faq__icons.forEach(icon=>{icon.addEventListener("click",()=>{closeFaq(icon)})})