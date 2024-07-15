import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

interface PointMapProps {
  data: Array<{ longitude: number; latitude: number; type: string; place: string }>
}

export default function PointMap({ data }: PointMapProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/Graphic',
        'esri/layers/GraphicsLayer'
      ], { css: true })
        .then(([Map, MapView, Graphic, GraphicsLayer]) => {
          var graphics = [];

          for (var key in data) {
            var item = data[key]
            var pointGraphic = new Graphic({
              attributes: {
                name: item.place
              },
              geometry: {
                type: "point",
                longitude: item.longitude,
                latitude: item.latitude
              },
              symbol: {
                type: "simple-marker",
                color: [226, 119, 40],
                outline: {
                  color: [255, 255, 255],
                  width: 2
                }
              },
              popupTemplate: {
                title: item.type,
                content: [{
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "name",
                      label: "Place",
                      visible: true
                    }
                  ]
                }]
              },
            });
            graphics.push(pointGraphic);
          }

          const layer = new GraphicsLayer({
            graphics: graphics
          });

          const map = new Map({
            basemap: "topo-vector",
            layers: [layer]
          });

          const view = new MapView({
            container: divRef.current,
            map: map,
            center: [78, 20],
            zoom: 4
          });

          return () => {
            if (view) {
              view.container = null;
            }
          };
        });
    }
  }, [data]);

  return (
    <div
      ref={divRef}
      className="p-2 m-2 w-full h-500" // using Tailwind CSS classes
    ></div>
  );
}
