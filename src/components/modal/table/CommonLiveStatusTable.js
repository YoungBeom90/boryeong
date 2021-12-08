import React from "react";

/**
 * // 수압 상태 실시간 화면 표시 테이블
 * @param {title} param0 
 * @returns 
 */
const CommonLiveStatusTable = ({status, options}) => {

    let statusKeys = Object.keys(status);
    if(options.title==="수심") {
        statusKeys = [];
        statusKeys.push("수심1");
    }
    return (
        <div>
            {/* <!-- 수압상태현황 표시 --> */}
            <div className="content-list">
                <h2>{options.title} 상태 현황</h2>
            </div>		
            <div className="pipeline-state" style={{marginTop: "20px"}}>				 
                <div className="side-info">{options.location}({options.direction}라인)</div>
                <div className="middle-info">
                    <ul>
                    {
                        statusKeys.map((item, index) => {
                            index++;
                            return (<li key={item} style={{background : status[item]}}>{item}</li>)
                        })
                    }
                    </ul>
                </div>
                <div className="side-info"><button className="btn btn-secondary">데이터 조회</button></div>					
            </div>
        </div>
    )
}

export default CommonLiveStatusTable;