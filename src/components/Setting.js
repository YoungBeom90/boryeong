import React, { useState} from 'react';
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
import { Box, style } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PressTable from './setting/PressTable';
import FlowTable from './setting/FlowTable';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Provider } from 'react-redux';
import store from './redux/store';

const Setting = () => {

    const darkTheme = createTheme({ palette: { background: '#0090e3'} });

    const [cmmnStyle, setCmmnStyle] = useState({
        tableHead: {
            fontWeight: 'bold',
            textAlign: 'center'
        },
        tableBody: {
            textAlign: 'center'
        }
    });

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
                            <TableContainer component={Paper} sx={{bgcolor: '#FFFFFF', marginBottom: '30px', position: 'center' }}>
                                <Table sx={{ minWidth: 650 }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={cmmnStyle.tableHead}>감시유형</TableCell>
                                            <TableCell style={cmmnStyle.tableHead}>누수결과</TableCell>
                                            <TableCell style={cmmnStyle.tableHead}>감시방법</TableCell>
                                            <TableCell style={cmmnStyle.tableHead}>감시기준</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={cmmnStyle.tableBody} rowSpan={4}>집수조 수위</TableCell>
                                            <TableCell style={cmmnStyle.tableBody} rowSpan={2}>관심</TableCell>
                                            <TableCell style={cmmnStyle.tableBody}>현재 수위 - 1시간전 수위</TableCell>
                                            <TableCell style={cmmnStyle.tableBody}>
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
                                            <TableCell style={cmmnStyle.tableBody}>현재 수위 - 2시간전 수위</TableCell>
                                            <TableCell style={cmmnStyle.tableBody}>
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
                                            <TableCell style={cmmnStyle.tableBody} rowSpan={2}>이상</TableCell>
                                            <TableCell style={cmmnStyle.tableBody}>현재 수위 - 1시간전 수위</TableCell>
                                            <TableCell style={cmmnStyle.tableBody}>
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
                                            <TableCell style={cmmnStyle.tableBody}>현재 수위 - 2시간전 수위</TableCell>
                                            <TableCell style={cmmnStyle.tableBody}>
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
                            <PressTable cmmnStyle={cmmnStyle}/>
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
                                <FlowTable cmmnStyle={cmmnStyle}/>
                            </Provider>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </ThemeProvider>
        </Container>
   )
}

export default Setting;