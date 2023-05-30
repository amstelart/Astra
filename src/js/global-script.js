// Если на проекте jQuery
$( document ).ready(function() {
  // code

  AOS.init();

  $('.accordion-group').ariaAccordion({});

  $('.tab-group').ariaTabs({});

  $('.v-tab-group').ariaTabs({
    tabGroupIdPrefix: 'v-tab-group--',
    navClass: 'v-tab-group__tab-nav',
    listClass: 'v-tab-group__tab-ul',
    listItemClass: 'v-tab-group__tab-li',
    btnClass: 'v-tab-group__tab-btn',
    panelsContainerClass: 'v-tab-group__tabs-cont',
    panelClass: 'v-tab-group__tabpanel',
    contentClass: 'v-tab-group__tab-content',
    btnSelectedClass: 'v-tab-group__tab-btn_selected'
  });

  $('.brief-box').ariaTabs({
    tabGroupIdPrefix: 'brief-box--',
    navClass: 'brief-box__tab-nav',
    listClass: 'brief-box__tab-ul',
    listItemClass: 'brief-box__tab-li',
    btnClass: 'brief-box__tab-btn',
    panelsContainerClass: 'brief-box__tabs-cont',
    panelClass: 'brief-box__tabpanel',
    contentClass: 'brief-box__tab-content',
    btnSelectedClass: 'brief-box__tab-btn_selected'
  });

  $("#carousel-project").owlCarousel({
    items: 3,
    nav: true,
    navText: ["<div class='nav-button owl-prev'><span></span>Prev</div>", "<div class='nav-button owl-next'>Next<span></span></div>"],
    loop: true,
    center: false,
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 1,
      },
      768 : {
        items: 1,
      },
      992 : {
        items: 2,
      },
      1200 : {
        items: 2,
      },
      1800 : {
        items: 2,
      }
    }
  });
});

// Изоляция без jQuery
(function(){
  // code
  if (window.innerWidth > 1200) {
    document.addEventListener("mousemove", (e) => {
      for(const card of document.getElementsByClassName("stats-num-card")) {
        const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    });
  };
}());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
