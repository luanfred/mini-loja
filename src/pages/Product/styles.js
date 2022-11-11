import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerColor = styled.div`
  width: 90%;
  height: 80vh;
  margin: 20px auto;
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: #ccc 2px 2px 3px;
`

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;
  padding: 10px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  margin: 40px 50px;
  width: 60%;
  height: 100%;

  p {
    font-size: 18px;
  }

  span {
    font-size: 18px
  }

  h3 {
    font-size: 32px;
  }
`

export const PriceTotal = styled.div`
  display: flex;
  gap: 4px;;

  .priceTotal {
    font-size: 18px;
    text-decoration: line-through;
  }
  .discounts {
    width: 100px;
    font-size: 18px;
    background-color: rgb(7, 170, 7);
    border-radius: 8px;
  }
`
