import React, {useState, useEffect} from 'react';
import StateInfoBr from './dashboard/StateInfoBr';
import StateInfoWs from './dashboard/StateInfoWs';
import axios from 'axios';

function Dashboard() {

    const containStyle = {
        marginTop : 60,
    }

    const [brPress, setBrPress] = useState('');
    const [brValve, setBrValve] = useState('');
    const [brBrTelecom, setBrTelecom] = useState('');
    const [wsPress, setWsPress] = useState('');
    const [wsValve, setWsValve] = useState('');
    const [wsBrTelecom, setWsTelecom] = useState('');


    useEffect(() => {
        axios.post("http://localhost:8083/api/meters")
        .then(({data}) => {
            
            data.map((item) => {
                if(item.directionCd === "boryeong") {
                    console.log(item);
                    setBrPress(item.press);
                    setBrValve(item.valve);
                    setBrTelecom(item.telecom);
                } else {
                    console.log(item);
                    setWsPress(item.press);
                    setWsValve(item.valve);
                    setWsTelecom(item.telecom);
                }
            });
        });
        
    }, []);

    return (
        <div style={containStyle}>
            <StateInfoBr press={brPress} valve={brValve} telecom={brBrTelecom} />
            <StateInfoWs press={wsPress} valve={wsValve} telecom={wsBrTelecom} />
        </div>
    );
}

export default Dashboard;