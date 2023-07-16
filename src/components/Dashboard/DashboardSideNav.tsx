const DashboardSideNav = () => {
  const dashboardManuItems = (
    <>
      <li className="flex items-center gap-2">Home</li>
    </>
  );

  return (
    <section>
      <ul className="flex flex-col gap-6">{dashboardManuItems}</ul>
    </section>
  );
};

export default DashboardSideNav;
