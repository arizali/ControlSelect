(function ( $ ) {
    $.fn.SelectControl = function( options ) {
         var settings = $.extend({
            current: "data-current",
            dataUrl: "extra/kategori.php",
            wrapper: "#option",
            append: '<option value="">Tüm Türler</option>',
			idtitle: "id" 
        }, options );
 
		var id = this.attr(settings.current);
		if(id==0 || id=="") {
		$(settings.wrapper).attr("disabled","disabled");	
		$(settings.wrapper).html(settings.append);
		} else {
		$.ajax
		({	
		type: "POST",
		url: settings.dataUrl,
		data: settings.idtitle+"=" + id,
		cache: false,
		success: function(html)
		{
		$(settings.wrapper).removeAttr("disabled");	
		$(settings.wrapper).html(settings.append+html);
		} 
		});
		}			 
    };
 
}( jQuery ));