import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { getOneDecimal } from "../../../common/utils";
import { WriterTitle, WriterList, WriterItem } from "../style";

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <WriterTitle>推荐作者</WriterTitle>
        <WriterList>
          {list.map((item) => {
            const wordage = getOneDecimal(item.get("total_wordage"));
            const likes_count = getOneDecimal(item.get("total_likes_count"));
            return (
              <WriterItem key={item.get("id")}>
                <img className="pic" src={item.get("imgUrl")} alt="" />
                <div className="name">{item.get("nickname")}</div>
                <p className="info">
                  写了{wordage}k字 · {likes_count}k喜欢
                </p>
              </WriterItem>
            );
          })}
        </WriterList>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "writerList"]),
});

export default connect(mapState)(Writer);
