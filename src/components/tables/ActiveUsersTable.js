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

//Dialog
import Dialog from "@mui/material/Dialog";

//sample for atomic name
const first = 'John Eliezar';
const middle = 'Albona';
const last = 'Rodis';

const columns = [
  { id: "user_id", label: "User ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 250 },
  { id: "email", label: "Email", minWidth: 250 },   
  { id: "address", label: "Address", minWidth: 250 },
  { id: "role", label: "Role", minWidth: 150 },
  { id: "date", label: "Date Created", minWidth: 120 },
];

const renderColumns = columns.map(({ id, label, minWidth }) => {
  return (
    <TableCell key={id} align="center" colSpan={1} sx={{ minWidth: minWidth, fontFamily: 'Arvo', fontWeight:'bold', fontSize:14 }}>
      {label}
    </TableCell>
  );
});

function createData(
  user_id,
  name,
  email,
  address,
  role,
  date,
  id,
  firstname,
  middlename,
  lastname,
  contact,
  pass
) {
  return { user_id, name, email, address, role, date, id, firstname,middlename, lastname, contact, pass };
}

const rows = [
  createData(
    "01",
    (first+ ' '+ middle+ ' '+ last),
    "Allez.G306@gmail.com",
    "Bangkal, Davao City",
    "Admin",
    "08-17-19",
    "UID_01",
    first,
    middle,
    last,
    [{type: 'Mobile', number: '09466801637'}, {type: 'Telephone', number: '231-646'}],
    "Mihoyo021600"
  ),
  createData(
    "02",
    (first+ ' '+ middle+ ' '+ last),
    "Jessa12306@gmail.com",
    "Matina Pangi, Davao City",
    "Super Admin",
    "08-17-19",
    "UID_02",
    first,
    middle,
    last,
    [{type: 'Mobile', number: '09466801637'}, {type: 'Telephone', number: '231-646'}],
    "Mihoyo021600"
  ),
];

const ActiveUsersTable = () => {
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [middlename, setMiddleName] = React.useState("");
  const [user_id, setID] = React.useState("");
  const [user_pass, setPass] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState([]);
  const [address, setAddress] = React.useState("");
  const [role, setRole] = React.useState("");

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
    user_id,
    firstname,
    lastname,
    middlename,
    email,
    address,
    role,
    id,
    contact,
    pass
  ) => {
    setOpenEditUser(true);
    setID(user_id);
    setFirstName(firstname);
    setLastName(lastname);
    setMiddleName(middlename);
    setEmail(email);
    setContact(contact);
    setAddress(address);
    setRole(role);
    setID(id);
    setPass(pass);
  };

  //Function for closing the view dialog
  const handleUserEditClose = () => {
    setOpenEditUser(false);
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
                    onClick={() =>
                      handleUserEditOpen(
                        row.user_id,
                        row.firstname,
                        row.lastname,
                        row.middlename,
                        row.email,
                        row.address,
                        row.role,
                        row.id,
                        row.contact,
                        row.pass
                      )
                    }
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

      <Dialog open={openEditUser} onClose={handleUserEditClose} scroll="body" sx={{ 
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "400px",  // Set your width here
          },
        },
       }}>
        <UserDetailViewer
          onClose={() => handleUserEditClose()}
          id={user_id}
          firstname={first_name} 
          lastname={last_name}
          middlename={middlename} 
          address={address}
          role={role} 
          email={email}
          password={user_pass} 
          contactList={contact}
        />
      </Dialog>
    </Paper>
  );
};

export default ActiveUsersTable;
