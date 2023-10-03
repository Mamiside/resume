import { Typography } from "@mui/material";

import { ArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <ArrowLeftRounded
        sx={{ verticalAlign: "bottom", color: "primary.main", fontSize: 35 }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی: محمد همتی زاده</Info>
      <Info>سن: 28</Info>
      <Info>شهر ایلام</Info>
      <Info>m.hematizadeh74@gmail.com :آدرس ایمیل</Info>
      <Info>شماره موبایل: 09029274446</Info>
    </>
  );
};

export default DevInfo;
