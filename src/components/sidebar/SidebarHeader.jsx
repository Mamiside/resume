import { useState } from "react";

import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import { useTheme } from "@mui/material/styles";

import SocialMediaIcons from "../SocialMediaIcons";
import {CustomAvatar} from "../common";
import ThemeActionButton from "../ThemeActionButton";
import avatar from "../../assets/55.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

  const theme = useTheme();

  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} size={200} fallback="MH" />
      

      <Typography
        variant="h6"
        sx={{fontWeight: "bold", color: theme.palette.mode === "dark" ? "#F93C92" : "#38524F" }}
      >
        <Typography
          variant="caption"
          sx={{ color: theme.palette.mode === "dark" ? "tomato" : "#38524F" }}
        >
          {" {{ "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="محمد همتی زاده"
          onComplete={() => setStart(true)}
        />
        <Typography
          variant="caption"
          sx={{ color: theme.palette.mode === "dark" ? "tomato" : "#38524F" }}
        >
          {" }} "}
        </Typography>
      </Typography>
      {start && (
        <Typography
          variant="caption"
          sx={{fontWeight: "bold", color: theme.palette.mode === "dark" ? "gray" : "#38524F" }}
        >
          <Typography
            variant="caption"
            sx={{ color: theme.palette.mode === "dark" ? "tomato" : "#38524F" }}
          >
            [[{" "}
          </Typography>
          <RandomReveal
            isPlaying
            duration={4}
            characterSet={alphabetPersian}
            characters="برنامه نویس Javascript & Rust"
          />
          <Typography
            variant="caption"
            sx={{ color: theme.palette.mode === "dark" ? "tomato" : "#38524F" }}
          >
            {" "}
            ]]
          </Typography>
        </Typography>
      )}

      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
