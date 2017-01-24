import React from 'react';
import createTickComponent from './createTickComponent';
// import createSquareTickComponent from './createSquareTickComponent';
// import compose from './compose';

const MountInfoExample = props =>
  <p>Mounted {props.ticks} seconds ago.</p>;

// export default compose(createTickComponent, createSquareTickComponent)(MountInfoExample);
export default createTickComponent(MountInfoExample);
