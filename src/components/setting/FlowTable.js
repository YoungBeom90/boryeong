import React, { useState, useRef, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, Button } from '@mui/material';
import FlowTableRow from './FlowTableRow';
import { connect } from "react-redux";
import { initFlowSetData } from '../redux/valueRangeSettings/actions';

const FlowTable = (props) => {

    const cmmnStyle = props.cmmnStyle;
    
    // const tableHead = {
    //     fontWeight: 'bold',
    // }

    // const [changeVal, setChangeVal] = useState(0);
    // const [text, setText] = useState("");

    // const inputEl = useRef(null);
    
    // const onButtonClick = () => {
    //     setText("Thank you!!");
    //     inputEl.current.focus();
    // }

    useEffect(() => {
        props.initFlowSetData();
        console.log(props);
    }, []);

    return (
        <TableContainer component={Paper} sx={{bgcolor: '#FFFFFF', marginBottom: '30px'}}>
            {/* <Button onClick={()=> {props.addValue(); setChangeVal(changeVal + 1);}}>관심 유량기준 + 1</Button>
            <Button onClick={()=> {props.removeValue(); setChangeVal(changeVal - 1);}}>관심 유량기준 - 1</Button>
            <p>[변경 값 : {changeVal}]</p>
            <input ref={inputEl} type="text" defaultValue={text}/>
            <button onClick={onButtonClick}>Focus the input</button> */}
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
                    props.flow.map((item, key) => {
                        
                        return (
                            <FlowTableRow wValue={item.warningVal} dValue={item.dangerVal} name={item.name} id={item.id} key={key} cmmnStyle={cmmnStyle} />
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
        initFlowSetData : async () => dispatch( await initFlowSetData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlowTable);