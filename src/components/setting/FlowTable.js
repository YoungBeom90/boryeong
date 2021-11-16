import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from '@mui/material';
import FlowTableRow from './FlowTableRow';

const FlowTable = () => {

    const tableHead = {
        fontWeight: 'bold',
    }

    return (
        <TableContainer component={Paper} sx={{bgcolor: '#FFFFFF', marginBottom: '30px'}}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell style={tableHead}>감시유형</TableCell>
                        <TableCell style={tableHead}>누수결과</TableCell>
                        <TableCell style={tableHead}>감시방법</TableCell>
                        <TableCell style={tableHead}>감시기준</TableCell>
                    </TableRow>
                </TableHead>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item) => {
                        return (
                            <FlowTableRow line={"A"} label={item}/>
                        )                                    
                    })
                }
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item) => {
                        return (
                            <FlowTableRow line={"B"} label={item}/>
                        )                                    
                    })
                }
            </Table>
        </TableContainer>
    )
}

export default FlowTable;