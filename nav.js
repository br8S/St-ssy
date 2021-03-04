var nav_children = document.querySelector('.desktop-nav-shop').children;
var drop_children = document.querySelectorAll('.dropdown');

for(var i = 0; i < nav_children.length; i++){
    (function(i){
        if(i == 0){
            document.querySelector('.exit').addEventListener('click', () => {
                document.querySelector('.desktop-nav-shop').style.display = 'none';
                for(var x = 1; x < nav_children.length; x++){
                    drop_children[x-1].style.display = 'none';
                }
            })
        }
        else {
            nav_children[i].addEventListener('click', () => {
                console.log(i)
                drop_children[i-1].style.display = 'flex';
            })
        }
    }(i));
}

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.desktop-nav-shop').style.display = 'flex';
})

/*
document.querySelector('.exit').addEventListener('click', () => {
    document.querySelector('.desktop-nav-shop').style.display = 'none';
    for(var i = 0; i < nav_children.length; i++){
        drop_children[i].style.display = 'none';
    }
})

*/

/*

var nav_children = document.querySelector('.desktop-nav-shop').children;
var drop_children = document.querySelectorAll('.dropdown');

for (var i = 0; i < nav_children.length; i++) {
    (function(i){

        //TAKES CARE OF MAKING DROP NAV VISIBILE ON HOVER IF ONE IS ON ALL OTHERS OFF
        nav_children[i].addEventListener('mouseover', () => {
            drop_children[i].style.visibility = "visible";
            for(var x = 0; x < nav_children.length; x++){
                if( i != x){
                    drop_children[x].style.visibility = "hidden";
                }
            }
        })

        //TAKES CARE OF MAKING HIDDEN
        
        drop_children[i].addEventListener('mouseleave', () => {
            drop_children[i].style.visibility = "hidden";
        })

    }(i));
}

*/