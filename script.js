const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.tab;

    tabButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});

const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-38% 0px -54% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

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
    .map(
      (row) => `
        <tr class="${pillarClass[row[3]] || ""}">
          ${row.map((cell) => `<td>${cell}</td>`).join("")}
        </tr>
      `
    )
    .join("");
}

document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});
