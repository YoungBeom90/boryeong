import React from "react";

const DepthTable = ({data}) => {
    console.log(data);
    return (
        <table className="depthTb">
            <thead>
                <tr>
                    <th>일 평균 수위 [A]</th>
                    <th>일 최대 수위 [B]</th>
                    <th>일 최소 수위  [C]</th>
                    <th>전일 평균 수위 [D]</th>
                    <th>전일 최대 수위 [E]</th>
                    <th>전일 평균 대비 [A-D]</th>
                    <th>전일 최대 대비 [B-E]</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.todayAvg}</td>
                    <td>{data.todayMax}</td>
                    <td>{data.todayMin}</td>
                    <td>{data.beforeAvg}</td>
                    <td>{data.beforeMax}</td>
                    <td>{data.beforeMin}</td>
                    <td>{data.compare}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default DepthTable;