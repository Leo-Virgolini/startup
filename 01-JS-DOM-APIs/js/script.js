

/*
document.addEventListener("DOMContentLoaded", function() {
  unhide();
});
*/

window.onload = function() {
  unhide();
};

function unhide() {
   document.getElementsByTagName("section")[0].style.visibility = "visible";
}

var button = document.getElementById("ok");
button.onclick = function joke() {

	var xmlhttp = new XMLHttpRequest();
    var url = "random.xml";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
            console.log(myArr);
            console.log(myArr.first);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        document.getElementById("joke").innerHTML = arr.value.joke;;
    }
}
