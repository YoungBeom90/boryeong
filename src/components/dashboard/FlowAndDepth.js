import React, {useState} from "react";
import { Modal, Box } from '@mui/material';
import StateDetail from './StateDetail';

const FlowAndDepth = ({cmmnData, modalStyle}) => {

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
                            <h2 className={cmmnData.level !== "정상" ? "abnormal" : "normal"}>{cmmnData.level !== '' ? cmmnData.level : ""}</h2>
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

// const Section = styled.div`
//     width : 50%;
//     height : 25%;
//     position: absolute;
//     top: 32%;
//     right: 3%;
//     border : 30px solid #c3ced6;
//     border-radius : 50px 50px 50px;
//     background-color : #FFF;
// `

// const Flow = styled.div`
//     width: 16%;
//     height: 30%;
//     border : 1px solid #0090e3;
//     position : absolute;
//     top : 30%;
//     left : -2%;
//     margin : 2% 5%;
    
// `

// const Level = styled.div`
//     width: 16%;
//     height: 30%;
//     border : 1px solid #0090e3;
//     position : absolute;
//     top : 30%;
//     right : -2%;
//     margin : 2% 5%;
// `

// const Title = styled.h4`
//     width: 80%;
//     margin-top: -20px;
//     margin-left: auto;
//     margin-right: auto;
//     color : #0090e3;
//     background-color : #282c34;
// `