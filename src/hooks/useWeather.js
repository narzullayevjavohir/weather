import axios from "axios";

const API_KEY = "78012b8d16b0af49902f5027940fbdc1";

export const useWeather = () => {
  const getAllWeather = async (cityName, cnt) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=${
          cnt ? cnt : 8
        }&appid=${API_KEY}`
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    getAllWeather,
  };
};
