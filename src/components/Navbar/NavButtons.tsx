const NavButtons = () => {
  return (
    <div className="flex gap-5 ">
      <button className="border-2 border-paypalDark rounded-3xl w-32 h-10 text-paypalDark font-medium">
        My PayPal
      </button>
      <button className="border-2 border-paypalDark rounded-3xl  w-32 h-10 text-paypalDark font-medium">
        Log out
      </button>
    </div>
  );
};

export default NavButtons;
