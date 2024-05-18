document.addEventListener('DOMContentLoaded',function(){
    var sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(function(sidebaritem){
        sidebaritem.addEventListener('click',function(event){
            // event.preventDefault();
            sidebarItems.forEach(function(li){
                li.classList.remove('active');
            })
            sidebaritem.classList.add('active');
            let currentLocation =  window.location.href;
            console.log(currentLocation);
        })
    })
})

