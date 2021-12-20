import React, { useEffect, useRef, useState } from "react";
import {
    TableCell, 
    Button, 
    TextField,
    InputAdornment
} from '@mui/material';
import axios from "axios";

const DepthValues = (props) => {
    console.log(props.value)
    const inputRef = useRef();

    // const [val, setVal] = useState(props.value);

    useEffect(() => {
        inputRef.current.defaultValue = props.value;
        // setVal(props.value);
    })
    const cmmnStyle = props.cmmnStyle;

    const updateData = (id) => {
        console.log(id);

        let axiosData = props.origin;
        console.log(inputRef.current.value);
        if(id === "oneHourWarn" || id === "twoHourWarn") {
            axiosData.warningVal = inputRef.current.value;
        } else if(id === "oneHourDang" || id === "twoHourDang") {
            axiosData.dangerVal = inputRef.current.value;
        }

        axios.post("/api/saveSetting", axiosData)
        .then((res) => {
            console.log(res);
            if(res.status === 200) {
                alert("설정 되었습니다.");
            }
        }).catch(() => {
            alert("설정하는 중 문제가 발생하였습니다.");
        })
    }

    return (
        <TableCell style={cmmnStyle.tableBody}>
            <TextField 
                inputRef={inputRef}
                defaultValue={props.value}
                // value={val}
                size="small"
                type="number"
                variant="standard"
                style={{width: '80px'}} 
                InputProps={{
                    endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                }}
            />
            <Button 
                onClick={()=>{updateData(props.id)}} 
                id={props.rowIndex}
                variant="outlined" 
                color={
                    props.id === "oneHourWarn" || props.id === "twoHourWarn" ? 
                    "primary" : "error"
                }
                style={{marginLeft: 13}}
                size="small"
            >저장</Button>
        </TableCell>
    )
}

export default DepthValues;