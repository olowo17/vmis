import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL= process.env.REACT_APP_VMIS_BASE_URL

class ApiService {
  constructor() {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async registerOfficer(officerData) {
    try {
      const response = await this.client.post('/admin/register/officer', officerData);
      if (response.status === 200 || response.status === 201) {
        const { badgeNumber } = response.data; // Extract badge number from the response
        toast.success(`Officer registered successfully! Badge Number: ${badgeNumber}`, {
          autoClose: 60000, // Toast will stay for 1 minute
        });
        return response.data;
      }
    } catch (error) {
      toast.error('Failed to register officer. Please try again.', {
        autoClose: 10000, 
      });
      throw error;
    }
  }
  
    // Report Incident
async reportIncident(incidentData) {
  try {
    const response = await this.client.post("/incidents/report", incidentData);
    return response;
  } catch (error) {
    console.error("Error reporting incident:", error);
    throw error;
  }
}


  // Register Car
  async registerCar(carData) {
    try {
      const response = await this.client.post('/car/register', carData);
      if (response.status === 200 || response.status === 201) {
        toast.success('Car registered successfully!');
        return response.data;
      }
    } catch (error) {
      toast.error('Failed to register car. Please try again.');
      throw error;
    }
  }

  // Admin login
  async adminLogin(badgeNumber) {
    try {
      console.log('Attempting login with badgeNumber:', badgeNumber);
      const response = await this.client.post('/admin/login', { badgeNumber });
      console.log('Login response:', response.data);
      return response;
    } catch (error) {
      if (error.response) {
        console.error('Server responded with error:', error.response.data);
      } else if (error.request) {
        console.error('No response received from server:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      throw error;
    }
  }
  


  // Officer login
  async officerLogin(badgeNumber, password) {
    try {
      const response = await this.client.post('/admin/login/officer', { badgeNumber, password });
      return response; // returns the response from the server
    } catch (error) {
      console.error('Officer login failed:', error);
      throw error; 
    }
  }
}

export default new ApiService();
