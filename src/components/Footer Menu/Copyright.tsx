const Copyright = () => {
  const date = new Date();
  return (
    <div className=" w-[22rem]  text-right text-sm">
      &copy; 1999 - {date.getFullYear()}
    </div>
  );
};

export default Copyright;
