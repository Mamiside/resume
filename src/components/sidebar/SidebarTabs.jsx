import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";
import {useTheme} from "@mui/material/styles";

import MainContext from "../../context";
import {tabsData} from "../../constants/tabsData"

import { grey, orange, red, teal } from "@mui/material/colors";



const SidebarTabs = () => {
const {pageNumber, setDrawerOpen, handlePageNumber} = useContext(MainContext);

  const theme = useTheme();
  const data = tabsData();
 
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      /* indicatorColor={"#cb28fc8"} */
      TabIndicatorProps={{
        style: {
          backgroundColor: theme.palette.mode === "dark" ? "#c62828" : "#082320" ,
          width: 4,
          borderRadius: 3,
          marginLeft: 1
        }
      }}
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {
        data.map((tab, index) => (
          <Tab
            key={index}
            label={tab.lable}
            icon={tab.icon}
            iconPosition="start"
            sx={{
              backgroundColor: theme.palette.mode === "dark" ? "orange" : "#082320",
              my: 0.5,
              mx: 1,
              fontWeight: 900,
              borderRadius: 5,
              color: theme.palette.mode === "dark" ? grey[700]: "#D9E1CC",
              "&.MuiTab-root": {
                minHeight: 40,
              },
              "&.MuiTab-root:hover": {
                backgroundColor: theme.palette.mode === "dark" ? orange[600] : teal[800],
                color: theme.palette.mode === "dark" ? red[800]: grey[100],
                transition: ".8s",
              },
              "&.Mui-selected": {
                color: theme.palette.mode === "dark" ? red[800] : grey[100],
                backgroundColor: theme.palette.mode === "dark" ? orange[600] : teal[800],
              },
            }}
            onClick={() => setDrawerOpen(false)}
            {...tab}
        /> 
        ))
      }
 
    </Tabs>
  );
};

export default SidebarTabs;
