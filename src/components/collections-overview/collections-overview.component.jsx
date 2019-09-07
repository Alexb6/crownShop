import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.style.scss';

import CollectionPreview from '../shop/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapsStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapsStateToProps)(CollectionOverview);
