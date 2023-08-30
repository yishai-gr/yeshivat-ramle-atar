var sections = document.getElementsByClassName("section");
var colors = ["white", "lightblue", "darkblue", "darkblue"];
// ^^ לשנות אחרי שמוסיפים את חלק 3
var position = 0;
function change_bg() {
  for (var i = position; i < sections.length; i++) {
    sections[i].style.backgroundColor = colors[position];
  }
}
document.onscroll = function () {
  for (var i = 0; i < sections.length; i++) {
    if (
      (document.body.scrollTop || document.documentElement.scrollTop) >
      sections[i].offsetTop - window.innerHeight * 0.8
    ) {
      position = i;
      change_bg();
    }
  }
};
