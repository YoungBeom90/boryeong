import React, { useRef } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import axios from 'axios';
import { initFlowSetData } from '../../redux/valueRangeSettings/actions';
import { useDispatch } from 'react-redux';



const WarningFlowValues = (props) => {

    const dispatch = useDispatch();

    const valueInput = useRef();

    const updateData = () => {

        console.log(valueInput.current.id);
        console.log(valueInput.current.value);
        
        axios.post("/api/updateSetting",
            {
                "id" : valueInput.current.id, 
                "warningVal": valueInput.current.value,
            }
        )
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
                id={props.id}
                inputRef={valueInput}
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
                variant="outlined" 
                color="primary" 
                style={{marginLeft: 13}}
                >저장</Button>
        </div> 
    )
}

export default WarningFlowValues;