import React, { useEffect, useState } from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  const [previewItems, setPreviewItems] = useState([]);

  useEffect(() => {
    setPreviewItems(
      items.map(
        ({ id, ...itemProps }, index) =>
          index < 4 && <CollectionItem key={id} {...itemProps} />
      )
    );
  }, [items]);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{previewItems}</div>
    </div>
  );
};

export default CollectionPreview;
