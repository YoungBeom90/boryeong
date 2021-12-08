import React, {useState} from "react";
import { Modal, Box } from '@mui/material';
import StateDetail from './StateDetail';

const FlowAndDepth = ({cmmnData, modalStyle}) => {
    console.log(cmmnData);

    const detailOptions = {
        flowDetail : {
            title : "유량",
        }    ,
        depthDetail : {
            title: "수심",
        },

    }

    const [cmmnAttr, setCmmnAttr] = useState({
        title : '',
        direction : '',
        location : ''
    });

    const [open, setOpen] = useState(false);
    const modalOpen = (elem) => {
        console.log(elem.target.id);
        setCmmnAttr({
            title : cmmnAttr.title = detailOptions[elem.target.id].title,
        });
        
        console.log(cmmnAttr.title);
        setOpen(true);
    };
    const modalClose = () => setOpen(false);

    return (
        
        <div>
            {/* 유량상태 */}
            <div className="state-wrap" style={{position: "absolute", top: "250px", left: "-109px"}}>
                <div className="state-box">
                    <ul>
                        <li>
                            <div className="box-title">유량상태</div>
                            <h2 className={cmmnData.flow !== "정상" ? "abnormal" : "normal"}>{cmmnData.flow !== '' ? cmmnData.flow : ""}</h2>
                            <button id="flowDetail" className="detail-btn" onClick={modalOpen}>상세보기</button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 수심 상태 */}
            <div className="state-wrap" style={{position: "absolute", top: "250px", left: "170px"}}>
                <div className="state-box">
                    <ul>
                        <li>
                            <div className="box-title">수심상태</div>
                            <h2 className={cmmnData.depth !== "정상" ? "abnormal" : "normal"}>{cmmnData.depth !== '' ? cmmnData.depth : ""}</h2>
                            <button id="depthDetail" className="detail-btn" onClick={modalOpen}>상세보기</button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* 상태 상세보기 팝업창 */}
            <Modal open={open} onClose={modalClose}>
                <Box sx={modalStyle}>
                    <StateDetail options={cmmnAttr} modalClose={modalClose}/>
                </Box>
            </Modal>
        </div>
    )
}

export default FlowAndDepth;