import React from "react";

const Supply = ({splyData}) => {

    return(
        <div className="flow-box-wrap">
            <div className="title">공급량</div>
            <div className="flow-box">
                <ul>
                    <li>
                        <div className="sub-title">금일</div>
                        <div className="quantity">{splyData.todaySupply !== "" ? splyData.todaySupply : "-"}</div>
                        <div className="unit">㎥</div>
                    </li>
                    <li>
                        <div className="sub-title">주간</div>
                        <div className="quantity">{splyData.weekSupply !== "" ? splyData.weekSupply : "-"}</div>
                        <div className="unit">㎥</div>
                    </li>
                    <li>
                        <div className="sub-title">일간</div>
                        <div className="quantity">{splyData.monthSupply !== "" ? splyData.monthSupply : "-"}</div>
                        <div className="unit">㎥</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Supply;