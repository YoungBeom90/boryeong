import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from '@mui/material';
import PressTableRow from './PressTableRow';

const PressTable = () => {

    const tableHead = {
        fontWeight: 'bold',
    }

    const pressObj = [
        {id : 1, line : "A"}, 
        {id : 2, line : "A"},
        {id : 3, line : "A"},
        {id : 4, line : "A"},
        {id : 5, line : "A"},
        {id : 6, line : "A"},
        {id : 7, line : "A"},
        {id : 8, line : "A"},
        {id : 9, line : "A"},
        {id : 10, line : "A"},
        {id : 11, line : "B"},
        {id : 12, line : "B"},
        {id : 13, line : "B"},
        {id : 14, line : "B"},
        {id : 15, line : "B"},
        {id : 16, line : "B"},
        {id : 17, line : "B"},
        {id : 18, line : "B"},
        {id : 19, line : "B"},
        {id : 20, line : "B"},        
    ];

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
                    pressObj.map((item, key) => {
                        return (
                            <PressTableRow line={item.line} label={item.id} key={key} />
                        )                                    
                    })
                }
                
            </Table>
        </TableContainer>
    )
}

export default PressTable;