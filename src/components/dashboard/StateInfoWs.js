import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import StateDetail from './StateDetail';

const StateInfoWs = ({wsData, modalStyle}) => {

    const detailOptions = {
        pressDetail : {
            title : "수압계",
        }    ,
        valveDetail : {
            title: "밸브",
        },
        teleDetail : {
            title : "통신상태" ,
        }
    }
    


    const [cmmnAttr, setCmmnAttr] = useState({
        title : '',
        direction : 'B',
        location : '원산도방향'
    });

    const [open, setOpen] = useState(false);
    const handleOpen = (elem) => {
        console.log(elem.target.id);
        setCmmnAttr({
            title : cmmnAttr.title = detailOptions[elem.target.id].title,
            direction : 'B',
            location : '원산도방향'
        });
        
        console.log(cmmnAttr.title);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);


    return (
        
        // 원산도 방향
        <div className="state-wrap" style={{position: "absolute", bottom: 0}}>
            <div className="title">{cmmnAttr.location} ({cmmnAttr.direction}라인)</div>
            <div className="state-box">
                <ul>
                    <li>
                        <div className="box-title">수압상태</div>
                        <h2 className={wsData.wsPress !== "정상" ? "abnormal": "normal"}>{wsData.wsPress !== '' ? wsData.wsPress : ""}</h2>
                        <button id="pressDetail" className="detail-btn" onClick={handleOpen}>상세보기</button>
                    </li>
                    <li>
                        <div className="box-title">밸브상태</div>
                        <h2 className={wsData.wsValve !== "Open" ? "abnormal": "normal"}>{wsData.wsValve !== '' ? wsData.wsValve : ""}</h2>
                        <button id="valveDetail" className="detail-btn" onClick={handleOpen}>상세보기</button>
                    </li>
                    <li>
                        <div className="box-title">통신상태</div>
                        <h2 className={wsData.wsTele !== "전용회선" ? "warning": "normal"}>{wsData.wsTele !== '' ? wsData.wsTele : ""}</h2>
                        <button id="teleDetail" className="detail-btn" onClick={handleOpen}>상세보기</button>
                    </li>
                </ul>
            </div>
            {/* 상태 상세보기 팝업창 */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <StateDetail options={cmmnAttr} />
                </Box>
            </Modal>
        </div>
    )
}

export default StateInfoWs;