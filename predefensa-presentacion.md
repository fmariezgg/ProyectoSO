# Prototipo Sandbox IaaS para Sistemas Operativos UAM

**Universidad Americana**
**Asignatura: Sistemas Operativos - Grupo 7**

---

## Agenda de la Presentación

1. El Panorama: El desafío actual
2. La Solución: Nuestra propuesta técnica
3. La Demostración: Prototipo en acción
4. El Camino a Seguir: Próximos pasos

---

## El Desafío Actual: Fragmentación Técnica

**Problemas identificados en el diagnóstico estudiantil:**

- **83%** usa Windows como SO principal
- **50%** reporta baja comodidad con otros sistemas
- **33%** califica Sistemas Operativos como "Muy Difícil" para configurar entornos
- **50%** ha dañado su sistema por mala configuración
- **67%** recurre a "soluciones alternativas" (incluyendo piratería)

---

## La Raíz del Problema: Tres Disrupciones Tecnológicas

1. **Barrera ARM/x86** - Apple Silicon vs PCs tradicionales
2. **Cambio en licenciamiento VMware** - Eliminación de licencias gratuitas post-Broadcom
3. **Heterogeneidad de hardware** - Recursos computacionales desiguales entre estudiantes

---

## Consecuencias Académicas Críticas

- **Desigualdad en el aprendizaje** - No todos pueden ejecutar las mismas prácticas
- **Evaluación no equitativa** - Diferentes condiciones técnicas entre estudiantes
- **Pérdida de tiempo valioso** - Configuración vs. Aprendizaje
- **Frustración estudiantil** - Barreras técnicas insalvables

---

## Nuestra Propuesta: Sandbox en la Nube

**Prototipo de entorno virtualizado estandarizado basado en IaaS**

- **Acceso universal** - Desde cualquier dispositivo con internet
- **Arquitectura homogénea** - Mismo entorno para todos (x86-64)
- **Bajo costo** - Droplets desde $4-8 USD/mes
- **Recuperable** - Restauración instantánea ante errores

---

## Arquitectura de la Solución
[![Diagrama de Arquitectura - Sandbox Académico]](assets/diagrams/arquitectura-sandbox.png)

**Haz clic en el diagrama para ver la versión completa**

### Componentes Principales:
- **Infraestructura Cloud**: Droplet DigitalOcean (openSUSE x86-64)
- **Servicios Académicos**: Flask App, Docker Compose, WireGuard VPN
- **Plataforma Ejercicios**: Exercism CLI integrado
- **Sistema Testing**: BATS-core + TAP para validación automática
- **Feedback Continuo**: MOTD dinámico y sistema de aliases

---

## Ventajas Clave del Enfoque IaaS

**Resuelve la incompatibilidad ARM/x86**
- Ejecución nativa x86 en servidores de DigitalOcean
- Cero emulación, máximo rendimiento

**Elimina barreras económicas**
- Costos predecibles vs licenciamiento VMware
- Escalabilidad bajo demanda

**Democratiza el acceso**
- Mismas condiciones técnicas para todos
- Independiente del hardware personal

---

## Demostración: Flujo de Trabajo del Estudiante

1. **Acceso** - SSH con credenciales proporcionadas
2. **Entorno** - openSUSE Leap preconfigurado
3. **Prácticas** - Scripts Bash y crontabs listos
4. **Experimentación** - Sandbox aislado y seguro
5. **Recuperación** - Restauración si es necesario

---

## Transición a DigitalOcean: Viabilidad Técnica

**De prototipo local a PoC en producción:**

- Scripts Bash existentes → **User Data** de Droplets
- Directorios home → **Volúmenes persistentes**
- Acceso manual → **Automatización completa**
- Servidor único → **Escalabilidad bajo demanda**

**Tiempo de despliegue: 2-5 minutos vs horas en VMware**

---

## Análisis Comparativo: DigitalOcean vs VMware

**DigitalOcean:**
- Onboarding: 2-5 minutos
- Costo: $8-96 USD/mes (según necesidades)
- Escalabilidad: Bajo demanda
- Licenciamiento: Simple y predecible

**VMware post-Broadcom:**
- Onboarding: 2+ horas
- Costo: $3,600+ USD/año (mínimo 72 núcleos)
- Escalabilidad: Rígida y costosa
- Complejidad: Alta para entorno académico

---

## Validación del Concepto: Resultados del Diagnóstico

**Recepción estudiantil de la propuesta sandbox:**

- **67%** - "Sí, definitivamente" interesado
- **33%** - "Tal vez" interesado
- **0%** - Rechazo a la propuesta

**Beneficios más valorados:**
- No-instalación local (83%)
- Capacidad de restauración (50%)
- Facilidad de colaboración (50%)

---

## Implementación del Prototipo

**Estado actual:**
- Scripts Bash funcionales para gestión de usuarios
- Estructura de directorios y READMEs
- Pruebas iniciales con openSUSE Leap

**Próxima fase (PoC DigitalOcean):**
- Migración de scripts a user-data
- Configuración de automatización
- Pruebas de carga y latencia
- Validación con grupo piloto

---

## Métricas de Éxito y Validación

**Indicadores técnicos:**
- Tiempo de provisionamiento < 5 minutos
- Latencia SSH < 150ms para América Latina
- Disponibilidad > 99.5%
- Compatibilidad 100% con prácticas requeridas

**Indicadores pedagógicos:**
- Reducción tiempo configuración > 80%
- Uniformidad en evaluación práctica
- Mejora en satisfacción estudiantil

---

## Hoja de Ruta y Próximos Pasos

**Fase 1 (PoC Inmediata)**
- Configurar entorno en DigitalOcean
- Adaptar scripts existentes
- Prueba piloto con Grupo 7

**Fase 2 (Escalamiento)**
- Interfaz web de gestión
- Sistema de autenticación
- Dashboard de monitoreo

**Fase 3 (Producción)**
- Despliegue para toda la asignatura
- Integración con plataforma institucional

---

## Costo-Beneficio para el Contexto Académico

**Inversión requerida:**
- Droplets: $8-32 USD/mes por estudiante/grupo
- Tiempo desarrollo: 2-3 semanas
- Créditos educativos disponibles

**Beneficios obtenidos:**
- Eliminación barreras técnicas
- Uniformidad en prácticas
- Mejora experiencia aprendizaje
- Escalabilidad para futuros cursos

---

## Conclusiones y Llamado a la Acción

**El prototipo demuestra que:**
- Es técnicamente viable migrar a IaaS
- Resuelve problemas reales de estudiantes
- Es económicamente sostenible
- Alinea con tendencias industry (cloud-first)

**Solicitud de aprobación para:**
- Configurar PoC en DigitalOcean
- Asignar recursos para pruebas piloto
- Validar formalmente con Grupo 7

---

## Q&A

**Preguntas y Respuestas**

*Contacto: [Tu información de contacto]*

---

## ¡Gracias!

**Universidad Americana**  
**Sistemas Operativos - Grupo 7**
**Prototipo Sandbox IaaS**