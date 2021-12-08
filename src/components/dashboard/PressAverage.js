import React from "react";

const PressAverage = ({pressData}) => {

    return (
        <div className="flow-box-wrap">
            <div className="title">평균 수압</div>
            <div className="flow-box">
                <ul>
                    <li>
                        <div className="sub-title">금일</div>
                        <div className="quantity">{pressData.todayPress !== "" ? pressData.todayPress : "-"}</div>
                        <div className="unit">kfg/㎠</div>
                    </li>
                    <li>
                        <div className="sub-title">주간</div>
                        <div className="quantity">{pressData.weekPress !== "" ? pressData.weekPress : "-"}</div>
                        <div className="unit">kfg/㎠</div>
                    </li>
                    <li>
                        <div className="sub-title">일간</div>
                        <div className="quantity">{pressData.monthPress !== "" ? pressData.monthPress : "-"}</div>
                        <div className="unit">kfg/㎠</div>
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
//     top : 46%;
//     left : 10%;
//     border : 1px solid #0090e3;
// `

// const Header = styled.h3`
//     width : 200px;
//     font-size: 25;
//     color : #0090e3;
//     margin-top : -20px;
//     margin-left : auto;
//     margin-right : auto;
//     background-color : #282c34;
// `

// const Average = styled.div`
//     width: 22%;
//     height: 45%;
//     border : 1px solid #0090e3;
//     display: inline-block;
//     margin : 2% 5%
    
// `

// const Title = styled.h4`
//     width: 80%;
//     margin-top: -20px;
//     margin-left: auto;
//     margin-right: auto;
//     color : #0090e3;
//     background-color : #282c34;
// `

export default PressAverage;