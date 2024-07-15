import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

interface HeatMapProps {
  data: any[];
  latCol: string;
  lonCol: string;
}

export default function HeatMap({ data, latCol, lonCol }: HeatMapProps) {
  const heatMapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    makeMap();
    return () => {
      // clean up function to destroy the map view
      if (heatMapDivRef.current) {
        heatMapDivRef.current.innerHTML = '';
      }
    };
  }, []); // only run once after initial render

  const makeMap = () => {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/layers/FeatureLayer'], { css: true })
      .then(([Map, MapView, Graphic, FeatureLayer]) => {
        var graphics = [];

        for (var key in data) {
          var item = data[key]
          var pointGraphic = new Graphic({
            geometry: {
              type: "point", // autocasts as new Point()
              longitude: item[lonCol],
              latitude: item[latCol]
            },
            symbol: {
              type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
              color: [226, 119, 40],
              outline: { // autocasts as SimpleLineSymbol()
                color: [255, 255, 255],
                width: 2
              }
            }
          });
          graphics.push(pointGraphic);
        }

        const renderer = { /* renderer object here as in your original code */ };
        const layer = new FeatureLayer({ /* layer object here as in your original code */ });
        const map = new Map({ /* map object here as in your original code */ });

        new MapView({
          container: heatMapDivRef.current!,
          map: map,
          center: [78, 20],
          zoom: 4
        });
      });
  }

  return (
    <div
      ref={heatMapDivRef}
      className="w-full h-[1000px] p-2 m-2" // tailwind css classes instead of style attrs
    ></div>
  );
}
