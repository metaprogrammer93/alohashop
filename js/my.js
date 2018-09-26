$(function() {

	$('.bxslider').bxSlider( {
		slideWidth:0,
		speed: 500,
		controls: false,
		mode: 'horizontal',
		 minSlides: 1,
         maxSlides: 4,
         moveSlides: 1,
         slideMargin: 0
	});


   $('.optin-form').on('submit',function(event) {

		event.preventDefault();

		var inputValue = $('#email-input').val();

		if ( inputValue.length !== 0) {

			alert('Thanks for your submission.');

		} else {

			alert('Please fill out the text field');
		}
   	});


});
