var headerIntro = document.getElementById('intro');
var contentIntro = document.getElementById('intro-content');
var headerProjects = document.getElementById('projects-div');
var contentProjects = document.getElementById('projects-content');
var headerSkills = document.getElementById('header-tech-skills');
var contentTechSkills = document.getElementById('tech-skills')

function collapse(){
    contentIntro.className = 'heading-content';
    contentProjects.className = 'heading-content';
    contentTechSkills.className = 'heading-content';
    
}
function expand(selected){
    collapse();
    selected.className = 'show-content'
    
}

headerIntro.addEventListener('click', function(){expand(contentIntro)});
headerProjects.addEventListener('click', function(){expand(contentProjects)});
headerSkills.addEventListener('click',function(){expand(contentTechSkills)});