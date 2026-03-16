# Products Setup & Admin Panel — Step-by-Step Plan

> **Goal**: Replace hardcoded placeholder products with real VasuDev Chemicals data, seed the 15 chemical products into a database, and build an admin panel for full CRUD (Add / Update / Delete) control.

---

## Phase 1: Database & Backend Setup

### Step 1 — Install Payload CMS + PostgreSQL Dependencies

```bash
cd manufact-clone
npm install payload @payloadcms/db-postgres @payloadcms/richtext-lexical
npm install pg
npm install -D @payloadcms/next
```

> **Alternative (lighter)**: If Payload CMS is too heavy right now, we can use **Prisma + PostgreSQL** directly and build a simple admin UI ourselves.

**Decision needed**: Payload CMS (built-in admin panel) **OR** Prisma + custom admin panel?

---

### Step 2 — Set Up PostgreSQL Database

1. Install PostgreSQL locally (or use a cloud service like Supabase / Neon / Railway)
2. Create a new database:
   ```sql
   CREATE DATABASE vasudev_chemicals;
   ```
3. Add connection string to `.env.local`:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/vasudev_chemicals
   PAYLOAD_SECRET=your-secret-key-here
   ```

---

### Step 3 — Define the Product Schema / Collection

Create the Products table matching the model from `data/DATA_MODELS.md`:

| Field | Type | Required | Notes |
|---|---|---|---|
| id | Auto PK | Yes | Auto-increment |
| name | String(200) | Yes | e.g., "Sodium Sulphate" |
| slug | String(200) | Yes | Unique, URL-friendly |
| sku | String(50) | No | e.g., VCP-IND-0001 |
| formula | String(200) | No | e.g., Na₂SO₄ |
| cas_number | String(30) | No | e.g., "7757-82-6" |
| category | Enum | Yes | `industrial`, `specialty`, `pharmaceutical` |
| subcategory | String(100) | No | e.g., Surfactants |
| description | Text | Yes | Product description |
| supplier | String(200) | No | Primary supplier |
| origin_country | String(100) | No | Country of origin |
| price | Decimal(12,2) | No | 0 = Price on Request |
| currency | String(10) | No | Default: USD |
| price_unit | String(30) | No | e.g., /kg, /MT |
| unit_of_measure | String(20) | No | kg, L, MT |
| image_url | Text | No | Product image URL |
| status | Enum | Yes | `active`, `inactive`, `discontinued` |
| applications | JSON | No | Array of application tags |
| industries | JSON | No | Array of target industries |
| grades | JSON | No | Array of grades |
| packaging | JSON | No | Array of packaging options |
| tags | JSON | No | Searchable tags |
| specs | JSON | No | Key-value specs |
| is_active | Boolean | Yes | Default: true |
| created_at | Timestamp | Yes | Auto |
| updated_at | Timestamp | Yes | Auto |

---

## Phase 2: Seed the 15 Chemical Products

### Step 4 — Create the Seed Data File

Create `src/seed/products.ts` with all 15 products:

```
 #  | Name                              | CAS          | Category    | SKU
----|-----------------------------------|--------------|-------------|-------------
 1  | Sodium Sulphate                   | 7757-82-6    | Industrial  | VCP-IND-0001
 2  | Calcium Carbonate                 | 471-34-1     | Industrial  | VCP-IND-0002
 3  | Caustic Soda Flakes               | 1310-73-2    | Industrial  | VCP-IND-0003
 4  | Soda Ash                          | 497-19-8     | Industrial  | VCP-IND-0004
 5  | Magnesium Oxide                   | 1309-48-4    | Industrial  | VCP-IND-0005
 6  | Sodium Bicarbonate                | 144-55-8     | Industrial  | VCP-IND-0006
 7  | LABSA                             | 27176-87-0   | Industrial  | VCP-IND-0007
 8  | Hydrated Lime                     | 1305-62-0    | Industrial  | VCP-IND-0008
 9  | MEA Triazine 78% H2S Scavenger   | 4719-04-4    | Industrial  | VCP-IND-0009
10  | Zinc Oxide                        | 1314-13-2    | Specialty   | VCP-SPC-0001
11  | Titanium Dioxide                  | 13463-67-7   | Specialty   | VCP-SPC-0002
12  | Citric Acid                       | 77-92-9      | Specialty   | VCP-SPC-0003
13  | Stearic Acid                      | 57-11-4      | Specialty   | VCP-SPC-0004
14  | Sodium Tripolyphosphate           | 7758-29-4    | Specialty   | VCP-SPC-0005
15  | Barium Sulphate                   | 7727-43-7    | Specialty   | VCP-SPC-0006
```

Each product entry will include: name, slug, sku, formula, cas_number, category, description, applications, industries, grades, packaging, specs, image_url, and status.

---

### Step 5 — Write & Run the Seed Script

Create `src/seed/index.ts`:

```
1. Connect to the database
2. Clear existing products (optional, with --force flag)
3. Loop through the 15 products array
4. For each product:
   a. Generate slug from name (e.g., "Sodium Sulphate" → "sodium-sulphate")
   b. Insert into products table
   c. Log success: "✓ Seeded: Sodium Sulphate (VCP-IND-0001)"
5. Log summary: "✓ 15 products seeded successfully"
6. Disconnect from database
```

Add a script to `package.json`:
```json
{
  "scripts": {
    "seed": "ts-node --project tsconfig.json src/seed/index.ts",
    "seed:fresh": "ts-node --project tsconfig.json src/seed/index.ts --fresh"
  }
}
```

Run: `npm run seed`

---

### Step 6 — Replace Hardcoded Products on Website

**Files to update:**
- `src/app/product/page.tsx` — Replace placeholder array with DB fetch
- `src/components/home/ProductsSection.tsx` — Replace placeholder array with DB fetch

```
Before: const products = [ { title: "Aluminum gear housing", ... } ]
After:   const products = await fetchProducts()  // from database
```

Create `src/lib/products.ts` with data-fetching functions:
- `getAllProducts()` — Fetch all active products
- `getProductBySlug(slug)` — Fetch single product
- `getProductsByCategory(category)` — Filter by category
- `getFeaturedProducts(limit)` — For homepage section

---

## Phase 3: Admin Panel for Product Management

### Step 7 — Set Up Admin Authentication

1. Create an `admins` table (or Payload CMS users):
   - `id`, `email`, `password_hash`, `name`, `role`, `created_at`
2. Create the first admin user (seed):
   - Email: `admin@vasudevchemicals.com`
   - Role: `super_admin`
3. Set up auth middleware to protect `/admin` routes
4. Build login page at `/admin/login`

---

### Step 8 — Build Admin Dashboard Layout

Create admin pages under `src/app/admin/`:

```
src/app/admin/
  layout.tsx          ← Admin layout (sidebar + header)
  page.tsx            ← Dashboard home (product count, recent activity)
  login/
    page.tsx          ← Login form
  products/
    page.tsx          ← Product list table (all 15 products)
    new/
      page.tsx        ← Add new product form
    [id]/
      edit/
        page.tsx      ← Edit existing product form
```

---

### Step 9 — Product List View (Admin)

**Route**: `/admin/products`

Features:
- Table with columns: Image | Name | SKU | Category | Status | Actions
- Search bar (filter by name, SKU, CAS number)
- Filter dropdown (category: All / Industrial / Specialty / Pharmaceutical)
- Status badge (Active = green, Inactive = yellow, Discontinued = red)
- Actions column: Edit button | Delete button
- "Add New Product" button at the top
- Pagination (if products grow beyond 15)

---

### Step 10 — Add New Product Form (Admin)

**Route**: `/admin/products/new`

Form sections:
1. **Basic Info**: Name, SKU, Formula, CAS Number, Category, Subcategory
2. **Description**: Rich text or textarea for product description
3. **Pricing**: Price, Currency, Price Unit, Unit of Measure
4. **Details**: Supplier, Origin Country, Safety Class
5. **Tags & Arrays**: Applications, Industries, Grades, Packaging (multi-input)
6. **Image**: Image URL input (or file upload to cloud storage)
7. **Status**: Active / Inactive / Discontinued toggle
8. **Documents**: Add COA / TDS / MSDS links (doc_type, file_url, file_name)

Validation:
- Name → required
- Category → required
- Description → required
- Slug → auto-generated from name, editable

On submit → `POST /api/products` → Insert into DB → Redirect to product list

---

### Step 11 — Edit Product Form (Admin)

**Route**: `/admin/products/[id]/edit`

- Same form as "Add New" but pre-filled with existing data
- On submit → `PUT /api/products/[id]` → Update in DB → Redirect to product list
- Show "Last updated: <date>" at the top

---

### Step 12 — Delete Product (Admin)

- Delete button on product list triggers a confirmation modal
- "Are you sure you want to delete **Sodium Sulphate** (VCP-IND-0001)?"
- On confirm → `DELETE /api/products/[id]` → Soft delete (set status = discontinued) OR hard delete
- Recommended: **Soft delete** (set `is_active = false`, `status = 'discontinued'`)

---

## Phase 4: API Routes

### Step 13 — Build Product API Endpoints

Create under `src/app/api/products/`:

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/products` | List all products (public, with filters) | No |
| GET | `/api/products/[slug]` | Get single product by slug | No |
| POST | `/api/products` | Create new product | Admin only |
| PUT | `/api/products/[id]` | Update product | Admin only |
| DELETE | `/api/products/[id]` | Delete product | Admin only |

Query params for GET `/api/products`:
- `?category=industrial` — Filter by category
- `?status=active` — Filter by status
- `?search=sodium` — Search by name/CAS/SKU
- `?limit=10&offset=0` — Pagination

---

## Phase 5: Connect Frontend to Database

### Step 14 — Update Product Pages

1. **Product listing page** (`/product`):
   - Fetch products from API/DB instead of hardcoded array
   - Add filter tabs: All | Industrial | Specialty | Pharmaceutical
   - Show chemical-specific fields: formula, CAS number, category
   - "Request Quote" button per product

2. **Homepage products section** (`ProductsSection.tsx`):
   - Fetch top 4-6 featured products from DB
   - Show chemical product cards with real data

3. **Individual product page** (`/product/[slug]`):
   - Create dynamic product detail page
   - Show: name, formula, CAS, description, specs, applications, packaging
   - "Request Quote" CTA

---

### Step 15 — Test Everything

- [ ] All 15 products visible on `/product` page
- [ ] Category filters work (Industrial / Specialty)
- [ ] Individual product pages load at `/product/[slug]`
- [ ] Homepage shows featured products from DB
- [ ] Admin login works
- [ ] Admin can view all products in table
- [ ] Admin can add a new product (becomes product #16)
- [ ] Admin can edit an existing product (e.g., update description)
- [ ] Admin can delete/deactivate a product
- [ ] Request Quote button pre-fills the contact form
- [ ] API endpoints return correct data

---

## Execution Order Summary

| Order | Step | What | Status |
|-------|------|------|--------|
| 1 | Step 1 | Install dependencies (DB + CMS/ORM) | ⬜ TODO |
| 2 | Step 2 | Set up PostgreSQL database | ⬜ TODO |
| 3 | Step 3 | Define product schema/collection | ⬜ TODO |
| 4 | Step 4 | Create seed data file (15 products) | ⬜ TODO |
| 5 | Step 5 | Write & run seed script | ⬜ TODO |
| 6 | Step 13 | Build product API routes | ⬜ TODO |
| 7 | Step 6 | Replace hardcoded products with DB fetch | ⬜ TODO |
| 8 | Step 7 | Set up admin authentication | ⬜ TODO |
| 9 | Step 8 | Build admin dashboard layout | ⬜ TODO |
| 10 | Step 9 | Product list view (admin) | ⬜ TODO |
| 11 | Step 10 | Add new product form (admin) | ⬜ TODO |
| 12 | Step 11 | Edit product form (admin) | ⬜ TODO |
| 13 | Step 12 | Delete product (admin) | ⬜ TODO |
| 14 | Step 14 | Update frontend product pages | ⬜ TODO |
| 15 | Step 15 | Test everything end-to-end | ⬜ TODO |

---

## Tech Stack Decision (Before We Start)

| Option | Admin Panel | ORM | Pros | Cons |
|--------|------------|-----|------|------|
| **A) Payload CMS** | Built-in (auto-generated) | Built-in | Admin panel for free, media uploads, auth included | Heavier, opinionated |
| **B) Prisma + Custom Admin** | Build ourselves | Prisma | Full control, lighter | More work to build admin UI |
| **C) Prisma + NextAuth + shadcn/ui** | Build with shadcn components | Prisma | Beautiful UI, flexible, popular stack | More setup time |

**Recommended**: **Option C** (Prisma + NextAuth + shadcn/ui) — gives full control, clean UI, and is the most common Next.js stack.

---

## Notes

- The current product page has **placeholder manufacturing products** (Aluminum gear housing, Plastic enclosures, etc.) — these will be fully replaced with the 15 real chemical products.
- The 15 products are a subset of the 28 listed in `data/DATA_MODELS.md`. We start with 15 and can add more via admin panel later.
- All product images need to be sourced/uploaded — currently using placeholder URLs.
- The admin panel will be at `/admin` — completely separate from the public-facing website.
