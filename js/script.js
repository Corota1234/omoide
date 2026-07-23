document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => menu.classList.remove("open"));
    });
  }

  document.querySelectorAll(".video-wrap").forEach((wrap) => {
    const video = wrap.querySelector("video");
    const btn = wrap.querySelector(".fullscreen-btn");
    if (!video || !btn) return;

    const goFullscreen = () => {
      if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
      else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      goFullscreen();
    });
    video.addEventListener("click", goFullscreen);
  });
});
