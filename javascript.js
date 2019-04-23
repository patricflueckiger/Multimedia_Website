var slideIndex = 1;
showDivs("1", slideIndex);
//showDivs("2", slideIndex);
//showDivs("3", slideIndex);

function plusDivs(member ,n) {
 showDivs(member, slideIndex += n);
}

function showDivs(member, n) {
 var i;
 var x = document.getElementsByClassName(member + "HomeImg");
 if (n > x.length) {slideIndex = 1}
 if (n < 1) {slideIndex = x.length} ;
 for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
 }
 x[slideIndex-1].style.display = "block";
}
