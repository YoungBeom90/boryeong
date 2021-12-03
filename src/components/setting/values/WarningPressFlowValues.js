import React, { useRef } from 'react';
import { TextField, InputAdornment, Button } from '@mui/material';
import axios from 'axios';
import { initFlowSetData } from '../../redux/valueRangeSettings/actions';
import { useDispatch } from 'react-redux';


const WarningPressFlowValues = (props) => {
    // if(props.rowData) {
    //     console.log(props.rowIndex);
    // }
    const dispatch = useDispatch();

    const valueInputRef = useRef();
    const rowIndexRef = useRef();

    const updateData = () => {

        let axiosData
        props.rowData.map((list, i)=> {
            if(list.id === valueInputRef.current.id) {
                axiosData = list;
            }
        });

        axiosData.warningVal = valueInputRef.current.value;
        
        axios.post("/api/saveSetting", axiosData)
        .then( async (res) => {
            if(res.status === 200) {
                alert("설정 되었습니다.");
                dispatch( await initFlowSetData());
            }
        })
        .catch(() => {
            alert("설정하는 중 문제가 발생하였습니다.");
        });

    }

    return (    
        <div>
            <TextField 
                className="search-input"
                inputRef={valueInputRef}
                type="number"
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
                size="small"
                >저장</Button>
        </div> 
    )
}

export default WarningPressFlowValues;