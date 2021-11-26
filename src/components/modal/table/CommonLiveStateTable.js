import React from "react";
import {TableContainer, Paper, Table, TableHead, TableRow, TableCell} from '@mui/material';

/**
 * // 수압 상태 실시간 화면 표시 테이블
 * @param {title} param0 
 * @returns 
 */
const CommonLiveStateTable = ({options, status}) => {

    const statusKeys = Object.keys(status);
    
    return (
        <TableContainer component={Paper} elevation={5} style={{marginTop: 10}}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {
                            statusKeys.map((item, index) => {
                                index++;
                                return (<TableCell key={item} sx={{background : status[item]}} align="center">{item}</TableCell>)
                            })
                        }
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default CommonLiveStateTable;