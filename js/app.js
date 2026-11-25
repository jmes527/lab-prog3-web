const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g,
  (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---------- Login ----------
$("#form-login").addEventListener("submit", async (e) => {
  e.preventDefault();
  let usuario = $("#usuario").value.trim();
  if (!usuario.includes("@")) usuario += "@labprog3.com";
  const { data, error } = await sb.auth.signInWithPassword({
    email: usuario, password: $("#clave").value });
  const caja = $("#login-error");
  if (error) {
    caja.textContent = "Usuario o contraseña incorrectos";
    caja.classList.remove("d-none");
  } else {
    caja.classList.add("d-none");
    mostrarApp(data.user);
  }
});

$("#btn-salir").addEventListener("click", async () => {
  await sb.auth.signOut();
  mostrarLogin();
});

function mostrarLogin() {
  $("#vista-app").classList.add("d-none");
  $("#vista-login").classList.remove("d-none");
  $("#clave").value = "";
}

async function mostrarApp(user) {
  $("#vista-login").classList.add("d-none");
  $("#vista-app").classList.remove("d-none");
  $("#usuario-actual").textContent = user.email.split("@")[0];
  await cargarMenu();
  router();
}

// ---------- Menú dinámico: se lee de la tabla "menu" ----------
async function cargarMenu() {
  const { data } = await sb.from("menu").select("*").eq("activo", true).order("orden");
  $("#menu-lista").innerHTML = (data || []).map((i) =>
    `<li class="nav-item"><a class="nav-link" data-ruta="${esc(i.ruta)}" href="#${esc(i.ruta)}">${esc(i.titulo)}</a></li>`
  ).join("");
  marcarActivo();
}

function marcarActivo() {
  const ruta = location.hash.slice(1) || "inicio";
  document.querySelectorAll("#menu-lista .nav-link").forEach((a) =>
    a.classList.toggle("active", a.dataset.ruta === ruta));
}

// ---------- Router por hash (#turismo, #clientes, ...) ----------
async function router() {
  const ruta = location.hash.slice(1) || "inicio";
  const vista = vistas[ruta];
  marcarActivo();
  if (!vista) {
    $("#contenido").innerHTML = `<div class="alert alert-warning">La página "${esc(ruta)}" todavía no existe.</div>`;
    return;
  }
  $("#contenido").innerHTML = vista.html();
  if (vista.init) await vista.init();
}
window.addEventListener("hashchange", () => { if (!$("#vista-app").classList.contains("d-none")) router(); });

// ---------- Arranque ----------
(async () => {
  const { data } = await sb.auth.getSession();
  data.session ? mostrarApp(data.session.user) : mostrarLogin();
})();
