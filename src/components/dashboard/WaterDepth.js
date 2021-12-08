import React from "react";

const WaterDepth = ({depthData}) => {

    return (
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

export default WaterDepth;