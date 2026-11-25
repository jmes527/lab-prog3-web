// Cada vista tiene html() y, opcionalmente, init() para la logica
const vistas = {};

// ---------- Inicio ----------
vistas["inicio"] = {
  html: () => {
    const tarjetas = [
      ["Turismo RD", "Destinos turísticos y formulario de solicitud.", "turismo"],
      ["Página personal", "Perfil, asignaturas y horario.", "pagina-personal"],
      ["Biografía", "Formación, trayectoria y logros.", "biografia"],
      ["Banco XX", "Simulador de préstamo.", "banco"],
      ["Validador de cédula", "Valida cédulas dominicanas.", "validador-cedula"],
      ["Formulario", "Registro en 3 pasos guardado en la base de datos.", "formulario"],
      ["Gestión de clientes", "Crear, editar y borrar clientes.", "clientes"],
      ["Administrar menú", "Menú dinámico leído de la base de datos.", "menu-admin"],
    ];
    return `<div class="hero mb-4"><h1>Laboratorio de Programación III</h1>
      <p class="mb-0">INF-5170 · Trabajo individual · Jesús Moisés Encarnación Soriano (100590273)</p></div>
      <div class="row g-3">${tarjetas.map(([t, d, r]) => `
        <div class="col-md-6 col-lg-3"><a href="#${r}" class="text-decoration-none text-dark">
          <div class="card h-100 tarjeta-menu"><div class="card-body">
            <h5>${t}</h5><p class="text-muted mb-0">${d}</p></div></div></a></div>`).join("")}</div>`;
  },
};

// ---------- Turismo RD ----------
vistas["turismo"] = {
  html: () => `<h1>Turismo RD</h1><p class="text-muted">Conoce algunos lugares de nuestro país.</p>
    <div class="row g-3 mb-4">
      <div class="col-md-4"><div class="card h-100"><div class="card-body"><h5>Samaná</h5><p>Conoce sus playas, cascadas y paisajes naturales.</p></div></div></div>
      <div class="col-md-4"><div class="card h-100"><div class="card-body"><h5>Punta Cana</h5><p>Disfruta de sus playas de arena blanca y agua azul.</p></div></div></div>
      <div class="col-md-4"><div class="card h-100"><div class="card-body"><h5>Jarabacoa</h5><p>Visita sus montañas, ríos y espacios naturales.</p></div></div></div>
    </div>
    <div class="card"><div class="card-body"><h4>Solicitar información</h4>
      <form id="solicitud" class="row g-2">
        <div class="col-md-5"><input id="t-nombre" class="form-control" placeholder="Nombre" required></div>
        <div class="col-md-4"><select id="t-destino" class="form-select"><option>Samaná</option><option>Punta Cana</option><option>Jarabacoa</option></select></div>
        <div class="col-md-3"><button class="btn btn-primary w-100">Enviar solicitud</button></div>
      </form><p id="t-msg" class="mt-3 mb-0 text-success"></p></div></div>`,
  init: () => {
    $("#solicitud").addEventListener("submit", (e) => {
      e.preventDefault();
      $("#t-msg").textContent = `Solicitud enviada para ${$("#t-destino").value} a nombre de ${$("#t-nombre").value}.`;
    });
  },
};

// ---------- Página personal ----------
vistas["pagina-personal"] = {
  html: () => `<h1>Jesús Moisés Encarnación Soriano</h1>
    <p class="text-muted">Estudiante de Licenciatura en Informática | Consultor Microsoft Dynamics &amp; Power Platform</p>
    <div class="card mb-3"><div class="card-body"><h4>Perfil biográfico</h4>
      <ul><li><b>Matrícula:</b> 100590273</li><li><b>Carrera:</b> Licenciatura en Informática</li>
      <li><b>Universidad:</b> Universidad Autónoma de Santo Domingo (UASD)</li></ul>
      <p class="mb-0">Me desempeño como consultor en soluciones empresariales con Microsoft Dynamics 365 (Business Central) y Power Platform: extensiones personalizadas (AL, JavaScript, Power Fx), automatización con Power Automate y aplicaciones web.</p></div></div>
    <div class="card mb-3"><div class="card-body"><h4>Asignaturas inscritas (Segundo Semestre 2026)</h4>
      <ul class="mb-0"><li>INF-5170: Lab Lenguaje de Program III (Sec. 01)</li><li>MAT-3940: Investigación de Operaciones (Sec. W03)</li></ul></div></div>
    <div class="card mb-3"><div class="card-body"><h4>Horario de clases</h4>
      <div class="table-responsive"><table class="table table-striped">
        <thead><tr><th>Asignatura</th><th>Día</th><th>Hora</th><th>Modalidad / Aula</th><th>Profesor</th></tr></thead>
        <tbody>
          <tr><td>Lab Lenguaje de Program III</td><td>Domingo</td><td>07:00 - 08:50 AM</td><td>Presencial - Lab. 103</td><td>Radhames Silverio Gonzalez</td></tr>
          <tr><td>Investigación de Operaciones</td><td>Miércoles</td><td>07:00 - 09:50 PM</td><td>Virtual</td><td>Natanael Ureña Castillo</td></tr>
        </tbody></table></div></div></div>
    <p>Contacto: <a href="mailto:jencarnacion@uasd.edu.do">jencarnacion@uasd.edu.do</a></p>`,
};

// ---------- Biografía ----------
vistas["biografia"] = {
  html: () => {
    const sec = [
      ["1. Datos personales", `<ul class="mb-0"><li><b>Matrícula:</b> 100590273</li><li><b>Nacimiento:</b> 30 de octubre de 2001, Baní, Peravia</li><li><b>Nacionalidad:</b> Dominicana</li><li><b>Carrera:</b> Licenciatura en Informática (UASD)</li></ul>`],
      ["2. Contexto familiar", `<p class="mb-0">Hijo de Miguel Encarnación y Criserida Soriano. Creció en una familia trabajadora, basada en el esfuerzo y la responsabilidad.</p>`],
      ["3. Formación académica", `<p class="mb-0">Escuela Pedro José Altagracia Blandino Soto y Liceo Hernestina Tejeda (bachiller en 2019). Cursa Informática en la UASD con Beca Nacional del MESCyT. Áreas: Power BI, SQL, Programación Web y Power Platform.</p>`],
      ["4. Trayectoria profesional", `<p class="mb-0">Soporte técnico, administración de bases de datos, programación web y, desde 2023, Power Platform Developer y consultor.</p>`],
      ["5. Producción intelectual", `<p class="mb-0">Sistema de facturación, sistemas de identificaciones, implementaciones empresariales y Business Intelligence con Power BI.</p>`],
      ["6. Reconocimientos y logros", `<ul class="mb-0"><li>Beca Nacional del MESCyT</li><li>Bachillerato culminado en 2019</li><li>Power Platform Developer y consultor</li></ul>`],
      ["7. Aportes sociales y comunitarios", `<p class="mb-0">Considera que la tecnología es una herramienta para resolver problemas y aportar al desarrollo de las personas y las organizaciones.</p>`],
    ];
    return `<h1>Biografía</h1><p class="text-muted"><b>Jesús Moisés Encarnación Soriano</b> | Power Platform Developer y Consultor</p>
      <div class="row g-3">${sec.map(([t, c]) => `<div class="col-md-6"><div class="card h-100"><div class="card-body"><h5>${t}</h5>${c}</div></div></div>`).join("")}</div>`;
  },
};

// ---------- Banco XX ----------
vistas["banco"] = {
  html: () => `<h1>Banco XX</h1><p class="text-muted">Tu banco digital, sin complicaciones ni filas.</p>
    <div class="row g-3 mb-3">
      <div class="col-md-6"><div class="card"><div class="card-body">🇺🇸 <b>Dólar (USD)</b><br>Compra RD$ 60.10 | Venta RD$ 60.45 <small class="text-muted">(ejemplo)</small></div></div></div>
      <div class="col-md-6"><div class="card"><div class="card-body">🇪🇺 <b>Euro (EUR)</b><br>Compra RD$ 64.20 | Venta RD$ 64.90 <small class="text-muted">(ejemplo)</small></div></div></div>
    </div>
    <div class="card mb-3"><div class="card-body"><h4>Simulador de préstamo</h4>
      <div class="row g-2 align-items-end">
        <div class="col-md-4"><label class="form-label">Monto (RD$)</label><input type="number" id="b-monto" value="200000" min="1" class="form-control"></div>
        <div class="col-md-3"><label class="form-label">Plazo</label><select id="b-plazo" class="form-select">
          <option value="12">12 meses</option><option value="24">24 meses</option><option value="36" selected>36 meses</option><option value="48">48 meses</option><option value="60">60 meses</option></select></div>
        <div class="col-md-3"><label class="form-label">Tipo</label><select id="b-tasa" class="form-select">
          <option value="14.5">Personal (14.5%)</option><option value="10.5">Vehículo (10.5%)</option><option value="9.0">Hipotecario (9.0%)</option></select></div>
        <div class="col-md-2"><button id="b-calc" class="btn btn-primary w-100">Calcular</button></div>
      </div>
      <h3 class="mt-3">Cuota mensual estimada: <span id="b-cuota" class="text-primary"></span></h3></div></div>
    <div class="row g-3">
      <div class="col-md-4"><div class="card h-100"><div class="card-body"><h5>Cuenta Ahorro Digital</h5><p class="mb-0">Sin depósito mínimo y con tarjeta de débito gratis.</p></div></div></div>
      <div class="col-md-4"><div class="card h-100"><div class="card-body"><h5>Tarjeta Gold XX</h5><p class="mb-0">Acumula puntos por tus consumos diarios.</p></div></div></div>
      <div class="col-md-4"><div class="card h-100"><div class="card-body"><h5>Préstamo Hipotecario</h5><p class="mb-0">Tasas fijas para adquirir tu vivienda.</p></div></div></div>
    </div>`,
  init: () => {
    const calcular = () => {
      const P = parseFloat($("#b-monto").value), n = parseInt($("#b-plazo").value);
      const r = parseFloat($("#b-tasa").value) / 100 / 12;
      const cuota = P * r / (1 - Math.pow(1 + r, -n));
      $("#b-cuota").textContent = "RD$ " + cuota.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };
    $("#b-calc").addEventListener("click", calcular);
    calcular();
  },
};

// ---------- Validador de cédula ----------
vistas["validador-cedula"] = {
  html: () => `<h1>Validador de cédula dominicana</h1>
    <p class="text-muted">Escribe los 11 dígitos de la cédula. Se acepta con o sin guiones.</p>
    <div class="card"><div class="card-body">
      <div class="input-group mb-3" style="max-width:420px">
        <input id="c-cedula" class="form-control" placeholder="000-0000000-0" maxlength="13">
        <button id="c-validar" class="btn btn-primary">Validar cédula</button></div>
      <h4 id="c-resultado" class="mb-0"></h4></div></div>`,
  init: () => {
    const valida = (texto) => {
      const c = texto.replace(/-/g, "");
      if (!/^\d{11}$/.test(c)) return false;
      let suma = 0;
      for (let i = 0; i < 10; i++) {
        let n = parseInt(c[i]) * (i % 2 === 0 ? 1 : 2);
        if (n > 9) n = Math.floor(n / 10) + (n % 10);
        suma += n;
      }
      return (10 - (suma % 10)) % 10 === parseInt(c[10]);
    };
    $("#c-validar").addEventListener("click", () => {
      const ok = valida($("#c-cedula").value);
      const r = $("#c-resultado");
      r.textContent = ok ? "✅ Cédula válida" : "❌ Cédula inválida";
      r.className = ok ? "text-success" : "text-danger";
    });
  },
};

// ---------- Formulario de 3 pasos (guarda en la base de datos) ----------
let formPaso = 1, formDatos = {};
const campo = (n, ph, tipo = "text", v = "") =>
  `<div class="mb-2"><input name="${n}" type="${tipo}" value="${esc(v)}" class="form-control" placeholder="${ph}" required></div>`;

function pintarPaso() {
  const caja = $("#form-box");
  const barra = `<div class="progress mb-3"><div class="progress-bar" style="width:${formPaso * 33.3}%">Paso ${formPaso} de 3</div></div>`;
  if (formPaso === 1) {
    caja.innerHTML = barra + `<div class="card"><div class="card-body"><h5>Datos personales</h5><form id="f">
      ${campo("nombre", "Nombre", "text", formDatos.nombre)}${campo("apellido", "Apellido", "text", formDatos.apellido)}
      ${campo("email", "Email", "email", formDatos.email)}<button class="btn btn-primary">Siguiente</button></form></div></div>`;
  } else if (formPaso === 2) {
    caja.innerHTML = barra + `<div class="card"><div class="card-body"><h5>Contacto</h5><form id="f">
      ${campo("telefono", "Teléfono", "text", formDatos.telefono)}${campo("direccion", "Dirección", "text", formDatos.direccion)}
      ${campo("ciudad", "Ciudad", "text", formDatos.ciudad)}
      <button type="button" id="atras" class="btn btn-outline-secondary">Atrás</button> <button class="btn btn-primary">Siguiente</button></form></div></div>`;
    $("#atras").addEventListener("click", () => { formPaso = 1; pintarPaso(); });
  } else {
    const d = formDatos;
    caja.innerHTML = barra + `<div class="card"><div class="card-body"><h5>Confirmar datos</h5>
      <ul><li><b>Nombre:</b> ${esc(d.nombre)} ${esc(d.apellido)}</li><li><b>Email:</b> ${esc(d.email)}</li>
      <li><b>Teléfono:</b> ${esc(d.telefono)}</li><li><b>Dirección:</b> ${esc(d.direccion)}, ${esc(d.ciudad)}</li></ul>
      <div id="f-msg" class="text-danger mb-2"></div>
      <button id="atras" class="btn btn-outline-secondary">Atrás</button> <button id="guardar" class="btn btn-success">Guardar en la base de datos</button></div></div>`;
    $("#atras").addEventListener("click", () => { formPaso = 2; pintarPaso(); });
    $("#guardar").addEventListener("click", async () => {
      const { error } = await sb.from("registros").insert(formDatos);
      if (error) { $("#f-msg").textContent = "No se pudo guardar: " + error.message; return; }
      location.hash = "#registros";
    });
    return;
  }
  $("#f").addEventListener("submit", (e) => {
    e.preventDefault();
    Object.assign(formDatos, Object.fromEntries(new FormData(e.target)));
    formPaso++; pintarPaso();
  });
}

vistas["formulario"] = {
  html: () => `<h2>Formulario</h2><div id="form-box"></div>`,
  init: () => { formPaso = 1; formDatos = {}; pintarPaso(); },
};

vistas["registros"] = {
  html: () => `<h2>Registros guardados</h2><div class="table-responsive"><table class="table table-striped bg-white">
    <thead><tr><th>Nombre</th><th>Apellido</th><th>Email</th><th>Teléfono</th><th>Ciudad</th><th>Fecha</th></tr></thead>
    <tbody id="r-body"><tr><td colspan="6">Cargando...</td></tr></tbody></table></div>
    <a href="#formulario" class="btn btn-primary">Nuevo registro</a>`,
  init: async () => {
    const { data, error } = await sb.from("registros").select("*").order("id", { ascending: false });
    $("#r-body").innerHTML = error ? `<tr><td colspan="6">Error: ${esc(error.message)}</td></tr>` :
      data.map((r) => `<tr><td>${esc(r.nombre)}</td><td>${esc(r.apellido)}</td><td>${esc(r.email)}</td><td>${esc(r.telefono)}</td><td>${esc(r.ciudad)}</td><td>${new Date(r.creado).toLocaleString("es-DO")}</td></tr>`).join("");
  },
};

// ---------- Gestión de clientes (CRUD) ----------
let clienteEditando = null;
async function pintarClientes() {
  const { data, error } = await sb.from("clientes").select("*").order("id", { ascending: false });
  if (error) { $("#cl-body").innerHTML = `<tr><td colspan="4">Error: ${esc(error.message)}</td></tr>`; return; }
  $("#cl-body").innerHTML = data.map((c) => `<tr><td>${esc(c.nombre)}</td><td>${esc(c.telefono)}</td><td>${esc(c.email)}</td>
    <td><button class="btn btn-sm btn-outline-primary me-1" data-editar="${c.id}">Editar</button>
    <button class="btn btn-sm btn-outline-danger" data-borrar="${c.id}">Borrar</button></td></tr>`).join("");
  document.querySelectorAll("[data-editar]").forEach((b) => b.addEventListener("click", () => {
    clienteEditando = data.find((c) => c.id == b.dataset.editar);
    $("#cl-nombre").value = clienteEditando.nombre; $("#cl-tel").value = clienteEditando.telefono || "";
    $("#cl-email").value = clienteEditando.email || ""; $("#cl-titulo").textContent = "Editar cliente";
    $("#cl-btn").textContent = "Guardar";
  }));
  document.querySelectorAll("[data-borrar]").forEach((b) => b.addEventListener("click", async () => {
    if (!confirm("¿Borrar este cliente?")) return;
    await sb.from("clientes").delete().eq("id", b.dataset.borrar);
    pintarClientes();
  }));
}

vistas["clientes"] = {
  html: () => `<h1>Gestión de clientes</h1>
    <div class="card mb-3"><div class="card-body"><h5 id="cl-titulo">Nuevo cliente</h5>
      <form id="cl-form" class="row g-2">
        <div class="col-md-4"><input id="cl-nombre" class="form-control" placeholder="Nombre" required></div>
        <div class="col-md-3"><input id="cl-tel" class="form-control" placeholder="Teléfono"></div>
        <div class="col-md-3"><input id="cl-email" class="form-control" placeholder="Email"></div>
        <div class="col-md-2"><button id="cl-btn" class="btn btn-primary w-100">Agregar</button></div>
      </form></div></div>
    <div class="table-responsive"><table class="table table-striped bg-white">
      <thead><tr><th>Nombre</th><th>Teléfono</th><th>Email</th><th>Acciones</th></tr></thead><tbody id="cl-body"></tbody></table></div>`,
  init: async () => {
    clienteEditando = null;
    $("#cl-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const fila = { nombre: $("#cl-nombre").value, telefono: $("#cl-tel").value, email: $("#cl-email").value };
      if (clienteEditando) await sb.from("clientes").update(fila).eq("id", clienteEditando.id);
      else await sb.from("clientes").insert(fila);
      clienteEditando = null; e.target.reset();
      $("#cl-titulo").textContent = "Nuevo cliente"; $("#cl-btn").textContent = "Agregar";
      pintarClientes();
    });
    pintarClientes();
  },
};

// ---------- Administrar menú ----------
async function pintarMenuAdmin() {
  const { data } = await sb.from("menu").select("*").order("orden");
  $("#m-body").innerHTML = (data || []).map((o) => `<tr><td>${esc(o.titulo)}</td><td>#${esc(o.ruta)}</td>
    <td>${o.activo ? "Activo" : "Oculto"}</td>
    <td><button class="btn btn-sm btn-outline-secondary me-1" data-alt="${o.id}" data-act="${o.activo}">Mostrar/ocultar</button>
    <button class="btn btn-sm btn-outline-danger" data-del="${o.id}">Borrar</button></td></tr>`).join("");
  document.querySelectorAll("[data-alt]").forEach((b) => b.addEventListener("click", async () => {
    await sb.from("menu").update({ activo: b.dataset.act !== "true" }).eq("id", b.dataset.alt);
    await cargarMenu(); pintarMenuAdmin();
  }));
  document.querySelectorAll("[data-del]").forEach((b) => b.addEventListener("click", async () => {
    if (!confirm("¿Borrar esta opción?")) return;
    await sb.from("menu").delete().eq("id", b.dataset.del);
    await cargarMenu(); pintarMenuAdmin();
  }));
}

vistas["menu-admin"] = {
  html: () => `<h1>Administrar menú</h1><p class="text-muted">Las opciones se guardan en la tabla <code>menu</code> de la base de datos.</p>
    <div class="card mb-3"><div class="card-body"><form id="m-form" class="row g-2">
      <div class="col-md-5"><input id="m-titulo" class="form-control" placeholder="Nombre de la opción" required></div>
      <div class="col-md-5"><input id="m-ruta" class="form-control" placeholder="Enlace (ej: turismo)" required></div>
      <div class="col-md-2"><button class="btn btn-primary w-100">Agregar opción</button></div></form></div></div>
    <div class="table-responsive"><table class="table table-striped bg-white">
      <thead><tr><th>Título</th><th>Enlace</th><th>Estado</th><th>Acciones</th></tr></thead><tbody id="m-body"></tbody></table></div>`,
  init: async () => {
    $("#m-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const { data } = await sb.from("menu").select("orden").order("orden", { ascending: false }).limit(1);
      const orden = (data && data[0] ? data[0].orden : 0) + 1;
      await sb.from("menu").insert({ titulo: $("#m-titulo").value, ruta: $("#m-ruta").value.replace(/^#/, ""), orden });
      e.target.reset(); await cargarMenu(); pintarMenuAdmin();
    });
    pintarMenuAdmin();
  },
};
