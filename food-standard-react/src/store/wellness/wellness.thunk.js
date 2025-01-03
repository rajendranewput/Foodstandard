import {
    fetchWellnessPlateService, fetchWBIService,fetchWholeFoodChartService,
  } from 'store/wellness/wellness.service';
  
  export const fetchWellnessPlate = async () => {
    try {
      const response = await fetchWellnessPlateService();
      return response.data;
    } catch (error) {
      return error;
    }
  };

  export const fetchWBI = async () => {
    try {
      const response = await fetchWBIService();
      return response.data.wbi_section_data;
    } catch (error) {
      return error;
    }
  };
  
  export const fetchWholeFoodChart = async () => {
    try {
      const response = await fetchWholeFoodChartService();
      return response.data;
    } catch (error) {
      return error;
    }
  };