import React, {useState, useEffect, useRef} from 'react';
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
import {supplyMap, pressMap, depthMap, teleMap} from './report/dataMap/reportDataMap';

const Report = () => { 
    const containerRef = useRef();

    useEffect(() => {
        // scollTop custom control
        containerRef.current.addEventListener('scroll', function(){
            // console.log(document.querySelector("#containerBox").scrollTop);
            if (document.querySelector("#containerBox").scrollTop >= 100) {
                document.querySelector("#scrollTopBtn").removeAttribute("style");
            } else if (document.querySelector("#containerBox").scrollTop < 100) {
                document.querySelector("#scrollTopBtn").setAttribute("style", "display: none;");
            }
        });
    },[]);
    
    const ScrollTop = (props) => {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        // const trigger = useScrollTrigger({
        //   target: containerRef.current,
        //   disableHysteresis: true,
        //   threshold: 100,
        // });
      
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
          <Zoom>
                <Box
                    id="scrollTopBtn"
                    onClick={handleClick}
                    role="presentation"
                    sx={{ position: 'absolute', bottom: 16, right: "50%", margin: "10px"}}
                >
                {children}
                </Box>
          </Zoom>
        );
    }
    
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const [selectDate, setSelectDate] = useState(new Date);

    // ????????? ??????
    const [supplyData, setSupplyData] = useState(supplyMap);

    // ?????? ??????
    const [valveData, setValveData] = useState({});

    // ?????? ??????
    const [depthData, setDepthData] = useState(depthMap);

    // ?????? ??????
    const [pressData, setPressData] = useState(pressMap);

    // ?????? ??????
    const [teleData, setTeleData] = useState(teleMap);

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
                setDepthData(data.result.depthReport);
                setTeleData(data.result.teleReport);
            } else {
                alert('????????? ???????????? ????????????.');
                setSupplyData(supplyMap);
                setPressData(pressMap);
                setDepthData(depthMap);
                setTeleData(teleMap);
            }
            // setIsLoading(false);
            setOpen(false);
        });
    }

    // PDF ????????????
    const pdfDownload = () => {
        exportPDF(year, month, day);
    }

    // Excel ????????????
    const excelDownload = () => {
        exportExcel(year, month, day);
    }


    
    return (

    // <!-- ?????? ?????? -->
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
                    id="containerBox"
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
                    {/* <!-- ????????? --> */}
                    <div className="content-title">
                        <img src={sub_icon01} />?????????
                    </div>
                    {/* <!-- ????????? --> */}
                    {/* <!-- ???????????? --> */}
                    <div id="back-to-top-anchor" className="search-wrap">
                        <label style={{lineHeight: "35px", marginRight: 6}}>????????????</label>
                        <SelectDate
                            selected={selectDate}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date) => setSelectDate(date)}
                            placeholderText=""
                            locale={ko}
                        />                        
                        <div className="btn-wrap">
                            <button type="button" style={{marginRight: 3}} onClick={searchReportData} className="btn btn-primary">??????</button>
                            <button type="button" style={{marginRight: 3}} className="btn btn-primary">??????</button>
                            <button type="button" style={{marginRight: 3}} onClick={pdfDownload} className="btn btn-primary">PDF ????????????</button>
                            <button type="button" style={{marginRight: 3}} onClick={excelDownload} className="btn btn-primary">Excel ????????????</button>
                        </div>
                    </div>
                    {/* <!-- //???????????? --> */}
                    <div id="capture">
                        {/* <!-- ?????? ????????? --> */}
                        <div className="report-title" style={{marginTop: 40}}>
                            <span style={{marginLeft: "10%"}}>?????? ?????? ?????????</span>
                            <span className="report-date">( {year}. {month}. {day} )</span>
                        </div>
                        {/* <!-- //?????? ????????? --> */}
                        {/* <!-- ????????? ?????? --> */}
                        <div className="content-list">
                            <h2>????????? ??????</h2>
                        </div>
                        <SupplyTable data={supplyData} />
                        {/* <!-- //????????? ?????? --> */}
                        {/* <!-- ?????? ?????? --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">?????? ??????</h2>
                        </div>
                        <ValveTable />
                        {/* <!-- //?????? ?????? --> */}
                        {/* <!-- ????????? ?????? ?????? --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">????????? ?????? ??????</h2>
                        </div>
                        <DepthTable data={depthData}/>
                        {/* <!-- ????????? ?????? ?????? --> */}
                        {/* <!-- ?????? ?????? --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">?????? ??????</h2>
                        </div>
                        <PressTable data={pressData}/>
                        {/* <!-- //?????? ?????? --> */}
                        {/* <!-- ?????? ?????? --> */}
                        <div className="content-list" style={{marginTop: "25px"}}>
                            <h2 className="">?????? ??????</h2>
                        </div>
                        {/* <!-- ?????? --> */}
                        <TeleTable />
                        {/* <!-- //?????? -->				
                        <!-- ?????? ?????? --> */}
                        <TeleDirectionTable data={teleData} />
                        {/* /* <!-- //?????? ?????? --> */}
                    </div>
                {/* <!-- ?????? ?????? --> */}
                <ScrollTop id="scrollTopIco" {...props}>
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