import axios from 'axios';

const BASE_URL = 'https://bencknews.herokuapp.com/api';

export const getUser = username => {
  return axios.get(`${BASE_URL}/users`).then(data => {
    console.log(data);
    const newData = data.data.users.filter(
      user => user.userName === `${username}`
    );
    if (!newData.length) return Promise.reject('No user Found');
    return newData[0];
  });
};
