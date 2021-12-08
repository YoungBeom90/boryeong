import React, { useEffect, useState } from "react";
import CommonLiveStatusTable from "./table/CommonLiveStatusTable";
import CommonSearchMonitorTable from "./table/CommonSearchMonitorTable";
import FlowLiveStatusTable from "./table/FlowLiveStatusTable";
import FlowSearchMonitorTable from './table/FlowSearchMonitorTable';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import axios from "axios";
import { CircularProgress, Backdrop } from "@mui/material";
import styled from "styled-components";

const CommonModal = ({options, modalClose}) => {
    
    const display = {
        normal: "#fff",
        warning: "#ffdf75",
        danger: "#ff7847",
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
    });

    const [flowStatus, setFlowStatus] = useState({
        A : {
            [options.title + 1] : '',
        },
        B : {
            [options.title + 1] : '',
        }
    })

    const [tableData, setTableData] = useState([]);
    const [flowTableData, setFlowTableData] = useState({A: [], B : []});
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const [kind, setKind] = useState('');

    useEffect(() => {
        if(options.title==="수압계") {
            setKind("PRESS");
        } else if(options.title==="밸브") {
            setKind("VALVE");
        } else if(options.title==="통신") {
            setKind("TELE");
        } else if(options.title==="유량") {
            setKind("FLOW");
        } else if(options.title==="수심") {
            setKind("DEPTH");
        }
    })
    
    const searchStatus = (e) => {
        e.preventDefault();
        
        let direction = options.direction;

        let fromYear,fromMonth,fromDay;
        if(fromDate) {
            fromYear = fromDate.getFullYear();
            fromMonth = fromDate.getMonth()+1;
            fromDay = fromDate.getDate();
        } else {
            alert("시작일을 입력해주세요.");
            return;
        }
        
        let toYear,toMonth,toDay;
        if(toDate) {
            toYear = toDate.getFullYear();
            toMonth = toDate.getMonth()+1;
            toDay = toDate.getDate();
        } else {
            setToDate(new Date);
            toYear = new Date().getFullYear();
            toMonth = new Date().getMonth()+1;
            toDay = new Date().getDate();
        }

        
        if(kind !== "FLOW") {
            // setIsLoading(true);
            setOpen(true);
            axios.get(`/api/dashboard/popup?kind=${kind}&direction=${direction}&fromDate=${fromYear}-${fromMonth}-${fromDay}&toDate=${toYear}-${toMonth}-${toDay}`)
            .then(({data}) => {
                
                console.log(data.statusList);
                console.log(data.totalStatus);

                if(!data.statusList.length) {
                    alert("조회된 정보가 없습니다.");
                    return;
                }

                setTableData(data.statusList);

                let setTotal = {};
                let keys = Object.keys(status);
                keys.map((item, index) => {
                    setTotal[options.title + (index+1)] = display[data.totalStatus[kind + (index+1)]];
                })
                setStatus(setTotal);
                // console.log(setTotal);

            })
            .catch(() => {
                alert("조회 요청 중 서버 문제가 발생했습니다.");
            })
            .finally(() => {
                // setIsLoading(false);
                setOpen(false);
            })
        } else {
            // setIsLoading(true);
            setOpen(true);
            // 보령방향 FLOW
            axios.get(`/api/dashboard/popup?kind=FLOW&direction=A&fromDate=${fromYear}-${fromMonth}-${fromDay}&toDate=${toYear}-${toMonth}-${toDay}`)
            .then(({data}) => {
                let setTable = {A: [], B:[]}
                let setTotal = {A: {}, B:{}};
                console.log(data.statusList);

                setTable.A = data.statusList;
               
                let keys = Object.keys(flowStatus.A);
                keys.map((item, index) => {
                    setTotal.A[options.title + (index+1)] = display[data.totalStatus[kind + (index+1)]];
                });

                
                
                // 원산도 방향 FLOW
                axios.get(`/api/dashboard/popup?kind=FLOW&direction=B&fromDate=${fromYear}-${fromMonth}-${fromDay}&toDate=${toYear}-${toMonth}-${toDay}`)
                .then(({data}) => {
                    setTable.B = data.statusList;
                    setFlowTableData(setTable);
                    console.log(data.statusList);
                    
                    

                    let keys = Object.keys(flowStatus.B);
                    keys.map((item, index) => {
                        setTotal.B[options.title + (index+1)] = display[data.totalStatus[kind + (index+1)]];
                    });
                    if(!setTable.A.length && !setTable.B.length) {
                        alert("조회된 정보가 없습니다.");
                    }
                    setFlowStatus(setTotal);

                    
                    
                })
                .catch(() => {
                    alert("조회 요청 중 서버 문제가 발생했습니다.");
                });
            })
            .catch(() => {
                alert("조회 요청 중 서버 문제가 발생했습니다.");
            })
            .finally(() => {
                // setIsLoading(false);
                setOpen(false);
            })
        }

        // console.log(status);
               

        
    }



    return (
        <div style={{maxHeight : "80vh"}}>
            <Backdrop 
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
            <CircularProgress id="loadingCircular" color="inherit"/>
            </Backdrop>
            <span className="close" onClick={modalClose} ></span>
            <div className="modal-title">
                {options.title}상태 상세보기
            </div>
            <div className="search-wrap" style={{marginTop:0}}>
                <label style={{lineHeight: "35px", marginRight: 6}}>조회일자</label>
                <SelectDate
                    selected={fromDate}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) => setFromDate(date)}
                    placeholderText="시작일자"
                    locale={ko}
                />
                <BetweenDate> ~ </BetweenDate>
                <SelectDate
                    selected={toDate}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) => setToDate(date)}
                    placeholderText="종료일자"
                    locale={ko}
                />
                <div className="btn-wrap">
                    <button type="button" onClick={searchStatus} className="btn btn-primary">조회</button>
                </div>
            </div>
            <div>
                <div className="liveStateDiv">
                    {
                        options.title!=="유량"
                        ? <CommonLiveStatusTable status={status}  options={options}/>
                        : <FlowLiveStatusTable status={flowStatus} options={options}/>
                    }
                </div>
                <div className="searchStateDiv" style={{marginTop: 40}}>
                    {
                        options.title!=="유량"
                        ? <CommonSearchMonitorTable options={options} kind={kind} tableData={tableData}/>
                        : <FlowSearchMonitorTable options={options} kind={kind} tableData={flowTableData}/>
                    }
                </div>
            </div>
        </div>
    )
}

const SelectDate = styled(DatePicker)`
  height: 22px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e5e5e5;
  outline: none;
  cursor: pointer;
`;

const BetweenDate = styled.span`
  display: table;
  padding: 8px 12px;
  background-color: #e5e5e5;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  cursor: pointer;
`;

export default CommonModal;