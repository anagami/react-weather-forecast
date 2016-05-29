import React, { Component } from 'react';
import ol from 'openlayers';




export default class WeatherMap extends Component {
    componentDidMount() {
        console.log('componentDidMount')
        // var placeLayer = new ol.layer.Vector({
        //   id: this.refs.placeLayer,
        //   source: new ol.source.Vector({
        //     format: new ol.format.GeoJSON(),
        //     // url: "http://www.geoforall.org/locations/OSGEoLabs.json" raises
        //     // Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://www.geoforall.org/locations/OSGEoLabs.json. (Reason: CORS header 'Access-Control-Allow-Origin' missing).
        //     url: 'OSGEoLabs.json'
        //   })
        // })
      var map = new ol.Map({
        target: this.refs.map,
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.transform([27.6, 53.86], 'EPSG:4326', 'EPSG:3857'),
          zoom: 13
        })
      });

      // var layer_cloud = new ol.layer.Tile({
      //     source: new ol.source.XYZ({
      //       // Replace this URL with a URL you generate. To generate an ID go to http://home.openweathermap.org/
      //       // and click "map editor" in the top right corner. Make sure you're registered!
      //       url: 'http://maps.owm.io:8099/5749b45237fb4e01009cbb39/{z}/{x}/{y}?hash=acc371d90b123272a57ed23389d46599',
      //     })
      // });
      // map.addLayer(layer_cloud);





        // var map = new ol.Map({
        //   target: this.refs.map,
        //     layers: [
        //       new ol.layer.Tile({
        //         source: new ol.source.MapQuest({layer: 'sat'})
        //       })
        //     ],
        //     view: new ol.View({
        //       center: ol.proj.fromLonLat([37.41, 8.82]),
        //       zoom: 4
        //     })
        // })
        // var mapnik = new ol.source.OSM();
        // var layer_cloud = new ol.source.XYZ(
        //     "clouds",
        //     "http://${s}.tile.openweathermap.org/map/clouds/${z}/${x}/${y}.png",
        //     {
        //         isBaseLayer: false,
        //         opacity: 0.7,
        //         sphericalMercator: true
        //     }
        // );

        // map.addLayer([mapnik, layer_cloud]);
    }

    render() {
        console.log('render')
        return <div>
            WeatherMap
            <div ref="map" class="ol-map"></div>
        </div>
    }
}
