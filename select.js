(function ( $ ) {
    $.fn.SelectControl = function( options ) {
         var settings = $.extend({
            current: "data-current",
            dataUrl: "options.php",
            wrapper: "#option",
            append: '<option value="">Some Options</option>',
			idtitle: "id",
			id2title: "id2" 
        }, options );
 
		var id = this.attr(settings.current);
		var id2 = $(settings.wrapper).attr(settings.current);
		if(id==0 || id=="") {
		$(settings.wrapper).attr("disabled","disabled");	
		$(settings.wrapper).html(settings.append);
		} else {
		if(id2==""||id2==0){ var dataString = settings.idtitle+"=" + id; } else { var dataString = settings.idtitle+"=" + id+"&"+settings.id2title+"="+id2; }
		$.ajax
		({	
		type: "POST",
		url: settings.dataUrl,
		data: dataString,
		cache: false,
		success: function(html)
		{ $(settings.wrapper).removeAttr("disabled");	
		  $(settings.wrapper).html(html);
		} }); }	};
 
}( jQuery ));