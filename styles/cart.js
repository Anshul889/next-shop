import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
`

export const Heading = styled.h1`
  font-size: 48px;
`

export const Categories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 15px;
  border-bottom: 0.1px solid #80808080;
  padding-bottom: 10px;
`

export const Category = styled.div`
  &:nth-child(2) {
    justify-self: end;
  }
`

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr 0.3fr;
  gap: 10px;
  padding: 15px 0;
  & > img {
    width: 100%;
    grid-row: 1 / span 2;
  }
`

export const UpdateQuantity = styled.div`
font-size: 14px;
justify-self: center;
& > span{
  padding-left: 14px
}
`

export const Remove = styled.div`
grid-column: 3;
grid-row: 2;
justify-self: end;
`

export const Price = styled.div`
justify-self: end;
`