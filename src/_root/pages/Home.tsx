import { Models } from "appwrite";

// import { useToast } from "@/components/ui/use-toast";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";
import { useState } from "react";
import { desktop_drive } from "@/driver/desktop-drive";
const Home = () => {
  // const { toast } = useToast();
  const [modeLogo, setModeLogo] = useState(true);
  const [showModeTooltip, setModeShowTooltip] = useState(false);
  const [showDriverTooltip, setDriverShowTooltip] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

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
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post?.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators dj-top-creators">
        <div className="flex row justify-around">
          <h3 className="h3-bold text-dark-1 dark:text-light-1">
            Top Creators
          </h3>
          <div className="flex row justify-between w-[20%]">
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
                onClick={() => desktop_drive.drive()}
                onMouseEnter={() => setDriverShowTooltip(true)}
                onMouseLeave={() => setDriverShowTooltip(false)}
              />
              {showDriverTooltip && (
                <div className="tooltip bg-black text-white text-xs rounded py-1 px-2 absolute top-0 left-0 ml-6 mt-6">
                  Guide
                </div>
              )}
            </div>
          </div>
        </div>

        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
