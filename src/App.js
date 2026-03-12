import React, { useState, useEffect, useRef } from "react";

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
      { id: "vikki", unit: "Unit 1", name: "Vikki Langelier", email: "vikkimed@outlook.com", rent: 2250, flags: [], depositType: "auto", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 2250, "Feb 2026": 2250, "Mar 2026": 2250, "Apr 2026": 2250 } },
      { id: "micheal", unit: "Unit 2", name: "Micheal", email: "", rent: 1875, flags: [], depositType: "auto", leaseEnd: "May 1, 2026", lastIncrease: null,
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
      { id: "tyson", unit: "Unit 1", name: "Tyson", email: "", rent: 1800, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800, "Apr 2026": 1800 } },
      { id: "tj", unit: "Unit 2", name: "TJ", email: "", rent: 1800, flags: ["Deposit Cheque"], depositType: "cheque", leaseEnd: null, lastIncrease: null,
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
      { id: "sue", unit: "Unit 1", name: "Sue Hadley", email: "", rent: 2300, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 2300, "Feb 2026": 2300, "Mar 2026": 2300, "Apr 2026": 2300 } },
      { id: "dwaine", unit: "Unit 2", name: "Dwaine Archer", email: "", rent: 2101.25, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
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
      { id: "lovpreet", unit: "Unit 1", name: "Lovepreet Kaur", email: "lpkaur381@gmail.com", rent: 2100, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 2100, "Feb 2026": 2100, "Mar 2026": 2100 } },
      { id: "amarjeet", unit: "Unit 2", name: "Amarjeet Singh", email: "", rent: 1800, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
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
      { id: "andrew-r", unit: "Unit 1", name: "Andrew Reynolds", email: "", rent: 2200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 2200, "Feb 2026": 2200, "Mar 2026": 2200, "Apr 2026": 2200 } },
      { id: "robert", unit: "Unit 2", name: "Robert Howick", email: "", rent: 2100, flags: ["⚠ Partial Feb"], depositType: "auto", leaseEnd: null, lastIncrease: null,
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
      { id: "brianna", unit: "Unit 1", name: "Brianna Annesley", email: "brianna.annesley@gmail.com", rent: 900, flags: ["Always Late"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: {} },
      { id: "shannon", unit: "Unit 2", name: "Shannon", email: "", rent: 900, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 900, "Feb 2026": 900, "Mar 2026": 900, "Apr 2026": 900 } },
      { id: "michelle", unit: "Unit 2b", name: "Michelle McDonell", email: "", rent: 900, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
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
      { id: "molly", unit: "Unit 1", name: "Molly Brant", email: "", rent: 2000, flags: ["Check Bank Acc"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 2000, "Feb 2026": 2000, "Mar 2026": 2000, "Apr 2026": 2000 } },
      { id: "candice", unit: "Unit 2", name: "Candice", email: "", rent: 1486.25, flags: ["Check Bank Acc"], depositType: "auto", leaseEnd: null, lastIncrease: null,
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
      { id: "gabriela", unit: "Unit 1", name: "Gabriela Storring", email: "Gabriela.storring@gmail.com", rent: 2350, flags: [], depositType: "auto", leaseEnd: "Jun 30, 2026", lastIncrease: null,
        payments: { "Jan 2026": 2350, "Feb 2026": 2350, "Mar 2026": 2350, "Apr 2026": 2350 } },
      { id: "mike-h", unit: "Unit 1", name: "Caleb Desfomes-Guen", email: "calebdesfonges38@gmail.com", rent: 2350, flags: [], depositType: "auto", leaseEnd: "Jun 30, 2026", lastIncrease: null,
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
      { id: "farzia", unit: "Unit 1", name: "Farzia", email: "", rent: 2100, flags: ["Email Sent"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 2100, "Feb 2026": 2100, "Mar 2026": 2100, "Apr 2026": 2100 } },
      { id: "khemraj", unit: "Unit 2", name: "Khemraj Dahal", email: "", rent: 1896.25, flags: ["⚠ Last Month??"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 1896.25, "Feb 2026": 1896.25, "Mar 2026": null },
        notes: { "Mar 2026": "Last month?? — needs urgent follow-up" } },
      { id: "kirkpatrick-basement", unit: "Unit 2", name: "Karanjit Singh", email: "karanjit0895@gmail.com", rent: 1700, flags: ["Move-in Today ✅"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 1700 },
        notes: { "Mar 2026": "Move-in Mar 5, 2026 — paid $3,500 via e-transfer: $1,700 first month + $1,700 last month deposit + $100 key deposit." } },
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
      { id: "carolina", unit: "Unit 1", name: "Carolina Castro", email: "", rent: 2100, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 2100, "Feb 2026": 2100, "Mar 2026": 2050 },
        notes: { "Mar 2026": "Paid $2,050 — $50 short" } },
      { id: "tiffany", unit: "Unit 2", name: "Tiffany", email: "", rent: 1800, flags: ["Always Late"], depositType: "auto", leaseEnd: null, lastIncrease: null,
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
      { id: "colby", unit: "Room", name: "Colby", email: "colby.04.bennett@gmail.com", rent: 850, flags: ["Manual Deposit"], depositType: "manual", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 850, "Feb 2026": 850, "Mar 2026": 850, "Apr 2026": 850 } },
      { id: "virginia", unit: "Room", name: "Virginia Grace", email: "virginiagracegrd@gmail.com", rent: 770, flags: ["Manual Deposit"], depositType: "manual", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 770, "Feb 2026": 770, "Mar 2026": 770 } },
      { id: "andrew-c", unit: "Room", name: "Andrew", email: "anguyen6421@gmail.com", rent: 750, flags: ["Manual Deposit"], depositType: "manual", leaseEnd: "Jul 31, 2025", lastIncrease: null,
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "benusha", unit: "Room", name: "Benusha", email: "barafern@hotmail.com", rent: 800, flags: ["Manual Deposit"], depositType: "manual", leaseEnd: "Apr 30, 2026", lastIncrease: null,
        payments: { "Jan 2026": 800, "Feb 2026": 800, "Mar 2026": 800, "Apr 2026": 800 } },
      { id: "ezekiel", unit: "Room", name: "Ezekiel Adusi", email: "ezekieladusi@gmail.com", rent: 860, flags: ["Manual Deposit"], depositType: "manual", leaseEnd: "Aug 31, 2025", lastIncrease: null,
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
      { id: "theresia", unit: "Room", name: "Theresia Verena", email: "", rent: 760, flags: [], depositType: "auto", leaseEnd: "Aug 31, 2025", lastIncrease: null,
        payments: { "Jan 2026": 760, "Feb 2026": 760, "Mar 2026": 760, "Apr 2026": 760 } },
      { id: "moussa", unit: "Room", name: "Moussa", email: "", rent: 760, flags: [], depositType: "auto", leaseEnd: "Aug 31, 2025", lastIncrease: null,
        payments: { "Jan 2026": 760, "Feb 2026": 760, "Mar 2026": 760, "Apr 2026": 760 } },
      { id: "daniel", unit: "Room", name: "Daniel Mortime", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: "Aug 31, 2025", lastIncrease: null,
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "mostarina", unit: "Room", name: "Mostarina Begum", email: "mostarina_bizlee@yahoo.com", rent: 700, flags: [], depositType: "auto", leaseEnd: "Aug 31, 2025", lastIncrease: null,
        payments: { "Jan 2026": 700, "Feb 2026": 700, "Mar 2026": 700 } },
      { id: "pouriya", unit: "Room", name: "Pouriya", email: "", rent: 750, flags: ["Email Sent Jan 2nd"], depositType: "auto", leaseEnd: "Aug 31, 2025", lastIncrease: null,
        payments: { "Jan 2026": 700, "Feb 2026": null, "Mar 2026": 750, "Apr 2026": 750 },
        notes: { "Feb 2026": "Email sent Jan 2nd — awaiting payment" } },
      { id: "max", unit: "Room", name: "Max", email: "", rent: 600, flags: [], depositType: "auto", leaseEnd: "", lastIncrease: null,
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
      { id: "samar", unit: "Unit 1", name: "Samar Basnet", email: "", rent: 2250, flags: ["Late Notice"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 2250, "Feb 2026": 2250, "Mar 2026": null, "Apr 2026": 2250 },
        notes: { "Mar 2026": "Said he would be late" } },
      { id: "niomi", unit: "Unit 2", name: "Naomi Lawrence", email: "remystacks@gmail.com", rent: 1795, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
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
      { id: "jack-o", unit: "Room", name: "Jack O'Neil", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 500, "Apr 2026": 750 },
        notes: { "Mar 2026": "Paid $500 — short $250" } },
      { id: "dominique", unit: "Room", name: "Dominique", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 750, "Feb 2026": null, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "diego", unit: "Room", name: "Diego", email: "", rent: 800, flags: [], depositType: "auto", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 800, "Feb 2026": 800, "Mar 2026": 800 } },
      { id: "eria", unit: "Room", name: "Eria", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "layla", unit: "Room", name: "Layla", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: "", lastIncrease: null,
        payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750 } },
      { id: "rohit", unit: "Room", name: "Rohit Choudhary", email: "rohitc@gmail.com", rent: 650, flags: [], depositType: "auto", leaseEnd: "Apr 30, 2026", lastIncrease: null,
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
      { id: "kim", unit: "Unit 1", name: "Kim Lambert", email: "", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "alexander-b", unit: "Unit 2", name: "Alexander Babiak", email: "", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "ky", unit: "Unit 3", name: "Ky", email: "", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "ethan", unit: "Unit 4", name: "Ethan Alexander Williamson", email: "", rent: 1200, flags: ["⚠ Short Mar"], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 600 },
        notes: { "Mar 2026": "Paid $600 via e-transfer Mar 5 — short $600" } },
      { id: "aleksander", unit: "Unit 5", name: "Aleksander Oliver Guy", email: "", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "sebastien", unit: "Unit 6", name: "Sebastien McBride", email: "", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "taylor", unit: "Unit 7", name: "Taylor James Plicarpo", email: "", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
      { id: "jack-w", unit: "Unit 8", name: "Jack David Wood", email: "jackwood@gmail.com", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200, "Apr 2026": 1200 } },
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
      { id: "zoel", unit: "Unit 1", name: "Zoel Staffing", email: "", rent: 800, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 800, "Feb 2026": 800, "Mar 2026": 800 } },
      { id: "lily", unit: "Unit 1", name: "Lily Carthy", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "isabella", unit: "Unit 1", name: "Isabella Day", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "faraz", unit: "Unit 1", name: "Faraz Ughratdar", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 770 } },
      { id: "issah", unit: "Unit 2", name: "Issah Hardi", email: "", rent: 750, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 750, "Feb 2026": 750, "Mar 2026": 750, "Apr 2026": 750 } },
      { id: "chimaobi", unit: "Unit 2", name: "Chimaobi Ekeleme", email: "", rent: 700, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 700, "Feb 2026": 700, "Mar 2026": 700, "Apr 2026": 700 } },
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
      { id: "kristen", unit: "Unit 1", name: "Kristen", email: "", rent: 2200, flags: [], depositType: "auto", leaseEnd: "Jun 30, 2026", lastIncrease: null, payments: { "Jan 2026": 2200, "Feb 2026": 2200, "Mar 2026": 2200 } },
      { id: "kaili", unit: "Unit 2", name: "Kaili Wang", email: "", rent: 1800, flags: [], depositType: "auto", leaseEnd: "Aug 31, 2026", lastIncrease: null, payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800, "Apr 2026": 1800 } },
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
      { id: "kriti", unit: "Unit 1", name: "Kriti Panta", email: "", rent: 2400, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null, payments: { "Jan 2026": 2400, "Feb 2026": 2400, "Mar 2026": 2400 } },
    ]
  },
  {
    id: "246-adelaide",
    address: "246 Adelaide St.",
    bank: "TD", account: "",
    email: "altaraymanagement@gmail.com",
    ownership: "René (35%)",
    owned: false, type: "multi",
    tenants: [
      { id: "abigail-c", unit: "Unit 5", name: "Abigail Collins", email: "abigail.amelia556@outlook.com", rent: 1800, flags: [], depositType: "auto", leaseEnd: "Jun 30, 2026", lastIncrease: null,
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800 } },
      { id: "charles-c", unit: "Unit 5", name: "Charles Collins", email: "charlie_collin@hotmail.com", rent: 1800, flags: [], depositType: "auto", leaseEnd: "Jun 30, 2026", lastIncrease: null,
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800 } },
      { id: "sid-m", unit: "Unit 16", name: "Sid Markova", email: "sidthesaltykid@gmail.com", rent: 1500, flags: [], depositType: "auto", leaseEnd: "May 31, 2026", lastIncrease: null,
        payments: { "Jan 2026": 1500, "Feb 2026": 1500, "Mar 2026": 1500 } },
      { id: "tatiana-c", unit: "Unit 2", name: "Tatiana Carpio Aguiln", email: "tcarpio1993@gmail.com", rent: 1800, flags: [], depositType: "auto", leaseEnd: "Jul 31, 2026", lastIncrease: null,
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800 } },
      { id: "jaselyn-c", unit: "Unit 2", name: "Jaselyn Carpio Aguiln", email: "joselyncv31@gmail.com", rent: 1800, flags: [], depositType: "auto", leaseEnd: "Jul 31, 2026", lastIncrease: null,
        payments: { "Jan 2026": 1800, "Feb 2026": 1800, "Mar 2026": 1800 } },
      { id: "madison-a", unit: "Unit 13", name: "Madison Anderson", email: "madie_20@icloud.com", rent: 922.50, flags: ["60 Day Notice — Leaving Apr 30"], depositType: "auto", leaseEnd: "Apr 30, 2026", lastIncrease: null,
        payments: { "Mar 2026": 922.50 } },
      { id: "emma-p", unit: "Unit 13", name: "Emma Pigeon", email: "emmapigeon04@gmail.com", rent: 922.50, flags: ["60 Day Notice — Leaving Apr 30"], depositType: "auto", leaseEnd: "Apr 30, 2026", lastIncrease: null,
        payments: { "Mar 2026": 922.50 } },
      { id: "zach-b", unit: "Unit 3", name: "Zachary Ball", email: "zach.ball@hotmail.com", rent: 1700, flags: ["Looking for roommate"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Feb 2026": 1700, "Mar 2026": 1700 } },
      { id: "jenan-m", unit: "Unit 4", name: "Jenan Mansour Mazraeh", email: "", rent: 1850, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 1850 } },
      { id: "sarah-b", unit: "Unit 7", name: "Sarah Barrette", email: "", rent: 1379.05, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Feb 2026": 1379.05 } },
      { id: "marie-k", unit: "Unit 8", name: "Marie Sara Jasmine Kendall", email: "", rent: 1626.03, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Feb 2026": 1626.03 } },
      { id: "nenshu-b", unit: "Unit 9", name: "Nenshu Bharodia", email: "", rent: 2250, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 2250 } },
      { id: "saurabh-v", unit: "Unit 11", name: "Saurabh Kamlakar Vaidya", email: "", rent: 900, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 900 } },
      { id: "tray-a", unit: "Unit 12", name: "Tray", email: "", rent: 900, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 900 } },
      { id: "clara-a", unit: "Unit 14", name: "Clara Emily Asiedu", email: "", rent: 900, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 900 } },
      { id: "kaitlin-k", unit: "Unit 15", name: "Kaitlin Kawzenuk", email: "", rent: 591.21, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 591.21 } },
      { id: "michael-ant", unit: "Unit 15", name: "Michael Anthofer", email: "", rent: 591.21, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 591.21 } },
    ]
  },
  {
    id: "63-hill",
    address: "63 Hill St.",
    bank: "TD", account: "",
    email: "altaraymanagement@gmail.com",
    ownership: "Managed Only — until Apr 30, 2026",
    owned: false, type: "rooming",
    tenants: [
      { id: "aiden-w", unit: "Room", name: "Aiden Witt", email: "aiden_witt@outlook.com", rent: 1200, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 1200, "Feb 2026": 1200, "Mar 2026": 1200 } },
      { id: "erik-h", unit: "Room", name: "Erik Husband", email: "", rent: 1150, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 1150 } },
      { id: "george-k", unit: "Room", name: "George Kenzie", email: "", rent: 1050, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Mar 2026": 1050 } },
      { id: "andrew-g", unit: "Room", name: "Andrew Gurdon", email: "", rent: 1250, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": 1250, "Feb 2026": 1250 } },
      { id: "trinity-s", unit: "Room 5", name: "Trinity Smith", email: "trinity6650@gmail.com", rent: 1150, flags: ["⚠ LTB HEARING Mar 17", "No Pay Nov/Dec 2025"], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: { "Jan 2026": null, "Feb 2026": null, "Mar 2026": null },
        notes: { "Mar 2026": "LTB-L-108073-25 — Hearing Mar 17, 2026. Has not paid Nov/Dec 2025. Lawyer: Tonya Brown (brownlawnotary.com)" } },
      { id: "nicholas-h", unit: "Room", name: "Nicholas Husband", email: "nicholas_husband@icloud.com", rent: 1150, flags: [], depositType: "auto", leaseEnd: null, lastIncrease: null,
        payments: {} },
    ]
  },
];

const MONTHS = ["Jan 2026","Feb 2026","Mar 2026","Apr 2026","May 2026","Jun 2026","Jul 2026","Aug 2026","Sep 2026","Oct 2026","Nov 2026","Dec 2026"];
const CURRENT_MONTH = "Mar 2026";
const LEASE_FOLDER = "https://drive.google.com/drive/folders/1ZC_rrkiRVBOn1R28iljpQpVJVXQa0PBS";

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
// ── 1ST MORTGAGES ──────────────────────────────────────────────────────────────
const MORTGAGE_DATA = {
  "213-nelson": {
    lender: "CIBC", type: "Fixed", bank: "CIBC", account: "213 Nelson Account",
    balance: 318009.00, rate: 5.30, monthlyPayment: 1811.74,
    maturity: "Sept 9, 2024", mortgagee: "213 Nelson",
    note: "⚠️ Maturity Sept 2024 — confirm renewal status."
  },
  "293-van-order": {
    lender: "CIBC", type: "Fixed", bank: "CIBC", account: "293 Van Order",
    balance: 211143.27, rate: 4.44, monthlyPayment: 1135.00,
    maturity: "Oct 1, 2029", mortgagee: "293 Van Order Dr.",
    note: "Fixed 4.44%. Renewal Oct 2029."
  },
  "43-ruskin": {
    lender: "CIBC", type: "Variable", bank: "CIBC", account: "43 Ruskin Account",
    balance: 329899.42, rate: null, monthlyPayment: 1248.23,
    maturity: "Mar 30, 2026", mortgagee: "2771051 Ontario Inc.",
    note: "⚠️ MATURITY Mar 2026 — renewal required NOW. Rate history: 1.95% (2022) → 5.95% → 6.45% (Jun 2024)."
  },
  "1-place-darmes": {
    lender: "CIBC", type: "Variable", bank: "CIBC", account: "211 Account",
    balance: 288324.15, rate: null, monthlyPayment: 1221.11,
    maturity: "Apr 30, 2026", mortgagee: "1 Place d'Armes",
    note: "⚠️ MATURITY Apr 2026 — renewal required soon."
  },
  "81-michael-grass": {
    lender: "CIBC", type: "Variable", bank: "CIBC", account: "Michael Grass Account",
    balance: 222297.49, rate: null, monthlyPayment: 910.72,
    maturity: "Aug 14, 2025", mortgagee: "81 Michael Grass",
    note: "⚠️ Maturity Aug 2025 — confirm renewal. Rate: 2.45% (2022) → 6.45%."
  },
  "401-southwood": {
    lender: "Desjardins", type: "Fixed", bank: "Desjardins", account: "2771051 Account",
    balance: 384890.04, rate: 2.84, monthlyPayment: 1956.92,
    maturity: "Jan 21, 2027", mortgagee: "401 Southwood",
    note: "Fixed 2.84%. Renewal Jan 2027."
  },
  "164-kirkpatrick": {
    lender: "Desjardins", type: "Fixed", bank: "Desjardins", account: "2771051 Account",
    balance: 397098.94, rate: 2.49, monthlyPayment: 1971.70,
    maturity: "Nov 15, 2026", mortgagee: "164 Kirkpatrick",
    note: "Fixed 2.49%. Renewal Nov 2026. 2nd mortgage: Debbie Gilbert $75k @ 10%."
  },
  "232-van-order": {
    lender: "Desjardins", type: "Fixed", bank: "Desjardins", account: "1000203074 Ontario Inc.",
    balance: 467689.22, rate: 4.81, monthlyPayment: 2838.21,
    maturity: "May 31, 2026", mortgagee: "232 Van Order Dr.",
    note: "Fixed 4.81%. Renewal May 2026."
  },
  "285-van-order": {
    lender: "Desjardins", type: "Fixed", bank: "Desjardins", account: "211 Account",
    balance: 345838.52, rate: 5.74, monthlyPayment: 2268.61,
    maturity: "Jan 14, 2028", mortgagee: "285 Van Order Dr.",
    note: "Fixed 5.74%. Renewal Jan 2028."
  },
  "213-colborne": {
    lender: "RBC", type: "Variable", bank: "RBC", account: "Colborne Account",
    balance: 209145.42, rate: 6.05, monthlyPayment: 928.20,
    maturity: "Aug 7, 2025", mortgagee: "213 Colborne",
    note: "⚠️ Maturity Aug 2025 — confirm renewal."
  },
  "82-hamilton": {
    lender: "RBC", type: "Variable", bank: "RBC", account: "RBC",
    balance: 144097.00, rate: 5.80, monthlyPayment: 715.25,
    maturity: "Dec 16, 2025", mortgagee: "82 Hamilton",
    note: "⚠️ Maturity Dec 2025 — confirm renewal. 2nd mortgages: David Russell $110k @ 8% + Andres Orozco $64k @ 8%."
  },
  "913-uxbridge": {
    lender: "Unknown", type: "—", bank: "—", account: "913 Uxbridge Account",
    balance: null, rate: null, monthlyPayment: 2233.11,
    maturity: "—", mortgagee: "913 Uxbridge",
    note: "Lender/balance details missing — verify."
  },
  "661-milford": {
    lender: "CIBC", type: "—", bank: "CIBC", account: "Milford Account",
    balance: null, rate: null, monthlyPayment: 1475.41,
    maturity: "Feb 8, 2026", mortgagee: "661 Milford",
    note: "Balance/rate details missing — verify."
  },
  "30-barbara": {
    lender: "Scotiabank", type: "Variable", bank: "Scotiabank", account: "30 Barbara Account",
    balance: 447164.33, rate: 5.90, monthlyPayment: 2700.04,
    maturity: "May 2, 2027", mortgagee: "30 Barbara",
    note: "Variable 5.9%. Renewal May 2027."
  },
  "787-downing": {
    lender: "Equitable Bank", type: "Fixed", bank: "Equitable Bank", account: "787 Downing Account",
    balance: 508000.00, rate: 4.19, monthlyPayment: 2740.48,
    maturity: "Jun 1, 2023", mortgagee: "787 Downing",
    note: "⚠️ Maturity Jun 2023 — confirm current status/renewal."
  },
  "32-holland": {
    lender: "Optimum Mortgage", type: "—", bank: "Optimum", account: "1000203074 Ontario Inc.",
    balance: 528800.00, rate: 5.44, monthlyPayment: 2962.56,
    maturity: "Aug 1, 2023", mortgagee: "32 Holland Cres",
    note: "⚠️ Maturity Aug 2023 — confirm current status/renewal."
  },
  "331-meadowcrest": {
    lender: "Private — John Chase", type: "Private", bank: "Private", account: "2771051 Account",
    balance: 425000.00, rate: 9.00, monthlyPayment: 3187.50,
    maturity: "Jun 1, 2023", mortgagee: "331 Meadowcrest",
    note: "Private lender John Chase @ 9%. Confirm current status."
  },
  "246-adelaide": {
    lender: "First National", type: "Fixed", bank: "First National", account: "246 Adelaide Account",
    balance: 2102547.00, rate: 4.40, monthlyPayment: 11357.00,
    maturity: "—", mortgagee: "246 Adelaide",
    note: "Fixed 4.40%. Large portfolio mortgage — $2.1M balance."
  },
};

// ── 2ND MORTGAGES ──────────────────────────────────────────────────────────────
const SECOND_MORTGAGES = [
  { property: "82 Hamilton",      lender: "David Russell",     account: "01392-004-6629210", amount: 110000, rate: 8.0,  paymentType: "annually", annual: 8800,   monthly: 733.33, maturity: "Jul 31, 2025", term: "2 years", note: "⚠️ Maturity Jul 2025 — confirm renewal." },
  { property: "81 Michael Grass", lender: "Michael Dominguez", account: "Michael Grass Account", amount: 139000, rate: 10.0, paymentType: "monthly", annual: 0, monthly: 1158.33, maturity: "Oct 1, 2025",  term: "1 year",  note: "Monthly payments. Plan: sell house." },
  { property: "213 Nelson",       lender: "Claire Levesque",   account: "00542 010 0602167", amount: 150000, rate: 8.0,  paymentType: "annually", annual: 12000,  monthly: 1000.00, maturity: "Nov 8, 2025",  term: "2 years", note: "Refi Adelaide in 2027." },
  { property: "82 Hamilton",      lender: "Andres Orozco",     account: "TD MG Account",    amount: 64000,  rate: 8.0,  paymentType: "annually", annual: 5120,   monthly: 426.67, maturity: "Dec 1, 2025",  term: "open",    note: "Open term." },
  { property: "285 Van Order",    lender: "Brian Gordon",      account: "211 Account",       amount: 105000, rate: 10.0, paymentType: "annually", annual: 10500,  monthly: 875.00, maturity: "Jan 16, 2026", term: "2 years", note: "" },
  { property: "43 Ruskin",        lender: "George Fang",       account: "277 Ontario Inc.",  amount: 102500, rate: 10.0, paymentType: "annually", annual: 10500,  monthly: 875.00, maturity: "Jan 31, 2026", term: "1 year",  note: "" },
  { property: "164 Kirkpatrick",  lender: "Debbie Gilbert",    account: "164 Kirkpatrick Account", amount: 75000, rate: 10.0, paymentType: "monthly", annual: 0, monthly: 625.00, maturity: "Feb 1, 2026",  term: "open",    note: "Open term." },
  { property: "293 Van Order",    lender: "Allen Castaban",    account: "293 Van Order bank account", amount: 120000, rate: 10.0, paymentType: "annually", annual: 12000, monthly: 1000.00, maturity: "Mar 31, 2026", term: "2 years", note: "" },
  { property: "1 Place D'Armes",  lender: "Stephane Masson",   account: "211 Account",       amount: 85000,  rate: 10.0, paymentType: "annually", annual: 8500,   monthly: 708.33, maturity: "Apr 25, 2026", term: "—",       note: "Plan: Refi/pay down with flip." },
];

// ── LINES OF CREDIT ───────────────────────────────────────────────────────────
const LINES_OF_CREDIT = [
  { name: "Personal LOC",         bank: "CIBC", balance: 11952.51,  limit: 14000.00,  rate: 9.70,  monthly: 250.00,  property: "Personal" },
  { name: "293 Van Order LOC",    bank: "CIBC", balance: 72522.69,  limit: 72522.69,  rate: 7.70,  monthly: 501.73,  property: "293 Van Order Dr." },
  { name: "81 Michael Grass LOC", bank: "CIBC", balance: 9966.85,   limit: 10702.00,  rate: 7.20,  monthly: 109.79,  property: "81 Michael Grass" },
  { name: "213 Nelson LOC",       bank: "CIBC", balance: 0.00,      limit: 2557.00,   rate: 7.20,  monthly: 0.00,    property: "213 Nelson" },
  { name: "CEBA Loan",            bank: "CIBC", balance: 60000.00,  limit: 60000.00,  rate: 0.00,  monthly: 0.00,    property: "Business — pay $40k get $20k free" },
  { name: "Altaray LOC",          bank: "CIBC", balance: 12358.85,  limit: 50000.00,  rate: 10.70, monthly: 0.00,    property: "Altaray Property Ltd. #4045211" },
  { name: "TD LOC",               bank: "TD",   balance: 10000.00,  limit: 25000.00,  rate: 11.19, monthly: 86.92,   property: "Personal" },
];

// ─── ALTARAY LOGO ─────────────────────────────────────────────────────────────

// ── PAYOUT CONFIG ────────────────────────────────────────────────────
// Properties Altaray owns outright — excluded from Management Payout tab
const NO_PAYOUT_IDS = ["787-downing", "913-uxbridge", "30-barbara", "661-milford"];

// Management fee rate per property + whether HST applies to the fee
const MGMT_RATES = {
    "28-toronto":     { rate: 0.05, hst: false },
    "1241-johnson":   { rate: 0.08, hst: false },
    "246-adelaide":   { rate: 0.06, hst: true  },
    "152-calderwood": { rate: 0.07, hst: false },
    "315-portsmouth": { rate: 0.07, hst: false },
    "311-portsmouth": { rate: 0.07, hst: false },
    "63-hill":        { rate: 0.05, hst: false },
    "886-larchwood":  { rate: 0.07, hst: false },
};

// Other expenses per property per month (repairs, etc.)
// Update as needed: { amount: 0, description: "" }
const OTHER_EXPENSES = {
    // Example:
    // "152-calderwood": { "Mar 2026": { amount: 250.00, description: "Plumbing repair" } },
};
// Replace this URL with the direct Google Drive image link
const ALTARAY_LOGO_URL = ""; // e.g. https://drive.google.com/uc?export=view&id=FILE_ID

const LOGO_HTML = ALTARAY_LOGO_URL
  ? `<img src="${ALTARAY_LOGO_URL}" style="height:60px;object-fit:contain" alt="Altaray Property Services" />`
  : `<div style="font-size:24px;font-weight:900;letter-spacing:2px;color:#111;font-family:Georgia,serif">ALTARAY<span style="color:#c8a900">▲</span></div><div style="font-size:9px;letter-spacing:4px;color:#666;margin-top:2px">PROPERTY SERVICES</div>`;

// ── Management Payout TAB ─────────────────────────────────────────────────
function OwnerPayout({ selectedMonth }) {
    const [sentMap, setSentMap] = React.useState({});
    const HST_RATE = 0.13;
    const fmt = (n) => `$${Number(n || 0).toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    const today = new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
  
    const payoutProps = PORTFOLIO.filter(p => !NO_PAYOUT_IDS.includes(p.id));
  
    const rows = payoutProps.map(prop => {
          const tenants = prop.tenants.map(t => ({
                  name: t.name, unit: t.unit,
                  paid: t.payments?.[selectedMonth] ?? null,
                  rent: t.rent,
          }));
          const rentalIncome = tenants.reduce((s, t) => s + (t.paid ?? 0), 0);
          const cfg     = MGMT_RATES[prop.id] ?? { rate: 0.07, hst: false };
          const mgmtFee = rentalIncome * cfg.rate;
          const hst     = cfg.hst ? mgmtFee * HST_RATE : 0;
          const otherExp = OTHER_EXPENSES[prop.id]?.[selectedMonth] ?? { amount: 0, description: "" };
          const payout  = rentalIncome - mgmtFee - hst - otherExp.amount;
          return { prop, tenants, rentalIncome, cfg, mgmtFee, hst, otherExp, payout };
    });
  
    const totalPayout = rows.reduce((s, r) => s + r.payout, 0);
  
    const openEmail = (r) => {
          const { prop, tenants, rentalIncome, mgmtFee, hst, otherExp, payout, cfg } = r;
          const tenantLines = tenants.map(t =>
                  `  ${t.name} (${t.unit}): ${t.paid != null ? fmt(t.paid) : "NOT RECEIVED"}${t.paid != null && t.paid < t.rent ? " PARTIAL" : ""}`
                                              ).join("\n");
          const body = [
                  `OWNER STATEMENT — ${prop.address}`,
                  `Period: ${selectedMonth}   |   Issued: ${today}`,
                  `Owner: ${prop.ownership}`,
                  ``,
                  `RENTAL INCOME`,
                  tenantLines,
                  `Total Rental Income:   ${fmt(rentalIncome)}`,
                  ``,
                  `DEDUCTIONS`,
                  `Management Fee (${(cfg.rate * 100).toFixed(0)}%): ${fmt(mgmtFee)}`,
                  cfg.hst ? `HST on Mgmt Fee (13%): ${fmt(hst)}` : null,
                  otherExp.amount > 0 ? `Other Expenses: ${fmt(otherExp.amount)}  (${otherExp.description})` : null,
                  ``,
                  `────────────────────────────`,
                  `Management Payout:          ${fmt(payout)}`,
                  ``,
                  `Please e-transfer ${fmt(payout)} to: ${prop.email}`,
                  `Bank: ${prop.bank}   Acct: ${prop.account}`,
                  ``,
                  `Thank you,`,
                  `Altaray Property Services`,
                ].filter(Boolean).join("\n");
          const subject = `Management Payout — ${prop.address} — ${selectedMonth}`;
          const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(prop.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.open(url, "_blank");
          setSentMap(p => ({ ...p, [prop.id]: today }));
    };
  
    return (
          <div style={{ padding: "24px 32px", fontFamily: "'DM Mono',monospace", color: "#fff", maxWidth: 900 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
        <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#f5c842", textTransform: "uppercase" }}>Altaray Property Services</div>
            <h2 style={{ margin: "4px 0 2px", fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f5c842" }}>Management Payouts — {selectedMonth}</h2>
            <div style={{ fontSize: 11, color: "#6b7280" }}>Generated: {today} · {rows.length} properties</div>
  </div>
          <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, color: "#6b7280", letterSpacing: 2 }}>TOTAL PAYABLE</div>
            <div style={{ fontSize: 28, color: "#22c55e", fontWeight: 700 }}>{fmt(totalPayout)}</div>
  </div>
  </div>
  
{rows.map(r => {
          const { prop, tenants, rentalIncome, cfg, mgmtFee, hst, otherExp, payout } = r;
          const sent = sentMap[prop.id];
          return (
                      <div key={prop.id} style={{ background: "#0d1117", border: "1px solid #1e2a3a", borderRadius: 12, marginBottom: 20, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#111827", padding: "13px 20px", borderBottom: "1px solid #1e2a3a" }}>
              <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f5c842" }}>{prop.address}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>{prop.ownership} · {prop.email}</div>
  </div>
                <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: "#6b7280", letterSpacing: 1 }}>PAYOUT</div>
                  <div style={{ fontSize: 20, color: "#22c55e", fontWeight: 700 }}>{fmt(payout)}</div>
  </div>
  </div>
  
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, padding: "16px 20px", borderRight: "1px solid #1e2a3a" }}>
                <div style={{ fontSize: 10, color: "#f5c842", letterSpacing: 2, marginBottom: 8 }}>RENTAL INCOME</div>
{tenants.map((t, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "5px 0", borderBottom: "1px solid #111827" }}>
                    <span style={{ color: "#e2e8f0" }}>{t.name} <span style={{ color: "#6b7280" }}>({t.unit})</span></span>
                      <span style={{ color: t.paid == null ? "#ef4444" : t.paid < t.rent ? "#f97316" : "#22c55e", fontWeight: 600 }}>
{t.paid == null ? "NOT RECEIVED" : fmt(t.paid)}{t.paid != null && t.paid < t.rent ? " PARTIAL" : ""}
</span>
  </div>
                  ))}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 13, fontWeight: 700 }}>
                  <span style={{ color: "#6b7280" }}>Total Rental Income</span>
                                      <span style={{ color: "#22c55e" }}>{fmt(rentalIncome)}</span>
                    </div>
                    </div>
                    
              <div style={{ width: 280, padding: "16px 20px" }}>
                <div style={{ fontSize: 10, color: "#f5c842", letterSpacing: 2, marginBottom: 8 }}>DEDUCTIONS</div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "5px 0", borderBottom: "1px solid #111827" }}>
                  <span style={{ color: "#6b7280" }}>Rate</span>
                                      <span style={{ color: "#e2e8f0" }}>{(cfg.rate * 100).toFixed(0)}%{cfg.hst ? " + HST" : ""}</span>
                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "5px 0", borderBottom: "1px solid #111827" }}>
                  <span style={{ color: "#6b7280" }}>Management Fee</span>
                                      <span style={{ color: "#f97316" }}>({fmt(mgmtFee)})</span>
                    </div>
{cfg.hst && (
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "5px 0", borderBottom: "1px solid #111827" }}>
                    <span style={{ color: "#6b7280" }}>HST (13%)</span>
                      <span style={{ color: "#f97316" }}>({fmt(hst)})</span>
  </div>
                  )}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "5px 0", borderBottom: "1px solid #111827" }}>
                  <span style={{ color: "#6b7280" }}>Other Expenses{otherExp.description ? ` — ${otherExp.description}` : ""}</span>
                                      <span style={{ color: otherExp.amount > 0 ? "#f97316" : "#4b5563" }}>{otherExp.amount > 0 ? `(${fmt(otherExp.amount)})` : "—"}</span>
                    </div>
                                    <div style={{ borderTop: "1px solid #2a3a4a", marginTop: 10, paddingTop: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
                    <span style={{ color: "#6b7280" }}>Payout</span>
                                        <span style={{ color: "#22c55e" }}>{fmt(payout)}</span>
                    </div>
                                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "4px 0", marginBottom: 10 }}>
                    <span style={{ color: "#6b7280" }}>Date Paid</span>
                                        <span style={{ color: sent ? "#22c55e" : "#4b5563", fontSize: 11 }}>{sent || "—"}</span>
                    </div>
                                      <button onClick={() => openEmail(r)} style={{ width: "100%", padding: "10px 0", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, letterSpacing: 1, background: sent ? "#14532d" : "#1d4ed8", color: "#fff" }}>
{sent ? "✓ EMAIL SENT" : "📧 EMAIL OWNER"}
</button>
  </div>
  </div>
  </div>
  </div>
          );
})}
</div>
    );
}

export default function EstateOS() {
  const [tab, setTab] = useState("dashboard");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
  const [filterOwned, setFilterOwned] = useState("all");
  const [tenantMeta, setTenantMeta] = useState(() => {
    // keyed by tenant id: { leaseEnd, lastIncrease }
    const init = {};
    PORTFOLIO.forEach(p => p.tenants.forEach(t => { init[t.id] = { leaseEnd: t.leaseEnd || "", lastIncrease: t.lastIncrease || "" }; }));
    return init;
  });
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Good morning. I'm your EstateOS co-worker. I have full visibility into all 18 properties and 50+ tenants across Altaray's portfolio. What do you need?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [emailDraft, setEmailDraft] = useState(null);
  const [receiptModal, setReceiptModal] = useState(null);
  const [gmailTokens, setGmailTokens] = useState(() => {
    try { return JSON.parse(localStorage.getItem("estateos_gmail_tokens") || "{}"); } catch { return {}; }
  });
  const [inboxScans, setInboxScans] = useState({}); // { propId: { status, results, lastScanned } }
  const [scanningProp, setScanningProp] = useState(null);
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
            <button onClick={() => setReceiptModal(null)} style={{ background: "none", border: "none", color: "#e2e8f0", fontSize: 20, cursor: "pointer" }}>✕</button>
          </div>
          <div style={{ background: "#070a10", borderRadius: 10, padding: "14px 18px", marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{tenant.name}</div>
            <div style={{ fontSize: 12, color: "#e2e8f0" }}>{tenant.unit} · {property.address}</div>
            <div style={{ fontSize: 20, color: "#22c55e", fontFamily: "'DM Mono',monospace", fontWeight: 700, marginTop: 8 }}>${totalPaid.toFixed(2)} <span style={{ fontSize: 12, color: "#ffffff" }}>total paid {year}</span></div>
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
          <div style={{ marginTop: 12, fontSize: 11, color: "#ffffff", textAlign: "center" }}>Receipt includes CRA tax note for Ontario Trillium Benefit</div>
        </div>
      </div>
    );
  };
  const stats = portfolioStats();

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [chatMessages]);

  // Auto-refresh: hourly on 1st & 2nd of month, otherwise daily
  useEffect(() => {
    const scheduleRefresh = () => {
      const now = new Date();
      const day = now.getDate();
      const isHighFreqDay = day === 1 || day === 2;
      const intervalMs = isHighFreqDay ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
      return setInterval(() => { window.location.reload(); }, intervalMs);
    };
    const timer = scheduleRefresh();
    return () => clearInterval(timer);
  }, []);

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

  // ── GMAIL OAUTH + SCAN ───────────────────────────────────────────────────────
  const GMAIL_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"; // Set in Google Cloud Console
  const GMAIL_SCOPE = "https://www.googleapis.com/auth/gmail.readonly";

  function connectGmail(property) {
    const email = property.email;
    if (!email) return;
    const redirectUri = window.location.origin + window.location.pathname;
    const state = btoa(JSON.stringify({ propId: property.id, email }));
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GMAIL_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(GMAIL_SCOPE)}&login_hint=${encodeURIComponent(email)}&state=${state}&prompt=consent`;
    window.open(authUrl, "_blank", "width=500,height=600");
  }

  // Handle OAuth redirect token
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      const params = new URLSearchParams(hash.replace("#", "?"));
      const token = params.get("access_token");
      const state = params.get("state");
      if (token && state) {
        try {
          const { propId, email } = JSON.parse(atob(state));
          const updated = { ...gmailTokens, [propId]: { token, email, connectedAt: Date.now() } };
          setGmailTokens(updated);
          localStorage.setItem("estateos_gmail_tokens", JSON.stringify(updated));
          window.history.replaceState({}, "", window.location.pathname);
          // Auto-scan after connect
          setTimeout(() => scanInbox(propId, token), 500);
        } catch {}
      }
    }
  }, []);

  async function scanInbox(propId, token) {
    const prop = PORTFOLIO.find(p => p.id === propId);
    if (!prop) return;
    setScanningProp(propId);
    setInboxScans(prev => ({ ...prev, [propId]: { status: "scanning", results: prev[propId]?.results || [], lastScanned: null } }));

    try {
      // Fetch last 30 days of emails
      const since = Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000);
      const searchRes = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=after:${since}&maxResults=40`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const searchJson = await searchRes.json();
      if (searchJson.error) throw new Error(searchJson.error.message);

      const messages = searchJson.messages || [];
      const emailTexts = [];

      // Fetch snippet + subject for each
      for (const msg of messages.slice(0, 20)) {
        const msgRes = await fetch(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=Date`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const msgJson = await msgRes.json();
        const headers = msgJson.payload?.headers || [];
        const subject = headers.find(h => h.name === "Subject")?.value || "";
        const from = headers.find(h => h.name === "From")?.value || "";
        const date = headers.find(h => h.name === "Date")?.value || "";
        const snippet = msgJson.snippet || "";
        emailTexts.push({ subject, from, date, snippet });
      }

      if (emailTexts.length === 0) {
        setInboxScans(prev => ({ ...prev, [propId]: { status: "done", results: [], lastScanned: new Date().toLocaleString() } }));
        setScanningProp(null);
        return;
      }

      // Send to Claude for analysis
      const tenantList = prop.tenants.map(t => `${t.name} (${t.unit}, $${t.rent}/mo)`).join(", ");
      const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are analyzing emails for a property management inbox. Property: ${prop.address}. Tenants: ${tenantList}. Current month: ${CURRENT_MONTH}. 
Identify emails related to: rent payments (e-transfers, bank notifications, payment confirmations), expenses (invoices, receipts, utility bills), or other property matters.
Respond ONLY with a JSON array. Each item: { "type": "rent"|"expense"|"unknown", "tenant": "name or null", "amount": number or null, "description": "brief description", "date": "date string", "confidence": "high"|"medium"|"low" }`,
          messages: [{ role: "user", content: `Analyze these emails from the inbox for ${prop.address}:\n\n${emailTexts.map((e, i) => `Email ${i + 1}:\nFrom: ${e.from}\nDate: ${e.date}\nSubject: ${e.subject}\nPreview: ${e.snippet}`).join("\n\n---\n\n")}` }]
        })
      });
      const aiData = await aiRes.json();
      const raw = aiData.content?.[0]?.text || "[]";
      let results = [];
      try {
        const clean = raw.replace(/```json|```/g, "").trim();
        results = JSON.parse(clean);
      } catch { results = []; }

      setInboxScans(prev => ({ ...prev, [propId]: { status: "done", results, lastScanned: new Date().toLocaleString() } }));
    } catch (err) {
      setInboxScans(prev => ({ ...prev, [propId]: { status: "error", error: err.message, results: [], lastScanned: new Date().toLocaleString() } }));
    }
    setScanningProp(null);
  }

  function scanAllInboxes() {
    PORTFOLIO.forEach(p => {
      const tok = gmailTokens[p.id];
      if (tok?.token) scanInbox(p.id, tok.token);
    });
  }

  // Auto-scan on load if tokens exist
  useEffect(() => {
    const hasTokens = Object.keys(gmailTokens).length > 0;
    if (hasTokens) {
      setTimeout(() => scanAllInboxes(), 1500);
    }
  }, []);

  // ── DASHBOARD ────────────────────────────────────────────────────────────────
  const Dashboard = () => (
    <div style={{ padding: 24 }}>
      <div style={{ fontSize: 12, color: "#cbd5e1", fontFamily: "'DM Mono',monospace", letterSpacing: 3, marginBottom: 4 }}>ALTARAY PROPERTY SERVICES · RENÉ MASSE</div>
      <div style={{ fontSize: 28, fontFamily: "'Playfair Display',serif", color: "#f6c90e", marginBottom: 24 }}>Portfolio Overview — {CURRENT_MONTH}</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 26 }}>
        {[
          { label: "PROPERTIES", value: stats.totalProperties },
          { label: "TENANTS", value: stats.totalTenants },
          { label: "MONTHLY TARGET", value: fmt(stats.totalRent) },
          { label: "ALERTS", value: stats.alerts.length, alert: true },
        ].map((k, i) => (
          <div key={i} style={{ background: "#0d1117", border: `1px solid ${k.alert && k.value > 0 ? "#3f0000" : "#161d2a"}`, borderRadius: 12, padding: "18px 22px" }}>
            <div style={{ fontSize: 12, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 8 }}>{k.label}</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: k.alert && k.value > 0 ? "#ef4444" : "#f6c90e", fontFamily: "'DM Mono',monospace" }}>{k.value}</div>
          </div>
        ))}
      </div>

      {stats.alerts.length > 0 && (
        <div style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 11, color: "#e2e8f0", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>ALERTS — {CURRENT_MONTH}</div>
          {stats.alerts.slice(0, 12).map((a, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", marginBottom: 5, background: "#0d1117", borderLeft: `3px solid ${a.status === "flag" ? "#f97316" : "#ef4444"}`, borderRadius: 8 }}>
              <div>
                <span style={{ color: "#ffffff", fontWeight: 600, fontSize: 14 }}>{a.tenant}</span>
                <span style={{ color: "#cbd5e1", fontSize: 13, margin: "0 6px" }}>·</span>
                <span style={{ color: "#cbd5e1", fontSize: 13 }}>{a.property}</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {a.amount != null && <span style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{fmt(a.amount)} / {fmt(a.expected)}</span>}
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
            style={{ padding: "5px 14px", borderRadius: 20, border: "1px solid #1e293b", background: filterOwned === f ? "#f6c90e" : "#0d1117", color: filterOwned === f ? "#000" : "#e2e8f0", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", letterSpacing: 1 }}>
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {filteredPortfolio.map(p => {
          const paidCount = p.tenants.filter(t => getPaymentStatus(t, CURRENT_MONTH) === "paid").length;
          const hasIssues = paidCount < p.tenants.length || p.tenants.some(t => t.flags.length > 0);
          return (
            <div key={p.id}
              style={{ background: "#0d1117", border: `1px solid ${hasIssues ? "#2a1800" : "#161d2a"}`, borderRadius: 12, padding: "16px 18px", cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#f6c90e"}
              onMouseLeave={e => e.currentTarget.style.borderColor = hasIssues ? "#2a1800" : "#161d2a"}>

              {/* Address header — clickable to property detail */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, cursor: "pointer" }}
                onClick={() => { setSelectedProperty(p); setTab("property"); }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#ffffff" }}>{p.address}</div>
                {!p.owned && <span style={{ fontSize: 10, color: "#ffffff", background: "#1e293b", padding: "2px 7px", borderRadius: 8, fontFamily: "'DM Mono',monospace" }}>MANAGED</span>}
              </div>
              <div style={{ fontSize: 12, color: "#ffffff", marginBottom: 8, fontFamily: "'DM Mono',monospace" }}>{p.ownership}</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: "#ffffff" }}>{p.tenants.length} tenants</span>
                <span style={{ fontSize: 12, color: paidCount === p.tenants.length ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{paidCount}/{p.tenants.length} paid</span>
              </div>

              {/* Receipt buttons */}
              <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                {p.tenants.map(t => (
                  <button key={t.id} onClick={e => { e.stopPropagation(); setReceiptModal({ property: p, tenant: t }); }}
                    style={{ fontSize: 10, padding: "3px 8px", borderRadius: 8, border: "1px solid #1e3a5f", background: "#070a10", color: "#4b8ab0", cursor: "pointer", fontFamily: "'DM Mono',monospace" }}>
                    🧾 {t.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Lease + Rent Increase section */}
              <div style={{ borderTop: "1px solid #1e293b", paddingTop: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>LEASE & RENT INCREASE</div>
                  <a href={LEASE_FOLDER} target="_blank" rel="noreferrer"
                    style={{ fontSize: 10, padding: "2px 9px", borderRadius: 7, border: "1px solid #1e3a1e", background: "#070a10", color: "#22c55e", cursor: "pointer", fontFamily: "'DM Mono',monospace", textDecoration: "none" }}>
                    📄 Leases
                  </a>
                </div>
                {p.tenants.map(t => {
                  const meta = tenantMeta[t.id] || {};
                  const leaseVal = meta.leaseEnd || "";
                  let leaseColor = "#cbd5e1";
                  if (leaseVal) {
                    const d = new Date(leaseVal);
                    const now = new Date("2026-03-04");
                    const daysLeft = Math.floor((d - now) / 86400000);
                    if (daysLeft < 0) leaseColor = "#ef4444";
                    else if (daysLeft < 60) leaseColor = "#f97316";
                    else leaseColor = "#22c55e";
                  }
                  return (
                    <div key={t.id} style={{ marginBottom: 8, background: "#070a10", borderRadius: 8, padding: "8px 10px" }}>
                      <div style={{ fontSize: 12, color: "#ffffff", fontWeight: 600, marginBottom: 6 }}>{t.name} <span style={{ color: "#ffffff", fontWeight: 400 }}>· {t.unit}</span></div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                        <div>
                          <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1, marginBottom: 3 }}>LEASE END</div>
                          <input
                            type="text"
                            placeholder="e.g. Jun 30, 2026"
                            value={leaseVal}
                            onChange={e => setTenantMeta(prev => ({ ...prev, [t.id]: { ...prev[t.id], leaseEnd: e.target.value } }))}
                            style={{ width: "100%", background: "#0d1117", border: `1px solid ${leaseVal ? leaseColor + "80" : "#1e293b"}`, borderRadius: 6, padding: "4px 7px", color: leaseVal ? leaseColor : "#ffffff", fontSize: 11, fontFamily: "'DM Mono',monospace", boxSizing: "border-box" }}
                          />
                        </div>
                        <div>
                          <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1, marginBottom: 3 }}>LAST INCREASE</div>
                          <input
                            type="text"
                            placeholder="e.g. Jan 2025"
                            value={meta.lastIncrease || ""}
                            onChange={e => setTenantMeta(prev => ({ ...prev, [t.id]: { ...prev[t.id], lastIncrease: e.target.value } }))}
                            style={{ width: "100%", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 6, padding: "4px 7px", color: meta.lastIncrease ? "#818cf8" : "#ffffff", fontSize: 11, fontFamily: "'DM Mono',monospace", boxSizing: "border-box" }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── GMAIL INBOX SCAN ── */}
              {p.email && (
                <div style={{ borderTop: "1px solid #1e293b", paddingTop: 10, marginTop: 4 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>📬 INBOX SCAN</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      {gmailTokens[p.id] ? (
                        <button onClick={e => { e.stopPropagation(); scanInbox(p.id, gmailTokens[p.id].token); }}
                          disabled={scanningProp === p.id}
                          style={{ fontSize: 10, padding: "2px 9px", borderRadius: 7, border: "1px solid #1e3a5f", background: "#070a10", color: scanningProp === p.id ? "#374151" : "#60a5fa", cursor: "pointer", fontFamily: "'DM Mono',monospace" }}>
                          {scanningProp === p.id ? "⏳ Scanning..." : "↻ Scan"}
                        </button>
                      ) : (
                        <button onClick={e => { e.stopPropagation(); connectGmail(p); }}
                          style={{ fontSize: 10, padding: "2px 9px", borderRadius: 7, border: "1px solid #1e3a1e", background: "#070a10", color: "#22c55e", cursor: "pointer", fontFamily: "'DM Mono',monospace" }}>
                          + Connect Gmail
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Scan results */}
                  {(() => {
                    const scan = inboxScans[p.id];
                    if (!scan) return (
                      <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", padding: "6px 0" }}>
                        {gmailTokens[p.id] ? "Scan pending..." : "Connect Gmail to auto-detect payments"}
                      </div>
                    );
                    if (scan.status === "scanning") return (
                      <div style={{ fontSize: 11, color: "#60a5fa", fontFamily: "'DM Mono',monospace" }}>⏳ Reading inbox...</div>
                    );
                    if (scan.status === "error") return (
                      <div style={{ fontSize: 11, color: "#ef4444", fontFamily: "'DM Mono',monospace" }}>⚠ {scan.error} — try reconnecting Gmail</div>
                    );
                    if (scan.results.length === 0) return (
                      <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>No payment emails found · Last scanned {scan.lastScanned}</div>
                    );
                    return (
                      <div>
                        {scan.results.map((r, i) => {
                          const typeColor = r.type === "rent" ? "#22c55e" : r.type === "expense" ? "#f97316" : "#94a3b8";
                          const typeBg = r.type === "rent" ? "#052010" : r.type === "expense" ? "#1a0800" : "#0d1117";
                          const typeLabel = r.type === "rent" ? "RENT" : r.type === "expense" ? "EXPENSE" : "UNKNOWN";
                          return (
                            <div key={i} style={{ background: typeBg, border: `1px solid ${typeColor}30`, borderRadius: 7, padding: "7px 10px", marginBottom: 5 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                                <span style={{ fontSize: 10, color: typeColor, fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{typeLabel}</span>
                                <span style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>{r.amount ? fmt(r.amount) : "?"}</span>
                              </div>
                              <div style={{ fontSize: 11, color: "#ffffff" }}>
                                {r.tenant || "Unknown sender"} · {r.description}
                              </div>
                              <div style={{ fontSize: 10, color: "#ffffff", marginTop: 2, fontFamily: "'DM Mono',monospace" }}>{r.date}</div>
                              {r.confidence && <span style={{ fontSize: 9, color: r.confidence === "high" ? "#22c55e" : r.confidence === "medium" ? "#f97316" : "#ef4444", fontFamily: "'DM Mono',monospace" }}>{r.confidence.toUpperCase()} CONFIDENCE</span>}
                            </div>
                          );
                        })}
                        <div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 4 }}>Last scanned: {scan.lastScanned}</div>
                      </div>
                    );
                  })()}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );

  // ── PROPERTY DETAIL ──────────────────────────────────────────────────────────
  const PropertyDetail = () => {
    if (!selectedProperty) return <div style={{ padding: 40, color: "#ffffff" }}>Select a property from the dashboard.</div>;
    const p = selectedProperty;
    const monthlyTarget = p.tenants.reduce((s, t) => s + t.rent, 0);
    const collected = p.tenants.reduce((s, t) => s + (t.payments[selectedMonth] || 0), 0);
    return (
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <button onClick={() => setTab("dashboard")} style={{ background: "none", border: "none", color: "#f6c90e", cursor: "pointer", fontSize: 22, lineHeight: 1 }}>←</button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>{p.address}</div>
            <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{p.ownership} · {p.bank}{p.account ? " #" + p.account : ""}</div>
          </div>
          {!p.owned && <span style={{ fontSize: 10, color: "#e2e8f0", background: "#161d2a", padding: "4px 12px", borderRadius: 10 }}>MANAGED ONLY</span>}
        </div>

        <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 10, padding: "14px 20px", marginBottom: 18, display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
          {p.email && <div><div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>INBOX</div><div style={{ color: "#f6c90e", fontSize: 12 }}>{p.email}</div></div>}
          <div><div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>TYPE</div><div style={{ color: "#e2e8f0", fontSize: 12, textTransform: "capitalize" }}>{p.type}</div></div>
          <div><div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>TARGET</div><div style={{ color: "#e2e8f0", fontSize: 12 }}>{fmt(monthlyTarget)}/mo</div></div>
          <div><div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2 }}>COLLECTED</div><div style={{ color: collected >= monthlyTarget ? "#22c55e" : "#ef4444", fontSize: 12 }}>{fmt(collected)}</div></div>
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
                      <span style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>{t.unit}</span>
                    </div>
                    {t.email && <div style={{ fontSize: 11, color: "#2563eb", marginBottom: 5 }}>{t.email}</div>}
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {t.flags.map((f, fi) => (
                        <span key={fi} style={{ fontSize: 9, padding: "2px 8px", borderRadius: 10, background: "#111827", color: FLAG_COLORS[f] || "#9ca3af", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{f}</span>
                      ))}
                      <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 10, background: "#111827", color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>
                        {t.depositType === "manual" ? "MANUAL" : t.depositType === "cheque" ? "CHEQUE" : "AUTO"}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontFamily: "'DM Mono',monospace", color: status === "paid" ? "#22c55e" : status === "partial" ? "#f97316" : "#ef4444", fontWeight: 700 }}>
                      {paid != null ? fmt(paid) : "NOT PAID"}
                    </div>
                    <div style={{ fontSize: 11, color: "#ffffff" }}>of {fmt(t.rent)}</div>
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
                        style={{ width: 26, height: 26, borderRadius: 6, background: s === "paid" ? "#0d2b1a" : s === "partial" ? "#2a1200" : t.payments[m] === undefined ? "#0a0d12" : "#2a0000", border: m === selectedMonth ? "2px solid #f6c90e" : "1px solid #161d2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: "#ffffff", cursor: "default", fontFamily: "'DM Mono',monospace" }}>
                        {m.slice(0, 1)}
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["rent reminder", "late notice", "partial payment follow-up"].map(type => (
                    <button key={type} onClick={() => draftEmail(p, t, type)}
                      style={{ fontSize: 10, padding: "4px 11px", borderRadius: 7, border: "1px solid #161d2a", background: "#070a10", color: "#e2e8f0", cursor: "pointer", fontFamily: "'DM Mono',monospace" }}>
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
    const outstanding = expected - collected;

    // Flatten all tenants across portfolio, attach property ref
    const allRows = [];
    PORTFOLIO.forEach(p => p.tenants.forEach(t => {
      const paid = t.payments[month] ?? null;
      const owed = paid == null ? t.rent : Math.max(0, t.rent - paid);
      const status = getPaymentStatus(t, month);
      allRows.push({ p, t, paid, owed, status });
    }));

    // Sort: missing first (by owed desc), then partial (by owed desc), then paid
    const order = { missing: 0, partial: 1, paid: 2 };
    allRows.sort((a, b) => {
      if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
      return b.owed - a.owed; // within same group, largest outstanding first
    });

    const unpaidRows = allRows.filter(r => r.status !== "paid");
    const paidRows = allRows.filter(r => r.status === "paid");

    const RowItem = ({ p, t, paid, owed, status }) => (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", marginBottom: 4, background: "#0d1117", borderLeft: `3px solid ${status === "paid" ? "#166534" : status === "partial" ? "#c2410c" : "#dc2626"}`, borderRadius: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
            <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{t.name}</span>
            <span style={{ color: "#ffffff", fontSize: 10, fontFamily: "'DM Mono',monospace" }}>{t.unit}</span>
            <span style={{ color: "#ffffff", fontSize: 10 }}>· {p.address}</span>
            {t.flags.slice(0, 1).map((f, fi) => (
              <span key={fi} style={{ fontSize: 9, color: FLAG_COLORS[f] || "#9ca3af", fontFamily: "'DM Mono',monospace" }}>· {f}</span>
            ))}
          </div>
          {t.notes?.[month] && <div style={{ fontSize: 10, color: "#d97706", marginTop: 2 }}>📝 {t.notes[month]}</div>}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {/* Outstanding badge — only for unpaid/partial */}
          {status !== "paid" && (
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>OUTSTANDING</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#ef4444", fontFamily: "'DM Mono',monospace" }}>{fmt(owed)}</div>
            </div>
          )}
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>
              {status === "paid" ? "PAID" : "RECEIVED"}
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: status === "paid" ? "#22c55e" : status === "partial" ? "#f97316" : "#374151", fontFamily: "'DM Mono',monospace" }}>
              {paid != null ? fmt(paid) : "—"}
            </div>
            <div style={{ fontSize: 10, color: "#ffffff" }}>of {fmt(t.rent)}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 10, padding: "2px 9px", borderRadius: 20, background: status === "paid" ? "#0d2b1a" : status === "partial" ? "#2a1200" : "#2a0000", color: status === "paid" ? "#86efac" : status === "partial" ? "#fed7aa" : "#fca5a5", fontFamily: "'DM Mono',monospace" }}>
              {status.toUpperCase()}
            </span>
            <button onClick={() => draftEmail(p, t, status === "paid" ? "rent reminder" : "late notice")}
              style={{ fontSize: 9, padding: "2px 8px", borderRadius: 5, border: "1px solid #161d2a", background: "none", color: "#ffffff", cursor: "pointer" }}>✉</button>
          </div>
        </div>
      </div>
    );

    return (
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
          <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Rent Check</div>
          <select value={month} onChange={e => setMonth(e.target.value)}
            style={{ background: "#0d1117", border: "1px solid #161d2a", color: "#f1f5f9", fontSize: 13, borderRadius: 8, padding: "6px 12px" }}>
            {MONTHS.map(m => <option key={m}>{m}</option>)}
          </select>
        </div>

        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
          {[
            ["EXPECTED", fmt(expected), "#f6c90e", "#2a2000"],
            ["COLLECTED", fmt(collected), "#22c55e", "#0d2b1a"],
            ["OUTSTANDING", fmt(outstanding), "#ef4444", "#2a0000"],
            ["UNPAID TENANTS", unpaidRows.length, outstanding > 0 ? "#ef4444" : "#22c55e", outstanding > 0 ? "#2a0000" : "#0d2b1a"],
          ].map(([l, v, c, bg]) => (
            <div key={l} style={{ background: "#0d1117", border: `1px solid ${bg}`, borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 6 }}>{l}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* UNPAID / PARTIAL section */}
        {unpaidRows.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 10, color: "#ef4444", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
              OUTSTANDING — {unpaidRows.length} TENANT{unpaidRows.length !== 1 ? "S" : ""}
              <span style={{ color: "#ef4444", fontWeight: 700 }}>{fmt(outstanding)}</span>
            </div>
            {unpaidRows.map(({ p, t, paid, owed, status }) => (
              <RowItem key={t.id} p={p} t={t} paid={paid} owed={owed} status={status} />
            ))}
          </div>
        )}

        {/* PAID section */}
        {paidRows.length > 0 && (
          <div>
            <div style={{ fontSize: 10, color: "#22c55e", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>
              PAID — {paidRows.length} TENANT{paidRows.length !== 1 ? "S" : ""}
            </div>
            {paidRows.map(({ p, t, paid, owed, status }) => (
              <RowItem key={t.id} p={p} t={t} paid={paid} owed={owed} status={status} />
            ))}
          </div>
        )}
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
            <button onClick={() => setEmailDraft(null)} style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", fontSize: 18 }}>✕</button>
          </div>
          <div style={{ fontSize: 11, color: "#ffffff", marginBottom: 14, fontFamily: "'DM Mono',monospace", lineHeight: 1.7 }}>
            FROM: {emailDraft.property.email || "altaraymanagement@gmail.com"}<br />
            TO: {emailDraft.tenant.name}{emailDraft.tenant.email ? ` <${emailDraft.tenant.email}>` : " (no email on file)"}
          </div>
          {emailDraft.loading
            ? <div style={{ color: "#e2e8f0", textAlign: "center", padding: 40 }}>Drafting...</div>
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
        {chatLoading && <div style={{ color: "#ffffff", fontSize: 13, padding: "6px 14px" }}>EstateOS is thinking...</div>}
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
            style={{ fontSize: 11, padding: "4px 11px", borderRadius: 15, border: "1px solid #161d2a", background: "#0d1117", color: "#e2e8f0", cursor: "pointer" }}>{q}</button>
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
        "Mortgage Principal": 0, "Mortgage Interest": 1248.23,
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
                  <div style={{ fontSize: 12, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>{p.ownership} · {reportMonth}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>NET CASH FLOW</div>
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
                    <span style={{ color: "#e2e8f0", fontSize: 13 }}>{t.name} ({t.unit})</span>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 13, color: t.payments[reportMonth] ? "#22c55e" : "#ef4444" }}>{fmt(t.payments[reportMonth] || 0)}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", marginTop: 4 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 13 }}>Total Revenue</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, color: "#22c55e", fontWeight: 700 }}>{fmt(cf.revenue)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                  <span style={{ color: "#ffffff", fontSize: 11 }}>Target</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#ffffff" }}>{fmt(totalRent)}</span>
                </div>
              </div>

              {/* EXPENSES */}
              <div style={{ background: "#0d1117", border: "1px solid #2a1200", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 11, color: "#f97316", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 14 }}>EXPENSES</div>
                {/* Mortgage payment row */}
                {(() => {
                  const mtg = MORTGAGE_DATA[p.id];
                  if (!mtg) return null;
                  return (
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #150d00", background: "#0a0800", borderRadius: 4, paddingLeft: 6, marginBottom: 2 }}>
                      <div>
                        <span style={{ color: "#f6c90e", fontSize: 12 }}>Mortgage Payment</span>
                        <span style={{ color: "#ffffff", fontSize: 10, fontFamily: "'DM Mono',monospace", marginLeft: 8 }}>{mtg.lender} · {mtg.type}</span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 13, color: "#f6c90e", fontWeight: 700 }}>{fmt(mtg.monthlyPayment)}</div>
                        <div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>P: {fmt(mtg.monthlyPrincipal)} · I: {fmt(mtg.monthlyInterest)}</div>
                      </div>
                    </div>
                  );
                })()}
                {EXPENSE_CATEGORIES.map(cat => (
                  <div key={cat} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: "1px solid #150d00" }}>
                    <span style={{ color: "#e2e8f0", fontSize: 12 }}>{cat}</span>
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
                <div style={{ fontSize: 11, color: "#e2e8f0", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>CASH FLOW — {reportMonth}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ color: "#e2e8f0", fontSize: 13 }}>Revenue</span>
                  <span style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace" }}>{fmt(cf.revenue)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "#e2e8f0", fontSize: 13 }}>Expenses</span>
                  <span style={{ color: "#f97316", fontFamily: "'DM Mono',monospace" }}>({fmt(cf.expenses)})</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #1e293b", paddingTop: 10 }}>
                  <span style={{ color: "#f1f5f9", fontWeight: 700 }}>Net Cash Flow</span>
                  <span style={{ color: cf.cashflow >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontSize: 18, fontWeight: 700 }}>{fmt(cf.cashflow)}</span>
                </div>
              </div>
              <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px" }}>
                <div style={{ fontSize: 11, color: "#e2e8f0", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>YTD (Jan–Mar 2026)</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ color: "#e2e8f0", fontSize: 13 }}>Revenue</span>
                  <span style={{ color: "#22c55e", fontFamily: "'DM Mono',monospace" }}>{fmt(ytd.revenue)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ color: "#e2e8f0", fontSize: 13 }}>Expenses</span>
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
            <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 16 }}>CASH FLOW BY CORPORATION — {reportMonth}</div>
            {corpData.map(corp => (
              <div key={corp.id} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "18px 22px", marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>{corp.name}</div>
                    <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{corp.properties.length} properties</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>NET CASH FLOW</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: corp.cashflow >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace" }}>{fmt(corp.cashflow)}</div>
                  </div>
                </div>
                {corp.properties.map(pid => {
                  const prop = PORTFOLIO.find(p => p.id === pid);
                  if (!prop) return null;
                  const pcf = getPropertyCashflow(pid, reportMonth);
                  return (
                    <div key={pid} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderTop: "1px solid #0f1520" }}>
                      <span style={{ color: "#e2e8f0", fontSize: 13 }}>{prop.address}</span>
                      <div style={{ display: "flex", gap: 20 }}>
                        <span style={{ color: "#22c55e", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>{fmt(pcf.revenue)}</span>
                        <span style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>({fmt(pcf.expenses)})</span>
                        <span style={{ color: pcf.cashflow >= 0 ? "#22c55e" : "#ef4444", fontSize: 13, fontFamily: "'DM Mono',monospace", fontWeight: 700, minWidth: 80, textAlign: "right" }}>{fmt(pcf.cashflow)}</span>
                      </div>
                    </div>
                  );
                })}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 0", borderTop: "1px solid #1e293b", marginTop: 4 }}>
                  <span style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>Totals</span>
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
                    <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 6 }}>{l}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 12 }}>ALL PROPERTIES</div>
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "10px 18px", borderBottom: "1px solid #161d2a" }}>
                {["PROPERTY","REVENUE","EXPENSES","CASH FLOW"].map(h => <div key={h} style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
              </div>
              {PORTFOLIO.map((prop, i) => {
                const pcf = getPropertyCashflow(prop.id, reportMonth);
                return (
                  <div key={prop.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "11px 18px", borderBottom: i < PORTFOLIO.length - 1 ? "1px solid #0f1520" : "none", background: i % 2 === 0 ? "#0a0e16" : "#0d1117" }}>
                    <div>
                      <span style={{ color: "#e2e8f0", fontSize: 13 }}>{prop.address}</span>
                      {!prop.owned && <span style={{ fontSize: 9, color: "#ffffff", background: "#161d2a", padding: "1px 5px", borderRadius: 6, marginLeft: 6, fontFamily: "'DM Mono',monospace" }}>MGD</span>}
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

  // ── export default function EstateOS() {
// MODULE ──────────────────────────────────────────────────────────
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
            <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>CRA Statement of Real Estate Rentals</div>
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
                    <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 4 }}>{l}</div>
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
                  <div style={{ color: "#ffffff", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>{m}</div>
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
                {["CATEGORY","FULL AMOUNT","YOUR SHARE","CRA LINE"].map(h => <div key={h} style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
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
                    <div style={{ color: "#ffffff", fontSize: 11, fontFamily: "'DM Mono',monospace" }}>{lineLabel}</div>
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
                {["CRA LINE","DESCRIPTION","FULL AMOUNT","YOUR SHARE"].map(h => <div key={h} style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
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
                        <div style={{ color: item.note ? "#f59e0b" : item.amount > 0 ? "#e2e8f0" : "#374151", fontSize: 13 }}>{item.cra}{item.note && <span style={{ color: "#e2e8f0", fontSize: 10 }}> — not deductible</span>}</div>
                        <div style={{ color: item.note ? "#6b7280" : item.amount > 0 ? "#f97316" : "#1f2937", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{item.amount > 0 ? fmt(item.amount) : "—"}</div>
                        <div style={{ color: item.note ? "#6b7280" : item.amount > 0 ? "#f97316" : "#1f2937", fontFamily: "'DM Mono',monospace", fontSize: 13 }}>{item.amount > 0 && !item.note ? fmt(item.amount * own.pct / 100) : "—"}</div>
                      </div>
                    );
                  })}
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 130px 130px", padding: "12px 18px", borderTop: "2px solid #1e293b", background: "#0a0e16" }}>
                    <div></div>
                    <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 13 }}>Total Deductible Expenses</div>
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
                    <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{corp.properties.length} properties · Tax Year {taxYear}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>NET RENTAL INCOME</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: corp.netIncome >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace" }}>{fmt(corp.netIncome)}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                  {[["GROSS INCOME", fmt(corp.revenue), "#22c55e"], ["TOTAL EXPENSES", fmt(corp.totalExp), "#f97316"], ["NET INCOME", fmt(corp.netIncome), corp.netIncome >= 0 ? "#22c55e" : "#ef4444"]].map(([l, v, c]) => (
                    <div key={l} style={{ background: "#070a10", borderRadius: 8, padding: "10px 14px" }}>
                      <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1, marginBottom: 4 }}>{l}</div>
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
                      <span style={{ color: "#e2e8f0", fontSize: 12 }}>{cat} <span style={{ color: "#ffffff", fontSize: 10 }}>{craRef?.line ? `→ Line ${craRef.line}` : "non-deductible"}</span></span>
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
            <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 12 }}>ALL OWNED PROPERTIES — TAX YEAR {taxYear}</div>
            <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "10px 18px", borderBottom: "1px solid #161d2a", background: "#060809" }}>
                {["PROPERTY","OWNERSHIP","GROSS INCOME","EXPENSES","NET INCOME"].map(h => <div key={h} style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>{h}</div>)}
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
                      <div style={{ color: "#ffffff", fontSize: 10, fontFamily: "'DM Mono',monospace" }}>{own.corp}</div>
                    </div>
                    <div style={{ color: "#e2e8f0", fontSize: 12, fontFamily: "'DM Mono',monospace" }}>{own.pct}%</div>
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

  // ── MORTGAGES TAB ────────────────────────────────────────────────────────────
  const MortgagesTab = () => {
    const [section, setSection] = useState("first");
    const entries = Object.entries(MORTGAGE_DATA);
    const totalBalance1st = entries.reduce((s, [, m]) => s + (m.balance || 0), 0);
    const totalMonthly1st = entries.reduce((s, [, m]) => s + (m.monthlyPayment || 0), 0);
    const totalBalance2nd = SECOND_MORTGAGES.reduce((s, m) => s + m.amount, 0);
    const totalMonthly2nd = SECOND_MORTGAGES.reduce((s, m) => s + m.monthly, 0);
    const totalBalanceLOC = LINES_OF_CREDIT.reduce((s, l) => s + l.balance, 0);
    const totalMonthlyLOC = LINES_OF_CREDIT.reduce((s, l) => s + l.monthly, 0);
    const grandTotalDebt = totalBalance1st + totalBalance2nd + totalBalanceLOC;
    const grandTotalMonthly = totalMonthly1st + totalMonthly2nd + totalMonthlyLOC;

    const headStyle = { fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#ffffff", letterSpacing: 1.5, padding: "10px 14px", textAlign: "left", borderBottom: "2px solid #161d2a", whiteSpace: "nowrap" };
    const cell = (color, bold, right) => ({ fontFamily: "'DM Mono',monospace", fontSize: 12, color: color || "#ffffff", fontWeight: bold ? 700 : 400, padding: "11px 14px", borderBottom: "1px solid #0d1117", whiteSpace: "nowrap", textAlign: right ? "right" : "left" });

    const today = new Date();
    function renewalColor(maturity) {
      if (!maturity || maturity === "—") return "#ffffff";
      const d = new Date(maturity);
      if (isNaN(d)) return "#ffffff";
      const days = Math.floor((d - today) / 86400000);
      if (days < 0) return "#ef4444";
      if (days < 90) return "#f97316";
      if (days < 180) return "#f6c90e";
      return "#22c55e";
    }

    return (
      <div style={{ padding: 24 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Mortgages & Debt</div>
          <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>All properties — 1st mortgages, 2nd mortgages, lines of credit</div>
        </div>

        {/* Portfolio summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
          {[
            ["TOTAL DEBT", fmt(grandTotalDebt), "#ef4444"],
            ["1ST MORTGAGES", fmt(totalBalance1st), "#f97316"],
            ["2ND MORTGAGES", fmt(totalBalance2nd), "#f6c90e"],
            ["MONTHLY PAYMENTS", fmt(grandTotalMonthly), "#818cf8"],
          ].map(([l, v, c]) => (
            <div key={l} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontSize: 9, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 6 }}>{l}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: c, fontFamily: "'DM Mono',monospace" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Section tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          {[["first", `1ST MORTGAGES (${entries.length})`], ["second", `2ND MORTGAGES (${SECOND_MORTGAGES.length})`], ["loc", `LINES OF CREDIT (${LINES_OF_CREDIT.length})`]].map(([id, label]) => (
            <button key={id} onClick={() => setSection(id)}
              style={{ padding: "7px 16px", borderRadius: 8, border: `1px solid ${section === id ? "#f6c90e" : "#1e293b"}`, background: section === id ? "#f6c90e22" : "#0d1117", color: section === id ? "#f6c90e" : "#ffffff", fontFamily: "'DM Mono',monospace", fontSize: 11, cursor: "pointer", fontWeight: section === id ? 700 : 400 }}>
              {label}
            </button>
          ))}
        </div>

        {/* 1ST MORTGAGES TABLE */}
        {section === "first" && (
          <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#070a10" }}>
                    <th style={headStyle}>PROPERTY</th>
                    <th style={headStyle}>LENDER</th>
                    <th style={headStyle}>TYPE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>BALANCE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>RATE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>MONTHLY</th>
                    <th style={headStyle}>ACCOUNT</th>
                    <th style={headStyle}>RENEWAL</th>
                    <th style={headStyle}>NOTES</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map(([propId, m], i) => {
                    const prop = PORTFOLIO.find(p => p.id === propId);
                    const rc = renewalColor(m.maturity);
                    return (
                      <tr key={propId} style={{ background: i % 2 === 0 ? "#0d1117" : "#0a0d12" }}>
                        <td style={{ ...cell("#ffffff", true), paddingLeft: 16 }}>
                          {prop?.address || propId.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                        </td>
                        <td style={cell("#ffffff")}>{m.lender}</td>
                        <td style={cell("#818cf8")}>{m.type}</td>
                        <td style={{ ...cell("#ef4444", true), textAlign: "right" }}>{m.balance ? fmt(m.balance) : "—"}</td>
                        <td style={{ ...cell("#818cf8", true), textAlign: "right" }}>{m.rate ? m.rate.toFixed(2) + "%" : "VAR"}</td>
                        <td style={{ ...cell("#f6c90e", true), textAlign: "right" }}>{fmt(m.monthlyPayment)}</td>
                        <td style={cell("#ffffff")}><div style={{ fontSize: 10 }}>{m.account}</div></td>
                        <td style={{ ...cell(rc, true) }}>{m.maturity}</td>
                        <td style={{ ...cell("#ffffff"), maxWidth: 220, whiteSpace: "normal", fontSize: 10 }}>{m.note}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr style={{ background: "#f6c90e" }}>
                    <td colSpan={3} style={{ padding: "11px 14px 11px 16px", fontFamily: "'DM Mono',monospace", fontSize: 12, fontWeight: 700, color: "#000" }}>TOTALS — {entries.length} PROPERTIES</td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(totalBalance1st)}</td>
                    <td></td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(totalMonthly1st)}</td>
                    <td colSpan={3}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* 2ND MORTGAGES TABLE */}
        {section === "second" && (
          <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#070a10" }}>
                    <th style={headStyle}>PROPERTY</th>
                    <th style={headStyle}>LENDER</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>AMOUNT</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>RATE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>MONTHLY</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>ANNUAL</th>
                    <th style={headStyle}>PAYMENT TYPE</th>
                    <th style={headStyle}>MATURITY</th>
                    <th style={headStyle}>NOTES</th>
                  </tr>
                </thead>
                <tbody>
                  {SECOND_MORTGAGES.map((m, i) => {
                    const rc = renewalColor(m.maturity);
                    return (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#0d1117" : "#0a0d12" }}>
                        <td style={{ ...cell("#ffffff", true), paddingLeft: 16 }}>{m.property}</td>
                        <td style={cell("#ffffff")}>{m.lender}</td>
                        <td style={{ ...cell("#ef4444", true), textAlign: "right" }}>{fmt(m.amount)}</td>
                        <td style={{ ...cell("#818cf8", true), textAlign: "right" }}>{m.rate}%</td>
                        <td style={{ ...cell("#f6c90e", true), textAlign: "right" }}>{m.monthly > 0 ? fmt(m.monthly) : "—"}</td>
                        <td style={{ ...cell("#f97316"), textAlign: "right" }}>{m.annual > 0 ? fmt(m.annual) : "—"}</td>
                        <td style={cell("#ffffff")}>{m.paymentType}</td>
                        <td style={{ ...cell(rc, true) }}>{m.maturity}</td>
                        <td style={{ ...cell("#ffffff"), maxWidth: 200, whiteSpace: "normal", fontSize: 10 }}>{m.note}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr style={{ background: "#f6c90e" }}>
                    <td colSpan={2} style={{ padding: "11px 14px 11px 16px", fontFamily: "'DM Mono',monospace", fontSize: 12, fontWeight: 700, color: "#000" }}>TOTALS — {SECOND_MORTGAGES.length} 2ND MORTGAGES</td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(totalBalance2nd)}</td>
                    <td></td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(totalMonthly2nd)}</td>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* LINES OF CREDIT TABLE */}
        {section === "loc" && (
          <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#070a10" }}>
                    <th style={headStyle}>NAME</th>
                    <th style={headStyle}>BANK</th>
                    <th style={headStyle}>PROPERTY / NOTE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>BALANCE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>LIMIT</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>AVAILABLE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>RATE</th>
                    <th style={{ ...headStyle, textAlign: "right" }}>MONTHLY</th>
                  </tr>
                </thead>
                <tbody>
                  {LINES_OF_CREDIT.map((l, i) => {
                    const available = l.limit - l.balance;
                    return (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#0d1117" : "#0a0d12" }}>
                        <td style={{ ...cell("#ffffff", true), paddingLeft: 16 }}>{l.name}</td>
                        <td style={cell("#ffffff")}>{l.bank}</td>
                        <td style={cell("#ffffff")}><div style={{ fontSize: 10 }}>{l.property}</div></td>
                        <td style={{ ...cell("#ef4444", true), textAlign: "right" }}>{fmt(l.balance)}</td>
                        <td style={{ ...cell("#ffffff"), textAlign: "right" }}>{fmt(l.limit)}</td>
                        <td style={{ ...cell(available > 0 ? "#22c55e" : "#ef4444", true), textAlign: "right" }}>{fmt(available)}</td>
                        <td style={{ ...cell("#818cf8", true), textAlign: "right" }}>{l.rate > 0 ? l.rate.toFixed(2) + "%" : "0%"}</td>
                        <td style={{ ...cell("#f6c90e", true), textAlign: "right" }}>{l.monthly > 0 ? fmt(l.monthly) : "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr style={{ background: "#f6c90e" }}>
                    <td colSpan={3} style={{ padding: "11px 14px 11px 16px", fontFamily: "'DM Mono',monospace", fontSize: 12, fontWeight: 700, color: "#000" }}>TOTALS — {LINES_OF_CREDIT.length} LINES</td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(totalBalanceLOC)}</td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(LINES_OF_CREDIT.reduce((s, l) => s + l.limit, 0))}</td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(LINES_OF_CREDIT.reduce((s, l) => s + (l.limit - l.balance), 0))}</td>
                    <td></td>
                    <td style={{ padding: "11px 14px", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 700, color: "#000", textAlign: "right" }}>{fmt(totalMonthlyLOC)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* Renewal alerts */}
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 10 }}>⚠ RENEWAL ALERTS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[...entries.filter(([, m]) => renewalColor(m.maturity) === "#ef4444" || renewalColor(m.maturity) === "#f97316").map(([id, m]) => ({
              label: PORTFOLIO.find(p => p.id === id)?.address || id, maturity: m.maturity, color: renewalColor(m.maturity)
            })),
            ...SECOND_MORTGAGES.filter(m => renewalColor(m.maturity) === "#ef4444" || renewalColor(m.maturity) === "#f97316").map(m => ({
              label: `${m.property} (${m.lender})`, maturity: m.maturity, color: renewalColor(m.maturity)
            }))].map((a, i) => (
              <div key={i} style={{ background: a.color + "15", border: `1px solid ${a.color}40`, borderRadius: 8, padding: "6px 12px", fontSize: 11, color: a.color, fontFamily: "'DM Mono',monospace" }}>
                {a.label} · {a.maturity}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ── NAV + RENDER ──────────────────────────────────────────────────────────────
  return (
    <div style={{ background: "#070a10", minHeight: "100vh", color: "#f1f5f9" }}>
      <div style={{ background: "#070a10", borderBottom: "1px solid #0d1117", padding: "0 24px", display: "flex", alignItems: "center", height: 54, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ fontSize: 17, fontFamily: "'Playfair Display',serif", color: "#f6c90e", marginRight: 30, letterSpacing: 0.5 }}>EstateOS</div>
        {[
          { id: "dashboard", label: "Dashboard" },
          { id: "rent", label: "Rent Check" },
          { id: "cashflow", label: "Cash Flow" },
          { id: "vacancies", label: "Vacancies" },
          { id: "reports", label: "Reports" },
          { id: "payout", label: "Management Payout" },
          { id: "t776", label: "T776 Tax" },
          { id: "mortgages", label: "Mortgages" },
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
        {tab === "cashflow" && <CashFlowBoard getPropertyCashflow={getPropertyCashflow} expenses={expenses} />}
        {tab === "vacancies" && <VacanciesTab vacancies={VACANCIES} setEmailDraft={setEmailDraft} />}
        {tab === "reports" && <MonthlyReports />}
        {tab === "t776" && <T776Tab />}
{tab === "payout" && <OwnerPayout selectedMonth={selectedMonth} />}
        {tab === "mortgages" && <MortgagesTab />}
        {tab === "property" && <PropertyDetail />}
        {tab === "chat" && <AIChat />}
      </div>

      <EmailModal />
      <ReceiptModal />
    </div>
  );
}

// ── CASH FLOW BOARD ────────────────────────────────────────────────────────────
function CashFlowBoard({ getPropertyCashflow, expenses }) {
  const [month, setMonth] = useState(CURRENT_MONTH);

  const rows = PORTFOLIO.map(p => {
    const cf = getPropertyCashflow(p.id, month);
    const mtg = MORTGAGE_DATA[p.id];
    const mortgage = mtg ? mtg.monthlyPayment : 0;
    const totalExp = cf.expenses + mortgage;
    const net = cf.revenue - totalExp;
    const targetRent = p.tenants.reduce((s, t) => s + t.rent, 0);
    return { p, revenue: cf.revenue, expenses: cf.expenses, mortgage, totalExp, net, targetRent };
  });

  const totalRev = rows.reduce((s, r) => s + r.revenue, 0);
  const totalExp = rows.reduce((s, r) => s + r.totalExp, 0);
  const totalMtg = rows.reduce((s, r) => s + r.mortgage, 0);
  const totalNet = totalRev - totalExp;
  const positive = rows.filter(r => r.net > 0).length;
  const negative = rows.filter(r => r.net < 0).length;
  const neutral = rows.filter(r => r.net === 0).length;

  return (
    <div style={{ padding: 24 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Cash Flow Board</div>
          <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>All properties · Revenue minus expenses & mortgage</div>
        </div>
        <select value={month} onChange={e => setMonth(e.target.value)}
          style={{ background: "#0d1117", border: "1px solid #161d2a", color: "#f1f5f9", fontSize: 13, borderRadius: 8, padding: "6px 12px" }}>
          {MONTHS.map(m => <option key={m}>{m}</option>)}
        </select>
      </div>

      {/* Portfolio summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "TOTAL REVENUE", value: fmt(totalRev), color: "#22c55e", border: "#0d2b1a" },
          { label: "TOTAL EXPENSES", value: fmt(totalExp), color: "#f97316", border: "#2a1200" },
          { label: "MORTGAGE PMTS", value: fmt(totalMtg), color: "#f6c90e", border: "#2a2000" },
          { label: "NET CASH FLOW", value: fmt(totalNet), color: totalNet >= 0 ? "#22c55e" : "#ef4444", border: totalNet >= 0 ? "#0d2b1a" : "#2a0000" },
        ].map(c => (
          <div key={c.label} style={{ background: "#0d1117", border: `1px solid ${c.border}`, borderRadius: 12, padding: "16px 18px" }}>
            <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 6 }}>{c.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: c.color, fontFamily: "'DM Mono',monospace" }}>{c.value}</div>
          </div>
        ))}
      </div>

      {/* Status badges */}
      <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
        <div style={{ background: "#052010", border: "1px solid #0d2b1a", borderRadius: 20, padding: "4px 14px", fontSize: 11, color: "#22c55e", fontFamily: "'DM Mono',monospace" }}>✓ {positive} positive</div>
        <div style={{ background: "#200505", border: "1px solid #2a0000", borderRadius: 20, padding: "4px 14px", fontSize: 11, color: "#ef4444", fontFamily: "'DM Mono',monospace" }}>✗ {negative} negative</div>
        {neutral > 0 && <div style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 20, padding: "4px 14px", fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>— {neutral} no data</div>}
      </div>

      {/* Property grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
        {rows.map(({ p, revenue, expenses, mortgage, totalExp, net, targetRent }) => {
          const isPos = net > 0;
          const isNeg = net < 0;
          const borderColor = isPos ? "#0d2b1a" : isNeg ? "#2a0000" : "#161d2a";
          const netColor = isPos ? "#22c55e" : isNeg ? "#ef4444" : "#ffffff";
          const glowBg = isPos ? "#052010" : isNeg ? "#150000" : "#0d1117";
          const hasNoData = revenue === 0 && expenses === 0 && mortgage === 0;

          return (
            <div key={p.id} style={{ background: "#0d1117", border: `1px solid ${borderColor}`, borderRadius: 14, padding: "16px 18px", position: "relative" }}>
              {/* Address + ownership */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", fontFamily: "'Playfair Display',serif" }}>{p.address}</div>
                <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{p.ownership}</div>
              </div>

              {/* Revenue row */}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #0f1a10" }}>
                <span style={{ color: "#ffffff", fontSize: 12 }}>Revenue</span>
                <span style={{ color: revenue > 0 ? "#22c55e" : "#374151", fontFamily: "'DM Mono',monospace", fontSize: 12 }}>{revenue > 0 ? fmt(revenue) : "—"}</span>
              </div>

              {/* Mortgage row — only if applicable */}
              {mortgage > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #0f1400" }}>
                  <span style={{ color: "#ffffff", fontSize: 12 }}>Mortgage</span>
                  <span style={{ color: "#f6c90e", fontFamily: "'DM Mono',monospace", fontSize: 12 }}>({fmt(mortgage)})</span>
                </div>
              )}

              {/* Other expenses row */}
              {expenses > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #150d00" }}>
                  <span style={{ color: "#ffffff", fontSize: 12 }}>Expenses</span>
                  <span style={{ color: "#f97316", fontFamily: "'DM Mono',monospace", fontSize: 12 }}>({fmt(expenses)})</span>
                </div>
              )}

              {/* Net cash flow — big number */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, background: glowBg, borderRadius: 8, padding: "8px 10px" }}>
                <span style={{ color: "#e2e8f0", fontSize: 11, fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>NET CASH FLOW</span>
                <span style={{ color: netColor, fontFamily: "'DM Mono',monospace", fontSize: 18, fontWeight: 700 }}>
                  {hasNoData ? "—" : (isPos ? "+" : "") + fmt(net)}
                </span>
              </div>

              {/* Target rent note */}
              <div style={{ marginTop: 8, fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", textAlign: "right" }}>
                Target: {fmt(targetRent)}/mo · {p.tenants.length} unit{p.tenants.length !== 1 ? "s" : ""}
                {!p.owned && <span style={{ color: "#f97316", marginLeft: 6 }}>· managed only</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Portfolio total row */}
      <div style={{ marginTop: 20, background: "#0a0d14", border: `1px solid ${totalNet >= 0 ? "#0d2b1a" : "#2a0000"}`, borderRadius: 14, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 13, color: "#e2e8f0", fontFamily: "'DM Mono',monospace", letterSpacing: 1 }}>PORTFOLIO TOTAL — {month}</div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>REVENUE</div>
            <div style={{ fontSize: 16, color: "#22c55e", fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{fmt(totalRev)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>EXPENSES</div>
            <div style={{ fontSize: 16, color: "#f97316", fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>({fmt(totalExp)})</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>NET</div>
            <div style={{ fontSize: 24, color: totalNet >= 0 ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono',monospace", fontWeight: 700 }}>{totalNet >= 0 ? "+" : ""}{fmt(totalNet)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── VACANCIES DATA ─────────────────────────────────────────────────────────────
const VACANCIES = [
  { id: "v1", available: "March 1, 2026", address: "164 Kirkpatrick", unit: "Unit 2", beds: 2, baths: 1, price: 1700, utilities: "Plus utilities", parking: null, type: "apartment", driveFolder: "https://drive.google.com/drive/folders/1iE0B9oqFN-ZVmSqIcN54I24lOMrto6Gd", notes: "2 bedroom unit — well maintained" },
  { id: "v2", available: "March 1, 2026", address: "246 Adelaide", unit: "Unit 5", beds: 2, baths: 1, price: 1800, utilities: "All inclusive", parking: "+$50/mo", type: "apartment", driveFolder: "https://drive.google.com/drive/folders/1APTlcjO_rt2Dc7cuY7iqNcGe-Dxlb6qc", notes: "All utilities included. Parking available." },
  { id: "v3", available: "April 1, 2026", address: "246 Adelaide", unit: "Unit 8", beds: 2, baths: 1, price: 1800, utilities: "All inclusive", parking: "+$50/mo", type: "apartment", driveFolder: "https://drive.google.com/drive/folders/1APTlcjO_rt2Dc7cuY7iqNcGe-Dxlb6qc", notes: "All utilities included. Parking available." },
  { id: "v4", available: "April 1, 2026", address: "32 Holland Cres", unit: "Unit 1", beds: 3, baths: 2, price: 2000, utilities: "Plus utilities", parking: "2 spots included", type: "apartment", driveFolder: "https://drive.google.com/drive/folders/1kI4EUdoD75mttuhbaDYmJvlQNmKaV9i4", notes: "Spacious 3 bed / 2 bath. 2 parking spots included." },
  { id: "v5", available: "May 1, 2026", address: "246 Adelaide", unit: "Unit 13", beds: 2, baths: 1, price: 1800, utilities: "All inclusive", parking: "+$50/mo", type: "apartment", driveFolder: "https://drive.google.com/drive/folders/1APTlcjO_rt2Dc7cuY7iqNcGe-Dxlb6qc", notes: "All utilities included. Parking available." },
  { id: "v6", available: "May 1, 2026", address: "1241 Johnson", unit: "Unit 2", beds: 3, baths: 1, price: 1800, utilities: "Plus utilities", parking: "2 spots included", type: "apartment", driveFolder: "https://drive.google.com/drive/folders/10kQ35yxWMPAOB0qDywC38jUSau9x6w25", notes: "3 bedrooms, 2 parking spots." },
  { id: "v7", available: "May 1, 2026", address: "28 Toronto St", unit: "Whole House", beds: 8, baths: 4, price: 1200, utilities: "Plus utilities", parking: "4 spots", type: "house", driveFolder: null, notes: "8 bedroom house. $1,200/room. 4 parking spots. Great for groups or student house." },
  { id: "v8", available: "May 1, 2026", address: "82 Hamilton", unit: "Rooms", beds: null, baths: null, price: 750, utilities: "All inclusive", parking: "Street parking", type: "rooms", driveFolder: "https://drive.google.com/drive/folders/1tkZgNRkcM98uGym9djSCb27K6cp3KCoF", notes: "4 rooms available. Students & young professionals. All inclusive. Furnished." },
  { id: "v9", available: "May 1, 2026", address: "311 Portsmouth", unit: "Rooms", beds: null, baths: null, price: 750, utilities: "All inclusive", parking: "Limited", type: "rooms", driveFolder: null, notes: "4 rooms available. Students & young professionals. All inclusive." },
  { id: "v10", available: "May 1, 2026", address: "19 MacPherson", unit: "Rooms", beds: null, baths: null, price: 750, utilities: "Plus utilities", parking: "Limited", type: "rooms", tag: "Women Only", driveFolder: "https://drive.google.com/drive/folders/1h9ol09t2OEShkbuD1Qeg4Tid5bh971M2", notes: "4 rooms available. Women only. Furnished. Shared common areas." },
  { id: "v11", available: "May 1, 2026", address: "152 Calderwood", unit: "Rooms", beds: null, baths: null, price: 750, utilities: "All inclusive", parking: "2 spots", type: "rooms", driveFolder: "https://drive.google.com/drive/folders/14ZmBucYolzHxdEfMwi3GQkAmy9ihbWFB", notes: "4 rooms available. Students & young professionals. All inclusive. Furnished." },
];

function generateListingPDF(v) {
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
  <title>${v.address} ${v.unit}</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Arial,sans-serif;padding:50px;color:#111;max-width:750px;margin:0 auto}
    .logo{font-size:22px;font-weight:900;letter-spacing:2px}.logo span{color:#c8a900}
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
    .contact-box{background:#111;color:#fff;border-radius:8px;padding:20px 24px;text-align:center}
    .contact-label{font-size:10px;letter-spacing:3px;color:#888;margin-bottom:8px}
    .contact-email{font-size:16px;font-weight:700;color:#f6c90e;letter-spacing:1px}
    .contact-sub{font-size:11px;color:#555;margin-top:6px}
    .footer{margin-top:24px;font-size:10px;color:#aaa;text-align:center}
    @media print{body{padding:24px}}
  </style></head><body>
    <div class="header">
      <div><div class="logo">ALTARAY<span>▲</span></div><div class="tagline">PROPERTY SERVICES</div></div>
      <div class="available-badge">AVAILABLE ${v.available.toUpperCase()}</div>
    </div>
    ${v.tag ? `<div style="background:#7c3aed;color:#fff;text-align:center;padding:10px;font-weight:700;letter-spacing:2px;font-size:13px;margin-bottom:20px;border-radius:6px">⭐ ${v.tag.toUpperCase()}</div>` : ""}
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
      <div class="detail-box"><div class="detail-label">Unit Type</div><div class="detail-val">${v.type === "rooms" ? "Student / Shared House" : v.type === "house" ? "Whole House" : "Apartment"}</div></div>
      <div class="detail-box"><div class="detail-label">${v.type === "rooms" ? "Rooms" : "Bedrooms / Bathrooms"}</div><div class="detail-val">${v.type === "rooms" ? "4 rooms available" : `${v.beds} bed / ${v.baths} bath`}</div></div>
      <div class="detail-box"><div class="detail-label">Utilities</div><div class="detail-val">${v.utilities}</div></div>
      <div class="detail-box"><div class="detail-label">Parking</div><div class="detail-val">${v.parking || "Not included"}</div></div>
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

function generateAllListingsPDF(vacancies) {
  const byMonth = {
    "March 1, 2026": vacancies.filter(v => v.available.includes("March")),
    "April 1, 2026":  vacancies.filter(v => v.available.includes("April")),
    "May 1, 2026":    vacancies.filter(v => v.available.includes("May")),
  };
  const rows = vacancies.map(v => `
    <tr>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;font-weight:600">${v.address}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;color:#555">${v.unit}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #eee">${v.type === "rooms" ? "Rooms" : `${v.beds}bd/${v.baths}ba`}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;font-family:monospace;font-weight:700">$${v.price.toLocaleString()}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;color:#555">${v.utilities}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;color:#555">${v.parking || "—"}</td>
      <td style="padding:9px 12px;border-bottom:1px solid #eee;font-weight:700;color:${v.available.includes("March")?"#b45309":v.available.includes("April")?"#4338ca":"#065f46"}">${v.available}</td>
    </tr>`).join("");
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Altaray — Available Units</title>
  <style>
    *{box-sizing:border-box}body{font-family:Arial,sans-serif;padding:40px;max-width:1000px;margin:0 auto;color:#111}
    .logo{font-size:20px;font-weight:900;letter-spacing:2px}.logo span{color:#c8a900}
    .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;padding-bottom:16px;border-bottom:3px solid #111}
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
      <div><div class="logo">ALTARAY<span>▲</span></div><div style="font-size:9px;letter-spacing:4px;color:#888;margin-top:2px">PROPERTY SERVICES</div></div>
      <div style="text-align:right"><div style="font-size:14px;letter-spacing:3px;text-transform:uppercase;color:#555;font-weight:normal">Available Units</div><div style="font-size:12px;color:#555">As of ${new Date().toLocaleDateString("en-CA", {month:"long",day:"numeric",year:"numeric"})}</div></div>
    </div>
    <div class="summary">
      ${Object.entries(byMonth).map(([m, units]) => `<div class="sum-box"><div class="sum-label">${m}</div><div class="sum-val">${units.length}</div><div style="font-size:11px;color:#999;margin-top:4px">$${units.reduce((s,v)=>s+v.price,0).toLocaleString()}/mo</div></div>`).join("")}
      <div class="sum-box" style="border-color:#f6c90e"><div class="sum-label">Total Available</div><div class="sum-val" style="color:#c8a900">${vacancies.length}</div><div style="font-size:11px;color:#999;margin-top:4px">$${vacancies.reduce((s,v)=>s+v.price,0).toLocaleString()}/mo</div></div>
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

// ── VACANCIES TAB COMPONENT ────────────────────────────────────────────────────
function VacanciesTab({ vacancies, setEmailDraft }) {
  const [vacancyFilter, setVacancyFilter] = useState("all");
  const totalRevenuePotential = vacancies.reduce((s, v) => s + v.price, 0);
  const byMonth = {
    "March 1, 2026": vacancies.filter(v => v.available.includes("March")),
    "April 1, 2026":  vacancies.filter(v => v.available.includes("April")),
    "May 1, 2026":    vacancies.filter(v => v.available.includes("May")),
  };
  const filtered = vacancyFilter === "all" ? vacancies
    : vacancyFilter === "march" ? vacancies.filter(v => v.available.includes("March"))
    : vacancyFilter === "april" ? vacancies.filter(v => v.available.includes("April"))
    : vacancyFilter === "may"   ? vacancies.filter(v => v.available.includes("May"))
    : vacancyFilter === "apartment" ? vacancies.filter(v => v.type === "apartment")
    : vacancies.filter(v => v.type === "rooms" || v.type === "house");

  function generateListingEmail(v) {
    return {
      subject: `${v.address} ${v.unit} — Available ${v.available}`,
      body: `Hi,\n\nThank you for your interest in our available unit at ${v.address}.\n\nHere are the details:\n\n📍 Address: ${v.address} — ${v.unit}\n📅 Available: ${v.available}\n🛏 ${v.type === "rooms" ? "Rooms available" : `${v.beds} Bedroom${v.beds > 1 ? "s" : ""} / ${v.baths} Bath`}\n💰 $${v.price.toLocaleString()}/${v.type === "rooms" ? "room/month" : "month"}\n🔌 Utilities: ${v.utilities}\n🚗 Parking: ${v.parking || "None available"}\n\n${v.notes}\n\nTo schedule a viewing, please reply to this email.\n\nAltaray Property Services\naltaraymanagement@gmail.com`,
    };
  }

  function copyListingText(v) {
    const txt = `🏠 ${v.address} — ${v.unit}\n📅 Available ${v.available}\n${v.type === "rooms" ? "🛏 Rooms available (shared house)" : `🛏 ${v.beds} Bed / ${v.baths} Bath`}\n💰 $${v.price.toLocaleString()}${v.type === "rooms" ? "/room" : ""}/month — ${v.utilities}\n🚗 Parking: ${v.parking || "Not available"}\n\n${v.notes}\n\n📧 altaraymanagement@gmail.com`;
    navigator.clipboard.writeText(txt).catch(() => {});
  }

  const VacancyCard = ({ v }) => {
    const monthColor = v.available.includes("March") ? "#f59e0b" : v.available.includes("April") ? "#818cf8" : "#34d399";
    return (
      <div style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 14, overflow: "hidden" }}>
        <div style={{ background: "#070a10", padding: "14px 18px", borderBottom: "1px solid #161d2a" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9" }}>{v.address}</div>
              <div style={{ fontSize: 12, color: "#e2e8f0", marginTop: 2 }}>{v.unit}</div>
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#f6c90e", fontFamily: "'DM Mono',monospace" }}>
              ${v.price.toLocaleString()}<span style={{ fontSize: 11, color: "#e2e8f0", fontWeight: 400 }}>{v.type === "rooms" ? "/room" : "/mo"}</span>
            </div>
          </div>
        </div>
        <div style={{ padding: "14px 18px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0a0e16", border: `1px solid ${monthColor}33`, borderRadius: 20, padding: "4px 10px", marginBottom: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: monthColor }} />
            <span style={{ fontSize: 11, color: monthColor, fontFamily: "'DM Mono',monospace" }}>Available {v.available}</span>
          </div>
          {v.tag && (
            <div style={{ display: "inline-flex", marginLeft: 8, background: "#7c3aed22", border: "1px solid #7c3aed44", borderRadius: 20, padding: "4px 10px", marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: "#a78bfa", fontFamily: "'DM Mono',monospace" }}>⭐ {v.tag}</span>
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
            {[["🛏", v.type === "rooms" ? "Rooms (shared)" : `${v.beds} Bed / ${v.baths} Bath`], ["🔌", v.utilities], ["🚗", v.parking || "No parking"], ["📋", v.type === "apartment" ? "Apartment" : v.type === "house" ? "Whole House" : "Student Rooms"]].map(([icon, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 13 }}>{icon}</span>
                <span style={{ fontSize: 12, color: "#e2e8f0" }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#ffffff", lineHeight: 1.5, marginBottom: 12, fontStyle: "italic" }}>{v.notes}</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => copyListingText(v)} style={{ flex: 1, padding: "7px 0", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 8, color: "#e2e8f0", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>📋 COPY</button>
            <button onClick={() => { const d = generateListingEmail(v); setEmailDraft({ to: "", subject: d.subject, body: d.body }); }} style={{ flex: 1, padding: "7px 0", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 8, color: "#e2e8f0", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>✉ EMAIL</button>
            {v.driveFolder && <button onClick={() => window.open(v.driveFolder, "_blank")} style={{ flex: 1, padding: "7px 0", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 8, color: "#e2e8f0", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>📁 PHOTOS</button>}
            <button onClick={() => generateListingPDF(v)} style={{ flex: 1, padding: "7px 0", background: "#ef444420", border: "1px solid #ef444440", borderRadius: 8, color: "#f87171", fontSize: 11, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>↓ PDF</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
        <div>
          <div style={{ fontSize: 24, fontFamily: "'Playfair Display',serif", color: "#f6c90e" }}>Available Units</div>
          <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>{vacancies.length} units · ${totalRevenuePotential.toLocaleString()}/mo potential revenue</div>
        </div>
        <button onClick={() => generateAllListingsPDF(vacancies)} style={{ padding: "9px 18px", background: "#f6c90e", border: "none", borderRadius: 8, color: "#000", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer", fontWeight: 700 }}>↓ ALL LISTINGS PDF</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
        {[
          ["MARCH AVAIL.", byMonth["March 1, 2026"].length, "#f59e0b", "$" + byMonth["March 1, 2026"].reduce((s,v)=>s+v.price,0).toLocaleString()],
          ["APRIL AVAIL.", byMonth["April 1, 2026"].length, "#818cf8", "$" + byMonth["April 1, 2026"].reduce((s,v)=>s+v.price,0).toLocaleString()],
          ["MAY AVAIL.",   byMonth["May 1, 2026"].length,   "#34d399", "$" + byMonth["May 1, 2026"].reduce((s,v)=>s+v.price,0).toLocaleString()],
          ["TOTAL UNITS",  vacancies.length, "#f6c90e", "$" + totalRevenuePotential.toLocaleString() + "/mo"],
        ].map(([label, count, color, sub]) => (
          <div key={label} style={{ background: "#0d1117", border: "1px solid #161d2a", borderRadius: 12, padding: "14px 18px" }}>
            <div style={{ fontSize: 10, color: "#ffffff", fontFamily: "'DM Mono',monospace", letterSpacing: 2, marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color, fontFamily: "'DM Mono',monospace" }}>{count}</div>
            <div style={{ fontSize: 11, color: "#e2e8f0", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {[["all","All Units"],["march","🟡 March"],["april","🟣 April"],["may","🟢 May"],["apartment","Apartments"],["rooms","Rooms / House"]].map(([id, label]) => (
          <button key={id} onClick={() => setVacancyFilter(id)} style={{ padding: "6px 16px", borderRadius: 20, border: "1px solid #161d2a", background: vacancyFilter === id ? "#f6c90e" : "#0d1117", color: vacancyFilter === id ? "#000" : "#6b7280", fontSize: 12, fontFamily: "'DM Mono',monospace", cursor: "pointer" }}>{label}</button>
        ))}
      </div>

      {vacancyFilter === "all" ? (
        Object.entries(byMonth).map(([month, units]) => (
          <div key={month} style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ background: "#f6c90e", color: "#000", fontSize: 11, fontFamily: "'DM Mono',monospace", letterSpacing: 2, padding: "4px 12px", borderRadius: 20, fontWeight: 700 }}>{month.toUpperCase()}</div>
              <div style={{ fontSize: 11, color: "#ffffff", fontFamily: "'DM Mono',monospace" }}>{units.length} {units.length === 1 ? "unit" : "units"} · ${units.reduce((s,v)=>s+v.price,0).toLocaleString()}/mo potential</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
              {units.map(v => <VacancyCard key={v.id} v={v} />)}
            </div>
          </div>
        ))
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
          {filtered.map(v => <VacancyCard key={v.id} v={v} />)}
        </div>
      )}
    </div>
  );
}
