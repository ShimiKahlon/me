

// Defines the scroll path 

$(document).ready(init);

function init() {

	$.fn.scrollPath("getPath")

	.moveTo(760, 350, {name: "about"})
	.lineTo(2130, 350, {name: "projects"})
	.lineTo(3500, 350, {name: "contact"});

	$("#wrapper").scrollPath({drawPath: false, wrapAround: false});

	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
			
			$("nav").fadeOut(2000, function() {
				$("nav").fadeIn('slow');
			});
		});
	});
}