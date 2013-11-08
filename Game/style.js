function getStyle() {
var a =
[	
	{ "featureType": "administrative",			"elementType": "labels.text",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "administrative",			"elementType":"geometry.stroke",		"stylers":[{"visibility":"on"}		,{"color":"#000000"}	,{"weight":1.0}		]},
	{ "featureType": "administrative",			"elementType":"geometry.fill",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "administrative",			"elementType":"labels.icon",			"stylers":[{"visibility":"off"}		,{"color":"#FF0000"}						]},
	{ "featureType": "administrative.locality",	"elementType":"labels.text.fill",		"stylers":[{"visibility":"off"}		,{"color":"#888888"}						]},
	{ "featureType": "administrative.locality",	"elementType":"labels.text.stroke",		"stylers":[{"visibility":"off"}		,{"color":"#FF0000"}						]},
	{ "featureType": "administrative.country",	"elementType":"labels.text.fill",		"stylers":[{"visibility":"on"}													]},		
	{ "featureType": "poi",						"elementType":"all",					"stylers":[{"visibility":"off"}													]},
	{ "featureType": "poi",						"elementType":"labels.text.fill",		"stylers":[{"visibility":"off"}		,{"color":"#555555"}						]},
	{ "featureType": "poi",						"elementType":"labels.text.stroke",		"stylers":[{"visibility":"off"}													]},
//	{ "featureType": "poi.attraction",			"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#FF0000"}						]},
//	{ "featureType": "poi.business",			"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#333333"}						]},
//	{ "featureType": "poi.goverment",			"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#DF3A01"}						]},
//	{ "featureType": "poi.school",				"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#DF3A01"}						]},
//	{ "featureType": "poi.park",				"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#A5DF00"}						]},
//	{ "featureType": "poi.medical",				"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#FF0000"}						]},
//	{ "featureType": "poi.sports_complex",		"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#333333"}						]},
//	{ "featureType": "poi.place_of_worship",	"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#333333"}						]},
	{ "featureType": "water",					"elementType":"all",					"stylers":[{"visibility":"on"}		,{"color":"#000000"}						]},
	{ "featureType": "landscape",				"elementType":"labels",					"stylers":[{"visibility":"off"}													]},
	{ "featureType": "landscape.natural",		"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#222222"}						]},
	{ "featureType": "landscape.man_made",		"elementType":"geometry.fill",			"stylers":[{"visibility":"on"}		,{"color":"#333333"}						]},
	{ "featureType": "road.highway",			"elementType":"all",					"stylers":[{"visibility":"on"}		,{"color":"#AAAAAA"}	,{"weight":0.2}		]},
	{ "featureType": "road.arterial",			"elementType":"all",					"stylers":[{"visibility":"on"}		,{"color":"#888888"}	,{"weight":0.2}		]},
	{ "featureType": "road.local",				"elementType":"all",					"stylers":[{"visibility":"on"}		,{"color":"#777777"}	,{"weight":0.2}		]},
	{ "featureType": "road.highway",			"elementType":"labels.icon",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "road.arterial",			"elementType":"labels.icon",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "road.local",				"elementType":"labels.icon",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "road.highway",			"elementType":"labels.text",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "road.arterial",			"elementType":"labels.text",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "road.local",				"elementType":"labels.text",			"stylers":[{"visibility":"off"}													]},
	{ "featureType": "transit",					"elementType":"all",					"stylers":[{"visibility":"off"}													]},
	{ "featureType": "transit.line",			"elementType":"geometry",				"stylers":[{"visibility":"on"}		,{"color":"#888888"}	,{"weight":1.0}		]},
	{ "featureType": "water",					"elementType":"labels",					"stylers":[{"visibility":"off"}]},
{}
]
;
return a;
}