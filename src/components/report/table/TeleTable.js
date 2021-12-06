import React from "react";

const TeleTable = () => {
    return (
        <table className="teleTb">
            <thead>
                <tr>
                    <th>상태</th>
                    <th>진입부 유량계</th>
                    <th>가압장 유량계</th>
                    <th>집수조 수위계</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>전용회선</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>무선통신</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>통신이상</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TeleTable;