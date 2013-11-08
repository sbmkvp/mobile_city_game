google.maps.visualRefresh = true;
var map;
var ptsArr = [];
var counter = 0;
var geocoder;

function drawMap () {
	geocoder = new google.maps.Geocoder();
	var styles = getStyle();
	var styledMap = new google.maps.StyledMapType(styles,{name: "Dark"});
	var options = {
		zoom: 2,
		center: new google.maps.LatLng(40,0),
		keyboardShortcuts: true,
		draggableCursor: 'crosshair',
		backgroundColor: "#000000",
		disableDefaultUI: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			mapTypeIds: ['map_style',google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.SATELLITE],
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position:google.maps.ControlPosition.TOP_RIGHT
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.TOP_LEFT
		},
		disableDoubleClickZoom: false
	};
	map = new google.maps.Map(document.getElementById('map'), options);

	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	google.maps.event.addListener(map,'click',function (event) {markPoint(event.latLng)});
};


function markPoint(loc) {
	var image = new google.maps.MarkerImage('mr1.png', new google.maps.Size(10,10), new google.maps.Point(0,0), new google.maps.Point(5,5));
	marker = new google.maps.Marker({
		position: loc,
		title:"Point_"+counter,
		map: map,
		draggable: false,
		icon: image
	});
	ptsArr.push(marker);
	counter++;
};

function markStations() {
	var data = getData();
	var image = new google.maps.MarkerImage('mr1.png', new google.maps.Size(10,10), new google.maps.Point(0,0), new google.maps.Point(5,5));
	for (i in data.stations) {
		var loc = new google.maps.LatLng(data.stations[i].lat,data.stations[i].lon);
		marker = new google.maps.Marker({
			position: loc,
			title:data.stations[i].name,
			map: map,
			draggable: false,
			icon: image
		});
		ptsArr.push(marker);
	}
}