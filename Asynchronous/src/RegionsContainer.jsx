import React from 'react';

import { useSelector } from 'react-redux';

export default function RegionsContainer() {
  function handleClick() {
    return null;
  }

  const regions = useSelector((state) => state.regions);

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={handleClick}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
