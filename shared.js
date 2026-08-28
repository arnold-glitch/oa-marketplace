/* OA Marketplace — shared JS: mock data + nav + utilities */

// ============================================================
// MOCK DATA: 100 director-level+ profiles in BPO/outsourcing
// ============================================================
const FIRST_NAMES = [
  "Maria","Jose","Anna","John","Michael","Sarah","David","Lisa","Robert","Jennifer",
  "Carlos","Patricia","James","Linda","William","Barbara","Richard","Susan","Charles","Jessica",
  "Joseph","Karen","Thomas","Nancy","Christopher","Betty","Daniel","Helen","Matthew","Sandra",
  "Anthony","Donna","Mark","Carol","Donald","Ruth","Steven","Sharon","Paul","Michelle",
  "Andrew","Laura","Kenneth","Emma","Joshua","Olivia","Kevin","Sophia","Brian","Ava",
  "Priya","Rajesh","Ananya","Arjun","Kavya","Vijay","Lakshmi","Suresh","Meera","Anil",
  "Wei","Mei","Hiroshi","Yuki","Min","Park","Liam","Noah","Cooper","Charlotte",
  "Aiden","Aubrey","Ramon","Cristina","Felipe","Isabela","Diego","Lucia","Ricardo","Camila",
  "Akari","Ren","Ling","Chen","Tariq","Aisha","Omar","Layla","Fatima","Yusuf",
  "Catherine","George","Margaret","Eleanor","Henry","Alice","Edward","Beatrice","Frank","Grace"
];
const LAST_NAMES = [
  "Santos","Reyes","Cruz","Garcia","Mendoza","Bautista","Ocampo","Aquino","Torres","Castillo",
  "Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Wilson","Anderson","Taylor",
  "Patel","Sharma","Singh","Kumar","Gupta","Reddy","Rao","Mehta","Iyer","Nair",
  "Wong","Chen","Zhang","Liu","Tan","Lim","Lee","Kim","Park","Choi",
  "Khan","Ahmed","Hossain","Ali","Hassan","Karim","Rahman","Bibi","Iqbal","Aziz",
  "Costa","Silva","Oliveira","Souza","Pereira","Ferreira","Lopez","Hernandez","Martinez","Diaz"
];
const ROLES = [
  "VP of Operations","Chief Operating Officer","Director of Customer Experience","Head of Outsourcing",
  "Director of Workforce Management","SVP Customer Success","Chief People Officer","Director of CX",
  "Head of Offshore Delivery","VP of Customer Support","Director of Global Sourcing","COO",
  "VP of Talent Acquisition","Director of Vendor Management","SVP Operations","Chief Customer Officer",
  "Head of BPO Strategy","Director of Service Delivery","VP of Contact Center Operations",
  "Director of Operations Excellence","CIO","CTO","CFO","Director of Procurement","VP of Shared Services",
  "Head of HR Operations","Director of Quality Assurance","VP of Engineering","Director of Sales Operations",
  "Head of Customer Experience","SVP Global Delivery","Director of Process Excellence","VP of Finance Operations"
];
const COMPANIES = [
  "Concentrix","Teleperformance","TaskUs","Sitel Group","Sutherland","Genpact","Wipro BPS",
  "Infosys BPM","Tata Business Services","Accenture Operations","IBM Global Services","Cognizant BPS",
  "Capgemini Business Services","HGS","Alorica","TTEC","TDCX","Acquire BPO","Inspiro","ePerformax",
  "iQor","Conduent","Foundever","HCL Technologies","Tech Mahindra Business Services","WNS Global",
  "Firstsource Solutions","ResultsCX","Webhelp","Majorel","Transcom","Atento","CGS",
  "Startek","Hinduja Global Solutions","Sykes","ResultsCx","Movate","SupportNinja","Cloudstaff",
  "Outsourced.ph","Connext Global","Booth & Partners","Boomering","Helios Outsourcing","Six Eleven Global",
  "Concentrix Philippines","Manulife BPO","JPMorgan Chase Operations","Cisco Operations"
];
const LOCATIONS = [
  "Makati, Philippines","Bonifacio Global City, Philippines","Quezon City, Philippines","Cebu, Philippines",
  "Davao, Philippines","Clark, Philippines","Mumbai, India","Bangalore, India","Hyderabad, India",
  "Chennai, India","Delhi, India","Pune, India","Singapore","Kuala Lumpur, Malaysia","Jakarta, Indonesia",
  "Ho Chi Minh City, Vietnam","Bangkok, Thailand","Manila, Philippines","Iloilo, Philippines","Bacolod, Philippines",
  "New York, USA","Austin, USA","London, UK","Dublin, Ireland","Toronto, Canada","Sydney, Australia",
  "Sao Paulo, Brazil","Mexico City, Mexico","Bogota, Colombia","Cairo, Egypt"
];
const BIOS = [
  "20+ years scaling global delivery centers across APAC. Currently focused on AI-driven CX transformation.",
  "Built and grew offshore teams of 5000+. Always looking for tools to improve agent productivity.",
  "Specializes in vendor management and BPO procurement. Open to tech that simplifies vendor onboarding.",
  "Leads workforce planning and forecasting. Keen on WFM and scheduling automation.",
  "Drives customer experience strategy across 12 markets. Interested in voice AI and quality monitoring.",
  "Operations leader managing 3000+ FTEs across PH and India. Looking at agent assist solutions.",
  "Heads talent acquisition for high-volume BPO hiring. Evaluating AI-powered screening tools.",
  "Built proprietary QA frameworks for 8 Fortune 100 clients. Interested in conversation intelligence.",
  "Passionate about employee engagement in distributed teams. Looking for HR tech and culture tools.",
  "Manages procurement for a $200M global outsourcing portfolio. Evaluates BPO providers regularly.",
  "Leads digital transformation initiatives across the operations org. Interested in automation tools.",
  "Owns the P&L for 4 offshore delivery sites. Always evaluating productivity and analytics platforms."
];
const TAGS_POOL = [
  "Decision Maker","Budget Holder","CX Buyer","Tech Buyer","Procurement","WFM",
  "AI Curious","RPA","Voice AI","Quality","Training","Hiring","Vendor Eval"
];

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pick(arr, n) {
  const copy = arr.slice();
  const out = [];
  for (let i = 0; i < n && copy.length; i++) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return out;
}

// Seeded RNG for reproducible director list
let _seed = 1337;
function srand() {
  _seed = (_seed * 16807) % 2147483647;
  return _seed / 2147483647;
}
function spick(arr) { return arr[Math.floor(srand() * arr.length)]; }
function spickN(arr, n) {
  const copy = arr.slice();
  const out = [];
  for (let i = 0; i < n && copy.length; i++) {
    out.push(copy.splice(Math.floor(srand() * copy.length), 1)[0]);
  }
  return out;
}

function generateDirectors() {
  _seed = 1337;
  const list = [];
  for (let i = 0; i < 100; i++) {
    const first = spick(FIRST_NAMES);
    const last = spick(LAST_NAMES);
    const name = `${first} ${last}`;
    const role = spick(ROLES);
    const company = spick(COMPANIES);
    const location = spick(LOCATIONS);
    const bio = spick(BIOS);
    const tags = spickN(TAGS_POOL, 2 + Math.floor(srand() * 2));
    const exp = 8 + Math.floor(srand() * 20);
    const connections = 500 + Math.floor(srand() * 3000);
    const seniority = role.includes("Chief") || role.startsWith("C") ? "C-Suite"
                    : role.includes("SVP") ? "SVP"
                    : role.includes("VP") ? "VP"
                    : "Director";
    list.push({
      id: i + 1,
      name, role, company, location, bio, tags, exp, connections, seniority,
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=0B2A4A,143759,F97316&textColor=ffffff`,
      lastActive: ["2 days ago","1 week ago","Today","Yesterday","3 days ago","5 days ago"][Math.floor(srand() * 6)]
    });
  }
  return list;
}

const DIRECTORS = generateDirectors();

// ============================================================
// MOCK DATA: ABM/CRM accounts for Part 1
// ============================================================
const ACCOUNTS = [
  { name: "Concentrix", score: 94, executives: 142, employees: 290000, country: "USA", industry: "BPO Services", saved: true },
  { name: "TaskUs", score: 89, executives: 87, employees: 49000, country: "USA", industry: "BPO Services", saved: true },
  { name: "Teleperformance", score: 91, executives: 128, employees: 410000, country: "France", industry: "BPO Services", saved: false },
  { name: "Sutherland", score: 86, executives: 65, employees: 38000, country: "USA", industry: "BPO Services", saved: false },
  { name: "Genpact", score: 88, executives: 110, employees: 125000, country: "USA", industry: "BPO Services", saved: true },
  { name: "TDCX", score: 81, executives: 38, employees: 17000, country: "Singapore", industry: "Customer Experience", saved: false },
  { name: "Inspiro", score: 76, executives: 27, employees: 12000, country: "Philippines", industry: "BPO Services", saved: false },
  { name: "Cloudstaff", score: 79, executives: 21, employees: 7500, country: "Philippines", industry: "Outsourced Staffing", saved: false },
  { name: "TTEC", score: 84, executives: 71, employees: 65000, country: "USA", industry: "Customer Experience", saved: false },
  { name: "WNS Global", score: 80, executives: 54, employees: 56000, country: "India", industry: "BPO Services", saved: false },
  { name: "Webhelp", score: 78, executives: 42, employees: 120000, country: "France", industry: "CX & Tech Support", saved: false },
  { name: "Majorel", score: 77, executives: 39, employees: 82000, country: "Luxembourg", industry: "CX Services", saved: false }
];

// ============================================================
// CART persistence via localStorage
// ============================================================
const CART_KEY = "oa_marketplace_cart_v1";
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}
function setCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  renderCartBadge();
}
function addToCart(item) {
  const cart = getCart();
  cart.push({ ...item, _id: Date.now() + Math.random() });
  setCart(cart);
}
function removeFromCart(id) {
  setCart(getCart().filter(i => i._id !== id));
}
function clearCart() { setCart([]); }
function cartTotal() {
  return getCart().reduce((sum, i) => sum + (i.price || 0), 0);
}
function fmtUSD(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// ============================================================
// Top nav
// ============================================================
function renderTopbar(active) {
  const cart = getCart();
  return `
    <div class="oa-topbar">
      <div class="oa-topbar-inner">
        <a href="index.html" class="oa-logo">
          <span class="oa-logo-dot"></span>
          <span>OA Marketplace</span>
        </a>
        <nav class="oa-nav">
          <a href="index.html" ${active === 'hub' ? 'class="active"' : ''}>ABM Hub</a>
          <a href="marketplace.html" ${active === 'marketplace' ? 'class="active"' : ''}>Publisher Hub</a>
          <a href="meetings.html" ${active === 'meetings' ? 'class="active"' : ''}>OA Connect</a>
          <a href="sales.html" style="color:var(--oa-orange);font-weight:600">↗ Public site / Pricing</a>
        </nav>
        <div class="oa-search">
          <span>🔍</span>
          <span>Search firms, leaders, products…</span>
          <span class="oa-search-kbd">⌘K</span>
        </div>
        <button class="oa-btn" onclick="openCart()" style="position:relative">
          🛒 Cart <span id="oa-cart-badge" class="oa-badge oa-badge-orange" style="margin-left:0.25rem;${cart.length === 0 ? 'display:none' : ''}">${cart.length}</span>
        </button>
        <div class="oa-user-pill" title="arnold@outsourceaccelerator.com">AR</div>
      </div>
    </div>
  `;
}
function renderCartBadge() {
  const el = document.getElementById('oa-cart-badge');
  if (!el) return;
  const n = getCart().length;
  el.textContent = n;
  el.style.display = n === 0 ? 'none' : '';
}

function renderCartDrawer() {
  return `
    <div id="oa-cart-drawer" class="oa-drawer">
      <div class="oa-drawer-head">
        <h3 style="margin:0">Your Cart</h3>
        <button class="oa-btn oa-btn-sm" onclick="closeCart()">✕</button>
      </div>
      <div id="oa-cart-body" class="oa-drawer-body"></div>
      <div class="oa-drawer-foot">
        <div class="oa-flex-between oa-mb-2">
          <span class="oa-text-muted">Subtotal</span>
          <strong id="oa-cart-total">$0</strong>
        </div>
        <button class="oa-btn oa-btn-accent oa-w-full oa-btn-lg" onclick="handleCheckout()">Proceed to Checkout</button>
      </div>
    </div>
  `;
}
function openCart() {
  renderCartContents();
  document.getElementById('oa-cart-drawer').classList.add('open');
}
function closeCart() {
  document.getElementById('oa-cart-drawer').classList.remove('open');
}
function renderCartContents() {
  const cart = getCart();
  const body = document.getElementById('oa-cart-body');
  if (!body) return;
  if (cart.length === 0) {
    body.innerHTML = `<p class="oa-text-muted oa-text-sm">Your cart is empty. Browse the marketplace to add items.</p>`;
  } else {
    body.innerHTML = cart.map(item => `
      <div class="oa-cart-item">
        <div>
          <div style="font-weight:600">${item.title}</div>
          <div class="oa-text-xs oa-text-muted">${item.kind}</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:600">${fmtUSD(item.price)}</div>
          <button class="oa-btn oa-btn-sm" onclick="removeFromCart(${item._id});renderCartContents();renderCartBadge()" style="margin-top:0.25rem">Remove</button>
        </div>
      </div>
    `).join('');
  }
  document.getElementById('oa-cart-total').textContent = fmtUSD(cartTotal());
}
function handleCheckout() {
  const cart = getCart();
  if (cart.length === 0) { alert("Your cart is empty."); return; }
  const summary = cart.map(i => `• ${i.title} — ${fmtUSD(i.price)}`).join("\n");
  const ok = confirm(`Confirm order — ${fmtUSD(cartTotal())}\n\n${summary}\n\n(Prototype: no real payment will be processed.)`);
  if (ok) {
    clearCart();
    renderCartContents();
    closeCart();
    alert("Order placed! In a real flow this would route to Stripe / your billing system, send a confirmation email, and create internal tickets for fulfillment.");
  }
}

// Init on page load
function initShell(activeTab) {
  document.getElementById('oa-topbar-mount').innerHTML = renderTopbar(activeTab);
  const drawerMount = document.getElementById('oa-cart-drawer-mount');
  if (drawerMount) drawerMount.innerHTML = renderCartDrawer();
  renderCartBadge();
}
