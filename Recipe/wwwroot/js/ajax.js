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