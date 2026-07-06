const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.tab;
    tabButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    tabPanels.forEach((panel) => {
      const active = panel.id === targetId;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  });
});

const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-38% 0px -54% 0px" }
).observe(sections[0]);

sections.slice(1).forEach((section) => {
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-38% 0px -54% 0px" }
  ).observe(section);
});

const calendarRows = document.querySelector("#calendarRows");
const calendarData = [
  ["Day 1", "6/01", "TikTok", "Real-life Test", "July commute heat test", "脚本完成"],
  ["Day 2", "6/02", "Instagram", "Feature Deep Dive", "3 speeds in one clean carousel", "设计中"],
  ["Day 3", "6/03", "TikTok", "Real-life Test", "Subway platform before/after", "待拍摄"],
  ["Day 4", "6/04", "TikTok", "Before & After", "Sweaty walk to fresh arrival", "脚本完成"],
  ["Day 5", "6/05", "Instagram", "Real-life Test", "Office desk summer survival", "素材已选"],
  ["Day 6", "6/06", "Instagram", "Feature Deep Dive", "USB-C and 16H battery card", "设计中"],
  ["Day 7", "6/07", "TikTok", "Real-life Test", "Outdoor lunch break test", "待拍摄"],
  ["Day 8", "6/08", "TikTok", "Real-life Test", "40-min commute challenge", "脚本完成"],
  ["Day 9", "6/09", "Instagram", "Feature Deep Dive", "Bladeless close-up carousel", "设计中"],
  ["Day 10", "6/10", "TikTok", "Before & After", "No fan vs BlazeCool", "待拍摄"],
  ["Day 11", "6/11", "Instagram", "Feature Deep Dive", "Style fit: office / gym / travel", "素材已选"],
  ["Day 12", "6/12", "TikTok", "Real-life Test", "Parking lot heat test", "待拍摄"],
  ["Day 13", "6/13", "Instagram", "Feature Deep Dive", "260g weight proof", "设计中"],
  ["Day 14", "6/14", "TikTok", "Real-life Test", "Week 2 recap montage", "剪辑中"],
  ["Day 15", "6/15", "TikTok", "Problem Solved", "Does it pull your hair?", "脚本完成"],
  ["Day 16", "6/16", "Instagram", "UGC / Review", "Buyer review carousel", "待授权"],
  ["Day 17", "6/17", "TikTok", "Problem Solved", "Noise level test in office", "待拍摄"],
  ["Day 18", "6/18", "Instagram", "Problem Solved", "FAQ: battery, charging, weight", "设计中"],
  ["Day 19", "6/19", "TikTok", "UGC / Review", "First unboxing reaction", "待拍摄"],
  ["Day 20", "6/20", "Instagram", "UGC / Review", "Customer summer story", "素材已选"],
  ["Day 21", "6/21", "TikTok", "Problem Solved", "Neck fan vs handheld fan", "脚本完成"],
  ["Day 22", "6/22", "Instagram", "Problem Solved", "Can you wear it with long hair?", "设计中"],
  ["Day 23", "6/23", "TikTok", "Real-life Test", "Hot walk after gym", "待拍摄"],
  ["Day 24", "6/24", "TikTok", "UGC / Review", "Review stitch: worth $30?", "待授权"],
  ["Day 25", "6/25", "Instagram", "Problem Solved", "Charging time carousel", "设计中"],
  ["Day 26", "6/26", "TikTok", "UGC / Review", "Creator review voiceover", "剪辑中"],
  ["Day 27", "6/27", "TikTok", "Problem Solved", "FAQ rapid fire", "脚本完成"],
  ["Day 28", "6/28", "Instagram", "UGC / Review", "Top 5 review quotes", "素材已选"],
  ["Day 29", "6/29", "TikTok", "Real-life Test", "Weekend outdoor market test", "待拍摄"],
  ["Day 30", "6/30", "Instagram", "Problem Solved", "Launch week objections answered", "设计中"],
];

const pillarClass = {
  "Real-life Test": "pillar-real-life",
  "Feature Deep Dive": "pillar-feature",
  "Before & After": "pillar-real-life",
  "Problem Solved": "pillar-problem",
  "UGC / Review": "pillar-ugc",
};

if (calendarRows) {
  calendarRows.innerHTML = calendarData
    .map((row) => `<tr class="${pillarClass[row[3]] || ""}">${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("");
}

document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const contourStyle = document.createElement("style");
contourStyle.textContent = `
  .hero { position: relative; overflow: hidden; }
  .contour-field {
    position: absolute;
    inset: 84px -3% 34px;
    z-index: 0;
    width: 106%;
    height: calc(100% - 118px);
    opacity: .72;
    pointer-events: none;
    mix-blend-mode: multiply;
  }
  .hero-copy, .hero-visual { position: relative; z-index: 2; }
  @media (max-width: 1180px) {
    .contour-field { inset: 120px -10% 20px; width: 120%; height: calc(100% - 140px); }
  }
  @media (max-width: 768px) {
    .contour-field { inset: 142px -20% 10px; width: 140%; height: calc(100% - 152px); opacity: .58; }
  }
`;
document.head.append(contourStyle);

let contourCanvas = document.querySelector(".contour-field");
const heroSection = document.querySelector(".hero");

if (!contourCanvas && heroSection) {
  contourCanvas = document.createElement("canvas");
  contourCanvas.className = "contour-field";
  contourCanvas.setAttribute("aria-hidden", "true");
  heroSection.prepend(contourCanvas);
}

if (contourCanvas) {
  const ctx = contourCanvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;

  const resizeContour = () => {
    const rect = contourCanvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    contourCanvas.width = Math.floor(width * dpr);
    contourCanvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const fieldValue = (x, y, time) => {
    const nx = (x - width * 0.56) / Math.max(width, 1);
    const ny = (y - height * 0.5) / Math.max(height, 1);
    const ridge =
      Math.sin((nx * 9.6 + time * 0.024) * Math.PI) * 0.32 +
      Math.cos((ny * 8.4 - time * 0.018) * Math.PI) * 0.26 +
      Math.sin((nx * 4.7 + ny * 5.1 + time * 0.016) * Math.PI) * 0.18 +
      Math.cos((nx * 12.2 - ny * 3.8 - time * 0.011) * Math.PI) * 0.08;
    const basinA = Math.hypot(nx + 0.22 + Math.sin(time * 0.012) * 0.035, ny - 0.06);
    const basinB = Math.hypot(nx - 0.23, ny + 0.17 + Math.cos(time * 0.015) * 0.03);
    return ridge - basinA * 1.34 + Math.cos(basinB * 15 - time * 0.04) * 0.22;
  };

  const interpolate = (a, b, va, vb, level) => {
    const t = (level - va) / (vb - va || 0.0001);
    return a + (b - a) * Math.max(0, Math.min(1, t));
  };

  const drawSegment = (a, b, c, d, level, x, y, step) => {
    const points = [];
    if ((a < level) !== (b < level)) points.push([interpolate(x, x + step, a, b, level), y]);
    if ((b < level) !== (c < level)) points.push([x + step, interpolate(y, y + step, b, c, level)]);
    if ((c < level) !== (d < level)) points.push([interpolate(x + step, x, c, d, level), y + step]);
    if ((d < level) !== (a < level)) points.push([x, interpolate(y + step, y, d, a, level)]);
    for (let i = 0; i + 1 < points.length; i += 2) {
      ctx.moveTo(points[i][0], points[i][1]);
      ctx.lineTo(points[i + 1][0], points[i + 1][1]);
    }
  };

  const drawContour = (timestamp = 0) => {
    if (!width || !height) resizeContour();
    const time = timestamp / 1000;
    const step = width > 1100 ? 20 : 24;
    const levels = [-1.28, -1.04, -0.8, -0.56, -0.32, -0.08, 0.16, 0.4, 0.64];

    ctx.clearRect(0, 0, width, height);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    levels.forEach((level, index) => {
      ctx.beginPath();
      ctx.strokeStyle = index % 3 === 0 ? "rgba(23, 107, 255, .24)" : "rgba(23, 107, 255, .135)";
      ctx.lineWidth = index % 3 === 0 ? 0.9 : 0.55;
      for (let y = -step; y < height + step; y += step) {
        for (let x = -step; x < width + step; x += step) {
          const a = fieldValue(x, y, time);
          const b = fieldValue(x + step, y, time);
          const c = fieldValue(x + step, y + step, time);
          const d = fieldValue(x, y + step, time);
          drawSegment(a, b, c, d, level, x, y, step);
        }
      }
      ctx.stroke();
    });

    ctx.globalAlpha = 0.34;
    ctx.strokeStyle = "rgba(16, 19, 24, .08)";
    ctx.lineWidth = 0.5;
    for (let x = 40; x < width; x += 160) {
      ctx.beginPath();
      ctx.moveTo(x + Math.sin(time * 0.12 + x) * 4, 0);
      ctx.lineTo(x + Math.cos(time * 0.1 + x) * 4, height);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    if (!reducedMotion) requestAnimationFrame(drawContour);
  };

  window.addEventListener("resize", () => {
    resizeContour();
    if (reducedMotion) drawContour(0);
  });

  resizeContour();
  drawContour(0);
}
