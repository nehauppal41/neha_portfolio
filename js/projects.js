const projectData = [

{name:"NailShots",cat:"mobile",play:"https://play.google.com/store/apps/developer?id=NailShots"},

{name:"Pifster",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.app.pifster",web:"https://pifster.org"},

{name:"uCoachu",cat:"mobile",app:"https://apps.apple.com/nz/app/ucoachu-golf-swing-analyser/id1542132815"},

{name:"Bambook",cat:"mobile",play:"https://play.google.com/store/apps/details?id=org.bambook.scanner"},

{name:"Pictabase",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.emobx.pictabase"},

{name:"Doctor UI",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.doctor.ui"},

{name:"MedzNat",cat:"mobile",play:"https://play.google.com/store/apps/details?id=medz.nat"},

{name:"Silver FM",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.silver.FM"},

{name:"Gold FM",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.gold.FM"},

{name:"Fabso",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.fabso.app"},

{name:"Bypass Lines",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.app.bypasslines"},

{name:"Handy Waste",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.app.handywasteapp"},

{name:"Six Element",cat:"media",play:"https://play.google.com/store/apps/details?id=com.app.six_element"},

{name:"iHariyali Guard",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.emobx.ihariyaliguard"},

{name:"Hygea Customer",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.hygea.customer"},

{name:"Hygea Cleaner",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.hygea.hygeaclener"},

{name:"HR Service Provider",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.emobx.hrpropertyserviceprovider"},

{name:"HR Property Maintenance",cat:"mobile",play:"https://play.google.com/store/apps/details?id=com.emobx.hrpropertymaintenance"},

{name:"RadioCity",cat:"media",play:"https://play.google.com/store/apps/details?id=com.radiocity.mbl"},

{name:"Hair App",private:true},
{name:"Swan",private:true},
{name:"Panic Go",private:true},
{name:"Chhatbir Zoo",cat:"iot",private:true},
{name:"BTTV",cat:"media",private:true},
{name:"Satluj Network",cat:"media",private:true},
{name:"6th Element",cat:"media",private:true}

];

function renderProjects(filter="all"){

const container=document.getElementById("projects");
container.innerHTML="";

projectData.forEach(p=>{

if(filter!="all" && p.cat!=filter) return;

let icons="";

if(p.play) icons+=`<a href="${p.play}" target="_blank"><img src="assets/icons/playstore.svg"></a>`;
if(p.app) icons+=`<a href="${p.app}" target="_blank"><img src="assets/icons/appstore.svg"></a>`;
if(p.web) icons+=`<a href="${p.web}" target="_blank"><img src="assets/icons/web.svg"></a>`;

let note=p.private?"<p>Private Client Project</p>":"";

container.innerHTML+=`

<div class="project">
<h3>${p.name}</h3>
${note}
<div class="project-icons">${icons}</div>
</div>

`;

});

}

function filterProjects(cat){
renderProjects(cat);
}

renderProjects();