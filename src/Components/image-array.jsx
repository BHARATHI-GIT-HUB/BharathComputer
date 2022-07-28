import CustomPCRepair from "../assets/Images/Custom-PC-Repair.jpg";
import LapService from "../assets/Images/Lap-service.jpeg";
import LapRepair from "../assets/Images/Lap-Repair.jpg";
import LiquidDamage from "../assets/Images/liquidDamage.jpeg";
import ChipService from "../assets/Images/Chip-Service.jpg";
import CustomPc from "../assets/Images/Custom-PC.jpg";
import DataRecovery from "../assets/Images/Data-Recovery.jpg";

const ArrayImages = [
  {
    key: 1,
    src: CustomPCRepair,
    Heading: "Custom Pc And Laptop Repair And Service",
    p: "Our technicians have the expertise to fix or upgrade your PC laptop or desktop computer.",
  },
  {
    key: 2,
    src: LapService,
    Heading: "Our Most Trusted Computer professionals ",
    p: "We Provide  servicing For businesses, schools, professionals and individuals.",
  },
  {
    key: 3,
    src: LapRepair,
    Heading: "Laptop Repair And Service",
    p: "As an Trusted Service Provider, we will fix your device with using original parts.",
  },
];

const ArrayForCard = [
  {
    key: 1,
    src: LiquidDamage,
    to: "/Liquid-Damage",
    Heading: "Liquid Damage",
    p: "Repairing liquid-damaged devices is one of our specialties. If you suspect any liquid exposure to your machine, don’t delay, shut down, unplug, and reach out immediately to review.",
  },
  {
    key: 2,
    src: CustomPc,
    to: "/Custom-Desktop",
    Heading: "Custom Desktop",
    p: " Whether you’re looking for a gaming powerhouse or a flexible family computer that can be upgraded for years to come, our experts can help you build exactly what you need.",
  },
  {
    key: 3,
    src: DataRecovery,
    to: "/Data-Recovery",
    Heading: "Data Recovery",
    p: "Greater experts at recovering data from failed hard drives and memory cards, and migration of data to new storage solution.",
  },
  {
    key: 4,
    src: ChipService,
    to: "/Chip-Service",
    Heading: "ChipLevel Service",
    p: "We are specialized in repairing and servicing wide range of laptop Chip Level Repair to meet the demands of our clients. These Motherboard Chip Level repair and maintenance are rendered with atmost precision.",
  },
];

export { ArrayImages, ArrayForCard };
