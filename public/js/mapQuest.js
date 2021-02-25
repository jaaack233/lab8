function initMap() {
	// add your code here
	L.mapquest.key = '5J5lgOXPpc1YEc5VdAGUSZOYppMTMtRM';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
		center: [32.878507, -117.235873],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}