import React from 'react';
import styled from 'styled-components';

function StateInfoBr(props) {

    return (
        <Section>
            <Header>보령 방향</Header>
            <State>
                <Title>수압상태</Title>  
                <p>{props.brData.press != '' ? props.brData.press : "-"}</p>
            </State>
            <State> 
                <Title>밸브상태</Title>
                <p>{props.brData.valve != '' ? props.brData.valve : "-"}</p>
            </State>
            <State>
                <Title>통신상태</Title>
                <p>{props.brData.telecom != '' ? props.brData.telecom : "-"}</p>
            </State>
        </Section>
    )
}

const Section = styled.div`
    width : 45%;
    height : 20%;
    position: absolute;
    right: 5%;
    border : 1px solid #0090e3;
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

const State = styled.div`
    width: 25%;
    height: 50%;
    border : 1px solid #0090e3;
    display: inline-block;
    margin: 2%;
`

const Title = styled.h4`
    width: 80%;
    margin-top: -20px;
    margin-left: auto;
    margin-right: auto;
    color : #0090e3;
    background-color : #282c34;
`
export default StateInfoBr;