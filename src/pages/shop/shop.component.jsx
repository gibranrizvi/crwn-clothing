import React, { useState } from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = props => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      <h1 className="title">Collections</h1>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
