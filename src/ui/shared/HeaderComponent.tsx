import { NavLink } from "react-router";
import Modal from "./Modal";
import Search from "./Search";

function HeaderComponent({
  openNav,
  open,
}: {
  openNav: (t: boolean) => void;
  open: boolean;
}) {
  return (
    <div className="flex items-center justify-between md:justify-around">
      <img src="/svg/logo.svg" className="w-10 md:w-15" alt="logo" />

      <ul className="gap-4 hidden md:flex">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/movies">Movies </NavLink>
        <NavLink to="/shows">Shows </NavLink>
        <NavLink to="/support">Support </NavLink>
        <NavLink to="/subscriptions">Subscriptions </NavLink>
      </ul>
      <div className="hidden md:flex gap-4 ">
        <Modal>
        <Modal.Open opens="search">
        <img src="/svg/search.svg" className="cursor-pointer" alt="" />
        </Modal.Open>
          <Modal.Window name="search">
            <Search />
        </Modal.Window>
        </Modal>
        <img src="/svg/notification.svg" alt="" />
      </div>
      <img
        src="/svg/menu.svg"
        className="md:hidden"
        onClick={() => openNav(true)}
        alt=""
      />
      {/* open navbar */}
      <div
        className={`fixed inset-0 bg-dark w-screen h-[110vh] z-30 py-2 px-3 ${
          !open && "hidden"
        }`}
      >
        <div
          className="font-extrabold text-3xl "
          onClick={() => openNav(false)}
        >
          X
        </div>
        <ul className="flex flex-col items-center gap-10 text-2xl">
          <li>
            <NavLink to="/">Home </NavLink>
          </li>

          <li>
            <NavLink to="/movies">Movies </NavLink>
          </li>
          <li>
            <NavLink to="/shows">Shows </NavLink>
          </li>
          <li>
            <NavLink to="/support">Support </NavLink>
          </li>
          <li>
            <NavLink to="/subscriptions">Subscriptions </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
