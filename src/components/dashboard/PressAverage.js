import React from "react";
import styled from "styled-components";

const PressAverage = (props) => {

    return (
        <Section>
            <Header>평균수압</Header>
            <Average>
                <Title>금일</Title>
                <p>{props.pressData.today != "" ? props.pressData.today : "-"}</p>
            </Average>
            <Average>
                <Title>주간</Title>
                <p>{props.pressData.today != "" ? props.pressData.today : "-"}</p>
            </Average>
            <Average>
                <Title>월간</Title>
                <p>{props.pressData.today != "" ? props.pressData.today : "-"}</p>
            </Average>
        </Section>
    )
}

const Section = styled.div`
    width : 30%;
    height : 16%;
    position : absolute;
    top : 46%;
    left : 10%;
    border : 1px solid #0090e3;
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

const Average = styled.div`
    width: 22%;
    height: 45%;
    border : 1px solid #0090e3;
    display: inline-block;
    margin : 2% 5%
    
`

const Title = styled.h4`
    width: 80%;
    margin-top: -20px;
    margin-left: auto;
    margin-right: auto;
    color : #0090e3;
    background-color : #282c34;
`

export default PressAverage;