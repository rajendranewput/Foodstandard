import React, {useState} from 'react';
import TableWrapper from './TableWrapper';
import CommonModal from 'components/Modal/Modal';
import {useTranslation} from 'react-i18next';
import useStyle from './useStyle';
import {Box} from '@mui/material';
import ComplianceTable from './ComplianceTable';

const Table = () => {
    const style = useStyle();
    const [open, setOpen] = useState(false);
    const { t } = useTranslation(['commonHeadings']);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const tblHeaders = [
        { name: 'RVP', label: 'RVP', align: 'center', },
        { name: 'TOTAL', label: 'Total', align: 'center', },
       ];
    
      const data = [
        { RVP: 'WEST COAST #4(LF)REGION', TOTAL: '50%', align: 'center',},
        { RVP: 'WEST COAST #3(CW)REGION', TOTAL: '75%', align: 'center', },
        { RVP: 'WEST COAST #4(LF)REGION', TOTAL: '40%', align: 'center', },
        { RVP: 'WEST COAST #3(CW)REGION', TOTAL: '65%', align: 'center', },
        { RVP: 'UEST COAST #4(LF)REGION', TOTAL: '30%', align: 'center',},
        { RVP: 'WEST COAST #3(CW)REGION', TOTAL: '25%', align: 'center', },
        { RVP: 'WEST COAST #4(LF)REGION', TOTAL: '10%', align: 'center', },
        { RVP: 'WEST COAST #3(CW)REGION', TOTAL: '85%', align: 'center', },
      ];
      const pText =<Box sx={style.mobileHide}>
      <Box component="span" sx={style.icons}>{t('dmPopout')}</Box>
      <Box component="span" sx={style.icons}>{t('aPopout')}</Box>
    </Box>
    const tableContent =<ComplianceTable></ComplianceTable>
      return(
        <>
      <TableWrapper tableData={data} headers={tblHeaders} open={handleOpen} pText={pText}
 mText='TOTAL CIRCLE OF RESPONSIBILITY (COR) PURCHASING COMPLIANCE'
        subText='Bon Appétit'
      />
    <CommonModal open={open} handleClose={handleClose} tableContent={tableContent} 
></CommonModal>
      </>
      );

  
};

export default Table;