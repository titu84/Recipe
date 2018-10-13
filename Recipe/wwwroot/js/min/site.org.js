(() => {
    let switchSidebar = document.querySelector("#switchSidebar");
    let sidebar = document.querySelector("#sidebar");
    let bodyContent = document.querySelector("#body-content");    
    switchSidebar.addEventListener("click", toggleSidebar)
    window.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);
    window.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchstartX - touchendX > 100 && !sidebar.classList.contains("hidenElement")) {
            toggleSidebar()            
        }  
        else if (touchendX - touchstartX > 100 && sidebar.classList.contains("hidenElement")) {
            toggleSidebar()
        }
        else
            return
    }
    function toggleSidebar() {
        sidebar.classList.toggle("hidenElement");
        bodyContent.classList.toggle("bodyContentSmall");
        switchSidebar.classList.contains("fa-angle-double-up") ? switchSidebar.classList.replace("fa-angle-double-up", "fa-angle-double-down") : switchSidebar.classList.replace("fa-angle-double-down", "fa-angle-double-up");
    } 
})();