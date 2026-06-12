const skills = [
  "Marketing Digital",
  "Gestión Comercial",
  "Retail",
  "Atención al cliente",
  "Ventas y marketing",
  "Facebook Ads",
  "Power BI",
  "Excel",
  "Business Intelligence",
  "Diseño gráfico digital",
  "Contenido orgánico",
  "Catálogo digital",
  "Inteligencia artificial",
];

const projects = [
  {
    id: "marketing-performance",
    category: "BI",
    title: "Dashboard de Marketing Digital",
    short: "Seguimiento ejecutivo de campañas, contenido orgánico, alcance, engagement y conversión.",
    problem:
      "El equipo necesitaba medir el rendimiento de contenido y campañas digitales sin depender de reportes manuales dispersos.",
    solution:
      "Se diseñó un tablero de Power BI con métricas de alcance, interacción, clics, leads y conversión por canal y tipo de contenido.",
    impact:
      "Mejora simulada de 32% en visibilidad digital y decisiones más rápidas para calendarizar publicaciones de alto rendimiento.",
    tools: ["Power BI", "Excel", "Facebook Ads", "Marketing Digital"],
    kpis: [
      ["Alcance total", "418K", "+18.4%"],
      ["Engagement", "6.8%", "+1.2 pp"],
      ["Leads", "2,460", "+22.1%"],
      ["Conversión", "4.9%", "+0.8 pp"],
    ],
    charts: {
      line: {
        title: "Alcance mensual",
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        datasets: [{ label: "Alcance", data: [24, 28, 31, 33, 36, 39, 42, 45, 47, 51, 58, 64], color: "#145da0" }],
        suffix: "K",
      },
      bar: {
        title: "Interacciones por canal",
        labels: ["Instagram", "Facebook", "TikTok", "WhatsApp", "Email"],
        values: [48, 42, 36, 28, 19],
        color: "#1d8ad8",
        suffix: "K",
      },
      donut: {
        title: "Mix de contenido",
        labels: ["Reels", "Carruseles", "Catálogo", "Historias"],
        values: [36, 28, 22, 14],
        colors: ["#145da0", "#1d8ad8", "#32c7dc", "#8fb8d8"],
        suffix: "%",
      },
    },
  },
  {
    id: "clientes-omnicanal",
    category: "Clientes",
    title: "Segmentación de Atención Omnicanal",
    short: "Clasificación de consultas por canal, intención y prioridad para mejorar la atención al cliente.",
    problem:
      "Las consultas de clientes llegaban por tienda, WhatsApp Business y redes sociales sin una lectura clara de prioridades.",
    solution:
      "Se simuló una matriz de segmentación para clasificar clientes por urgencia, intención de compra y probabilidad de conversión.",
    impact:
      "Priorización simulada de 186 consultas críticas y mejora potencial de 21% en tiempos de respuesta comercial.",
    tools: ["Excel", "Power BI", "WhatsApp Business", "IA básica"],
    kpis: [
      ["Consultas", "1,442", "+14.6%"],
      ["Respuesta < 2h", "82.5%", "+9.0 pp"],
      ["Conversión", "18.7%", "+4.4 pp"],
      ["Satisfacción", "91.0%", "+3.2 pp"],
    ],
    risk: {
      title: "Consultas por prioridad",
      labels: ["Alta", "Media", "Baja"],
      values: [186, 342, 914],
      colors: ["#dc4b4b", "#f4a62a", "#29a36a"],
    },
    table: {
      title: "Consultas ficticias priorizadas",
      headers: ["Cliente", "Canal", "Motivo", "Probabilidad", "Riesgo"],
      rows: [
        ["Cliente A", "WhatsApp", "Precio y stock", "91%", "Alto"],
        ["Cliente B", "Instagram", "Consulta de catálogo", "78%", "Alto"],
        ["Cliente C", "Tienda", "Cambio de producto", "53%", "Medio"],
        ["Cliente D", "Facebook", "Promoción", "38%", "Medio"],
        ["Cliente E", "Email", "Información general", "14%", "Bajo"],
      ],
    },
  },
  {
    id: "retail-operaciones",
    category: "Retail",
    title: "Control Comercial de Retail",
    short: "Modelo simple para consolidar ventas, inventario, cuadre de caja y atención en tienda.",
    problem:
      "Los procesos de punto de venta necesitaban orden operativo para revisar ventas, inventario, recepción de mercadería y caja.",
    solution:
      "Se diseñó un flujo analítico STG, ODS, DWH, Data Mart y Dashboard para controlar indicadores diarios de tienda.",
    impact:
      "Mejora simulada de 28% en trazabilidad comercial y mayor orden para seguimiento de inventario y ventas.",
    tools: ["Excel", "Power BI", "Retail", "Gestión Comercial"],
    kpis: [
      ["Ventas del mes", "S/ 286K", "+12.4%"],
      ["SKU monitoreados", "3.8K", "inventario semanal"],
      ["Cuadres correctos", "98.1%", "+2.7 pp"],
      ["Clientes atendidos", "9,420", "+8.8%"],
    ],
    model: {
      dimensions: [
        ["DimCliente", "cliente_id, canal, frecuencia, preferencia"],
        ["DimProducto", "producto_id, categoría, marca, stock"],
        ["DimTienda", "tienda_id, zona, formato, responsable"],
        ["DimFecha", "fecha_id, semana, mes, trimestre"],
        ["FactRetail", "fecha_id, producto_id, tienda_id, unidades, importe, caja"],
      ],
    },
  },
  {
    id: "facebook-ads-roi",
    category: "Marketing",
    title: "Reporte de Eficiencia en Facebook Ads",
    short: "Control de inversión, alcance, conversiones, ROI y CPL por campaña digital.",
    problem:
      "La marca necesitaba comparar campañas pagadas y orgánicas para decidir dónde invertir presupuesto.",
    solution:
      "Se construyó un reporte de performance con inversión, leads, conversiones, ROI y costo por lead por campaña.",
    impact:
      "Redistribución simulada de 22% del presupuesto hacia contenidos y audiencias con mayor intención comercial.",
    tools: ["Facebook Ads", "Power BI", "Excel", "Marketing Digital"],
    kpis: [
      ["Inversión", "S/ 18.4K", "+9.6%"],
      ["Conversiones", "1,840", "+16.2%"],
      ["ROI promedio", "3.4x", "+0.7x"],
      ["CPL", "S/ 10.00", "-11.8%"],
    ],
    channels: {
      title: "ROI por tipo de campaña",
      labels: ["Tráfico", "Mensajes", "Catálogo", "Remarketing"],
      values: [2.8, 3.6, 4.2, 5.1],
      color: "#145da0",
      suffix: "x",
    },
    table: {
      title: "Campañas ficticias",
      headers: ["Campaña", "Objetivo", "Inversión", "Conversiones", "ROI"],
      rows: [
        ["Colección Verano", "Catálogo", "S/ 4,500", "460", "4.3x"],
        ["Lookalike Moda", "Mensajes", "S/ 3,200", "320", "2.7x"],
        ["Promoción Finde", "Tráfico", "S/ 2,800", "280", "3.1x"],
        ["Clientes Recurrentes", "Remarketing", "S/ 1,700", "540", "5.8x"],
        ["Lanzamiento Texturas", "Catálogo", "S/ 6,200", "240", "4.0x"],
      ],
    },
  },
  {
    id: "contenido-redes",
    category: "Contenido",
    title: "Análisis de Contenido y Sentimiento en Redes",
    short: "Lectura de menciones, comentarios, temas frecuentes y percepción de marca.",
    problem:
      "El contenido orgánico generaba comentarios variados y era necesario identificar temas, percepción y oportunidades de mejora.",
    solution:
      "Se simuló un flujo de clasificación de sentimiento y extracción de palabras clave para orientar el calendario editorial.",
    impact:
      "Ajuste simulado de mensajes comerciales, mejora de interacción y priorización de respuestas en canales digitales.",
    tools: ["IA básica", "Excel", "Power BI", "Contenido Digital"],
    kpis: [
      ["Positivas", "3,420", "+12.5%"],
      ["Neutrales", "1,810", "+4.1%"],
      ["Negativas", "430", "-6.7%"],
      ["Satisfacción", "86.2%", "+5.4 pp"],
    ],
    sentiment: {
      title: "Tendencia diaria de menciones",
      labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
      datasets: [
        { label: "Positivas", data: [420, 510, 460, 640, 730, 680, 780], color: "#29a36a" },
        { label: "Neutrales", data: [240, 310, 270, 330, 400, 360, 420], color: "#f4a62a" },
        { label: "Negativas", data: [90, 80, 120, 110, 95, 70, 65], color: "#dc4b4b" },
      ],
      suffix: "",
    },
    words: [
      ["catálogo", 30],
      ["telas", 24],
      ["precio", 21],
      ["colores", 29],
      ["entrega", 22],
      ["promoción", 28],
      ["demora", 18],
      ["atención", 26],
      ["calidad", 25],
      ["diseño", 17],
      ["confianza", 23],
      ["stock", 16],
    ],
    table: {
      title: "Publicaciones clasificadas",
      headers: ["Canal", "Publicación", "Sentimiento", "Prioridad"],
      rows: [
        ["Instagram", "El catálogo ayuda a elegir mejor los colores.", "Positivo", "Media"],
        ["Facebook", "No encontré stock del producto publicado.", "Negativo", "Alta"],
        ["TikTok", "Las ideas de combinación se ven muy claras.", "Positivo", "Baja"],
        ["WhatsApp", "Quiero conocer precios por metro.", "Neutral", "Media"],
        ["Instagram", "Buena atención, pero la entrega podría ser más rápida.", "Neutral", "Media"],
      ],
    },
  },
];

const state = {
  activeProjectId: projects[0].id,
  filter: "all",
  resizeTimer: null,
};

const tooltip = document.querySelector("#chartTooltip");

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjectSelector();
  renderProjectCards();
  renderActiveProject();
  bindNavigation();
  bindFilters();
  setupReveal();
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", updateHeaderElevation, { passive: true });
  updateHeaderElevation();
});

function renderSkills() {
  document.querySelector(".skills-grid").innerHTML = skills
    .map((skill) => `<span class="skill-chip">${skill}</span>`)
    .join("");
}

function renderProjectSelector() {
  const selector = document.querySelector("#projectSelector");
  selector.innerHTML = projects
    .map((project) => `<option value="${project.id}">${project.title}</option>`)
    .join("");
  selector.value = state.activeProjectId;
  selector.addEventListener("change", (event) => setActiveProject(event.target.value));
}

function renderProjectCards() {
  const visibleProjects = projects.filter(
    (project) => state.filter === "all" || project.category === state.filter,
  );
  document.querySelector("#projectCards").innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card ${project.id === state.activeProjectId ? "active" : ""}" data-project="${project.id}">
          <div>
            <p class="eyebrow">${project.category}</p>
            <h3>${project.title}</h3>
            <p>${project.short}</p>
          </div>
          <div class="project-card-footer">
            <span>${project.tools.slice(0, 2).join(" + ")}</span>
            <span>Ver dashboard</span>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => setActiveProject(card.dataset.project));
  });
}

function bindFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      updateFilterButtons();

      const activeIsVisible = projects.some(
        (project) =>
          project.id === state.activeProjectId &&
          (state.filter === "all" || project.category === state.filter),
      );
      if (!activeIsVisible) {
        const firstVisible = projects.find(
          (project) => state.filter === "all" || project.category === state.filter,
        );
        state.activeProjectId = firstVisible.id;
      }

      renderProjectCards();
      renderActiveProject();
    });
  });
}

function setActiveProject(projectId) {
  state.activeProjectId = projectId;
  const project = projects.find((item) => item.id === projectId);
  if (state.filter !== "all" && project.category !== state.filter) {
    state.filter = "all";
    updateFilterButtons();
  }
  document.querySelector("#projectSelector").value = projectId;
  renderProjectCards();
  renderActiveProject();
  document.querySelector(".dashboard-shell").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateFilterButtons() {
  document.querySelectorAll(".filter-button").forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === state.filter);
  });
}

function renderActiveProject() {
  const project = projects.find((item) => item.id === state.activeProjectId);
  document.querySelector("#activeProjectTitle").textContent = project.title;
  document.querySelector("#activeProjectTools").innerHTML = project.tools
    .map((tool) => `<span class="tool-tag">${tool}</span>`)
    .join("");

  document.querySelector("#activeProjectDetail").innerHTML = `
    <div class="project-summary">
      <article class="summary-card">
        <h4>Problema de negocio</h4>
        <p>${project.problem}</p>
      </article>
      <article class="summary-card">
        <h4>Solución implementada</h4>
        <p>${project.solution}</p>
      </article>
      <article class="summary-card">
        <h4>Aprendizaje o impacto</h4>
        <p>${project.impact}</p>
      </article>
    </div>
    <div class="kpi-grid">
      ${project.kpis.map(([label, value, delta]) => kpiTemplate(label, value, delta)).join("")}
    </div>
    ${dashboardTemplate(project)}
  `;

  requestAnimationFrame(() => drawProjectCharts(project));
}

function kpiTemplate(label, value, delta) {
  return `
    <article class="kpi-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${delta}</small>
    </article>
  `;
}

function dashboardTemplate(project) {
  if (project.id === "marketing-performance") {
    return `
      <div class="dashboard-grid three">
        ${chartCard("salesLine", project.charts.line.title)}
        <div>
          ${chartCard("salesDonut", project.charts.donut.title)}
        </div>
        ${chartCard("salesBar", project.charts.bar.title)}
      </div>
    `;
  }

  if (project.id === "clientes-omnicanal") {
    return `
      <div class="dashboard-grid">
        ${chartCard("riskBar", project.risk.title)}
        ${tableTemplate(project.table, "risk")}
      </div>
    `;
  }

  if (project.id === "retail-operaciones") {
    return `
      <div class="dashboard-grid">
        <article class="architecture-card">
          <h4>Arquitectura visual</h4>
          <div class="architecture-flow">
            ${["STG", "ODS", "DWH", "Data Mart", "Dashboard"]
              .map((node, index) => `<div class="flow-node"><strong>${node}</strong><span>${architectureCopy(index)}</span></div>`)
              .join("")}
          </div>
        </article>
        ${tableTemplate({
          title: "Dimensiones y hechos ficticios",
          headers: ["Objeto", "Campos principales"],
          rows: project.model.dimensions,
        })}
      </div>
    `;
  }

  if (project.id === "facebook-ads-roi") {
    return `
      <div class="dashboard-grid">
        ${chartCard("marketingBar", project.channels.title)}
        ${tableTemplate(project.table)}
      </div>
    `;
  }

  return `
    <div class="dashboard-grid">
      ${chartCard("sentimentLine", project.sentiment.title)}
      <article class="word-cloud" aria-label="Word cloud simulada">
        ${project.words
          .map(([word, size]) => `<span style="font-size:${size}px">${word}</span>`)
          .join("")}
      </article>
      ${tableTemplate(project.table, "sentiment")}
    </div>
  `;
}

function chartCard(id, title) {
  return `
    <article class="chart-card">
      <h4>${title}</h4>
      <div class="chart-wrap">
        <canvas id="${id}" aria-label="${title}" role="img"></canvas>
      </div>
    </article>
  `;
}

function tableTemplate(table, mode = "") {
  return `
    <article class="table-card">
      <h4>${table.title}</h4>
      <table class="data-table">
        <thead>
          <tr>${table.headers.map((header) => `<th>${header}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows
            .map(
              (row) => `
                <tr>
                  ${row.map((cell, index) => tableCell(cell, index, mode)).join("")}
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </article>
  `;
}

function tableCell(cell, index, mode) {
  const normalized = String(cell).toLowerCase();
  const isRisk = mode === "risk" && index === 4;
  const isSentiment = mode === "sentiment" && index === 2;

  if (isRisk || isSentiment) {
    const className = normalized.includes("alto") || normalized.includes("alta")
      ? "high"
      : normalized.includes("medio") || normalized.includes("media")
        ? "medium"
        : normalized.includes("bajo") || normalized.includes("baja")
          ? "low"
          : normalized.includes("negativo")
            ? "negativo"
            : normalized.includes("neutral")
              ? "neutral"
              : "positivo";
    return `<td><span class="badge ${className}">${cell}</span></td>`;
  }

  return `<td>${cell}</td>`;
}

function architectureCopy(index) {
  return [
    "ingesta cruda y auditoría",
    "normalización operacional",
    "modelo dimensional",
    "métricas por dominio",
    "consumo ejecutivo",
  ][index];
}

function drawProjectCharts(project) {
  if (project.id === "marketing-performance") {
    drawLineChart(document.querySelector("#salesLine"), project.charts.line);
    drawDonutChart(document.querySelector("#salesDonut"), project.charts.donut);
    drawBarChart(document.querySelector("#salesBar"), project.charts.bar);
  }
  if (project.id === "clientes-omnicanal") {
    drawBarChart(document.querySelector("#riskBar"), project.risk, { horizontal: true });
  }
  if (project.id === "facebook-ads-roi") {
    drawBarChart(document.querySelector("#marketingBar"), project.channels);
  }
  if (project.id === "contenido-redes") {
    drawLineChart(document.querySelector("#sentimentLine"), project.sentiment);
  }
}

function setupCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawLineChart(canvas, config) {
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const padding = { top: 22, right: 24, bottom: 36, left: 46 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const allValues = config.datasets.flatMap((dataset) => dataset.data);
  const max = Math.max(...allValues) * 1.15;
  const min = 0;
  const regions = [];

  clearChart(ctx, width, height);
  drawGrid(ctx, padding, innerWidth, innerHeight, max, config.prefix, config.suffix);

  config.datasets.forEach((dataset) => {
    ctx.beginPath();
    dataset.data.forEach((value, index) => {
      const x = padding.left + (index / (config.labels.length - 1)) * innerWidth;
      const y = padding.top + innerHeight - ((value - min) / (max - min)) * innerHeight;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      regions.push({ x, y, radius: 14, label: config.labels[index], value, series: dataset.label, config });
    });
    ctx.strokeStyle = dataset.color;
    ctx.lineWidth = 3;
    ctx.stroke();

    dataset.data.forEach((value, index) => {
      const x = padding.left + (index / (config.labels.length - 1)) * innerWidth;
      const y = padding.top + innerHeight - ((value - min) / (max - min)) * innerHeight;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = dataset.color;
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  });

  drawLabels(ctx, config.labels, padding, innerWidth, height);
  attachTooltip(canvas, regions);
}

function drawBarChart(canvas, config, options = {}) {
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const padding = { top: 22, right: 28, bottom: 42, left: options.horizontal ? 82 : 46 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const max = Math.max(...config.values) * 1.18;
  const regions = [];

  clearChart(ctx, width, height);
  drawGrid(ctx, padding, innerWidth, innerHeight, max, config.prefix, config.suffix);

  if (options.horizontal) {
    const rowHeight = innerHeight / config.values.length;
    config.values.forEach((value, index) => {
      const y = padding.top + index * rowHeight + rowHeight * 0.18;
      const barHeight = rowHeight * 0.52;
      const barWidth = (value / max) * innerWidth;
      const color = config.colors?.[index] || config.color || "#1d8ad8";
      roundRect(ctx, padding.left, y, barWidth, barHeight, 7, color);
      ctx.fillStyle = "#31516f";
      ctx.font = "700 12px Inter, sans-serif";
      ctx.fillText(config.labels[index], 10, y + barHeight / 2 + 4);
      regions.push({
        x: padding.left,
        y,
        width: barWidth,
        height: barHeight,
        label: config.labels[index],
        value,
        config,
      });
    });
  } else {
    const slot = innerWidth / config.values.length;
    const barWidth = Math.min(58, slot * 0.52);
    config.values.forEach((value, index) => {
      const barHeight = (value / max) * innerHeight;
      const x = padding.left + index * slot + (slot - barWidth) / 2;
      const y = padding.top + innerHeight - barHeight;
      roundRect(ctx, x, y, barWidth, barHeight, 7, config.colors?.[index] || config.color || "#1d8ad8");
      regions.push({ x, y, width: barWidth, height: barHeight, label: config.labels[index], value, config });
    });
    drawLabels(ctx, config.labels, padding, innerWidth, height);
  }

  attachTooltip(canvas, regions);
}

function drawDonutChart(canvas, config) {
  if (!canvas) return;
  const { ctx, width, height } = setupCanvas(canvas);
  const cx = width / 2;
  const cy = height / 2 - 8;
  const radius = Math.min(width, height) * 0.32;
  const total = config.values.reduce((sum, value) => sum + value, 0);
  const regions = [];
  let startAngle = -Math.PI / 2;

  clearChart(ctx, width, height);
  config.values.forEach((value, index) => {
    const angle = (value / total) * Math.PI * 2;
    const endAngle = startAngle + angle;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.arc(cx, cy, radius * 0.58, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = config.colors[index];
    ctx.fill();
    regions.push({
      cx,
      cy,
      radius,
      innerRadius: radius * 0.58,
      startAngle,
      endAngle,
      label: config.labels[index],
      value,
      config,
    });
    startAngle = endAngle;
  });

  ctx.fillStyle = "#102033";
  ctx.font = "900 24px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("100%", cx, cy + 7);

  config.labels.forEach((label, index) => {
    const x = 18 + (index % 2) * (width / 2);
    const y = height - 44 + Math.floor(index / 2) * 20;
    ctx.fillStyle = config.colors[index];
    ctx.fillRect(x, y - 9, 10, 10);
    ctx.fillStyle = "#617187";
    ctx.font = "700 12px Inter, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`${label} ${config.values[index]}${config.suffix || ""}`, x + 16, y);
  });

  attachTooltip(canvas, regions, true);
}

function clearChart(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
}

function drawGrid(ctx, padding, innerWidth, innerHeight, max, prefix = "", suffix = "") {
  ctx.strokeStyle = "#e7eef5";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#8190a3";
  ctx.font = "700 11px Inter, sans-serif";
  ctx.textAlign = "right";

  for (let i = 0; i <= 4; i += 1) {
    const y = padding.top + (innerHeight / 4) * i;
    const value = Math.round(max - (max / 4) * i);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + innerWidth, y);
    ctx.stroke();
    ctx.fillText(`${prefix || ""}${compactNumber(value)}${suffix || ""}`, padding.left - 8, y + 4);
  }
}

function drawLabels(ctx, labels, padding, innerWidth, height) {
  ctx.fillStyle = "#617187";
  ctx.font = "700 11px Inter, sans-serif";
  ctx.textAlign = "center";
  labels.forEach((label, index) => {
    const x = padding.left + (index / Math.max(1, labels.length - 1)) * innerWidth;
    ctx.fillText(label, x, height - 14);
  });
}

function roundRect(ctx, x, y, width, height, radius, color) {
  const safeHeight = Math.max(height, 2);
  const safeRadius = Math.min(radius, safeHeight / 2, width / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + safeHeight);
  ctx.lineTo(x, y + safeHeight);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.fillStyle = color;
  ctx.fill();
}

function attachTooltip(canvas, regions, isDonut = false) {
  canvas.onmousemove = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const hit = regions.find((region) => (isDonut ? hitDonut(region, x, y) : hitRegion(region, x, y)));

    if (!hit) {
      tooltip.style.opacity = 0;
      return;
    }

    const formatted = `${hit.config?.prefix || ""}${compactNumber(hit.value)}${hit.config?.suffix || ""}`;
    tooltip.innerHTML = `<strong>${hit.series ? `${hit.series} · ` : ""}${hit.label}</strong><br>${formatted}`;
    tooltip.style.left = `${event.clientX}px`;
    tooltip.style.top = `${event.clientY}px`;
    tooltip.style.opacity = 1;
  };

  canvas.onmouseleave = () => {
    tooltip.style.opacity = 0;
  };
}

function hitRegion(region, x, y) {
  if (region.radius) {
    return Math.hypot(region.x - x, region.y - y) <= region.radius;
  }
  return x >= region.x && x <= region.x + region.width && y >= region.y && y <= region.y + region.height;
}

function hitDonut(region, x, y) {
  const dx = x - region.cx;
  const dy = y - region.cy;
  const distance = Math.hypot(dx, dy);
  let angle = Math.atan2(dy, dx);
  if (angle < -Math.PI / 2) angle += Math.PI * 2;
  return (
    distance >= region.innerRadius &&
    distance <= region.radius &&
    angle >= region.startAngle &&
    angle <= region.endAngle
  );
}

function compactNumber(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`;
  return Number.isInteger(value) ? value : value.toFixed(1);
}

function bindNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function updateHeaderElevation() {
  document.querySelector(".site-header").dataset.elevated = String(window.scrollY > 12);
}

function handleResize() {
  window.clearTimeout(state.resizeTimer);
  state.resizeTimer = window.setTimeout(renderActiveProject, 180);
}
