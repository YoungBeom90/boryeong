import React, {useState, useEffect, useRef} from 'react';
import StateInfoBr from './dashboard/StateInfoBr';
import StateInfoWs from './dashboard/StateInfoWs';
import Supply from './dashboard/Supply';
import axios from 'axios';
import Websocket from './utils/Websocket';
import PressAverage from './dashboard/PressAverage';
import WaterLevel from './dashboard/WaterLevel';

function Dashboard() {

    const stateStyle = {
        marginTop : 60,
    }

    const timeRangeStyle = {

    }

    const [splyData, setSplyData] = useState({
        today : '',
        weekly : '',
        monthly : ''
    });

    const [pressData, setPressData] = useState({
        today : '',
        weekly : '',
        monthly : ''
    });
    
    const [brData, setBrData] = useState({
        press : '',
        valve : '',
        telecom : ''
    });

    const [wsData, setWsData] = useState({
        press : '',
        valve : '',
        telecom : ''
    });


    const requestData = async () => {
        await axios.post("http://localhost:8083/api/meters")
        .then(({data}) => {
            
            data.map((item) => {
                if(item.directionCd === "BR") {
                    console.log(item);
                    // setBrPress(item.press);
                    // setBrValve(item.valve);
                    // setBrTelecom(item.telecom);

                    setBrData({
                        press : item.press,
                        valve : item.valve,
                        telecom : item.telecom   
                    });
                } else {
                    console.log(item);
                    // setWsPress(item.press);
                    // setWsValve(item.valve);
                    // setWsTelecom(item.telecom);

                    setWsData({
                        press : item.press,
                        valve : item.valve,
                        telecom : item.telecom   
                    });
                }
            });
        });
    }


    useEffect(() => {
        requestData();
        setInterval(() => {
            requestData();
        }, 10000);
        console.log(brData);
    }, []);

    return (
        <div>
            <div style={timeRangeStyle}>
                <Supply splyData={splyData} />
                <PressAverage pressData={pressData} />
                <WaterLevel />
            </div>
            <div style={stateStyle}>
                <StateInfoBr brData={brData} />
                <StateInfoWs wsData={wsData} />
            </div>
        </div>
    );
}

export default Dashboard;




