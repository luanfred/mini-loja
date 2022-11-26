import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border-bottom: 1px solid #1a73e8;
  background-color: #ffffff;
  color: #1a73e8;
  
  .logo {
    margin-left: 26px;
    font-size: large;
    font-style: italic;
    color: #1a73e8;
    text-decoration: none;
  }

  a:hover {
    color: #1a20e8;
  }
`

export const Category = styled.div`
  display: flex;
  align-items: center;
  margin-right: 26px;
`

export const Button = styled.button`
  width: 120px;
  height: 30px;

  font-size: medium;
  background: transparent;
  border: none;
  
  a {
    color: #1a73e8;
  }
  
  a:hover {
    color: #1a20e8;
  }
`