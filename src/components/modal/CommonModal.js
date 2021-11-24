import React, { useState } from "react";
import PressLiveStateTable from "./table/PressLiveStateTable";
import PressSearchStateTable from "./table/PressSearchStateTable";
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import axios from "axios";
import { CircularProgress } from "@mui/material";

const CommonModal = ({options}) => {

    const [searchData, setSearchData] = useState([]);

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const [isLoading, setIsLoading] = useState(false)

    
    const searchStatus = (e) => {
        e.preventDefault();

        setIsLoading(true);

        let kind;
        let direction = options.direction;

        if(options.title==="수압계") {
            kind="PRESS";
        } else if(options.title==="밸브") {
            kind="VALVE";
        } else if(options.title==="통신상태") {
            kind="TELE";
        } else if(options.title==="유량계") {
            kind="FLOW";
        } else if(options.title==="수심") {
            kind="DEPTH";
        }
        
        axios.get(`/api/dashboard/popup?kind=${kind}&direction=${direction}&fromDate=2021-11-23&toDate=2021-11-23`)
        .then(({data}) => {
            // console.log(data);
            let rowData = [];

            for(let i = 0; i < 10; i++) {
                rowData.push(data[i]);
            }

            console.log(rowData);
            setSearchData(rowData);

            setIsLoading(false);
        })
    }



    return (
        <div>
            {isLoading && <CircularProgress id="loadingCircular" color="secondary" sx={{position : 'absolute', top: '47%', left: '47%'}}/> }
            <p><span>{options.title} 상태</span> 상세보기</p>
            <hr/>
            <div className="searchDiv">
                <span>조회조건</span>
                <select>
                    <option>일자</option>
                    <option>???</option>
                </select>
                <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                />
                <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                />
                <button onClick={searchStatus}>조회</button>
            </div>
            <div>
                <div className="liveStateDiv">
                    <span>{options.location} 상태 현황</span>
                    <div style={{float:'right'}}>
                        <span style={{border: '1px solid #000', margin:10}}>정상</span>
                        <span style={{border: '1px solid #000', margin:10, background: '#f5ef42'}}>관심</span>
                        <span style={{border: '1px solid #000', margin:10, background: '#f54e42'}}>이상</span>
                    </div>
                    <PressLiveStateTable options={options} />
                </div>
                <div className="searchStateDiv" style={{marginTop: 40}}>
                    <span>{options.location} {options.title} 감시결과</span>
                    <PressSearchStateTable options={options} rowData={searchData}/>
                </div>
            </div>
        </div>
    )
}

export default CommonModal;