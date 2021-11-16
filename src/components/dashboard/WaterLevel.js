import React, {useState,useEffect} from "react";
import styled from "styled-components";

function WaterLevel(props) {

    return (
        <Section>
            <Header>집수조 수심</Header>
            <Level>
                <Title>현재</Title>
                <p>{props.today != "" ? props.today : "-"}</p>
            </Level>
            <Level>
                <Title>1시간전</Title>
                <p>{props.today != "" ? props.today : "-"}</p>
            </Level>
            <Level>
                <Title>2시간전</Title>
                <p>{props.today != "" ? props.today : "-"}</p>
            </Level>
        </Section>
    )
}

const Section = styled.div`
    width : 30%;
    height : 16%;
    position : absolute;
    top : 70%;
    left : 10%;
    border : 1px solid #0090e3;
`

const Header = styled.h3`
    width : 200px;
    font-size: 25;
    color : #0090e3;
    margin-top : -23px;
    margin-left : auto;
    margin-right : auto;
    background-color : #282c34;
`

const Level = styled.div`
    width: 22%;
    height: 44%;
    border : 1px solid #0090e3;
    display: inline-block;
    margin : 0px 5%
    
`

const Title = styled.h4`
    width: 80%;
    margin-top: -20px;
    margin-left: auto;
    margin-right: auto;
    color : #0090e3;
    background-color : #282c34;
`

export default WaterLevel;