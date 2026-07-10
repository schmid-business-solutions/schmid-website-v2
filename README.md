# ivanschmid.com

Astro-Projekt für die persönliche Website von Ivan Schmid (Schmid³ Business Solutions).

## Lokal entwickeln

```sh
npm install
npm run dev
```

Dev-Server läuft unter `http://localhost:4321`.

## Deployment

Hostinger liest den Ordner `public/` direkt aus diesem Git-Repository (kein Node-Build auf dem Server).
`public/` wird deshalb **nicht von Hand** bearbeitet, sondern automatisch aus den Astro-Quellen
(`src/pages/index.astro`, `src/components/`) erzeugt:

1. Änderungen an `src/` auf `main` pushen.
2. GitHub Action (`.github/workflows/build-deploy.yml`) führt `npm run build` aus, das Ergebnis landet
   direkt in `public/` (siehe `astro.config.mjs`: `outDir: './public'`).
3. Die Action committet den aktualisierten `public/`-Ordner automatisch zurück auf `main`.
4. Hostinger zieht den neuen Stand von GitHub (automatisch oder manuell im hPanel unter "Git").

Statische Rohassets (Bilder, Favicon) liegen in `static-src/` (Astros `publicDir`), nicht in `public/`.

**Wichtig:** Damit Schritt 3 funktioniert, muss unter GitHub → Settings → Actions → General →
"Workflow permissions" die Option "Read and write permissions" aktiviert sein.

## Kontaktformular

`src/components/ContactForm.astro` versendet Anfragen über [EmailJS](https://www.emailjs.com)
(Service `service_ivanschmid`, Template `template_ivanschmid`) an office@ivanschmid.com.
