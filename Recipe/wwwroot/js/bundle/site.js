function ksAjax(method, url, callback, withCredentials) {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = withCredentials
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(this)
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}
(() => {     
    document.onreadystatechange = function (e) {
        if (document.readyState === 'complete') {
            if (window.innerWidth < 767) {
                toggleSidebar()
            }
        }
    };
    window.addEventListener('resize', function (event) {
        if (window.innerWidth < 767) {
            
        }
    });
    //window.addEventListener('load', function (event) {
    //    if (window.innerWidth < 767) {
    //        toggleSidebar()
    //    }
    //});
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
    if (touchstartX - touchendX > 100 && sidebar.classList.contains("hidenElement")) {
        toggleSidebar()
    }
    else if (touchendX - touchstartX > 100 && !sidebar.classList.contains("hidenElement")) {
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
}) ();

function show() {
    ksAjax('GET', url, x, true)
}
function x(v) {
    alert(v.response)
}
(()=>{let l=document.querySelector("#switchSidebar"),t=document.querySelector("#sidebar"),a=(document.body,document.querySelector("#body-content"));e.addEventListener("click",()=>{t.classList.toggle("hidenElement"),a.classList.toggle("bodyContentSmall"),l.classList.contains("fa-angle-double-up")?e.classList.replace("fa-angle-double-up","fa-angle-double-down"):e.classList.replace("fa-angle-double-down","fa-angle-double-up")})})();
(()=>{let l=document.querySelector("#switchSidebar"),t=document.querySelector("#sidebar"),a=(document.body,document.querySelector("#body-content"));e.addEventListener("click",()=>{t.classList.toggle("hidenElement"),a.classList.toggle("bodyContentSmall"),l.classList.contains("fa-angle-double-up")?e.classList.replace("fa-angle-double-up","fa-angle-double-down"):e.classList.replace("fa-angle-double-down","fa-angle-double-up")})})();