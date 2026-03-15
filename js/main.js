const counters=document.querySelectorAll(".stat h3");

const animateCounter=(el)=>{
const target=+el.dataset.count;
let count=0;

const update=()=>{

count+=Math.ceil(target/40);

if(count>=target){
el.innerText=target+"+";
return;
}

el.innerText=count;
requestAnimationFrame(update);
}

update();
}

counters.forEach(c=>animateCounter(c));