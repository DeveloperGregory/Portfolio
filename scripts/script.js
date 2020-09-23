var headerProjects = document.getElementById('projects-div');
var contentProjects = document.getElementById('projects-content');
var headerSkills = document.getElementById('header-tech-skills');
var contentTechSkills = document.getElementById('tech-skills')

function collapse(){
    contentProjects.className = 'heading-content';
    contentTechSkills.className = 'heading-content';
    
}
function expand(selected){
    collapse();
    selected.className = 'show-content'
    
}

headerProjects.addEventListener('click', function(){expand(contentProjects)});
headerSkills.addEventListener('click',function(){expand(contentTechSkills)});