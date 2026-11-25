-- Ejecutar en Supabase: SQL Editor > New query > pegar todo > Run

create table menu (
  id bigint generated always as identity primary key,
  titulo text not null,
  ruta text not null,
  orden int default 0,
  activo boolean default true
);

create table registros (            -- formulario de varias paginas
  id bigint generated always as identity primary key,
  nombre text, apellido text, email text,
  telefono text, direccion text, ciudad text,
  creado timestamptz default now()
);

create table clientes (
  id bigint generated always as identity primary key,
  nombre text not null,
  telefono text,
  email text
);

-- Seguridad: solo usuarios con sesion iniciada pueden leer y escribir
alter table menu enable row level security;
alter table registros enable row level security;
alter table clientes enable row level security;

create policy "solo autenticados" on menu      for all to authenticated using (true) with check (true);
create policy "solo autenticados" on registros for all to authenticated using (true) with check (true);
create policy "solo autenticados" on clientes  for all to authenticated using (true) with check (true);

insert into menu (titulo, ruta, orden) values
 ('Inicio', 'inicio', 1),
 ('Turismo RD', 'turismo', 2),
 ('Página personal', 'pagina-personal', 3),
 ('Biografía', 'biografia', 4),
 ('Banco XX', 'banco', 5),
 ('Validador de cédula', 'validador-cedula', 6),
 ('Formulario', 'formulario', 7),
 ('Registros guardados', 'registros', 8),
 ('Gestión de clientes', 'clientes', 9),
 ('Administrar menú', 'menu-admin', 10);
