## 4. Marco Teórico

## 1. Modelos de Servicio Cloud (NIST)

| Modelo | Control del Usuario | Responsabilidad Proveedor | Ejemplos |
|--------|---------------------|---------------------------|----------|
| **IaaS** | Sistemas operativos, almacenamiento, aplicaciones desplegadas | Infraestructura física | DigitalOcean Droplets, AWS EC2 |
| **PaaS** | Aplicaciones y datos | Plataforma de ejecución, runtime | Heroku, Google App Engine |
| **SaaS** | Uso de aplicación | Aplicación completa, infrastructura | Gmail, Office 365, Salesforce |

## 2. Modelos de Despliegue Cloud

| Tipo | Definición | Uso | Ejemplos |
|------|------------|-----|----------|
| **Nube Pública** | Infraestructura para uso abierto del público general | Multi-tenancy | AWS, Google Cloud, DigitalOcean |
| **Nube Privada** | Infraestructura para uso exclusivo de organización única | Single-tenancy | VMware vSphere, OpenStack |
| **Nube Híbrida** | Combinación de nubes interconectadas | Flexibilidad | AWS + On-premise |

---

## 3. Arquitecturas de CPU Comparadas

| Característica | x86 (CISC) | ARM (RISC) |
|----------------|-------------|------------|
| **Filosofía** | Complex Instruction Set Computer | Reduced Instruction Set Computer |
| **Enfoque** | Instrucciones complejas | Instrucciones simples |
| **Ciclos** | Múltiples ciclos por instrucción | Un ciclo por instrucción |
| **Dominio** | PCs, servidores | Móviles, embebidos, IoT |
| **Eficiencia** | Mayor consumo energético | Alta eficiencia energética |
| **Ejemplos** | Intel Core, AMD Ryzen | Apple M1/M2, Qualcomm Snapdragon |

## 4. Tipos de Hipervisores

| Característica | Tipo 1 (Bare-Metal) | Tipo 2 (Hosted) |
|----------------|---------------------|-----------------|
| **Ubicación** | Directo sobre hardware | Sobre SO anfitrión |
| **Rendimiento** | Superior | Con sobrecarga |
| **Seguridad** | Mayor | Menor |
| **Complejidad** | Alta | Baja |
| **Ejemplos** | VMware ESXi, Hyper-V | VMware Workstation, VirtualBox |
| **Uso típico** | Data centers, producción | Desarrollo, testing |

---

## 5. Comparativa VMware vs DigitalOcean

| Aspecto | VMware vSphere | DigitalOcean |
|---------|----------------|--------------|
| **Modelo** | On-premise | Cloud pública |
| **Costo** | Alto (licencias + hardware) | Bajo (pay-as-you-go) |
| **Escalabilidad** | Limitada por hardware | Elástica |
| **Tiempo deploy** | Horas | Minutos |
| **Mantenimiento** | Usuario | Proveedor |
| **Flexibilidad** | Baja | Alta |

## 6. Herramientas y Estándares Clave

| Herramienta | Tipo | Propósito | Uso en Proyecto |
|-------------|------|-----------|-----------------|
| **SSH** | Protocolo | Acceso remoto seguro | Conexión a Droplets |
| **POSIX** | Estándar | Compatibilidad sistemas Unix-like | Entorno homogéneo |
| **TAP** | Protocolo | Reporte resultados tests | Evaluación automática |
| **QCOW2** | Formato | Imágenes de disco virtual | Snapshots, templates |
| **OCI** | Estándar | Contenedores portables | Empaquetado aplicaciones |

---

## 7. Características Sandbox Académico

| Característica | Descripción | Beneficio Pedagógico |
|----------------|-------------|---------------------|
| **Aislamiento** | Entorno separado del sistema principal | Evita conflictos |
| **Homogeneidad** | Mismo entorno para todos | Equidad evaluación |
| **Efimeridad** | Vida corta, fácil recreación | Reinicio desde cero |
| **Restauración** | Snapshots instantáneos | Aprendizaje por error |
| **Accesibilidad** | Disponible desde cualquier dispositivo | Flexibilidad acceso |

## 8. Comparativa Costos (Resumen Anexo A)

| Parámetro | DigitalOcean | VMware vSphere |
|-----------|--------------|----------------|
| **Costo mínimo/mes** | $8 USD | ~$300 USD |
| **Mínimo compra** | 1 Droplet | 72 núcleos |
| **Modelo pago** | Por hora/mes | Licencia anual |
| **Costo hardware** | Incluido | Separado |
| **Flexibilidad** | Alta (escala por VM) | Baja (escala por host) |

---

## 9. Beneficios Sandbox vs Entorno Local

| Aspecto | Sandbox Cloud | Virtualización Local |
|---------|---------------|---------------------|
| **Compatibilidad** | ✅ Total (x86 nativo) | ❌ Problemas ARM/x86 |
| **Recursos** | ✅ Escalables | ❌ Limitados por hardware |
| **Backup** | ✅ Automático | ⚠️ Manual |
| **Colaboración** | ✅ Fácil compartir | ❌ Complejo |
| **Costo inicial** | ✅ Bajo | ❌ Alto (hardware) |

---

## 10. Protocolos de Comunicación

| Protocolo | Capa OSI | Uso | Estándar |
|-----------|----------|-----|----------|
| **SSH** | Aplicación | Acceso remoto seguro | RFC 4251-4254 |
| **SCP** | Aplicación | Transferencia archivos | Basado en SSH |
| **HTTP/HTTPS** | Aplicación | Web, APIs | RFC 2616, 2818 |
| **TCP/IP** | Transporte/Red | Comunicación confiable | RFC 793, 791 |

## 11. Formatos de Virtualización

| Formato | Tipo | Ventajas | Uso común |
|---------|------|----------|-----------|
| **QCOW2** | Imagen disco | Snapshots, compresión | QEMU/KVM |
| **VMDK** | Imagen disco | Compatibilidad VMware | VMware |
| **VHD/X** | Imagen disco | Compatibilidad Hyper-V | Microsoft |
| **RAW** | Imagen disco | Máximo rendimiento | Migraciones |
| **Docker** | Contenedor | Ligero, portable | Microservicios |

---

## 12. Niveles de Abstracción

| Nivel | Ejemplo | Control Usuario | Complejidad |
|-------|---------|-----------------|-------------|
| **Física** | Hardware | Total | Muy alta |
| **IaaS** | DigitalOcean | SO, aplicaciones | Media |
| **PaaS** | Heroku | Solo aplicación | Baja |
| **SaaS** | Gmail | Solo uso | Muy baja |
| **Contenedores** | Docker | Aplicación + dependencias | Media-baja |