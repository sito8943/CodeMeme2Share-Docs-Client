/* eslint-disable import/prefer-default-export */
// axios
import axios from "axios";

// auth
import { getAuth } from "auth/auth";

// https://server-docs.herokuapp.com

const FetchMarkdown = async (which) => {
  try {
    const response = await axios.post(
      "http://localhost:9000/file",
      { markdown: which },
      {
        headers: getAuth,
      }
    );
    const data = await response.data;
    if (data.error === undefined) return data;
    return { error: response.statusText };
  } catch (e) {
    return { error: String(e) };
  }
};

export { FetchMarkdown };
