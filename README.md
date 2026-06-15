# Gupta Solar Energy — Website (Next.js)

Banda ki solar dukaan ke liye poori website + 3D solar designer.
Ye ek **Next.js** application hai jo aapke computer pe chalti hai.

---

## 🖥️ Apne computer pe kaise chalayein (step-by-step)

### Step 1 — Node.js install karein (sirf ek baar)
Agar aapke computer pe Node.js nahi hai, to:
1. https://nodejs.org pe jaayein
2. **LTS** version download karke install karein (Next, Next, Finish)

Check karne ke liye, Command Prompt / Terminal kholkar likhein:
```
node --version
```
Agar version dikhe (jaise v20.x) to ho gaya.

### Step 2 — Project folder kholें
Command Prompt / Terminal mein is folder tak jaayein:
```
cd path/to/gupta-solar
```
(jahan ye folder rakha hai)

### Step 3 — Ek baar packages install karein
```
npm install
```
(Internet chahiye. Pehli baar 1-2 minute lagega.)

### Step 4 — Website chalayein
```
npm run dev
```
Ab browser mein kholें: **http://localhost:3000**

Website chal padegi! 🎉
3D designer dekhne ke liye: **http://localhost:3000/designer**

Band karne ke liye terminal mein `Ctrl + C` dabayein.

---

## 📝 Content kaise badlein

Sab content ek hi file mein hai, aasaan se edit karein:
```
src/lib/data.ts
```
Ismein hai:
- **BUSINESS** — naam, phone, address, time
- **CONFIG** — calculator ke rate (₹/unit, cost/kW) — apne hisaab se badlein
- **PACKAGES** — package ke daam
- **REVIEWS** — customer reviews (asli aane par badal dein)
- **PROJECTS** — apne kaam ki list
- **FAQ** — sawaal-jawaab

Badalne ke baad file save karein — website apne aap update ho jaati hai.

---

## 📸 Asli project photos kaise lagayein

1. Apni installation ki photos `public/projects/` folder mein daalein
   (jaise `project1.jpg`, `project2.jpg`)
2. `src/components/Projects.tsx` mein `<PanelArt />` ki jagah
   `<img src="/projects/project1.jpg" />` laga dein

(Abhi placeholder graphics lage hain — wo bhi achhe dikhte hain.)

---

## 🌐 Internet pe live kaise karein (free)

Sabse aasaan tarika — **Vercel** (Next.js banane waalon ka, free):
1. https://vercel.com pe account banayein (GitHub se)
2. Ye project upload karein
3. "Deploy" dabayein — 2 minute mein aapki website live!
4. Ek domain (jaise guptasolar.in) ~₹700/saal mein le sakte hain

---

## 📂 Kya-kya hai is project mein

```
src/
  app/
    page.tsx           → Home page
    designer/page.tsx  → 3D designer page
    layout.tsx         → Overall setup
    globals.css        → Saari styling
  components/
    Hero.tsx           → Upar ka hissa + calculator
    Sections.tsx       → How-it-works, packages, subsidy, why, FAQ
    Projects.tsx       → Aapke kaam ki gallery
    Reviews.tsx        → Customer reviews
    Contact.tsx        → Sampark + WhatsApp form
    House3D.tsx        → 3D ghar (Three.js)
    DesignerClient.tsx → 3D designer ke controls
    Navbar.tsx, Footer.tsx
  lib/
    data.ts            → SAARA CONTENT yahan (yahi edit karein)
```

---

## ✅ Features

- ☀️ Solar bachat calculator (bill ya chhat se)
- 🏠 3D ghar — rotate karke panel lagते dekhein
- 💬 WhatsApp pe seedha lead (8354809020 pe)
- 📦 Standard packages with daam
- 🏛️ PM Surya Ghar + UPNEDA subsidy (sahi UP numbers)
- ⭐ Customer reviews
- 🖼️ Project gallery
- ❓ FAQ
- 📱 Mobile pe bhi achhi dikhti hai

Koi dikkat ho to bata dijiyega!
