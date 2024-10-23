var map = L.map('map').setView([39.55, -105.0], 12);
var basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
var topoMap = L.tileLayer(basemapUrl, {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'}).addTo(map);

// additional map option
var satMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Communit'
});

// add coffee JSON
var coffee = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.01925710040472,
            39.62367742264652
          ]
        },
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -104.9878828024063,
            39.583526095874475
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.00576299365416,
            39.61276103373385
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.11081942475141,
            39.56709159633124
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.09038497548538,
            39.60609787740174
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -104.95721866284427,
            39.60897590839926
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.10930875503034,
            39.62342896232573
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.07484822928782,
            39.48494834328858
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.12783939900024,
            39.58131306918395
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.08046439902924,
            39.5671956929921
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -104.98733159485259,
            39.623720115336
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.00763583377912,
            39.55357532308736
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -104.9991589097617,
            39.549090693792635
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -104.94218382777012,
            39.52610444175957
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -104.94220295173456,
            39.543970568599576
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Starbucks",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -104.92813589121323,
            39.593414659298816
          ]
        }
      }
    ]
};

var coffeeShops = L.geoJSON(coffee, {
    pointToLayer: function(feature, latlng) {
        var coffeeIcon = L.icon({
            iconUrl: 'starbucksLogo.png',
            iconSize: [40, 40],
        });
        return L.marker(latlng, {icon: coffeeIcon});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>Name: <b>` + feature.properties.name)
    }
}).addTo(map);

// add bookstore JSON
var books = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Barnes & Noble",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.08947101719515,
            39.6091859612078
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "2nd & Charles",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.09310093864917,
            39.61758495691484
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Tattered Cover",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.02514736070769,
            39.58644206101988
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Spell Books",
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.01567768160103,
            39.613548028102514
          ]
        }
      }
    ]
};

var bookStores = L.geoJSON(books, {
    pointToLayer: function(feature, latlng) {
        var bookIcon = L.icon({
            iconUrl: 'books.png',
            iconSize: [40, 40],
        });
        return L.marker(latlng, {icon: bookIcon});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>Name: <b>` + feature.properties.name)
    }
}).addTo(map);

// create map layer group
var baseMaps = {
    "ArcGIS World Imagery": satMap,
    "ArcGIS World Topo": topoMap,
};

// create point layer groups
var overlayMaps = {
    "Coffee": coffeeShops,
    "Bookstores": bookStores,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

