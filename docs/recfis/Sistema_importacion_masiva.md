# Sistema de Importación Masiva - Campanello

## Descripción General

El sistema de importación masiva permite cargar boletas de forma automática desde archivos Excel (.xlsx, .xls) con opciones avanzadas de configuración y trazabilidad completa.

## Características Principales

### ✅ **Importación Inteligente**
- Procesamiento de archivos Excel con validación automática
- Filtrado inteligente de filas vacías o incompletas
- Cálculo automático de importes según configuración del sistema
- Mapeo automático de campos desde Excel a base de datos

### ✅ **Opciones de Configuración**
- **Oficial**: Asignación opcional de oficial a todas las boletas importadas
- **Impuesto**: Selección opcional de tipo de impuesto (si no se selecciona, queda null)
- **Etapa**: Asignación opcional de etapa del proceso (si no se selecciona, no se crea EtapaBoleta)
- **Demandante**: Campo personalizable con valor por defecto "CAMPANELLO CARLOS ALBERTO"

### ✅ **Auditoría y Trazabilidad**
- Registro completo de cada importación en tabla `importaciones_masivas`
- Detalle de cada boleta procesada en tabla `importaciones_detalles`
- Estadísticas en tiempo real: total procesadas, errores, tiempo
- Historial completo con fechas y usuarios

### ✅ **Sistema de Reversión**
- Capacidad de revertir importaciones completas
- Eliminación segura de boletas, importes y etapas relacionadas
- Validaciones antes de revertir para evitar pérdida de datos
- Registro de quién y cuándo revirtió cada importación

## Estructura de Archivos Excel

### Formato Esperado
El archivo Excel debe tener las siguientes columnas en orden:

| Columna | Descripción | Campo BD | Validación |
|---------|-------------|----------|------------|
| A | BOLETA | numero | Requerido |
| B | CUIT | nro_doc | Requerido, máx 13 chars |
| C | NOMBRE DEMANDADO | nombre | Requerido, máx 40 chars |
| D | DOMINIO | cauoim | Máx 15 chars |
| E | DIRECCIÓN | caudir | Construido con CALLE+PUERTA+MZ_CASA+PISO+DPTO_OFIC |
| F | MONTO | monto | Requerido, numérico |
| G | IMP | idImpuesto | Solo si no se selecciona impuesto manualmente |

### Validaciones Automáticas
- **Filas vacías**: Se filtran automáticamente
- **Campos obligatorios**: BOLETA, CUIT, NOMBRE, MONTO
- **Longitud de campos**: Truncado automático según límites de BD
- **Duplicados**: Verificación de números de boleta existentes

## Rutas y Endpoints

### Principales
```php
// Formulario principal de importación
GET /admin/importacion-masiva

// Procesamiento de archivo
POST /admin/importacion-masiva/procesar

// Historial de importaciones
GET /admin/importacion-masiva/historial

// Reversión de importación
POST /admin/importacion-masiva/revertir/{id}

// Detalles de importación específica
GET /admin/importacion-masiva/detalles/{id}
```

## Base de Datos

### Tabla: `importaciones_masivas`
```sql
CREATE TABLE importaciones_masivas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    archivo_nombre VARCHAR(255),
    fecha_importacion TIMESTAMP,
    total_filas INT,
    procesadas INT,
    omitidas INT,
    errores INT,
    tiempo_procesamiento DECIMAL(8,2),
    estado ENUM('completada', 'revertida'),
    fecha_reversion TIMESTAMP NULL,
    usuario_reversion_id INT NULL,
    oficial_asignado_id INT NULL,
    impuesto_forzado_id INT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

### Tabla: `importaciones_detalles`
```sql
CREATE TABLE importaciones_detalles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    importacion_id INT,
    numero_boleta VARCHAR(50),
    estado ENUM('creada', 'error'),
    mensaje TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

## Controlador Principal

### `ImportacionMasivaController`

#### Métodos Principales

**`index()`**
- Muestra formulario de importación
- Carga listas de oficiales, impuestos y etapas
- Inicializa componentes Select2

**`procesar(Request $request)`**
- Valida archivo y parámetros
- Procesa Excel línea por línea
- Crea boletas, importes y etapas
- Genera estadísticas y logs

**`historial()`**
- Lista todas las importaciones realizadas
- Muestra estadísticas y opciones de reversión
- DataTable con paginación server-side

**`revertir($id)`**
- Elimina boletas y datos relacionados
- Actualiza estado de importación
- Registra usuario que revierte

**`detalles($id)`**
- Muestra detalle de boletas procesadas
- Lista errores y éxitos por separado

## Flujo de Procesamiento

### 1. **Carga de Archivo**
```
Usuario selecciona archivo Excel → Validación formato → Subida temporal
```

### 2. **Configuración Opcional**
```
Selección Oficial → Selección Impuesto → Selección Etapa → Campo Demandante
```

### 3. **Procesamiento**
```
Lectura Excel → Filtrado filas → Validación datos → Creación registros
```

### 4. **Creación de Registros**
```php
// Por cada fila válida:
Boleta::create() → Importe::create() → EtapaBoleta::create() (opcional)
```

### 5. **Auditoría**
```
Registro en importaciones_masivas → Detalles en importaciones_detalles
```

## Configuración del Sistema

### Variables Requeridas
```php
// Tabla configs - porcentajes para cálculo de importes
$config->imphma  // Porcentaje honorarios matrícula
$config->imphpa  // Porcentaje honorarios profesionales
$config->imphof  // Porcentaje honorarios oficiales
$config->imphmr  // Porcentaje honorarios matrícula revisión
```

### Validaciones
```php
'archivo' => 'required|file|mimes:xlsx,xls|max:10240',
'codigoEtapa' => 'nullable|string',
'idOficial' => 'nullable|integer',
'idImpuesto' => 'nullable|integer'
```

## Interfaz de Usuario

### Formulario Principal
- **Select2** para Oficial, Impuesto y Etapa
- **Drag & Drop** para archivo Excel
- **Progress Bar** durante procesamiento
- **Estadísticas en tiempo real**

### Historial
- **DataTable** con paginación
- **Botones de acción** (Ver detalles, Revertir)
- **Filtros** por fecha y estado
- **Estadísticas por importación**

### Estilos CSS Personalizados
- **Hover effects** mejorados para botones
- **Animaciones** sutiles (pulse effect)
- **Temas**: Compatible con light.css y dark.css
- **Resplandor** en botones al hover

## Seguridad

### Validaciones
- **CSRF Protection** en todos los formularios
- **Validación de tipos de archivo** (solo Excel)
- **Límite de tamaño** (10MB máximo)
- **Sanitización** de datos de entrada

### Permisos
- **Autenticación requerida** para todas las rutas
- **Logs** de todas las acciones realizadas
- **Auditoría** de reversiones con usuario responsable

## Manejo de Errores

### Durante Importación
```php
try {
    // Procesamiento de fila
} catch (\Exception $e) {
    // Log del error específico
    // Continúa con siguiente fila
    // Incrementa contador de errores
}
```

### Logs Detallados
- **Archivo de log** por importación
- **Permisos 666** para escritura
- **Errores específicos** por fila
- **Stack trace** completo en logs

## Rendimiento

### Optimizaciones
- **Transacciones BD** para consistencia
- **Procesamiento por lotes** eficiente
- **Filtrado previo** de filas vacías
- **Índices** en tablas relacionadas

### Límites
- **Máximo 10MB** por archivo
- **Timeout 120 segundos** por defecto
- **Memoria**: Optimizado para archivos grandes

## Mantenimiento

### Comandos Útiles
```bash
# Limpiar logs antiguos
find storage/logs/import_* -mtime +30 -delete

# Verificar integridad de importaciones
php artisan tinker --execute="ImportacionMasiva::with('detalles')->get()"

# Estadísticas generales
php artisan tinker --execute="ImportacionMasiva::selectRaw('COUNT(*) as total, SUM(procesadas) as boletas')->first()"
```

### Troubleshooting
1. **Error de permisos**: Verificar permisos en `storage/logs/`
2. **Timeout**: Aumentar `max_execution_time` en PHP
3. **Memoria**: Incrementar `memory_limit` para archivos grandes

## Versionado

**Versión**: 1.2.0  
**Fecha**: Julio 2025  
**Autor**: Claude Code Assistant  
**Compatibilidad**: Laravel 9.x, PHP 8.0+

### Changelog
- **v1.2.0**: Sistema completo con reversión y auditoría
- **v1.1.0**: Agregadas opciones de configuración avanzada  
- **v1.0.0**: Importación básica funcional

---

*Documentación actualizada: Julio 30, 2025*