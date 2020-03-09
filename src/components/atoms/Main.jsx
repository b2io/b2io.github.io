import styled from 'styled-components';
import { themed } from '../../util/style';

const Main = styled.main`
  background: ${themed('color.background')};
  color: ${themed('color.text')};
  display: block;
  overflow: hidden;
  position: relative;
  z-index: ${themed('zindex.background')};
`;

export default Main;
