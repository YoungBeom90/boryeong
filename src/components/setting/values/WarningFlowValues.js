import React, { useRef } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import axios from 'axios';
import { initFlowSetData } from '../../redux/valueRangeSettings/actions';
import { useDispatch } from 'react-redux';


const WarningFlowValues = (props) => {
    // if(props.rowData) {
    //     console.log(props.rowIndex);
    // }
    const dispatch = useDispatch();

    const valueInputRef = useRef();
    const rowIndexRef = useRef();

    const updateData = () => {

        // console.log(valueInputRef.current.id);
        // console.log(valueInputRef.current.value);

        let data = {
            id : valueInputRef.current.id,
            warningVal : valueInputRef.current.value,
            dangerVal: props.rowData[rowIndexRef.current.id].dangerVal,
            kind: props.rowData[rowIndexRef.current.id].kind,
            line: props.rowData[rowIndexRef.current.id].line,
            name: props.rowData[rowIndexRef.current.id].name,
            cretDt: props.rowData[rowIndexRef.current.id].cretDt,
            updtDt: props.rowData[rowIndexRef.current.id].updtDt,
            sort: props.rowData[rowIndexRef.current.id].sort,
        }

        console.log(data);
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
                inputRef={valueInputRef}
                id={props.id}
                defaultValue={props.value}
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
                color="primary" 
                style={{marginLeft: 13}}
                >저장</Button>
        </div> 
    )
}

export default WarningFlowValues;