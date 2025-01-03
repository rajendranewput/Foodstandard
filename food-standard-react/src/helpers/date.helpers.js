  
export const formattedDate = () => {
  const endDate = localStorage.getItem('endDate');
  const year = '20' + localStorage.getItem('selectedFy');
  let formattedDate = endDate;
  if (endDate) {
    let dateObj = new Date(endDate);
    formattedDate = dateObj.getFullYear() + '-' +
                        ('0' + (dateObj.getMonth() + 1)).slice(-2) + '-' +
                        ('0' + dateObj.getDate()).slice(-2);
  }
  return formattedDate;
};
  