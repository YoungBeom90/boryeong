import React, {useState, useRef} from 'react';
// import ReportHeader from './report/ReportHeader';
// import {CSVLink, CSVDownload} from 'react-csv';
// import ReportData from './report/ReportData';
import SupplyTable from './report/table/SupplyTable';
import { Container, Box, CircularProgress } from '@mui/material';
import sub_icon01 from '../img/sub_icon01.png';
import ValveTable from './report/table/ValveTable';
import DepthTable from './report/table/DepthTable';
import PressTable from './report/table/PressTable';
import TeleTable from './report/table/TeleTable';
import TeleDirectionTable from './report/table/TeleDirectionTable';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import axios from 'axios';
import styled from "styled-components";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Report = () => { 
    
    const [isLoading, setIsLoading] = useState(false);

    // 보고서 pdf 파일 다운로드 기능
    const pdfDownload = () => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            let imgData = canvas.toDataURL('image/jpeg');
            let imgWidth = 278;
            let pageHeight = imgWidth * 1.314;
            let imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let margin = 10;
    
            let doc = new jsPDF('p', 'mm', 'a3');
            let position = 20;
    
            doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
    
            while(heightLeft >= 20) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
    
            doc.save("report.pdf");
        });
    }

    const [selectDate, setSelectDate] = useState(new Date);

    // 공급량 현황
    const [supplyData, setSupplyData] = useState({
        id: '',
        todayFlow : '',
        beforeFlow : '',
        beforeCompare : '',
        avgFlow : '',
        avgCompare : ''
    });

    // 밸브 현황
    const [valveData, setValveData] = useState({});

    // 수심 현황
    const [depthData, setDepthData] = useState({
        beforeMax : '',
        beforeMin : '',
        beforeAvg : '',
        todayMax : '',
        todayMin : '',
        todayAvg : '',
        compare : '',
    });

    // 수압 현황
    const [pressData, setPressData] = useState({
        A : {
            avg : {PRESS1: '', PRESS2: '', PRESS3: '', PRESS4: '', PRESS5: '', PRESS6: '', PRESS7: '', PRESS8: '', PRESS9: '', PRESS10: ''},
            max : {PRESS1: '', PRESS2: '', PRESS3: '', PRESS4: '', PRESS5: '', PRESS6: '', PRESS7: '', PRESS8: '', PRESS9: '', PRESS10: ''},
            min : {PRESS1: '', PRESS2: '', PRESS3: '', PRESS4: '', PRESS5: '', PRESS6: '', PRESS7: '', PRESS8: '', PRESS9: '', PRESS10: ''}
        },
        B : {
            avg : {PRESS1: '', PRESS2: '', PRESS3: '', PRESS4: '', PRESS5: '', PRESS6: '', PRESS7: '', PRESS8: '', PRESS9: '', PRESS10: ''},
            max : {PRESS1: '', PRESS2: '', PRESS3: '', PRESS4: '', PRESS5: '', PRESS6: '', PRESS7: '', PRESS8: '', PRESS9: '', PRESS10: ''},
            min : {PRESS1: '', PRESS2: '', PRESS3: '', PRESS4: '', PRESS5: '', PRESS6: '', PRESS7: '', PRESS8: '', PRESS9: '', PRESS10: ''}
        }
    });

    // 통신 현황
    const [teleData, setTeleData] = useState({});

    // let date = new Date();
    let year = selectDate.getFullYear();
    let month = selectDate.getMonth() + 1;
    let day = selectDate.getDate();

    const searchReportData = () => {
        setIsLoading(true);
        axios.get("/api/report?date=" + `${year}-${month}-${day}`, {timeout: 10000})
        .then(({data}) => {
            console.log(data);
            if(!data.fail) {
                data.result.supplyReport.id = 1;
                setSupplyData(data.result.supplyReport);
                setPressData(data.result.pressReport);
                setDepthData(data.result.levelReport);
                setIsLoading(false);
            } else {
                alert('데이터가 없습니다.');
            }
        });
    }
    
    return (

    // <!-- 전체 영역 -->
        <div className="content-wrap">
            {isLoading && <CircularProgress id="loadingCircular" color="secondary" sx={{position : 'absolute', top: '47%', left: '47%', zIndex: 0}}/> }
            <Container fixed>
                <Box
                    sx={{
                        p: 5,
                        ml: -6,
                        width: '100%',
                        height: '698px',
                        bgcolor: "#fff",
                        overflowY : 'auto',
                        overflowX : 'hidden'
                    }}
                >
                    {/* <!-- 타이틀 --> */}
                    <div className="content-title">
                        <img src={sub_icon01} />보고서
                    </div>
                    {/* <!-- 타이틀 --> */}
                    {/* <!-- 검색영역 --> */}
                    <div className="search-wrap">
                        <label style={{lineHeight: "35px", marginRight: 6}}>조회일자</label>
                        <SelectDate
                            selected={selectDate}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date) => setSelectDate(date)}
                            placeholderText=""
                            locale={ko}
                        />
                        {/* <DatePicker
                            className="search-input datepicker calendar-icon"
                            selected={selectDate}
                            onChange={(date) => setSelectDate(date)}
                            dateFormat="yyyy-MM-dd"
                            locale={ko}
                        /> */}
                        {/* <select style={{width: "240px", marginRight: "15px"}}>
                            <option>일보</option>
                            <option>일보</option>
                        </select>
                        <input className="search-input datepicker calendar-icon" type="" name="" style={{width: "240px"}} placeholder="일자선택" /> */}
                        
                        <div className="btn-wrap">
                            <button type="button" style={{marginRight: 3}} onClick={searchReportData} className="btn btn-primary">조회</button>
                            <button type="button" style={{marginRight: 3}} className="btn btn-primary">수정</button>
                            <button type="button" style={{marginRight: 3}} onClick={pdfDownload} className="btn btn-primary">PDF 다운로드</button>
                        </div>
                    </div>
                    {/* <!-- //검색영역 --> */}
                    <div id="capture">
                        {/* <!-- 서브 타이틀 --> */}
                        <div className="report-title" style={{marginTop: 40}}>
                            <span style={{marginLeft: "10%"}}>일간 운영 보고서</span>
                            <span className="report-date">( {year}. {month}. {day} )</span>
                        </div>
                        {/* <!-- //서브 타이틀 --> */}
                        {/* <!-- 공급량 현황 --> */}
                        <div className="content-list">
                            <h2>공급량 현황</h2>
                        </div>
                        <SupplyTable data={supplyData} />
                        {/* <!-- //공급량 현황 --> */}
                        {/* <!-- 밸브 현황 --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">밸브 현황</h2>
                        </div>
                        <ValveTable />
                        {/* <!-- //밸브 현황 --> */}
                        {/* <!-- 집수조 수위 현황 --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">집수조 수위 현황</h2>
                        </div>
                        <DepthTable data={depthData}/>
                        {/* <!-- 집수조 수위 현황 --> */}
                        {/* <!-- 수압 현황 --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">수압 현황</h2>
                        </div>
                        <PressTable data={pressData}/>
                        {/* <!-- //수압 현황 --> */}
                        {/* <!-- 통신 현황 --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">통신 현황</h2>
                        </div>
                        {/* <!-- 통신 --> */}
                        <TeleTable />
                        {/* <!-- //통신 -->				
                        <!-- 통신 방향 --> */}
                        <TeleDirectionTable />
                        {/* /* <!-- //통신 방향 --> */}
                    </div>
                {/* <!-- 통신 현황 --> */}
                </Box>
            </Container>
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

export default Report;