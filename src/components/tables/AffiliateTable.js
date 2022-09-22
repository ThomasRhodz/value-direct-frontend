import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import UserDetailViewer from "../viewers/UserDetailsViewer";
import EditAffiliateForm from "../forms/EditAffiliateForm";

//Dialog
import Dialog from "@mui/material/Dialog";

//sample for atomic name
const first = 'John Eliezar';
const middle = 'Albona';
const last = 'Rodis';

const columns = [
  { id: "company_id", label: "Affiliate ID", minWidth: 200 },
  { id: "company_name", label: "Company Name", minWidth: 350 },
  { id: "company_acronym", label: "Acronym", minWidth: 350 },   
  { id: "date", label: "Date Created", minWidth: 200 },
];

const renderColumns = columns.map(({ id, label, minWidth }) => {
  return (
    <TableCell key={id} align="center" colSpan={1} sx={{ minWidth: minWidth, fontFamily: 'Arvo', fontWeight:'bold', fontSize:16 }}>
      {label}
    </TableCell>
  );
});

function createData(
  company_id,
  company_name,
  company_acronym,
  date,
) {
  return { company_id, company_name, company_acronym, date };
}

const rows = [
  createData(
    "01",
    "IND Legal Services",
    "I.L.S.",
    "08-17-19",
  ),
  createData(
    "02",
    "Masstort Alliance",
    "M.A.",
    "08-17-19",
  ),
  createData(
    "03",
    "Thomas Legal Service",
    "T.L.S.",
    "08-17-19",
  ),
  createData(
    "04",
    "JCO'S Legal Service",
    "J.L.S",
    "08-17-19",
  ),
];

const AffiliateTable = () => {
  const [ID, setID] = React.useState("");
  const [company_name, setCompanyName] = React.useState("");
  const [company_acronym, setAcronym] = React.useState("");
  

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openEditUser, setOpenEditUser] = React.useState(false); //-> for open and close of Client Inquiry dialog

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //function for opening and closing the Inquiry dialog
  const handleUserEditOpen = (
    company_id,
    company_name,
    company_acronym,
  ) => {
    setOpenEditUser(true)
    setID(company_id);
    setCompanyName(company_name);
    setAcronym(company_acronym);
  };

  //Function for closing the view dialog
  const handleUserEditClose = () => {
    setOpenEditUser(false);
  };

  return (
    <Paper sx={{ width: "100%", mt: 2 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >{renderColumns}</TableRow>
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
                    onClick={() =>
                      handleUserEditOpen(
                        row.company_id,
                        row.company_name,
                        row.company_acronym,
                      )
                    }
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center" sx={{ fontFamily:'raleway', fontSize:16 }}>
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

      <Dialog open={openEditUser} onClose={handleUserEditClose} scroll="body" sx={{ 
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "400px",  // Set your width here
          },
        },
       }}>
        <EditAffiliateForm
          onClose={() => handleUserEditClose()}
          id={ID}
          name={company_name} 
          acronym={company_acronym}
        />
      </Dialog>
    </Paper>
  );
};

export default AffiliateTable;
