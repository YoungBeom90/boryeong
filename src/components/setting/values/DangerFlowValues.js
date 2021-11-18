import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const DangerFlowValues = (props) => {
    return (     
        <TextField 
            defaultValue={props.value}
            size="small"
            variant="standard"
            style={{width: '80px'}} 
            InputProps={{
                endAdornment:<InputAdornment position='start'>이상</InputAdornment>
            }} 
        />        
    )
}

export default DangerFlowValues;