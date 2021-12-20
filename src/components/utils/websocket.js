import React, {useRef, useEffect, useState} from "react";

export default function Websocket() {
    const [socketConnected, setSoketConnected] = useState(false);
    const [sendMsg, setSendMsg] = useState(false);
    const [items, setItems] = useState([]);

    const webSoketUrl = 'ws://localhost:8083/websocket';

    let ws = useRef(null);

    //소켓 객체 생성
    useEffect(() => {

        let websocket = new WebSocket(webSoketUrl);

        console.log(websocket);

        websocket.addEventListener('open', () => {
            websocket.send('Hi');
        });

        websocket.addEventListener('message', (e) => {
            console.log("Message from server : " + e.data);
        })

        // if(!ws.current) {
        //     ws.current = new WebSocket(webSoketUrl);
        //     ws.current.onopen = () => {
        //         console.log("connected to " + webSoketUrl);
        //         setSoketConnected(true);
        //     }
        //     ws.current.onclose = (error) => {
        //         console.log("disconnect from " + webSoketUrl);
        //         console.log(error);
        //     }
        //     ws.current.onerror = (error) => {
        //         console.log("Connection error " + webSoketUrl);
        //         console.log(error);
        //     }
        //     ws.current.onmessage = (evt) => {
        //         const data = JSON.parse(evt.data);
        //         console.log(data);
        //         setItems((prevItems) => [...prevItems, data]);
        //     }
        // }

        // return () => {
        //     console.log("clean up");
        //     ws.current.close();
        // }
    }, []);

    // 소켓이 연결되었을 시에 send 메소드
    // useEffect(() => {
    //     if (socketConnected) {
    //         ws.current.send(
    //             JSON.stringify({
    //                 message: "Hi",
    //             })
    //         );
    
    //         setSendMsg(true);
            
    //     }
    // }, [socketConnected]);

    return (
        <div>
            <div>socket</div>
            <div>socket connected : {`${socketConnected}`}</div>
            <div>res : </div>
            <div>
                {items.map((item) => {
                return <div>{JSON.stringify(item)}</div>;
                })}
            </div>
        </div>
      );

}