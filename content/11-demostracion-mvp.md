## 11. Demostración del Prototipo (MVP)

### Tech Stack del Prototipo

* **Infraestructura:**
    * DigitalOcean Droplets.
    * Imagen personalizada: *openSUSE Tumbleweed (qcow2)*.
* **Configuración y Despliegue:**
    * *cloud-init* para inicialización.
    * Scripts **Bash** y automatización con **crontabs**.
    * Seguridad vía **SSH** y módulos **PAM**.
* **Monitoreo:**
    * Panel de control de DigitalOcean.
    * Comandos nativos de Linux y herramientas de diagnóstico.
* **Documentación:** Markdown y referencias a *manpages*.

---

### Arquitectura de la Solución
[Arquitectura de la Solución](assets/diagrams/arquitectura-solucion.png)