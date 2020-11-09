import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const getHomeDataAction = (data) => ({
  type: constants.GET_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList,
});

export const getHomeData = () => {
  return (dispatch) => {
    axios.get("api/home.json").then((res) => {
      const data = res.data.data;
      dispatch(getHomeDataAction(data));
    });
  };
};

export const getMoreListAction = (data) => ({
  type: constants.GET_MORE_ARTICLE,
  list: fromJS(data),
});

export const getMoreList = () => {
  return (dispatch) => {
    axios.get("api/homeList.json").then((res) => {
      const data = res.data.data;
      dispatch(getMoreListAction(data));
    });
  };
};
