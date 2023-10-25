let val = 0;
let page;

if (performance.navigation.type == performance.navigation.TYPE_RELOAD)
  window.location = "index.html";

function load() {
  page = document.title;
  var a = document.getElementById('srclink');

  a.onclick = function () {
    if (val != 0) {
      page = document.getElementById(val).innerHTML;
      localStorage.setItem("name", page);
      return true;
    }
    return false;
  }
}

function change(vall) {
  val = vall;
  if (val != 0)
    page = document.getElementById(val).innerHTML;
  document.getElementById('src').innerHTML = document.getElementById(val).innerHTML;
}

//dropdown
function f() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
