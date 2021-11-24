import React, {useEffect, useRef} from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from '@mui/material';
import PressTableRow from './PressTableRow';
import { connect } from 'react-redux';
import { initPressSetData } from '../redux/valueRangeSettings/actions';

const PressTable = (props) => {

    const cmmnStyle = props.cmmnStyle;

    const pressRef = useRef([]);

    useEffect(() => {
        props.initPressSetData();
        console.log(props);
    }, []);

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
                    props.press.map((item, key) => {
                        return (
                            <PressTableRow wValue={item.warningVal} dValue={item.dangerVal} name={item.name} id={item.id} key={key} cmmnStyle={cmmnStyle} />
                        )                                    
                    })
                }
                
            </Table>
        </TableContainer>
    )
}


const mapStateToProps = (state) => {

    return {
        value : state.value,
        flow : state.flow,
        press : state.press
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initPressSetData : async () => dispatch( await initPressSetData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PressTable);