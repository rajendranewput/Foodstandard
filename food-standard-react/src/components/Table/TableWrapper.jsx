import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  InputLabel,
  InputBase,
} from "@mui/material";
import * as XLSX from "xlsx";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import useStyle from "./useStyle";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const TableWrapper = ({
  tableData,
  headers,
  open,
  pText,
  mText,
  subText,
}) => {
  const style = useStyle();
  const [pageCount, setPageCount] = useState(0);
  const [highlightRow, setHighlightRow] = useState(false);

  const handleClick = (rowData) => {
    open(rowData);
  };

  const toggleHighlightRow = (index) => {
    setHighlightRow(index);
  };

  const columns = React.useMemo(
    () =>
      headers.map((header) => ({
        Header: header.label,
        accessor: header.name,
        align: header.align,
      })),
    [headers]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setPageCount(Math.ceil(tableData.length / pageSize));
  }, [tableData, pageSize]);

  const exportPdf = () => {
    const pdfHideCells = document.querySelectorAll(".pdf-hide");
    if (pdfHideCells) {
      pdfHideCells.forEach((cell) => {
        cell.style.display = "none";
      });
    }

    const capture = document.querySelector(".actual-receipt");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const imgWidth = doc.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save(`${mText}.pdf`);

      if (pdfHideCells) {
        pdfHideCells.forEach((cell) => {
          cell.style.display = "";
        });
      }
    });
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(
      workbook,
      "Bon Appétit_FY_24_PERIOD_SUMMARY_TOTAL CIRCLE OF RESPONSIBILITY (COR) PURCHASING COMPLIANCE .xlsx"
    );
  };

  return (
    <Box className="actual-receipt">
      <Box>
        <Typography variant="h5" sx={style.modalText}>
          {mText}
        </Typography>
        <Typography variant="subtitle1" sx={style.appetit}>
          {subText}
        </Typography>
        <Box sx={style.modalFy}>
          <Typography variant="body1" sx={style.fyText}>
            FY: 24
          </Typography>
          <Typography variant="body1" sx={style.fyText}>
            {" "}
            PERIOD: 4 (12/29/2023-1/25/2024)
          </Typography>
        </Box>
      </Box>
      <Box>
        <TableContainer
          sx={style.tContainer}
          stickyheader="true"
          aria-label="sticky table"
        >
          <Box sx={style.sBox} className="pdf-hide">
            <Box sx={style.dFlex}>
              <Box sx={style.pdf}>
                <Button sx={style.modalBtn} onClick={exportExcel}>
                  Excel
                </Button>
              </Box>
              <Box sx={style.pdf}>
                <Button sx={style.modalBtn} onClick={exportPdf}>
                  PDF
                </Button>
              </Box>
            </Box>
            <Box sx={style.sInput}>
              <InputLabel htmlFor="search-input" sx={style.inputLabel}>
                Search:
              </InputLabel>
              <InputBase
                inputProps={{ "aria-label": "search" }}
                label="Search"
                variant="outlined"
                value={globalFilter || ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                sx={style.inputBase}
              />
            </Box>
          </Box>
          <Table {...getTableProps()} className="actual-receipt">
            <TableHead sx={style.theader}>
              {headerGroups.map((headerGroup, headerIndex) => (
                <TableRow key={headerIndex} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <TableCell
                      key={columnIndex} 
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      sx={{ textAlign: column.align, ...style.tName }}
                    >
                      {column.render("Header")}
                      {column.isSortedDesc ? (
                        <ArrowDropDownIcon
                          className="pdf-hide"
                          sx={style.arrowDrop}
                          onClick={() => toggleHighlightRow(columnIndex)}
                        />
                      ) : (
                        <ArrowDropUpIcon
                          className="pdf-hide"
                          sx={style.arrowDrop}
                          onClick={() => toggleHighlightRow(columnIndex)}
                        />
                      )}
                    </TableCell>
                  ))}
                  {pText && <TableCell key={`header-pText-${headerIndex}`}></TableCell>}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()} sx={style.MuiTableRow}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <TableRow
                    key={index} 
                    {...row.getRowProps()}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                      ...style.tbody,
                    }}
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <TableCell
                        key={cellIndex} 
                        {...cell.getCellProps()}
                        onClick={() => handleClick(row.original)}
                        sx={{
                          textAlign: cell.column.align,
                          ...style.tName,
                          backgroundColor:
                            highlightRow === cellIndex ? "#f1f1f1" : "inherit",
                          ...(cell.column.id === "TOTAL" ? style.tLink : "initial"),
                        }}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    ))}
                    {pText && (
                      <TableCell key={`row-pText-${index}`} className="pdf-hide">
                        {pText}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Box sx={style.entriesBox}>
            <Box sx={style.dFlex}>
              <Box>
                <Typography variant="body1" sx={style.showEnteries}>
                  showing {pageIndex * pageSize + 1} to{" "}
                  {Math.min((pageIndex + 1) * pageSize, tableData.length)} of{" "}
                  {tableData.length} entries
                </Typography>
              </Box>
            </Box>
            <Box sx={style.sInput}>
              <Typography
                variant="body1"
                sx={{
                  ...style.previous,
                  color: pageIndex === 0 ? "#666" : style.previousHover,
                }}
                onClick={() => pageIndex !== 0 && previousPage()}
                disabled={pageIndex === 0}
              >
                Previous
              </Typography>
              <Typography variant="body1" sx={style.cPage}>
                {pageIndex + 1}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...style.previous,
                  color:
                    pageIndex === pageCount - 1 ? "#666" : style.previousHover,
                }}
                onClick={() => pageIndex !== pageCount - 1 && nextPage()}
                disabled={pageIndex === pageCount - 1}
              >
                Next
              </Typography>
            </Box>
          </Box>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TableWrapper;
