import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 15px auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 0 10px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 150px;
    height: 100px;
    float: right;
  }
`;

export const ListInfo = styled.div`
  width: 458px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendList = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  .pic {
    width: 100%;
  }
`;

export const AppDownload = styled.a`
  position: relative;
  cursor: pointer;
  float: left;
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  box-sizing: border-box;
  width: 100%;
  .pic {
    vertical-align: middle;
    width: 60px;
    height: 60px;
  }
`;

export const AppDownloadInfo = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  margin-left: 7px;
  .title {
    font-size: 15px;
  }
  .description {
    font-size: 13px;
    margin-top: 4px;
    color: #999;
  }
`;

export const WriterTitle = styled.span`
  font-size: 14px;
  color: #969696;
`;

export const WriterList = styled.div`
  margin: 0 0 20px;
  text-align: left;
`;

export const WriterItem = styled.div`
  margin-top: 15px;
  .pic {
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    margin-right: 10px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .name {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
  }
  .info {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    color: #969696;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;
