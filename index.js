// IntersectionObserver 콜백 함수 수정
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  },
  { threshold: 0.3 }
);

let sections = document.querySelectorAll("section");
sections.forEach((section) => observer.observe(section));
