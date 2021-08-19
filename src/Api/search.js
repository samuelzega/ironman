import api from './baseUrl';

export default async ({q}) => {
  try {
    const response = await api({
      method: 'GET',
      url: `/search`,
      params: {
        api_key:'lnnoNeYNv04hJmmitxBXP7NowZV8QZ89',
        q,
        limit:9,
        offset:0
      }
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    // console.log(error.response);
    throw error;
  }
};
