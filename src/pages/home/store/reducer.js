import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
      });
    case constants.GET_MORE_ARTICLE:
      return state.set(
        "articleList",
        state.get("articleList").concat(action.list)
      );
    default:
      return state;
  }
};

export default reducer;
