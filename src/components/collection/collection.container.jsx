import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

// Name isLoading exactly the same prop that WithSpinner is expecting
const mapStateToProps = createStructuredSelector ({
    isLoading: state => !selectIsCollectionLoaded(state)
});


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;