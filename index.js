// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeInterval(showSlides,2000);// Change image every 2 seconds
//   console.log("slide index:", slideIndex);
// }

// function plusDivs(n) {
// 		 slideIndex += n;
// 		 showSlides(slideIndex);
// 		 console.log("inside plusDivs", slideIndex);
// 	}



window.onload=function(){
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
};


$('#select-beast').selectize({
					create: true,
					sortField: {
						field: 'text',
						direction: 'asc'
					},
					dropdownParent: 'body'
});

function initialize() {
	  var mapOptions = {
	  zoom: 7,
	  center: new google.maps.LatLng(28.9913522, -85.4145614),
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false,
	  navigationControl: false,
	  mapTypeControl: false,
	  scaleControl: false
	};

	var styles = [
	  {
	    stylers: [
		  {saturation: -100}
	    ]
	  }
	];

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var mapType = new google.maps.StyledMapType(styles, {name: "Grayscale"});
	map.mapTypes.set('grayMap', mapType);
	map.setMapTypeId('grayMap');

	// var myLatlng = new google.maps.LatLng(28.541638, -81.368941);
	var myLatlng = new google.maps.LatLng(28.5556405, -81.3775403);


	var imgDigitalUs = {
	  url: 'https://www.solodev.com/assets/contact-us-page/digitalus-marker.png',
	  size: new google.maps.Size(244, 182),
	  origin: new google.maps.Point(0, 0),
	  anchor: new google.maps.Point(24, 54)
	};

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'DigitalUs',
	    icon: imgDigitalUs
	  });
	}

	function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  //script.src = 'http://maps.google.com/maps/api/js?sensor=false';
	  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAvNegdMhrApxE5o7jlPEHGS-gk03rxgUc&sensor=false&callback=initialize';
	  document.body.appendChild(script);
	}

	window.onload = loadScript;
  
  
  
  
  <!-- The following code is only needed at JSFiddle -->
function JSFiddleSubmit()
{
    alert("Cannot properly submit data on JS Fiddle. Please view our GitHub repository for the full deployment source code: https://github.com/solodev/impressive-contact-us-page");
    //return false;
};