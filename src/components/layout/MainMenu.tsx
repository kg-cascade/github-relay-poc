import NavLink from '../NavLink';

const MainMenu = () => {
  return (
    <div className="flex gap-4">
      <NavLink colorScheme="text" to="/">
        Top Repos
      </NavLink>
      <NavLink colorScheme="text" to="/MyRepos">
        My Repos
      </NavLink>
      <NavLink colorScheme="text" to="/PublicApis">
        Public APIs
      </NavLink>
    </div>
  );
};

export default MainMenu;
