var institutions ={
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "Id": 0, "Institution": "National Fisheries Resources Research Institute, Jinja, Uganda (NaFIRRI)", "Website": "http://www.firi.go.ug/" },  "geometry": { "type": "Point", "coordinates": [ 33.207125, 0.416849 ] } },
{ "type": "Feature", "properties": { "Id": 1, "Institution": "Tanzania Fisheries Research Institute, Twanza, Tanzania (TAFIRI)", "Website": "http://www.tafiri.go.tz/" }, "geometry": { "type": "Point", "coordinates": [ 32.8891, -2.561383, ] } },
{ "type": "Feature", "properties": { "Id": 2, "Institution": "Kenya Marine and Fisheries Reserach Institute, Kisumu, Kenya (KMFRI)", "Website": "http://www.kmfri.co.ke/"  }, "geometry": { "type": "Point", "coordinates": [ 34.737710, -0.088413 ] } }
]
};

f = L.geoJson(institutions, {
					onEachFeature: function (feature, layer){
						popupOptions = {maxWidth: 250};
						layer.bindPopup("<b>Research Instituition:</b> " +'<a target="_blank" href="'+ feature.properties.Website + '"> '+ feature.properties.Institution + '</a>'
						,popupOptions);
						}
						})
						
