import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportPDF = (year, month, day) => {
    // 보고서 pdf 파일 다운로드 기능
    html2canvas(document.querySelector("#capture")).then(canvas => {
        let imgData = canvas.toDataURL('image/jpeg');
        let imgWidth = 278;
        let pageHeight = imgWidth * 1.314;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let margin = 10;

        let doc = new jsPDF('p', 'mm', 'a3');
        let position = 20;

        doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while(heightLeft >= 20) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        doc.save(`일간운영보고서_${year}_${month}_${day}.pdf`);
    });
}

export const exportExcel = (year, month, day) => {
    const reportTitle = document.querySelector(".report-title");
    const supplyTb = document.querySelector(".supplyTb");
    const valveTb = document.querySelector(".valveTb");
    const depthTb = document.querySelector(".depthTb");
    const pressTb = document.querySelector(".pressTb");
    const teleTb = document.querySelector(".teleTb");
    const teleDirTb = document.querySelector(".teleDirTb"); 

    let tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
        tab_text += '<head><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
        tab_text += '<xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
        tab_text += '<x:Name>Test Sheet</x:Name>';
        tab_text += '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
        tab_text += '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
        tab_text += "<table border='1px'>";

    reportTitle.style.fontSize = '30px';

    let title = "";
    let exReportTitle = reportTitle.cloneNode(true);
    let exSupplyTb = supplyTb.cloneNode(true);
    let exValveTb = valveTb.cloneNode(true);
    let exDepthTb = depthTb.cloneNode(true);
    let exPressTb = pressTb.cloneNode(true);
    let exTeleTb = teleTb.cloneNode(true);
    let exTeleDirTb = teleDirTb.cloneNode(true);

    tab_text += exReportTitle.outerHTML;
    title = "<h3>공급량 현황</h3>";
    tab_text += title;
    tab_text += exSupplyTb.outerHTML;
    title = "<h3>밸브 현황</h3>";
    tab_text += title;
    tab_text += exValveTb.outerHTML;
    title = "<h3>집수조 수위 현황</h3>";
    tab_text += title;
    tab_text += exDepthTb.outerHTML;
    title = "<h3>수압 현황</h3>";
    tab_text += title;
    tab_text += exPressTb.outerHTML;
    title = "<h3>통신 현황</h3>";
    tab_text += title;
    tab_text += exTeleTb.outerHTML;
    tab_text += exTeleDirTb.outerHTML;

    tab_text += '</table></body></html>';
    let data_type = 'data:application/vnd.ms-excel';
    let ua = window.navigator.userAgent;
    let msie = ua.indexOf("MSIE ");
    let fileName = `일간운영보고서_${year}_${month}_${day}.xls`;

    // browser 처리
    if(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        console.log("if");
        if(window.navigator.msSaveBlob) {
            let blob = new Blob([tab_text], {
                type: "application/cvs;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, fileName);
        }
    } else {
        console.log("else");
        let blob2 = new Blob([tab_text], {
            type : "application/csv;charset=utf-8;"
        });
        let fileName2 = fileName;
        let elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob2);
        elem.download = fileName2;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }


}