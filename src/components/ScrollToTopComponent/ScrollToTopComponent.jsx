import ScrollToTop from 'react-scroll-to-top';
import styled from 'styled-components';
import { AiOutlineToTop } from 'react-icons/ai';
import { GiSolidLeaf } from 'react-icons/gi';
import 'animate.css';

const Box = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconL = styled(GiSolidLeaf)`
  width: 44px;
  height: 44px;
  color: #8baa36;
`;

const Icon = styled(AiOutlineToTop)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  color: #fafafa;
`;

const scrollToTopStyle = {
  background: 'transparent',
  width: '50px',
  height: '50px',
};

export const ScrollToTopComponent = () => {
  return (
    <ScrollToTop
      style={scrollToTopStyle}
      smooth
      component={
        <Box>
          <IconL />
          <Icon />
        </Box>
      }
    />
  );
};
