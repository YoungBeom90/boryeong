import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { connect } from 'react-redux';
import { addValue } from '../redux/valueRangeSettings/actions';

const SettingValues = (props) => {
    return (
        <div>
            <button onClick={() => props.addValue()}>+</button>
            <TextField 
            defaultValue={props.count1}
            size="small"
            variant="standard"
            style={{width: '80px'}} 
            InputProps={{
                endAdornment:<InputAdornment position='start'>이상</InputAdornment>
            }} 
        />
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        count1 : state.count1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addValue : () => dispatch(addValue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingValues);