import React from "react";
// import styled from "styled-components";

const WaterDepth = ({depthData}) => {

    return (
        // <Section>
        //     <Header>집수조 수심</Header>
        //     <Level>
        //         <Title>현재</Title>
        //         <p>{depthData.depthNow !== "" ? depthData.depthNow : "-"}</p>
        //     </Level>
        //     <Level>
        //         <Title>1시간전</Title>
        //         <p>{depthData.depth1h !== "" ? depthData.depth1h : "-"}</p>
        //     </Level>
        //     <Level>
        //         <Title>2시간전</Title>
        //         <p>{depthData.depth2h !== "" ? depthData.depth2h : "-"}</p>
        //     </Level>
        // </Section>
        <div className="flow-box-wrap">
            <div className="title">집수조 수심</div>
            <div className="flow-box">
                <ul>
                    <li>
                        <div className="sub-title">현재</div>
                        <div className="quantity">{depthData.depthNow !== "" ? depthData.depthNow : "-"}</div>
                        <div className="unit">m</div>
                    </li>
                    <li>
                        <div className="sub-title">1시간전</div>
                        <div className="quantity">{depthData.depth1h !== "" ? depthData.depth1h : "-"}</div>
                        <div className="unit">m</div>
                    </li>
                    <li>
                        <div className="sub-title">2시간전</div>
                        <div className="quantity">{depthData.depth2h !== "" ? depthData.depth2h : "-"}</div>
                        <div className="unit">m</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

// const Section = styled.div`
//     width : 30%;
//     height : 16%;
//     position : absolute;
//     top : 70%;
//     left : 10%;
//     border : 1px solid #0090e3;
// `

// const Header = styled.h3`
//     width : 200px;
//     font-size: 25;
//     color : #0090e3;
//     margin-top : -23px;
//     margin-left : auto;
//     margin-right : auto;
//     background-color : #282c34;
// `

// const Level = styled.div`
//     width: 22%;
//     height: 44%;
//     border : 1px solid #0090e3;
//     display: inline-block;
//     margin : 0px 5%
    
// `

// const Title = styled.h4`
//     width: 80%;
//     margin-top: -20px;
//     margin-left: auto;
//     margin-right: auto;
//     color : #0090e3;
//     background-color : #282c34;
// `

export default WaterDepth;