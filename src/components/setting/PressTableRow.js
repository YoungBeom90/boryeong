import React from "react";
import { TableBody, TableRow, TableCell, TextField, InputAdornment } from "@mui/material";
import WarningFlowValues from "./values/WarningFlowValues";
import DangerFlowValues from "./values/DangerFlowValues";

const PressTableRow = (props) => {

    const cmmnStyle = props.cmmnStyle;

    return (
        <TableBody>
            <TableRow>
                <TableCell style={cmmnStyle.tableBody} rowSpan={2}>{props.name}</TableCell>
                <TableCell style={cmmnStyle.tableBody}>관심</TableCell>
                <TableCell style={cmmnStyle.tableBody}>수압계 시간대별 수압차이</TableCell>
                <TableCell style={cmmnStyle.tableBody}>
                    <WarningFlowValues value={props.wValue} id={props.id} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={cmmnStyle.tableBody}>이상</TableCell>
                <TableCell style={cmmnStyle.tableBody}>수압계 시간대별 수압차이</TableCell>
                <TableCell style={cmmnStyle.tableBody}>
                    <DangerFlowValues value={props.dValue} id={props.id}/>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default PressTableRow;