"use client";

import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useRouter } from 'next/navigation';

interface GeographyProps {
  rsmKey: string;
  properties: {
    id: string;
  };
}

interface GeographiesRenderProps {
  geographies: GeographyProps[];
}

const geoUrl = 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson';

const MapaBrasil = () => {
  const router = useRouter();

  const handleStateClick = (geography: GeographyProps) => {
    const stateId = geography.properties.id;
    router.push(`/estados/${stateId}`);
  };

  return (
    <ComposableMap className="w-300">
      <Geographies geography={geoUrl}>
        {({ geographies }: GeographiesRenderProps) =>
          geographies.map((geo: GeographyProps) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => handleStateClick(geo)}
              style={{
                default: { fill: "#D6D6DA", outline: "none" },
                hover: { fill: "#F53", outline: "none" },
                pressed: { fill: "#E42", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapaBrasil;
