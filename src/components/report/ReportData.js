// import React, {useState} from "react";
// import { CSVLink } from "react-csv";
// import SupplyTable from "./table/SupplyTable";

// const ReportData = () => {

//     const supplyHeaders = [
//         {label: "일 공급량"},
//         {label: "전일 공급량"},
//         {label: "전일 대비"},
//         {label: "일 평균 공급량"},
//         {label: "평균 대비"}
//     ];

//     const [supplyReport, setSupplyReport] = useState([
//         {daySupply: 0},
//         {yesterdaySupply: 0},
//         {yesterdayPrepare : 0},
//         {dayAverageSupply : 0},
//         {averagePrepare : 0}
//     ]);
    
//     const [valveReport, setValveReport] = useState([
//         {valve1Aopen : '00:00~21:00, 22:01~23:59'},
//         {valve2Aopen : '00:00~21:00 22:01~23:59'},
//         {valve3Aopen : '00:00~21:00 22:01~23:59'},
//         {valve4Aopen : '00:00~21:00 22:01~23:59'},
//         {valve5Aopen : '00:00~21:00 22:01~23:59'},
//         {valve6Aopen : '00:00~21:00 22:01~23:59'},
//         {valve7Aopen : '00:00~21:00 22:01~23:59'},
//         {valve8Aopen : '00:00~21:00 22:01~23:59'},
//         {valve9Aopen : '00:00~21:00 22:01~23:59'},
//         {valve10Aopen : '00:00~21:00 22:01~23:59'},
//         {valve1Aclose : '00:00~21:00, 22:01~23:59'},
//         {valve2Aclose : '00:00~21:00 22:01~23:59'},
//         {valve3Aclose : '00:00~21:00 22:01~23:59'},
//         {valve4Aclose : '00:00~21:00 22:01~23:59'},
//         {valve5Aclose : '00:00~21:00 22:01~23:59'},
//         {valve6Aclose : '00:00~21:00 22:01~23:59'},
//         {valve7Aclose : '00:00~21:00 22:01~23:59'},
//         {valve8Aclose : '00:00~21:00 22:01~23:59'},
//         {valve9Aclose : '00:00~21:00 22:01~23:59'},
//         {valve10Aclose : '00:00~21:00 22:01~23:59'},
//         {valve1Bopen : '00:00~21:00 22:01~23:59'},
//         {valve2Bopen : '00:00~21:00 22:01~23:59'},
//         {valve3Bopen : '00:00~21:00 22:01~23:59'},
//         {valve4Bopen : '00:00~21:00 22:01~23:59'},
//         {valve5Bopen : '00:00~21:00 22:01~23:59'},
//         {valve6Bopen : '00:00~21:00 22:01~23:59'},
//         {valve7Bopen : '00:00~21:00 22:01~23:59'},
//         {valve8Bopen : '00:00~21:00 22:01~23:59'},
//         {valve9Bopen : '00:00~21:00 22:01~23:59'},
//         {valve10Bopen : '00:00~21:00 22:01~23:59'},
//         {valve1Bclose : '00:00~21:00 22:01~23:59'},
//         {valve2Bclose : '00:00~21:00 22:01~23:59'},
//         {valve3Bclose : '00:00~21:00 22:01~23:59'},
//         {valve4Bclose : '00:00~21:00 22:01~23:59'},
//         {valve5Bclose : '00:00~21:00 22:01~23:59'},
//         {valve6Bclose : '00:00~21:00 22:01~23:59'},
//         {valve7Bclose : '00:00~21:00 22:01~23:59'},
//         {valve8Bclose : '00:00~21:00 22:01~23:59'},
//         {valve9Bclose : '00:00~21:00 22:01~23:59'},
//         {valve10Bclose : '00:00~21:00 22:01~23:59'},
//     ]);
    
//     const [depthReport, setDepthReport] = useState({
//         dayAverageDepth : 0,
//         dayMaxDepth: 0,
//         dayMinDepth: 0,
//         yesterdayAverageDepth: 0,
//         yesterdayMaxDepth: 0,
//         yesterdayAveragePrepare: 0,
//         yesterMaxPrepare: 0
//     });
    
//     const [pressReport, setPressReport] = useState({
//        press1Amin : 0, 
//        press2Amin : 0, 
//        press3Amin : 0, 
//        press4Amin : 0, 
//        press5Amin : 0, 
//        press6Amin : 0, 
//        press7Amin : 0, 
//        press8Amin : 0, 
//        press9Amin : 0, 
//        press10Amin : 0, 
//        press1Amax : 0, 
//        press2Amax : 0, 
//        press3Amax : 0, 
//        press4Amax : 0, 
//        press5Amax : 0, 
//        press6Amax : 0, 
//        press7Amax : 0, 
//        press8Amax : 0, 
//        press9Amax : 0, 
//        press10Amax : 0, 
//        press1Bmin : 0, 
//        press2Bmin : 0, 
//        press3Bmin : 0, 
//        press4Bmin : 0, 
//        press5Bmin : 0, 
//        press6Bmin : 0, 
//        press7Bmin : 0, 
//        press8Bmin : 0, 
//        press9Bmin : 0, 
//        press10Bmin : 0, 
//        press1Bmax : 0, 
//        press2Bmax : 0, 
//        press3Bmax : 0, 
//        press4Bmax : 0, 
//        press5Bmax : 0, 
//        press6Bmax : 0, 
//        press7Bmax : 0, 
//        press8Bmax : 0, 
//        press9Bmax : 0, 
//        press10Bmax : 0, 
//     });

//     return (
//         <div>
//             <CSVLink headers={supplyHeaders} data={supplyReport}>엑셀 다운로드</CSVLink>
//             <SupplyTable />
//         </div>
        
//     )
// }

// export default ReportData;