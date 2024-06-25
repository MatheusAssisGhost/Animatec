window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    const BackTop = document.getElementById("BackTop");
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        BackTop.style.display = "block";
    } else {
        BackTop.style.display = "none";
        
    }
}

function topFunction() {
    window.scrollTo({top:0, behavior: 'smooth'});
}