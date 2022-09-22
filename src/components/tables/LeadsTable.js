import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

//sample for atomic name
const first = 'John Eliezar';
const middle = 'Albona';
const last = 'Rodis';

const columns = [
  { id: "lead_id", label: "Leads ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 250 },
  { id: "email", label: "Email", minWidth: 250 },   
  { id: "day_phone", label: "Day Phone", minWidth: 250 },
  { id: "evening_phone", label: "Evening Phone", minWidth: 150 },
  { id: "zip_code", label: "Zipcode", minWidth: 150 },
  { id: "date", label: "Date Submitted", minWidth: 120 },
];

const renderColumns = columns.map(({ id, label, minWidth }) => {
  return (
    <TableCell key={id} align="center" colSpan={1} sx={{ minWidth: minWidth, fontFamily: 'Arvo', fontWeight:'bold', fontSize:14 }}>
      {label}
    </TableCell>
  );
});

function createData(
  lead_id,
  name,
  email,
  day_phone,
  evening_phone,
  zip_code,
  date,
) {
  return { lead_id, name, email, day_phone, evening_phone, zip_code, date};
}

const rows = [
  createData(
    "01",
    (first+ ' '+ middle+ ' '+ last),
    "Allez.G306@gmail.com",
    "09466802751",
    "09466801432",
    '8000',
    "08-17-19",
    
  ),
  createData(
    "02",
    (first+ ' '+ middle+ ' '+ last),
    "Jessa12306@gmail.com",
    "09466802751",
    "09466801432",
    '8000',
    "08-17-19",
  ),
  createData(
    "03",
    (first+ ' '+ middle+ ' '+ last),
    "Jessa12306@gmail.com",
    "09466802751",
    "09466801432",
    '8000',
    "08-17-19",
  ),
];

const LeadsTable = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper sx={{ width: "100%", mt: 2 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>{renderColumns}</TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.company_id}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center" sx={{ fontFamily: 'raleway', fontSize:14 }}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </Paper>
  );
};

export default LeadsTable;
