const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach((el) => {

const top = el.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(top < trigger){
el.classList.add("active");
}

});

});


// Lazy load projects

setTimeout(()=>{

const projects = [
{
name:"Sample Project",
tech:"PHP, MySQL",
link:"#"
},
{
name:"Automation Platform",
tech:"NodeJS, API",
link:"#"
}
];

const container = document.getElementById("projects-container");

projects.forEach(p=>{

const card = document.createElement("div");
card.className="project-card";

card.innerHTML = `
<h3>${p.name}</h3>
<p>${p.tech}</p>
<a href="${p.link}" target="_blank">View Project</a>
`;

container.appendChild(card);

});

},1500);