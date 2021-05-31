export const HEADER_HEIGHT_PIXELS = 45;

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const scrollToAbout = () => {
  window.scrollTo(
    0,
    document.getElementById("about")?.offsetTop - HEADER_HEIGHT_PIXELS
  );
};

export const scrollToProjects = () => {
  window.scrollTo(
    0,
    document.getElementById("projects")?.offsetTop - HEADER_HEIGHT_PIXELS
  );
};

export const scrollToExperience = () => {
  window.scrollTo(
    0,
    document.getElementById("experience")?.offsetTop - HEADER_HEIGHT_PIXELS
  );
};
