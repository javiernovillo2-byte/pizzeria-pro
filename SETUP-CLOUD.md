# 🍕 Pizzería Pro - Guía de Configuración en la Nube

## ✨ Características Principales

✅ **Acceso desde cualquier dispositivo** (PC, tablet, móvil)  
✅ **Sincronización en tiempo real** entre dispositivos  
✅ **Almacenamiento en la nube** (Firebase)  
✅ **Autenticación segura** con email y contraseña  
✅ **Funciona sin internet** (offline-first)  
✅ **Datos encriptados** en tránsito y en reposo  
✅ **Respaldos automáticos**

---

## 🔧 Configuración (5 minutos)

### Paso 1: Crear proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Haz clic en **"Crear proyecto"**
3. Nombre del proyecto: `pizzeria-pro`
4. Selecciona tu país
5. Haz clic en **"Crear"**

### Paso 2: Activar Autenticación

1. En el menú lateral, ve a **"Autenticación"**
2. Haz clic en **"Comenzar"**
3. Selecciona **"Email/Contraseña"**
4. Actívalo (toggle en la derecha)
5. Guarda los cambios

### Paso 3: Crear Base de Datos

1. En el menú lateral, ve a **"Realtime Database"**
2. Haz clic en **"Crear base de datos"**
3. Selecciona tu ubicación (recomendado: América Central/Sur)
4. Modo seguridad: **"Comenzar en modo de prueba"**
5. Haz clic en **"Habilitar"**

### Paso 4: Reglas de Seguridad

1. Ve a **"Reglas"** en la base de datos
2. Reemplaza el contenido con esto:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        ".validate": "newData.hasChildren(['email', 'businessName', 'settings'])"
      }
    }
  }
}
```

3. Haz clic en **"Publicar"**

### Paso 5: Obtener Credenciales

1. Ve a **"Configuración del proyecto"** (engranaje arriba a la izquierda)
2. Ve a **"Mi aplicación"**
3. Haz clic en **"Web"** (</> icono)
4. Copia toda la configuración que aparece
5. Pégala en `firebase-config.js`

Debería verse así:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "pizzeria-pro-12345.firebaseapp.com",
    databaseURL: "https://pizzeria-pro-12345-default-rtdb.firebaseio.com",
    projectId: "pizzeria-pro-12345",
    storageBucket: "pizzeria-pro-12345.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};
```

---

## 🚀 Usando la App

### Primer Acceso

1. Abre `index.html` en tu navegador
2. Haz clic en **"Registrarse"**
3. Completa los datos:
   - Nombre del negocio
   - Email
   - Contraseña (mínimo 6 caracteres)
4. Haz clic en **"Crear Cuenta"**

### Desde Otros Dispositivos

1. Abre la misma URL en otro dispositivo
2. Inicia sesión con tu email y contraseña
3. Verás **inmediatamente** todos tus datos
4. Los cambios se sincronizan en **tiempo real**

---

## 📱 Acceder Desde Internet

### Opción 1: GitHub Pages (RECOMENDADO - GRATIS)

1. Tu repo ya está en GitHub
2. Ve a **Settings** → **Pages**
3. Selecciona `main` como rama
4. Tu app estará en:
   ```
   https://javiernovillo2-byte.github.io/pizzeria-pro
   ```

### Opción 2: Vercel (GRATIS, muy rápido)

1. Ve a [Vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Selecciona tu repo `pizzeria-pro`
4. Haz clic en **"Deploy"**
5. Tu app estará en: `https://pizzeria-pro-xxxx.vercel.app`

### Opción 3: Netlify (GRATIS)

1. Ve a [Netlify.com](https://netlify.com)
2. Haz clic en **"Deploy"**
3. Conecta GitHub
4. Selecciona tu repo
5. Tu app estará en línea

---

## 🔄 Sincronización en Tiempo Real

### Cómo funciona:

1. **Desde tu PC**: Registras un gasto
2. **Automáticamente**: Se guarda en la nube (Firebase)
3. **En tu teléfono**: Ves el gasto instantáneamente

### Indicador de sincronización:

- 🟢 **Verde**: Conectado y sincronizado
- 🔴 **Rojo**: Sin internet (guardado localmente)
- 📥 **Sincronizará** cuando recuperes conexión

---

## 💻 Funciones Principales

### 📋 Movimientos
- Registra ingresos y gastos
- Categorización automática
- Cálculo de IVA
- Filtros avanzados
- Exporta a CSV

### 🍕 Pizzas
- Carta de pizzas completa
- Cálculo de márgenes
- Ingredientes personalizados
- Precios por tamaño

### 📦 Inventario
- Control de stock
- Alertas de productos bajos
- Costo unitario
- Ajustes rápidos

### 📈 Análisis
- Ingresos vs Gastos
- Margen de ganancia
- Proyecciones mensuales
- Punto de equilibrio
- Desglose de gastos

### ⚙️ Configuración
- Datos del negocio
- Parámetros financieros
- Respaldos
- Cambio de contraseña

---

## 🔐 Seguridad

### Tus datos están protegidos:

✅ **Encriptación SSL/TLS** en tránsito  
✅ **Autenticación OAuth2** segura  
✅ **Base de datos** con reglas de acceso  
✅ **Backups automáticos** de Firebase  
✅ **Sin servidores propios** (sin riesgos)

### Contraseña segura:

- Mínimo 6 caracteres
- Usa letras, números y símbolos
- Nunca la compartas

---

## 📲 Acceder desde Teléfono

### iOS (iPhone/iPad):
1. Abre Safari
2. Ve a tu URL (GitHub Pages, Vercel, etc)
3. Haz clic en el ícono de compartir
4. Selecciona **"Añadir a pantalla de inicio"**
5. ¡App instalada como PWA!

### Android:
1. Abre Chrome
2. Ve a tu URL
3. Haz clic en el menú (tres puntos)
4. Selecciona **"Instalar app"**
5. ¡App instalada!

---

## ❓ Solución de Problemas

### "Error: Firebase no está configurado"
→ Verifica que `firebase-config.js` tenga las credenciales correctas

### "No veo los datos en otro dispositivo"
→ Asegúrate de:
- Estar conectado a internet
- Usar el mismo email
- Esperar 2-3 segundos a la sincronización

### "No me deja registrar"
→ Posibles causas:
- Email ya existe → Usa otro o recupera contraseña
- Contraseña muy débil → Usa 6+ caracteres
- Email inválido → Verifica el formato

### "Los datos no se guardan offline"
→ Eso es normal. Se guardará cuando recuperes conexión

---

## 📞 Soporte

Si tienes problemas:

1. Abre la **Consola del Navegador** (F12)
2. Ve a **Console**
3. Busca mensajes de error
4. Cópialos y comparte conmigo

---

## 🎯 Próximos Pasos

1. **Agrega usuarios** a tu equipo (múltiples empleados)
2. **Gráficas interactivas** para visualizar datos
3. **Reportes PDF** automáticos
4. **Integración con WhatsApp** para alertas
5. **Aplicación móvil nativa** (iOS/Android)

---

**¡Tu pizzería ahora está en la nube! 🚀**

Todos tus dispositivos sincronizados, datos seguros, acceso desde cualquier lugar.

