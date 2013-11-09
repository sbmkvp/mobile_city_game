//Telling google maps to use the new style of maps
google.maps.visualRefresh = true;

// Creating Global Variables for storing the map and station points.
var map;
var stations = [];
var infoWindow = new google.maps.InfoWindow();

//This function creates the map object with certain specifications and applies it to the map canvas in the html file.
function drawMap () {
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
		zoomControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.TOP_LEFT
		},
		disableDoubleClickZoom: false,
	};
	map = new google.maps.Map(document.getElementById('map'), options);

	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
};

//This function gets the data from the data.js file and creates a marker for each one of them.
function markStations() {
	var data = getData();
	var bounds = new google.maps.LatLngBounds();
	for (i in data.stations) {
		var loc = new google.maps.LatLng(data.stations[i].lat,data.stations[i].lon);

		//this part defines how the markers are to be shown basically the size and look of the markers.
		marker = new google.maps.Marker({
			position: loc,
			title:data.stations[i].name,
			map: map,
			draggable: false,
			icon: new google.maps.MarkerImage('mr1.png', new google.maps.Size(10,10), new google.maps.Point(0,0), new google.maps.Point(5,5)),
		});
		
		// this part of the code tells the map to produce the infoWindow when the marker is clicked.
		google.maps.event.addListener(marker,'click', function(){
			infoWindow.setContent(this.title);
			infoWindow.open(map, this);
		});
		
		stations.push(marker);
		bounds.extend(loc);
	}
	map.fitBounds(bounds);
}