const themeToggle = document.querySelector("#theme-toggle");
const backToTop = document.querySelector("#back-to-top");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Theme and profile data can still work without a persistent cache.
  }
}

function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore storage restrictions in private or hardened browser contexts.
  }
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? "切换浅色模式" : "切换深色模式");
  themeToggle.title = dark ? "浅色模式" : "深色模式";
  themeToggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}" aria-hidden="true"></i>`;
  writeStorage("theme", dark ? "dark" : "light");
  refreshIcons();
}

themeToggle.addEventListener("click", () => setTheme(!document.body.classList.contains("dark")));
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
  navToggle.innerHTML = `<i data-lucide="${open ? "x" : "menu"}" aria-hidden="true"></i>`;
  refreshIcons();
});

navLinks.addEventListener("click", (event) => {
  if (!event.target.closest("a") || window.innerWidth > 760) return;
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "打开导航");
  navToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
  refreshIcons();
});

window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
    backToTop.classList.toggle("is-visible", window.scrollY > 560);
  },
  { passive: true },
);

async function loadGitHubFollowers() {
  const followerCount = document.querySelector("#github-followers");
  const cacheKey = "github-profile-cache";
  const cacheMaxAge = 60 * 60 * 1000;

  try {
    const cached = JSON.parse(readStorage(cacheKey));
    if (cached && Date.now() - cached.savedAt < cacheMaxAge) {
      followerCount.textContent = Number(cached.followers).toLocaleString("zh-CN");
      return;
    }
  } catch {
    removeStorage(cacheKey);
  }

  try {
    const response = await fetch("https://api.github.com/users/silenthj0", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

    const profile = await response.json();
    followerCount.textContent = Number(profile.followers).toLocaleString("zh-CN");
    writeStorage(
      cacheKey,
      JSON.stringify({ followers: profile.followers, savedAt: Date.now() }),
    );
  } catch {
    followerCount.textContent = "—";
  }
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

const savedTheme = readStorage("theme");
if (savedTheme === "dark") document.body.classList.add("dark");
setTheme(document.body.classList.contains("dark"));
refreshIcons();
loadGitHubFollowers();
