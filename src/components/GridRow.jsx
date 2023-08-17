import React from 'react';
import "./GridRow.css"
import CarouselFadeExample from './CarouselFadeExample';
import RightColumn1Items from './RightColumn1Items';
import Badges from './little-things/badges';
import { NewReleases } from '@mui/icons-material';

const GridRow = () => {
  return (
<>
  <div className='container1'>
    <div className='leftColumn1'>
      <Badges></Badges>
    </div>
    <div className='rightColumn1'>
      <RightColumn1Items></RightColumn1Items>
    </div>
  </div>

  <div className='container2'>
    <div className='leftColumn2'>
      aaa
    </div>
    <div className='rightColumn2'>
      zzz
    </div>
  </div>
</>
  );
}


export default GridRow;
