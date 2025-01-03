import { IconButton, Box, Modal, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, Button, Link, TextField } from '@mui/material';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import useStyle from './useStyle';
import CancelIcon from '@mui/icons-material/Cancel';
function GridModal({openModal, handleCloseModal}) {
  const style = useStyle();
  const { t } = useTranslation(['bentoMenus', 'heirarchyPage']);
  const [open, setOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleClickOpen = (id) => {
    setSelectedItemId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItemId(null);
  };

  const handleSubmit = () => {
    handleClose();
  };

  const listItem = [
    { name: t('help', { ns: 'bentoMenus' }), hasFile: false},
    { name: t('uploadFiles', { ns: 'bentoMenus' }), hasFile: true},
    { name: t('uploadWriFiles', { ns: 'bentoMenus' }), hasFile: true},
    { name: t('addFiscalPriods', { ns: 'bentoMenus' }), hasFile: false},
    { name: t('reports', { ns: 'bentoMenus' }), hasFile: false},
    { name: t('recalTicks', { ns: 'bentoMenus' }), hasFile: false},
    { name: t('globalSettings', { ns: 'bentoMenus' }), hasFile: false},
    { name: t('climateLineItems', { ns: 'bentoMenus' }), hasFile: false},
    { name: t('plantLineItems', { ns: 'bentoMenus' }), hasFile: false},
  ];
  return (
    <Modal open={openModal} onClose={handleCloseModal} sx={style.model}>
    <Box sx={style.mBox}>
      <Box sx={style.innerBox}>
        <IconButton onClick={handleCloseModal} sx={style.iconBtn}>
          <CancelIcon />
        </IconButton>
      </Box>
      <List sx={style.list}>
        {listItem.map((item, index) => (
          <ListItem key={index} sx={style.lItem}>
            {item.hasFile ? (
              <ListItemText 
                primary={
                  <Link href="#" onClick={() => handleClickOpen(item.id)} sx={style.lText}>
                    {item.name}
                  </Link>
                }
              />
            ) : (
              <ListItemText 
                primary={
                  <Link href="#" sx={style.lText}>
                    {item.name}
                  </Link>
                }
              />
            )}
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('FSfileUpload', { ns: 'heirarchyPage' })}</DialogTitle>
        <DialogContent>
          <TextField type="file" fullWidth />
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  </Modal>
  )
}

export default GridModal
