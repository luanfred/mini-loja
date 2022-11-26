import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 130px;

 .one{ 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .two{ 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    color: black;
    margin: 10px;
  }
  a:hover {
    color: #1a73e8;
  }
`