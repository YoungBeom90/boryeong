import React, {useState, useEffect} from "react";
import styled from 'styled-components';

export default function Supply(props) {

    return(
        <Section>
            <Header>공급량</Header>
            <Total>
                <Title>금일</Title>
                <p>{props.splyData.today != "" ? props.splyData.today : "-"}</p>
            </Total>
            <Total>
                <Title>주간</Title>
                <p>{props.splyData.weekly != "" ? props.splyData.weekly : "-"}</p>
            </Total>
            <Total>
                <Title>월간</Title>
                <p>{props.splyData.monthly != "" ? props.splyData.monthly : "-"}</p>
            </Total>
        </Section>
    )
}

const Section = styled.div`
    width : 30%;
    height : 16%;
    position: absolute;
    top: 22%;
    left: 10%;
    border: 1px solid #0090e3;
    display: inline-block;
`

const Header = styled.h3`
    width : 200px;
    font-size: 25;
    color : #0090e3;
    margin-top : -20px;
    margin-left : auto;
    margin-right : auto;
    background-color : #282c34;
`
const Total = styled.div`
    width: 22%;
    height: 45%;
    border : 1px solid #0090e3;
    display: inline-block;
    margin: 2% 5%;
`

const Title = styled.h4`
    width: 80%;
    margin-top: -20px;
    margin-left: auto;
    margin-right: auto;
    color : #0090e3;
    background-color : #282c34;
`
