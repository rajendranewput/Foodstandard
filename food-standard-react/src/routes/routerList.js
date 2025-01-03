import {ROUTE_PATHS} from '../constants/index';
import {lazy} from 'react';
import {v4 as uuidv4} from 'uuid';

export const routerList = [
  {
    key: uuidv4(),
    label: 'Dashboard',
    path: ROUTE_PATHS.dashboard,
    component: lazy(() => import('../pages/Dashboard/Dashboard')),
    hasAuth: false,
  },
  {
    key: uuidv4(),
    label: 'Purchasing',
    path: ROUTE_PATHS.purchasing,
    component: lazy(() => import('../pages/Purchasing/Purchasing')),
    hasAuth: false,
  },
  {
    key: uuidv4(),
    label: 'Climate-Change',
    path: ROUTE_PATHS.climate,
    component: lazy(() => import('../pages/ClimateChange/ClimateChange')),
    hasAuth: false,
  },
  {
    key: uuidv4(),
    label: 'Plant-Forward',
    path: ROUTE_PATHS.plant,
    component: lazy(() => import('../pages/PlantForward/PlantForward')),
    hasAuth: false,
  },
  {
    key: uuidv4(),
    label: 'Wellness',
    path: ROUTE_PATHS.wellness,
    component: lazy(() => import('../pages/Wellness/Wellness')),
    hasAuth: false,
  },
  {
    key: uuidv4(),
    label: 'Hierarchy',
    path: ROUTE_PATHS.hierarchy,
    component: lazy(() => import('../pages/HierarchyDashboard/HierarchyDashboard')),
    hasAuth: false,
  },
];
