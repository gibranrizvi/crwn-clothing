import React from 'react';
import './directory.styles.scss';

import { sections } from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
