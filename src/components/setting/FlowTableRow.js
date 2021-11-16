import React from "react";
import { TableBody, TableRow, TableCell, TextField, InputAdornment } from "@mui/material";
import { Provider } from 'react-redux';
import store from '../redux/store';
import SettingValues from "./SettingValues";

const FlowTableRow = (props) => {
    return (
        <Provider store={store}>
        <TableBody>
            <TableRow>
                <TableCell rowSpan={2}>{props.line}라인 유량계{props.label}</TableCell>
                <TableCell>관심</TableCell>
                <TableCell>진입부 유량 - 가압장 유량</TableCell>
                <TableCell>
                    {/* <TextField 
                        defaultValue="3"
                        size="small"
                        variant="standard"
                        style={{width: '60px'}} 
                        InputProps={{
                            endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                        }} 
                    /> */}
                    <SettingValues/>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>이상</TableCell>
                <TableCell>진입부 유량 - 가압장 유량</TableCell>
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
        </Provider>
    )
        
}

export default FlowTableRow;