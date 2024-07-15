import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

const NavBar = () => {
  // variables for layout of the navbar.
  const NavLinkLayout = "col-span-1 mx-4";
  const LogoLayout = "text-white col-span-3 text-start px-2 justify-self-start";
  return (
    <ul className="bg-primary font-michroma grid grid-cols-6 gap-4 h-16 place-items-center">
      <Logo style={LogoLayout} />
      <NavigationLink linkTo={"recipes"} style={NavLinkLayout} />
      <NavigationLink linkTo={"add-recipe"} style={NavLinkLayout} />
      <NavigationLink linkTo={"home"} style={NavLinkLayout} />
    </ul>
  );
};

export default NavBar;
