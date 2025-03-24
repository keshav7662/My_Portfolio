import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const saveContact = async (formData) => {
  try {
    const response = await axios.post(`${backendUrl}/contact/save`, formData);
    console.log(response.data);
    if (response) {
      toast.success(response.data.message, {
        duration: 3000
      });
    }

  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      duration: 3000
    });
  }

}


