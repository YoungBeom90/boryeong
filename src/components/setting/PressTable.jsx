import React, {useEffect} from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from '@mui/material';
import PressTableRow from './PressTableRow';

const PressTable = (props) => {
    const cmmnStyle = props.cmmnStyle;

    return (
        <TableContainer component={Paper} sx={{bgcolor: '#FFFFFF', marginBottom: '30px'}}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell style={cmmnStyle.tableHead}>감시유형</TableCell>
                        <TableCell style={cmmnStyle.tableHead}>누수결과</TableCell>
                        <TableCell style={cmmnStyle.tableHead}>감시방법</TableCell>
                        <TableCell style={cmmnStyle.tableHead}>감시기준</TableCell>
                    </TableRow>
                </TableHead>
                {
                    props.press.map((item, i) => {
                        return (
                            <PressTableRow 
                                rowData={props.press} 
                                wValue={item.warningVal} 
                                dValue={item.dangerVal} 
                                name={item.name} 
                                id={item.id} 
                                key={i} 
                                cmmnStyle={cmmnStyle} 
                                rowIndex={i}
                            />
                        )                                    
                    })
                }
                
            </Table>
        </TableContainer>
    )
}

export default PressTable;