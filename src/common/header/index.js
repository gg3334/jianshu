import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store/";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoItem,
  SearchInfoList,
} from "./style";
import { IconfontStyle } from "../.././statics/iconfont/iconfont";

class Header extends Component {
  getListArea() {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoList>
            {list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <Fragment>
        <IconfontStyle />
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right login">登录</NavItem>
            <NavItem className="right">
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                  className={focused ? "focused" : ""}
                />
              </CSSTransition>
              <span className={focused ? "focused iconfont" : "iconfont"}>
                &#xe628;
              </span>
              {this.getListArea()}
            </SearchWrapper>
            <Addition>
              <Button className="writing">
                <span className="iconfont">&#xe6ca;</span>
                写文章
              </Button>
              <Button className="reg">注册</Button>
            </Addition>
          </Nav>
        </HeaderWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size || dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
