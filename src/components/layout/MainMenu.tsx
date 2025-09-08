import NavLink from '../NavLink';

const MainMenu = () => {
  return (
    <div className="flex gap-4">
      <NavLink colorScheme="text" to="/">
        Top Repos
      </NavLink>
      <NavLink colorScheme="text" to="/about">
        My Repos
      </NavLink>
    </div>
  );
};

export default MainMenu;
