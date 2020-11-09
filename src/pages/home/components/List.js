import React, { PureComponent, Fragment } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList } = this.props;
    return (
      <Fragment>
        {list.map((item, index) => {
          return (
            <Link to="/detail" key={index}>
              <ListItem>
                <img className="pic" src={item.get("imgUrl")} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={getMoreList}>更多文字</LoadMore>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
});

const mapDispatch = (dipatch) => ({
  getMoreList() {
    dipatch(actionCreators.getMoreList());
  },
});

export default connect(mapState, mapDispatch)(List);
