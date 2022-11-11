import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
 
  background-color: #1a73e8;
  color: white;

  .logo {
    padding-left: 16px;
    font-size: large;
    font-style: italic;
    color: #ffffff;
    text-decoration: none;
  }
  .categorias {
    padding-left: 16px;
    font-size: medium;
    color: #ffffff;
    text-decoration: none;
  }
`

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  gap: 16px;
`

export const Button = styled.a`
  font-size: medium;
  color: white;
  text-decoration: none;
  cursor: pointer;
`

export const Form = styled.form`

`
export const Input = styled.input`
  background-color: white;
  flex: 1;
  border: 0;
`