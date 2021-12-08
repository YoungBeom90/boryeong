import React, {useState, useRef} from 'react';
import SupplyTable from './report/table/SupplyTable';
import { Container, Box, CircularProgress, Backdrop, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
import { exportPDF, exportExcel } from './report/utils/exportFunction';
import { props } from 'bluebird';

const Report = () => { 
    const containerRef = useRef();

    const ScrollTop = (props) => {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
          target: containerRef.current,
          disableHysteresis: true,
          threshold: 100,
        });
      
        const handleClick = (event) => {
          const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
          );
      
          if (anchor) {
            anchor.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        };
      
        return (
          <Zoom in={trigger}>
            <Box
              onClick={handleClick}
              role="presentation"
              sx={{ position: 'absolute', bottom: 16, right: "50%"}}
            >
              {children}
            </Box>
          </Zoom>
        );
    }
    
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

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
        // setIsLoading(true);
        setOpen(true);
        axios.get("/api/report?date=" + `${year}-${month}-${day}`, {timeout: 10000})
        .then(({data}) => {
            console.log(data);
            
            if(!data.fail) {
                data.result.supplyReport.id = 1;
                setSupplyData(data.result.supplyReport);
                setPressData(data.result.pressReport);
                setDepthData(data.result.levelReport);
            } else {
                alert('데이터가 없습니다.');
            }
            // setIsLoading(false);
            setOpen(false);
        });
    }

    // PDF 다운로드
    const pdfDownload = () => {
        exportPDF(year, month, day);
    }

    // Excel 다운로드
    const excelDownload = () => {
        exportExcel(year, month, day);
    }


    
    return (

    // <!-- 전체 영역 -->
        <div className="content-wrap">
            {/* {isLoading && <CircularProgress id="loadingCircular" color="secondary" sx={{position : 'absolute', top: '47%', left: '47%', zIndex: 0}}/> } */}
            <Backdrop 
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
            <CircularProgress id="loadingCircular" color="inherit"/>
            </Backdrop>
            <Container fixed>
                <Box
                    ref={containerRef}
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
                    <div id="back-to-top-anchor" className="search-wrap">
                        <label style={{lineHeight: "35px", marginRight: 6}}>조회일자</label>
                        <SelectDate
                            selected={selectDate}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date) => setSelectDate(date)}
                            placeholderText=""
                            locale={ko}
                        />                        
                        <div className="btn-wrap">
                            <button type="button" style={{marginRight: 3}} onClick={searchReportData} className="btn btn-primary">조회</button>
                            <button type="button" style={{marginRight: 3}} className="btn btn-primary">수정</button>
                            <button type="button" style={{marginRight: 3}} onClick={pdfDownload} className="btn btn-primary">PDF 다운로드</button>
                            <button type="button" style={{marginRight: 3}} onClick={excelDownload} className="btn btn-primary">Excel 다운로드</button>
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
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
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