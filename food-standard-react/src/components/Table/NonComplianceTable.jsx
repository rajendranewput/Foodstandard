import React, {useState} from "react";
import TableWrapper from "./TableWrapper";
//all static value will be dynamic after api
const NonComplianceTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const tblHeaders = [
    { name: "account", label: "ACCOUNT", align: "center" },
    { name: "spend", label: "SPEND", align: "center" },
  ];

  const data = [
    { account: "NVIDIA", spend: "13,206", align: "center" },
    {
      account: "UNIVERSITY OF SAN FRANCISCO",
      spend: "13,206.8",
      align: "center",
    },
    {
      account: "UNIVERSITY OF SAN FRANCISCO",
      spend: "13,206.8",
      align: "center",
    },
    {
      account: "UNIVERSITY OF SAN FRANCISCO",
      spend: "13,206.8",
      align: "center",
    },
    {
      account: "UNIVERSITY OF SAN FRANCISCO",
      spend: "13,206.8",
      align: "center",
    },
  ];

  return (
    <>
      <TableWrapper
        tableData={data}
        headers={tblHeaders}
        open={handleOpen}
        mText="Chicken Breast Fresh Double Lobe 12 Oz Up 1/40 Lb"
      />
    </>
  );
};

export default NonComplianceTable;
