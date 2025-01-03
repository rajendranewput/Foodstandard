import data from 'translations/en.json';
import {formattedDate} from 'helpers/date.helpers';
const TOKEN = 'authtoken';
const ROLE = 'authrole';
const LANGUAGE = 'language';

const t = data;
const LOADER_TYPE = {
  CIRCULAR: 'circular',
  CIRCULARLABEL: 'circularLabel',
  LINEAR: 'linear',
};

const LOADER_HANDLER_TYPES = {
  page: 'pageLoader',
  submit: 'submitButtonLoader',
  table: 'tableLoader',
  dialog: 'dialogLoader',
};

const TOASTER_TYPE = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
};

const REGEX = {
  NO_NUMBER_REGEX: '/^([^0-9]*)$/',
};

const METHOD_TYPES = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch',
};

const ROUTE_PATHS = {
  dashboard: '/dashboard',
  purchasing: '/purchasing',
  plant: '/plant-forward',
  climate: '/climate-change',
  wellness: '/wellness',
  hierarchy: '/Hierarchy',
};

const TABLE_HEADER = [{ name: t.dashboardReport.report }, { name: t.dashboardReport.description }];
const TABLE_BODY = [
  { id: 1, CName: t.dashboardReport.cCount, Description: t.dashboardReport.description},
  { id: 2, CName: t.dashboardReport.purchasing, Description: t.dashboardReport.description },
  { id: 3, CName: t.dashboardReport.tons, Description: t.dashboardReport.description },
  {
    id: 4,
    CName: t.dashboardReport.detail,
    Description: t.dashboardReport.description,
  },
  {
    id: 5,
    CName: t.dashboardReport.summary,
    Description: t.dashboardReport.description,
  },
  {
    id: 6,
    CName: t.dashboardReport.meal,
    Description: t.dashboardReport.description,
  },
  {
    id: 7,
    CName: t.dashboardReport.proteins,
    Description: t.dashboardReport.description,
  },
  {
    id: 8,
    CName: t.dashboardReport.weight,
    Description: t.dashboardReport.description,
  },
  {
    id: 8,
    CName: t.dashboardReport.googleAnalytics,
    Description: t.dashboardReport.description,
  },
];

const FY_OPTIONS = [
  { label: t.dashboardReport.fy, date:'10/09/2022'},
  { label: t.dashboardReport.fy22, date:'10/09/2022'},
  { label: t.dashboardReport.fy23, date:'10/08/2022' },
  { label: t.dashboardReport.fy24, date:'10/07/2022' },
  { label: t.dashboardReport.fy25, date:'10/06/2022'},
  { label: t.dashboardReport.fy26, date:'10/05/2022' },
];

const ENDFY_OPTIONS = [
  { label: t.dashboardReport.fy, date:'10/10/2022'},
  { label: t.dashboardReport.fy22, date:'10/11/2022'},
  { label: t.dashboardReport.fy23, date:'10/12/2022' },
  { label: t.dashboardReport.fy24, date:'10/13/2022' },
  { label: t.dashboardReport.fy25, date:'10/14/2022'},
  { label: t.dashboardReport.fy26, date:'10/15/2022' },
];

const CAKE_OPTIONS = [
  { label: '', date: ''},
  { label: t.dashboardReport.dessert, date:'10/11/2022' },
  { label: t.dashboardReport.mix, date:'10/12/2022' },
  { label: t.dashboardReport.frozen, date:'10/13/2022' },
  { label: t.dashboardReport.pies, date:'10/14/2022'},
  { label: t.dashboardReport.pizza, date:'10/15/2022' },
  { label: t.dashboardReport.bakery, date:'10/16/2022'},
  { label: t.dashboardReport.beef, date:'10/17/2022'},
  { label: t.dashboardReport.beverages, date:'10/18/2022'},
  { label: t.dashboardReport.cereals, date:'10/19/2022' },
];

const PERIOD_OPTIONS = [
  { label: t.dashboardReport.p01, date:'10/20/2022'},
  { label: t.dashboardReport.p02, date:'10/21/2022'},
  { label: t.dashboardReport.p03, date:'10/22/2022'},
  { label: t.dashboardReport.p04, date:'10/23/2022'},
  { label: t.dashboardReport.p05, date:'10/24/2022'},
]

const ENDPERIOD_OPTIONS = [
  { label: t.dashboardReport.p01, date:'10/25/2022'},
  { label: t.dashboardReport.p02, date:'10/26/2022'},
  { label: t.dashboardReport.p03, date:'10/27/2022'},
  { label: t.dashboardReport.p04, date:'10/28/2022'},
  { label: t.dashboardReport.p05, date:'10/29/2022'},
]

const LANGUAGES = [{languageCode: 'en'}];

export const API_PAYLOAD = () => {
  const year = '20' + localStorage.getItem('selectedFy');
  const endDate = formattedDate();
  return {
    end_date: endDate,
    campus_flag: '10',
    year: year,
    type: 'sector',
    team_name: 'A00000',
    fytd: 1
  };
};

export {
  TOASTER_TYPE,
  TOKEN,
  ROLE,
  REGEX,
  LANGUAGE,
  LANGUAGES,
  LOADER_HANDLER_TYPES,
  LOADER_TYPE,
  ROUTE_PATHS,
  TABLE_HEADER,
  TABLE_BODY,
  CAKE_OPTIONS,
  FY_OPTIONS,
  PERIOD_OPTIONS,
  ENDFY_OPTIONS,
  ENDPERIOD_OPTIONS,
  METHOD_TYPES
};
