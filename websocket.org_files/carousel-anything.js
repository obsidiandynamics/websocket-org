// carousel anything
var $ =jQuery.noConflict();
$(document).ready(function() {
 
  $(".wowcarouselanything").owlCarousel({  
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      paginationSpeed : 700,
	  autoPlay : false,
	  autoHeight : true,
	  lazyLoad : true,
	  items : 1,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});