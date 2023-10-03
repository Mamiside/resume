import { Box, IconButton } from "@mui/material";

import { GitHub, LinkedIn, Telegram, WhatsApp } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";

const SocialMediaIcons = () => {
    const theme = useTheme();

    return (
        <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        <IconButton aria-lable="GitHub">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              sx={{ color: theme.palette.mode === "dark" ? "grey" : "#38524F" }}
            />
          </a>
        </IconButton>
        <IconButton aria-lable="LinkedIn">
          <a
            href="https://LinkedIn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              sx={{ color: theme.palette.mode === "dark" ? "grey" : "#38524F" }}
            />
          </a>
        </IconButton>
        <IconButton aria-lable="Telegram">
          <a
            href="https://Telegram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram
              sx={{ color: theme.palette.mode === "dark" ? "grey" : "#38524F" }}
            />
          </a>
        </IconButton>
        <IconButton aria-lable="WhatsApp">
          <a
            href="https://WhatsApp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp
              sx={{ color: theme.palette.mode === "dark" ? "grey" : "#38524F" }}
            />
          </a>
        </IconButton>
      </Box>
    )
}

export default SocialMediaIcons;