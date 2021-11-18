import React from "react";
import { TableBody, TableRow, TableCell, TextField, InputAdornment } from "@mui/material";

const PressTableRow = (props) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell rowSpan={2}>{props.line}라인 수압계{props.id}</TableCell>
                <TableCell>관심</TableCell>
                <TableCell>수압계 시간대별 수압차이</TableCell>
                <TableCell>
                    <TextField 
                        defaultValue="3"
                        size="small"
                        variant="standard"
                        style={{width: '60px'}} 
                        InputProps={{
                            endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                        }} 
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>이상</TableCell>
                <TableCell>수압계 시간대별 수압차이</TableCell>
                <TableCell>
                    <TextField 
                        defaultValue="4"
                        size="small"
                        variant="standard"
                        style={{width: '60px'}} 
                        InputProps={{
                            endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                        }} 
                    />
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default PressTableRow;