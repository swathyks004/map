var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ff_1 = new ol.format.GeoJSON();
var features_ff_1 = format_ff_1.readFeatures(json_ff_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ff_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ff_1.addFeatures(features_ff_1);
var lyr_ff_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ff_1, 
                style: style_ff_1,
                popuplayertitle: 'ff',
                interactive: true,
                title: '<img src="styles/legend/ff_1.png" /> ff'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ff_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ff_1];
lyr_ff_1.set('fieldAliases', {'Name': 'Name', 'Sample ID': 'Sample ID', 'District': 'District', 'Bore Date': 'Bore Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SOTR': 'SOTR', 'Borelog': 'Borelog', 'Soilreport': 'Soilreport', });
lyr_ff_1.set('fieldImages', {'Name': '', 'Sample ID': '', 'District': '', 'Bore Date': '', 'Latitude': '', 'Longitude': '', 'SOTR': '', 'Borelog': '', 'Soilreport': '', });
lyr_ff_1.set('fieldLabels', {'Name': 'inline label - visible with data', 'Sample ID': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Bore Date': 'no label', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'SOTR': 'no label', 'Borelog': 'no label', 'Soilreport': 'no label', });
lyr_ff_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});