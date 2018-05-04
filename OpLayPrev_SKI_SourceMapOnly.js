 
 var sourcebase = new ol.source.BingMaps({
				key: 'AgQRwdWCKHZjOU-fQDBXp1sy8t3AJcjhvGeI4FCBMomdQ8wHBHnGsFdhZLD24cUR',
				imagerySet: 'Aerial'
			})
 
 var view1 = new ol.View({
		center: ol.proj.fromLonLat([-106.79358,37.47476]),
		zoom: 16
		});
 
 var raster = new ol.layer.Tile({
        source: sourcebase,
		opacity: .5
		
      });

	  
	  
	  
//var basemap_tiled = new ol.layer.Tile({
// source: new ol.source.TileWMS({
// url: 'https://services.nationalmap.gov/arcgis/services/Contours/MapServer/WmsServer',
// params: {
// LAYERS: '18,19',
// FORMAT: 'image/svg+xml',
// TRANSPARENT: true
// }, 
//	})
//})	  
	  
	  
	  
	  
//      var source = new ol.source.Vector();
//      var vector = new ol.layer.Vector({
//        source: source,
//        style: new ol.style.Style({
//          fill: new ol.style.Fill({
//            color: 'rgba(255, 255, 255, 0.2)'
//          }),
//          stroke: new ol.style.Stroke({
//            color: '#ffcc33',
//            width: 2
//          }),
//          image: new ol.style.Circle({
//            radius: 7,
//            fill: new ol.style.Fill({
//              color: '#ffcc33'
//            })
//          })
//        })
//      });

//	  var water_color = [0,0,250,.5]
	  
//	  var blocks_kml_roads = new ol.layer.Vector({
//		source: new ol.source.Vector({
//		url: 'https://wbuckler.github.io/portfolio/roads.kml',
//		projection: 'EPSG:3857',
//		format: new ol.format.KML({extractStyles:false})
			
//		})
//		})

//		var blocks_kml_water = new ol.layer.Vector({
//		source: new ol.source.Vector({
//		url: 'https://wbuckler.github.io/portfolio/water.kml',
//		projection: 'EPSG:3857',
//		format: new ol.format.KML({extractStyles:false})
			
//		}),
//		style:new ol.style.Style({
//			stroke: new ol.style.Stroke({
//			color: water_color,
//			width: 7
//			})
//		})
//		})
	  
	  
      var map = new ol.Map({
        layers: [raster],
        target: 'map1',
        view: view1

        })

		

//      var modify = new ol.interaction.Modify({source: source});
//      map.addInteraction(modify);

//      var draw, snap; // global so we can remove them later
//      var typeSelect = document.getElementById('type');

//      function addInteractions() {
//        draw = new ol.interaction.Draw({
//          source: source,
//          type: typeSelect.value
//        });
//        map.addInteraction(draw);
//        snap = new ol.interaction.Snap({source: source});
//        map.addInteraction(snap);

//      }

//      /**
//       * Handle change event.
//       */
//      typeSelect.onchange = function() {
//        map.removeInteraction(draw);
//        map.removeInteraction(snap);
//        addInteractions();
//      };
//
//      addInteractions();
	  
