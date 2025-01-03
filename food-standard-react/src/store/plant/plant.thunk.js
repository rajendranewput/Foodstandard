  import {
    fetchEmphasizeService, 
  } from 'store/plant/plant.service';
  
  export const fetchEmphasize = async () => {
    try {
      const response = await fetchEmphasizeService();
      return response.data;
    } catch (error) {
      return error;
    }
  };
  
  
  
  