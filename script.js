const notes = [
  {
    category: "原子物理学",
    title: "多电子体系",
    description: "多电子原子的耦合、能级结构与常用近似方法整理。",
    files: [
      { path: "content/原子物理学/多电子体系.pdf", size: 1793902 },
      { path: "content/原子物理学/多电子体系.md", size: 10730 },
    ],
  },
  {
    category: "原子物理学",
    title: "电子自旋",
    description: "电子自旋、角动量及其相关物理结论的章节笔记。",
    files: [
      { path: "content/原子物理学/电子自旋.pdf", size: 1663635 },
      { path: "content/原子物理学/电子自旋.md", size: 10158 },
    ],
  },
  {
    category: "原子物理学",
    title: "矩阵力学",
    description: "从算符与矩阵表述出发梳理量子力学的基本框架。",
    files: [
      { path: "content/原子物理学/矩阵力学.pdf", size: 1488710 },
      { path: "content/原子物理学/矩阵力学.md", size: 10444 },
    ],
  },
  {
    category: "数学物理方法",
    title: "狄拉克函数",
    description: "狄拉克 δ 函数的定义、性质与常见应用整理。",
    files: [{ path: "content/数学物理方法/狄拉克函数.md", size: 10248 }],
  },
  {
    category: "热学",
    title: "0 热学基础",
    description: "热力学系统、状态参量与基础概念的入门笔记。",
    files: [
      { path: "content/热学/0 热学基础.pdf", size: 1850495 },
      { path: "content/热学/0 热学基础.md", size: 4581 },
    ],
  },
  {
    category: "热学",
    title: "1 分子动理论",
    description: "从微观粒子运动出发理解宏观热现象。",
    files: [
      { path: "content/热学/1 分子动理论.pdf", size: 1594824 },
      { path: "content/热学/1 分子动理论.md", size: 7907 },
    ],
  },
  {
    category: "热学",
    title: "2 热力学第一定律",
    description: "功、热量与内能之间的能量守恒关系。",
    files: [
      { path: "content/热学/2 热力学第一定律.pdf", size: 1185529 },
      { path: "content/热学/2 热力学第一定律.md", size: 6940 },
    ],
  },
  {
    category: "热学",
    title: "3 麦克斯韦关系",
    description: "热力学势与麦克斯韦关系的推导和使用。",
    files: [
      { path: "content/热学/3 麦克斯韦关系.pdf", size: 1031444 },
      { path: "content/热学/3 麦克斯韦关系.md", size: 5131 },
    ],
  },
  {
    category: "热学",
    title: "4 热力学第二定律",
    description: "熵、可逆过程与热力学第二定律的系统整理。",
    files: [
      { path: "content/热学/4 热力学第二定律.pdf", size: 1701308 },
      { path: "content/热学/4 热力学第二定律.md", size: 7888 },
    ],
  },
  {
    category: "热学",
    title: "5 物态（液体）",
    description: "液体物态及其典型性质的课程笔记。",
    files: [
      { path: "content/热学/5 物态（液体）.pdf", size: 1756860 },
      { path: "content/热学/5 物态（液体）.md", size: 6596 },
    ],
  },
  {
    category: "热学",
    title: "6 相（相变，相平衡）",
    description: "相变、相平衡与相关热力学条件的整理。",
    files: [
      { path: "content/热学/6 相（相变，相平衡）.pdf", size: 1394547 },
      { path: "content/热学/6 相（相变，相平衡）.md", size: 7597 },
    ],
  },
  {
    category: "电磁学",
    title: "0 电磁场的相对论变换",
    description: "不同参考系之间电磁场变换关系的整理。",
    files: [
      { path: "content/电磁学/0 电磁场的相对论变换.pdf", size: 893868 },
      { path: "content/电磁学/0 电磁场的相对论变换.md", size: 4988 },
    ],
  },
  {
    category: "电磁学",
    title: "1 规范变换",
    description: "电磁势、规范自由度与规范变换的基础笔记。",
    files: [
      { path: "content/电磁学/1 规范变换.pdf", size: 977418 },
      { path: "content/电磁学/1 规范变换.md", size: 4428 },
    ],
  },
  {
    category: "电磁学",
    title: "2 静电与静磁场",
    description: "静电场与静磁场的基本方程及典型问题。",
    files: [
      { path: "content/电磁学/2 静电与静磁场.pdf", size: 1235147 },
      { path: "content/电磁学/2 静电与静磁场.md", size: 4618 },
    ],
  },
  {
    category: "电磁学",
    title: "3 磁场",
    description: "磁场性质、场方程与常用计算关系整理。",
    files: [
      { path: "content/电磁学/3 磁场.pdf", size: 753096 },
      { path: "content/电磁学/3 磁场.md", size: 3019 },
    ],
  },
  {
    category: "电磁学",
    title: "4 电磁波",
    description: "电磁波的传播、边界条件与相关物理图像。",
    files: [
      { path: "content/电磁学/4 电磁波.pdf", size: 2536175 },
      { path: "content/电磁学/4 电磁波.md", size: 19740 },
    ],
  },
  {
    category: "电磁学",
    title: "5 电磁介质",
    description: "介质中的电磁响应及宏观场方程整理。",
    files: [
      { path: "content/电磁学/5 电磁介质.pdf", size: 2066752 },
      { path: "content/电磁学/5 电磁介质.md", size: 10458 },
    ],
  },
  {
    category: "电磁学",
    title: "矢量分析初步",
    description: "电磁学所需矢量分析工具与常用恒等式。",
    files: [
      { path: "content/电磁学/矢量分析初步.pdf", size: 2815597 },
      { path: "content/电磁学/矢量分析初步.md", size: 22034 },
    ],
  },
  {
    category: "量子计算",
    title: "A Minimal Introduction to Quantum Computing 中文详细讲义",
    description: "面向初学者的量子计算中文讲义与概念梳理。",
    files: [
      {
        path: "content/量子计算/A Minimal Introduction to Quantum Computing_A Minimal Introduction to Quantum Computing-中文详细讲义.md",
        size: 71202,
      },
    ],
  },
];

const notesGrid = document.querySelector("#notes-grid");
const resultSummary = document.querySelector("#result-summary");
const searchInput = document.querySelector("#note-search");
const tabButtons = [...document.querySelectorAll("[data-category]")];
const shortcutButtons = [...document.querySelectorAll("[data-filter-shortcut]")];
const layoutToggle = document.querySelector("#layout-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const backToTop = document.querySelector("#back-to-top");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

let activeCategory = "全部";

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function extensionFor(path) {
  return path.toLowerCase().endsWith(".pdf") ? "PDF" : "Markdown";
}

function downloadUrl(path) {
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return `https://github.com/silenthj0/notes/raw/refs/heads/main/${encodedPath}`;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
}

function createFileLink(file) {
  const format = extensionFor(file.path);
  const link = document.createElement("a");
  link.className = `file-link ${format === "PDF" ? "pdf" : "markdown"}`;
  link.href = downloadUrl(file.path);
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("download", "");
  link.setAttribute("aria-label", `下载 ${format} 文件，${formatBytes(file.size)}`);
  link.innerHTML = `
    <i data-lucide="${format === "PDF" ? "file-down" : "file-text"}" aria-hidden="true"></i>
    <span>${format} · ${formatBytes(file.size)}</span>
  `;
  return link;
}

function createNoteCard(note) {
  const article = document.createElement("article");
  article.className = "note-card";

  const top = document.createElement("div");
  top.className = "note-card-top";
  top.innerHTML = `
    <span class="note-category">${note.category}</span>
    <span class="note-format-count">${note.files.length} 种格式</span>
  `;

  const title = document.createElement("h3");
  title.textContent = note.title;

  const description = document.createElement("p");
  description.textContent = note.description;

  const actions = document.createElement("div");
  actions.className = "file-actions";
  note.files.forEach((file) => actions.append(createFileLink(file)));

  article.append(top, title, description, actions);
  return article;
}

function currentNotes() {
  const query = searchInput.value.trim().toLocaleLowerCase("zh-CN");
  return notes.filter((note) => {
    const matchesCategory = activeCategory === "全部" || note.category === activeCategory;
    const haystack = `${note.category} ${note.title} ${note.description}`.toLocaleLowerCase("zh-CN");
    return matchesCategory && (!query || haystack.includes(query));
  });
}

function renderNotes() {
  const filtered = currentNotes();
  notesGrid.replaceChildren();

  if (filtered.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <i data-lucide="search-x" aria-hidden="true"></i>
      <h3>没有匹配的笔记</h3>
      <p>换一个关键词或课程分类试试。</p>
    `;
    notesGrid.append(emptyState);
  } else {
    const fragment = document.createDocumentFragment();
    filtered.forEach((note) => fragment.append(createNoteCard(note)));
    notesGrid.append(fragment);
  }

  const scope = activeCategory === "全部" ? "全部课程" : activeCategory;
  resultSummary.textContent = `${scope} · 显示 ${filtered.length} / ${notes.length} 篇笔记`;
  refreshIcons();
}

function selectCategory(category, shouldScroll = false) {
  activeCategory = category;
  tabButtons.forEach((button) => {
    const selected = button.dataset.category === category;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  renderNotes();
  if (shouldScroll) document.querySelector(".catalog-toolbar").scrollIntoView({ block: "start" });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => selectCategory(button.dataset.category));
});

shortcutButtons.forEach((button) => {
  button.addEventListener("click", () => selectCategory(button.dataset.filterShortcut, true));
});

searchInput.addEventListener("input", renderNotes);

layoutToggle.addEventListener("click", () => {
  const compact = document.body.classList.toggle("compact-view");
  layoutToggle.setAttribute("aria-pressed", String(compact));
  layoutToggle.setAttribute("aria-label", compact ? "切换卡片视图" : "切换紧凑视图");
  layoutToggle.title = compact ? "卡片视图" : "紧凑视图";
  layoutToggle.innerHTML = `<i data-lucide="${compact ? "grid-2x2" : "rows-3"}" aria-hidden="true"></i>`;
  refreshIcons();
});

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? "切换浅色模式" : "切换深色模式");
  themeToggle.title = dark ? "浅色模式" : "深色模式";
  themeToggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}" aria-hidden="true"></i>`;
  localStorage.setItem("theme", dark ? "dark" : "light");
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

document.querySelector("#note-count").textContent = notes.length;
document.querySelector("#category-count").textContent = new Set(notes.map((note) => note.category)).size;
document.querySelector("#file-count").textContent = notes.reduce((total, note) => total + note.files.length, 0);
document.querySelector("#current-year").textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") setTheme(true);
renderNotes();
refreshIcons();
