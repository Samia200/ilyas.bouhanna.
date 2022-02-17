let circal = document.querySelector(".circal");
let circal2 = document.querySelector(".circal2");
let circal3 = document.querySelector(".circal3");
let text1 = document.querySelector("li .span1");
let text2 = document.querySelector("li .span2");
let text3 = document.querySelector("li .span3");
let icon1 =document.querySelector(".circal i");
let icon2 =document.querySelector(".circal2 i");
let icon3 =document.querySelector(".circal3 i");

circal.addEventListener('mouseenter', () =>{
    text1.style.display = "block";
    icon1.style.color = "#fff";
    
})
circal.addEventListener('mouseleave', () =>{
    text1.style.display = "none";
    icon1.style.color = "rgb(255, 181, 0)";
    
})

circal2.addEventListener('mouseenter', () =>{
    text2.style.display = "block";
    icon2.style.color = "#fff";
    
})
circal2.addEventListener('mouseleave', () =>{
    text2.style.display = "none";
    icon2.style.color = "rgb(255, 181, 0)";
    
})

circal3.addEventListener('mouseenter', () =>{
    text3.style.display = "block";
    icon3.style.color = "#fff";
    
})
circal3.addEventListener('mouseleave', () =>{
    text3.style.display = "none";
    icon3.style.color = "rgb(255, 181, 0)";
    
})

