import axios from "axios";

export const getDataApi = async (url, token) => {
  const res = await axios.get(`https://wokpa.ddns.net/api/listeners/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataApi = async (url, post, token) => {
  const res = await axios.post(
    `https://wokpa.ddns.net/api/listeners/${url}`,
    post,
    {
      headers: {
        "Cache-Control": "no-cache, private",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res;
};

export const logoutApi = async (url, token) => {
  const res = await axios.post(`https://wokpa.ddns.net/api/listeners/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataApi = async (url, post, token) => {
  const res = await axios.put(
    `https://wokpa.ddns.net/api/listeners/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};

export const patchDataApi = async (url, post, token) => {
  const res = await axios.patch(
    `https://wokpa.ddns.net/api/listeners/${url}`,
    post,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};

export const deleteDataApi = async (url, token) => {
  const res = await axios.delete(
    `https://wokpa.ddns.net/api/listeners/${url}`,
    {
      headers: { Authorization: token },
    }
  );
  return res;
};
