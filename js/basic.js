var nav = document.getElementsByTagName("nav")[0];
var header = document.getElementsByTagName("header")[0];

function create_nav_and_footer() {
  var mobile_sticky = document.createElement("div");
  mobile_sticky.className = "mobile_sticky";
  mobile_sticky.innerHTML =
    '<img id="logo" src="images/logo.png" alt="לוגו" /><div class="hamburger"><div class="line"></div><div class="line"></div><div class="line"></div></div>';
  var all_site = document.getElementsByClassName("all_site")[0];
  all_site.appendChild(mobile_sticky);
  var date_text = document.getElementById("date").innerText;
  var nav_text =
    `<a id="index.html" href="/">
      <div class="logo">
      <img src="images/logo.png" id="logo_nav" />
        <i class="bi bi-house"></i>
      </div>
      בית
    </a>
    <a id="gallery.html" href="gallery.html">
      <i class="bi bi-images"></i>
      גלרית תמונות
    </a>
    <a id="info.html" href="info.html">
      <i class="bi bi-info-circle"></i>
      מידע לנרשמים
    </a>
    <a id="contact.html" href="contact.html">
      <i class="bi bi-telephone"></i>
      צור קשר
    </a>
    <div class="date">` +
    date_text +
    "</div>";
  nav.innerHTML = nav_text;
  var text_footer =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.3493288389519!2d34.86826045017644!3d31.93224239943796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502ca05d66a1593%3A0xb6909b1890a82694!2z15HXmSLXmyDXnteo15vXlteZ!5e0!3m2!1siw!2sil!4v1616065049175!5m2!1siw!2sil" width="400" height="300" style="border: 0" allowfullscreen loading="lazy"></iframe><div class="divP"><p>ישיבת תפארת שלמה</p><hr /><p>פלא\': 052-7985789</p><hr /><p>דוא"ל: tiferet375@gmail.com</p><hr /><p>רחוב סמולנסקין 31 רמלה</p></div>';
  var footer = document.createElement("footer");
  footer.innerHTML = text_footer;
  document.body.appendChild(footer);
  var credit = document.createElement("div");
  credit.id = "credit";
  credit.innerHTML = "יוצר האתר: ישי גרובמן";
  // הוספת הקרדיט לדף
  // document.body.getElementsByTagName("footer")[0].appendChild(credit);
  var name = window.location.pathname;
  var anchors = nav.getElementsByTagName("a");
  if (
    document.getElementsByTagName("header")[0].innerText ==
    "ישיבה תיכונית רמלה -'תפארת שלמה'"
  ) {
    var active = nav.getElementsByTagName("a")[0];
    active.classList.add("active");
    active.removeAttribute("href");
  } else {
    for (var i = 0; i < anchors.length; i++) {
      var href = anchors[i].id;
      if (name.indexOf(href) != -1) {
        var active = document.getElementById(href);
        active.classList.add("active");
        active.removeAttribute("href");
      }
    }
  }
}

function animations() {
  var mobile_sticky = document.getElementsByClassName("mobile_sticky")[0];
  window.onscroll = function () {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var header_height = document.getElementsByTagName("header")[0].offsetHeight;
    if (winScroll > header_height) {
      nav.classList.add("nav_scroll");
      mobile_sticky.classList.add("mobile_sticky_on_action");
    } else {
      nav.classList.remove("nav_scroll");
      mobile_sticky.classList.remove("mobile_sticky_on_action");
    }
  };
}

function download_buttons() {
  var down_btn = document.getElementsByClassName("download_button");
  for (var i = 0; i < down_btn.length; i++) {
    down_btn[i].innerHTML =
      '<i class="bi bi-download" aria-hidden="true" style="margin-left: 5px;"></i>' +
      down_btn[i].innerText;
  }
}

function hamburger() {
  var ham = document.getElementsByClassName("hamburger")[0];
  var mobile_sticky = document.getElementsByClassName("mobile_sticky")[0];
  var anchors = nav.getElementsByTagName("a");
  ham.onclick = function () {
    if (ham.classList[1] != "hamburger-x") {
      ham.classList.add("hamburger-x");
      nav.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
      for (var i = 0; i < anchors.length; i++) {
        anchors[i].style.transitionDelay = i * 0.3 + "s";
        anchors[i].style.opacity = 1;
      }
      nav.lastChild.style.transitionDelay = i * 0.3 + "s";
      nav.lastChild.style.opacity = 1;
      mobile_sticky.style.backgroundColor = "unset";
    } else {
      for (var i = 0; i < anchors.length; i++) {
        anchors[i].style.transitionDelay = "0s";
        anchors[i].style.opacity = 0;
      }
      nav.lastChild.style.transitionDelay = "0s";
      nav.lastChild.style.opacity = 0;
      ham.classList.remove("hamburger-x");
      nav.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
      mobile_sticky.style.backgroundColor = "white";
    }
  };
}

function main() {
  create_nav_and_footer();
  download_buttons();
  animations();
  hamburger();
}
main();
