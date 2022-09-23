import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(102, 102, 102)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function CurrenciesList({ rows }) {
  return (
    <Table
      stickyHeader
      style={{ overflowY: "scroll", scrollSnapAlign: "center" }}
      aria-label="sticky table"
    >
      <TableHead>
        <TableRow>
          <StyledTableCell align="left">Валюта</StyledTableCell>
          <StyledTableCell align="left">Цена за доллар</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row[0]}>
            <StyledTableCell align="left">{row[0]}</StyledTableCell>
            <StyledTableCell align="left">{row[1]}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}
