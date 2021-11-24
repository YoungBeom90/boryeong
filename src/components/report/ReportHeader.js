import React from 'react';

const ReportHeader = ({ className, title }) => {
    return (
        <div>
            <h1 className={className}>{title}</h1>
        </div>
    )
}

export default ReportHeader;