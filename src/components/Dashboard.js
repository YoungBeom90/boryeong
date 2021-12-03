import React, {useState, useEffect} from 'react';
import StateInfoBr from './dashboard/StateInfoBr';
import StateInfoWs from './dashboard/StateInfoWs';
import Supply from './dashboard/Supply';
import axios from 'axios';
import PressAverage from './dashboard/PressAverage';
import WaterDepth from './dashboard/WaterDepth';
import FlowAndDepth from './dashboard/FlowAndDepth';
import Footer from './layout/Footer';

const Dashboard = (props) => { 

    const [splyData, setSplyData] = useState({
        todaySupply : '',
        weekSupply : '',
        monthSupply : ''
    });

    const [pressData, setPressData] = useState({
        todayPress : '',
        weekPress : '',
        monthPress : ''
    });

    const [depthData, setDepthData] = useState({
        depthNow: '',
        depth1h: '',
        depth2h: ''
    })
    
    const [brData, setBrData] = useState({
        brPress : '',
        brValve : '',
        brTele : ''
    });

    const [wsData, setWsData] = useState({
        wsPress : '',
        wsValve : '',
        wsTele : ''
    });

    const [cmmnData, setCmmnData] = useState({
        flow: '',
        level: ''
    });


    const requestData = () => {
        axios.get("/api/dashBoard/main")
        // axios.get("/api/meters")
        .then(({data}) => {
            console.log(data);
            if(data.statusRange) {
                let status = data.statusRange;
            
                setBrData({
                    brPress : status.brPress,
                    brValve : status.brValve,
                    brTele : status.brTele
                });

                setWsData({
                    wsPress : status.wsPress,
                    wsValve : status.wsValve,
                    wsTele : status.wsTele
                });


                let timeRange = data.timeRange;

                setSplyData({
                    todaySupply : Number(timeRange.todaySupply).toLocaleString('ko-KR'),
                    weekSupply : Number(timeRange.weekSupply).toLocaleString('ko-KR'),
                    monthSupply : Number(timeRange.monthSupply).toLocaleString('ko-KR'),
                });

                setPressData({
                    todayPress : timeRange.todayPress,
                    weekPress : timeRange.weekPress,
                    monthPress : timeRange.monthPress
                });

                setDepthData({
                    depthNow: Number(timeRange.depthNow).toLocaleString('ko-KR'),
                    depth1h: Number(timeRange.depth1h).toLocaleString('ko-KR'),
                    depth2h: Number(timeRange.depth2h).toLocaleString('ko-KR')
                });

                setCmmnData({
                    flow : status.flow,
                    level : status.level
                })
            }
        });
        // setTimeout(requestData, 5000);
    };

    useEffect(() => {
        requestData();
    }, []);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '65%',
        color: '#000',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
    };

    return (
        <div className="content-wrap">
            <div className="container">
                <div className="left-wrap">
                    <Supply splyData={splyData} />
                    <PressAverage pressData={pressData} />
                    <WaterDepth depthData={depthData} />
                </div>
                <div className="right-wrap">
                    <StateInfoBr brData={brData} modalStyle={modalStyle} />
                    <FlowAndDepth cmmnData={cmmnData} modalStyle={modalStyle} />
                    <StateInfoWs wsData={wsData} modalStyle={modalStyle} />
                </div>
            </div>
            <div className="pipeline">
                <div className="illust-text">
                    <ul>
                        <li>◀ 보령</li>
                        <li>오폐수 집수조</li>
                        <li>원산도 ▶</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;




