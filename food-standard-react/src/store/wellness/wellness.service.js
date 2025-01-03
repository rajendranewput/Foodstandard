import {METHOD_TYPES} from 'constants/index';
import axiosInstance from '../../network/apis';
import {API_PAYLOAD} from '../../constants';

const payload = API_PAYLOAD();

export const fetchWellnessPlateService = () => {
	return axiosInstance(METHOD_TYPES.post, '/wellness-plate', payload);
};

export const fetchWBIService = () => {
	return axiosInstance(METHOD_TYPES.post, '/wbi', payload);
};

export const fetchWholeFoodChartService = () => {
	return axiosInstance(METHOD_TYPES.post, '/whole-food-bar-chart', payload);
};