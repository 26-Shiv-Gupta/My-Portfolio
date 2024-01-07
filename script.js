document.getElementsByClassName("bx-list-ul")[0].addEventListener('click', function(){
    document.getElementById('header-ul').style.transition = "width 0.5s ease"
    document.getElementById('header-ul').style.transform = "translateX(-100%)";
    document.getElementById('header-ul').style.width = "30vw";

    let lis = document.querySelectorAll('#header-container #right ul li');
    Array.from(lis).forEach(function(ele){
        ele.style.display = "block";
    });
});

document.getElementsByTagName('main')[0].addEventListener('click', function(){
    if (window.innerWidth < 600) {
        document.getElementById('header-ul').style.transition = "width 0.5s ease"
        document.getElementById('header-ul').style.width = "0vw";
        let lis = document.querySelectorAll('#header-container #right ul li');
        Array.from(lis).forEach(function(ele){
            ele.style.display = "none";
        });
    }
});

document.getElementById('edu-btn').addEventListener('click', function(){
    document.getElementById('edu').style.opacity = "1";
    document.getElementById('edu').style.transition = "opacity 0.2s";
    this.style.borderBottom = "4px solid #FC5D6D";
    document.getElementById('skills-btn').style.border = "none";
});

document.getElementById('skills-btn').addEventListener('click', function(){
    document.getElementById('edu').style.opacity = "0";
    this.style.borderBottom = "4px solid #FC5D6D";
    document.getElementById('edu-btn').style.border = "none";
});

