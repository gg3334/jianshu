import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>衡水中学</Header>
        <Content>
          <img
            src="https://upload-images.jianshu.io/upload_images/18922188-223f62da488b6e5f.png?imageMogr2/auto-orient/strip|imageView2/2/w/772/format/webp"
            alt=""
          />
          <p>
            Numpy,是Numerical
            Python的简写，它是Python里数字计算的最重要的一个基础包。
          </p>
          <p>
            Numpy,是Numerical
            Python的简写，它是Python里数字计算的最重要的一个基础包。
          </p>
          <p>
            Numpy,是Numerical
            Python的简写，它是Python里数字计算的最重要的一个基础包。
          </p>
        </Content>
      </DetailWrapper>
    );
  }
}

export default Detail;
