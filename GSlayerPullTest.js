///////////////////////////////////////////////////////////////////////////////
//   The five layers presented below will help the user understand how to offer assistance to the Puerto Rican people.
//In the aftermath of Hurricane Maria, parts of Puerto Rico have become inaccessible due to widespread damage.  By accounting for  
//aspects of the island that would present the greatest impedance, relief can be rendered.  That's why factoring how water ways 
//are prone to flooding, affect urban areas and natural habitats, and sources of drinking water are all major considerations that
//should be noted. 


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
	url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?',
	  params: {
		LAYERS: 0,
		FORMAT: 'image/png',
		TRANSPARENT: true
	  },
	  attributions: [
	    new ol.Attribution({
		html: 'Data provided by the <a href="http://basemap.nationalmap.gov">National Map</a>.'
		})
	  ]
	})
});



///////////////////////////////////////////////////////////////////////////////   
//  Displays natural protected areas.  Although these areas may have already suffered damaged, it would not be the US Army's interest to inflict further manmade damage.
var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: 'http://internetmapping.net:8080/geoserver/kbene/wms?',
		params: {'LAYERS':'ws_WHB:CLCC_PACAT_PR_PAs_sept2015_version2'},
	})
});



///////////////////////////////////////////////////////////////////////////////   
//   Displays the anticipated effect of flooding from a dam failure, which is the Lago El Guineo Dam, Orocovis, Puerto Rico, on a sunny day.
var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
//		attributions: new ol.Attribution({
//			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
//		}),
		url: 'http://internetmapping.net:8080/geoserver/kbene/wms?',
		params: {'LAYERS':'ws_WHB:guineo_sunny_day'},
//		serverType: 'geoserver'
	})
});



///////////////////////////////////////////////////////////////////////////////   
//  Displays a sampling of assessment of water quality at selected wells 
var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
//		attributions: new ol.Attribution({
//			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
//		}),
		url: 'http://internetmapping.net:8080/geoserver/kbene/wms?',
		params: {'LAYERS':'ws_WHB:gwqw2016'},
//		serverType: 'geoserver'
	})
});



///////////////////////////////////////////////////////////////////////////////   
//   Displays water ways within Puerto Rico
var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
//		attributions: new ol.Attribution({
//			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
//		}),
		url: 'http://internetmapping.net:8080/geoserver/kbene/wms?',
		params: {'LAYERS':'ws_WHB:Inland_Waterway_Lines'},
//		serverType: 'geoserver'
	})
});



///////////////////////////////////////////////////////////////////////////////   
//Displays sections of Puerto Rico that are urban centers
var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
//		attributions: new ol.Attribution({
//			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
//		}),
		url: 'http://internetmapping.net:8080/geoserver/kbene/wms?',
		params: {'LAYERS':'ws_WHB:UrbanizedArea'},
//		serverType: 'geoserver'
	})
});


///////////////////////////////////////////////////////////////////////////////   
// create our base map objects https://wbuckler.github.io/portfolio/   
var tested = new ol.Map({
	target: 'testing',
	layers: [basemap_tiled, states_single], 
	view: new ol.View({
		center: ol.proj.fromLonLat([-66.548375,18.246950]), // the approximate geographic center of the Puerto Rico
		zoom:9,
		projection: projection
		})
	});
