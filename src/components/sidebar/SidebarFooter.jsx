import { Typography, Box } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const SidebarFooter = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            color: theme.palette.mode === "dark" ? "whitesmoke" : "#38524F",
          }}
        >
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
          />
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: theme.palette.mode === "dark" ? "whitesmoke" : "#38524F",
          }}
        >
          کپی رایت 1401{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
