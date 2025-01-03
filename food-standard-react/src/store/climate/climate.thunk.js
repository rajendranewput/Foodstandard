import {
  fetchBeefService, fetchTrimmService,fetchDeforestationService, 
} from 'store/climate/climate.service';

export const fetchBeef = async () => {
  try {
    const response = await fetchBeefService();
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchTrimm = async() => {
  try {
    const response = await fetchTrimmService();
    return response.data.spend;
  } catch (error) {
    return error;
  }
}

export const fetchDeforestation = async() => {
  try {
    const response = await fetchDeforestationService();
    return response.data;
  } catch (error) {
    return error;
  }
}



