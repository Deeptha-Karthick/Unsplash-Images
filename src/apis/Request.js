import axios from "axios";

export const getImagesQuery = async ({ searchText, signal }) => {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchText },
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
      },
    });

    if (res.data.results) {
      return res.data.results;
    }
  } catch (e) {
    throw new Error("An unexpected error occured", e);
  }
};
