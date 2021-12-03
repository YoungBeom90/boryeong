import React from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import DepthValues from './values/DepthValues'


const DepthTableRow = (props) => {
    // console.log(props.depthVal)
    const cmmnStyle = props.cmmnStyle;
    return (
        <TableBody>
            <TableRow>
                <TableCell style={cmmnStyle.tableBody} rowSpan={4}>집수조 수위</TableCell>
                <TableCell style={cmmnStyle.tableBody} rowSpan={2}>관심</TableCell>
                <TableCell style={cmmnStyle.tableBody}>현재 수위 - 1시간전 수위</TableCell>
                    <DepthValues cmmnStyle={cmmnStyle} id="oneHourWarn" value={props.depthVal.oneHourWarn} origin={props.oneData}  />
            </TableRow>
            <TableRow>
                <TableCell style={cmmnStyle.tableBody}>현재 수위 - 2시간전 수위</TableCell>
                    <DepthValues cmmnStyle={cmmnStyle} id="twoHourWarn" value={props.depthVal.twoHourWarn} origin={props.twoData}/>
            </TableRow>
            <TableRow sx={{background: '#fff4ed'}}>
                <TableCell style={cmmnStyle.tableBody} rowSpan={2}>이상</TableCell>
                <TableCell style={cmmnStyle.tableBody}>현재 수위 - 1시간전 수위</TableCell>
                    <DepthValues cmmnStyle={cmmnStyle} id="oneHourDang" value={props.depthVal.oneHourDang} origin={props.oneData}/>
            </TableRow >
            <TableRow sx={{background: '#fff4ed'}}>
                <TableCell style={cmmnStyle.tableBody}>현재 수위 - 2시간전 수위</TableCell>
                    <DepthValues cmmnStyle={cmmnStyle} id="twoHourDang" value={props.depthVal.twoHourDang} origin={props.twoData}/>
            </TableRow>
        </TableBody> 
    )
        
}



export default DepthTableRow;