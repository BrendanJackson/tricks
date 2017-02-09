var acc = document.getElementsByClassName("review-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    // var panel = this.document.getElementById("demo1");
	  if (panel.style.maxHeight){
  	  panel.style.maxHeight = null;
    } else {
  	  panel.style.maxHeight = panel.scrollHeight + 'px';
    } 
  }
}



$(document).ready(function(){
  // chevron up/down
  $(".review-button").on("click", function(){
     $(".review-button-chevron", this).toggleClass("fa-angle-up fa-angle-down");
  }); 
});
