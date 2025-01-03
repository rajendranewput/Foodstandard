import {METHOD_TYPES} from 'constants/index';
import axiosInstance from '../../network/apis';
import {API_PAYLOAD} from '../../constants';

const payload = API_PAYLOAD();

export const fetchCorService = () => {
	return axiosInstance(METHOD_TYPES.post, '/cor-data', payload);
};