import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from "@mui/material";

const FlowLiveStateTable = ({options, status}) => {
    console.log("FlowLiveStateTable");
    const header = [
        options.title+'1',
        options.title+'2',
        options.title+'3',
        options.title+'4',
        options.title+'5',
        options.title+'6',
        options.title+'7',
        options.title+'8',
        options.title+'9',
        options.title+'10'
    ];

    // const selectDataBtnBr = (direction) => {
    //     axios.get(`/api/dashboard/popup?kind=FLOW&direction=${direction}&fromDate=2021-11-23&toDate=2021-11-23`)
    //         .then(({data}) => {
    //             console.log(data[0]);
    //             const liveData = data[0]; 
    //             let temp = [];
    //             let keys = Object.keys(liveData);
                
    //             if(!liveData) return;

    //             keys.map((item, index) => {
    //                 console.log(liveData[item].status);
    //                 temp.push(liveData[item].status);
    //             });
    //             // console.log(temp);

    //             temp.map((item, index) => {
    //                 let target = "";

    //                 if(direction === "A") {
    //                     target = document.querySelector("#liveBr" + index);
    //                 } else {
    //                     target = document.querySelector("#liveWs" + index);
    //                 }
                    
    //                 // 상태 표시
    //                 if(item=="normal" || item==="OPEN" || item==="전용회선") {
    //                     // console.log(target);
    //                     target.setAttribute("style", "background: #ffc830");
    //                 } else {
    //                     target.setAttribute("style", "background: #fff");
    //                 } 

    //             })
                
    //         });
    // }    

    return (
        <TableContainer component={Paper} elevation={5} style={{marginTop: 10}}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell >보령방향</TableCell>
                        {
                            header.map((item, index) => {
                                return (
                                    <TableCell id={"liveBr" + index} key={item}>{item}</TableCell>
                                )
                            })
                        }
                        {/* <TableCell><button id="selectDataBtnBr" onClick={selectDataBtnBr("A")}>데이터조회</button></TableCell> */}
                    </TableRow>
                </TableHead>
            </Table>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>원산도방향</TableCell>
                        {
                            header.map((item, index) => {
                                return (
                                    <TableCell id={"liveWs" + index} key={index}>{item}</TableCell>
                                )
                            })
                        }
                        {/* <TableCell><button id="selectDataBtnWs" onClick={selectDataBtnWs("B")}>데이터조회</button></TableCell> */}
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default FlowLiveStateTable;