const businesses = [
  ["Amrit Departmental Store", "Retail", "amrit-departmental-store.webp"],
  ["Bhawani Marbles", "Marble & Surfaces", "bhawani-marbles.webp"],
  ["Boon Aqua", "Water Solutions", "boon-aqua.webp"],
  ["Falverra", "Lifestyle", "falverra.webp"],
  ["Golden Peak", "Tours & Travel", "golden-peak.webp"],
  ["Hungry Hippies", "Café & Dining", "hungry-hippies.webp"],
  ["Idea Interiors", "Architecture & Interiors", "idea-interiors.webp"],
  ["JioMart Digital", "Electronics", "jiomart-digital.webp"],
  ["Kama Café", "Café & Dining", "kama-cafe.webp"],
  ["Livspace", "Interior Solutions", "livspace.webp"],
  ["Narayan Dental Clinic", "Dental Care", "narayan-dental-clinic.webp"],
  ["NeelDavid's", "Salon & Beauty", "neeldavids.webp"],
  ["NHIDCL", "Office", "nhidcl.webp"],
  ["Odonto Mirror Dental Clinic", "Dental Care", "odonto-mirror-dental-clinic.webp"],
  ["Paints and Coat", "Paint & Finishes", "paints-and-coat.webp"],
  ["Regus HQ", "Flexible Workspace", "regus-hq.webp"],
  ["Tashi Dental Care", "Dental Care", "tashi-dental-clinic.webp"],
  ["The Furnishing Story", "Furnishings", "tfs.webp"],
  ["Velvet & Wine Restaurant", "Restaurant", "velvet-and-wine-restaurant.webp"],
  ["White Lotus", "Aesthetic & Dental Care", "white-lotus-dental-clinic.webp"]
];

const AllBusinessLogos = () => (
  <section className="bg-[#f1ece6] px-4 py-18 text-[#322018] md:px-8 lg:px-10" data-motion-section>
    <div className="mx-auto max-w-[1520px]">
      <div className="mx-auto max-w-[58rem] text-center">
        <span className="text-[0.74rem] font-medium uppercase tracking-[0.2em] text-[#8d4f1d]">Now at Home Square</span>
        <h2 className="mt-6 font-['Kaftan_Serif'] text-[clamp(3.2rem,5.2vw,5.5rem)] leading-[0.93] tracking-[-0.045em]" data-motion-heading>
          Businesses open today.
        </h2>
        <p className="mx-auto mt-7 max-w-[44rem] text-[1.02rem] leading-[1.78] text-[rgba(50,32,24,0.68)]" data-motion-text>
          Discover the growing mix of shopping, interiors, dining, workspaces, lifestyle and professional services operating at Home Square.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 border-l border-t border-[rgba(50,32,24,0.11)] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" data-motion-stagger>
        {businesses.map(([name, category, logo]) => (
          <article className="group flex min-h-[15rem] flex-col border-b border-r border-[rgba(50,32,24,0.11)] bg-white/45 p-5 transition-colors duration-500 hover:bg-white sm:min-h-[17rem] sm:p-7" key={name}>
            <div className="flex flex-1 items-center justify-center rounded-sm bg-white px-3 py-5 shadow-[0_12px_35px_rgba(50,32,24,0.045)]">
              <img alt={`${name} logo`} className="max-h-[6.5rem] w-full max-w-[13rem] object-contain transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" src={`/business-logos/${logo}`} />
            </div>
            <h3 className="mt-5 text-[0.9rem] font-semibold leading-[1.35]">{name}</h3>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.14em] text-[rgba(50,32,24,0.46)]">{category}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AllBusinessLogos;
