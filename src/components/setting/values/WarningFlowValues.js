import React, { useEffect, useRef } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import axios from 'axios';
import { initData } from '../../redux/valueRangeSettings/actions';
import { useDispatch } from 'react-redux';



const WarningFlowValues = (props) => {

    const dispatch = useDispatch();

    const valueInput = useRef();

    const updateData = () => {

        console.log(valueInput.current.id);
        console.log(valueInput.current.value);
        
        axios.post("http://localhost:8083/api/updateSetting",
            {
                "id" : valueInput.current.id, 
                "warningVal": valueInput.current.value,
            }
        )
        .then( async (res) => {
            if(res) {
                alert("설정 되었습니다.");
                dispatch( await initData());
            }
        })
        .catch(() => {
            alert("서버 수정 요청 실패.");
        });

    }

    return (     
        <TextField 
            id={props.id}
            inputRef={valueInput}
            defaultValue={props.value}
            size="small"
            variant="standard"
            style={{width: '120px'}} 
            InputProps={{
                endAdornment:<InputAdornment position='end'>이상<Button onClick={()=>{updateData()}}>저장</Button></InputAdornment>
            }} 
        />        
    )
}

export default WarningFlowValues;