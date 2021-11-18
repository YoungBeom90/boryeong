import React, { useState, useRef, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, Button } from '@mui/material';
import FlowTableRow from './FlowTableRow';
import { connect } from "react-redux";
import { addValue, removeValue, initData } from '../redux/valueRangeSettings/actions';

const FlowTable = (props) => {

    console.log("store value: ", props.value);
    console.log("store data: ", props.data);
    
    const tableHead = {
        fontWeight: 'bold',
    }

    const [changeVal, setChangeVal] = useState(0);
    const [text, setText] = useState("");

    const inputEl = useRef(null);
    const onButtonClick = () => {
        setText("Thank you!!");
        inputEl.current.focus();
    }

    const dataInit = () => {
        props.initData();
    }

    useEffect(() => {
        dataInit();
    }, []);

    return (
        <TableContainer component={Paper} sx={{bgcolor: '#FFFFFF', marginBottom: '30px'}}>
            <Button onClick={()=> {props.addValue(); setChangeVal(changeVal + 1);}}>관심 유량기준 + 1</Button>
            <Button onClick={()=> {props.removeValue(); setChangeVal(changeVal - 1);}}>관심 유량기준 - 1</Button>
            <p>[변경 값 : {changeVal}]</p>
            <input ref={inputEl} type="text" defaultValue={text}/>
            <button onClick={onButtonClick}>Focus the input</button>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell style={tableHead}>감시유형</TableCell>
                        <TableCell style={tableHead}>누수결과</TableCell>
                        <TableCell style={tableHead}>감시방법</TableCell>
                        <TableCell style={tableHead}>감시기준</TableCell>
                    </TableRow>
                </TableHead>
                {
                    props.data.map((item, key) => {
                        console.log("items....================>",item);
                        return (
                            <FlowTableRow wValue={item.warningVal} dValue={item.dangerVal} name={item.name} id={item.id} key={key}/>
                        )    
                    })
                }
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = (state) => {
 
    console.log("props state =======> ", state);

    return {
        value : state.value,
        data : state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addValue : () => dispatch(addValue()),
        removeValue : () => dispatch(removeValue()),
        initData : async () => dispatch( await initData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlowTable);