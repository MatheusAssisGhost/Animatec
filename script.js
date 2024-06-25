window.onscroll = function() {scrollfunction()};
    
function scrollFunction() {
    const buttonTop = document.getElementById('BackTop');
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        buttonTop.style.display = "block";
    } else {
        buttonTop.style.display = "none";
        
    }
}

function topFunction() {
    window.scrollTo({top:0, behavior: 'smooth'});
}