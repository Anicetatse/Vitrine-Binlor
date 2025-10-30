# Vitrine Binlor 🌟

Site vitrine professionnel pour l'application Binlor - Solution de gestion scolaire moderne.

## ✨ Fonctionnalités

- 🎨 Design moderne et professionnel avec thème clair
- 📱 Responsive (mobile, tablette, desktop)
- ⚡ Animations et transitions fluides
- 🎯 Navigation intuitive avec menu mobile
- 📝 Formulaire de contact fonctionnel
- 🔍 SEO optimisé

## 📁 Structure

```
/
├── index.html              # Page d'accueil
├── services.html           # Page services
├── realisations.html       # Page réalisations
├── a-propos.html          # Page à propos
├── contact.html           # Page contact
├── styles/
│   └── main.css           # Styles principaux
├── scripts/
│   └── main.js            # JavaScript
└── assets/
    ├── logo.png           # Logo Binlor
    └── favicon.svg        # Favicon
```

## 🚀 Démarrage rapide

### Option 1: Ouverture directe
Ouvrez simplement `index.html` dans votre navigateur.

### Option 2: Serveur local
```bash
python3 -m http.server 8000
```
Puis rendez-vous sur `http://localhost:8000`

## 🌐 Déploiement avec DNS Zone Management

### Méthode 1: Hébergement standard (OVH, Cloudflare, etc.)

#### Étape 1: Préparer les fichiers
```bash
# Tous les fichiers sont déjà prêts à être uploadés
# Assurez-vous que la structure est :
# - index.html, services.html, etc. à la racine
# - Dossiers styles/, scripts/, assets/ à la racine
```

#### Étape 2: Configurer le DNS
Connectez-vous à votre panel DNS et ajoutez :

```
Type    Nom    Valeur (IP)        TTL
----    ----   ----------         ---
A       @      185.XXX.XXX.XXX    3600
A       www    185.XXX.XXX.XXX    3600
```

**Explication :**
- **Type A** : Point vers une adresse IP IPv4
- **Nom @** : Domaine principal (ex: binlor.com)
- **Nom www** : Sous-domaine www (ex: www.binlor.com)
- **Valeur** : IP de votre serveur/hébergement
- **TTL** : Temps de cache (3600 = 1 heure)

#### Étape 3: Uploader les fichiers
- Via **FTP/SFTP** :
  ```
  Host: ftp.votredomaine.com
  User: votre-identifiant
  Upload vers: public_html/ ou www/
  ```

- Via **cPanel** ou **Plesk** :
  - Accédez au Gestionnaire de fichiers
  - Naviguez vers `public_html/`
  - Uploadez tous les fichiers

#### Étape 4: Vérification
```bash
# Attendez 5-30 minutes pour la propagation DNS
# Puis testez :
curl -I https://votredomaine.com
```

### Méthode 2: Cloudflare Pages (Gratuit + DNS intégré)

#### Configuration Cloudflare
1. Créez un compte sur [Cloudflare](https://cloudflare.com)
2. Ajoutez votre domaine
3. Suivez la configuration DNS automatique
4. Allez dans **Pages** > **Créer un projet**
5. **Connectez GitHub** ou **Uploadez directement**
6. **Build settings :** Pas de build nécessaire
7. **Deploy !**

**DNS Cloudflare configuré automatiquement :**
```
Type      Nom    Valeur                    Proxy
----      ----   ------                    -----
CNAME     @      pages.dev                Oui
CNAME     www    pages.dev                Oui
```

### Méthode 3: Netlify (Le plus simple)

#### Via l'interface
1. Allez sur [netlify.com](https://netlify.com)
2. **Drag & drop** le dossier du projet
3. Site en ligne en 30 secondes !

#### Configuration DNS Netlify
Dans votre panel DNS, ajoutez :
```
Type    Nom    Valeur                           TTL
----    ----   ------                           ---
CNAME   @      your-site-name.netlify.app       3600
CNAME   www    your-site-name.netlify.app       3600
```

### Méthode 4: GitHub Pages + Domaine personnalisé

#### 1. Créer le repo
```bash
cd "Vitrine Binlor"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/binlor.git
git push -u origin main
```

#### 2. Activer GitHub Pages
- Repo > Settings > Pages
- Source: `main` branch
- Folder: `/ (root)`
- Save

#### 3. Configuration DNS
Dans votre panel DNS :
```
Type    Nom    Valeur                  TTL
----    ----   ------                  ---
A       @      185.199.108.153         3600
A       @      185.199.109.153         3600
A       @      185.199.110.153         3600
A       @      185.199.111.153         3600
CNAME   www    USERNAME.github.io      3600
```

#### 4. Ajouter le domaine personnalisé
**Chemin exact :**
1. GitHub.com > Votre repo
2. Onglet **Settings** (en haut du repo)
3. Menu de gauche : **Pages**
4. Section **Custom domain**
5. Tapez : `binlor.com` (sans http/https/www)
6. Cliquez **Save**
7. GitHub créera automatiquement un fichier `CNAME`

**Important :** Patientez 5-10 minutes après la création du CNAME pour que GitHub configure le domaine

### Méthode 5: Vercel (Rapide)

```bash
# Via CLI
npm install -g vercel
vercel --prod
```

Configuration DNS Vercel :
```
Type    Nom    Valeur
----    ----   ------
CNAME   @      cname.vercel-dns.com
```

## 🔒 Configuration HTTPS/SSL

### Cloudflare (Automatique)
- SSL/TLS mode : **Full (strict)**
- Gratuit et automatique

### Let's Encrypt (Sur hébergement)
```bash
sudo certbot --nginx -d binlor.com -d www.binlor.com
```

### Netlify/Vercel
- HTTPS activé automatiquement

## 📊 Exemples de configuration DNS

### OVH
```
Nom                  Type    Valeur            TTL    Priorité
----                 ----    ------            ---    --------
binlor.com           A       51.XXX.XXX.XXX    3600   -
www.binlor.com       A       51.XXX.XXX.XXX    3600   -
ftp.binlor.com       A       51.XXX.XXX.XXX    3600   -
```

### Cloudflare
```
Nom                  Type    Proxy  Valeur
----                 ----    -----  ------
@                    A       Oui    192.XXX.XXX.XXX
www                  CNAME   Oui    binlor.com
```

### Google Domains
```
Nom                  Type    Données              TTL
----                 ----    ------               ---
@                    A       185.XXX.XXX.XXX      3600
www                  CNAME   binlor.com.          3600
```

## ✅ Checklist de déploiement

- [ ] Fichiers uploadés à la racine du domaine
- [ ] DNS configuré (A ou CNAME)
- [ ] TTL défini (3600 recommandé)
- [ ] Propagation DNS attendue (jusqu'à 48h)
- [ ] HTTPS/SSL activé
- [ ] Test du site sur mobile
- [ ] Vérification de tous les liens
- [ ] Test du formulaire de contact
- [ ] Analytics configuré (optionnel)
- [ ] Google Search Console configuré (optionnel)

## 🐛 Résolution de problèmes DNS

### Le site ne s'affiche pas
```bash
# Vérifier le DNS
nslookup binlor.com
dig binlor.com

# Vider le cache DNS
# Windows:
ipconfig /flushdns

# Mac/Linux:
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

### Erreur 404
- Vérifiez que `index.html` est bien dans le dossier racine
- Vérifiez les permissions des fichiers (755 pour dossiers, 644 pour fichiers)

### HTTPS non fonctionnel
- Attendez 24h pour que Let's Encrypt se propage
- Vérifiez que le certificat SSL est valide
- Dans Cloudflare : SSL/TLS > Full

## 📞 Support

Pour toute question sur le déploiement, consultez :
- [Documentation Cloudflare](https://developers.cloudflare.com/pages/)
- [Documentation Netlify](https://docs.netlify.com/)
- [Documentation GitHub Pages](https://docs.github.com/en/pages)

## 📝 Notes importantes

- **Propagation DNS** : Peut prendre 5 minutes à 48 heures
- **HTTPS** : Recommandé pour tous les sites en production
- **Backup** : Gardez toujours une copie locale de vos fichiers
- **Performance** : Cloudflare offre un CDN gratuit pour accélérer le site

---

**Bon déploiement ! 🚀**

