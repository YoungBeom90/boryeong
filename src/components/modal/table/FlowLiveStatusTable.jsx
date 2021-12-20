import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from "@mui/material";

const FlowLiveStatusTable = ({status}) => {
    
    const statusKeysA = Object.keys(status.A);
    const statusKeysB = Object.keys(status.B);
    console.log(status);
    return (
        <div>
            {/* <!-- 수압상태현황 표시 --> */}
            <div className="content-list">
                <h2>수압 상태 현황</h2>
            </div>		
            {/* <!-- 보령 방향 --> */}
            <div className="pipeline-state" style={{marginTop: "20px"}}>				 
                <div className="side-info">◀ 보령 방향 (A라인)</div>
                <div className="middle-info">
                    <ul>
                    {
                        statusKeysA.map((item, index) => {
                            index++;
                            return (<li key={item} style={{background : status.A[item]}}>{item}</li>)
                        })
                    }
                    </ul>
                </div>
                <div className="side-info"><button className="btn btn-secondary">데이터 조회</button></div>					
            </div>
            {/* <!-- //보령 방향 --> */}
            {/* <!-- 원산도 방향 --> */}
            <div className="pipeline-state">				 
                <div className="side-info">▶ 원산도 방향 (B라인)</div>
                <div className="middle-info">
                    <ul>
                    {
                        statusKeysB.map((item, index) => {
                            index++;
                            return (<li key={item} style={{background : status.B[item]}}>{item}</li>)
                        })
                    }
                    </ul>
                </div>
                <div className="side-info"><button className="btn btn-secondary">데이터 조회</button></div>					
            </div>
            {/* <!-- //원산도 방향 --> */}
            {/* <!-- //수압상태현황 표시 --> */}
        </div>
    )
}

export default FlowLiveStatusTable;