import axios from "axios";

export const detectFeature = async (formData) => {
  const response = await axios.post("http://127.0.0.1:5000/api/detect-upload", formData);
  return response.data;
};

