import React from "react";
import { TableBody, TableRow, TableCell, TextField, InputAdornment } from "@mui/material";
import WarningFlowValues from "./values/WarningFlowValues";
import DangerFlowValues from "./values/DangerFlowValues";


const FlowTableRow = (props) => {
    console.log(props.name);
    return (
        <TableBody>
            <TableRow>
                <TableCell rowSpan={2}>{props.name}</TableCell>
                <TableCell>관심</TableCell>
                <TableCell>진입부 유량 - 가압장 유량</TableCell>
                <TableCell>
                    <WarningFlowValues value={props.wValue} id={props.id} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>이상</TableCell>
                <TableCell>진입부 유량 - 가압장 유량</TableCell>
                <TableCell>
                    <DangerFlowValues value={props.dValue} id={props.id}/>
                </TableCell>
            </TableRow>
        </TableBody> 
    )
        
}



export default FlowTableRow;