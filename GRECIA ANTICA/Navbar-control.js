var prevScrollpos = 1001;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
	
  if (prevScrollpos > currentScrollPos || currentScrollPos>prevScrollpos+1000) 
    document.getElementById("navbar").style.top = "0";
  else 
    document.getElementById("navbar").style.top = "-60px";
  
  prevScrollpos = currentScrollPos;
}