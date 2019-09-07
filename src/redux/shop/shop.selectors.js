import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
);

// After turning the SHOP_DATA into an object with the key that is = to the collection section(collectionUrlParam),
// we can use it right away w- needing to have a corresponding mapping table telling which collectionUrlParam 
// is = to which section id. Consequence : no need to use find() on the array to search for an section id 
export const selectCollection = collectionUrlParam => createSelector (
    [selectCollections],
    collections => collections[collectionUrlParam]
);

// Converting back the SHOP_DATA object into an array because the collections-overview.component needs it
export const selectCollectionsForPreview = createSelector (
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
