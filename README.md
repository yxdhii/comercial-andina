# Comercial Andina – React Mobile

Aplicación de comercio electrónico móvil en React + Vite, inspirada en las cuatro capturas proporcionadas. Diseño responsive tipo iPhone en escritorio y pantalla completa en móvil.

## Requisitos
Node.js 20.19+ o 22.12+ para Vite 6 (recomendado Node.js LTS reciente).

## Ejecutar
```bash
npm install
npm run dev
```
Abre la dirección que indique Vite (normalmente http://localhost:5173).

## Funciones reales
- Inicio con productos y categorías.
- Catálogo: búsqueda por nombre, descripción y categoría; filtros y orden por precio.
- Agregar al carrito; cantidades; eliminar individualmente; confirmación accesible al vaciar.
- Carrito persistente mediante `localStorage`.
- Resumen de precios: IGV incluido (no se suma otra vez); descuento simulado S/225 si subtotal >= S/3000; envío gratis simulado.
- Compra simulada con validación de nombre, correo, teléfono y dirección; no hay pasarela de pagos ni envío de datos.
- Perfil: modo oscuro, alto contraste, texto 100/115/130%, reducir movimiento y vibración opcional si el dispositivo la soporta.
- Navegación por teclado, foco visible, etiquetas accesibles, alertas `aria-live`, diálogo nativo de confirmación.

## Funciones de demostración
Notificaciones, pedidos anteriores, soporte VIP, facturación, direcciones guardadas, Face ID y cerrar sesión muestran un aviso; no están conectados a un backend. El perfil de Sofía es ficticio. No se debe presentar el prototipo como sistema de autenticación real.

## Estructura
`src/pages`: cuatro pantallas y checkout; `src/components`: navegación, imágenes y diálogo; `src/context`: carrito y accesibilidad; `src/data`: productos; `src/styles.css`: diseño responsive.

## Verificación sugerida
1. Agregar dos productos y comprobar el contador.
2. Aumentar/disminuir cantidades y verificar el total.
3. Recargar la página y confirmar que el carrito persiste.
4. Intentar vaciar y elegir Cancelar; luego Confirmar.
5. Buscar un producto, filtrar y ordenar.
6. Cambiar el modo oscuro y tamaño de texto; recargar.
7. Navegar con Tab, Enter, Shift+Tab y Escape en el diálogo.
8. Probar en vista móvil (390 × 844) y escritorio.
