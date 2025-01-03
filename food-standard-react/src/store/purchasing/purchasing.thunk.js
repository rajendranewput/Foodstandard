import {
  fetchCorService, 
} from 'store/purchasing/purchasing.service';
  
export const fetchCor = async() => {
  try {
    const response = await fetchCorService();
    return response.data;
  } catch (error) {
    return error;
  }
};
  
  
  
  