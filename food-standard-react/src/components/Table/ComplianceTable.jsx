
import React, {useState} from 'react';
import TableWrapper from './TableWrapper';
import CommonModal from 'components/Modal/Modal';
import NonComplianceTable from './NonComplianceTable';
const ComplianceTable = () => {
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const tblHeaders = [
    { name: 'MERITEMCODE', label: 'MERITEMCODE'},
    { name: 'ITEMDESCRIPTION', label: 'ITEMDESCRIPTION'},
    { name: 'MANUFACTURER', label: 'MANUFACTURER'},
    { name: 'MIN', label: 'MIN'},
    { name: 'DISTRIBUTOR', label: 'DISTRIBUTOR'},
    { name: 'TOTAL', label: 'TOTAL'}
  ];

  const data = [
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},
    { MERITEMCODE: 'Dummy RVP', ITEMDESCRIPTION: '50%', MANUFACTURER: 'ESBENSHADE', MIN: 'EGGS9E-CTN', DISTRIBUTOR: 'BALDOR SPECIALTY', TOTAL: '686.3', align: 'center'},    
];
  const tableContent = <NonComplianceTable></NonComplianceTable>
      return(
        <>
      <TableWrapper tableData={data} headers={tblHeaders} open={handleOpen} mText='TOTAL CIRCLE OF RESPONSIBILITY (COR) PURCHASING COMPLIANCE' subText='
CENTRAL REGION / TOTAL / NONCOMPLIANT COR PURCHASES'/>
      <CommonModal open={open} handleClose={handleClose} tableContent={tableContent} 
></CommonModal>
      </>
      );

  
};

export default ComplianceTable;