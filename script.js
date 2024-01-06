let header_a = document.querySelectorAll("#right ul li a");
Array.from(header_a).forEach(function(ele){
    ele.addEventListener('click', function(){
        let temp = this;
        temp.setAttribute("class", "active");
        Array.from(header_a).forEach(function(ele){
            if(ele != temp)
                ele.removeAttribute('class', 'active');
        });
    });
});

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

});
document.getElementById('skills-btn').addEventListener('click', function(){
    document.getElementById('edu').style.opacity = "0";
});

