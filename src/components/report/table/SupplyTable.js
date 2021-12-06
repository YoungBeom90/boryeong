import React from "react";

const SupplyTable = ({data}) => {
    return (
        <table className="supplyTb">
            <thead>
                <tr>
                    <th>일 공급량 [A]</th>
                    <th>전일 공급량 [B]</th>
                    <th>전일 대비 [A-B]</th>
                    <th>일 평균공급량 [C]</th>
                    <th>평균 대비 [A-C]</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.todayFlow}</td>
                    <td>{data.beforeFlow}</td>
                    <td>{data.beforeCompare}</td>
                    <td>{data.avgFlow}</td>
                    <td>{data.avgCompare}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default SupplyTable;