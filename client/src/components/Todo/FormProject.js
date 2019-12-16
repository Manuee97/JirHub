import styled from 'styled-components';

const FormProject = styled.div`
  display: ${props => props.show === true ? 'flex' : 'none' } ;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  position:relative;
  z-index: 9999;
  background:rgba(0,0,0, 0.5);
  height: 100vh;
  }

  .form {
    margin-top:2%;
    position: relative;
    background: #FFFFFF;
    max-width: 360px;
    padding: 30px 70px 30px 70px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }



`;


export default FormProject;