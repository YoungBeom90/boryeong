import React from 'react';
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
    Input,
    TextField,
    InputAdornment,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button
} from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PressTable from './setting/PressTable';
import FlowTable from './setting/FlowTable';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import addValue from './redux/valueRangeSettings/actions'
import { Provider } from 'react-redux';
import store from './redux/store';

function Setting() {

    // const Item = styled(Paper)(({ theme }) => ({
    //     textAlign: 'center',
    //     width: 500,
    //     height: 40,
    //     lineHeight: '40px',
    // }));

    const darkTheme = createTheme({ palette: { background: '#0090e3'} });

    const tableHead = {
        fontWeight: 'bold',
    }
   
   return (
       <Provider store={store}>
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
                        {/* <button onClick={() => props.addValue()}>유량기준 + 1</button> */}
                        <Typography variant="h6" gutterBottom component={"div"} 
                            sx={{
                                color : '#000000',
                                textAlign : 'left',
                                margin: '15px',
                                fontWeight: 'bold'
                            }}>
                            시스템설정
                        </Typography>
                        <form id="testForm"  method="post">
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
                                    <FlowTable />
                                </AccordionDetails>
                            </Accordion>
                        </form>
                    </Box>
                </ThemeProvider>
            </Container>
        </Provider>
   )
}

// const mapStateToProps = (state) => {
//     return {
//         count1 : state.count1
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addValue : () => dispatch(addValue())
//     }
// }

export default Setting;