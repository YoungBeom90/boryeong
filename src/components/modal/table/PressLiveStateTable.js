import React, {useEffect, useState} from "react";
import {TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import axios from "axios";

/**
 * // 수압 상태 실시간 화면 표시 테이블
 * @param {title} param0 
 * @returns 
 */
const PressLiveStateTable = ({options}) => {

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

    useEffect(() => {
        document.getElementById("selectDataBtn").addEventListener("click", () => {
            let kind;
            let direction = options.direction;

            if(options.title==="수압계") {
                kind="PRESS";
            } else if(options.title==="밸브") {
                kind="VALVE";
            } else {
                kind="TELE";
            }
    
            axios.get(`/api/dashboard/popup?kind=${kind}&direction=${direction}&fromDate=2021-11-23&toDate=2021-11-23`)
            .then(({data}) => {
                // console.log(data[0]);
                const liveData = data[0]; 

                let temp = [];

                let keys = Object.keys(liveData);
                keys.map((item, index) => {
                    if(item.includes("수압") || item.includes("밸브") || item.includes("통신")) {
                        // console.log(liveData[item].status);
                        temp.push(liveData[item].status);
                    }
                });
                // console.log(temp);

                temp.map((item, index) => {
                    const target = document.querySelector("#live" + index);
                    
                    // 상태 표시
                    if(item=="find" || item==="OPEN" || item==="전용회선") {
                        // console.log(target);
                        target.setAttribute("style", "background: #ffc830");
                    } else {
                        target.setAttribute("style", "background: #fff");
                    } 

                })
                
            });
        })
    }, []);
    

    

    return (
        <TableContainer component={Paper} elevation={5} style={{marginTop: 10}}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        
                        {
                            header.map((item, index) => {
                                return (
                                    <TableCell id={"live" + index} key={index}>{item}</TableCell>
                                )
                            })
                        }
                        <TableCell><button id="selectDataBtn">데이터조회</button></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default PressLiveStateTable;