


	var sourcebase = new ol.source.BingMaps({
				key: 'AgQRwdWCKHZjOU-fQDBXp1sy8t3AJcjhvGeI4FCBMomdQ8wHBHnGsFdhZLD24cUR',
				imagerySet: 'Aerial'
			})



// MY BASE************************************************************
	var Layer_Bing_aerial = new ol.layer.Tile({
			source: sourcebase
		});
// MY BASE************************************************************
	
//	var raster = new ol.layer.Tile({
//        source: new ol.source.OSM()
//      });

 	
// MY BASE************************************************************	
	var view1 = new ol.View({
		center: ol.proj.fromLonLat([-106.79358,37.47476]),
		zoom: 16
		});


	
	
// MY BASE************************************************************	
var map = new ol.Map({
		target: 'map1',
 // a map without layers can be defined and in that case a map with no layers
 // will be rendered
	layers: [
		Layer_Bing_aerial
		],
		view: view1 
 });



 // create a map with options specified in a separate 'options' variable and
 // included by reference in the code to create the new map object 
 // optional options - only include those that you need
//	controls: ...,
//	pixelRatio: ...,
//	interactions:[
var source = new ol.source.Vector();
var vector = new ol.layer.Vector({
		source: source,
		style: new ol.style.Style({
				fill: new ol.style.Fill({
				color: 'rgba(255, 255, 255, 0.2)'
			}),
			stroke: new ol.style.Stroke({
				color: '#ffcc33',
				width: 2
			}),
			image: new ol.style.Circle({
				radius: 7,
				fill: new ol.style.Fill({
					color: '#ffcc33'
				})
			})
		})
    });

	  var modify = new ol.interaction.Modify({source: source});
      map.addInteraction(modify);

      var draw, snap; // global so we can remove them later
      var typeSelect = document.getElementById('type');

      function addInteractions() {
        draw = new ol.interaction.Draw({
          source: source,
          type: typeSelect.value
        });
        map.addInteraction(draw);
        snap = new ol.interaction.Snap({source: source});
        map.addInteraction(snap);

      }

      /**
       * Handle change event.
       */
      typeSelect.onchange = function() {
        map.removeInteraction(draw);
        map.removeInteraction(snap);
        addInteractions();
      };

      addInteractions();

 


//	keyboardEventTarget: ...,
//	loadTilesWhileAnimating: ...,
//	loadTilesWhileInteracting: ...,
//	logo: ...,
//	overlays: ...,
//	renderer: ...





// WMS
var basemap_tiled = new ol.layer.Tile({
9 source: new ol.source.TileWMS({
10 url: 'https://services.nationalmap.gov/arcgis/services/Contours/MapServer/WmsServer',
11 params: {
12 LAYERS: '18,19',
13 FORMAT: 'image/png',
14 TRANSPARENT: true
15 },
16 attributions: [
17 new ol.Attribution({
18 html: 'Data provided by the GEOG x85 GeoServer.'
19 })
20 ]
21 }	  
	  
	  
