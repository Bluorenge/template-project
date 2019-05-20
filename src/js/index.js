// Плавная прокрутка
var featuresBlock = document.getElementById("features");
var scrollBtn = document.querySelector(".banner__scroll-wrap");

function handleButtonClick() {
  featuresBlock.scrollIntoView({ block: "start", behavior: "smooth" });
}

scrollBtn.addEventListener("click", handleButtonClick);

// Создание плавающего меню
window.onscroll = function showHeader() {
  var pageHeader = document.querySelector(".page-header");
  if (window.pageYOffset > 115) {
    pageHeader.classList.add("page-header--fixed");
  } else {
    pageHeader.classList.remove("page-header--fixed");
  }
};

// Открытие/закрытие главного меню
var menuPopupOpen = document.querySelector(".page-header__toggle-wrap"),
  menuPopup = document.querySelector(".page-header__nav");

menuPopupOpen.addEventListener("click", function() {
  menuPopup.classList.contains("page-header__nav--close")
    ? (menuPopupOpen.classList.add("page-header__toggle-wrap--cross"),
      menuPopup.classList.remove("page-header__nav--close"),
      menuPopup.classList.add("page-header__nav--open"))
    : (menuPopupOpen.classList.remove("page-header__toggle-wrap--cross"),
      menuPopup.classList.add("page-header__nav--close"),
      menuPopup.classList.remove("page-header__nav--open"));
});

// Создание яндекс карты
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7
  });
}
