import {METHOD_TYPES} from 'constants/index';
import axiosInstance from '../../network/apis';
import {API_PAYLOAD} from '../../constants';

const payload = API_PAYLOAD();

export const fetchBeefService = () => {
	return axiosInstance(METHOD_TYPES.post, '/beef-meal', payload);
};

export const fetchTrimmService = () => {
	return axiosInstance(METHOD_TYPES.post, '/trimming-transportation', payload);
};

export const fetchDeforestationService = () => {
	return axiosInstance(METHOD_TYPES.post, '/decreasing-deforestation', payload);
}