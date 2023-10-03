import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    ConnectWithoutContactRounded,
  } from "@mui/icons-material";

const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  export const tabsData = () => {
    const tabs = [
        {lable: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0)},
        {lable: "درباره من", icon: <FaceRounded />, ...tabProps(1)},
        {lable: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2)},
      ]

      return tabs;
  }
  
