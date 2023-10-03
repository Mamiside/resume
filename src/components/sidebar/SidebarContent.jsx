import { Divider, Box } from "@mui/material";

import { grey } from "@mui/material/colors";

import {SidebarHeader, SidebarFooter, SidebarTabs} from ".";


const SidebarContent = () => {

  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>

      <SidebarHeader />

      <Divider variant="middle" color={grey[900]} />

      <SidebarTabs />

      <Divider variant="middle" color={grey[900]} />

      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
