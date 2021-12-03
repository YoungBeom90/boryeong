import React from "react";

const ValveTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>구분</th>
                    <th>상태</th>
                    <th>밸브1</th>
                    <th>밸브2</th>
                    <th>밸브3</th>
                    <th>밸브4</th>
                    <th>밸브5</th>
                    <th>밸브6</th>
                    <th>밸브7</th>
                    <th>밸브8</th>
                    <th>밸브9</th>
                    <th>밸브10</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan="2">A라인(보령방향)</td>
                    <td>Open</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Close</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowSpan="2">B라인(태안방향)</td>
                    <td>Open</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Close</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ValveTable;