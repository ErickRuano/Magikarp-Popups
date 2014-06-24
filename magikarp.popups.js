/*! Magikarp Popups 1.0
 * Â©2014 Erick Ruano - Magikarp Popups/license
 */

/**
 * @summary     Magikarp Popups
 * @description Easily call modern Popups
 * @version     1.0
 * @file        magikarp.popups.js
 * @author      Erick Ruano
 * @contact     erickaleruano@gmail.com
 * @copyright   Copyright 2014 Erick Ruano
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://opensource.org/licenses/MIT
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 */

	$(document).on( "click", "*[data-social-popup]", function() {
		var popupData = $(this).attr('data-social-popup');
		var popupData = popupData.split( ';' );
		var popupData2 = popupData[2].split( ':btn:' );
		var cycle = popupData2.length;
		var toolbox = '';
		for(i = 1; i < cycle; i++){
			var popupData3 = popupData2[i].split( '-' );
			toolbox = toolbox + '<div class="SocialPopupsButton" style="background:'+popupData3[1]+'" onclick="'+popupData3[2]+'()">'+popupData3[0]+'</div>';
		}
		var theater = '<div class="SocialPopupsTheater"></div>';
		$('body').append(theater);
		$('.SocialPopupsTheater').css({
		  'position': 'fixed',
		  'top': '0px',
		  'left': '0px',
		  'width': '100%',
		  'height': '100%',
		  'opacity': '0.8',
		  'background-color': '#222',
		  'z-index': '999999999999999999'
		});
		var form = '<div class="SocialPopupsContainer"><div class="SocialPopupsHeader">'+popupData[0]+'</div><div class="SocialPopupsContent">'+popupData[1]+'</div><div class="SocialPopupsTools"><center>'+toolbox+'</center></div></div>';
		$('body').append(form);
		$('.SocialPopupsContainer').css({
		  'position': 'fixed',
		  'top': '50%',
		  'left': '50%',
		  'width': '600',
		  'height': 'auto',
		  'margin-left': '-300',
		  'background-color': '#fff',
		  'z-index': '999999999999999999',
		  'padding': '20px',
		  'display': 'none'
		});
		$('.SocialPopupsHeader').css({
		  'margin-bottom': '24px',
		  'width': '100%',
		  'height': 'auto',
		  'color': '#404041',
		  'font-family': 'lato',
		  'font-size': '24px',
		  'font-weight': '400',
		  'z-index': '999999999999999999'
		});
		$('.SocialPopupsContent').css({
		  'margin-bottom': '24px',
		  'width': '100%',
		  'height': 'auto',
		  'color': '#404041',
		  'font-family': 'lato',
		  'font-size': '16px',
		  'font-weight': '400',
		  'z-index': '999999999999999999'
		});
		$('.SocialPopupsTools').css({
		  'width': '100%',
		  'height': '40px',
		  'border-top-style': 'solid',
		  'border-top-color': '#fcfcfc',
		  'border-top-width': '1px',
		  'z-index': '999999999999999999'
		});
		var buttonCount = $('.SocialPopupsButton').length;
		var buttonWidth = 600/buttonCount;
		var buttonWidth = buttonWidth - 10;
		$('.SocialPopupsButton').css({
		  'width': buttonWidth,
		  'height': '32px',
		  'color': '#fff',
		  'font-family': 'lato',
		  'font-size': '14px',
		  'font-weight': '400',
		  'margin': '5px',
		  'display': 'inline-block',
		  'margin-bottom': '0',
		  'line-height': '32px',
		  'cursor': 'pointer'
		});
		
		
		
		var popuph = $('.SocialPopupsContainer').height();
		var popuph = popuph/2;
		var popuph = '-'+popuph;
		$('.SocialPopupsContainer').css('margin-top', popuph);
		$('.SocialPopupsContainer').show('puff',200);
		
		$('.SocialPopupsTheater').click(function(){
			SocialPopupsHide();
		});

		$(document).keyup(function(e){
			if(e.which == 27){
				SocialPopupsHide();
			}
		});
		
	});
		function SocialPopupsHide(){
			$('.SocialPopupsContainer').hide('puff',{complete: function(){
				$('.SocialPopupsContainer').remove();
				$('.SocialPopupsTheater').remove();
			}},300);	
		}		
