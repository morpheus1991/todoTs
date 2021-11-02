import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

export const Ir_pm = css`
  display: block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
`;
// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}
  li{list-style:none;}

  html,
  body {
    overflow: hidden;   
    margin:0;
    padding:0;
    height:100%;
    box-sizing: border-box;
    font-family: 'Noto Sans KR','Roboto',  sans-serif;

  }
  body{
    background:#f6f8ee;
  }
html *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    &:focus{
      outline:none;
    }
  }

  label.hide {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  vertical-align: middle;
  text-indent: -9999px;
  overflow: hidden;
  text-align: left;
  position: absolute;
  }
  
  .srOnly{  display: block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;}
button{cursor:pointer}
`;

const BtnSize = {
  sm: css`
    width: 100px;
    height: 30px;
  `,
  md: css`
    width: 100px;
    height: 30px;
  `,
  lg: css`
    width: 100px;
    height: 30px;
  `,
  full: css`
    width: 100px;
    height: 30px;
  `,
};
export default GlobalStyle;
