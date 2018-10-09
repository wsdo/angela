import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  list,
})

export const getHomeList = () => dispatch => axios.get('http://47.95.113.63/ssr/api/news.json?secret=D37msjPeC3')
  .then((res) => {
    const list = res.data.data;
    dispatch(changeList(list))
  })
