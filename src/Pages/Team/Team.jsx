import { Box, Typography, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const isSmallScreen = useMediaQuery('(max-width:767px)');

  const mobileColumns = [
    {
      field: "name",
      headerName: "Nome",
      cellClassName: 'force-black-text',
      flex: 2,
    },
    {
      field: "age",
      headerName: "Idade",
      type: "number",
      headerAlign: "left",
      align: "left",
      cellClassName: 'force-black-text',
      flex: 1,
    }
  ];

  const columns = [
    { field: "id", headerName: "ID", cellClassName: 'force-black-text' },
    {
      field: "name",
      headerName: "Nome",
      flex: 1,
      cellClassName: 'force-black-text',
    },
    {
      field: "age",
      headerName: "Idade",
      type: "number",
      headerAlign: "left",
      align: "left",
      cellClassName: 'force-black-text',
    },
    {
      field: "phone",
      headerName: "Telefone",
      flex: 1,
      cellClassName: 'force-black-text',
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 1,
      cellClassName: 'force-black-text',
    },
    {
      field: "accessLevel",
      headerName: "Nível de acesso",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="110px"
            m="0 auto"
            padding="5px"
            display="flex"
            justifyContent="flex-start"
            paddingLeft="20px"
            backgroundColor="#ccc"
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon style={{ color: 'black' }} />}
            {access === "manager" && <SecurityOutlinedIcon style={{ color: 'black' }} />}
            {access === "user" && <LockOpenOutlinedIcon style={{ color: 'black' }} />}
            <Typography sx={{ ml: "5px", color: 'black' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  
  const currentColumns = isSmallScreen ? mobileColumns : columns;

  return (
    <Box m="20px">
      <Header title="GERENCIAR EQUIPE" subtitle="Gerencie os Membros da Equipe" />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={currentColumns} />
      </Box>
    </Box>
  );
};

export default Team;
