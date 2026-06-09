const legacyProjects = [
  { title: "美妆质感与花卉肌理生成", category: "AI Creation", type: "ai", image: "work-01-obj427.png" },
  { title: "人物妆面视觉探索 A", category: "AI Creation", type: "ai", image: "work-02-obj425.png" },
  { title: "人物妆面视觉探索 B", category: "AI Creation", type: "ai", image: "work-03-obj429.png" },
  { title: "高级感肌理视觉", category: "AI Creation", type: "ai", image: "work-04-obj435.png" },
  { title: "楼兰酒庄系列包装", category: "Packaging", type: "package", image: "work-05-obj481.png" },
  { title: "品牌主视觉版式", category: "Brand Identity", type: "brand", image: "work-06-obj399.png" },
  { title: "包装场景渲染", category: "Packaging", type: "package", image: "work-07-obj403.png" },
  { title: "酒类包装延展", category: "Packaging", type: "package", image: "work-08-obj264.png" },
  { title: "电商横幅视觉", category: "Commerce Visual", type: "commerce", image: "work-09-obj115.png" },
  { title: "产品卖点海报", category: "Commerce Visual", type: "commerce", image: "work-10-obj582.png" },
  { title: "品牌活动 KV", category: "Brand Identity", type: "brand", image: "work-11-obj142.png" },
  { title: "商业视觉合成", category: "Commerce Visual", type: "commerce", image: "work-12-obj290.png" },
  { title: "DJI OSMO ACTION 4 视觉", category: "Commerce Visual", type: "commerce", image: "work-13-obj91.png" },
  { title: "数码产品营销页", category: "Commerce Visual", type: "commerce", image: "work-14-obj112.png" },
  { title: "消费电子场景海报", category: "Commerce Visual", type: "commerce", image: "work-15-obj94.png" },
  { title: "运动相机视觉延展", category: "Commerce Visual", type: "commerce", image: "work-16-obj85.png" },
  { title: "产品包装组合", category: "Packaging", type: "package", image: "work-17-obj82.png" },
  { title: "视觉海报构图", category: "Brand Identity", type: "brand", image: "work-18-obj79.png" },
  { title: "简洁品牌图形", category: "Brand Identity", type: "brand", image: "work-19-obj186.png" },
  { title: "包装视觉样机 A", category: "Packaging", type: "package", image: "work-20-obj387.png" },
  { title: "包装视觉样机 B", category: "Packaging", type: "package", image: "work-21-obj467.png" },
  { title: "包装视觉样机 C", category: "Packaging", type: "package", image: "work-22-obj464.png" },
  { title: "品牌图形延展", category: "Brand Identity", type: "brand", image: "work-23-obj461.png" },
  { title: "商业版式细节", category: "Brand Identity", type: "brand", image: "work-24-obj458.png" },
  { title: "产品视觉细节 A", category: "Commerce Visual", type: "commerce", image: "work-25-obj485.png" },
  { title: "产品视觉细节 B", category: "Commerce Visual", type: "commerce", image: "work-26-obj478.png" },
  { title: "包装细节展示", category: "Packaging", type: "package", image: "work-27-obj475.png" },
  { title: "品牌包装场景", category: "Packaging", type: "package", image: "work-28-obj472.png" },
  { title: "小糊涂圣礼盒系统", category: "Packaging", type: "package", image: "work-29-obj515.png" },
  { title: "礼盒包装延展", category: "Packaging", type: "package", image: "work-30-obj512.png" },
  { title: "包装结构局部", category: "Packaging", type: "package", image: "work-31-obj509.png" },
  { title: "品牌包装整合展示", category: "Packaging", type: "package", image: "work-32-obj506.png" }
];

const sectionNames = {
  packaging: { title: "包装设计", english: "Packaging Design" },
  brand: { title: "品牌设计", english: "Brand Design" },
  commerce: { title: "电商平面", english: "E-commerce Graphic" },
  personal: { title: "个人作品", english: "Personal Works" },
  ai: { title: "AI 创作", english: "AI Creation" }
};

function buildSelectedProjects({ count, prefix, title, type, category, assetBase }) {
  return Array.from({ length: count }, (_, index) => ({
    title: `${title} ${String(index + 1).padStart(2, "0")}`,
    category,
    type,
    image: `${prefix}-${String(index + 1).padStart(2, "0")}.png`,
    assetBase,
    page: index + 1
  }));
}

const packagingSelectedProjects = buildSelectedProjects({
  count: 32,
  prefix: "packaging",
  title: "包装设计",
  type: "packaging",
  category: "Packaging Design",
  assetBase: "./assets/packaging-selected/"
});

const brandSelectedProjects = [
  { title: "Floradibbeo 品牌主视觉", image: "brand-01.png" },
  { title: "品牌视觉 · 多元肌肤", image: "brand-02.png" },
  { title: "Floradibbeo 品牌标识", image: "brand-03.png" },
  { title: "品牌视觉 · 自然护理", image: "brand-04.png" },
  { title: "品牌色彩系统", image: "brand-05.png" },
  { title: "品牌字体系统", image: "brand-06.png" },
  { title: "产品与空间视觉", image: "brand-07.png" },
  { title: "品牌应用视觉", image: "brand-08.png" },
  { title: "樱花身体乳视觉", image: "brand-09.png" },
  { title: "芝麻空间品牌视觉", image: "brand-10.png" }
].map((project, index) => ({
  ...project,
  category: "Brand Design",
  type: "brand",
  assetBase: "./assets/brand-selected/",
  page: index + 1
}));

const commerceSelectedProjects = buildSelectedProjects({
  count: 6,
  prefix: "commerce",
  title: "电商平面",
  type: "commerce",
  category: "E-commerce Graphic",
  assetBase: "./assets/commerce-selected/"
});

const personalSelectedProjects = buildSelectedProjects({
  count: 10,
  prefix: "personal",
  title: "个人作品",
  type: "personal",
  category: "Personal Works",
  assetBase: "./assets/personal-selected/"
});

const aiSelectedProjects = buildSelectedProjects({
  count: 7,
  prefix: "ai",
  title: "AI 创作",
  type: "ai",
  category: "AI Creation",
  assetBase: "./assets/ai-selected/"
});

const projects = [
  ...packagingSelectedProjects,
  ...brandSelectedProjects,
  ...commerceSelectedProjects,
  ...personalSelectedProjects,
  ...aiSelectedProjects
];

const sections = [
  {
    id: "packaging",
    title: "包装设计",
    english: "Packaging Design",
    description: "严格依照 PDF 第 3–34 页顺序展示，保留包装项目原有的叙事与视觉推进。",
    projects: projects.map((project, index) => project.type === "packaging" ? index : -1).filter(index => index >= 0)
  },
  {
    id: "brand",
    title: "品牌设计",
    english: "Brand Design",
    description: "严格依照 PDF 第 36–53 页顺序展示品牌主视觉、图形系统与应用延展。",
    projects: projects.map((project, index) => project.type === "brand" ? index : -1).filter(index => index >= 0)
  },
  {
    id: "commerce",
    title: "电商平面",
    english: "E-commerce Graphic",
    description: "严格依照 PDF 第 46–49 页顺序展示电商海报、产品视觉与场景合成。",
    projects: projects.map((project, index) => project.type === "commerce" ? index : -1).filter(index => index >= 0)
  },
  {
    id: "personal",
    title: "个人作品",
    english: "Personal Works",
    description: "严格依照 PDF 第 51–64 页顺序展示个人视觉练习、版式与表达实验。",
    projects: projects.map((project, index) => project.type === "personal" ? index : -1).filter(index => index >= 0)
  },
  {
    id: "ai",
    title: "AI 创作",
    english: "AI Creation",
    description: "严格依照 PDF 第 66–83 页顺序展示生成式视觉、材质与风格探索。",
    projects: projects.map((project, index) => project.type === "ai" ? index : -1).filter(index => index >= 0)
  }
];

const sectionRoot = document.querySelector("#portfolioSections");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxCategory = document.querySelector("#lightboxCategory");
const lightboxOpen = document.querySelector("#lightboxOpen");
const cursor = document.querySelector(".cursor");
const progress = document.querySelector(".progress");

function renderSections() {
  sectionRoot.innerHTML = sections
    .map((section, sectionIndex) => `
      <section class="portfolio-section" id="${section.id}">
        <div class="section-head reveal">
          <span class="section-index">0${sectionIndex + 1} / 0${sections.length}</span>
          <div>
            <p class="eyebrow">${section.english}</p>
            <h2>${section.title}</h2>
          </div>
        </div>
        <div class="gallery-shell">
          <button class="gallery-arrow gallery-prev" type="button" aria-label="查看上一组作品">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 5.5 8 12l7.5 6.5Z" />
            </svg>
          </button>
          <div class="section-gallery">
            ${section.projects.map(projectIndex => {
              const project = projects[projectIndex];
              return `
                <article class="project-card reveal" data-project="${projectIndex}">
                  <img src="${project.assetBase}${project.image}" alt="${project.title}" loading="lazy">
                  <div>
                    <span>${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>点击查看大图</p>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
          <button class="gallery-arrow gallery-next" type="button" aria-label="查看下一组作品">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.5 5.5 16 12l-7.5 6.5Z" />
            </svg>
          </button>
        </div>
      </section>
    `)
    .join("");
  setupGalleryControls();
  observeReveals();
}

function setupGalleryControls() {
  document.querySelectorAll(".gallery-shell").forEach(shell => {
    const gallery = shell.querySelector(".section-gallery");
    const prev = shell.querySelector(".gallery-prev");
    const next = shell.querySelector(".gallery-next");

    const updateButtons = () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      prev.disabled = gallery.scrollLeft <= 4;
      next.disabled = gallery.scrollLeft >= maxScroll - 4;
    };

    const move = direction => {
      const card = gallery.querySelector(".project-card");
      const distance = card ? card.getBoundingClientRect().width + 18 : gallery.clientWidth * 0.8;
      gallery.scrollBy({ left: direction * distance, behavior: "smooth" });
    };

    prev.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    gallery.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
  });
}

function openProject(index) {
  const project = projects[index];
  const frame = document.querySelector("#lightboxPdf");
  if (frame) frame.hidden = true;
  lightboxImage.hidden = false;
  const src = `${project.assetBase}${project.image}`;
  lightboxImage.src = src;
  lightboxImage.alt = project.title;
  lightboxTitle.textContent = project.title;
  lightboxCategory.textContent = project.category;
  lightboxOpen.href = src;
  document.body.classList.add("modal-open");
  lightbox.showModal();
}

function closeProject() {
  lightbox.close();
  document.body.classList.remove("modal-open");
}

let revealObserver;
function observeReveals() {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => revealObserver.observe(el));
}

document.addEventListener("click", event => {
  const projectCard = event.target.closest("[data-project]");
  if (projectCard) openProject(Number(projectCard.dataset.project));
});

document.querySelector(".close").addEventListener("click", closeProject);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeProject();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && lightbox.open) closeProject();
});

document.addEventListener("mousemove", event => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.addEventListener("mouseover", event => {
  if (event.target.closest("a, button, .project-card")) cursor.classList.add("is-active");
});

document.addEventListener("mouseout", event => {
  if (event.target.closest("a, button, .project-card")) cursor.classList.remove("is-active");
});

document.querySelectorAll(".magnetic").forEach(item => {
  item.addEventListener("mousemove", event => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "";
  });
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  progress.style.width = `${ratio * 100}%`;
});

renderSections();
observeReveals();
