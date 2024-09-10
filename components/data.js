import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/_ece31e08-a330-4a44-a007-7bda8bc9cd07.jpeg";
import benefitTwoImg from "../public/img/_61f4c5e6-ec5c-4229-a9fd-f57f04720016.jpeg";

const benefitOne = {
  title: "Immer einen Schritt voraus in der Mode.",
  desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Heute planen, morgen stilvoll sein.",
      desc: "Mit dem Kalender...",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Immer einen Schritt voraus in der Mode.",
      desc: "KI, KI und noch mehr KI",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Entdecke deinen Kleiderschrank neu.",
      desc: "Schmankerl aus dem Klederschrankerl",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Lorem ipsum dolor sit amet",
  desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
