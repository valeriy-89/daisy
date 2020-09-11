$(document).ready(function(){
    $(".toggle-menu").click(function(){
        $("nav ul").slideToggle("500");
    });
    $(window).resize(function(){
    	if($(window).width() > 768){
    		$("nav ul").removeAttr("style");
    	}
    });
});
///
var Menu = {
  
  el: {
    ham: $('.toggle-menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();

///SLIDER
$('.single-item').slick();
///TABS
$( function() {
    $( "#tabs" ).tabs();
} );
