var headerIntro = document.getElementById('intro');
var introContent = document.getElementById('intro-content');
var headerProjects = document.getElementById('projects-div');
var introProjects = document.getElementById('projects-content');

function collapse(){
    introContent.className = 'label-header';
    introProjects.className = 'label-header';
}
function expand(selected){
    collapse();
    if(selected == 'header'){
        introContent.className = 'show-header';
    }
    if(selected == 'projects'){
        introProjects.className = 'show-header'; 
    }
}

headerIntro.addEventListener('click', function(){expand('header')});
headerProjects.addEventListener('click', function(){expand('projects')});