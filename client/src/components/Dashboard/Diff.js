import styled from 'styled-components';

const FormProject = styled.div`
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
  background:rgba(0,0,0, 0.5);
  height: 100vh;
  }

  .whiteBack {
      display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:white;
    width: 650px;
    height: 400px;
  }

`;


export default FormProject;