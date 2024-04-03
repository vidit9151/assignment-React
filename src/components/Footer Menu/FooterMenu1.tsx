import USAflag from "../../assets/usa Flag.png";
const Menu1 = [
  { id: 1, title: "Help" },
  { id: 2, title: "Contact" },
  { id: 3, title: "Fees" },
  { id: 4, title: "Security" },
  { id: 5, title: "Apps" },
  { id: 6, title: "Shop" },
  { id: 7, title: "Enterprise" },
  { id: 8, title: "Partners" },
];
const FooterMenu1 = () => {
  return (
    <div className="flex items-center justify-between pb-4">
      <ul className="flex gap-3 ">
        {Menu1.map(({ id, title }) => (
          <li className="text-sm font-semibold text-[#001a59]" key={id}>
            {title}
          </li>
        ))}
      </ul>
      <div>
        <img src={USAflag} alt="" className="w-6" />
      </div>
    </div>
  );
};

export default FooterMenu1;
