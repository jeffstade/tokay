$(function() {
	$('#simple_sketch').sketch();
	$('.tools').on('click', 'a', highlightTool);

});

function highlightTool(e) {
	e.preventDefault();
	$('.tools a').removeClass('selectedTool');
	$(this).addClass('selectedTool');
}