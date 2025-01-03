import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {ROUTE_PATHS} from '../constants/index';

const exportPdf = async (selector, pageHeight) => {
  const wbiNone = document.querySelector('.WBI-section-container');
  var height = 190;
  if(pageHeight === ROUTE_PATHS.climate || (pageHeight === (ROUTE_PATHS.wellness) && (wbiNone.style.display !=='none'))){
    height = 290
  }
  const capture = document.querySelector(selector);
  const canvas = await html2canvas(capture);
  const imgData = canvas.toDataURL("image/png");
  const doc = new jsPDF("p", "mm", "a4");
  doc.addImage(imgData, "PNG", 7, 0, 200, height);
  const pdfBlobUrl = doc.output('bloburl')
  const pdfWindow = window.open(pdfBlobUrl, '_blank');
  if (pdfWindow) {
    pdfWindow.onload = () => {
      setTimeout(() => {
        pdfWindow.print();
      }, 2000);
    };
  } 
};

export { exportPdf };
