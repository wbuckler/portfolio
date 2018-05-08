
///////////////////////////////////////////////////////////////////////////////
//   5 Exam LAYERS 


///////////////////////////////////////////////////////////////////////////////
// set a projection to recall throughout the map
var projection = ol.proj.get('EPSG:3857');

///////////////////////////////////////////////////////////////////////////////
// define some styles   https://wbuckler.github.io/portfolio/

var block_color = [0,255,0,.1]
var block_line_color = [0,255,0,1]
var county_color = [124,124,255,.25]
var county_line_color = [124,124,255,1]

var county_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: county_color
	}),
	stroke: new ol.style.Stroke({
	  color: county_line_color,
	  width: 2
	}),
});

var block_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: block_color
	}),
	stroke: new ol.style.Stroke({
	  color: block_line_color,
	  width: 1
	}),
});

///////////////////////////////////////////////////////////////////////////////
// BASE MAP    https://wbuckler.github.io/portfolio/


var basemap_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		url: 'http://internetmapping.net:8080/geoserver/wms?',
		params: {'LAYERS':'ws_WHB:35106-A5'},
	})
});



///////////////////////////////////////////////////////////////////////////////   
//  Displays natural protected areas.  Although these areas may have already suffered damaged, it would not be the US Army's interest to inflict further manmade damage.
var natarea = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: 'http://internetmapping.net:8080/geoserver/wms?',
		params: {'LAYERS':'ws_WHB:35106-A5_CONT'},
	})
});



///////////////////////////////////////////////////////////////////////////////   
//   Displays the anticipated effect of flooding from a dam failure, which is the Lago El Guineo Dam, Orocovis, Puerto Rico, on a sunny day.
var damfail = new ol.layer.Image({
	source: new ol.source.ImageWMS({
//		attributions: new ol.Attribution({
//			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
//		}),
		url: 'http://internetmapping.net:8080/geoserver/wms?',
		params: {'LAYERS':'ws_WHB:35106-A6'},
//		serverType: 'geoserver'
	})
});



///////////////////////////////////////////////////////////////////////////////   
//  Displays a sampling of assessment of water quality at selected wells 
var watersam = new ol.layer.Image({
	source: new ol.source.ImageWMS({
//		attributions: new ol.Attribution({
//			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
//		}),
		url: 'http://internetmapping.net:8080/geoserver/wms?',
		params: {'LAYERS':'ws_WHB:35106-A6_CONT'},
//		serverType: 'geoserver'
	})
});



///////////////////////////////////////////////////////////////////////////////   
//   Displays water ways within Puerto Rico
var waterway = new ol.layer.Image({
	source: new ol.source.ImageWMS({
//		attributions: new ol.Attribution({
//			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
//		}),
		url: 'http://internetmapping.net:8080/geoserver/wms?',
		params: {'LAYERS':'ws_WHB:tgr2006se_bern_lka'},
//		serverType: 'geoserver'
	})
});



///////////////////////////////////////////////////////////////////////////////   
// create our base map objects https://wbuckler.github.io/portfolio/   34.749631, -106.129672
var tested = new ol.Map({
	target: 'testing',
	layers: [basemap_tiled, natarea, damfail,watersam, waterway], 
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.59107,34.13]),
		zoom:17,
		projection: projection
		})
	});
