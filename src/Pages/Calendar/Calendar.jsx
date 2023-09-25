import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:550px)'); 
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDateClick = (selected) => {
    const title = prompt("Insira um título para o seu evento:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Tem certeza que deseja excluir o evento? '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDÁRIO" subtitle="Página interativa do Calendário" />

      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} justifyContent="space-between" m={isMobile ? '10px' : '0'}>
        {/* CALENDAR SIDEBAR */}
        <Box
          flex={isSmallScreen ? "1 1 auto" : "1 1 20%"}
          order={isSmallScreen ? 1 : 0}
          maxWidth={isSmallScreen ? '92%' : 'auto'}
          maxHeight={isSmallScreen ? '50vh' : 'auto'} 
          backgroundColor={colors.primary[400]}
          p={isSmallScreen ? "10px" : "15px"}
          borderRadius="4px"
          textAlign={isSmallScreen ? "center" : "initial"} 
        >
          <Typography variant={isSmallScreen ? "subtitle1" : "h4"} >Eventos</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.purpleAccent[300],
                  margin: isSmallScreen ? "2px 0" : "10px 0",
                  borderRadius: "2px",
                  padding: isSmallScreen ? "5px" : "10px",
                  display: isSmallScreen ? "flex" : "block",
                  flexDirection: isSmallScreen ? "column" : "row",
                  alignItems: isSmallScreen ? "center" : "flex-start",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box
          flex={isSmallScreen ? "1 1 auto" : "1 1 100%"}
          order={isSmallScreen ? 2 : 1}
          ml={!isSmallScreen && "15px"} 
        >
          <FullCalendar
            height={isSmallScreen ? "60vh" : "75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "",
              center: "title",
              right: "",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "Contratar o Loandre",
                date: "2023-09-22",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
