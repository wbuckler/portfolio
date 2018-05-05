// set a projection to recall throughout the map
var projection = ol.proj.get('EPSG:3857');

///////////////////////////////////////////////////////////////////////////////
// define some styles

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
// BASE MAP


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
})




var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'global:statep010'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})


///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var kmlMap = new ol.Map({
	target: 'testing',
	layers: [basemap_tiled,states_single], //[basemap_tiled,basemap_bern_tiled,blocks_kml,counties_kml]
	//layers: [basemap_tiled,basemap_bern_tiled,counties_kml],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.6224,35.0849]), // the approximate geographic center of the continental US
		zoom:5,
		projection: projection
		})
	});
