# Fase 1: Hero Section - Rediseño

## Objetivo de la Fase 1
Crear una sección hero impactante y minimalista que capture la atención inmediatamente con un mensaje claro y poderoso.

## Cambios Principales vs Versión Actual

### Actual
```html
<h1 class="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
  E-COMMERCE
</h1>
<p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
  Transforma tu pasión en un negocio <span class="text-[var(--sec)] font-semibold">global</span>. 
  La plataforma definitiva para vender experiencias únicas.
</p>
```

### Nueva Propuesta
```html
<h1 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
  El futuro de tu negocio<br>
  <span class="text-[var(--sec)]">de reservas</span>
</h1>
<h2 class="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
  Sistema de reservas online flexible y potente para vender servicios, actividades y productos.
</h2>
<a href="#contacto" class="inline-block bg-[var(--sec)] text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-[#cbb2ff] hover:scale-105 transition-all duration-300 text-lg">
  Potencia tu negocio
</a>
```

## Mejoras de Diseño

### Tipografía
- **H1**: Más legible, con break line estratégico
- **H2**: Subtítulo claro y descriptivo (no solo decorativo)
- **Font weights**: Contraste entre bold (H1) y light (H2)
- **Line height**: Mejor legibilidad con `leading-tight` en H1

### Espaciado
- Más espacio entre elementos (`mb-6`, `mb-8`)
- Max-width aumentado para H2 (`max-w-4xl`)
- CTA con padding más equilibrado

### CTA Button
- Texto específico del prompt: "Potencia tu negocio"
- Bordes más modernos (`rounded-lg` vs `rounded-full`)
- Mantiene hover effects existentes

## Estructura HTML Completa para Fase 1

```html
<!-- Hero Section -->
<section class="relative min-h-[80vh] w-full flex flex-col items-center justify-center text-center overflow-hidden">
  <div class="absolute inset-0 z-0">
    <LetterGlitch 
      client:visible 
      glitchColors={["#5e4491", "#A476FF", "#241a38"]} 
      glitchSpeed={33} 
      centerVignette={true} 
      outerVignette={true} 
      smooth={true} 
    />
  </div>
  
  <div class="relative z-10 p-6 animate-fade-in-up max-w-6xl mx-auto">
    <h1 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
      El futuro de tu negocio<br>
      <span class="text-[var(--sec)]">de reservas</span>
    </h1>
    
    <h2 class="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
      Sistema de reservas online flexible y potente para vender servicios, actividades y productos.
    </h2>
    
    <a href="#contacto" class="inline-block bg-[var(--sec)] text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-[#cbb2ff] hover:scale-105 transition-all duration-300 text-lg">
      Potencia tu negocio
    </a>
  </div>
</section>
```

## Ajustes CSS Adicionales

```css
/* Mejoras para Hero Section */
.hero-title-break {
  line-height: 1.1;
}

@media (max-width: 768px) {
  .hero-title-break {
    line-height: 1.2;
  }
}
```

## Testing Checklist

- [ ] Responsive en móviles (320px - 768px)
- [ ] Responsive en tablets (768px - 1024px) 
- [ ] Responsive en desktop (1024px+)
- [ ] Contraste de colores accesible
- [ ] Animaciones suaves
- [ ] CTA visible y clickeable
- [ ] Texto legible sobre el background de LetterGlitch

## Notas de Implementación

1. **Mantener LetterGlitch**: Es un elemento distintivo del sitio
2. **Height ajustable**: Cambio de `h-[70vh]` a `min-h-[80vh]` para más presencia
3. **Breakpoint estratégico**: `<br>` solo visible en desktop para mejor flow
4. **Color acento**: Usar `text-[var(--sec)]` para "de reservas" como punto focal

## Próximo Paso
Una vez implementada y probada la Fase 1, proceder con la Fase 2 (Secciones de Contenido Principal).