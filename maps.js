<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
  <title>CSVLayer - 4.1</title>

  <style>
    html,
    body,
    #viewDiv {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  </style>

  <link rel="stylesheet" href="https://js.arcgis.com/4.1/esri/css/main.css">
  <script src="https://js.arcgis.com/4.1/"></script>

  <script>
    require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/renderers/SimpleRenderer",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/config",
      "esri/core/urlUtils",
      "dojo/domReady!"
    ], function(
      Map,
      CSVLayer,
      MapView,
      SimpleRenderer,
      SimpleMarkerSymbol,
      esriConfig,
      urlUtils) {

      var url =
        "C:\Users\Freddie R\AppData\Local\Temp\Camini.csv";
      // If CSV files are not on the same domain as your website, a CORS enabled server or a proxy is required.
      //esriConfig.request.corsEnabledServers.push(url);
      });

      var map = new Map({
        basemap: "gray"
      });

      // attributes in CSV file
      // time,latitude,longitude,depth,mag,magType,nst,gap,dmin,rms,net,id,updated,place,type,horizontalError,depthError,magError,magNst,status,locationSource,magSource
      // 2016-09-09T02:06:29.040Z,35.5213,-97.3848,5,3.8,mb_lg,,90,0.067,0.66,us,us10006n8p,2016-09-09T06:58:01.306Z,"0km WSW of Spencer, Oklahoma",earthquake,1,1.9,0.049,108,reviewed,us,us

      var template = {
        title: "Nearby clinics",
        content: "Magnitude {mag} {type} hit {place} on {time}."
      };

      var csvLayer = new CSVLayer({
        url: url,
        copyright: "Safye Space",
        popupTemplate: template
      });

      csvLayer.renderer = new SimpleRenderer({
        symbol: new SimpleMarkerSymbol({
          size: "23px",
          color: [238, 69, 0, 0.5],
          outline: {
            width: 0.5,
            color: "white"
          }
        })
      });

      map.add(csvLayer);

      var view = new MapView({
        container: "viewDiv",
        center: [138, 35],
        zoom: 4,
        map: map
      });

    });
  </script>
</head>

<body>
  <div id="viewDiv"></div>
</body>

</html>