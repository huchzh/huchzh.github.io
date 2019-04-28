$(document).ready(function() {

	function exposeLightbox() {
		document.getElementById('lightbox-overlay').classList.remove('hidden');
		var lightbox = 'moment-' + $(this).attr('id').slice(7,8) + '-description';
		document.getElementById(lightbox).classList.remove('hidden');
		document.getElementById(lightbox).classList.add('exposed');
	}

	function hideAllLightboxes() {
		document.getElementById('lightbox-overlay').classList.add('hidden');
		for (var i = 1; i <=6; i++) {
			var lightbox = 'moment-' + i + '-description';
			document.getElementById(lightbox).classList.remove('exposed');
			document.getElementById(lightbox).classList.add('hidden');
		}
	}

	function changeYear() {


		for(var i = 2016; i <= 2018; i++) {
			var yearItem = "cluster-" + i;
			document.getElementById(yearItem).classList.add('hidden');
		}

		var activeYear = "cluster-" + $(this).attr('id').slice(5,10);
		console.log(activeYear);
		document.getElementById(activeYear).classList.remove('hidden');
	}

	document.getElementById('moment-1').onclick = exposeLightbox;
	document.getElementById('moment-2').onclick = exposeLightbox;
	document.getElementById('moment-3').onclick = exposeLightbox;
	document.getElementById('moment-4').onclick = exposeLightbox;
	document.getElementById('moment-5').onclick = exposeLightbox;
	document.getElementById('moment-6').onclick = exposeLightbox;
	document.getElementById('lightbox-overlay').onclick = hideAllLightboxes;

	document.getElementById('year-2016').onclick = changeYear;
	document.getElementById('year-2017').onclick = changeYear;
	document.getElementById('year-2018').onclick = changeYear;
});