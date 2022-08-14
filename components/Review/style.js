import styled from "styled-components";

export const Container = styled.div`
margin: 15px auto;
width: 90%;
display: grid;
grid-template-columns: max-content 1fr;
column-gap: 15px;
padding-bottom: 40px;
`

export const ImageContainer = styled.div`
width: 50px;
`

export const Created = styled.div`
color: rgba(61, 8, 27, 0.75);
font-size: 12px;
`

export const ReviewContainer = styled.div`
display: grid;
grid-template-rows: 23px max-content;
`

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

export const Rating = styled.div`
display: grid;
grid-template-columns: repeat(5, 15px);
`

export const Delete = styled.div`
color: red;
text-decoration: underline;
justify-self: end;
cursor: pointer;
`