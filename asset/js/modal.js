$.fn.multipleModal = function(){
	// body...
	$(this).click(function(){
		$("body").prepend('<div class="modal_bg_cover">');
		$("body").prepend('<div class="modal_container">');
		$(".modal_container").prepend('<div class="modal_header"><span class="modal_c">x</span></div><div class="modal_body"><div class="mb_scroll"></div></div><div class="modal_footer"></div>');
		
		var dataTitle = $(this).attr('data-title');
		var dataDescription = $(this).attr('data-description');
		$(".modal_header").append(dataTitle)
		$(".mb_scroll").append(dataDescription)
		
		$(".modal_c, .modal_bg_cover").click(function(){
			$(".modal_bg_cover").remove();
			$(".modal_container").remove();
		});
	});
}
$("a[data-title]").multipleModal();