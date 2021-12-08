import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StateDetail from './StateDetail';

const StateInfoBr = ({brData, modalStyle}) => {
    // console.log(brData);

    const detailOptions = 
        {
            pressDetail : {
                title : "수압계",
            },
            valveDetail : {
                title: "밸브",
            },
            teleDetail : {
                title : "통신",
            }
        }
    


    const [cmmnAttr, setCmmnAttr] = useState({
        title : '',
        direction : 'A',
        location : '보령방향'
    });

    const [open, setOpen] = React.useState(false);
    const modalOpen = (elem) => {

        setCmmnAttr({
            title : cmmnAttr.title = detailOptions[elem.target.id].title,
            direction : 'A',
            location : '보령방향'
        });
        
        setOpen(true);
    };
    const modalClose = () => setOpen(false);
    return (
        
        // <!-- 보령방향 -->
        <div className="state-wrap" style={{position: "absolute", top: 0}}>
            <div className="title">{cmmnAttr.location} ({cmmnAttr.direction}라인)</div>
            <div className="state-box">
                <ul>
                    <li>
                        <div className="box-title">수압상태</div>
                        <h2 className={brData.brPress !== "정상" ? "abnormal": "normal"}>{brData.brPress !== '' ? brData.brPress : ""}</h2>                       
                        <button id="pressDetail" className="detail-btn" onClick={modalOpen}>상세보기</button>
                    </li>
                    <li>
                        <div className="box-title">밸브상태</div>
                        <h2 className={brData.brValve !== "Open" ? "abnormal": "normal"}>{brData.brValve !== '' ? brData.brValve : ""}</h2>                   
                        <button id="valveDetail" className="detail-btn" onClick={modalOpen}>상세보기</button>
                    </li>
                    <li>
                        <div className="box-title">통신상태</div>
                        <h2 className={brData.brTele !== "전용회선" ? "warning": "normal"}>{brData.brTele !== '' ? brData.brTele : ""}</h2>
                        <button id="teleDetail" className="detail-btn" onClick={modalOpen}>상세보기</button>
                    </li>
                </ul>
            </div>
            {/* 상태 상세보기 팝업창 */}
            <Modal open={open} onClose={modalClose}>
                <Box sx={modalStyle}>
                    <StateDetail options={cmmnAttr} modalClose={modalClose}/>
                </Box>
            </Modal>
        </div>
        // <!-- //보령방향 -->
    )
}

export default StateInfoBr;