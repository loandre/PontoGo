import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Button, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BallotIcon from '@mui/icons-material/Ballot';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);
  const [selected, setSelected] = useState("Dashboard");
  const logoFileName = theme.palette.mode === 'dark' ? 'logo2.png' : 'logo1.png';
  const techLeadColor = theme.palette.mode === 'dark' ? '#FFFFFF' : '#7900ff';
  const registerButtonColor = theme.palette.mode === 'dark' ? '#FFFFFF' : '#7900ff';
  const registerButtonBorderColor = theme.palette.mode === 'dark' ? '#FFFFFF' : '#7900ff';

  const redirectToTimeClock = () => {
    navigate("/registrodeponto");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#902fff !important",
        },
        "& .pro-menu-item.active": {
          color: "#7900ff !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img src={`${process.env.PUBLIC_URL}/assets/${logoFileName}`} alt="Ponto Go Logo" style={{ height: '40px', width: 'auto' }} />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {isCollapsed && (
            <MenuItem
              style={{
                color: colors.grey[100],
              }}
              onClick={redirectToTimeClock}
              icon={<AccessAlarmsIcon />}
            >
            </MenuItem>
          )}

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  José Daniel
                </Typography>
                <Typography variant="h5" style={{ color: techLeadColor }}>
                  Tech Lead
                </Typography>
                <Button
                  variant="outlined"
                  style={{
                    borderColor: registerButtonBorderColor,
                    color: registerButtonColor,
                    marginTop: '10px',
                  }}
                  onClick={redirectToTimeClock}
                >
                  <Box display="flex" alignItems="center">
                    <AccessAlarmsIcon style={{ marginRight: '8px' }} />
                    REGISTRAR PONTO
                  </Box>
                </Button>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Cadastrar Empresa"
              to="/cadastrarempresa"
              icon={<ApartmentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Cadastrar Colaborador"
              to="/cadastrarcolaborador"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Controle de Ponto"
              to="/controledeponto"
              icon={<BallotIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Gerenciar Equipe"
              to="/gerenciarequipe"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendário"
              to="/calendario"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};


export default Sidebar;