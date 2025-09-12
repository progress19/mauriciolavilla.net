# Componentes Reutilizables y Elementos del Sistema

## Variables CSS Existentes del Proyecto

### Colores Base (Mantenemos)
```css
:root {
  --background: #0a0a0f;
  --card-bg: #1a1a2e;
  --card-bg-alt: #16213e;
  --sec: #a476ff;
  --white: #ffffff;
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Fuentes Existentes (Mantenemos)
El proyecto ya usa las fuentes del Layout.astro:
- **Principal**: System fonts con fallbacks
- **Pesos disponibles**: 300, 400, 600, 700, 900
- **Características**: Tracking ajustado, line-height optimizado

## Componentes Reutilizables Nuevos

### 1. Section Container
```css
.section-container {
  max-width: 6rem; /* 96rem = 1536px */
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 768px) {
  .section-container {
    padding: 0 2rem;
  }
}
```

### 2. Section Padding
```css
.section-padding {
  padding: 5rem 0; /* 80px */
}

.section-padding-large {
  padding: 7.5rem 0; /* 120px */
}

@media (max-width: 768px) {
  .section-padding {
    padding: 3rem 0; /* 48px */
  }
  
  .section-padding-large {
    padding: 4rem 0; /* 64px */
  }
}
```

### 3. Typography Scale
```css
/* Headings principales */
.heading-xl {
  font-size: 2.25rem; /* 36px */
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.heading-lg {
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  line-height: 1.2;
}

.heading-md {
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  line-height: 1.3;
}

/* Responsive typography */
@media (min-width: 768px) {
  .heading-xl {
    font-size: 3rem; /* 48px */
  }
  
  .heading-lg {
    font-size: 2.5rem; /* 40px */
  }
  
  .heading-md {
    font-size: 1.875rem; /* 30px */
  }
}

@media (min-width: 1024px) {
  .heading-xl {
    font-size: 3.75rem; /* 60px */
  }
  
  .heading-lg {
    font-size: 3rem; /* 48px */
  }
}
```

### 4. Card Base Component
```css
.card-base {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.card-base:hover {
  border-color: rgba(164, 118, 255, 0.3);
  box-shadow: 0 10px 40px rgba(164, 118, 255, 0.05);
  transform: translateY(-3px);
}

.card-padding {
  padding: 2rem;
}

.card-padding-sm {
  padding: 1.5rem;
}

@media (max-width: 768px) {
  .card-padding {
    padding: 1.5rem;
  }
  
  .card-padding-sm {
    padding: 1.25rem;
  }
}
```

### 5. Button System
```css
/* Base button */
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

/* Primary button */
.btn-primary {
  background: var(--sec);
  color: white;
}

.btn-primary:hover {
  background: #cbb2ff;
  transform: scale(1.02);
}

/* Secondary button */
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--sec);
}

/* Large button */
.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

/* Small button */
.btn-sm {
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
}
```

### 6. Grid System
```css
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.grid-4 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### 7. Icon System
```css
.icon-container {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.icon-primary {
  background: rgba(164, 118, 255, 0.1);
  color: var(--sec);
}

.icon-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
}

.icon-sm {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
}

.icon-lg {
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
}
```

### 8. Form Components
```css
.form-base {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  color: var(--white);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-base::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-base:focus {
  outline: none;
  border-color: var(--sec);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 3px rgba(164, 118, 255, 0.1);
}

.form-input {
  padding: 0.75rem 1rem;
}

.form-textarea {
  padding: 0.75rem 1rem;
  min-height: 120px;
  resize: vertical;
}

.form-select {
  padding: 0.75rem 1rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a476ff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  appearance: none;
}
```

### 9. Animation Utilities
```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.5s ease-out forwards;
}

/* Staggered animations */
.animate-stagger > *:nth-child(1) { animation-delay: 0.1s; }
.animate-stagger > *:nth-child(2) { animation-delay: 0.2s; }
.animate-stagger > *:nth-child(3) { animation-delay: 0.3s; }
.animate-stagger > *:nth-child(4) { animation-delay: 0.4s; }
```

### 10. Gradient Backgrounds
```css
.gradient-primary {
  background: linear-gradient(135deg, var(--sec) 0%, #5e4491 100%);
}

.gradient-secondary {
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--background) 100%);
}

.gradient-subtle {
  background: linear-gradient(135deg, 
    rgba(164, 118, 255, 0.05) 0%, 
    rgba(255, 255, 255, 0.02) 100%);
}

.gradient-border {
  position: relative;
  background: var(--card-bg);
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(135deg, var(--sec), transparent);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

## JavaScript Utilities

### 1. Intersection Observer para Animaciones
```javascript
// Animation on scroll
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}
```

### 2. Smooth Scroll personalizado
```javascript
function smoothScrollTo(element) {
  const targetPosition = element.offsetTop - 80;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function
    const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}
```

## Uso en el Proyecto

### HTML Class Combinations
```html
<!-- Card típico -->
<div class="card-base card-padding">
  <div class="icon-container icon-primary">
    🚀
  </div>
  <h3 class="heading-md text-white mb-3">Título</h3>
  <p class="text-gray-300">Descripción</p>
</div>

<!-- Sección típica -->
<section class="section-padding">
  <div class="section-container">
    <div class="text-center mb-16">
      <h2 class="heading-lg text-sec mb-6">Título Sección</h2>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto">Descripción</p>
    </div>
    
    <div class="grid-3 animate-stagger">
      <!-- Contenido -->
    </div>
  </div>
</section>

<!-- Botón típico -->
<a href="#contacto" class="btn-base btn-primary btn-lg">
  Call to Action
</a>
```

## Ventajas del Sistema

1. **Consistencia**: Todos los componentes siguen el mismo patrón
2. **Mantenibilidad**: Cambios centralizados en variables CSS
3. **Performance**: Clases reutilizables, menos CSS duplicado
4. **Responsive**: Todo optimizado para mobile-first
5. **Accesibilidad**: Estados de focus y contrast ratios correctos
6. **Escalabilidad**: Fácil agregar nuevos componentes siguiendo el patrón

## Próximos Pasos

1. Implementar estos componentes base en la nueva versión
2. Usar consistentemente en todas las fases
3. Testing cross-browser y responsive
4. Documentar variaciones para futuros desarrollos