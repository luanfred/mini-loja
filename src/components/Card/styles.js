import styled from "styled-components";


export const Container = styled.div`
  box-sizing: border-box;
  width: 232px;
  height: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  box-shadow: #ccc 2px 2px 3px;
  background-color: #ffffff;
  color: #333333;
  padding: 8px;
  margin: 40px ;
`

export const ContainerImg = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  width: 100%;
  height: 152px;
`

export const ContainerData = styled.div`
  box-sizing: border-box;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 0;
  gap: 16px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 28px;

    background: #1a73e8;
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
  }
`

export const NameProduct = styled.h3`
  font-size: 14px;
  text-transform: lowercase;
`

export const Rating = styled.p`
  font-size: 12px;
`
export const PriceTotal = styled.div`
  display: flex;
  gap: 4px;;

  .priceTotal {
    font-size: 10px;
    text-decoration: line-through;
  }
  .discounts {
    width: 40px;
    font-size: 10px;
    background-color: rgb(7, 170, 7);
    border-radius: 8px;
  }
`

export const Price = styled.span`
  font-size: 16px;
`
export const FormPayment = styled.span`
  font-size: 12px;
`
export const Button = styled.a`
  width: 100%;
  height: 28px;

  background: #1a73e8;
  color: #ffffff;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`