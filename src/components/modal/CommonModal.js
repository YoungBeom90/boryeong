import React, { useState } from "react";
import CommonLiveStateTable from "./table/CommonLiveStateTable";
import CommonSearchStateTable from "./table/CommonSearchStateTable";
import FlowLiveStateTable from "./table/FlowLiveStateTable";
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import axios from "axios";
import { CircularProgress } from "@mui/material";

const CommonModal = ({options}) => {
    const display = {
        normal: "#ff0000",
        warning: "#ffc830",
        abnormal: "#ff0000",
    }

    const [status, setStatus] = useState({
        [options.title + 1] : '',
        [options.title + 2] : '',
        [options.title + 3] : '',
        [options.title + 4] : '',
        [options.title + 5] : '',
        [options.title + 6] : '',
        [options.title + 7] : '',
        [options.title + 8] : '',
        [options.title + 9] : '',
        [options.title + 10] : '',        
    })
    const date = new Date()

    const [tableData, setTableData] = useState([]);
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);

    let kind;
    
    const searchStatus = (e) => {
        e.preventDefault();

        setIsLoading(true);

        
        let direction = options.direction;

        if(options.title==="수압계") {
            kind="PRESS";
        } else if(options.title==="밸브") {
            kind="VALVE";
        } else if(options.title==="통신상태") {
            kind="TELE";
        } else if(options.title==="유량") {
            kind="FLOW";
        } else if(options.title==="수심") {
            kind="DEPTH";
        }

        let fromYear = fromDate.getFullYear();
        let fromMonth = fromDate.getMonth()+1;
        let fromDay = fromDate.getDate();

        let toYear = toDate.getFullYear();
        let toMonth = toDate.getMonth()+1;
        let toDay = toDate.getDate();
        
        if(kind !== "FLOW") {
            axios.get(`/api/dashboard/popup?kind=${kind}&direction=${direction}&fromDate=${fromYear}-${fromMonth}-${fromDay}&toDate=${toYear}-${toMonth}-${toDay}`)
            .then(({data}) => {
                setTableData(data.statusList);

                const totalStatus = data.totalStatus;
                console.log(totalStatus);
                setStatus({
                    [options.title + 1] : display[totalStatus[options.title + 1]],
                    [options.title + 2] : display[totalStatus[options.title + 2]],
                    [options.title + 3] : display[totalStatus[options.title + 3]],
                    [options.title + 4] : display[totalStatus[options.title + 4]],
                    [options.title + 5] : display[totalStatus[options.title + 5]],
                    [options.title + 6] : display[totalStatus[options.title + 6]],
                    [options.title + 7] : display[totalStatus[options.title + 7]],
                    [options.title + 8] : display[totalStatus[options.title + 8]],
                    [options.title + 9] : display[totalStatus[options.title + 9]],
                    [options.title + 10] : display[totalStatus[options.title + 10]],
                });

                setIsLoading(false);
            });
        } else {
            // 유량 쪽 구현 예정...
        }

        // console.log(status);
               

        
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
                    {
                        options.title!=="유량"
                        ? <CommonLiveStateTable options={options} status={status}  />
                        : <FlowLiveStateTable options={options} status={status} />
                    }
                </div>
                <div className="searchStateDiv" style={{marginTop: 40}}>
                    <span>{options.location} {options.title} 감시결과</span>
                    <CommonSearchStateTable options={options} tableData={tableData}/>
                </div>
            </div>
        </div>
    )
}

export default CommonModal;