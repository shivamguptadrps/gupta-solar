// ============================================================
//  Gupta Solar Energy — saara content yahan hai
//  Kuch bhi badalna ho to yahi file edit karein
// ============================================================

export const BUSINESS = {
  name: "Gupta Solar Energy",
  owner: "Ramnaresh Gupta",
  estd: 2012,
  phone: "8354809020",
  whatsapp: "918354809020",
  address: "Nazarbagh, V-Mart ke peechhe, Banda, Uttar Pradesh",
  mapsQuery: "Gupta+Solar+Energy+Nazarbagh+Banda",
  hours: "Som–Shani, subah 10 – shaam 7",
};

// ---- Calculator / system assumptions (apne hisaab se badlein) ----
export const CONFIG = {
  wattPerPanel: 500,      // 1 panel = 500W
  costPerKw: 65000,       // ₹ per kW (on-grid)
  unitRate: 8,            // ₹ per unit bijli
  genPerKwDay: 4,         // units per kW per day (UP avg)
  roofPerKw: 100,         // sq ft per kW
};

// ---- Subsidy (PM Surya Ghar + UPNEDA) ----
export function calcSubsidy(kw: number, isResidential: boolean, gridConnected: boolean) {
  if (!isResidential || !gridConnected) return { central: 0, state: 0, total: 0 };
  let central: number;
  if (kw < 1) central = 30000 * kw;
  else if (kw < 2) central = 30000 + 30000 * (kw - 1);
  else if (kw < 3) central = 60000 + 18000 * (kw - 2);
  else central = 78000;
  const state = Math.min(15000 * kw, 30000);
  return {
    central: Math.round(central),
    state: Math.round(state),
    total: Math.round(central + state),
  };
}

export const PACKAGES = [
  {
    kw: "1", title: "1 kW", price: "₹65,000", after: "≈ ₹20,000 subsidy ke baad",
    popular: false,
    points: ["₹800–1200 bill ke liye", "~100 sq ft chhat", "2 panel + inverter", "Net-meter help"],
  },
  {
    kw: "3", title: "3 kW", price: "₹1,96,000", after: "≈ ₹88,000 subsidy ke baad",
    popular: true,
    points: ["₹2000–3000 bill ke liye", "~300 sq ft chhat", "Bill lagbhag zero", "Max ₹1.08L subsidy"],
  },
  {
    kw: "5", title: "5 kW", price: "₹3,10,000", after: "≈ ₹2,02,000 subsidy ke baad",
    popular: false,
    points: ["Bade ghar / dukaan", "~500 sq ft chhat", "Zyada AC load", "Subsidy capped"],
  },
  {
    kw: "off", title: "Off-grid", price: "Poochhein", after: "Battery backup system",
    popular: false,
    points: ["Jahan light jaati hai", "Battery + inverter", "24×7 power backup", "Custom design"],
  },
];

export const SUBSIDY_TABLE = [
  { sys: "1 kW", central: "₹30,000", state: "₹15,000", total: "₹45,000" },
  { sys: "2 kW", central: "₹60,000", state: "₹30,000", total: "₹90,000" },
  { sys: "3 kW & above", central: "₹78,000", state: "₹30,000", total: "₹1,08,000" },
];

export const SYSTEM_TYPES = [
  {
    icon: "🔌", name: "On-Grid",
    best: "Sheher/kasbe ke liye — jahan light kam jaati hai",
    points: ["Battery nahi — sasta", "Subsidy milti hai (₹1.08L tak)", "Bill zero ho jaata hai", "Light jaane par band"],
    highlight: false,
  },
  {
    icon: "🔋", name: "Hybrid",
    best: "Best of both — bill bhi bache, backup bhi mile",
    points: ["Grid + battery dono", "Light jaane par bhi power", "Extra bijli grid ko, credit milta", "Thoda mehnga, sabse safe"],
    highlight: true,
  },
  {
    icon: "🏝️", name: "Off-Grid",
    best: "Gaon/khet — jahan grid hi nahi",
    points: ["Sirf battery pe chalta", "Grid ki zaroorat nahi", "24×7 apni bijli", "Subsidy nahi milti"],
    highlight: false,
  },
];

export const WHY_US = [
  { icon: "🛠️", title: "Poori installation", text: "On-grid ho ya off-grid — hum sirf panel bechte nahi, lagate, wiring karte aur chalu karke dete hain." },
  { icon: "📋", title: "Subsidy paperwork humara", text: "Net-metering, DISCOM approval aur PM Surya Ghar portal — sab confusing kaam hum sambhaalte hain." },
  { icon: "📍", title: "Yahi Banda mein", text: "Ek asli dukaan jahan aap aakar mil sakte hain — koi door ka call centre nahi. Service paas mein." },
  { icon: "🏅", title: "2012 se bharosa", text: "13+ saal ka anubhav. Banda district mein saikdon ghar aur dukaan humne solar se jode hain." },
];

// ---- Customer reviews (asli reviews aane par badal dein) ----
export const REVIEWS = [
  { name: "Rajesh Kumar", place: "Civil Lines, Banda", rating: 5, text: "3kW system lagwaya, bill 2800 se 200 pe aa gaya. Subsidy ka pura kaam inhone hi kiya. Bahut achhi service." },
  { name: "Sunita Devi", place: "Alha Ghat, Banda", rating: 5, text: "Gupta ji ne pure dhang se samjhaaya. Installation time pe hua aur team professional thi. Ab light jaane ka tension nahi (hybrid lagwaya)." },
  { name: "Mohammad Imran", place: "Naraini Road, Banda", rating: 5, text: "Apni dukaan pe 5kW lagwaya. Mahine ke hazaron rupaye bach rahe hain. Recommend karta hoon." },
  { name: "Anil Gupta", place: "Maheshwari Devi, Banda", rating: 4, text: "Daam theek-thaak hai aur kaam saaf. Net meter ka process thoda lamba tha par inhone follow up karke karwaya." },
  { name: "Pooja Tiwari", place: "Khapraila, Banda", rating: 5, text: "Ghar ki chhat pe solar lagwane ka socha to inse mile. Free survey kiya, sab clear bataya. Koi chhupa charge nahi." },
  { name: "Ramesh Yadav", place: "Atarra, Banda", rating: 5, text: "Khet ke liye off-grid system liya. Motor ab solar se chalti hai, diesel ka kharch khatam. Bahut faayda hua." },
];

// ---- Project gallery (asli photos /public/projects mein daalein) ----
export const PROJECTS = [
  { title: "3 kW Residential", place: "Civil Lines, Banda", kw: "3 kW", type: "On-grid", color: "#0e5c8a" },
  { title: "5 kW Shop Rooftop", place: "Nazarbagh Market", kw: "5 kW", type: "On-grid", color: "#e8820e" },
  { title: "2 kW Home System", place: "Alha Ghat", kw: "2 kW", type: "Hybrid", color: "#2e7d4f" },
  { title: "10 kW Commercial", place: "Naraini Road", kw: "10 kW", type: "On-grid", color: "#7a3b9c" },
  { title: "Off-grid Farm", place: "Atarra", kw: "3 kW", type: "Off-grid", color: "#c0392b" },
  { title: "3 kW Residential", place: "Khapraila", kw: "3 kW", type: "On-grid", color: "#16877a" },
];

export const FAQ = [
  { q: "Subsidy ka paisa kab milta hai?", a: "Installation aur net-meter lagne ke baad, lagbhag 30-45 din mein subsidy seedhe aapke bank account mein DBT se aati hai." },
  { q: "Kitni chhat chahiye?", a: "Har 1 kW ke liye lagbhag 100 sq ft chaaya-rahit (shade-free) chhat chahiye. 3 kW ke liye ~300 sq ft." },
  { q: "On-grid mein light jaane par chalega?", a: "Nahi, simple on-grid grid ke saath band ho jaata hai. Agar backup chahiye to Hybrid system lein — usme battery hoti hai." },
  { q: "Panel kitne saal chalte hain?", a: "Solar panel 25+ saal chalte hain aur unpe 25 saal tak ki performance warranty hoti hai. Inverter par alag warranty." },
  { q: "EMI ki suvidha hai?", a: "Haan, PM Surya Ghar ke tahat SBI jaise banks solar loan dete hain. Hum aapko process samjha denge." },
];
