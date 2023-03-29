import axios from "axios";

const key = process.env.REACT_APP_KAKAO_API_KEY;

export const getKakaoSearchResult = async (query: string) => {
  const url = "https://dapi.kakao.com/v2/search/vclip";
  const headers = {
    Authorization: `KakaoAK ${key}`,
  };
  const params = {
    query,
  };

  try {
    const response = await axios.get(url, { headers, params });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
