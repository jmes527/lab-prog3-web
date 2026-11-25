# Laboratorio de Programación III (INF-5170) - Trabajo individual

**Estudiante:** Jesús Moisés Encarnación Soriano (100590273) - UASD

Aplicación web hecha con **HTML, CSS (Bootstrap 5) y JavaScript**, publicada en **GitHub Pages**, con **Supabase** (PostgreSQL + autenticación) como base de datos.

**URL:** _(pendiente)_
**Usuario de prueba:** _(pendiente)_ · **Contraseña:** _(pendiente)_

## Ejercicios integrados
| Ejercicio | Ruta |
|---|---|
| Login con usuario y contraseña (Supabase Auth) | pantalla inicial |
| Menú dinámico (se lee de la tabla `menu`) | barra superior |
| Administrar menú (agregar, ocultar, borrar) | `#menu-admin` |
| Turismo RD | `#turismo` |
| Página personal | `#pagina-personal` |
| Biografía | `#biografia` |
| Banco XX (simulador de préstamo) | `#banco` |
| Validador de cédula dominicana | `#validador-cedula` |
| Formulario de 3 pasos guardado en la base de datos | `#formulario`, `#registros` |
| Gestión de clientes (CRUD) | `#clientes` |

## Base de datos
PostgreSQL en Supabase. El script `supabase.sql` crea las tablas `menu`, `registros` y `clientes`, activa Row Level Security y permite leer/escribir únicamente a usuarios con sesión iniciada.

## Seguridad
- Las contraseñas las gestiona Supabase Auth (hash), no se guardan en el código.
- Registro público de usuarios desactivado; los usuarios se crean desde el panel.
- La clave `anon` de `js/config.js` es pública por diseño; los datos están protegidos con RLS.

## Cómo ejecutar
1. Crear un proyecto en supabase.com y ejecutar `supabase.sql` en el SQL Editor.
2. Crear un usuario en Authentication > Users.
3. Copiar la URL y la anon key en `js/config.js`.
4. Abrir `index.html` (o publicar con GitHub Pages: Settings > Pages > rama `main`, carpeta `/root`).

## Uso de Inteligencia Artificial
Se utilizó **Claude (Anthropic)** como apoyo para: elegir la arquitectura, generar la estructura del proyecto, integrar los ejercicios previos, diseñar el modelo de datos y las políticas de seguridad, y depurar errores. El código fue revisado y probado por el estudiante.

## Repositorios de los ejercicios originales
- Menú dinámico: https://github.com/jmes527/Crear-men-din-mico-utilizando-una-estructura-de-datos
- Validador de cédula: https://github.com/jmes527/validador-cedula
- Gestión de clientes: https://github.com/jmes527/gestion-clientes
