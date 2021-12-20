import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import WarningPressFlowValues from "./values/WarningPressFlowValues";
import DangerPressFlowValues from "./values/DangerPressFlowValues";


const FlowTableRow = (props) => {
    
    const cmmnStyle = props.cmmnStyle;
    return (
        <TableBody>
            <TableRow>
                <TableCell style={cmmnStyle.tableBody} rowSpan={2}>{props.name}</TableCell>
                <TableCell style={cmmnStyle.tableBody}>관심</TableCell>
                <TableCell style={cmmnStyle.tableBody}>진입부 유량 - 가압장 유량</TableCell>
                <TableCell style={cmmnStyle.tableBody}>
                    <WarningPressFlowValues value={props.wValue} id={props.id} rowData={props.rowData} rowIndex={props.rowIndex}/>
                </TableCell>
            </TableRow>
            <TableRow sx={{background: '#fff4ed'}}>
                <TableCell style={cmmnStyle.tableBody}>이상</TableCell>
                <TableCell style={cmmnStyle.tableBody}>진입부 유량 - 가압장 유량</TableCell>
                <TableCell style={cmmnStyle.tableBody}>
                    <DangerPressFlowValues value={props.dValue} id={props.id} rowData={props.rowData} rowIndex={props.rowIndex} />
                </TableCell>
            </TableRow>
        </TableBody> 
    )
        
}



export default FlowTableRow;