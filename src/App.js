import { useState, useEffect, useRef } from "react";

// ─── COMPLETE PORTFOLIO DATA ───────────────────────────────────────────────────
// 541 Palace Road removed — no longer owned (as of March 2026)

const PORTFOLIO = [
  {
    id: "787-downing",
    address: "787 Downing",
    bank: "TD", account: "6356270",
    email: "787downing@gmail.com",
    ownership: "AwesomeJVDeals & Marshall",
    owned: true, type: "duplex",
    tenants: [
      { id: "vikki", unit: "Unit 1", name: "Vikki Langelier", email: "vikkimed@outlook.com", rent: 2250, flags: [], depositType: "auto",
        payments: { "Jan 2026": 2250, "Feb 2026": 2250, "Mar 2026": 2250, "Apr 2026": 2250 } },
      { id: "micheal", unit: "Unit 2", name: "Micheal", email: "", rent: 1875, flags: [], depositType: "auto",
        payments: { "Jan 2026": 1875, "Feb 2026": 1875, "Mar 2026": 1875, "Apr 2026": 1875 } },
    ]
  },
  {
    id: "913-uxbridge",
    address: "913 Uxbridge",
    bank: "TD", account: "6491618",
    email: "913uxbridgecrescent@gmail.com",
    ownership: "AwesomeJVDeals & Marshall",
    owned: true, type: "duplex",
    tenants: [
      { id: "tyson", unit: "Unit 1", name: "Tyson", email: "", rent: 1800, flags: [], depositType: "auto",
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800, "Apr 2026": 1800 } },
      { id: "tj", unit: "Unit 2", name: "TJ", email: "", rent: 1800, flags: ["Deposit Cheque"], depositType: "cheque",
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800, "Apr 2026": 1800 } },
    ]
  },
  {
    id: "661-milford",
    address: "661 Milford",
    bank: "CIBC", account: "6699006",
    email: "661milforddrive@gmail.com",
    ownership: "Altaray Property & Waxwing",
    owned: true, type: "duplex",
    tenants: [
      { id: "sue", unit: "Unit 1", name: "Sue Hadley", email: "", rent: 2300, flags: [], depositType: "auto",
        payments: { "Jan 2026": 2300, "Feb 2026": 2300, "Mar 2026": 2300, "Apr 2026": 2300 } },
      { id: "dwaine", unit: "Unit 2", name: "Dwaine Archer", email: "", rent: 2101.25, flags: [], depositType: "auto",
        payments: { "Jan 2026": 2101.32, "Feb 2026": 2101.32, "Mar 2026": 2101.25, "Apr 2026": 2101.25 } },
    ]
  },
  {
    id: "30-barbara",
    address: "30 Barbara",
    bank: "TD", account: "6356149",
    email: "30barbarave@gmail.com",
    ownership: "AwesomeJVDeals & Sal",
    owned: true, type: "duplex",
    tenants: [
      { id: "lovpreet", unit: "Unit 1", name: "Lovpreet Kaur", email: "", rent: 2100, flags: [], depositType: "auto",
        payments: { "Jan 2026": 2100, "Feb 2026": 2100, "Mar 2026": 2100 } },
      { id: "amarjeet", unit: "Unit 2", name: "Amarjeet Singh", email: "", rent: 1800, flags: [], depositType: "auto",
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800, "Apr 2026": 1800 } },
    ]
  },
  {
    id: "232-van-order",
    address: "232 Van Order",
    bank: "CIBC", account: "4096215",
    email: "232Vanorder@gmail.com",
    ownership: "1000203074 Ontario Inc.",
    owned: true, type: "duplex",
    tenants: [
      { id: "andrew-r", unit: "Unit 1", name: "Andrew Reynolds", email: "", rent: 2200, flags: [], depositType: "auto",
        payments: { "Jan 2026": 2200, "Feb 2026": 2200, "Mar 2026": 2200, "Apr 2026": 2200 } },
      { id: "robert", unit: "Unit 2", name: "Robert Howick", email: "", rent: 2100, flags: ["⚠ Partial Feb"], depositType: "auto",
        payments: { "Jan 2026": 2100, "Feb 2026": 1050, "Mar 2026": 2100, "Apr 2026": 2100 },
        notes: { "Feb 2026": "Partial — paid $1,050 of $2,100" } },
    ]
  },
  {
    id: "32-holland",
    address: "32 Holland Cres",
    bank: "CIBC", account: "4096215",
    email: "32hollandcres@gmail.com",
    ownership: "1000203074 Ontario Inc.",
    owned: true, type: "duplex",
    tenants: [
      { id: "brianna", unit: "Unit 1", name: "Brianna", email: "", rent: 900, flags: ["Always Late"], depositType: "auto",
        payments: {} },
      { id: "shannon", unit: "Unit 2", name: "Shannon", email: "", rent: 900, flags: [], depositType: "auto",
        payments: { "Jan 2026": 900, "Feb 2026": 900, "Mar 2026": 900, "Apr 2026": 900 } },
      { id: "michelle", unit: "Unit 2b", name: "Michelle McDonell", email: "", rent: 900, flags: [], depositType: "auto",
        payments: { "Jan 2026": 900, "Feb 2026": 900, "Mar 2026": 900, "Apr 2026": 900 } },
    ]
  },
  {
    id: "43-ruskin",
    address: "43 Ruskin",
    bank: "CIBC", account: "4091418",
    email: "43ruskinstreet@gmail.com",
    ownership: "2771051 Ontario Inc.",
    owned: true, type: "duplex",
    tenants: [
      { id: "molly", unit: "Unit 1", name: "Molly Brant", email: "", rent: 2000, flags: ["Check Bank Acc"], depositType: "auto",
        payments: { "Jan 2026": 2000, "Feb 2026": 2000, "Mar 2026": 2000, "Apr 2026": 2000 } },
      { id: "candice", unit: "Unit 2", name: "Candice", email: "", rent: 1486.25, flags: ["Check Bank Acc"], depositType: "auto",
        payments: { "Jan 2026": 1486.25, "Feb 2026": 1486.25, "Mar 2026": 1486.25, "Apr 2026": 1486.25 } },
    ]
  },
  {
    id: "401-southwood",
    address: "401 Southwood",
    bank: "CIBC", account: "4091418",
    email: "401southwood@gmail.com",
    ownership: "2771051 Ontario Inc.",
    owned: true, type: "duplex",
    tenants: [
      { id: "gabriela", unit: "Unit 1", name: "Gabriela Storring", email: "", rent: 2350, flags: [], depositType: "auto",
        payments: { "Jan 2026": 2350, "Feb 2026": 2350, "Mar 2026": 2350, "Apr 2026": 2350 } },
      { id: "mike-h", unit: "Unit 2", name: "Mike Harnden", email: "", rent: 1800, flags: [], depositType: "auto",
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800, "Apr 2026": 1800 } },
    ]
  },
  {
    id: "164-kirkpatrick",
    address: "164 Kirkpatrick",
    bank: "CIBC", account: "4091418",
    email: "164kirkpatrick@gmail.com",
    ownership: "2771051 Ontario Inc.",
    owned: true, type: "duplex",
    tenants: [
      { id: "farzia", unit: "Unit 1", name: "Farzia", email: "", rent: 2100, flags: ["Email Sent"], depositType: "auto",
        payments: { "Jan 2026": 2100, "Feb 2026": 2100, "Mar 2026": 2100, "Apr 2026": 2100 } },
      { id: "khemraj", unit: "Unit 2", name: "Khemraj Dahal", email: "", rent: 1896.25, flags: ["⚠ Last Month??"], depositType: "auto",
        payments: { "Jan 2026": 1896.25, "Feb 2026": 1896.25, "Mar 2026": null },
        notes: { "Mar 2026": "Last month?? — needs urgent follow-up" } },
    ]
  },
  {
    id: "285-van-order",
    address: "285 Van Order",
    bank: "CIBC", account: "4045211",
    email: "285vanorder@gmail.com",
    ownership: "Altaray Property Svc Ltd.",
    owned: true, type: "duplex",
    tenants: [
      { id: "carolina", unit: "Unit 1", name: "Carolina Castro", email: "", rent: 2100, flags: [], depositType: "auto",
        payments: { "Jan 2026": 2100, "Feb 2026": 2100, "Mar 2026": 2050 },
        notes: { "Mar 2026": "Paid $2,050 — $50 short" } },
      { id: "tiffany", unit: "Unit 2", name: "Tiffany", email: "", rent: 1800, flags: ["Always Late"], depositType: "auto",
        payments: { "Jan 2026": 1800, "Feb 2026": null, "Mar 2026": null },
        notes: { "Mar 2026": "Payments on 3rd Jan & 6th — irregular timing" } },
    ]
  },
  {
    id: "213-colborne",
    address: "213 Colborne",
    bank: "TD", account: "6629210",
    email: "213colborne@gmail.com",
    ownership: "AwesomeJVDeals & Veronica",
    owned: true, type: "rooming",
    tenants: [
      { id: "colby", unit: "Room", name: "Colby", email: "colby.04.bennett@gmail.com", rent: 850, flags: ["Manual Deposit"], depositType: "manual",
        payments: { "Jan 2026": 850, "Feb 2026": 850, "Mar 2026": 850, "Apr 2026": 850 } },
      { id: "virginia", unit: "Room", name: "Virginia Grace", email: "virginiagracegrd@gmail.com", rent: 770, flags: ["Manual Deposit"], depositType: "manual",
        payments: { "Jan 2026": 770, "Feb 2026": 770, "Mar 2026": 770 } },
      { id: "andrew-c", unit: "Room", name: "Andrew", email: "anguyen6421@gmail.com", rent: 750, flags: ["Manual Deposit"], depositType: "manual",
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "benusha", unit: "Room", name: "Benusha", email: "barafern@hotmail.com", rent: 800, flags: ["Manual Deposit"], depositType: "manual",
        payments: { "Jan 2026": 800, "Feb 2026": 800, "Mar 2026": 800, "Apr 2026": 800 } },
      { id: "ezekiel", unit: "Room", name: "Ezekiel Adusi", email: "ezekieladusi@gmail.com", rent: 860, flags: ["Manual Deposit"], depositType: "manual",
        payments: { "Jan 2026": 860, "Feb 2026": 860, "Mar 2026": 860, "Apr 2026": 860 } },
    ]
  },
  {
    id: "82-hamilton",
    address: "82 Hamilton",
    bank: "TD", account: "6629210",
    email: "82Hamiltonst@gmail.com",
    ownership: "René & Veronica (50%)",
    owned: true, type: "rooming",
    tenants: [
      { id: "theresia", unit: "Room", name: "Theresia Verena", email: "", rent: 760, flags: [], depositType: "auto",
        payments: { "Jan 2026": 760, "Feb 2026": 760, "Mar 2026": 760, "Apr 2026": 760 } },
      { id: "moussa", unit: "Room", name: "Moussa", email: "", rent: 760, flags: [], depositType: "auto",
        payments: { "Jan 2026": 760, "Feb 2026": 760, "Mar 2026": 760, "Apr 2026": 760 } },
      { id: "daniel", unit: "Room", name: "Daniel Mortime", email: "", rent: 750, flags: [], depositType: "auto",
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "mostarina", unit: "Room", name: "Mostarina Begum", email: "mostarina_bizlee@yahoo.com", rent: 700, flags: [], depositType: "auto",
        payments: { "Jan 2026": 700, "Feb 2026": 700, "Mar 2026": 700 } },
      { id: "pouriya", unit: "Room", name: "Pouriya", email: "", rent: 750, flags: ["Email Sent Jan 2nd"], depositType: "auto",
        payments: { "Jan 2026": 700, "Feb 2026": null, "Mar 2026": 750, "Apr 2026": 750 },
        notes: { "Feb 2026": "Email sent Jan 2nd — awaiting payment" } },
      { id: "max", unit: "Room", name: "Max", email: "", rent: 600, flags: [], depositType: "auto",
        payments: { "Mar 2026": 600, "Apr 2026": 600 } },
    ]
  },
  {
    id: "293-van-order",
    address: "293 Van Order",
    bank: "CIBC", account: "8532230",
    email: "293vanorderdrive@gmail.com",
    ownership: "René",
    owned: true, type: "duplex",
    tenants: [
      { id: "samar", unit: "Unit 1", name: "Samar Basnet", email: "", rent: 2250, flags: ["Late Notice"], depositType: "auto",
        payments: { "Jan 2026": 2250, "Feb 2026": 2250, "Mar 2026": null, "Apr 2026": 2250 },
        notes: { "Mar 2026": "Said he would be late" } },
      { id: "niomi", unit: "Unit 2", name: "Niomi (Ni)", email: "", rent: 1795, flags: [], depositType: "auto",
        payments: { "Jan 2026": 1795, "Feb 2026": 1795, "Mar 2026": 1795 } },
    ]
  },
  {
    id: "152-calderwood",
    address: "152 Calderwood",
    bank: "TD", account: "",
    email: "altaraymanagement@gmail.com",
    ownership: "Unknown",
    owned: true, type: "rooming",
    tenants: [
      { id: "jack-o", unit: "Room", name: "Jack O'Neil", email: "", rent: 750, flags: [], depositType: "auto",
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 500, "Apr 2026": 750 },
        notes: { "Mar 2026": "Paid $500 — short $250" } },
      { id: "dominique", unit: "Room", name: "Dominique", email: "", rent: 750, flags: [], depositType: "auto",
        payments: { "Jan 2026": 750, "Feb 2026": null, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "diego", unit: "Room", name: "Diego", email: "", rent: 800, flags: [], depositType: "auto",
        payments: { "Jan 2026": 800, "Feb 2026": 800, "Mar 2026": 800, "Apr 2026": 800 } },
      { id: "eria", unit: "Room", name: "Eria", email: "", rent: 750, flags: [], depositType: "auto",
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "layla", unit: "Room", name: "Layla", email: "", rent: 750, flags: [], depositType: "auto",
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "rohit", unit: "Room", name: "Rohit Choudary", email: "", rent: 650, flags: [], depositType: "auto",
        payments: { "Jan 2026": 650, "Feb 2026": 650, "Mar 2026": 650 } },
    ]
  },
  {
    id: "28-toronto",
    address: "28 Toronto St.",
    bank: "TD", account: "",
    email: "altaraymanagement@gmail.com",
    ownership: "Unknown",
    owned: true, type: "multi",
    tenants: [
      { id: "kim", unit: "Unit 1", name: "Kim Lambert", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "alexander-b", unit: "Unit 2", name: "Alexander Babiak", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "ky", unit: "Unit 3", name: "Ky", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "ethan", unit: "Unit 4", name: "Ethan Alexander Williamson", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200 } },
      { id: "aleksander", unit: "Unit 5", name: "Aleksander Oliver Guy", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "sebastien", unit: "Unit 6", name: "Sebastien McBride", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "taylor", unit: "Unit 7", name: "Taylor James Plicarpo", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "jack-w", unit: "Unit 8", name: "Jack David Wood", email: "", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
    ]
  },
  {
    id: "311-portsmouth",
    address: "311 Portsmouth",
    bank: "TD", account: "",
    email: "altaraymanagement@gmail.com",
    ownership: "Managed Only",
    owned: false, type: "rooming",
    tenants: [
      { id: "zoel", unit: "Unit 1", name: "Zoel Staffing", email: "", rent: 800, flags: [], depositType: "auto", payments: { "Jan 2026": 800, "Feb 2026": 800, "Mar 2026": 800 } },
      { id: "lily", unit: "Unit 1", name: "Lily Carthy", email: "", rent: 750, flags: [], depositType: "auto", payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "isabella", unit: "Unit 1", name: "Isabella Day", email: "", rent: 750, flags: [], depositType: "auto", payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "faraz", unit: "Unit 1", name: "Faraz Ughratdar", email: "", rent: 750, flags: [], depositType: "auto", payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 770 } },
      { id: "issah", unit: "Unit 2", name: "Issah Hardi", email: "", rent: 750, flags: [], depositType: "auto", payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "chimaobi", unit: "Unit 2", name: "Chimaobi Ekeleme", email: "", rent: 700, flags: [], depositType: "auto", payments: { "Jan 2026": 700, "Feb 2026": 700, "Mar 2026": 700, "Apr 2026": 700 } },
    ]
  },
  {
    id: "1241-johnson",
    address: "1241 Johnson",
    bank: "TD", account: "",
    email: "altaraymanagement@gmail.com",
    ownership: "Managed Only",
    owned: false, type: "duplex",
    tenants: [
      { id: "kristen", unit: "Unit 1", name: "Kristen", email: "", rent: 2200, flags: [], depositType: "auto", payments: { "Jan 2026": 2200, "Feb 2026": 2200, "Mar 2026": 2200, "Apr 2026": 2200 } },
      { id: "kaili", unit: "Unit 2", name: "Kaili Wang", email: "", rent: 1800, flags: [], depositType: "auto", payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800, "Apr 2026": 1800 } },
    ]
  },
  {
    id: "315-portsmouth",
    address: "315 Portsmouth",
    bank: "TD", account: "",
    email: "altaraymanagement@gmail.com",
    ownership: "Managed Only",
    owned: false, type: "duplex",
    tenants: [
      { id: "kriti", unit: "Unit 1", name: "Kriti Panta", email: "", rent: 2400, flags: [], depositType: "auto", payments: { "Jan 2026": 2400, "Feb 2026": 2400, "Mar 2026": 2400, "Apr 2026": 2400 } },
    ]
  },
];

const MONTHS = ["Jan 2026","Feb 2026","Mar 2026","Apr 2026","May 2026","Jun 2026","Jul 2026","Aug 2026","Sep 2026","Oct 2026","Nov 2026","Dec 2026"];
const CURRENT_MONTH = "Mar 2026";

const FLAG_COLORS = {
  "Always Late": "#ef4444",
  "Check Bank Acc": "#f97316",
  "Manual Deposit": "#8b5cf6",
  "Email Sent": "#3b82f6",
  "Email Sent Jan 2nd": "#3b82f6",
  "Deposit Cheque": "#eab308",
  "Late Notice": "#ef4444",
  "⚠ Partial Feb": "#f97316",
  "⚠ Last Month??": "#ef4444",
};

function fmt(n) {
  if (n == null) return "—";
  return "$" + Number(n).toLocaleString("en-CA", { minimumFractionDigits: 2 });
}

function getPaymentStatus(tenant, month) {
  const p = tenant.payments[month];
  if (p == null) return "missing";
  if (p < tenant.rent - 0.01) return "partial";
  return "paid";
}

function portfolioStats() {
  let totalRent = 0, totalTenants = 0, alerts = [];
  PORTFOLIO.forEach(p => {
    p.tenants.forEach(t => {
      totalRent += t.rent;
      totalTenants++;
      const st = getPaymentStatus(t, CURRENT_MONTH);
      if (st !== "paid") {
        alerts.push({ property: p.address, tenant: t.name, status: st, amount: t.payments[CURRENT_MONTH], expected: t.rent });
      }
      t.flags.forEach(f => {
        if (f === "Always Late" || f === "⚠ Last Month??" || f === "Check Bank Acc") {
          if (!alerts.find(a => a.tenant === t.name && a.flag === f)) {
            alerts.push({ property: p.address, tenant: t.name, status: "flag", flag: f });
          }
        }
      });
    });
  });
  return { totalRent, totalTenants, totalProperties: PORTFOLIO.length, alerts };
}

export default function EstateOS() {
  const [tab, setTab] = useState("dashboard");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
  const [filterOwned, setFilterOwned] = useState("all");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Good morning. I'm your EstateOS co-worker. I have full visibility into all 18 properties and 50+ tenants across Altaray's portfolio. What do you need?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [emailDraft, setEmailDraft] = useState(null);
  const chatEndRef = useRef(null);
  const stats = portfolioStats();

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatMessages]);

  const filteredPortfolio = PORTFOLIO.filter(p =>
    filterOwned === "all" ? true : filterOwned === "owned" ? p.owned : !p.owned
  );

  async function sendChat(msg) {
    if (!msg.trim()) return;
    const msgs = [...chatMessages, { role: "user", content: msg }];
    setChatMessages(msgs);
    setChatInput("");
    setChatLoading(true);
    const summary = PORTFOLIO.map(p => ({
      address: p.address, email: p.email, ownership: p.ownership, bank: p.bank, account: p.account, owned: p.owned,
      tenants: p.tenants.map(t => ({ name: t.name, unit: t.unit, rent: t.rent, flags: t.flags, email: t.email, payments: t.payments, notes: t.notes || {} }))
    }));
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are EstateOS, a sharp property management AI co-worker for Altaray Property Services (René Masse). You have full portfolio access. Be concise, professional, and use real data. Current month: ${CURRENT_MONTH}. If drafting an email, format with Subject:, From:, To:, Body:.\n\nPORTFOLIO:\n${JSON.stringify(summary, null, 2)}`,
          messages: msgs.map(m => ({ role: m.role, content: m.content }))
        })
      });
      const data = await res.json();
      setChatMessages(prev => [...prev, { role: "assistant", content: data.content?.[0]?.text || "Error processing request." }]);
    } catch {
      setChatMessages(prev => [...prev, { role: "assistant", content: "Connection error. Please try again." }]);
    }
    setChatLoading(false);
  }

  async function draftEmail(property, tenant, type) {
    setEmailDraft({ loading: true, property, tenant, type });
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          system: "You are drafting a professional tenant email for Altaray Property Services. Be respectful but firm. Under 150 words. Format exactly as:\nSubject: ...\n\nBody:\n...",
          messages: [{ role: "user", content: `Draft a "${type}" email.\nTenant: ${tenant.name}\nProperty: ${property.address}, ${tenant.unit}\nMonthly Rent: ${fmt(tenant.rent)}\nFrom: ${property.email || "altaraymanagement@gmail.com"}\nTo: ${tenant.email || "(no email on file)"}\nFlags: ${tenant.flags.join(", ") || "none"}\nNotes: ${JSON.stringify(tenant.notes || {})}` }]
        })
      });
      const data = await res.json();
      setEmailDraft({ loading: false, property, tenant, type, text: data.content?.[0]?.text || "Error." });
    } catch {
      setEmailDraft({ loading: false, property, tenant, type, text: "Connection error." });
    }
  }

  // ── DASHBOARD ────────────────────────────────────────────────────────────────
  const Dashboard = () => (
    <div style={{ padding: 24 }}>
      <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 3, marginBottom: 4 }}>ALTARAY PROPERTY SERVICES · RENÉ MASSE</div>
      <div style={{ fontSize: 28, fontFamily: "'Playfair Display',serif", color: "#f6c90e", marginBottom: 24 }}>Portfolio Overview — {CURRENT_MONTH}</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 26 }}>
        {[
          { label: "PROPERTIES", value: stats.totalProperties },
          { label: "TENANTS", value: stats.totalTenants },
          { label: "MONTHLY TARGET", value: fmt(stats.totalRent) },
          { label: "ALERTS", value: stats.alerts.length, alert: true },
        ].map((k, i) => (
          <div key={i} style={{ background: "#0d1117", border: `1px solid ${k.alert && k.value > 0 ? "#3f0000" : "#161d2a"}`, borderRadius: 12, padding: "18px 22px" }}>
            <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 8 }}>{k.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: k.alert && k.value > 0 ? "#ef4444" : "#f6c90e", fontFamily: "'DM Mono',monospace" }}>{k.value}</div>
          </div>
        ))}
      </div>

      {stats.alerts.length > 0 && (
        <div style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 10, color: "#6b7280", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>ALERTS — {CURRENT_MONTH}</div>
          {stats.alerts.slice(0, 12).map((a, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", marginBottom: 5, background: "#0d1117", borderLeft: `3px solid ${a.status === "flag" ? "#f97316" : "#ef4444"}`, borderRadius: 8 }}>
              <div>
                <span style={{ color: "#f1f5f9", fontWeight: 600, fontSize: 13 }}>{a.tenant}</span>
                <span style={{ color: "#4b5563", fontSize: 12, margin: "0 6px" }}>·</span>
                <span style={{ color: "#6b7280", fontSize: 12 }}>{a.property}</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {a.amount != null && <span style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontSize: 12 }}>{fmt(a.amount)} / {fmt(a.expected)}</span>}
                <span style={{ fontSize: 10, padding: "2px 9px", borderRadius: 20, background: "#1a0000", color: a.status === "flag" ? "#fb923c" : "#fca5a5", fontFamily: "'DM Mono',monospace" }}>
                  {a.flag || a.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {["all", "owned", "managed"].map(f => (
          <button key={f} onClick={() => setFilterOwned(f)}
            style={{ padding: "5px 14px", borderRadius: 20, border: "1px solid #161d2a", background: filterOwned === f ? "#f6c90e" : "#0d1117", color: filterOwned === f ? "#000" : "#6b7280", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {filteredPortfolio.map(p => {
          const paidCount = p.tenants.filter(t => getPaymentStatus(t, CURRENT_MONTH) === "paid").length;
          const hasIssues = paidCount < p.tenants.length || p.tenants.some(t => t.flags.length > 0);
          return (
            <div key={p.id} onClick={() => { setSelectedProperty(p); setTab("property"); }}
              style={{ background: "#0d1117", border: `1px solid ${hasIssues ? "#2a1800" : "#161d2a"}`, borderRadius: 12, padding: "16px 18px", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#f6c90e"}
              onMouseLeave={e => e.currentTarget.style.borderColor = hasIssues ? "#2a1800" : "#161d2a"}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9" }}>{p.address}</div>
                {!p.owned && <span style={{ fontSize: 9, color: "#4b5563", background: "#161d2a", padding: "2px 7px", borderRadius: 8, fontFamily: "'DM Mono',monospace" }}>MANAGED</span>}
              </div>
              <div style={{ fontSize: 11, color: "#374151", marginBottom: 8, fontFamily: "'DM Mono',monospace" }}>{p.ownership}</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, color: "#4b5563" }}>{p.tenants.length} tenants</span>
                <span style={{ fontSize: 11, color: paidCount === p.tenants.length ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace" }}>{paidCount}/{p.tenants.length} paid</span>
              </div>
              {p.email && <div style={{ fontSize: 10, color: "#1e3a5f", marginTop: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.email}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );

  // ── PROPERTY DETAIL ──────────────────────────────────────────────────────────
  const PropertyDetail = () => {
    if (!selectedProperty) return <div style={{ padding: 40, color: "#4b5563" }}>Select a property from the dashboard.</div>;
    const p = selectedProperty;
    const monthlyTarget = p.tenants.reduce((s, t) => s + t.rent, 0);
    const collected = p.tenants.reduce((s, t) => s + (t.payments[selectedMonth] || 0), 0);
    return (
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <button onClick={() => setTab("dashboard")} style={{ background: "none", border: "none", color: "#f6c90e", cursor: "pointer", fontSize: 22, lineHeight: 1 }}>←</button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>{p.address}</div>
            <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{p.ownership} · {p.bank}{p.account ? " #" + p.account : ""}</div>
          </div>
          {!p.owned && <span style={{ fontSize: 10, color: "#6b7280", background: "#161d2a", padding: "4px 12px", borderRadius: 10 }}>MANAGED ONLY</span>}
        </div>

        <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 10, padding: "14px 20px", marginBottom: 18, display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
          {p.email && <div><div style={{ fontSize: 9, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>INBOX</div><div style={{ color: "#f6c90e", fontSize: 12 }}>{p.email}</div></div>}
          <div><div style={{ fontSize: 9, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>TYPE</div><div style={{ color: "#9ca3af", fontSize: 12, textTransform: "capitalize" }}>{p.type}</div></div>
          <div><div style={{ fontSize: 9, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>TARGET</div><div style={{ color: "#9ca3af", fontSize: 12 }}>{fmt(monthlyTarget)}/mo</div></div>
          <div><div style={{ fontSize: 9, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>COLLECTED</div><div style={{ color: collected >= monthlyTarget ? "#22c55e" : "#ef4444", fontSize: 12 }}>{fmt(collected)}</div></div>
          <div style={{ marginLeft: "auto" }}>
            <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}
              style={{ background: "#161d2a", border: "none", color: "#f1f5f9", fontSize: 12, borderRadius: 7, padding: "4px 10px", cursor: "pointer" }}>
              {MONTHS.map(m => <option key={m}>{m}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {p.tenants.map(t => {
            const status = getPaymentStatus(t, selectedMonth);
            const paid = t.payments[selectedMonth];
            const note = t.notes?.[selectedMonth];
            const borderColor = status === "paid" ? "#0d2b1a" : status === "partial" ? "#2a1200" : "#2a0000";
            return (
              <div key={t.id} style={{ background: "#0d1117", border: `1px solid ${borderColor}`, borderRadius: 12, padding: "16px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>{t.name}</span>
                      <span style={{ fontSize: 10, color: "#374151", fontFamily: "'DM Mono',monospace" }}>{t.unit}</span>
                    </div>
                    {t.email && <div style={{ fontSize: 11, color: "#2563eb", marginBottom: 5 }}>{t.email}</div>}
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {t.flags.map((f, fi) => (
                        <span key={fi} style={{ fontSize: 9, padding: "2px 8px", borderRadius: 10, background: "#111827", color: FLAG_COLORS[f] || "#9ca3af", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{f}</span>
                      ))}
                      <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 10, background: "#111827", color: "#374151", fontFamily: "'DM Mono',monospace" }}>
                        {t.depositType === "manual" ? "MANUAL" : t.depositType === "cheque" ? "CHEQUE" : "AUTO"}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontFamily: "'DM Mono',monospace", color: status === "paid" ? "#22c55e" : status === "partial" ? "#f97316" : "#ef4444", fontWeight: 700 }}>
                      {paid != null ? fmt(paid) : "NOT PAID"}
                    </div>
                    <div style={{ fontSize: 11, color: "#374151" }}>of {fmt(t.rent)}</div>
                    <span style={{ fontSize: 10, marginTop: 4, padding: "2px 9px", borderRadius: 20, display: "inline-block", background: status === "paid" ? "#0d2b1a" : status === "partial" ? "#2a1200" : "#2a0000", color: status === "paid" ? "#86efac" : status === "partial" ? "#fed7aa" : "#fca5a5", fontFamily: "'DM Mono',monospace" }}>
                      {status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {note && <div style={{ background: "#150d00", border: "1px solid #2a1800", borderRadius: 8, padding: "7px 12px", marginBottom: 10, fontSize: 12, color: "#d97706" }}>📝 {note}</div>}

                <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
                  {MONTHS.slice(0, 7).map(m => {
                    const s = getPaymentStatus(t, m);
                    return (
                      <div key={m} title={`${m}: ${fmt(t.payments[m])}`}
                        style={{ width: 26, height: 26, borderRadius: 6, background: s === "paid" ? "#0d2b1a" : s === "partial" ? "#2a1200" : t.payments[m] === undefined ? "#0a0d12" : "#2a0000", border: m === selectedMonth ? "2px solid #f6c90e" : "1px solid #161d2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "#4b5563", cursor: "default", fontFamily: "'DM Mono',monospace" }}>
                        {m.slice(0, 1)}
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["rent reminder", "late notice", "partial payment follow-up"].map(type => (
                    <button key={type} onClick={() => draftEmail(p, t, type)}
                      style={{ fontSize: 10, padding: "4px 11px", borderRadius: 7, border: "1px solid #161d2a", background: "#070a10", color: "#6b7280", cursor: "pointer", fontFamily: "'DM Mono',monospace" }}>
                      ✉ {type}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // ── RENT CHECK ───────────────────────────────────────────────────────────────
  const RentCheck = () => {
    const [month, setMonth] = useState(CURRENT_MONTH);
    let expected = 0, collected = 0;
    PORTFOLIO.forEach(p => p.tenants.forEach(t => { expected += t.rent; collected += t.payments[month] || 0; }));
    return (
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
          <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Rent Check</div>
          <select value={month} onChange={e => setMonth(e.target.value)}
            style={{ background: "#0d1117", border: "1px solid #161d2a", color: "#f1f5f9", fontSize: 13, borderRadius: 8, padding: "6px 12px" }}>
            {MONTHS.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 22 }}>
          {[["EXPECTED", fmt(expected), "#f6c90e"], ["COLLECTED", fmt(collected), "#22c55e"], ["OUTSTANDING", fmt(expected - collected), "#ef4444"]].map(([l, v, c]) => (
            <div key={l} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px" }}>
              <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 8 }}>{l}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
            </div>
          ))}
        </div>
        {PORTFOLIO.map(p => {
          const pExp = p.tenants.reduce((s, t) => s + t.rent, 0);
          const pColl = p.tenants.reduce((s, t) => s + (t.payments[month] || 0), 0);
          return (
            <div key={p.id} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "0 2px", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#d1d5db" }}>{p.address}</span>
                  {!p.owned && <span style={{ fontSize: 9, color: "#374151", background: "#161d2a", padding: "1px 6px", borderRadius: 7 }}>MANAGED</span>}
                </div>
                <span style={{ fontSize: 12, fontFamily: "'DM Mono',monospace", color: pColl >= pExp ? "#22c55e" : "#ef4444" }}>{fmt(pColl)} / {fmt(pExp)}</span>
              </div>
              {p.tenants.map(t => {
                const status = getPaymentStatus(t, month);
                const paid = t.payments[month];
                return (
                  <div key={t.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 13px", marginBottom: 3, background: "#0d1117", borderLeft: `3px solid ${status === "paid" ? "#166534" : status === "partial" ? "#c2410c" : "#dc2626"}`, borderRadius: 7 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ color: "#e2e8f0", fontSize: 13 }}>{t.name}</span>
                      <span style={{ color: "#374151", fontSize: 10 }}>{t.unit}</span>
                      {t.flags.slice(0, 1).map((f, fi) => <span key={fi} style={{ fontSize: 9, color: FLAG_COLORS[f] || "#9ca3af" }}>· {f}</span>)}
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: status === "paid" ? "#22c55e" : status === "partial" ? "#f97316" : "#ef4444" }}>
                        {paid != null ? fmt(paid) : "MISSING"}
                      </span>
                      <span style={{ fontSize: 10, color: "#374151" }}>/ {fmt(t.rent)}</span>
                      <button onClick={() => draftEmail(p, t, status === "paid" ? "rent reminder" : "late notice")}
                        style={{ fontSize: 9, padding: "2px 7px", borderRadius: 5, border: "1px solid #161d2a", background: "none", color: "#4b5563", cursor: "pointer" }}>✉</button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  // ── EMAIL MODAL ──────────────────────────────────────────────────────────────
  const EmailModal = () => {
    if (!emailDraft) return null;
    return (
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 24 }}>
        <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 16, width: "100%", maxWidth: 580, padding: 26, maxHeight: "80vh", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ fontSize: 16, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Draft — {emailDraft.type}</div>
            <button onClick={() => setEmailDraft(null)} style={{ background: "none", border: "none", color: "#4b5563", cursor: "pointer", fontSize: 18 }}>✕</button>
          </div>
          <div style={{ fontSize: 11, color: "#374151", marginBottom: 14, fontFamily: "'DM Mono',monospace", lineHeight: 1.7 }}>
            FROM: {emailDraft.property.email || "altaraymanagement@gmail.com"}<br />
            TO: {emailDraft.tenant.name}{emailDraft.tenant.email ? ` <${emailDraft.tenant.email}>` : " (no email on file)"}
          </div>
          {emailDraft.loading
            ? <div style={{ color: "#6b7280", textAlign: "center", padding: 40 }}>Drafting...</div>
            : <div style={{ background: "#070a10", border: "1px solid #161d2a", borderRadius: 10, padding: 16, fontSize: 13, color: "#e2e8f0", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{emailDraft.text}</div>}
          {!emailDraft.loading && (
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <button onClick={() => navigator.clipboard.writeText(emailDraft.text)}
                style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #161d2a", background: "#161d2a", color: "#f1f5f9", cursor: "pointer", fontSize: 13 }}>Copy</button>
              <button onClick={() => setEmailDraft(null)}
                style={{ padding: "10px 22px", borderRadius: 8, border: "none", background: "#f6c90e", color: "#000", cursor: "pointer", fontSize: 13, fontWeight: 700 }}>Done</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ── AI CHAT ──────────────────────────────────────────────────────────────────
  const AIChat = () => (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 112px)", padding: 24 }}>
      <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e", marginBottom: 18 }}>AI Co-worker</div>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, marginBottom: 14 }}>
        {chatMessages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{ maxWidth: "76%", padding: "11px 15px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: m.role === "user" ? "#f6c90e" : "#0d1117", color: m.role === "user" ? "#000" : "#e2e8f0", fontSize: 14, lineHeight: 1.65, border: m.role === "assistant" ? "1px solid #161d2a" : "none", whiteSpace: "pre-wrap" }}>
              {m.content}
            </div>
          </div>
        ))}
        {chatLoading && <div style={{ color: "#4b5563", fontSize: 13, padding: "6px 14px" }}>EstateOS is thinking...</div>}
        <div ref={chatEndRef} />
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <input value={chatInput} onChange={e => setChatInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendChat(chatInput)}
          placeholder="Ask about tenants, payments, properties..."
          style={{ flex: 1, background: "#0d1117", border: "1px solid #161d2a", borderRadius: 10, padding: "12px 15px", color: "#f1f5f9", fontSize: 14, outline: "none" }} />
        <button onClick={() => sendChat(chatInput)} disabled={chatLoading}
          style={{ padding: "12px 22px", background: "#f6c90e", border: "none", borderRadius: 10, color: "#000", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>Send</button>
      </div>
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
        {["Who hasn't paid in March?", "Draft reminder for Tiffany at 285 Van Order", "List all Always Late tenants", "Which properties renew soon?", "Summarize 43 Ruskin"].map(q => (
          <button key={q} onClick={() => sendChat(q)}
            style={{ fontSize: 11, padding: "4px 11px", borderRadius: 15, border: "1px solid #161d2a", background: "#0d1117", color: "#6b7280", cursor: "pointer" }}>{q}</button>
        ))}
      </div>
    </div>
  );

  // ── MONTHLY REPORTS ──────────────────────────────────────────────────────────
  const EXPENSE_CATEGORIES = ["Mortgage","Property Taxes","Insurance","Utilities","Management Fees","Leasing Fee","Internet","Bank Charges","Cleaner","Repairs","Travel","Other"];

  const CORPORATIONS = [
    { id: "2771051", name: "2771051 Ontario Inc.", properties: ["43-ruskin","401-southwood","164-kirkpatrick"] },
    { id: "1000203074", name: "1000203074 Ontario Inc.", properties: ["232-van-order","32-holland"] },
    { id: "awesome-jv", name: "Awesome JV Deals Inc.", properties: ["787-downing","913-uxbridge","30-barbara","213-colborne"] },
    { id: "altaray-svc", name: "Altaray Property Svc Ltd.", properties: ["285-van-order","661-milford"] },
    { id: "personal", name: "René (Personal)", properties: ["293-van-order","82-hamilton"] },
    { id: "managed", name: "Managed Only", properties: ["311-portsmouth","1241-johnson","315-portsmouth"] },
  ];

  // Seed expense data matching 43 Ruskin template
  const initExpenses = () => {
    const data = {};
    PORTFOLIO.forEach(p => {
      data[p.id] = {};
      MONTHS.forEach(m => {
        data[p.id][m] = {
          Mortgage: 0, "Property Taxes": 0, Insurance: 0, Utilities: 0,
          "Management Fees": 0, "Leasing Fee": 0, Internet: 0,
          "Bank Charges": 0, Cleaner: 0, Repairs: 0, Travel: 0, Other: 0
        };
      });
    });
    // Pre-fill 43 Ruskin from the spreadsheet
    const r = data["43-ruskin"];
    r["Jan 2026"] = { Mortgage: 1783.11, "Property Taxes": 364.60, Insurance: 128.00, Utilities: 400.00, "Management Fees": 0, "Leasing Fee": 0, Internet: 0, "Bank Charges": 0, Cleaner: 0, Repairs: 0, Travel: 0, Other: 0 };
    r["Feb 2026"] = { Mortgage: 1248.23, "Property Taxes": 364.60, Insurance: 128.00, Utilities: 365.00, "Management Fees": 0, "Leasing Fee": 0, Internet: 0, "Bank Charges": 0, Cleaner: 0, Repairs: 0, Travel: 0, Other: 0 };
    r["Mar 2026"] = { Mortgage: 1783.11, "Property Taxes": 364.60, Insurance: 128.00, Utilities: 365.00, "Management Fees": 0, "Leasing Fee": 0, Internet: 0, "Bank Charges": 0, Cleaner: 0, Repairs: 0, Travel: 0, Other: 0 };
    // Pre-fill 401 Southwood
    const s = data["401-southwood"];
    s["Jan 2026"] = { Mortgage: 1978.00, "Property Taxes": 322.50, Insurance: 159.05, Utilities: 209.03, "Management Fees": 0, "Leasing Fee": 0, Internet: 0, "Bank Charges": 0, Cleaner: 0, Repairs: 0, Travel: 0, Other: 0 };
    s["Feb 2026"] = { Mortgage: 1978.00, "Property Taxes": 322.50, Insurance: 159.05, Utilities: 209.03, "Management Fees": 0, "Leasing Fee": 0, Internet: 0, "Bank Charges": 0, Cleaner: 0, Repairs: 0, Travel: 0, Other: 0 };
    s["Mar 2026"] = { Mortgage: 1978.00, "Property Taxes": 322.50, Insurance: 159.05, Utilities: 209.03, "Management Fees": 0, "Leasing Fee": 0, Internet: 0, "Bank Charges": 0, Cleaner: 0, Repairs: 0, Travel: 0, Other: 0 };
    return data;
  };

  const [expenses, setExpenses] = useState(initExpenses);
  const [reportView, setReportView] = useState("property"); // property | corp | portfolio
  const [reportMonth, setReportMonth] = useState(CURRENT_MONTH);
  const [reportProperty, setReportProperty] = useState(PORTFOLIO[6]); // 43 Ruskin default

  function updateExpense(propId, month, category, value) {
    setExpenses(prev => ({
      ...prev,
      [propId]: { ...prev[propId], [month]: { ...prev[propId][month], [category]: parseFloat(value) || 0 } }
    }));
  }

  function getPropertyCashflow(propId, month) {
    const prop = PORTFOLIO.find(p => p.id === propId);
    if (!prop) return { revenue: 0, expenses: 0, cashflow: 0 };
    const revenue = prop.tenants.reduce((s, t) => s + (t.payments[month] || 0), 0);
    const exp = expenses[propId]?.[month] || {};
    const totalExp = Object.values(exp).reduce((s, v) => s + (v || 0), 0);
    return { revenue, expenses: totalExp, cashflow: revenue - totalExp };
  }

  function getYTD(propId) {
    const months = MONTHS.filter(m => PORTFOLIO.find(p => p.id === propId)?.tenants.some(t => t.payments[m] != null));
    let rev = 0, exp = 0;
    MONTHS.slice(0, 3).forEach(m => { // Jan-Mar YTD
      const cf = getPropertyCashflow(propId, m);
      rev += cf.revenue; exp += cf.expenses;
    });
    return { revenue: rev, expenses: exp, cashflow: rev - exp };
  }

  const MonthlyReports = () => {
    const p = reportProperty;
    const cf = getPropertyCashflow(p.id, reportMonth);
    const ytd = getYTD(p.id);
    const exp = expenses[p.id]?.[reportMonth] || {};
    const totalRent = p.tenants.reduce((s, t) => s + t.rent, 0);

    // Corp rollup
    const corpData = CORPORATIONS.map(corp => {
      let rev = 0, expTotal = 0;
      corp.properties.forEach(pid => {
        const cf = getPropertyCashflow(pid, reportMonth);
        rev += cf.revenue; expTotal += cf.expenses;
      });
      return { ...corp, revenue: rev, expenses: expTotal, cashflow: rev - expTotal };
    });

    // Portfolio totals
    const portfolioRev = PORTFOLIO.reduce((s, p) => s + getPropertyCashflow(p.id, reportMonth).revenue, 0);
    const portfolioExp = PORTFOLIO.reduce((s, p) => s + getPropertyCashflow(p.id, reportMonth).expenses, 0);
    const portfolioCF = portfolioRev - portfolioExp;

    return (
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Monthly Reports</div>
          <select value={reportMonth} onChange={e => setReportMonth(e.target.value)}
            style={{ background: "#0d1117", border: "1px solid #161d2a", color: "#f1f5f9", fontSize: 13, borderRadius: 8, padding: "6px 12px" }}>
            {MONTHS.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>

        {/* View Toggle */}
        <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
          {[["property","Per Property"],["corp","By Corporation"],["portfolio","Full Portfolio"]].map(([id, label]) => (
            <button key={id} onClick={() => setReportView(id)}
              style={{ padding: "7px 18px", borderRadius: 20, border: "1px solid #161d2a", background: reportView === id ? "#f6c90e" : "#0d1117", color: reportView === id ? "#000" : "#6b7280", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* ── PER PROPERTY VIEW ── */}
        {reportView === "property" && (
          <div>
            <select value={p.id} onChange={e => setReportProperty(PORTFOLIO.find(x => x.id === e.target.value))}
              style={{ background: "#0d1117", border: "1px solid #161d2a", color: "#f1f5f9", fontSize: 14, borderRadius: 8, padding: "8px 14px", marginBottom: 20, width: "100%", maxWidth: 360 }}>
              {PORTFOLIO.map(prop => <option key={prop.id} value={prop.id}>{prop.address}</option>)}
            </select>

            {/* Header */}
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 20, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Cash Flow Statement — {p.address}</div>
                  <div style={{ fontSize: 12, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>{p.ownership} · {reportMonth}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace" }}>NET CASH FLOW</div>
                  <div style={{ fontSize: 26, fontWeight: 700, color: cf.cashflow >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace" }}>{fmt(cf.cashflow)}</div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {/* REVENUE */}
              <div style={{ background: "#0d1117", border: "1px solid #0d2b1a", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 11, color: "#22c55e", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 14 }}>REVENUE</div>
                {p.tenants.map((t, i) => (
                  <div key={t.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #0f1a10" }}>
                    <span style={{ color: "#9ca3af", fontSize: 13 }}>{t.name} ({t.unit})</span>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 13, color: t.payments[reportMonth] ? "#22c55e" : "#ef4444" }}>{fmt(t.payments[reportMonth] || 0)}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", marginTop: 4 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 13 }}>Total Revenue</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, color: "#22c55e", fontWeight: 700 }}>{fmt(cf.revenue)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                  <span style={{ color: "#4b5563", fontSize: 11 }}>Target</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#4b5563" }}>{fmt(totalRent)}</span>
                </div>
              </div>

              {/* EXPENSES */}
              <div style={{ background: "#0d1117", border: "1px solid #2a1200", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 11, color: "#f97316", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 14 }}>EXPENSES</div>
                {EXPENSE_CATEGORIES.map(cat => (
                  <div key={cat} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: "1px solid #150d00" }}>
                    <span style={{ color: "#6b7280", fontSize: 12 }}>{cat}</span>
                    <input type="number" value={exp[cat] || ""} onChange={e => updateExpense(p.id, reportMonth, cat, e.target.value)}
                      placeholder="0.00"
                      style={{ width: 90, background: "#070a10", border: "1px solid #1e293b", borderRadius: 6, padding: "3px 7px", color: exp[cat] ? "#f1f5f9" : "#374151", fontSize: 12, fontFamily: "'DM Mono',monospace", textAlign: "right" }} />
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", marginTop: 4 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 13 }}>Total Expenses</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, color: "#f97316", fontWeight: 700 }}>{fmt(cf.expenses)}</span>
                </div>
              </div>
            </div>

            {/* Cash Flow + YTD */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
              <div style={{ background: "#0d1117", border: `1px solid ${cf.cashflow >= 0 ? "#0d2b1a" : "#2a0000"}`, borderRadius: 12, padding: "18px 22px" }}>
                <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>CASH FLOW — {reportMonth}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ color: "#6b7280", fontSize: 13 }}>Revenue</span>
                  <span style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace" }}>{fmt(cf.revenue)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "#6b7280", fontSize: 13 }}>Expenses</span>
                  <span style={{ color: "#f97316", fontFamily: "'DM Mono',monospace" }}>({fmt(cf.expenses)})</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #1e293b", paddingTop: 10 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 700 }}>Net Cash Flow</span>
                  <span style={{ color: cf.cashflow >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontSize: 18, fontWeight: 700 }}>{fmt(cf.cashflow)}</span>
                </div>
              </div>
              <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px" }}>
                <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>YTD (Jan–Mar 2026)</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ color: "#6b7280", fontSize: 13 }}>Revenue</span>
                  <span style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace" }}>{fmt(ytd.revenue)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "#6b7280", fontSize: 13 }}>Expenses</span>
                  <span style={{ color: "#f97316", fontFamily: "'DM Mono',monospace" }}>({fmt(ytd.expenses)})</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #1e293b", paddingTop: 10 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 700 }}>Net YTD</span>
                  <span style={{ color: ytd.cashflow >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontSize: 18, fontWeight: 700 }}>{fmt(ytd.cashflow)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── BY CORPORATION VIEW ── */}
        {reportView === "corp" && (
          <div>
            <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 16 }}>CASH FLOW BY CORPORATION — {reportMonth}</div>
            {corpData.map(corp => (
              <div key={corp.id} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px", marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>{corp.name}</div>
                    <div style={{ fontSize: 11, color: "#374151", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{corp.properties.length} properties</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace" }}>NET CASH FLOW</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: corp.cashflow >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace" }}>{fmt(corp.cashflow)}</div>
                  </div>
                </div>
                {corp.properties.map(pid => {
                  const prop = PORTFOLIO.find(p => p.id === pid);
                  if (!prop) return null;
                  const pcf = getPropertyCashflow(pid, reportMonth);
                  return (
                    <div key={pid} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderTop: "1px solid #0f1520" }}>
                      <span style={{ color: "#6b7280", fontSize: 13 }}>{prop.address}</span>
                      <div style={{ display: "flex", gap: 20 }}>
                        <span style={{ color: "#22c55e", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>{fmt(pcf.revenue)}</span>
                        <span style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>({fmt(pcf.expenses)})</span>
                        <span style={{ color: pcf.cashflow >= 0 ? "#22c55e" : "#ef4444", fontSize: 13, fontFamily: "'DM Mono',monospace", fontWeight: 700, minWidth: 80, textAlign: "right" }}>{fmt(pcf.cashflow)}</span>
                      </div>
                    </div>
                  );
                })}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 0", borderTop: "1px solid #1e293b", marginTop: 4 }}>
                  <span style={{ color: "#9ca3af", fontSize: 12, fontWeight: 600 }}>Totals</span>
                  <div style={{ display: "flex", gap: 20 }}>
                    <span style={{ color: "#22c55e", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>{fmt(corp.revenue)}</span>
                    <span style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>({fmt(corp.expenses)})</span>
                    <span style={{ color: corp.cashflow >= 0 ? "#22c55e" : "#ef4444", fontSize: 13, fontFamily: "'DM Mono',monospace", fontWeight: 700, minWidth: 80, textAlign: "right" }}>{fmt(corp.cashflow)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── FULL PORTFOLIO VIEW ── */}
        {reportView === "portfolio" && (
          <div>
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
              <div style={{ fontSize: 16, fontFamily: "'Playfair Display',serif", color: "#f6c90e", marginBottom: 16 }}>Altaray Portfolio — {reportMonth}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 16 }}>
                {[["TOTAL REVENUE", fmt(portfolioRev), "#22c55e"], ["TOTAL EXPENSES", fmt(portfolioExp), "#f97316"], ["NET CASH FLOW", fmt(portfolioCF), portfolioCF >= 0 ? "#22c55e" : "#ef4444"]].map(([l, v, c]) => (
                  <div key={l} style={{ background: "#070a10", borderRadius: 10, padding: "14px 18px" }}>
                    <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 6 }}>{l}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 12 }}>ALL PROPERTIES</div>
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "10px 18px", borderBottom: "1px solid #161d2a" }}>
                {["PROPERTY","REVENUE","EXPENSES","CASH FLOW"].map(h => <div key={h} style={{ fontSize: 10, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
              </div>
              {PORTFOLIO.map((prop, i) => {
                const pcf = getPropertyCashflow(prop.id, reportMonth);
                return (
                  <div key={prop.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "11px 18px", borderBottom: i < PORTFOLIO.length - 1 ? "1px solid #0f1520" : "none", background: i % 2 === 0 ? "#0a0e16" : "#0d1117" }}>
                    <div>
                      <span style={{ color: "#e2e8f0", fontSize: 13 }}>{prop.address}</span>
                      {!prop.owned && <span style={{ fontSize: 9, color: "#374151", background: "#161d2a", padding: "1px 5px", borderRadius: 6, marginLeft: 6, fontFamily: "'DM Mono',monospace" }}>MGD</span>}
                    </div>
                    <div style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{fmt(pcf.revenue)}</div>
                    <div style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>({fmt(pcf.expenses)})</div>
                    <div style={{ color: pcf.cashflow >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 600 }}>{fmt(pcf.cashflow)}</div>
                  </div>
                );
              })}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "13px 18px", borderTop: "2px solid #1e293b", background: "#0d1117" }}>
                <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 13 }}>PORTFOLIO TOTAL</div>
                <div style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700 }}>{fmt(portfolioRev)}</div>
                <div style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700 }}>({fmt(portfolioExp)})</div>
                <div style={{ color: portfolioCF >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontSize: 15, fontWeight: 700 }}>{fmt(portfolioCF)}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ── LAYOUT ───────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#070a10", color: "#f1f5f9", fontFamily: "'DM Sans',sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <div style={{ background: "#070a10", borderBottom: "1px solid #0d1117", padding: "0 24px", display: "flex", alignItems: "center", height: 54, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ fontSize: 17, fontFamily: "'Playfair Display',serif", color: "#f6c90e", marginRight: 30, letterSpacing: 0.5 }}>EstateOS</div>
        {[
          { id: "dashboard", label: "Dashboard" },
          { id: "rent", label: "Rent Check" },
          { id: "reports", label: "Reports" },
          { id: "property", label: selectedProperty?.address || "Property", disabled: !selectedProperty },
          { id: "chat", label: "AI Co-worker" },
        ].map(t => (
          <button key={t.id} onClick={() => !t.disabled && setTab(t.id)} disabled={t.disabled}
            style={{ padding: "0 16px", height: "100%", background: "none", border: "none", borderBottom: tab === t.id ? "2px solid #f6c90e" : "2px solid transparent", color: tab === t.id ? "#f6c90e" : t.disabled ? "#1f2937" : "#6b7280", cursor: t.disabled ? "default" : "pointer", fontSize: 12, fontFamily: "'DM Mono',monospace", letterSpacing: 0.5 }}>
            {t.label}
          </button>
        ))}
        <div style={{ marginLeft: "auto", fontSize: 10, color: "#1f2937", fontFamily: "'DM Mono',monospace" }}>17 PROPERTIES · 50+ TENANTS</div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {tab === "dashboard" && <Dashboard />}
        {tab === "rent" && <RentCheck />}
        {tab === "reports" && <MonthlyReports />}
        {tab === "property" && <PropertyDetail />}
        {tab === "chat" && <AIChat />}
      </div>

      <EmailModal />
    </div>
  );
}
