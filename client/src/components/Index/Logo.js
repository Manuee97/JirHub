import styled from 'styled-components';

const Logo = styled.div`
  display: ${props => props.show === true ? 'flex' : 'none' } ;
  left: 0;
  top:0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  position:absolute;
  z-index: 9999;
  background:#0946a6;
  height: 100vh;
  }

  .fontLogo {
      color:white;
      font-size: 300px;
  }

`;


export default Logo;