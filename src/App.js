import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Pages/Global/Topbar"; 
import Sidebar from "./Pages/Global/Sidebar";
import NewPoint from "./Pages/NewPoint/NewPoint";
import Company from "./Pages/Company/Company";
import Employees from "./Pages/Employees/Employees";
import PointControl from "./Pages/PointControl/PointControl";
import Team from "./Pages/Team/Team";
import Calendar from "./Pages/Calendar/Calendar";
import FAQ from "./Pages/Faq/Faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/gerenciarequipe" element={<Team />} />
              <Route path="/cadastrarempresa" element={<Company />} />
              <Route path="/cadastrarcolaborador" element={<Employees />} />
              <Route path="/registrodeponto" element={<NewPoint />} />
              <Route path="/controledeponto" element={<PointControl />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendario" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
