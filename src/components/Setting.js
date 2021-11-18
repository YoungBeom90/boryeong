import React, { useState, useEffect} from 'react';
import { 
    Container,
    Paper, 
    TableCell, 
    TableContainer, 
    TableRow, 
    Table, 
    TableHead, 
    TableBody, 
    Typography,
    TextField,
    InputAdornment,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PressTable from './setting/PressTable';
import FlowTable from './setting/FlowTable';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import axios from 'axios';

const Setting = () => {

    const dispatch = useDispatch();

    const darkTheme = createTheme({ palette: { background: '#0090e3'} });

    const tableHead = {
        fontWeight: 'bold',
    }

    const [flowData, setFlowData] = useState([
        {
            id: "",
            line: "",
            warningVal : "",
            dangerVal: "",
        }
    ]);

    
   
    return (
        
        <Container fixed>
            <ThemeProvider theme={darkTheme} >
                <Box
                    sx={{
                        p: 5,
                        ml: -6,
                        width: '100%',
                        height: '768px',
                        bgcolor: "#cfe8fc",
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
                    <Accordion>
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
                            <TableContainer component={Paper} sx={{bgcolor: '#FFFFFF', marginBottom: '30px'}}>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={tableHead}>감시유형</TableCell>
                                            <TableCell style={tableHead}>누수결과</TableCell>
                                            <TableCell style={tableHead}>감시방법</TableCell>
                                            <TableCell style={tableHead}>감시기준</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell rowSpan={4}>집수조 수위</TableCell>
                                            <TableCell rowSpan={2}>관심</TableCell>
                                            <TableCell>현재 수위 - 1시간전 수위</TableCell>
                                            <TableCell>
                                                <TextField 
                                                    defaultValue="1"
                                                    size="small"
                                                    variant="standard"
                                                    style={{width: '60px'}} 
                                                    InputProps={{
                                                        endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                                                    }} 
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>현재 수위 - 2시간전 수위</TableCell>
                                            <TableCell>
                                                <TextField 
                                                    defaultValue="2"
                                                    size="small"
                                                    variant="standard"
                                                    style={{width: '60px'}} 
                                                    InputProps={{
                                                        endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                                                    }} 
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell rowSpan={2}>이상</TableCell>
                                            <TableCell>현재 수위 - 1시간전 수위</TableCell>
                                            <TableCell>
                                                <TextField 
                                                    defaultValue="3"
                                                    size="small"
                                                    variant="standard"
                                                    style={{width: '60px'}} 
                                                    InputProps={{
                                                        endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                                                    }} 
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>현재 수위 - 2시간전 수위</TableCell>
                                            <TableCell>
                                                <TextField 
                                                    defaultValue="4"
                                                    size="small"
                                                    variant="standard"
                                                    style={{width: '60px'}} 
                                                    InputProps={{
                                                        endAdornment:<InputAdornment position='start'>이상</InputAdornment>
                                                    }} 
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
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
                            <PressTable />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
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
                            <Provider store={store}>
                                <FlowTable />
                            </Provider>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </ThemeProvider>
        </Container>
   )
}

export default Setting;