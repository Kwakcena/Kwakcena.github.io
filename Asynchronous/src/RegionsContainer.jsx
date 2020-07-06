import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.regions);

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
