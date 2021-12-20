import React, {useState, useEffect} from 'react';
import { 
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { Box } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import PressTable from './setting/PressTable';
import FlowTable from './setting/FlowTable';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DepthTable from './setting/DepthTable';
import { connect } from "react-redux";
import { initDepthSetData, initFlowSetData, initPressSetData } from './redux/valueRangeSettings/actions';

const Setting = (props) => {

    // const darkTheme = createTheme({ palette: { background: '#0090e3'} });

    const [cmmnStyle] = useState({
        tableHead: {
            fontWeight: 'bold',
            textAlign: 'center'
        },
        tableBody: {
            textAlign: 'center',
            borderBottom: "1px solid #dee2f0"
        }
    });  

    useEffect(() => {
        // props.initDepthSetData();
        props.initFlowSetData();
        props.initPressSetData();
    }, []);

    return (
        <Container fixed>
            <Box
                sx={{
                    p: 5,
                    ml: -6,
                    width: '100%',
                    height: '698px',
                    bgcolor: "#d6e5f8",
                    overflowY : 'auto'
                }}
                >
                
                <Typography variant="h6" gutterBottom component={"div"} 
                    sx={{
                        color : '#000000',
                        textAlign : 'left',
                        margin: '15px',
                        fontWeight: 'bold'
                    }}>
                    시스템설정
                </Typography>
                <Accordion sx={{bgcolor: '#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h7" gutterBottom component={"div"} 
                            sx={{
                                color : '#000000',
                                textAlign : 'left',
                                margin: '10px',
                                fontWeight: 'bold'
                            }}>
                            수위 감시 설정
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DepthTable cmmnStyle={cmmnStyle} depth={props.depth} />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{bgcolor: '#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h7" gutterBottom component={"div"} 
                            sx={{
                                color : '#000000',
                                textAlign : 'left',
                                margin: '10px',
                                fontWeight: 'bold'
                            }}>
                            수압 감시 설정
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PressTable cmmnStyle={cmmnStyle} press={props.press} />
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{bgcolor: '#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h7" gutterBottom component={"div"} 
                            sx={{
                                color : '#000000',
                                textAlign : 'left',
                                margin: '10px',
                                fontWeight: 'bold'
                            }}>
                            유량 감시 설정
                            
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FlowTable cmmnStyle={cmmnStyle} flow={props.flow} />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
   )
}

const mapStateToProps = (state) => {

    return {
        depth : state.depth,
        flow : state.flow,
        press : state.press
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initDepthSetData : async () => dispatch( await initDepthSetData()),
        initFlowSetData : async () => dispatch( await initFlowSetData()),
        initPressSetData : async () => dispatch( await initPressSetData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);