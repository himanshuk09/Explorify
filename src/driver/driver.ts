import { driver, DriveStep } from "driver.js";
import "driver.js/dist/driver.css";
const home = [
  {
    popover: {
      title: "Welcome to Explorify.",
      description: "Let's go for tour..",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-profile-desktop",
    popover: {
      title: "Profile",
      description: "Here you can see you details.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-top-creators",
    popover: {
      title: "Top Creators",
      description: "Here you will see all the list of users.",
      side: "right",
      align: "start",
    },
  },
  {
    element: ".dj-user-card",
    popover: {
      title: "User Card",
      description:
        "Here is the User Card you can follow or you can see all the details of user by clicking on it.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-post-card",
    popover: {
      title: "Post",
      description: "Here is the post that shared by Users.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-like-btn",
    popover: {
      title: "Like",
      description: "By Clicking on it you can like or unlike the post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-save-btn",
    popover: {
      title: "Saved Button",
      description: "By Clicking on it you can saved pr unsaved the post.",
      side: "left",
      align: "start",
    },
  },
];

const explore = [
  {
    element: ".dj-explore",
    popover: {
      title: "Explore",
      description: "By navigating to Explore you can explore new posts.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-search-box",
    popover: {
      title: "Search By Captions",
      description: "Here is a search box , you can search /explore new thinks.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-grid-container",
    popover: {
      title: "Explored Posts",
      description: "Here you can see top posts.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-post",
    popover: {
      title: "User Post",
      description: "By click on it , you can get it details.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-post-details",
    popover: {
      title: "Post Details",
      description: "Here you can see Details.",
      side: "left",
      align: "start",
    },
  },
];
const people = [
  {
    element: ".dj-people",
    popover: {
      title: "Peoples",
      description: "Here you can see all users that you can follow.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-user-container",
    popover: {
      title: "All Users",
      description: "Here you can see all Users.",
      side: "left",
      align: "start",
    },
  },
];

const saved = [
  {
    element: ".dj-saved",
    popover: {
      title: "Saved",
      description: "Here you can see your saved post.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-saved-container",
    popover: {
      title: "Saved Post",
      description: "Here is your saved Post.",
      side: "left",
      align: "start",
    },
  },
];

const post = [
  {
    element: ".dj-create-post",
    popover: {
      title: "Creat Post",
      description: "By navigating here you can create your post.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-caption-textarea",
    popover: {
      title: "Caption Input Box",
      description: "Here you have to add caption for your post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-file-upload",
    popover: {
      title: "File Upload",
      description:
        "Here you have to drag and drop or upload files/images etc.. for for post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-location-input",
    popover: {
      title: "Location Input Box",
      description: "Here you have to add location.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-tags-input",
    popover: {
      title: "Tags Input Box",
      description: "Here you have to add multiple tags for the post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-submit-btn",
    popover: {
      title: "Submit Button",
      description: "By Clicking on submit button your post should be posted.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-logout-link",
    popover: {
      title: "Logout",
      description: "By Clicking on it you can logout.",
      side: "left",
      align: "start",
    },
  },
];

const steps = [...home, ...explore, ...people, ...saved, ...post];
export const driverObj = driver({
  showProgress: false,
  overlayColor: "gray",
  popoverClass: "driverjs-theme",
  steps: <DriveStep[]>steps,
});

const home_mini = [
  {
    popover: {
      title: "Welcome to Explorify.",
      description: "Let's go for tour..",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-profile",
    popover: {
      title: "Profile",
      description: "Here you can see you details.",
      side: "left",
      align: "start",
    },
  },

  {
    element: ".dj-post-card",
    popover: {
      title: "Post",
      description: "Here is the post that shared by Users.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-like-btn",
    popover: {
      title: "Like",
      description: "By Clicking on it you can like or unlike the post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-save-btn",
    popover: {
      title: "Saved Button",
      description: "By Clicking on it you can saved pr unsaved the post.",
      side: "left",
      align: "start",
    },
  },
];

const explore_mini = [
  {
    element: ".dj-explore_mini",
    popover: {
      title: "Explore",
      description: "By navigating to Explore you can explore new posts.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-search-box",
    popover: {
      title: "Search By Captions",
      description: "Here is a search box , you can search /explore new thinks.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-grid-container",
    popover: {
      title: "Explored Posts",
      description: "Here you can see top posts.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-post",
    popover: {
      title: "User Post",
      description: "By click on it , you can get it details.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-post-details",
    popover: {
      title: "Post Details",
      description: "Here you can see Details.",
      side: "left",
      align: "start",
    },
  },
];

const saved_mini = [
  {
    element: ".dj-saved_mini",
    popover: {
      title: "Saved",
      description: "Here you can see your saved post.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-saved-container",
    popover: {
      title: "Saved Post",
      description: "Here is your saved Post.",
      side: "left",
      align: "start",
    },
  },
];

const post_mini = [
  {
    element: ".dj-create-post_mini",
    popover: {
      title: "Creat Post",
      description: "By navigating here you can create your post.",
      side: "left",
      align: "start",
      onNextClick: (element: any) => {
        element.click();
        setTimeout(() => driverObj.moveNext(), 1000);
      },
    },
  },
  {
    element: ".dj-caption-textarea",
    popover: {
      title: "Caption Input Box",
      description: "Here you have to add caption for your post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-file-upload",
    popover: {
      title: "File Upload",
      description:
        "Here you have to drag and drop or upload files/images etc.. for for post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-location-input",
    popover: {
      title: "Location Input Box",
      description: "Here you have to add location.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-tags-input",
    popover: {
      title: "Tags Input Box",
      description: "Here you have to add multiple tags for the post.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-submit-btn",
    popover: {
      title: "Submit Button",
      description: "By Clicking on submit button your post should be posted.",
      side: "left",
      align: "start",
    },
  },
  {
    element: ".dj-logout-link",
    popover: {
      title: "Logout",
      description: "By Clicking on it you can logout.",
      side: "left",
      align: "start",
    },
  },
];

const steps_mini = [...home_mini, ...explore_mini, ...saved_mini, ...post_mini];
export const driverObj_mini = driver({
  showProgress: false,
  overlayColor: "gray",
  popoverClass: "driverjs-theme",
  steps: <DriveStep[]>steps_mini,
});
