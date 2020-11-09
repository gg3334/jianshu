import React, { PureComponent, Fragment } from "react";
import {
  RecommendList,
  RecommendItem,
  AppDownload,
  AppDownloadInfo,
} from "../style";
import { connect } from "react-redux";

class Recommend extends PureComponent {
  render() {
    const { linkList } = this.props;
    return (
      <Fragment>
        <RecommendList>
          {linkList.map((item) => {
            return (
              <RecommendItem key={item.get("id")}>
                <img className="pic" src={item.get("imgUrl")} alt="" />
              </RecommendItem>
            );
          })}
        </RecommendList>
        <AppDownload>
          <img
            className="pic"
            src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
            alt=""
          />
          <AppDownloadInfo>
            <div className="title">下载简书手机App</div>
            <div className="description">随时随地发现和创作内容</div>
          </AppDownloadInfo>
        </AppDownload>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  linkList: state.getIn(["home", "recommendList"]),
});

export default connect(mapState)(Recommend);
