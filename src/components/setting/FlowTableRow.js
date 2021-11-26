import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import WarningFlowValues from "./values/WarningFlowValues";
import DangerFlowValues from "./values/DangerFlowValues";


const FlowTableRow = (props) => {
    
    const cmmnStyle = props.cmmnStyle;

    return (
        <TableBody>
            <TableRow>
                <TableCell style={cmmnStyle.tableBody} rowSpan={2}>{props.name}</TableCell>
                <TableCell style={cmmnStyle.tableBody}>관심</TableCell>
                <TableCell style={cmmnStyle.tableBody}>진입부 유량 - 가압장 유량</TableCell>
                <TableCell style={cmmnStyle.tableBody}>
                    <WarningFlowValues value={props.wValue} id={props.id} rowData={props.rowData} rowIndex={props.rowIndex}/>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={cmmnStyle.tableBody}>이상</TableCell>
                <TableCell style={cmmnStyle.tableBody}>진입부 유량 - 가압장 유량</TableCell>
                <TableCell style={cmmnStyle.tableBody}>
                    <DangerFlowValues value={props.dValue} id={props.id} rowData={props.rowData} rowIndex={props.rowIndex} />
                </TableCell>
            </TableRow>
        </TableBody> 
    )
        
}



export default FlowTableRow;