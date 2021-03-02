var nav_children = document.querySelector('.desktop-nav-shop').children;
var drop_children = document.querySelectorAll('.dropdown');

for (var i = 0; i < nav_children.length; i++) {
    (function(i){
        nav_children[i].addEventListener('mouseover', () => {
            drop_children[i].style.visibility = "visible";
            for(var x = 0; x < nav_children.length; x++){
                if( i != x){
                    drop_children[x].style.visibility = "hidden";
                }
            }

            drop_children[i].addEventListener('mouseover', () => {
                drop_children[i].style.visibility = "visible";
            })
        })

        nav_children[i].addEventListener('mouseenter', () => {
            drop_children[i].addEventListener('mouseout', () => {
                drop_children[i].style.visibility = "hidden";
            })
        })

    }(i));
}


/* 
for (var i = 0; i < nav_children.length; i++) {
    if(i === 0){
        nav_children[i].addEventListener('mouseover', () => {
            document.querySelector('.mens-dropdown').style.visibility = "visible";
            document.querySelector('.womens-dropdown').style.visibility = "hidden";
            document.querySelector('.accessories-dropdown').style.visibility = "hidden";
        })

        document.querySelector('.mens-dropdown').addEventListener('mouseover', () => {
            document.querySelector('.mens-dropdown').style.visibility = "visible";
            document.querySelector('.womens-dropdown').style.visibility = "hidden";
            document.querySelector('.accessories-dropdown').style.visibility = "hidden";
        })  

        document.querySelector('.mens-dropdown').addEventListener('mouseleave', () => {
            document.querySelector('.mens-dropdown').style.visibility = "hidden";
        }) 
    }

    if(i === 1){
        nav_children[i].addEventListener('mouseover', () => {
            document.querySelector('.womens-dropdown').style.visibility = "visible";
            document.querySelector('.mens-dropdown').style.visibility = "hidden";
            document.querySelector('.accessories-dropdown').style.visibility = "hidden";
        }) 
        
        document.querySelector('.womens-dropdown').addEventListener('mouseover', () => {
            document.querySelector('.womens-dropdown').style.visibility = "visible";
            document.querySelector('.mens-dropdown').style.visibility = "hidden";
            document.querySelector('.accessories-dropdown').style.visibility = "hidden";
        })  
        
        document.querySelector('.womens-dropdown').addEventListener('mouseleave', () => {
            document.querySelector('.womens-dropdown').style.visibility = "hidden";
        }) 
    }

    if(i === 2){
        nav_children[i].addEventListener('mouseover', () => {
            document.querySelector('.accessories-dropdown').style.visibility = "visible";
            document.querySelector('.mens-dropdown').style.visibility = "hidden";
            document.querySelector('.womens-dropdown').style.visibility = "hidden";
        })

        document.querySelector('.womens-dropdown').addEventListener('mouseover', () => {
            document.querySelector('.accessories-dropdown').style.visibility = "visible";
            document.querySelector('.mens-dropdown').style.visibility = "hidden";
            document.querySelector('.womens-dropdown').style.visibility = "hidden";
        })  
        
        document.querySelector('.accessories-dropdown').addEventListener('mouseleave', () => {
            document.querySelector('.accessories-dropdown').style.visibility = "hidden";
        }) 
    }

}

*/