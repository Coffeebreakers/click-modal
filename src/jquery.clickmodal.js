jQuery.fn.modal = function(options){
	
	// VERIFICANDO O HREF
	if(!options){
		if(this.attr('href')) var options = { url: this.attr('href') };
	} else {
		if(!options.url)if(this.attr('href')) options.url = this.attr('href');
	}
	
	var settings = {
		url: '#',
		backgroundColor: '#000',
		backgroundOpacity: 0.5,
		position: 'center',
		referencePosition: this,
		top:0,
		left:0,
		closeEsc:true,
		closeClickOut: false,
		autoOpen: false
	};
	options = jQuery.extend(settings, options);
	
	
	function openModal(){
		/*CREATE ELEMENTS*/
		$('body').append($('<img />').attr({src: "img/load.gif", width: 88, height: 78, alt: "", className: 'load'})).append($('<div></div>').addClass('bg_modal')).append($('<div></div>').addClass('view_modal'));
		
		// verificando se o body é menor do que o screen
		var altura = $('html')[0].scrollHeight < $(window).height() ? $(window).height() : $('html')[0].scrollHeight;
		$('.bg_modal').width($('html')[0].scrollWidth).height(altura);
		
		/*OPACITY*/
		if(options.backgroundOpacity != 0){
			$('.bg_modal').css('background-color',options.backgroundColor);
			$('.view_modal').css('opacity', 0);
			$('.bg_modal').css('opacity', 0);
		}
		
		// escondendo selects
		$('select').css('visibility', 'hidden');

		// posicionamento
		if(options.position=='relative'){
			var offset  = options.referencePosition.offset();
			leftModal = offset.left;		
			topModal =  offset.top;		
		}
		
		/*SHOW BACKGROUND*/
		$('.bg_modal').fadeTo('fast', options.backgroundOpacity, function() {
			$('.view_modal').load(options.url,{nocacheattr:(new Date()).getTime()}, function() {
			
				/*REMOVE LOAD*/
				$('.load').remove();
				
				GB_getPageScrollTop = function() {
					var yScrolltop;
					if (self.pageYOffset) {
						yScrolltop = self.pageYOffset;
					} else if (document.documentElement && document.documentElement.scrollTop || document.documentElement.scrollLeft) {
						yScrolltop = document.documentElement.scrollTop;
					} else if (document.body) {
						yScrolltop = document.body.scrollTop;
					}
					return yScrolltop;
				}
				
				/*CENTRALIZE MODAL*/
				if(options.position!='center'){
					var alturaModal = parseInt(options.top) + parseInt(topModal) + parseInt($('.view_modal').height());
					if(altura<alturaModal){
						options.top = 0;
						topModal = altura - parseInt($('.view_modal').height());
					}					
					$('.view_modal').css({
							marginTop: topModal, 
							marginLeft: leftModal,
							left: options.left,
							top: options.top
						}
					);
					
				} else {
					$('.view_modal').css({marginTop: parseInt(GB_getPageScrollTop() - ($('.view_modal').height()/2)), marginLeft: -parseInt($('.view_modal').width()/2)});
				}

				/*MODAL HIDE*/
				if(options.backgroundOpacity != 0) $('.view_modal').fadeTo('fast', 1);

				/*CLOSE MODAL*/
				$("a[rel='modalclose']").click(function() {
					closeModal();
					return false;
				})
			});
		});		
		
		
		if(options.closeClickOut==true){
			$('.bg_modal').click(function(){
				closeModal();
			});
		}
		

		if(options.closeEsc==true){
			$(window).keydown(function(event){
				if(event.keyCode==27)closeModal();
			});
		}
		return false;
	}
	


	if(options.autoOpen == false){
		this.click(openModal);	
	} else {
		openModal();
	}
	
	
	
	
	/*CLOSE MODAL*/
	function closeModal(){
		/*HIDE MODAL*/
		$('.view_modal').fadeTo('fast', 0, function(){$(this).remove();});
		
		/*HIDE BACKGROUND*/
		$('.bg_modal').fadeTo('fast', 0, function() {
			$(this).remove();
			$('select').css('visibility', 'visible');
		});
		
		$(window).unbind();
		$('.bg_modal').unbind();
	}	

	
	this.css('visibility','visible');
};

$(document).ready(function(){
	$('a[rel="modal"]').each(function(){
		$(this).modal();	
	});
});

