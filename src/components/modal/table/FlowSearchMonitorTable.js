import React from "react";
import {TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, Typography} from '@mui/material';

const FlowSearchMonitorTable = ({ options, kind, tableData}) => {
    console.log(kind);
    const headerItemCnt = 1;

    const headerRender = () => {
        let render = [];
        for(let i=1; i<=headerItemCnt; i++) {
            render.push(<TableCell align="center" key={i} sx={{background: "#AEA59F", fontWeight: "bold", zIndex: 0}}>{options.title + i}</TableCell>)
        }
        return render;
    }

    const bodyRender = (tableData) => {
        console.log(tableData);
        if(tableData.length > 0) {
            console.log("True");

            let render = [];
            tableData.map((rowItem, i) => {
        
                // console.log(rowItem);
                let keys = Object.keys(rowItem);
                render.push(
                    <TableRow key={i}>
                        <TableCell align="center" key={i}>{rowItem["date"]}</TableCell>
                        <TableCell align="center" key={rowItem}>{rowItem["time"]}</TableCell>
                        {
                            keys.map((key, j)=> {
                                // console.log(key);
                                // console.log(key + "/" + kind);
                        
                                if(key.includes(kind)) {
                                    let cellStatusColor = '#fff';
                                    if(rowItem[key].status="warning") {
                                        cellStatusColor = '#ffdf75';
                                    } else if(rowItem[key].status="danger") {
                                        cellStatusColor = '#ff7847';
                                    }

                                    return (
                                        <TableCell align="center" style={{background: cellStatusColor}} key={key+j}>{rowItem[key].val}</TableCell>
                                    )
                                }                                            
                            })
                        }
                    </TableRow>
                )
            })
            return render;
        } else {
            return(
                <TableRow>
                    <TableCell colSpan={12} align="center">조회된 정보가 없습니다.</TableCell>
                </TableRow>
            )
        }
    }

    return (
        <div style={{width: "100%"}}>
            {/* <div className="content-list">
                <h2>{options.location}({options.direction}라인) {options.title} 감시 결과</h2>
            </div>			 */}
            <div style={{display: "flow-root"}}>
                <ul className="legend-info">
                    <li><span className="white"></span>정상</li>
                    <li><span className="yellow"></span>관심</li>
                    <li><span className="red"></span>이상</li>
                    <li><a href="#"><p className="tip">?</p></a></li>
                </ul>
            </div>
            <div className="tbl-header">
                
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{margin: 10}}>
                        <Typography sx={{marginTop: 2}}>보령방향</Typography>
                        <TableContainer component={Paper} elevation={5} sx={{width: "63vh",maxHeight : "30vh"}}>
                            <Table stickyHeader size="small">
                                <TableHead sx={{zIndex:1}}>
                                    <TableRow>
                                        <TableCell align="center" sx={{background: "#AEA59F", fontWeight: "bold", zIndex: 0}}>날짜</TableCell>
                                        <TableCell align="center" sx={{background: "#AEA59F", fontWeight: "bold", zIndex: 0}}>시간</TableCell>
                                        {headerRender()}
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{height: "10vh"}}>
                                    {bodyRender(tableData.A)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{margin: 10}}>
                        <Typography sx={{marginTop: 2}}>원산도방향</Typography>
                        <TableContainer component={Paper} elevation={5} sx={{width: "63vh",maxHeight : "30vh"}}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" sx={{background: "#AEA59F", fontWeight: "bold", zIndex: 0}}>날짜</TableCell>
                                        <TableCell align="center" sx={{background: "#AEA59F", fontWeight: "bold", zIndex: 0}}>시간</TableCell>
                                        {headerRender()}
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{height: "10vh"}}>
                                    {bodyRender(tableData.B)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowSearchMonitorTable;