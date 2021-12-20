import React from "react";

const TeleDirectionTable = ({data}) => {
    return (
        <table className="teleDirTb" style={{marginTop: "10px"}}>
            <thead>
                <tr>
                    <th>구분</th>
                    <th>구분</th>
                    <th>통신1</th>
                    <th>통신2</th>
                    <th>통신3</th>
                    <th>통신4</th>
                    <th>통신5</th>
                    <th>통신6</th>
                    <th>통신7</th>
                    <th>통신8</th>
                    <th>통신9</th>
                    <th>통신10</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan="3">A라인(보령방향)</td>
                    <td>전용회선</td>
                    <td>{data.A.전용회선.TELE1.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE2.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE3.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE4.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE5.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE6.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE7.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE8.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE9.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                    <td>{data.A.전용회선.TELE10.map((item, i, row) => (i+1 === row.length ? item : item + ", "))}</td>
                </tr>
                <tr>
                    <td>무선통신</td>
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
                    <td>통신이상</td>
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
                    <td rowSpan="3">B라인(태안방향)</td>
                    <td>전용회선</td>
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
                    <td>무선통신</td>
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
                    <td>통신이상</td>
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

export default TeleDirectionTable;