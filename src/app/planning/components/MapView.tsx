'use client'

import { MapContext } from "@/context/map/MapContext";
import { useAppSelector } from "@/store";
import mapboxgl from "mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react";


export const MapView = () => {
    const mapContainer = useRef<any>(null);

    const { setMap } = useContext( MapContext )

    useLayoutEffect(() => {
        mapboxgl.accessToken =
          "pk.eyJ1IjoiemVyb2RzIiwiYSI6ImNrM2t3cG0xNzB5bzgzam12dHdwY2luMXgifQ.3qy4aurdz4Vjp4QNr1-feg";
    
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/zerods/clvt31ai108pw01pkb706csi6",
          center: [-73.1621655, -40.5727557],
          zoom: 13,
        });
  
        setMap( map )
  
      }, []);

      return (
        <div id="map" className="h-full" ref={ mapContainer } ></div>
      )
}