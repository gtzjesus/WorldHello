const header = document.querySelector('header');
const sectionOne = document.querySelector('header');

const sectionOneOptions = {
  rootMargin: '-100px 0 0 0',
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneOptions
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);