import { driver, DriveStep } from "driver.js";

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
    element: ".dj-profile-mob",
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
        setTimeout(() => mobile_driver.moveNext(), 1000);
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
        setTimeout(() => mobile_driver.moveNext(), 1000);
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
        setTimeout(() => mobile_driver.moveNext(), 1000);
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
        setTimeout(() => mobile_driver.moveNext(), 1000);
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
export const mobile_driver = driver({
  showProgress: false,
  overlayColor: "gray",
  popoverClass: "driverjs-theme",
  steps: <DriveStep[]>steps_mini,
});
