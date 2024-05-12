'use client'

import { Map, Marker } from 'mapbox-gl';
import React, { useReducer } from 'react'
import { mapReducer } from './mapReducer';
import { MapContext } from './MapContext';

export interface MapState {
    isMapReady: boolean;
    map?: Map;
}

const initialState: MapState = {
    isMapReady: false,
    map: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const MapProvider = ( { children } : Props ) => {
 
    const [state, dispatch] = useReducer(mapReducer, initialState);

    const setMap = ( map: Map ) => {

        new Marker().setLngLat( map.getCenter() ).addTo( map )

        dispatch({ type: 'setMap', payload: map })
    }

  return (
    <MapContext.Provider value={{
        ...state,

        //Methods
        setMap
    }}>
        { children }
    </MapContext.Provider>
  )
}
