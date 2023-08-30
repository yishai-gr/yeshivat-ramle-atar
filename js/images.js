var active_tab = "";
var tabs = document.getElementById("tabs").children;
var images_area = document.getElementById("images_area").children;
var url = window.location.hash;
url = url.slice(3, url.length);
var title = document.getElementsByTagName("title")[0];
var title_text = " | גלריה | ישיבת תפארת שלמה";
active_tab = url;
function loop_on_images() {
  for (var j = 0; j < tabs.length; j++) {
    if (tabs[j].id == active_tab) {
      tabs[j].classList.add("active_tab");
      title.innerText = tabs[j].innerText + title_text;
    } else {
      tabs[j].classList.remove("active_tab");
    }
  }
  for (var k = 0; k < images_area.length; k++) {
    if (images_area[k].id == "images-" + active_tab) {
      images_area[k].style.display = "grid";
    } else {
      images_area[k].style.display = "none";
    }
  }
}
loop_on_images();
for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function () {
    active_tab = this.id;
    window.location.hash = "#g_" + this.id;
    loop_on_images();
  };
}
var big_image = document.getElementById("big_image");
function scale_image(element) {
  var src = element.getElementsByTagName("img")[0].getAttribute("src");
  big_image.style.transform = "scale(1)";
  big_image.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  big_image
    .getElementsByClassName("big_image")[0]
    .getElementsByTagName("img")[0]
    .setAttribute("src", src);
}

document.getElementById("close").onclick = function () {
  big_image.style.transform = "scale(0.0001)";
  big_image.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
};

window.onkeydown = function (e) {
  if (e.key == "Escape") {
    big_image.style.transform = "scale(0.0001)";
    big_image.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  }
};
document.getElementById("new_tab").onclick = function () {
  var src = document
    .getElementById("big_image")
    .getElementsByTagName("img")[0].src;
  window.open(src, "_blank").focus();
};
var volunteerings_images = [
  "תמונת הצגה.jpg",
  "WhatsApp Image 2021-10-01 at 11.20.17 (2).jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.17 (3).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.05 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.07 (2).jpeg",
];

var trips_images = [
  "1656802813046.jpg",
  "1656802813141.jpg",
  "1656802813240.jpg",
  "1657108378960.jpg",
  "1657108379297.jpg",
  "1657108379349.jpg",
  "1657191183725.jpg",
  "1657728380400.jpg",
  "1657728380440.jpg",
  "1663516848155.jpg",
  "1663516848220.jpg",
  "WhatsApp Image 2021-09-30 at 16.03.59 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.03.59.jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.00 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.01 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.03 (2).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.03.jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.07 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.08.jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.11.jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.13 (2).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.18.jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.44.jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.48.jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.02 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.03.jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.06.jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.08.jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.10 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.11 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.49 (3).jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.49.jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.50 (1).jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.50.jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.12 (1).jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.13.jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.18 (1).jpeg",
  "WhatsApp Image 2022-09-08 at 21.23.43.jpeg",
  "image13.JPG",
  "image3.JPG",
  "image5.JPG",
  "image6.JPG",
  "image9.JPG",
];
var events_images = [
  "1638136557297.jpg",
  "1638136557328.jpg",
  "1638136557346.jpg",
  "1638136557359.jpg",
  "1657191182196.jpg",
  "1657648407336.jpg",
  "1663489043211.jpg",
  "1664782847684.jpg",
  "1664866002487.jpg",
  "1664866002650.jpg",
  "WhatsApp Image 2021-09-30 at 16.04.11 (2).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.12 (2).jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.00 (2).jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.00.jpeg",
  "WhatsApp Image 2021-09-30 at 16.05.01 (1).jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.19 (1).jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.19.jpeg",
  "חידון חנוכה 1.jpg",
  "חידון חנוכה 2.jpg",
  "חידון חנוכה 3.jpg",
];
var learning_images = [
  "1638044799686.jpg",
  "1638044799695.jpg",
  "1656802812951.jpg",
  "1657191182079.jpg",
  "1657191182449.jpg",
  "1669789134027.jpg",
  "IMG-20211125-WA0023.jpg",
  "WhatsApp Image 2021-09-30 at 16.04.04.jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.05 (2).jpeg",
  "WhatsApp Image 2021-09-30 at 16.04.06 (1).jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.14 (1).jpeg",
  "WhatsApp Image 2021-10-01 at 11.20.16.jpeg",
  "image1.JPG",
  "התוועדות עם הרב אהרלה הראל.jpg",
];
function add_images() {
  for (var a = 0; a < volunteerings_images.length; a++) {
    var volunteerings_images_area = document.getElementById(
      "images-volunteerings"
    );
    volunteerings_images_area.innerHTML += add_image(
      volunteerings_images[a],
      "volunteerings"
    );
  }
  for (var a = 0; a < trips_images.length; a++) {
    var trips_images_area = document.getElementById("images-trips");
    trips_images_area.innerHTML += add_image(trips_images[a], "trips");
  }
  for (var a = 0; a < events_images.length; a++) {
    var events_images_area = document.getElementById("images-events");
    events_images_area.innerHTML += add_image(events_images[a], "events");
  }
  for (var a = 0; a < learning_images.length; a++) {
    var learning_images_area = document.getElementById("images-learning");
    learning_images_area.innerHTML += add_image(learning_images[a], "learning");
  }
}
function add_image(src, type) {
  var before_src_and_alt =
    "<div class='image' onclick='scale_image(this)'><img src='";
  var src_and_alt = "images/" + type + "/" + src + "' alt='" + src + "'";
  var after_src_and_alt =
    " /><div class='overlay'><i class='bi bi-box-arrow-up-right'></i></div></div>";
  var image = before_src_and_alt + src_and_alt + after_src_and_alt;
  return image;
}
add_images();

var previos_image_button = document.getElementById("previos_image");
previos_image_button.onclick = function () {
  var current_src = big_image
    .getElementsByTagName("img")[0]
    .getAttribute("src");
  current_src = current_src.substring(current_src.indexOf("/") + 1);
  current_src = current_src.substring(current_src.indexOf("/") + 1);
  if (volunteerings_images.indexOf(current_src) != -1) {
    var index =
      (volunteerings_images.indexOf(current_src) + 1) %
      volunteerings_images.length;
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute(
        "src",
        "images/volunteerings/" + volunteerings_images[index]
      );
  }
  if (trips_images.indexOf(current_src) != -1) {
    var index = (trips_images.indexOf(current_src) + 1) % trips_images.length;
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute("src", "images/trips/" + trips_images[index]);
  }
  if (events_images.indexOf(current_src) != -1) {
    var index = (events_images.indexOf(current_src) + 1) % events_images.length;
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute("src", "images/events/" + events_images[index]);
  }
  if (learning_images.indexOf(current_src) != -1) {
    var index =
      (learning_images.indexOf(current_src) + 1) % learning_images.length;
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute("src", "images/learning/" + learning_images[index]);
  }
};
var next_image_button = document.getElementById("next_image");
next_image_button.onclick = function () {
  var current_src = big_image
    .getElementsByTagName("img")[0]
    .getAttribute("src");
  current_src = current_src.substring(current_src.indexOf("/") + 1);
  current_src = current_src.substring(current_src.indexOf("/") + 1);
  if (volunteerings_images.indexOf(current_src) != -1) {
    var index = volunteerings_images.indexOf(current_src) - 1;
    if (index == -1) {
      index = volunteerings_images.length - 1;
    }
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute(
        "src",
        "images/volunteerings/" + volunteerings_images[index]
      );
  }
  if (trips_images.indexOf(current_src) != -1) {
    var index = trips_images.indexOf(current_src) - 1;
    if (index == -1) {
      index = trips_images.length - 1;
    }
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute("src", "images/trips/" + trips_images[index]);
  }
  if (events_images.indexOf(current_src) != -1) {
    var index = events_images.indexOf(current_src) - 1;
    if (index == -1) {
      index = events_images.length - 1;
    }
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute("src", "images/events/" + events_images[index]);
  }
  if (learning_images.indexOf(current_src) != -1) {
    var index = learning_images.indexOf(current_src) - 1;
    if (index == -1) {
      index = learning_images.length - 1;
    }
    big_image
      .getElementsByTagName("img")[0]
      .setAttribute("src", "images/learning/" + learning_images[index]);
  }
};
function open_in_new() {
  var src = document
    .getElementById("big_image")
    .getElementsByTagName("img")[0]
    .getAttribute("src");
  window.open(src, "_blank").focus();
}
if (window.innerWidth < 768) {
  var images = document.getElementsByClassName("image");
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", open_in_new);
  }
}
