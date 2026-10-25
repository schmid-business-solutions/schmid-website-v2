# ivanschmid.com – Weiterleitung

Die frühere Website ivanschmid.com wurde eingestellt. Die Domain leitet dauerhaft (301) auf
**https://www.schmidbusiness.ch** weiter (Repo `schmid-business-solutions/schmidbusiness.ch`).

| Alte Adresse | Neues Ziel |
| --- | --- |
| `/impressum/` | `https://www.schmidbusiness.ch/impressum/` |
| `/datenschutz/` | `https://www.schmidbusiness.ch/datenschutz/` |
| `/agb/` | `https://www.schmidbusiness.ch/agb/` |
| alles andere | `https://www.schmidbusiness.ch/` |

- `public/.htaccess` – serverseitige 301-Weiterleitung (Apache/LiteSpeed)
- `src/pages/*` – Fallback-Seiten mit Meta-Refresh und JavaScript, falls der Server keine `.htaccess` auswertet

Die alte Website ist in der Git-Historie erhalten (letzter Stand: Commit `9122205`).
