let navBar=document.getElementById('navbar__list');
let section=document.querySelectorAll('section');
let button =document.querySelector('button');

//create list and links  for sections
function navList(){
for(let lis of section){
    let list=document.createElement('li');
    list.innerHTML=`<a href="#${lis.id}" data-nav="${lis.id}"  class="menu__link">${lis.dataset.nav}</a>`;
    navBar.append(list);
}
}
navList();

// when you click on nav links will go smoothly to the correct section
navBar.addEventListener("click",(tolis)=>{
    tolis.preventDefault();
    if(tolis.target.dataset.nav){
      document.getElementById(`${tolis.target.dataset.nav}`)
              .scrollIntoView({behavior:"smooth"});
    }
  });

//for scroll top smoothly by button up
button.onclick=function(){
 window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
 });
}

window.onscroll=function(){
  //for active section when you click on link from menu
    document.querySelectorAll('section').forEach(function(active){
        if(active.getBoundingClientRect().top >= -350&&
        active.getBoundingClientRect().top <= 250
        ){
            active.classList.add("your-active-class");
        }else{
            active.classList.remove("your-active-class");
        }
    })
    //for make button visible or  hide when you scroll 
    if(window.scrollY >= 400 ){
        button.style.display="block";
    }else{
        button.style.display="none";
    }
}