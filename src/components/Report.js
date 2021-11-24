import React, {useState} from 'react';
import ReportHeader from './report/ReportHeader';
import {CSVLink, CSVDownload} from 'react-csv';
import ReportData from './report/ReportData';
import SupplyTable from './report/table/SupplyTable';

const Report = () => {

    


    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    let title = `◈ 일간 운영 보고서 ${year}.${month}.${day}`;
    return (
        <div>
            {/* <ReportHeader 
                className="header" 
                title={title} />
            <div className="row">
                <div className="col-md-8">
                    <h2>1. 공급량현황</h2>
                </div>
                <div className="col-md-4 center">
                </div>
            </div> */}
        </div>
    );
}
export default Report;