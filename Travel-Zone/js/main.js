
jQuery(document).ready(function(){

	jQuery(".btn-arrow").click(function(){
		      				
				var thisnew = jQuery(this).parent().parent();
				var myelement = jQuery(this).attr("data-id");
				 jQuery('.'+myelement).flexslider({
						  animation: "slide",
						  animationSpeed: 400,
						  animationLoop: false,
						  itemWidth: 295,
						  itemMargin: 30,
						  minItems: 2, // use function to pull in initial value
         				  maxItems: 4, // use function to pull in initial value
						  start: function(slider){
							jQuery('body').removeClass('loading');
							flexslider = slider;
							 jQuery('.flexslider3').resize();
          				}
        			});
    			jQuery("#"+myelement).slideToggle("slow");  
    			jQuery(".destination-packeges-description:visible").not("#"+myelement).hide();
				jQuery(".destination-packeges").not(thisnew).removeClass('intro');
				jQuery(".discription").not(thisnew).removeClass('intro');
				jQuery(".venue").not(thisnew).removeClass('intro');
				jQuery(this).parent().parent().toggleClass('intro');
				  
	 });
 });