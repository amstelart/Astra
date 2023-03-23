// Если на проекте jQuery
$( document ).ready(function() {
  // code
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
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

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
