import SetoranPinjamanComp from "./Tunai/SetoranPinjamanComp"

const listTypes = [
  {
    name: "Laku Pandai",
    children: [
      {
        name: "Cash-in & Out",
        value: "cashIO",
        component: <SetoranPinjamanComp />,
      },
    ],
  },
  {
    name: "Tunai",
    children: [
      {
        name: "Setoran Pinjaman",
        value: "setoranPinjaman",
        component: <SetoranPinjamanComp />,
      },
    ],
  },
  {
    name: "Mini Atm Bri",
    children: [
      {
        name: "Registrasi Mobile",
        value: "registrasiMobile",
        component: <SetoranPinjamanComp />,
      },
    ],
  },
];

export default listTypes;