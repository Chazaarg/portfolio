import styled from "styled-components";

export const Contentdiv = styled.div`
  position: relative;
  margin: 0 0 60px 0;
`;

export const TitleDiv = styled.div`
  margin: 2rem 0 15px 0;
  padding: 0 0 5px 0;
  position: relative;
  font-size: 19px;
  color: #171717;
  line-height: 21px;
  font-weight: 600;

  &::before {
    background: linear-gradient(
      135deg,
      rgba(46, 144, 202, 0.4) 0%,
      rgba(46, 202, 127, 0.01) 100%
    );
    content: "";
    position: absolute;
    left: 0px;
    top: 1.55rem;
    width: 100%;
    height: 5px;
  }
`;

export const Row = styled.div`
  margin: 0 10px;
  position: relative;
  box-sizing: border-box;
`;

export const Col = styled.div`
  padding: 20px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  width: 100%;
`;

export const TextBox = styled.div`
  box-sizing: border-box;

  p {
    overflow-wrap: break-word;
    font-size: 14px;
    line-height: 1.6;
    padding: 0;
    margin: 0 0 20px 0;
    box-sizing: border-box;
  }
`;
