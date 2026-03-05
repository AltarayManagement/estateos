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
      { id: "lovpreet", unit: "Unit 1", name: "Lovepreet Kaur", email: "lpkaur381@gmail.com", rent: 2100, flags: [], depositType: "auto",
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
      { id: "brianna", unit: "Unit 1", name: "Brianna Annesley", email: "brianna.annesley@gmail.com", rent: 900, flags: ["Always Late"], depositType: "auto",
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
      { id: "niomi", unit: "Unit 2", name: "Naomi Lawrence", email: "remystacks@gmail.com", rent: 1795, flags: [], depositType: "auto",
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
      { id: "rohit", unit: "Room", name: "Rohit Choudhary", email: "rohitc@gmail.com", rent: 650, flags: [], depositType: "auto",
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
      { id: "jack-w", unit: "Unit 8", name: "Jack David Wood", email: "jackwood@gmail.com", rent: 1200, flags: [], depositType: "auto", payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
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

const OWNERSHIP_MAP = {
  "787-downing":    { corp: "AwesomeJVDeals & Marshall", pct: 50, coowner: "Marshall" },
  "913-uxbridge":   { corp: "AwesomeJVDeals & Marshall", pct: 50, coowner: "Marshall" },
  "661-milford":    { corp: "Altaray Property Svc Ltd.", pct: 50, coowner: "Waxwing" },
  "30-barbara":     { corp: "AwesomeJVDeals & Sal", pct: 50, coowner: "Sal" },
  "213-colborne":   { corp: "AwesomeJVDeals & Veronica", pct: 50, coowner: "Veronica" },
  "43-ruskin":      { corp: "2771051 Ontario Inc.", pct: 100, coowner: "" },
  "401-southwood":  { corp: "2771051 Ontario Inc.", pct: 100, coowner: "" },
  "164-kirkpatrick":{ corp: "2771051 Ontario Inc.", pct: 100, coowner: "" },
  "331-meadowcrest":{ corp: "2771051 Ontario Inc.", pct: 100, coowner: "" },
  "232-van-order":  { corp: "1000203074 Ontario Inc.", pct: 100, coowner: "" },
  "32-holland":     { corp: "1000203074 Ontario Inc.", pct: 100, coowner: "" },
  "285-van-order":  { corp: "Altaray Property Svc Ltd.", pct: 100, coowner: "" },
  "293-van-order":  { corp: "René Personal", pct: 100, coowner: "" },
  "82-hamilton":    { corp: "René Personal", pct: 50, coowner: "Veronica" },
  "649-pimlico":    { corp: "AwesomeJVDeals & Tanya Justin", pct: 50, coowner: "Tanya Justin" },
  "152-calderwood": { corp: "René Personal", pct: 100, coowner: "" },
  "28-toronto":     { corp: "René Personal", pct: 100, coowner: "" },
};

// ─── MORTGAGE DATA — from Annual Statements ───────────────────────────────────
const MORTGAGE_DATA = {
  "661-milford": {
    lender: "CIBC", loanNum: "003440072", type: "Variable Flex", bank: "CIBC",
    balanceJan2025: 386723.42, balanceDec2025: 385883.11,
    principalPaid2025: 840.31, interestPaid2025: 25066.00,
    monthlyPayment: 2706.09, rateStart: 5.000, rateEnd: 3.700,
    maturity: "Dec 8, 2030", mortgagee: "Waxwing Properties Ltd.",
    monthlyPrincipal: 70.03, monthlyInterest: 2088.83,
    note: "Rate dropped from 5.0% to 3.7% on Dec 8, 2025"
  },
  "30-barbara": {
    lender: "Scotiabank", loanNum: "5016099", type: "Variable Rate", bank: "Scotia",
    balanceJan2025: 443535.27, balanceDec2025: 435194.61,
    principalPaid2025: 8340.66, interestPaid2025: 19394.95,
    monthlyPayment: 2194.48, rateStart: 4.900, rateEnd: 3.900,
    maturity: "May 2, 2027", mortgagee: "Tanya & Justin Schomberg",
    monthlyPrincipal: 695.06, monthlyInterest: 1616.25,
    note: "Rate dropped from 4.9% to 3.9% in 2025. Renewal May 2027."
  },
};

// ─── ALTARAY LOGO ─────────────────────────────────────────────────────────────
// Replace this URL with the direct Google Drive image link
const ALTARAY_LOGO_URL = ""; // e.g. https://drive.google.com/uc?export=view&id=FILE_ID

const LOGO_HTML = ALTARAY_LOGO_URL
  ? `<img src="${ALTARAY_LOGO_URL}" style="height:60px;object-fit:contain" alt="Altaray Property Services" />`
  : `<div style="font-size:24px;font-weight:900;letter-spacing:2px;color:#111;font-family:Georgia,serif">ALTARAY<span style="color:#c8a900">▲</span></div><div style="font-size:9px;letter-spacing:4px;color:#666;margin-top:2px">PROPERTY SERVICES</div>`;

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
  const [receiptModal, setReceiptModal] = useState(null); // { tenant, property }
  const chatEndRef = useRef(null);

  function generateReceiptHTML(property, tenant, year) {
    const months = MONTHS.filter(m => m.includes(year));
    const monthlyRows = months.map(m => ({ month: m, amount: tenant.payments[m] || 0 })).filter(r => r.amount > 0);
    const totalPaid = monthlyRows.reduce((s, r) => s + r.amount, 0);
    const ownerInfo = OWNERSHIP_MAP?.[property.id] || { corp: property.ownership, pct: 100 };
    const landlordName = ownerInfo.corp || "Altaray Property Services";
    return `<!DOCTYPE html><html><head><style>
      *{margin:0;padding:0;box-sizing:border-box}
      body{font-family:Arial,sans-serif;padding:50px;color:#111;max-width:700px;margin:0 auto}
      .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:30px;padding-bottom:20px;border-bottom:3px solid #111}
      .company{font-size:22px;font-weight:700;letter-spacing:1px}
      .subtitle{font-size:11px;color:#666;margin-top:3px;letter-spacing:2px}
      .receipt-title{font-size:13px;font-weight:700;color:#666;letter-spacing:3px;text-align:right}
      .receipt-num{font-size:11px;color:#999;margin-top:4px;text-align:right}
      .parties{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-bottom:30px}
      .party-label{font-size:10px;color:#999;letter-spacing:2px;margin-bottom:6px}
      .party-name{font-size:15px;font-weight:700;margin-bottom:3px}
      .party-detail{font-size:13px;color:#444;line-height:1.5}
      table{width:100%;border-collapse:collapse;margin-bottom:24px}
      th{background:#111;color:#fff;padding:10px 14px;text-align:left;font-size:11px;letter-spacing:1px}
      td{padding:10px 14px;border-bottom:1px solid #eee;font-size:13px}
      tr:last-child td{border-bottom:none}
      tr:nth-child(even){background:#fafafa}
      .total-row{background:#f6c90e!important;font-weight:700}
      .total-row td{font-size:15px;padding:12px 14px}
      .cra-note{background:#f0f7ff;border-left:4px solid #1d4ed8;padding:14px 18px;margin-bottom:24px;font-size:12px;color:#1e3a5f;line-height:1.7}
      .signature{margin-top:40px;padding-top:20px;border-top:1px solid #ddd;display:flex;justify-content:space-between;align-items:flex-end}
      .sig-line{width:200px;border-bottom:1px solid #111;margin-bottom:6px;height:40px}
      .sig-label{font-size:11px;color:#666;letter-spacing:1px}
      .footer{margin-top:30px;font-size:10px;color:#999;text-align:center;letter-spacing:1px}
    </style></head><body>
      <div class="header">
        <div>${LOGO_HTML}</div>
        <div>
          <div class="receipt-title">RENT RECEIPT</div>
          <div class="receipt-num">Date: ${new Date().toLocaleDateString("en-CA")}</div>
        </div>
      </div>
      <div class="parties">
        <div>
          <div class="party-label">TENANT</div>
          <div class="party-name">${tenant.name}</div>
          <div class="party-detail">${tenant.unit}<br/>${property.address}<br/>Kingston, ON</div>
        </div>
        <div>
          <div class="party-label">LANDLORD / OWNER</div>
          <div class="party-name">${landlordName}</div>
          <div class="party-detail">Altaray Property Services<br/>Kingston, ON<br/>${property.email || "altaraymanagement@gmail.com"}</div>
        </div>
      </div>
      <table>
        <tr><th>MONTH</th><th>AMOUNT PAID</th><th>STATUS</th></tr>
        ${monthlyRows.map(r => `<tr><td>${r.month}</td><td>$${r.amount.toFixed(2)}</td><td>✓ Received</td></tr>`).join("")}
        <tr class="total-row"><td>TOTAL RENT PAID — ${year}</td><td>$${totalPaid.toFixed(2)}</td><td></td></tr>
      </table>
      <div class="cra-note">
        <strong>FOR INCOME TAX PURPOSES:</strong> This receipt confirms that the above-named tenant paid the total amount shown for the rental of the residential unit at ${property.address}, Kingston, Ontario. This document may be used to support claims for rent paid on your Canadian income tax return (Ontario Trillium Benefit / ON-BEN Application).
      </div>
      <div class="signature">
        <div>
          <div class="sig-line"></div>
          <div class="sig-label">AUTHORIZED SIGNATURE</div>
          <div style="font-size:12px;margin-top:4px;color:#444">René Masse — Altaray Property Services</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:12px;color:#666">Property managed by</div>
          <div style="font-size:14px;font-weight:700">Altaray Property Services</div>
          <div style="font-size:11px;color:#999">altaraymanagement@gmail.com</div>
        </div>
      </div>
      <div class="footer">THIS IS AN OFFICIAL RENT RECEIPT — ALTARAY PROPERTY SERVICES — ${year}</div>
    </body></html>`;
  }

  function sendReceiptEmail(property, tenant, year) {
    const totalPaid = MONTHS.filter(m => m.includes(year)).reduce((s, m) => s + (tenant.payments[m] || 0), 0);
    const subject = `Rent Receipt ${year} — ${property.address}, ${tenant.unit}`;
    const body = `Dear ${tenant.name},\n\nPlease find your official rent receipt for ${year} attached.\n\nProperty: ${property.address}, ${tenant.unit}\nTotal Rent Paid (${year}): $${totalPaid.toFixed(2)}\n\nThis receipt can be used for your Canadian income tax return (Ontario Trillium Benefit).\n\nPlease don't hesitate to contact us if you have any questions.\n\nBest regards,\nRené Masse\nAltaray Property Services\n${property.email || "altaraymanagement@gmail.com"}`;
    const mailtoLink = `mailto:${tenant.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  }

  const ReceiptModal = () => {
    if (!receiptModal) return null;
    const { property, tenant } = receiptModal;
    const year = "2026";
    const totalPaid = MONTHS.filter(m => m.includes(year)).reduce((s, m) => s + (tenant.payments[m] || 0), 0);
    return (
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 16, padding: 28, width: "100%", maxWidth: 480 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ fontSize: 18, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Rent Receipt — {year}</div>
            <button onClick={() => setReceiptModal(null)} style={{ background: "none", border: "none", color: "#6b7280", fontSize: 20, cursor: "pointer" }}>✕</button>
          </div>
          <div style={{ background: "#070a10", borderRadius: 10, padding: "14px 18px", marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{tenant.name}</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>{tenant.unit} · {property.address}</div>
            <div style={{ fontSize: 20, color: "#22c55e", fontFamily: "'DM Mono',monospace", fontWeight: 700, marginTop: 8 }}>${totalPaid.toFixed(2)} <span style={{ fontSize: 12, color: "#4b5563" }}>total paid {year}</span></div>
          </div>
          {!tenant.email && (
            <div style={{ background: "#2a1200", border: "1px solid #f97316", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 12, color: "#f97316" }}>
              ⚠ No email on file for this tenant — receipt will open as PDF only
            </div>
          )}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => { const w = window.open("", "_blank"); w.document.write(generateReceiptHTML(property, tenant, year)); w.document.close(); setTimeout(() => w.print(), 600); }}
              style={{ flex: 1, padding: "12px", background: "#ef4444", border: "none", borderRadius: 10, color: "#fff", fontSize: 13, fontFamily: "'DM Mono',monospace", cursor: "pointer", fontWeight: 700 }}>
              ↓ PDF
            </button>
            {tenant.email && (
              <button onClick={() => { sendReceiptEmail(property, tenant, year); setReceiptModal(null); }}
                style={{ flex: 1, padding: "12px", background: "#f6c90e", border: "none", borderRadius: 10, color: "#000", fontSize: 13, fontFamily: "'DM Mono',monospace", cursor: "pointer", fontWeight: 700 }}>
                ✉ Email to {tenant.email.split("@")[0]}
              </button>
            )}
          </div>
          <div style={{ marginTop: 12, fontSize: 11, color: "#374151", textAlign: "center" }}>Receipt includes CRA tax note for Ontario Trillium Benefit</div>
        </div>
      </div>
    );
  };
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
              <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                {p.tenants.map(t => (
                  <button key={t.id} onClick={e => { e.stopPropagation(); setReceiptModal({ property: p, tenant: t }); }}
                    style={{ fontSize: 10, padding: "3px 8px", borderRadius: 8, border: "1px solid #1e3a5f", background: "#070a10", color: "#4b8ab0", cursor: "pointer", fontFamily: "'DM Mono',monospace" }}>
                    🧾 {t.name.split(" ")[0]}
                  </button>
                ))}
              </div>
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
  // Expense categories mirror your real spreadsheet format (vendor-level detail)
  // CRA T776 mapping happens at export time — day-to-day stays flexible
  const EXPENSE_CATEGORIES = [
    "Mortgage Principal","Mortgage Interest","Property Taxes","Insurance",
    "Utilities","Line of Credit","Co-owner Payment",
    "Repairs & Maintenance","Contractor - Other","Electrical","Plumbing",
    "Internet","Bank Charges","E-transfer Fees","Office Expenses",
    "Home Depot / Materials","Travel","Other"
  ];

  // CRA T776 line mapping — bundles your vendor categories into CRA lines
  const T776_CRA_MAP = {
    "Mortgage Interest":       { line: "8710", cra: "Interest on money borrowed" },
    "Property Taxes":          { line: "9180", cra: "Property taxes" },
    "Insurance":               { line: "8690", cra: "Insurance" },
    "Utilities":               { line: "9220", cra: "Utilities" },
    "Line of Credit":          { line: "8710", cra: "Interest on money borrowed" },
    "Co-owner Payment":        { line: "8860", cra: "Professional fees" },
    "Repairs & Maintenance":   { line: "8960", cra: "Repairs and maintenance" },
    "Contractor - Other":      { line: "8960", cra: "Repairs and maintenance" },
    "Electrical":              { line: "8960", cra: "Repairs and maintenance" },
    "Plumbing":                { line: "8960", cra: "Repairs and maintenance" },
    "Internet":                { line: "8810", cra: "Office expenses" },
    "Bank Charges":            { line: "8710", cra: "Interest on money borrowed" },
    "E-transfer Fees":         { line: "8710", cra: "Interest on money borrowed" },
    "Office Expenses":         { line: "8810", cra: "Office expenses" },
    "Home Depot / Materials":  { line: "8960", cra: "Repairs and maintenance" },
    "Travel":                  { line: "9200", cra: "Travel" },
    "Other":                   { line: "9270", cra: "Other expenses" },
    "Mortgage Principal":      { line: null,   cra: "Mortgage principal (not deductible)" },
  };

  const CORPORATIONS = [
    { id: "2771051", name: "2771051 Ontario Inc.", properties: ["43-ruskin","401-southwood","164-kirkpatrick"] },
    { id: "1000203074", name: "1000203074 Ontario Inc.", properties: ["232-van-order","32-holland"] },
    { id: "awesome-jv", name: "Awesome JV Deals Inc.", properties: ["787-downing","913-uxbridge","30-barbara","213-colborne"] },
    { id: "altaray-svc", name: "Altaray Property Svc Ltd.", properties: ["285-van-order","661-milford"] },
    { id: "personal", name: "René (Personal)", properties: ["293-van-order","82-hamilton"] },
    { id: "managed", name: "Managed Only", properties: ["311-portsmouth","1241-johnson","315-portsmouth"] },
  ];

  // Seed expense data — vendor-level, matching your real spreadsheet format
  const BLANK_MONTH = () => Object.fromEntries(EXPENSE_CATEGORIES.map(c => [c, 0]));

  const initExpenses = () => {
    const data = {};
    PORTFOLIO.forEach(p => {
      data[p.id] = {};
      MONTHS.forEach(m => { data[p.id][m] = BLANK_MONTH(); });
    });

    // ── 43 RUSKIN (2771051 Ontario Inc.) ────────────────────────────────────────
    const ruskin = data["43-ruskin"];
    ["Jan 2026","Feb 2026","Mar 2026"].forEach(m => {
      ruskin[m] = { ...BLANK_MONTH(),
        "Mortgage Principal": 1783.11, "Mortgage Interest": 420.00,
        "Property Taxes": 364.60, "Insurance": 128.00, "Utilities": 400.00 };
    });
    ruskin["Feb 2026"]["Mortgage Principal"] = 1248.23;

    // ── 401 SOUTHWOOD (2771051 Ontario Inc.) ─────────────────────────────────────
    const south = data["401-southwood"];
    ["Jan 2026","Feb 2026","Mar 2026"].forEach(m => {
      south[m] = { ...BLANK_MONTH(),
        "Mortgage Principal": 1978.00, "Mortgage Interest": 0,
        "Property Taxes": 322.50, "Insurance": 159.05, "Utilities": 209.03 };
    });

    // ── 82 HAMILTON (René & Veronica 50/50) — from your 2024 sheet ─────────────
    const ham = data["82-hamilton"];
    const hamMonths = {
      "Jan 2026": { "Mortgage Principal": 807.25, "Mortgage Interest": 420.00, "Property Taxes": 389.00, "Insurance": 274.63, "Co-owner Payment": 875.00, "Bank Charges": 0, "Repairs & Maintenance": 49.78 },
      "Feb 2026": { "Mortgage Principal": 807.25, "Mortgage Interest": 420.00, "Property Taxes": 389.00, "Insurance": 274.63, "Co-owner Payment": 875.00, "Bank Charges": 0, "Repairs & Maintenance": 38.10, "Electrical": 444.75, "Contractor - Other": 275.00 },
      "Mar 2026": { "Mortgage Principal": 807.25, "Mortgage Interest": 420.00, "Property Taxes": 389.00, "Insurance": 274.63, "Co-owner Payment": 875.00, "Bank Charges": 10.95, "Repairs & Maintenance": 50.00 },
    };
    Object.entries(hamMonths).forEach(([m, vals]) => {
      ham[m] = { ...BLANK_MONTH(), ...vals };
    });

    // ── 661 MILFORD (Altaray & Waxwing 50/50) — CIBC Annual Statement 2025 ──────
    // Loan #003440072 · $2,706.09/mo · Principal paid 2025: $840.31 · Interest paid: $25,066
    // Monthly: Principal $70.03 · Interest $2,088.83 · Rate 3.7% as at Dec 31 2025
    const milford = data["661-milford"];
    ["Jan 2026","Feb 2026","Mar 2026"].forEach(m => {
      milford[m] = { ...BLANK_MONTH(),
        "Mortgage Principal": 70.03,
        "Mortgage Interest": 2088.83,
        "Insurance": 0 };  // insurance to be confirmed
    });

    // ── 30 BARBARA (AwesomeJV & Sal 50/50) — Scotia Annual Statement 2025 ───────
    // Mortgage #5016099 · $2,194.48/mo · Principal paid 2025: $8,340.66 · Interest: $19,394.95
    // Monthly: Principal $695.06 · Interest $1,616.25 · Rate 3.9% as at Dec 31 2025
    const barbara = data["30-barbara"];
    ["Jan 2026","Feb 2026","Mar 2026"].forEach(m => {
      barbara[m] = { ...BLANK_MONTH(),
        "Mortgage Principal": 695.06,
        "Mortgage Interest": 1616.25,
        "Insurance": 0 };  // insurance to be confirmed
    });

    // ── 164 KIRKPATRICK ──────────────────────────────────────────────────────────
    ["Jan 2026","Feb 2026","Mar 2026"].forEach(m => {
      data["164-kirkpatrick"][m] = { ...BLANK_MONTH(),
        "Property Taxes": 0, "Insurance": 151.38 };
    });

    // ── 232 VAN ORDER ────────────────────────────────────────────────────────────
    ["Jan 2026","Feb 2026","Mar 2026"].forEach(m => {
      data["232-van-order"][m] = { ...BLANK_MONTH(), "Insurance": 142.75 };
    });

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

  // ── T776 TAX MODULE ──────────────────────────────────────────────────────────
  // T776 CRA lines in order — we bundle your vendor categories into these
  const T776_LINES = [
    { line: "8141", cra: "Gross rental income",              type: "income" },
    { line: "8521", cra: "Advertising",                      keys: [] },
    { line: "8690", cra: "Insurance",                        keys: ["Insurance"] },
    { line: "8710", cra: "Interest (mortgage + bank charges)",keys: ["Mortgage Interest","Line of Credit","Bank Charges","E-transfer Fees"] },
    { line: "8810", cra: "Office expenses",                  keys: ["Office Expenses","Internet"] },
    { line: "8860", cra: "Professional fees",                keys: ["Co-owner Payment"] },
    { line: "8960", cra: "Repairs and maintenance",          keys: ["Repairs & Maintenance","Contractor - Other","Electrical","Plumbing","Home Depot / Materials"] },
    { line: "9180", cra: "Property taxes",                   keys: ["Property Taxes"] },
    { line: "9200", cra: "Travel",                           keys: ["Travel"] },
    { line: "9220", cra: "Utilities",                        keys: ["Utilities"] },
    { line: "9270", cra: "Other expenses",                   keys: ["Other"] },
    { line: "NOTE", cra: "Mortgage principal (not deductible — capital)", keys: ["Mortgage Principal"], note: true },
  ];

  const [taxYear, setTaxYear] = useState("2026");
  const [taxProperty, setTaxProperty] = useState(PORTFOLIO.find(p => p.id === "43-ruskin"));
  const [taxView, setTaxView] = useState("property"); // property | corp | all

  function getYTDAllMonths(propId) {
    let rev = 0;
    const expTotals = Object.fromEntries(EXPENSE_CATEGORIES.map(c => [c, 0]));
    const monthlyRevenue = {};
    MONTHS.forEach(m => {
      const prop = PORTFOLIO.find(p => p.id === propId);
      if (!prop) return;
      const mRev = prop.tenants.reduce((s, t) => s + (t.payments[m] || 0), 0);
      rev += mRev;
      monthlyRevenue[m] = mRev;
      const exp = expenses[propId]?.[m] || {};
      EXPENSE_CATEGORIES.forEach(c => { expTotals[c] += (exp[c] || 0); });
    });
    return { revenue: rev, expTotals, monthlyRevenue };
  }

  function buildT776Lines(ytd) {
    // Bundle vendor categories into CRA lines
    const lines = [];
    T776_LINES.forEach(item => {
      if (item.type === "income") {
        lines.push({ ...item, amount: ytd.revenue });
      } else {
        const amount = (item.keys || []).reduce((s, k) => s + (ytd.expTotals[k] || 0), 0);
        lines.push({ ...item, amount });
      }
    });
    return lines;
  }

  function exportT776CSV(prop) {
    const own = OWNERSHIP_MAP[prop.id] || { corp: prop.ownership, pct: 100, coowner: "" };
    const ytd = getYTDAllMonths(prop.id);
    const f2 = n => n > 0 ? n.toFixed(2) : "";

    const rows = [
      [`${prop.address} — REAL ESTATE ACTIVITY`, taxYear],
      [`January ${taxYear} until December ${taxYear}`],
      [`Owner`, own.corp, `${own.pct}% ownership`, own.coowner ? `Co-owner: ${own.coowner}` : ""],
      [``],
      [`General Ledger — Account Balance`],
      [`Category`, `Debit (Expenses)`, `Credit (Income)`, `Notes`],
      [`Rental Gross`, ``, f2(ytd.revenue), MONTHS.filter(m => ytd.monthlyRevenue[m] > 0).map(m => `${m}: $${ytd.monthlyRevenue[m].toFixed(2)}`).join(" | ")],
      [`Advertising`, ``, ``, ``],
      [`Insurance`, f2(ytd.expTotals["Insurance"]), ``, ``],
      [`Interest`, f2((ytd.expTotals["Mortgage Interest"]||0)+(ytd.expTotals["Line of Credit"]||0)), ``, [ytd.expTotals["Mortgage Interest"]>0?`Mortgage: $${ytd.expTotals["Mortgage Interest"].toFixed(2)}`:"", ytd.expTotals["Line of Credit"]>0?`LOC: $${ytd.expTotals["Line of Credit"].toFixed(2)}`:""].filter(Boolean).join(" | ")],
      [`Office expenses`, f2((ytd.expTotals["Office Expenses"]||0)+(ytd.expTotals["Internet"]||0)), ``, ``],
      [`Legal or accounting fees`, ``, ``, ``],
      [`Operational Expense`, f2((ytd.expTotals["Bank Charges"]||0)+(ytd.expTotals["E-transfer Fees"]||0)), ``, ``],
      [`Capital Expense`, f2(ytd.expTotals["Home Depot / Materials"]), ``, `Not deductible — capital`],
      [`Maintenance and repairs`, f2((ytd.expTotals["Repairs & Maintenance"]||0)+(ytd.expTotals["Contractor - Other"]||0)+(ytd.expTotals["Electrical"]||0)+(ytd.expTotals["Plumbing"]||0)), ``, ``],
      [`Salaries wages and benefits`, f2(ytd.expTotals["Co-owner Payment"]), ``, own.coowner ? `${own.coowner} — management` : ``],
      [`Property taxes`, f2(ytd.expTotals["Property Taxes"]), ``, ``],
      [`Travel`, f2(ytd.expTotals["Travel"]), ``, ``],
      [`Utilities`, f2(ytd.expTotals["Utilities"]), ``, ``],
      [`Motor vehicle expenses`, ``, ``, ``],
      [`Bank Fees`, f2((ytd.expTotals["Bank Charges"]||0)+(ytd.expTotals["E-transfer Fees"]||0)), ``, ``],
      [`Internet`, f2(ytd.expTotals["Internet"]), ``, ``],
    ];

    const totalDebit = (ytd.expTotals["Insurance"]||0)+(ytd.expTotals["Mortgage Interest"]||0)+(ytd.expTotals["Line of Credit"]||0)+(ytd.expTotals["Office Expenses"]||0)+(ytd.expTotals["Internet"]||0)+(ytd.expTotals["Bank Charges"]||0)+(ytd.expTotals["E-transfer Fees"]||0)+(ytd.expTotals["Home Depot / Materials"]||0)+(ytd.expTotals["Repairs & Maintenance"]||0)+(ytd.expTotals["Contractor - Other"]||0)+(ytd.expTotals["Electrical"]||0)+(ytd.expTotals["Plumbing"]||0)+(ytd.expTotals["Co-owner Payment"]||0)+(ytd.expTotals["Property Taxes"]||0)+(ytd.expTotals["Travel"]||0)+(ytd.expTotals["Utilities"]||0)+(ytd.expTotals["Other"]||0);
    const difference = ytd.revenue - totalDebit;

    rows.push([``]);
    rows.push([`Totals`, totalDebit.toFixed(2), ytd.revenue.toFixed(2), ``]);
    rows.push([``]);
    rows.push([`Difference`, ``, difference >= 0 ? difference.toFixed(2) : `(${Math.abs(difference).toFixed(2)})`, difference >= 0 ? `Net Rental Income` : `Net Rental Loss`]);
    if (own.pct < 100) {
      rows.push([`Your ${own.pct}% Share`, ``, (difference * own.pct / 100 >= 0 ? (difference * own.pct / 100).toFixed(2) : `(${Math.abs(difference * own.pct / 100).toFixed(2)})`), `Co-owner: ${own.coowner}`]);
    }

    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `T776_${prop.address.replace(/ /g,"_")}_${taxYear}.csv`;
    a.click();
  }

  function exportT776PDF(prop) {
    const own = OWNERSHIP_MAP[prop.id] || { corp: prop.ownership, pct: 100, coowner: "" };
    const ytd = getYTDAllMonths(prop.id);
    const f = n => n > 0 ? "$ " + n.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "";

    // Build General Ledger rows matching 213 Nelson format exactly
    // CRA T776 categories in order — Debit = expense, Credit = income
    const GL_ROWS = [
      { label: "Rental Gross",             debit: null,                                  credit: ytd.revenue,                          note: MONTHS.filter(m => ytd.monthlyRevenue[m] > 0).map(m => `${m}: $${ytd.monthlyRevenue[m].toFixed(2)}`).join(" | ") },
      { label: "Advertising",              debit: ytd.expTotals["Other"] || 0,           credit: null,                                 note: "" },
      { label: "Insurance",                debit: ytd.expTotals["Insurance"] || 0,        credit: null,                                 note: "" },
      { label: "Interest",                 debit: (ytd.expTotals["Mortgage Interest"] || 0) + (ytd.expTotals["Line of Credit"] || 0), credit: null, note: [ytd.expTotals["Mortgage Interest"] > 0 ? `Mortgage interest: $${ytd.expTotals["Mortgage Interest"].toFixed(2)}` : "", ytd.expTotals["Line of Credit"] > 0 ? `Line of credit: $${ytd.expTotals["Line of Credit"].toFixed(2)}` : ""].filter(Boolean).join(" | ") },
      { label: "Office expenses",          debit: (ytd.expTotals["Office Expenses"] || 0) + (ytd.expTotals["Internet"] || 0), credit: null, note: "" },
      { label: "Legal or accounting fees", debit: 0,                                     credit: null,                                 note: "" },
      { label: "Operational Expense",      debit: (ytd.expTotals["E-transfer Fees"] || 0) + (ytd.expTotals["Bank Charges"] || 0), credit: null, note: "" },
      { label: "Capital Expense",          debit: ytd.expTotals["Home Depot / Materials"] || 0, credit: null,                         note: "Not deductible — capital" },
      { label: "Maintenance and repairs",  debit: (ytd.expTotals["Repairs & Maintenance"] || 0) + (ytd.expTotals["Contractor - Other"] || 0) + (ytd.expTotals["Electrical"] || 0) + (ytd.expTotals["Plumbing"] || 0), credit: null, note: "" },
      { label: "Salaries, wages, benefits",debit: ytd.expTotals["Co-owner Payment"] || 0, credit: null,                               note: own.coowner ? `${own.coowner} — management` : "" },
      { label: "Property taxes",           debit: ytd.expTotals["Property Taxes"] || 0,  credit: null,                                 note: "" },
      { label: "Travel",                   debit: ytd.expTotals["Travel"] || 0,           credit: null,                                 note: "" },
      { label: "Utilities",                debit: ytd.expTotals["Utilities"] || 0,        credit: null,                                 note: "" },
      { label: "Motor vehicle expenses",   debit: 0,                                     credit: null,                                 note: "" },
      { label: "Bank Fees",                debit: (ytd.expTotals["Bank Charges"] || 0) + (ytd.expTotals["E-transfer Fees"] || 0), credit: null, note: "" },
      { label: "Internet",                 debit: ytd.expTotals["Internet"] || 0,         credit: null,                                 note: "" },
    ];

    // Totals
    const totalDebit = GL_ROWS.reduce((s, r) => s + (r.debit || 0), 0);
    const totalCredit = ytd.revenue;
    const difference = totalCredit - totalDebit;
    const isLoss = difference < 0;

    // Share-adjusted for co-owned properties
    const shareNote = own.pct < 100 ? ` (Your ${own.pct}% share: $ ${(Math.abs(difference) * own.pct / 100).toLocaleString("en-CA", {minimumFractionDigits:2})})` : "";

    const glRows = GL_ROWS.map((row, i) => {
      const hasVal = (row.debit > 0) || (row.credit > 0);
      return `<tr style="background:${i % 2 === 0 ? "#fff" : "#fafafa"}">
        <td style="padding:7px 12px;border-bottom:1px solid #eee;font-size:13px;color:${hasVal ? "#111" : "#bbb"}">${row.label}</td>
        <td style="padding:7px 12px;border-bottom:1px solid #eee;text-align:right;font-family:monospace;font-size:13px;color:#c0392b">${row.debit > 0 ? f(row.debit) : ""}</td>
        <td style="padding:7px 12px;border-bottom:1px solid #eee;text-align:right;font-family:monospace;font-size:13px;color:#27ae60">${row.credit > 0 ? f(row.credit) : ""}</td>
        <td style="padding:7px 12px;border-bottom:1px solid #eee;font-size:11px;color:#999;font-style:italic">${row.note || ""}</td>
      </tr>`;
    }).join("");

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
    <title>T776 — ${prop.address} — ${taxYear}</title>
    <style>
      *{box-sizing:border-box}
      body{font-family:Arial,sans-serif;padding:48px;color:#111;max-width:900px;margin:0 auto;font-size:13px}
      .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px}
      .title{font-size:22px;font-weight:900;letter-spacing:1px;margin:0}
      .subtitle{font-size:11px;color:#666;letter-spacing:2px;text-transform:uppercase;margin:4px 0 0}
      .year-badge{background:#111;color:#fff;padding:6px 16px;font-size:18px;font-weight:700;border-radius:4px;font-family:monospace}
      .divider{border:none;border-top:3px solid #111;margin:16px 0}
      .meta-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:24px}
      .meta-box{border:1px solid #ddd;padding:10px 12px;border-radius:3px}
      .meta-label{font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:#999;margin-bottom:3px}
      .meta-val{font-weight:700;font-size:13px}
      .section-label{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#666;margin:20px 0 6px;font-weight:700}
      table{width:100%;border-collapse:collapse;border:1px solid #ddd}
      thead tr{background:#111;color:#fff}
      thead th{padding:8px 12px;text-align:left;font-size:11px;letter-spacing:1px;font-weight:600}
      thead th.right{text-align:right}
      .totals-row{background:#f0f0f0;font-weight:700}
      .totals-row td{padding:10px 12px;font-family:monospace;font-size:14px;border-top:3px double #111}
      .diff-row td{padding:10px 12px;font-family:monospace;font-size:14px;font-weight:900;background:${isLoss ? "#fef2f2" : "#f0fdf4"};color:${isLoss ? "#c0392b" : "#27ae60"};border-top:1px solid #ddd}
      .share-row td{padding:7px 12px;font-size:12px;color:#555;background:#fffbeb;border-top:1px solid #ddd}
      .footer{margin-top:32px;font-size:10px;color:#aaa;border-top:1px solid #eee;padding-top:12px;line-height:1.6}
      @media print{body{padding:24px}.footer{page-break-inside:avoid}}
    </style></head><body>

      <div class="header">
        <div>
          <div class="title">REAL ESTATE ACTIVITY</div>
          <div class="subtitle">T776 — Statement of Real Estate Rentals · Altaray Property Services</div>
        </div>
        <div class="year-badge">${taxYear}</div>
      </div>
      <hr class="divider">

      <div class="meta-grid">
        <div class="meta-box"><div class="meta-label">Property Address</div><div class="meta-val">${prop.address}</div></div>
        <div class="meta-box"><div class="meta-label">Owner / Corporation</div><div class="meta-val">${own.corp}</div></div>
        <div class="meta-box"><div class="meta-label">Period</div><div class="meta-val">January ${taxYear} – December ${taxYear}</div></div>
        <div class="meta-box"><div class="meta-label">Ownership / Co-owner</div><div class="meta-val">${own.pct}% ${own.coowner ? "· " + own.coowner : ""}</div></div>
      </div>

      <div class="section-label">General Ledger — Account Balance</div>
      <table>
        <thead>
          <tr>
            <th style="width:38%">Category</th>
            <th class="right" style="width:18%">Debit (Expenses)</th>
            <th class="right" style="width:18%">Credit (Income)</th>
            <th style="width:26%">Notes</th>
          </tr>
        </thead>
        <tbody>
          ${glRows}
          <tr class="totals-row">
            <td style="padding:10px 12px">Totals</td>
            <td style="padding:10px 12px;text-align:right;color:#c0392b">$ ${totalDebit.toLocaleString("en-CA",{minimumFractionDigits:2})}</td>
            <td style="padding:10px 12px;text-align:right;color:#27ae60">$ ${totalCredit.toLocaleString("en-CA",{minimumFractionDigits:2})}</td>
            <td></td>
          </tr>
          <tr class="diff-row">
            <td colspan="2">Difference (Net Rental ${isLoss ? "Loss" : "Income"})</td>
            <td style="text-align:right">${isLoss ? "(" : ""}$ ${Math.abs(difference).toLocaleString("en-CA",{minimumFractionDigits:2})}${isLoss ? ")" : ""}</td>
            <td></td>
          </tr>
          ${own.pct < 100 ? `<tr class="share-row"><td colspan="2">Your ${own.pct}% Share — Net ${isLoss ? "Loss" : "Income"}</td><td style="text-align:right">${isLoss ? "(" : ""}$ ${(Math.abs(difference) * own.pct / 100).toLocaleString("en-CA",{minimumFractionDigits:2})}${isLoss ? ")" : ""}</td><td>Co-owner: ${own.coowner}</td></tr>` : ""}
        </tbody>
      </table>

      <div class="footer">
        Generated by EstateOS · Altaray Property Services · René Masse · ${new Date().toLocaleDateString("en-CA")}<br>
        Period: January ${taxYear} to December ${taxYear} · Property: ${prop.address}<br>
        This is a working summary prepared for CRA T776 filing. Review with a tax professional before submitting.
      </div>
    </body></html>`;

    const blob = new Blob([html], { type: "text/html" });
    const w = window.open(URL.createObjectURL(blob), "_blank");
    setTimeout(() => w?.print(), 800);
  }

  const T776Tab = () => {
    const ownedProps = PORTFOLIO.filter(p => p.owned);
    const p = taxProperty;
    const own = OWNERSHIP_MAP[p?.id] || { corp: p?.ownership, pct: 100, coowner: "" };
    const ytd = p ? getYTDAllMonths(p.id) : { revenue: 0, expTotals: {} };
    const totalExp = EXPENSE_CATEGORIES.reduce((s, c) => s + (ytd.expTotals[c] || 0), 0);
    const netIncome = ytd.revenue - totalExp;

    // Corp rollup for T776
    const corpT776 = CORPORATIONS.filter(c => c.id !== "managed").map(corp => {
      let rev = 0, expT = {};
      EXPENSE_CATEGORIES.forEach(c => expT[c] = 0);
      corp.properties.forEach(pid => {
        const d = getYTDAllMonths(pid);
        rev += d.revenue;
        EXPENSE_CATEGORIES.forEach(c => expT[c] += (d.expTotals[c] || 0));
      });
      const totalE = EXPENSE_CATEGORIES.reduce((s, c) => s + (expT[c] || 0), 0);
      return { ...corp, revenue: rev, expTotals: expT, totalExp: totalE, netIncome: rev - totalE };
    });

    return (
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>T776 — Rental Income</div>
            <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>CRA Statement of Real Estate Rentals</div>
          </div>
          <select value={taxYear} onChange={e => setTaxYear(e.target.value)}
            style={{ background: "#0d1117", border: "1px solid #161d2a", color: "#f1f5f9", fontSize: 13, borderRadius: 8, padding: "6px 12px" }}>
            {["2026","2025","2024"].map(y => <option key={y}>{y}</option>)}
          </select>
        </div>

        {/* View Toggle */}
        <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
          {[["property","Per Property"],["corp","By Corporation"],["all","All Properties"]].map(([id, label]) => (
            <button key={id} onClick={() => setTaxView(id)}
              style={{ padding: "7px 18px", borderRadius: 20, border: "1px solid #161d2a", background: taxView === id ? "#f6c90e" : "#0d1117", color: taxView === id ? "#000" : "#6b7280", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* ── PER PROPERTY T776 ── */}
        {taxView === "property" && p && (
          <div>
            <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
              <select value={p.id} onChange={e => setTaxProperty(PORTFOLIO.find(x => x.id === e.target.value))}
                style={{ background: "#0d1117", border: "1px solid #161d2a", color: "#f1f5f9", fontSize: 14, borderRadius: 8, padding: "8px 14px", flex: 1, maxWidth: 360 }}>
                {ownedProps.map(prop => <option key={prop.id} value={prop.id}>{prop.address}</option>)}
              </select>
              <button onClick={() => exportT776PDF(p)}
                style={{ padding: "8px 18px", background: "#ef4444", border: "none", borderRadius: 8, color: "#fff", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
                ↓ PDF
              </button>
              <button onClick={() => exportT776CSV(p)}
                style={{ padding: "8px 18px", background: "#22c55e", border: "none", borderRadius: 8, color: "#000", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
                ↓ EXCEL
              </button>
            </div>

            {/* Property Header */}
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px", marginBottom: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
                {[["PROPERTY", p.address], ["OWNER / CORP", own.corp], ["% OWNERSHIP", own.pct + "%"], ["CO-OWNER", own.coowner || "N/A"]].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 4 }}>{l}</div>
                    <div style={{ fontSize: 13, color: "#f1f5f9", fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* T776 Table — Revenue by month + Vendor expenses + CRA consolidation */}
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
              {/* Revenue section */}
              <div style={{ padding: "10px 18px", background: "#0a1a0e", borderBottom: "1px solid #0d2b1a" }}>
                <div style={{ fontSize: 10, color: "#22c55e", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>REVENUE BY MONTH</div>
              </div>
              {MONTHS.filter(m => ytd.monthlyRevenue?.[m] > 0).map((m, i) => (
                <div key={m} style={{ display: "grid", gridTemplateColumns: "160px 1fr 130px", padding: "8px 18px", borderBottom: "1px solid #0f1520", background: i % 2 === 0 ? "#0a0e16" : "#0d1117" }}>
                  <div style={{ color: "#4b5563", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>{m}</div>
                  <div style={{ color: "#d1fae5", fontSize: 12 }}>Rent Collected</div>
                  <div style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{fmt(ytd.monthlyRevenue[m])}</div>
                </div>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 130px 130px", padding: "12px 18px", borderTop: "2px solid #0d2b1a", background: "#060e08" }}>
                <div style={{ color: "#22c55e", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>Line 8141</div>
                <div style={{ color: "#22c55e", fontWeight: 700 }}>Gross Rental Income</div>
                <div style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{fmt(ytd.revenue)}</div>
                <div style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace", fontSize: 12 }}>Your share: {fmt(ytd.revenue * own.pct / 100)}</div>
              </div>
            </div>

            {/* Vendor expense detail */}
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
              <div style={{ padding: "10px 18px", background: "#1a0a00", borderBottom: "1px solid #2a1200" }}>
                <div style={{ fontSize: 10, color: "#f97316", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>EXPENSES — VENDOR DETAIL</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 130px 130px 160px", padding: "8px 18px", background: "#060809", borderBottom: "1px solid #161d2a" }}>
                {["CATEGORY","FULL AMOUNT","YOUR SHARE","CRA LINE"].map(h => <div key={h} style={{ fontSize: 10, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
              </div>
              {EXPENSE_CATEGORIES.map((cat, i) => {
                const raw = ytd.expTotals[cat] || 0;
                const craRef = T776_CRA_MAP[cat];
                const lineLabel = craRef?.line ? `Line ${craRef.line}` : "Non-deductible";
                return (
                  <div key={cat} style={{ display: "grid", gridTemplateColumns: "1fr 130px 130px 160px", padding: "9px 18px", borderBottom: "1px solid #0f1520", background: i % 2 === 0 ? "#0a0e16" : "#0d1117", opacity: raw > 0 ? 1 : 0.35 }}>
                    <div style={{ color: raw > 0 ? "#e2e8f0" : "#374151", fontSize: 13 }}>{cat}</div>
                    <div style={{ color: raw > 0 ? "#f97316" : "#1f2937", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{raw > 0 ? fmt(raw) : "—"}</div>
                    <div style={{ color: raw > 0 ? "#f97316" : "#1f2937", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{raw > 0 ? fmt(raw * own.pct / 100) : "—"}</div>
                    <div style={{ color: "#4b5563", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>{lineLabel}</div>
                  </div>
                );
              })}
            </div>

            {/* CRA T776 consolidated */}
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "10px 18px", background: "#0d0d1a", borderBottom: "1px solid #161d2a" }}>
                <div style={{ fontSize: 10, color: "#818cf8", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>CRA T776 — CONSOLIDATED LINES</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 130px 130px", padding: "8px 18px", background: "#060809", borderBottom: "1px solid #161d2a" }}>
                {["CRA LINE","DESCRIPTION","FULL AMOUNT","YOUR SHARE"].map(h => <div key={h} style={{ fontSize: 10, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
              </div>
              {(() => {
                const lines = buildT776Lines(ytd);
                const deductible = lines.filter(l => !l.note && l.type !== "income");
                const totalExpD = deductible.reduce((s, l) => s + l.amount, 0);
                const net = ytd.revenue - totalExpD;
                return (<>
                  {lines.filter(l => l.type !== "income").map((item, i) => {
                    if (!item.amount && !item.note) return null;
                    return (
                      <div key={item.line} style={{ display: "grid", gridTemplateColumns: "120px 1fr 130px 130px", padding: "10px 18px", borderBottom: "1px solid #0f1520", background: item.note ? "#1a1500" : i % 2 === 0 ? "#0a0e16" : "#0d1117", opacity: item.amount > 0 ? 1 : 0.4 }}>
                        <div style={{ color: item.note ? "#f59e0b" : "#4b5563", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>{item.note ? "NOTE" : `Line ${item.line}`}</div>
                        <div style={{ color: item.note ? "#f59e0b" : item.amount > 0 ? "#e2e8f0" : "#374151", fontSize: 13 }}>{item.cra}{item.note && <span style={{ color: "#6b7280", fontSize: 10 }}> — not deductible</span>}</div>
                        <div style={{ color: item.note ? "#6b7280" : item.amount > 0 ? "#f97316" : "#1f2937", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{item.amount > 0 ? fmt(item.amount) : "—"}</div>
                        <div style={{ color: item.note ? "#6b7280" : item.amount > 0 ? "#f97316" : "#1f2937", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{item.amount > 0 && !item.note ? fmt(item.amount * own.pct / 100) : "—"}</div>
                      </div>
                    );
                  })}
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 130px 130px", padding: "12px 18px", borderTop: "2px solid #1e293b", background: "#0a0e16" }}>
                    <div></div>
                    <div style={{ color: "#9ca3af", fontWeight: 700, fontSize: 13 }}>Total Deductible Expenses</div>
                    <div style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{fmt(totalExpD)}</div>
                    <div style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{fmt(totalExpD * own.pct / 100)}</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 130px 130px", padding: "14px 18px", background: "#f6c90e" }}>
                    <div style={{ color: "#000", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>NET INCOME</div>
                    <div style={{ color: "#000", fontWeight: 700, fontSize: 14 }}>Net Rental Income (Loss)</div>
                    <div style={{ color: "#000", fontFamily: "'DM Mono',monospace", fontWeight: 700, fontSize: 14 }}>{fmt(net)}</div>
                    <div style={{ color: "#000", fontFamily: "'DM Mono',monospace", fontWeight: 700, fontSize: 14 }}>{fmt(net * own.pct / 100)}</div>
                  </div>
                </>);
              })()}
            </div>
          </div>
        )}

        {/* ── BY CORPORATION T776 ── */}
        {taxView === "corp" && (
          <div>
            {corpT776.map(corp => (
              <div key={corp.id} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px", marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9" }}>{corp.name}</div>
                    <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{corp.properties.length} properties · Tax Year {taxYear}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace" }}>NET RENTAL INCOME</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: corp.netIncome >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace" }}>{fmt(corp.netIncome)}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                  {[["GROSS INCOME", fmt(corp.revenue), "#22c55e"], ["TOTAL EXPENSES", fmt(corp.totalExp), "#f97316"], ["NET INCOME", fmt(corp.netIncome), corp.netIncome >= 0 ? "#22c55e" : "#ef4444"]].map(([l, v, c]) => (
                    <div key={l} style={{ background: "#070a10", borderRadius: 8, padding: "10px 14px" }}>
                      <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 1, marginBottom: 4 }}>{l}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
                    </div>
                  ))}
                </div>
                {EXPENSE_CATEGORIES.map(cat => {
                  const raw = corp.expTotals[cat] || 0;
                  if (!raw) return null;
                  const craRef = T776_CRA_MAP[cat];
                  return (
                    <div key={cat} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderTop: "1px solid #0f1520" }}>
                      <span style={{ color: "#6b7280", fontSize: 12 }}>{cat} <span style={{ color: "#374151", fontSize: 10 }}>{craRef?.line ? `→ Line ${craRef.line}` : "non-deductible"}</span></span>
                      <span style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{fmt(raw)}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* ── ALL PROPERTIES T776 ── */}
        {taxView === "all" && (
          <div>
            <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 12 }}>ALL OWNED PROPERTIES — TAX YEAR {taxYear}</div>
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "10px 18px", borderBottom: "1px solid #161d2a", background: "#060809" }}>
                {["PROPERTY","OWNERSHIP","GROSS INCOME","EXPENSES","NET INCOME"].map(h => <div key={h} style={{ fontSize: 10, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
              </div>
              {ownedProps.map((prop, i) => {
                const own = OWNERSHIP_MAP[prop.id] || { corp: prop.ownership, pct: 100 };
                const ytd = getYTDAllMonths(prop.id);
                const totalE = EXPENSE_CATEGORIES.reduce((s, c) => s + (ytd.expTotals[c] || 0), 0);
                const net = ytd.revenue - totalE;
                return (
                  <div key={prop.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "11px 18px", borderBottom: i < ownedProps.length - 1 ? "1px solid #0f1520" : "none", background: i % 2 === 0 ? "#0a0e16" : "#0d1117" }}>
                    <div>
                      <div style={{ color: "#e2e8f0", fontSize: 13 }}>{prop.address}</div>
                      <div style={{ color: "#374151", fontSize: 10, fontFamily: "'DM Mono',monospace" }}>{own.corp}</div>
                    </div>
                    <div style={{ color: "#6b7280", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>{own.pct}%</div>
                    <div style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{fmt(ytd.revenue)}</div>
                    <div style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>({fmt(totalE)})</div>
                    <div style={{ color: net >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 600 }}>{fmt(net)}</div>
                  </div>
                );
              })}
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "13px 18px", borderTop: "2px solid #1e293b", background: "#f6c90e" }}>
                <div style={{ color: "#000", fontWeight: 700, fontSize: 13 }}>PORTFOLIO TOTAL</div>
                <div></div>
                <div style={{ color: "#000", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700 }}>{fmt(ownedProps.reduce((s, p) => s + getYTDAllMonths(p.id).revenue, 0))}</div>
                <div style={{ color: "#000", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700 }}>({fmt(ownedProps.reduce((s, p) => { const y = getYTDAllMonths(p.id); return s + EXPENSE_CATEGORIES.reduce((es, c) => es + (y.expTotals[c] || 0), 0); }, 0))})</div>
                <div style={{ color: "#000", fontFamily: "'DM Mono',monospace", fontSize: 15, fontWeight: 700 }}>{fmt(ownedProps.reduce((s, p) => { const y = getYTDAllMonths(p.id); const e = EXPENSE_CATEGORIES.reduce((es, c) => es + (y.expTotals[c] || 0), 0); return s + y.revenue - e; }, 0))}</div>
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

  // ── MORTGAGES TAB ────────────────────────────────────────────────────────────
  const MortgagesTab = () => {
    const knownMortgages = Object.entries(MORTGAGE_DATA);
    const totalBalance = knownMortgages.reduce((s, [, m]) => s + m.balanceDec2025, 0);
    const totalInterest2025 = knownMortgages.reduce((s, [, m]) => s + m.interestPaid2025, 0);
    const totalPrincipal2025 = knownMortgages.reduce((s, [, m]) => s + m.principalPaid2025, 0);

    return (
      <div style={{ padding: 24 }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Mortgages</div>
          <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>Annual statements · Real data from lenders</div>
        </div>

        {/* Portfolio mortgage summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }}>
          {[
            ["TOTAL BALANCE (Dec 31, 2025)", fmt(totalBalance), "#ef4444"],
            ["INTEREST PAID 2025", fmt(totalInterest2025), "#f97316"],
            ["PRINCIPAL PAID 2025", fmt(totalPrincipal2025), "#22c55e"],
          ].map(([l, v, c]) => (
            <div key={l} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 8 }}>{l}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Individual mortgage cards */}
        {knownMortgages.map(([propId, m]) => {
          const prop = PORTFOLIO.find(p => p.id === propId);
          const own = OWNERSHIP_MAP[propId];
          const equityPct = ((m.balanceDec2025 / (m.balanceJan2025)) * 100).toFixed(1);
          return (
            <div key={propId} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 14, padding: "22px 26px", marginBottom: 18 }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9" }}>{prop?.address}</div>
                  <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginTop: 4 }}>
                    {m.lender} · Loan #{m.loanNum} · {m.type}
                  </div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>{own?.corp} · {own?.pct}% owned · Mortgagee: {m.mortgagee}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>BALANCE DEC 31, 2025</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#ef4444", fontFamily: "'DM Mono',monospace" }}>{fmt(m.balanceDec2025)}</div>
                  <div style={{ fontSize: 11, color: "#4b5563", marginTop: 2 }}>Renewal: {m.maturity}</div>
                </div>
              </div>

              {/* Key metrics grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, marginBottom: 16 }}>
                {[
                  ["MONTHLY PAYMENT", fmt(m.monthlyPayment), "#f1f5f9"],
                  ["MONTHLY PRINCIPAL", fmt(m.monthlyPrincipal), "#22c55e"],
                  ["MONTHLY INTEREST", fmt(m.monthlyInterest), "#f97316"],
                  ["INTEREST RATE", m.rateEnd + "%", "#818cf8"],
                  ["PRINCIPAL PAID 2025", fmt(m.principalPaid2025), "#22c55e"],
                ].map(([l, v, c]) => (
                  <div key={l} style={{ background: "#070a10", borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ fontSize: 9, color: "#374151", fontFamily: "'DM Mono',monospace", letterSpacing: 1.5, marginBottom: 5 }}>{l}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
                  </div>
                ))}
              </div>

              {/* 2025 annual summary */}
              <div style={{ background: "#070a10", borderRadius: 10, padding: "14px 16px", marginBottom: 12 }}>
                <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>2025 ANNUAL STATEMENT SUMMARY</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                  {[
                    ["Opening Balance (Jan 1)", fmt(m.balanceJan2025), "#9ca3af"],
                    ["Total Interest Paid", fmt(m.interestPaid2025), "#f97316"],
                    ["Total Principal Paid", fmt(m.principalPaid2025), "#22c55e"],
                    ["Closing Balance (Dec 31)", fmt(m.balanceDec2025), "#ef4444"],
                  ].map(([l, v, c]) => (
                    <div key={l}>
                      <div style={{ fontSize: 10, color: "#374151", fontFamily: "'DM Mono',monospace", marginBottom: 3 }}>{l}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rate info & note */}
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ background: "#0d0d1a", border: "1px solid #1e1b4b", borderRadius: 6, padding: "6px 12px", fontSize: 11, color: "#818cf8", fontFamily: "'DM Mono',monospace" }}>
                  Rate Jan 1: {m.rateStart}% → Dec 31: {m.rateEnd}%
                </div>
                {m.note && <div style={{ fontSize: 11, color: "#4b5563", fontStyle: "italic" }}>{m.note}</div>}
              </div>
            </div>
          );
        })}

        {/* Placeholder for properties without uploaded statements */}
        <div style={{ background: "#0d1117", border: "1px dashed #1e293b", borderRadius: 14, padding: "20px 26px", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#374151", marginBottom: 6 }}>More properties have mortgages not yet uploaded</div>
          <div style={{ fontSize: 11, color: "#1f2937", fontFamily: "'DM Mono',monospace" }}>Upload annual statements for 43 Ruskin · 401 Southwood · 164 Kirkpatrick · 232 Van Order · 32 Holland · 285 Van Order · 82 Hamilton · 293 Van Order</div>
        </div>
      </div>
    );
  };

  // ── VACANCIES TAB ─────────────────────────────────────────────────────────────
  const VACANCIES = [
    {
      id: "v1", available: "March 1, 2026", address: "164 Kirkpatrick", unit: "Unit 2",
      beds: 2, baths: 1, price: 1700, utilities: "Plus utilities", parking: null,
      type: "apartment", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/1iE0B9oqFN-ZVmSqIcN54I24lOMrto6Gd",
      notes: "2 bedroom unit — well maintained",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v2", available: "March 1, 2026", address: "246 Adelaide", unit: "Unit 5",
      beds: 2, baths: 1, price: 1800, utilities: "All inclusive", parking: "+$50/mo",
      type: "apartment", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/1APTlcjO_rt2Dc7cuY7iqNcGe-Dxlb6qc",
      notes: "All utilities included. Parking available.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v3", available: "April 1, 2026", address: "246 Adelaide", unit: "Unit 8",
      beds: 2, baths: 1, price: 1800, utilities: "All inclusive", parking: "+$50/mo",
      type: "apartment", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/1APTlcjO_rt2Dc7cuY7iqNcGe-Dxlb6qc",
      notes: "All utilities included. Parking available.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v4", available: "April 1, 2026", address: "32 Holland Cres", unit: "Unit 1",
      beds: 3, baths: 2, price: 2000, utilities: "Plus utilities", parking: "2 spots included",
      type: "apartment", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/1kI4EUdoD75mttuhbaDYmJvlQNmKaV9i4",
      notes: "Spacious 3 bed / 2 bath. 2 parking spots included.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v5", available: "May 1, 2026", address: "246 Adelaide", unit: "Unit 13",
      beds: 2, baths: 1, price: 1800, utilities: "All inclusive", parking: "+$50/mo",
      type: "apartment", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/1APTlcjO_rt2Dc7cuY7iqNcGe-Dxlb6qc",
      notes: "All utilities included. Parking available.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v6", available: "May 1, 2026", address: "1241 Johnson", unit: "Unit 2",
      beds: 3, baths: 1, price: 1800, utilities: "Plus utilities", parking: "2 spots included",
      type: "apartment", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/10kQ35yxWMPAOB0qDywC38jUSau9x6w25",
      notes: "3 bedrooms, 2 parking spots.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v7", available: "May 1, 2026", address: "28 Toronto St", unit: "Whole House",
      beds: 8, baths: 4, price: 1200, utilities: "Plus utilities", parking: "4 spots",
      type: "house", status: "available",
      driveFolder: null,
      notes: "8 bedroom house. $1,200/room. 4 parking spots. Great for groups or student house.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v8", available: "May 1, 2026", address: "82 Hamilton", unit: "Rooms",
      beds: null, baths: null, price: 750, utilities: "All inclusive", parking: "Street parking",
      type: "rooms", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/1tkZgNRkcM98uGym9djSCb27K6cp3KCoF",
      notes: "4 rooms available. Students & young professionals. All inclusive. Furnished.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v9", available: "May 1, 2026", address: "311 Portsmouth", unit: "Rooms",
      beds: null, baths: null, price: 750, utilities: "All inclusive", parking: "Limited",
      type: "rooms", status: "available",
      driveFolder: null,
      notes: "4 rooms available. Students & young professionals. All inclusive.",
      contact: "altaraymanagement@gmail.com",
    },
    {
      id: "v10", available: "May 1, 2026", address: "19 MacPherson", unit: "Rooms",
      beds: null, baths: null, price: 750, utilities: "Plus utilities", parking: "Limited",
      type: "rooms", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/1h9ol09t2OEShkbuD1Qeg4Tid5bh971M2",
      notes: "4 rooms available. Women only. Furnished. Shared common areas.",
      contact: "altaraymanagement@gmail.com",
      tag: "Women Only",
    },
    {
      id: "v11", available: "May 1, 2026", address: "152 Calderwood", unit: "Rooms",
      beds: null, baths: null, price: 750, utilities: "All inclusive", parking: "2 spots",
      type: "rooms", status: "available",
      driveFolder: "https://drive.google.com/drive/folders/14ZmBucYolzHxdEfMwi3GQkAmy9ihbWFB",
      notes: "4 rooms available. Students & young professionals. All inclusive. Furnished.",
      contact: "altaraymanagement@gmail.com",
    },
  ];

  const [vacancyFilter, setVacancyFilter] = useState("all"); // all | march | april | may | apartment | rooms
  const [vacancySelected, setVacancySelected] = useState(null);

  const VacanciesTab = () => {
    const totalRevenuePotential = VACANCIES.reduce((s, v) => s + v.price, 0);
    const byMonth = {
      "March 1, 2026": VACANCIES.filter(v => v.available === "March 1, 2026"),
      "April 1, 2026": VACANCIES.filter(v => v.available === "April 1, 2026"),
      "May 1, 2026":   VACANCIES.filter(v => v.available === "May 1, 2026"),
    };
    const filtered = vacancyFilter === "all" ? VACANCIES
      : vacancyFilter === "march" ? VACANCIES.filter(v => v.available.includes("March"))
      : vacancyFilter === "april" ? VACANCIES.filter(v => v.available.includes("April"))
      : vacancyFilter === "may"   ? VACANCIES.filter(v => v.available.includes("May"))
      : vacancyFilter === "apartment" ? VACANCIES.filter(v => v.type === "apartment")
      : VACANCIES.filter(v => v.type === "rooms" || v.type === "house");

    function generateListingEmail(v) {
      const subject = `${v.address} ${v.unit} — Available ${v.available}`;
      const body = `Hi,\n\nThank you for your interest in our available unit at ${v.address}.\n\nHere are the details:\n\n📍 Address: ${v.address} — ${v.unit}\n📅 Available: ${v.available}\n🛏 ${v.type === "rooms" ? "Rooms available" : `${v.beds} Bedroom${v.beds > 1 ? "s" : ""} / ${v.baths} Bath`}\n💰 $${v.price.toLocaleString()}/${v.type === "rooms" ? "room/month" : "month"}\n🔌 Utilities: ${v.utilities}\n🚗 Parking: ${v.parking || "None available"}\n\n${v.notes}\n\nTo schedule a viewing, please reply to this email or contact us at altaraymanagement@gmail.com.\n\nWe look forward to hearing from you!\n\nAltaray Property Services\naltaraymanagement@gmail.com`;
      return { subject, body };
    }

    function copyListingText(v) {
      const txt = `🏠 ${v.address} — ${v.unit}\n📅 Available ${v.available}\n${v.type === "rooms" ? "🛏 Rooms available (shared house)" : `🛏 ${v.beds} Bed / ${v.baths} Bath`}\n💰 $${v.price.toLocaleString()}${v.type === "rooms" ? "/room" : ""}/month — ${v.utilities}\n🚗 Parking: ${v.parking || "Not available"}\n\n${v.notes}\n\n📧 altaraymanagement@gmail.com`;
      navigator.clipboard.writeText(txt).catch(() => {});
    }

    const MonthGroup = ({ label, units }) => (
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ background: "#f6c90e", color: "#000", fontSize: 11, fontFamily: "'DM Mono',monospace", letterSpacing: 2, padding: "4px 12px", borderRadius: 20, fontWeight: 700 }}>
            {label.toUpperCase()}
          </div>
          <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace" }}>
            {units.length} {units.length === 1 ? "unit" : "units"} · ${units.reduce((s, v) => s + v.price, 0).toLocaleString()}/mo potential
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
          {units.map(v => <VacancyCard key={v.id} v={v} />)}
        </div>
      </div>
    );

    const VacancyCard = ({ v }) => {
      const isSelected = vacancySelected === v.id;
      const monthColor = v.available.includes("March") ? "#f59e0b" : v.available.includes("April") ? "#818cf8" : "#34d399";
      return (
        <div style={{ background: "#0d1117", border: `1px solid ${isSelected ? "#f6c90e" : "#161d2a"}`, borderRadius: 14, overflow: "hidden", cursor: "pointer", transition: "border-color 0.15s" }}
          onClick={() => setVacancySelected(isSelected ? null : v.id)}>
          {/* Card header */}
          <div style={{ background: "#070a10", padding: "14px 18px", borderBottom: "1px solid #161d2a" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>{v.address}</div>
                <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{v.unit}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#f6c90e", fontFamily: "'DM Mono',monospace" }}>
                  ${v.price.toLocaleString()}
                  <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 400 }}>{v.type === "rooms" ? "/room" : "/mo"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div style={{ padding: "14px 18px" }}>
            {/* Available date badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0a0e16", border: `1px solid ${monthColor}33`, borderRadius: 20, padding: "4px 10px", marginBottom: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: monthColor }} />
              <span style={{ fontSize: 11, color: monthColor, fontFamily: "'DM Mono',monospace" }}>Available {v.available}</span>
            </div>

            {/* Special tag */}
            {v.tag && (
              <div style={{ display: "inline-flex", marginLeft: 8, background: "#7c3aed22", border: "1px solid #7c3aed44", borderRadius: 20, padding: "4px 10px", marginBottom: 12 }}>
                <span style={{ fontSize: 11, color: "#a78bfa", fontFamily: "'DM Mono',monospace" }}>⭐ {v.tag}</span>
              </div>
            )}

            {/* Details grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
              {[
                ["🛏", v.type === "rooms" ? "Rooms (shared)" : `${v.beds} Bed / ${v.baths} Bath`],
                ["🔌", v.utilities],
                ["🚗", v.parking || "No parking"],
                ["📋", v.type === "apartment" ? "Apartment" : v.type === "house" ? "Whole House" : "Student Rooms"],
              ].map(([icon, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 13 }}>{icon}</span>
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div style={{ fontSize: 12, color: "#4b5563", lineHeight: 1.5, marginBottom: 14, fontStyle: "italic" }}>{v.notes}</div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={e => { e.stopPropagation(); copyListingText(v); }}
                style={{ flex: 1, padding: "7px 0", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 8, color: "#6b7280", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
                📋 COPY AD
              </button>
              <button onClick={e => { e.stopPropagation(); const d = generateListingEmail(v); setEmailDraft({ to: "", subject: d.subject, body: d.body }); }}
                style={{ flex: 1, padding: "7px 0", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 8, color: "#6b7280", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
                ✉ EMAIL
              </button>
              {v.driveFolder && (
                <button onClick={e => { e.stopPropagation(); window.open(v.driveFolder, "_blank"); }}
                  style={{ flex: 1, padding: "7px 0", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 8, color: "#6b7280", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
                  📁 PHOTOS
                </button>
              )}
              <button onClick={e => { e.stopPropagation(); generateListingPDF(v); }}
                style={{ flex: 1, padding: "7px 0", background: "#ef444420", border: "1px solid #ef444440", borderRadius: 8, color: "#f87171", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
                ↓ PDF
              </button>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div style={{ padding: 24 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
          <div>
            <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Available Units</div>
            <div style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>
              {VACANCIES.length} units · ${totalRevenuePotential.toLocaleString()}/mo potential revenue
            </div>
          </div>
          <button onClick={() => generateAllListingsPDF()}
            style={{ padding: "9px 18px", background: "#f6c90e", border: "none", borderRadius: 8, color: "#000", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", fontWeight: 700, letterSpacing: 1 }}>
            ↓ ALL LISTINGS PDF
          </button>
        </div>

        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
          {[
            ["MARCH AVail.", Object.values(byMonth)[0].length, "#f59e0b", "$" + Object.values(byMonth)[0].reduce((s,v)=>s+v.price,0).toLocaleString()],
            ["APRIL AVAIL.", Object.values(byMonth)[1].length, "#818cf8", "$" + Object.values(byMonth)[1].reduce((s,v)=>s+v.price,0).toLocaleString()],
            ["MAY AVAIL.",   Object.values(byMonth)[2].length, "#34d399", "$" + Object.values(byMonth)[2].reduce((s,v)=>s+v.price,0).toLocaleString()],
            ["TOTAL UNITS",  VACANCIES.length, "#f6c90e", "$" + totalRevenuePotential.toLocaleString() + "/mo"],
          ].map(([label, count, color, sub]) => (
            <div key={label} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "14px 18px" }}>
              <div style={{ fontSize: 10, color: "#4b5563", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color, fontFamily: "'DM Mono',monospace" }}>{count}</div>
              <div style={{ fontSize: 11, color: "#6b7280", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {[
            ["all", "All Units"],
            ["march", "🟡 March"],
            ["april", "🟣 April"],
            ["may", "🟢 May"],
            ["apartment", "Apartments"],
            ["rooms", "Rooms / House"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => setVacancyFilter(id)}
              style={{ padding: "6px 16px", borderRadius: 20, border: "1px solid #161d2a", background: vacancyFilter === id ? "#f6c90e" : "#0d1117", color: vacancyFilter === id ? "#000" : "#6b7280", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
              {label}
            </button>
          ))}
        </div>

        {/* Listings — grouped by month when showing all, flat otherwise */}
        {vacancyFilter === "all" ? (
          Object.entries(byMonth).map(([month, units]) => (
            <MonthGroup key={month} label={month} units={units} />
          ))
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
            {filtered.map(v => <VacancyCard key={v.id} v={v} />)}
          </div>
        )}
      </div>
    );
  };

  function generateListingPDF(v) {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
    <title>${v.address} ${v.unit} — Available ${v.available}</title>
    <style>
      *{box-sizing:border-box;margin:0;padding:0}
      body{font-family:Arial,sans-serif;padding:50px;color:#111;max-width:750px;margin:0 auto}
      .logo{font-size:22px;font-weight:900;letter-spacing:2px;color:#111}
      .logo span{color:#c8a900}
      .tagline{font-size:9px;letter-spacing:4px;color:#888;margin-top:3px}
      .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:18px;border-bottom:3px solid #111}
      .available-badge{background:#f6c90e;color:#000;font-weight:700;padding:8px 18px;border-radius:4px;font-size:13px;letter-spacing:1px}
      h1{font-size:28px;font-weight:900;margin:18px 0 4px}
      .unit{font-size:16px;color:#555;margin-bottom:18px}
      .price-box{background:#f5f5f5;border-radius:8px;padding:20px 24px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center}
      .price{font-size:36px;font-weight:900;color:#111;font-family:monospace}
      .price span{font-size:16px;font-weight:400;color:#777}
      .details-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px}
      .detail-box{border:1px solid #e5e5e5;border-radius:6px;padding:14px 16px}
      .detail-label{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#999;margin-bottom:4px}
      .detail-val{font-size:14px;font-weight:700}
      .notes-section{background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:16px 20px;margin-bottom:24px}
      .notes-label{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#92400e;margin-bottom:6px}
      .notes-text{font-size:14px;color:#78350f;line-height:1.6}
      ${v.tag ? `.tag-banner{background:#7c3aed;color:#fff;text-align:center;padding:10px;font-weight:700;letter-spacing:2px;font-size:13px;margin-bottom:20px;border-radius:6px}` : ""}
      .contact-box{background:#111;color:#fff;border-radius:8px;padding:20px 24px;text-align:center}
      .contact-label{font-size:10px;letter-spacing:3px;color:#888;margin-bottom:8px}
      .contact-email{font-size:16px;font-weight:700;color:#f6c90e;letter-spacing:1px}
      .contact-sub{font-size:11px;color:#555;margin-top:6px}
      .footer{margin-top:24px;font-size:10px;color:#aaa;text-align:center}
      @media print{body{padding:24px}}
    </style></head><body>
      <div class="header">
        <div>
          <div class="logo">ALTARAY<span>▲</span></div>
          <div class="tagline">PROPERTY SERVICES</div>
        </div>
        <div class="available-badge">AVAILABLE ${v.available.toUpperCase()}</div>
      </div>

      ${v.tag ? `<div class="tag-banner">⭐ ${v.tag.toUpperCase()}</div>` : ""}

      <h1>${v.address}</h1>
      <div class="unit">${v.unit}</div>

      <div class="price-box">
        <div>
          <div class="price">$${v.price.toLocaleString()}<span>/${v.type === "rooms" ? "room/month" : "month"}</span></div>
          <div style="font-size:12px;color:#888;margin-top:4px">${v.utilities}</div>
        </div>
        <div style="text-align:right;font-size:13px;color:#555">
          <div style="margin-bottom:4px">📅 Available: <strong>${v.available}</strong></div>
          ${v.parking ? `<div>🚗 Parking: <strong>${v.parking}</strong></div>` : ""}
        </div>
      </div>

      <div class="details-grid">
        <div class="detail-box">
          <div class="detail-label">Unit Type</div>
          <div class="detail-val">${v.type === "rooms" ? "Student / Shared House" : v.type === "house" ? "Whole House" : "Apartment"}</div>
        </div>
        <div class="detail-box">
          <div class="detail-label">${v.type === "rooms" ? "Rooms" : "Bedrooms / Bathrooms"}</div>
          <div class="detail-val">${v.type === "rooms" ? "4 rooms available" : `${v.beds} bed / ${v.baths} bath`}</div>
        </div>
        <div class="detail-box">
          <div class="detail-label">Utilities</div>
          <div class="detail-val">${v.utilities}</div>
        </div>
        <div class="detail-box">
          <div class="detail-label">Parking</div>
          <div class="detail-val">${v.parking || "Not included"}</div>
        </div>
      </div>

      <div class="notes-section">
        <div class="notes-label">About This Unit</div>
        <div class="notes-text">${v.notes}</div>
      </div>

      <div class="contact-box">
        <div class="contact-label">SCHEDULE A VIEWING</div>
        <div class="contact-email">altaraymanagement@gmail.com</div>
        <div class="contact-sub">Reply to this listing or email us to book a showing</div>
      </div>

      <div class="footer">Altaray Property Services · ${new Date().toLocaleDateString("en-CA")} · All information subject to change without notice</div>
    </body></html>`;
    const w = window.open(URL.createObjectURL(new Blob([html], { type: "text/html" })), "_blank");
    setTimeout(() => w?.print(), 600);
  }

  function generateAllListingsPDF() {
    const byMonth = {
      "March 1, 2026": VACANCIES.filter(v => v.available.includes("March")),
      "April 1, 2026":  VACANCIES.filter(v => v.available.includes("April")),
      "May 1, 2026":    VACANCIES.filter(v => v.available.includes("May")),
    };
    const rows = VACANCIES.map(v => `
      <tr>
        <td style="padding:9px 12px;border-bottom:1px solid #eee;font-weight:600">${v.address}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #eee;color:#555">${v.unit}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #eee">${v.type === "rooms" ? "Rooms" : `${v.beds}bd/${v.baths}ba`}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #eee;font-family:monospace;font-weight:700">$${v.price.toLocaleString()}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #eee;color:#555">${v.utilities}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #eee;color:#555">${v.parking || "—"}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #eee;font-weight:700;color:${v.available.includes("March")?"#b45309":v.available.includes("April")?"#4338ca":"#065f46"}">${v.available}</td>
      </tr>`).join("");
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Altaray — Available Units ${new Date().getFullYear()}</title>
    <style>
      *{box-sizing:border-box}body{font-family:Arial,sans-serif;padding:40px;max-width:1000px;margin:0 auto;color:#111}
      .logo{font-size:20px;font-weight:900;letter-spacing:2px}.logo span{color:#c8a900}
      .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;padding-bottom:16px;border-bottom:3px solid #111}
      h2{font-size:14px;color:#555;font-weight:normal;letter-spacing:3px;text-transform:uppercase;margin-bottom:4px}
      .summary{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px}
      .sum-box{border:1px solid #ddd;border-radius:6px;padding:14px 16px}
      .sum-label{font-size:9px;text-transform:uppercase;letter-spacing:2px;color:#999;margin-bottom:6px}
      .sum-val{font-size:22px;font-weight:900;font-family:monospace}
      table{width:100%;border-collapse:collapse}
      thead tr{background:#111;color:#fff}
      thead th{padding:9px 12px;text-align:left;font-size:11px;letter-spacing:1px}
      tbody tr:nth-child(even){background:#fafafa}
      .contact{margin-top:28px;background:#111;color:#fff;padding:18px 24px;border-radius:8px;text-align:center}
      .contact a{color:#f6c90e;font-weight:700}
      .footer{margin-top:20px;font-size:10px;color:#aaa;text-align:center}
      @media print{body{padding:20px}}
    </style></head><body>
      <div class="header">
        <div>
          <div class="logo">ALTARAY<span>▲</span></div>
          <div style="font-size:9px;letter-spacing:4px;color:#888;margin-top:2px">PROPERTY SERVICES</div>
        </div>
        <div style="text-align:right">
          <h2>Available Units</h2>
          <div style="font-size:12px;color:#555">As of ${new Date().toLocaleDateString("en-CA", {month:"long",day:"numeric",year:"numeric"})}</div>
        </div>
      </div>
      <div class="summary">
        ${Object.entries(byMonth).map(([m, units]) => `<div class="sum-box"><div class="sum-label">${m}</div><div class="sum-val">${units.length}</div><div style="font-size:11px;color:#999;margin-top:4px">$${units.reduce((s,v)=>s+v.price,0).toLocaleString()}/mo</div></div>`).join("")}
        <div class="sum-box" style="border-color:#f6c90e"><div class="sum-label">Total Available</div><div class="sum-val" style="color:#c8a900">${VACANCIES.length}</div><div style="font-size:11px;color:#999;margin-top:4px">$${VACANCIES.reduce((s,v)=>s+v.price,0).toLocaleString()}/mo</div></div>
      </div>
      <table>
        <thead><tr><th>Address</th><th>Unit</th><th>Size</th><th>Price</th><th>Utilities</th><th>Parking</th><th>Available</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="contact">To schedule a viewing: <a href="mailto:altaraymanagement@gmail.com">altaraymanagement@gmail.com</a></div>
      <div class="footer">Altaray Property Services · ${new Date().toLocaleDateString("en-CA")} · Subject to change without notice</div>
    </body></html>`;
    const w = window.open(URL.createObjectURL(new Blob([html], { type: "text/html" })), "_blank");
    setTimeout(() => w?.print(), 600);
  }

      <div style={{ background: "#070a10", borderBottom: "1px solid #0d1117", padding: "0 24px", display: "flex", alignItems: "center", height: 54, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ fontSize: 17, fontFamily: "'Playfair Display',serif", color: "#f6c90e", marginRight: 30, letterSpacing: 0.5 }}>EstateOS</div>
        {[
          { id: "dashboard", label: "Dashboard" },
          { id: "rent", label: "Rent Check" },
          { id: "vacancies", label: "🔑 Vacancies" },
          { id: "reports", label: "Reports" },
          { id: "t776", label: "T776 Tax" },
          { id: "mortgages", label: "Mortgages" },
          { id: "property", label: selectedProperty?.address || "Property", disabled: !selectedProperty },
          { id: "chat", label: "AI Co-worker" },
        ].map(t => (
          <button key={t.id} onClick={() => !t.disabled && setTab(t.id)} disabled={t.disabled}
            style={{ padding: "0 18px", height: "100%", background: "none", border: "none", borderBottom: tab === t.id ? "2px solid #f6c90e" : "2px solid transparent", color: tab === t.id ? "#f6c90e" : t.disabled ? "#374151" : "#ffffff", cursor: t.disabled ? "default" : "pointer", fontSize: 14, fontFamily: "'DM Mono',monospace", letterSpacing: 0.5, fontWeight: tab === t.id ? 700 : 400 }}>
            {t.label}
          </button>
        ))}
        <div style={{ marginLeft: "auto", fontSize: 10, color: "#1f2937", fontFamily: "'DM Mono',monospace" }}>17 PROPERTIES · 50+ TENANTS</div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {tab === "dashboard" && <Dashboard />}
        {tab === "rent" && <RentCheck />}
        {tab === "vacancies" && <VacanciesTab />}
        {tab === "reports" && <MonthlyReports />}
        {tab === "t776" && <T776Tab />}
        {tab === "mortgages" && <MortgagesTab />}
        {tab === "property" && <PropertyDetail />}
        {tab === "chat" && <AIChat />}
      </div>

      <EmailModal />
      <ReceiptModal />
    </div>
  );
}
