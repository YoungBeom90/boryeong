import React, { useRef } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import axios from 'axios';
import { initFlowSetData } from '../../redux/valueRangeSettings/actions';
import { useDispatch } from 'react-redux';

const DangerFlowValues = (props) => {
    const dispatch = useDispatch();

    const valueInput = useRef();
    const rowIndexRef = useRef();

    const updateData = () => {

        console.log(valueInput.current.id);
        console.log(valueInput.current.value);

        let data = {
            id : valueInput.current.id,
            dangerVal: valueInput.current.value,
            warningVal : props.rowData[rowIndexRef.current.id].warningVal,
            kind: props.rowData[rowIndexRef.current.id].kind,
            line: props.rowData[rowIndexRef.current.id].line,
            name: props.rowData[rowIndexRef.current.id].name,
            cretDt: props.rowData[rowIndexRef.current.id].cretDt,
            updtDt: props.rowData[rowIndexRef.current.id].updtDt,
            sort: props.rowData[rowIndexRef.current.id].sort,
        }
        
        axios.post("/api/saveSetting", data)
        .then( async (res) => {
            if(res) {
                alert("설정 되었습니다.");
                dispatch( await initFlowSetData());
            }
        })
        .catch(() => {
            alert("서버 수정 요청 실패.");
        });

    }

    return (     
        <div>
            <TextField 
                inputRef={valueInput}
                id={props.id}
                defaultValue={props.value}
                data={props.rowIndex}
                size="small"
                variant="standard"
                style={{width: '80px'}} 
                InputProps={{
                    endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                }} 
            /> 
            <Button 
                onClick={()=>{updateData()}} 
                ref={rowIndexRef}
                id={props.rowIndex}
                variant="outlined" 
                color="error" 
                style={{marginLeft: 13}}
                >저장</Button>
        </div>               
    )
}

export default DangerFlowValues;