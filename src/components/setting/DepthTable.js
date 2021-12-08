import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from '@mui/material';
import DepthTableRow from './DepthTableRow';
import axios from 'axios';

const DepthTable = (props) => {
    // console.log(props.depth);
    const cmmnStyle = props.cmmnStyle;

    const [depthVal, setDepthVal] = useState({})
    const [oneData, setOneData] = useState([]);
    const [twoData, setTwoData] = useState([]);

    useEffect(() => {
        axios.get("/api/settings?type=DEPTH")
        .then(({data}) => {
            setDepthVal({
                oneHourWarn : data[0].warningVal,
                twoHourWarn : data[1].warningVal,
                oneHourDang : data[0].dangerVal,
                twoHourDang : data[1].dangerVal
            })
            setOneData(data[0]);
            setTwoData(data[1]);
        })
    }, [])

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
                <DepthTableRow depthVal={depthVal} oneData={oneData} twoData={twoData} cmmnStyle={cmmnStyle} />
            </Table>
        </TableContainer>
    )
}

export default DepthTable;