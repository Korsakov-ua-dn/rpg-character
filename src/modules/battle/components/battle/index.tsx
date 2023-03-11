import React from 'react';

import Image from '../../../../assets/images/character.png';

export const Battle: React.FC = React.memo(() => {
  return (
    <div className="Battle">
      <img src={Image} alt="" />
    </div>
  );
});
