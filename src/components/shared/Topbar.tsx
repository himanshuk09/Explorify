import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { driverObj_mini } from "@/driver/driver";
import { mobile_driver } from "@/driver/mobile-drive";

const Topbar = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [showModeTooltip, setModeShowTooltip] = useState(false);
  const [showLogoutTooltip, setLogoutShowTooltip] = useState(false);

  const [showDriverTooltip, setDriverShowTooltip] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [modeLogo, setModeLogo] = useState(true);

  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setDarkMode(!darkMode);
    setModeLogo(!modeLogo);
  };
  (function () {
    const savedTheme = localStorage.getItem("theme");
    console.log("called");
    console.log(savedTheme);
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  })();
  const savedTheme = localStorage.getItem("theme");

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          {/* <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          /> */}
          {savedTheme == "dark" ? (
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              width={130}
              height={325}
            />
          ) : (
            <img
              src="/assets/images/logo-white.svg"
              alt="logo"
              width={130}
              height={325}
            />
          )}
        </Link>

        <div className="flex gap-4">
          <div className="relative pt-2">
            {modeLogo ? (
              <img
                data-tooltip-target="tooltip-default"
                src="/assets/icons/dark-mode.svg"
                className="cursor-pointer "
                alt="logo"
                onClick={toggleDarkMode}
                onMouseEnter={() => setModeShowTooltip(true)}
                onMouseLeave={() => setModeShowTooltip(false)}
              />
            ) : (
              <img
                data-tooltip-target="tooltip-default"
                src="/assets/icons/light-mode.svg"
                className="cursor-pointer "
                alt="logo"
                onClick={toggleDarkMode}
                onMouseEnter={() => setModeShowTooltip(true)}
                onMouseLeave={() => setModeShowTooltip(false)}
              />
            )}
            {showModeTooltip && (
              <div className="tooltip bg-black text-white text-xs rounded py-1 px-2 absolute top-0 left-0 ml-6 mt-6">
                Dark Mode
              </div>
            )}
          </div>
          <div className="relative pt-2">
            <img
              data-tooltip-target="tooltip-default"
              src="/assets/icons/intro.svg"
              className="cursor-pointer "
              alt="logo"
              onClick={() => mobile_driver.drive()}
              onMouseEnter={() => setDriverShowTooltip(true)}
              onMouseLeave={() => setDriverShowTooltip(false)}
            />
            {showDriverTooltip && (
              <div className="tooltip bg-black text-white text-xs rounded py-1 px-2 absolute top-0 left-0 ml-6 mt-6">
                Guide
              </div>
            )}
          </div>
          <div className="relative">
            <Button
              variant="ghost"
              className="shad-button_ghost dj-logout-link"
              onClick={() => signOut()}
              onMouseEnter={() => setLogoutShowTooltip(true)}
              onMouseLeave={() => setLogoutShowTooltip(false)}>
              <img src="/assets/icons/logout.svg" alt="logout" />
            </Button>
            {showLogoutTooltip && (
              <div className="tooltip bg-black text-white text-xs rounded py-1 px-2 absolute top-0 left-0 ml-6 mt-6">
                Logout
              </div>
            )}
          </div>
          <Link
            to={`/profile/${user.id}`}
            className="flex-center gap-3 dj-profile-mob">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
