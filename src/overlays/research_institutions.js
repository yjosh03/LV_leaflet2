var institutions ={
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "Id": 0, "Institutio": "National Fisheries Resources Research Institute, Jijna, Uganda (NaFIRRI)", "Website": "http://www.firi.go.ug/" }, "geometry": { "type": "Point", "coordinates": [ 33.207678, 0.416974 ] } },
{ "type": "Feature", "properties": { "Id": 0, "Institutio": "Tanzania Fisheries Research Institute, Ilemela, Tanzania (TAFIRI)", "Website": "http://www.tafiri.go.tz/" }, "geometry": { "type": "Point", "coordinates": [ 32.8882537,-2.5607068 ] } },
{ "type": "Feature", "properties": { "Id": 0, "Institutio": "Kenya Marine and Fisheries Reserach Institute, Kisumu, Kenya (KMFRI)", "Website": "http://www.kmfri.co.ke/" }, "geometry": { "type": "Point", "coordinates": [ 34.7370179, -0.0883357 ] } }
]
};
f = L.geoJson(institutions, {
					onEachFeature: function (feature, layer){
						popupOptions = {maxWidth: 250};
						layer.bindPopup("<b>Research Instituition:</b> " +'<a target="_blank" href="'+ feature.properties.Website + '"> '+ feature.properties.Institution + '</a>'
						,popupOptions);
						}
						})
