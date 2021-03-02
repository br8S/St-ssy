//AS SOON AS PAGE IS LOADED
//DESKTOP VIEW
if(window.innerWidth > 800){
    document.querySelectorAll('.grid-box').forEach( box => {
        var height = window.innerWidth/24;
        var width = height/1.24;
        box.style.height = height + "vh";
        box.style.width = width + "vh";

        document.querySelector('.content').style.height = height*4.2 + "vh";
    })
}

//MOBILE VIEW
else {
    document.querySelectorAll('.grid-box').forEach( box => {
        var height = window.innerWidth/7;
        var width = height/0.62;
        box.style.height = height + "vh";
        box.style.width = width + "vh";

        document.querySelector('.content').style.height = height*6.45 + "vh";
    })
}

//UPON WINDOW RESIZE
window.onresize = function (event) {
//DESKTOP VIEW
    if(window.innerWidth > 800){
        document.querySelectorAll('.grid-box').forEach( box => {
            var height = window.innerWidth/24;
            var width = height/1.24;
            box.style.height = height + "vh";
            box.style.width = width + "vh";

            document.querySelector('.content').style.height = height*4.2 + "vh";
        })
    }
//MOBILE VIEW
    else {
        document.querySelectorAll('.grid-box').forEach( box => {
            var height = window.innerWidth/7;
            var width = height/0.62;
            box.style.height = height + "vh";
            box.style.width = width + "vh";

            document.querySelector('.content').style.height = height*6.45 + "vh";
        })
    }
}


