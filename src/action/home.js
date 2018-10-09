import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  list,
})

export const getHomeList = () => dispatch => axios.get('https://shudong.wang/v1/article/list')
  .then((res) => {
    const list = res.data.data;
    dispatch(changeList(list))
  })
