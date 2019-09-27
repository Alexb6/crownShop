import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
);

/* After turning the SHOP_DATA into an object with the key that is = to the collection section(collectionUrlParam),
we can use it right away w- needing to have a corresponding mapping table telling which collectionUrlParam 
is = to which section id. Consequence : no need to use find() on the array to search for an section id  */
export const selectCollection = collectionUrlParam => createSelector (
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

// Converting back the SHOP_DATA object into an array because the collections-overview.component needs it
export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    // collections => Object.keys(collections).map(key => collections[key])
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

// Create new selector when using redux-thunk to pull-in isFetching property
export const selectIsCollectionFetching = createSelector (
    [selectShop],
    shop => shop.isFetching
);

// Create a boolean (with double bang) to use it in the CollectionPageWithSpinner component
export const selectIsCollectionLoaded = createSelector (
    [selectShop],
    shop => !!shop.collections
)