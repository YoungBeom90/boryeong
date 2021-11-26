import React from "react";
import {TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';

/**
 * // 수압 상태 조회 결과 테이블
 * @param {title, rowData} param0 
 * @returns 
 */
const CommonSearchStateTable = ({options, tableData}) => {


    // 수압 상태 조회 결과 테이블
    const header = [
        "날짜",
        "시간",
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

    return (
        <TableContainer component={Paper} elevation={5} sx={{ maxHeight: 440, marginTop: 2 }}>
            <Table stickyHeader size="small">
                <TableHead>
                    <TableRow>
                        {
                            header.map((item, index)=> {
                                // let color = "#fff";
                                // let id = "press" + (index);

                                // console.log(id);
                                // if(display[id] === "warning") {
                                //     color = "#f2dd3a";
                                // } else if(display[id] === "danger") {
                                //     color = "#f72f28";
                                // }
                                return (
                                    <TableCell align="center" key={item} sx={{background: "#AEA59F", fontWeight: "bold"}}>{item}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {   
                        tableData.map((rowItem, index) => {
                            
                            // console.log(item);
                            return (
                                <TableRow key={index}>
                                    {
                                        header.map((item, index)=> {
                                            if(!rowItem) return;
                                            // console.log();
                                            if(typeof rowItem[header[index]] == 'object') {
                                                return (
                                                    <TableCell align="center" key={item}>{rowItem[header[index]].val}</TableCell>
                                                )
                                            } else {
                                                return (
                                                    <TableCell align="center" key={item+index}>{rowItem[header[index]]}</TableCell>
                                                )
                                            }

                                            
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CommonSearchStateTable;