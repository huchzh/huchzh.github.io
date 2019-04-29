$(document).ready(function() {

	function exposeLightbox() {
		document.getElementById('lightbox-overlay').classList.remove('hidden');
		var lightbox = 'moment-' + $(this).attr('id').slice(7,8) + '-description';
		document.getElementById(lightbox).classList.remove('hidden');
		document.getElementById(lightbox).classList.add('exposed');
	}

	function exposePicLightbox() {
		document.getElementById('lightbox-overlay').classList.remove('hidden');
		var pic = $(this).attr('id').slice(5,10) + '-pic';
		document.getElementById(pic).classList.remove('hidden');
		document.getElementById(pic).classList.add('exposed');
	}

	function hideAllLightboxes() {
		document.getElementById('lightbox-overlay').classList.add('hidden');
		for (var i = 1; i <=6; i++) {
			var lightbox = 'moment-' + i + '-description';
			document.getElementById(lightbox).classList.remove('exposed');
			document.getElementById(lightbox).classList.add('hidden');
		}
		for (var i = 6; i <=8; i++) {
			for (var j = 1; j <= 8; j++) {
				var pic = '201' + i + j + '-pic';
				document.getElementById(pic).classList.remove('exposed');
				document.getElementById(pic).classList.add('hidden');
			}
		}
	}

	function changeYear() {
		for(var i = 2016; i <= 2018; i++) {
			var yearItem = "cluster-" + i;
			var year = "year-" + i;
			document.getElementById(yearItem).classList.add('hidden');
			document.getElementById(year).classList.remove('selected');
		}

		var activeYear = "cluster-" + $(this).attr('id').slice(5,10);
		var year = $(this).attr('id');
		document.getElementById(activeYear).classList.remove('hidden');
		document.getElementById(year).classList.add('selected');
	}

	document.getElementById('moment-1').onclick = exposeLightbox;
	document.getElementById('moment-2').onclick = exposeLightbox;
	document.getElementById('moment-3').onclick = exposeLightbox;
	document.getElementById('moment-4').onclick = exposeLightbox;
	document.getElementById('moment-5').onclick = exposeLightbox;
	document.getElementById('moment-6').onclick = exposeLightbox;
	document.getElementById('lightbox-overlay').onclick = hideAllLightboxes;

	document.getElementById('year-20161').onclick = exposePicLightbox;
	document.getElementById('year-20162').onclick = exposePicLightbox;
	document.getElementById('year-20163').onclick = exposePicLightbox;
	document.getElementById('year-20164').onclick = exposePicLightbox;
	document.getElementById('year-20165').onclick = exposePicLightbox;
	document.getElementById('year-20166').onclick = exposePicLightbox;
	document.getElementById('year-20167').onclick = exposePicLightbox;
	document.getElementById('year-20168').onclick = exposePicLightbox;

	document.getElementById('year-20171').onclick = exposePicLightbox;
	document.getElementById('year-20172').onclick = exposePicLightbox;
	document.getElementById('year-20173').onclick = exposePicLightbox;
	document.getElementById('year-20174').onclick = exposePicLightbox;
	document.getElementById('year-20175').onclick = exposePicLightbox;
	document.getElementById('year-20176').onclick = exposePicLightbox;
	document.getElementById('year-20177').onclick = exposePicLightbox;
	document.getElementById('year-20178').onclick = exposePicLightbox;

	document.getElementById('year-20181').onclick = exposePicLightbox;
	document.getElementById('year-20182').onclick = exposePicLightbox;
	document.getElementById('year-20183').onclick = exposePicLightbox;
	document.getElementById('year-20184').onclick = exposePicLightbox;
	document.getElementById('year-20185').onclick = exposePicLightbox;
	document.getElementById('year-20186').onclick = exposePicLightbox;
	document.getElementById('year-20187').onclick = exposePicLightbox;
	document.getElementById('year-20188').onclick = exposePicLightbox;

	document.getElementById('year-2016').onclick = changeYear;
	document.getElementById('year-2017').onclick = changeYear;
	document.getElementById('year-2018').onclick = changeYear;
});