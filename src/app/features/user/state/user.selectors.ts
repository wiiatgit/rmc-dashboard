import { createSelector } from '@ngrx/store';
import { getUserFeatureState } from './user.reducers';

export const getUserFeature = createSelector(
    getUserFeatureState,
    state => state
);

export const getUserProfil = createSelector(
    getUserFeatureState,
    state => state.userProfil
);

export const getUserPromotions = createSelector(
    getUserFeatureState,
    state => state.promotions
);
