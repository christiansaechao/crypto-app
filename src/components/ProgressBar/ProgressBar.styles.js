
import styled from "styled-components";

export const Container = styled.div`
    height: .8rem;
    width: ${({ width }) => width}%;
    background-color: #FFFFFF;
    position: relative;
    border-radius: 10px;
    margin: auto 0;
    overflow: hidden;
    border:none;
    margin-right: auto;
`

const BaseBox = styled.div`
    height: 100%;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
    border:none;
`

export const Progress = styled(BaseBox)`
    background: ${props => props.theme.orange};
    width: ${({ percent }) => percent}%;
    min-width: ${({ percent }) => percent < 2 ? "2" : percent}%;
`