function initialize(){
    displayAboutUs();
    createCopyright();
    loadModalList();
    setNoPageTransition();
}

function setNoPageTransition(){
    $.extend( $.mobile , {
        defaultPageTransition: 'none'
    });
}