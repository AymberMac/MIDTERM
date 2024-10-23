var map = L.map('map').setView([39.55, -105.0], 12);
var basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
var topoMap = L.tileLayer(basemapUrl, {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'}).addTo(map);

// additional map option
var satMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Communit'
});

// create map layer group
var baseMaps = {
    "ArcGIS World Imagery": satMap,
    "ArcGIS World Topo": topoMap,
};

var layerControl = L.control.layers(baseMaps).addTo(map);

// add coffee JSON
var coffeeShops = L.geoJSON(coffee, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>Name: <b>` + feature.properties.name)
    },
	style: {
        radius: 10,
        fillColor: "#196f3d",
    }
}).addTo(map);

// add bookstore JSON
var bookStores = L.geoJSON(books, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>Name: <b>` + feature.properties.name)
    },
    style: {
        radius: 10,
        fillColor: "#f1c40f",
    }
}).addTo(map);
