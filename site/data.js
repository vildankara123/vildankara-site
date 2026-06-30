/* ============================================================
   Content — Vildan Kara Kayacan · Executive Advisory.
   Multi-page site. Bilingual (EN / TR).
   Voice: third person, professional / advertising register.
   The SUBJECT is Vildan Kara Kayacan (named or implied) — not a
   first person ("I/me"), and not a fictional company structure.
   Region terminology: EMEA & MENA.
   Exposed as window.SITE.
   ============================================================ */
window.SITE = {
  img: {
    portrait:   "assets/img/vildan-portrait.jpg",
    about:      "assets/img/vildan-about.png",
    presenting: "assets/img/vildan-presenting.jpg",
    strategy:   "assets/img/vildan-strategy.jpg",
    boardroom:  "assets/img/hero-boardroom.png",
    road:       "assets/img/hero-city-night.png",
    skyline:    "assets/img/hero-city-office.png",
  },

  /* page filenames used by the shared nav/footer */
  pages: { home: "index.html", services: "index.html#services", work: "index.html#work", projects: "projects.html", insights: "insights.html", about: "about.html", contact: "index.html#contact" },

  /* Service-area imagery (shared EN/TR), indexed to the six services.
     Real corporate/technology photography (Unsplash CDN), brand-duotoned
     in CSS. SUBSTITUTION: replace with owned/licensed imagery before launch. */
  serviceImages: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=70",  /* org change / people */
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=70",  /* SAP / data center */
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=70",  /* AI / network */
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=70",  /* managed services / dashboards */
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=70",  /* PMO / planning */
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=70",  /* bid / handshake */
  ],

  /* Project header imagery (shared), indexed to the six projects.
     SUBSTITUTION: replace with owned/product imagery before launch. */
  projectImages: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",  /* SAP Activa — analytics dashboard */
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70",  /* Segmentil — charts */
    "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=70",  /* Yazbix — writing / journal */
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=70",  /* Social Media Studio — social */
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=70",  /* English for Children — learning */
    "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=900&q=70",  /* In progress — abstract lab */
  ],

  /* Insight (article) header imagery — indexed to the six articles.
     Reuses verified Unsplash IDs. SUBSTITUTION: replace before launch. */
  insightImages: [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70",  /* SAP fail — data center */
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=70",  /* AI — network */
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=70",  /* staying ahead — planning */
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=70",  /* vendor — handshake */
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",  /* managed services — dashboards */
    "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=900&q=70",  /* trend — abstract */
  ],

  /* Non-personal corporate imagery for the About page + CTA band. */
  aux: {
    aboutHero: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1100&q=70",  /* abstract glass */
    aboutBio:  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=70",  /* strategy / data */
    cta:       "assets/img/hero-boardroom.png",  /* wide boardroom */
  },

  /* Shared 16-country footprint (EMEA & MENA). name/projects per language. */
  footprint: [
    { code: "tr", lat: 39.9, lng: 32.8, name_en: "Türkiye", name_tr: "Türkiye", projects_en: ["Turkish Airlines — OCM Lead (150+ people)", "Eureko Sigorta — First SAP HANA FSI reference", "Arçelik — MDM Implementation", "Yapı Kredi Bank — First banking ERP programme", "NTT DATA — EMEA & MENA Service Management", "Mercedes-Benz Turkey — Shared Service Operation"], projects_tr: ["Türk Hava Yolları — OCM Lideri (150+ kişi)", "Eureko Sigorta — İlk SAP HANA FSI referansı", "Arçelik — MDM Implementasyonu", "Yapı Kredi Bankası — İlk bankacılık ERP programı", "NTT DATA — EMEA & MENA Servis Yönetimi", "Mercedes-Benz Türk — Shared Service Operasyonu"] },
    { code: "de", lat: 51.2, lng: 10.4, name_en: "Germany", name_tr: "Almanya", projects_en: ["Metro Group AG — Düsseldorf FCC (SAP FI)", "Schnellecke Logistics — Global roll-out (onsite)", "Air Berlin — Business Transformation (onsite)", "Yaşar Holding — Germany Localization"], projects_tr: ["Metro Group AG — Düsseldorf FCC (SAP FI Danışmanı)", "Schnellecke Logistics — Global roll-out (onsite)", "Air Berlin — Business Transformation (onsite)", "Yaşar Holding — Almanya Lokalizasyon"] },
    { code: "eg", lat: 26.8, lng: 30.8, name_en: "Egypt", name_tr: "Mısır", projects_en: ["Metro Group — SAP Roll-out", "Financial process implementation & go-live"], projects_tr: ["Metro Group — SAP Roll-out", "Finansal süreç implementasyonu ve go-live"] },
    { code: "kz", lat: 48.0, lng: 66.9, name_en: "Kazakhstan", name_tr: "Kazakistan", projects_en: ["Metro Group — SAP Roll-out", "International SAP FI implementation"], projects_tr: ["Metro Group — SAP Roll-out", "Uluslararası SAP FI implementasyonu"] },
    { code: "sk", lat: 48.7, lng: 19.7, name_en: "Slovakia", name_tr: "Slovakya", projects_en: ["Metro Group — SAP Roll-out", "Local GAAP & IFRS parallel reporting"], projects_tr: ["Metro Group — SAP Roll-out", "Yerel GAAP ve IFRS paralel raporlama"] },
    { code: "be", lat: 50.5, lng: 4.4, name_en: "Belgium", name_tr: "Belçika", projects_en: ["Metro Group — SAP Roll-out", "Multi-company-code SAP FI setup"], projects_tr: ["Metro Group — SAP Roll-out", "Çok şirket kodlu SAP FI kurulumu"] },
    { code: "es", lat: 40.4, lng: -3.7, name_en: "Spain", name_tr: "İspanya", projects_en: ["Metro Group — SAP Roll-out", "User acceptance testing & go-live"], projects_tr: ["Metro Group — SAP Roll-out", "Kullanıcı kabul testi ve go-live"] },
    { code: "bg", lat: 42.7, lng: 25.5, name_en: "Bulgaria", name_tr: "Bulgaristan", projects_en: ["Metro Group — SAP Roll-out", "SAP FI functional support & training"], projects_tr: ["Metro Group — SAP Roll-out", "SAP FI fonksiyonel destek ve eğitim"] },
    { code: "pk", lat: 30.4, lng: 69.3, name_en: "Pakistan", name_tr: "Pakistan", projects_en: ["Metro Group — SAP Roll-out", "International SAP implementation & training"], projects_tr: ["Metro Group — SAP Roll-out", "Uluslararası SAP implementasyonu ve eğitim"] },
    { code: "at", lat: 47.5, lng: 14.5, name_en: "Austria", name_tr: "Avusturya", projects_en: ["NTT DATA — EMEA Service Coordination", "Integration with European delivery centers"], projects_tr: ["NTT DATA — EMEA Servis Koordinasyonu", "Avrupa teslimat merkezleriyle entegrasyon"] },
    { code: "pl", lat: 51.9, lng: 19.1, name_en: "Poland", name_tr: "Polonya", projects_en: ["NTT DATA — EMEA Service Structure", "Delivery center development & integration"], projects_tr: ["NTT DATA — EMEA Servis Yapılanması", "Teslimat merkezi geliştirme ve entegrasyon"] },
    { code: "cz", lat: 49.8, lng: 15.5, name_en: "Czechia", name_tr: "Çekya", projects_en: ["NTT DATA — EMEA Delivery Coordination", "Local adaptation of central service model"], projects_tr: ["NTT DATA — EMEA Delivery Koordinasyonu", "Merkezi servis modelinin yerel adaptasyonu"] },
    { code: "ro", lat: 45.9, lng: 24.9, name_en: "Romania", name_tr: "Romanya", projects_en: ["NTT DATA — EMEA Delivery Expansion", "New CoE setup support"], projects_tr: ["NTT DATA — EMEA Teslimat Genişletme", "Yeni CoE kurulumu desteği"] },
    { code: "ua", lat: 48.4, lng: 31.2, name_en: "Ukraine", name_tr: "Ukrayna", projects_en: ["NTT DATA — Delivery Center Integration", "Within EMEA SAP service organization"], projects_tr: ["NTT DATA — Teslimat Merkezi Entegrasyonu", "EMEA SAP servis organizasyonu kapsamında"] },
    { code: "ae", lat: 24.5, lng: 54.4, name_en: "UAE", name_tr: "BAE", projects_en: ["NTT DATA — MENA Region Service Management", "Middle East & Africa SAP managed services"], projects_tr: ["NTT DATA — MENA Bölgesi Servis Yönetimi", "Orta Doğu & Afrika SAP yönetilen hizmetler"] },
    { code: "sa", lat: 24.7, lng: 46.7, name_en: "Saudi Arabia", name_tr: "Suudi Arabistan", projects_en: ["NTT DATA — MENA Region Service Expansion", "SAP managed services strategy & delivery"], projects_tr: ["NTT DATA — MENA Bölgesi Servis Genişlemesi", "SAP yönetilen hizmetler stratejisi ve teslimat"] },
  ],

  /* Detail-page content, keyed by language then item index.
     NOTE: article bodies are professional drafts — replace with final copy. */
  detail: {
    en: {
      labels: { back: "All insights", backProjects: "All projects", byline: "Vildan Kara Kayacan", features: "Highlights", visit: "Visit project", status: "Status", related: "Continue reading", talk: "Discuss this" },
      insightBodies: [
        ["Most S/4HANA programmes are framed as technology migrations. That framing is the first mistake. The platform change is real, but it is rarely what determines success — the operating model, the governance and the people around it are.", "The programmes that endure share a pattern: a staged, low-risk roadmap; a target operating model defined before the build; and change management treated as a workstream, not an afterthought. The ones that fail almost always skipped one of the three.", "Before committing a budget, three questions are worth answering honestly. Is the scope staged so value arrives early? Is there a single owner for the operating model? And is the organisation genuinely ready to work differently on go-live day? If any answer is unclear, that is where the work starts."],
        ["Artificial intelligence is usually introduced as a tool. The organisations that get real value treat it as an operating-model question instead — where decisions are made, how work flows, who is accountable.", "Pilots are easy; production is hard. The gap is rarely the model. It is governance, data ownership, and the human change required for people to trust and adopt a new way of working.", "A pragmatic path: pick a process where the value is measurable, govern the data and the decisions explicitly, and design adoption as carefully as the technology. AI that nobody uses is not a capability — it is a cost."],
        ["Change is accelerating, and the distance between leaders and followers is widening. For CIOs, the risk is not a single technology — it is being structurally unprepared when several arrive at once.", "Three areas reward early preparation: a data foundation that AI can actually use; an operating model that can absorb change without re-organising every year; and a governance posture that says yes to experiments without losing control.", "None of these is a project. They are postures — and the time to adopt them is before the pressure, not during it."],
        ["Vendor selection is where a transformation's risk profile is quietly set. The wrong choice is rarely obvious on day one; it surfaces a year later, in missed milestones and renegotiations.", "The mistakes repeat: scoring on price before fit; letting the integrator design the RFP; confusing a good demo with delivery capability; and negotiating terms that protect the vendor more than the client.", "An evaluation run on the client's side of the table — clear requirements, weighted criteria, reference checks that go beyond the slide — changes the outcome. Independence here is not a nicety; it is risk management."],
        ["Managed services are often bought as a cost line and managed as one. That is how value leaks. ITIL is not paperwork — it is the structure that turns a service into a predictable, improvable asset.", "Value comes from the model: the right SLA/KPI design, clear accountability, and a continual-improvement loop that is actually run. Without it, a contract becomes a ticket queue.", "The question to ask of any managed-services arrangement is simple: is it getting better every quarter, or just getting through? The answer is usually visible in the governance, not the headcount."],
        ["Every season brings a new technology that demands attention. Some reshape the enterprise; most do not. The discipline is telling them apart before committing budget and credibility.", "A simple test helps: does it change the economics of something the business already does at scale, or only add a capability nobody was asking for? Lasting change tends to move a number that matters.", "Curiosity and discipline are not opposites. Experiment widely, but commit narrowly — and only where the value is real and measurable."],
      ],
      projectBodies: [
        ["SAP Activa brings artificial intelligence to the discipline of SAP programme management. It scores project health, predicts risk, optimises resource allocation and generates status reporting automatically — extending the SAP Activate methodology with a layer of applied AI.", "Built from real delivery experience, it targets the moments where large programmes quietly go off-track: drifting milestones, hidden resource conflicts and status reports that arrive too late to act on."],
        ["Segmentil segments enterprise customer portfolios and predicts behaviour using applied AI — RFM analysis, churn prediction and customer-lifetime-value, packaged as a decision-support tool for sales and customer-success teams.", "The goal is not another dashboard but a clearer next action: which accounts to protect, which to grow, and where attention creates the most value."],
        ["Yazbix is an AI-assisted digital journal — a place to capture thoughts, memories and notes, enriched with speech-to-text, sentiment analysis and smart tagging. It began as a personal experiment in what applied AI can do for everyday memory.", "It is the most personal project in the portfolio, and the one that most directly explores how AI can be quiet, helpful and human."],
        ["Social Media Studio is an AI-assisted content and scheduling platform for small businesses and founders — content suggestions, timing optimisation and lightweight performance analytics in one place.", "It exists to test a simple idea: that applied AI can give a one-person business the leverage of a small team."],
        ["English for Children is an interactive English-vocabulary platform built for young learners — visual cards, spoken pronunciation and gamified repetition on an AI-personalised learning path.", "The design question behind it: how does AI personalise learning without removing the joy of it? The answer shapes every screen."],
        ["A new applied-AI project is currently in development, aimed at a real problem in enterprise transformation. It is early, deliberately so — the right time to share is when it works, not before.", "Details will follow. To hear when it launches, a short note via the contact page is the best way to stay in touch."],
      ],
      projectFeatures: [
        ["Project health scoring", "Risk prediction", "Resource optimisation", "Automated status reporting"],
        ["RFM segmentation", "Churn prediction", "Customer-lifetime-value", "Sales decision support"],
        ["Speech-to-text capture", "Sentiment analysis", "Smart tagging", "Private by design"],
        ["Content suggestions", "Scheduling optimisation", "Performance analytics", "Built for small teams"],
        ["Visual flashcards", "Spoken pronunciation", "Gamified repetition", "AI-personalised path"],
        ["In active development", "Enterprise-transformation focus", "Applied AI", "Launching soon"],
      ],
    },
    tr: {
      labels: { back: "Tüm yazılar", backProjects: "Tüm projeler", byline: "Vildan Kara Kayacan", features: "Öne çıkanlar", visit: "Projeyi gör", status: "Durum", related: "Okumaya devam et", talk: "Bunu konuşalım" },
      insightBodies: [
        ["S/4HANA programlarının çoğu bir teknoloji göçü olarak çerçevelenir. İlk hata budur. Platform değişimi gerçektir ama başarıyı nadiren o belirler — etrafındaki işletme modeli, yönetişim ve insanlar belirler.", "Kalıcı programlar aynı deseni paylaşır: aşamalı, düşük riskli bir yol haritası; inşadan önce tanımlanmış bir hedef işletme modeli; ve sonradan akla gelen değil, bir iş kolu olarak ele alınan değişim yönetimi. Başarısız olanlar neredeyse her zaman bu üçünden birini atlamıştır.", "Bütçe ayrılmadan önce üç soru dürüstçe yanıtlanmalı: Kapsam, değerin erken gelmesini sağlayacak şekilde aşamalı mı? İşletme modelinin tek bir sahibi var mı? Ve kurum, go-live gününde gerçekten farklı çalışmaya hazır mı? Herhangi biri net değilse, iş tam orada başlar."],
        ["Yapay zeka genellikle bir araç olarak tanıtılır. Gerçek değer elde eden kurumlar onu bir işletme modeli sorusu olarak ele alır — kararların nerede verildiği, işin nasıl aktığı, kimin sorumlu olduğu.", "Pilotlar kolaydır; üretim zordur. Aradaki fark nadiren modeldir. Yönetişim, veri sahipliği ve insanların yeni çalışma biçimine güvenip benimsemesi için gereken değişimdir.", "Pragmatik bir yol: değerin ölçülebilir olduğu bir süreç seçin, veriyi ve kararları açıkça yönetin ve benimsemeyi teknoloji kadar dikkatli tasarlayın. Kimsenin kullanmadığı AI bir yetkinlik değil, bir maliyettir."],
        ["Değişim hızlanıyor ve liderlerle takipçiler arasındaki mesafe açılıyor. CIO'lar için risk tek bir teknoloji değil — birkaçı aynı anda geldiğinde yapısal olarak hazırlıksız olmaktır.", "Üç alan erken hazırlığı ödüllendirir: AI'ın gerçekten kullanabileceği bir veri temeli; her yıl yeniden yapılanmadan değişimi soğurabilen bir işletme modeli; ve kontrolü kaybetmeden deneylere evet diyen bir yönetişim duruşu.", "Bunların hiçbiri bir proje değil. Bunlar duruşlardır — ve onları benimseme zamanı baskı altındayken değil, öncesidir."],
        ["Tedarikçi seçimi, bir dönüşümün risk profilinin sessizce belirlendiği yerdir. Yanlış seçim ilk gün nadiren belli olur; bir yıl sonra kaçırılan kilometre taşları ve yeniden müzakerelerle ortaya çıkar.", "Hatalar tekrar eder: uyumdan önce fiyata göre puanlama; RFP'yi entegratöre tasarlatma; iyi bir demoyu teslimat yetkinliğiyle karıştırma; ve müşteriden çok tedarikçiyi koruyan şartlar müzakere etme.", "Masanın müşteri tarafında yürütülen bir değerlendirme — net gereksinimler, ağırlıklı kriterler, slaytın ötesine geçen referans kontrolleri — sonucu değiştirir. Buradaki bağımsızlık bir incelik değil; risk yönetimidir."],
        ["Yönetilen hizmetler çoğu zaman bir maliyet kalemi olarak satın alınır ve öyle yönetilir. Değer böyle sızar. ITIL evrak işi değildir — bir hizmeti öngörülebilir, iyileştirilebilir bir varlığa dönüştüren yapıdır.", "Değer modelden gelir: doğru SLA/KPI tasarımı, net hesap verebilirlik ve gerçekten işletilen bir sürekli iyileştirme döngüsü. Bunlar olmadan bir sözleşme bir talep kuyruğuna döner.", "Herhangi bir yönetilen hizmet düzenlemesine sorulacak soru basittir: her çeyrek daha mı iyi oluyor, yoksa sadece idare mi ediyor? Yanıt genellikle kişi sayısında değil, yönetişimde görünür."],
        ["Her dönem dikkat isteyen yeni bir teknoloji getirir. Bazıları kurumu yeniden şekillendirir; çoğu şekillendirmez. Disiplin, bütçe ve itibar bağlamadan önce ikisini ayırt etmektir.", "Basit bir test yardımcı olur: işletmenin halihazırda ölçekte yaptığı bir şeyin ekonomisini mi değiştiriyor, yoksa kimsenin istemediği bir yetenek mi ekliyor? Kalıcı değişim genellikle önemli bir sayıyı hareket ettirir.", "Merak ve disiplin zıt değildir. Geniş deneyin ama dar bağlanın — ve yalnızca değerin gerçek ve ölçülebilir olduğu yerde."],
      ],
      projectBodies: [
        ["SAP Activa, yapay zekayı SAP program yönetimi disiplinine taşır. Proje sağlığını skorlar, riski tahmin eder, kaynak tahsisini optimize eder ve durum raporlamasını otomatik üretir — SAP Activate metodolojisini uygulamalı bir AI katmanıyla genişletir.", "Gerçek teslimat deneyiminden doğdu ve büyük programların sessizce rayından çıktığı anları hedefler: kayan kilometre taşları, gizli kaynak çatışmaları ve harekete geçmek için çok geç gelen durum raporları."],
        ["Segmentil, kurumsal müşteri portföylerini uygulamalı AI ile segmentler ve davranış tahmini üretir — RFM analizi, churn tahmini ve müşteri yaşam boyu değeri; satış ve müşteri başarı ekipleri için bir karar destek aracı olarak.", "Amaç bir gösterge paneli daha değil, daha net bir sonraki adım: hangi hesapların korunacağı, hangilerinin büyütüleceği ve ilginin en çok değer yarattığı yer."],
        ["Yazbix, yapay zeka destekli bir dijital günlük — düşünceleri, anıları ve notları yakalamak için bir yer; sesten metne, duygu analizi ve akıllı etiketleme ile zenginleştirilmiş. Uygulamalı AI'ın günlük hafıza için ne yapabileceğine dair kişisel bir deney olarak başladı.", "Portföydeki en kişisel proje ve AI'ın sessiz, yardımcı ve insani olabileceğini en doğrudan keşfedeni."],
        ["Sosyal Medya Stüdyosu, küçük işletmeler ve girişimciler için yapay zeka destekli bir içerik ve zamanlama platformudur — içerik önerileri, zamanlama optimizasyonu ve hafif performans analitikleri tek bir yerde.", "Basit bir fikri sınamak için var: uygulamalı AI, tek kişilik bir işletmeye küçük bir ekibin gücünü verebilir."],
        ["Çocuklar için İngilizce, genç öğrenciler için tasarlanmış interaktif bir İngilizce kelime platformudur — görsel kartlar, sesli telaffuz ve AI ile kişiselleştirilmiş bir yolda oyunlaştırılmış tekrar.", "Arkasındaki tasarım sorusu: AI öğrenmeyi, keyfini kaçırmadan nasıl kişiselleştirir? Yanıt her ekranı şekillendiriyor."],
        ["Şu anda geliştirme aşamasında, kurumsal dönüşümdeki gerçek bir problemi hedefleyen yeni bir uygulamalı AI projesi var. Erken aşamada, bilinçli olarak öyle — paylaşmanın doğru zamanı çalıştığında, öncesinde değil.", "Detaylar paylaşılacak. Ne zaman yayınlanacağını duymak için iletişim sayfasından kısa bir not en iyi yol."],
      ],
      projectFeatures: [
        ["Proje sağlık skorlama", "Risk tahmini", "Kaynak optimizasyonu", "Otomatik durum raporlama"],
        ["RFM segmentasyonu", "Churn tahmini", "Müşteri yaşam boyu değeri", "Satış karar desteği"],
        ["Sesten metne yakalama", "Duygu analizi", "Akıllı etiketleme", "Tasarımı gereği gizli"],
        ["İçerik önerileri", "Zamanlama optimizasyonu", "Performans analitiği", "Küçük ekipler için"],
        ["Görsel kartlar", "Sesli telaffuz", "Oyunlaştırılmış tekrar", "AI ile kişiselleştirilmiş yol"],
        ["Aktif geliştirmede", "Kurumsal dönüşüm odağı", "Uygulamalı AI", "Yakında"],
      ],
    },
  },

  en: {
    brand: { name: "Vildan Kara Kayacan", role: "Executive Advisory" },
    nav: [
      { id: "services", label: "Services", href: "index.html#services" },
      { id: "projects", label: "Projects", href: "projects.html" },
      { id: "insights", label: "Insights", href: "insights.html" },
      { id: "about", label: "About", href: "about.html" },
      { id: "contact", label: "Contact", href: "index.html#contact" },
    ],
    cta: "Arrange a consultation",

    hero: {
      eyebrow: "Executive Advisory",
      title: ["SAP. AI. Business Transformation."],
      subline: "Technology changes systems. People change organizations.",
      lede: "Executive advisory for SAP, AI and business transformation; from strategy definition and vendor selection to programme delivery and operating model design, providing independent guidance aligned with your business priorities, strategic objectives and people.",
      meta: ["25+ years", "EMEA & MENA", "People-led change", "SAP × AI"],
      ctaPrimary: "Arrange a consultation",
      ctaSecondary: "See the services",
      panelLabel: "Practice areas",
    },

    landing: {
      eyebrow: "Services",
      hero1: {
        eyebrow: "Executive Advisory",
        headline: ["Strategy.", "Transformation.", "Operations."],
        subhead: "Your end-to-end transformation partner.",
        lede: "Executive advisory across the full transformation lifecycle\nfrom strategic decisions and delivery to operating models\nand sustainable support organisations.",
        ctaPrimary: "Arrange a consultation",
        ctaSecondary: "See the services",
        enableLabel: "AI Enablement Layer",
        railNodes: [ { title: "Strategy" }, { title: "Transformation" }, { title: "Operations" } ],
        pillars: [
          { title: "Strategy", bullets: ["Conduct 360° readiness and maturity assessments", "Define transformation roadmaps and AI adoption strategies", "Build business cases and investment models", "Lead RFP processes", "Support vendor evaluation and selection"] },
          { title: "Transformation", bullets: ["SAP transformation programme management", "Define and plan AI transformation initiatives", "Establish governance and PMO structures", "Manage delivery, risks and change", "Drive adoption and maximise value realisation"] },
          { title: "Operations", bullets: ["Design sustainable operating models", "Build and structure support organisations", "Define AMS strategy and governance", "Establish service management and reporting", "Drive continuous improvement and operational excellence"] },
        ],
        tagline: "Independent advice. Practical experience. End-to-end impact.",
      },
      headline: ["An end-to-end partner", "for your transformation."],
      lede: "From strategy and project management to building sustainable support organisations — beside you at every phase of the transformation.",
      features: [
        { icon: "target", title: "Independent perspective", body: "Objective, experience-based advice with no product or vendor agenda." },
        { icon: "people", title: "End-to-end expertise", body: "Beside you across every phase of strategy, transformation and operations." },
        { icon: "shield", title: "Lasting value", body: "A focus on durable, measurable business value beyond short-term results." },
      ],
      servicesHead: {
        eyebrow: "Our services",
        title: "Beside you at every step of the journey.",
        lede: "From the first strategic decision through successful delivery to a sustainable operation — end-to-end advisory across the whole arc.",
      },
      nodes: [ { title: "Strategy" }, { title: "Transformation" }, { title: "Operations" } ],
      groups: [
        { title: "Strategy", sub: "Building the right foundation.", tone: "navy", items: [
          { icon: "assessment", title: "IT & Transformation Assessments", body: "We analyse your current state, maturity, risks and readiness." },
          { icon: "doc", title: "RFP & Vendor Advisory", body: "We define your needs, run the RFP, evaluate vendors and support the selection decision." },
          { icon: "route", title: "AI Strategy & Roadmaps", body: "We identify AI opportunities, sharpen priorities and build actionable AI roadmaps." },
        ] },
        { title: "Transformation", sub: "Turning vision into reality.", tone: "navy-deep", items: [
          { icon: "layers", title: "SAP Transformation Advisory", body: "Independent advisory for your SAP S/4HANA and enterprise-transformation initiatives." },
          { icon: "pmo", title: "Program & Portfolio Management", body: "Governance, PMO setup, risk management and executive reporting support." },
          { icon: "people", title: "Organizational Change & Adoption", body: "We drive stakeholder alignment, change management and communication programmes." },
        ] },
        { title: "Operations", sub: "Securing lasting value.", tone: "gold", items: [
          { icon: "opmodel", title: "Operating Model Design", body: "We design the future operating model that fits your business goals." },
          { icon: "headset", title: "AMS & Support Organization Design", body: "We structure support organisations, governance and resourcing models." },
          { icon: "barup", title: "CoE & Service Excellence", body: "We establish Centers of Excellence and a culture of service and continuous improvement." },
        ] },
      ],
      trust: [
        { icon: "shield", title: "Experience", body: "20+ years of SAP and transformation advisory." },
        { icon: "globe", title: "Independence", body: "Not tied to any software or system vendor." },
        { icon: "trend", title: "Outcome focus", body: "Focused on measurable business value and sustainable results." },
        { icon: "people", title: "Leadership support", body: "Strategic guidance at executive level." },
      ],
      ctaBand: {
        title: "Let's shape your transformation journey together.",
        body: "Get in touch to discuss your strategic priorities.",
        cta: "Arrange a consultation",
      },
    },

    projectsSoon: {
      eyebrow: "Projects",
      title: "Carefully in the making.",
      body: "We are meticulously developing initiatives designed to deliver the highest value for our country and its enterprises, powered by artificial intelligence. Our aim is to bring forward corporate solutions that turn strategic priorities into measurable, sustainable outcomes. As each one matures, we will share it here.",
      cta: "Get in touch",
    },

    home: {
      perspective: {
        eyebrow: "The perspective",
        title: ["Transformation succeeds when", "everything moves together."],
        lede: "Lasting value comes from aligning strategy, technology, people and operations to shape, deliver and sustain transformation across the entire journey.",
        flow: [
          { icon: "target", title: "Strategy", body: "Assess, prioritise and plan the right path." },
          { icon: "gear", title: "Transformation", body: "Design and deliver programmes that create impact." },
          { icon: "opmodel", title: "Operations", body: "Build operating models that sustain and scale." },
          { icon: "trend", title: "Value", body: "Realise measurable value and drive continuous impact." },
        ],
        enable: { label: "AI Enablement Layer", items: ["Data", "Analytics", "Automation", "Intelligence"] },
        people: { label: "People & Adoption", body: "Drive change adoption and embed new ways of working.", note: ["Transformation changes systems.", "People change organisations."] },
      },
      whereIHelp: {
        eyebrow: "Where I help",
        title: "Three fronts, one accountable partner.",
        cta: "Explore",
        items: [
          { icon: "target", title: "Strategy Advisory", sub: "Make the right decisions.", body: "Assess, plan and prioritise the right strategies, roadmaps and partners — before budgets are committed." },
          { icon: "gear", title: "Transformation Advisory", sub: "Turn strategy into reality.", body: "Lead and govern transformation programmes that deliver results, manage change and drive adoption." },
          { icon: "people", title: "Operations Advisory", sub: "Sustain and scale value.", body: "Design operating models and support organisations that secure long-term performance." },
        ],
      },
      whyClients: {
        eyebrow: "Why clients call me",
        title: "Independent. Experienced. Outcome-driven.",
        cta: "Learn more",
        items: [
          { icon: "target", title: "Strategy", sub: "Pragmatic. Outcome-focused.", body: "Years on the delivery side taught me that the best strategy is the one that can actually be executed. I focus on pragmatic choices, realistic roadmaps and measurable outcomes." },
          { icon: "gear", title: "Transformation", sub: "Disciplined. People-centered.", body: "Technology rarely fails — transformations do, when governance, alignment and adoption are underestimated. I bring structure and clarity to deliver results and embed change." },
          { icon: "people", title: "Operations", sub: "Sustainable. Value-driven.", body: "The real value of transformation starts after go-live. I design operating models that sustain performance, efficiency and continuous improvement over the long term." },
        ],
      },
      howIThink: {
        eyebrow: "How I think",
        title: ["The real value of transformation", "is in how it lands."],
        quotes: [
          { text: "Technology is the easy part. Governance, alignment and adoption are where programmes succeed or fail.", attr: "On transformation" },
          { text: "Simplicity in strategy doesn't mean strategy is simple — it means the hard thinking was done first.", attr: "On strategy" },
          { text: "An operating model is only valuable if the organisation can actually run it.", attr: "On operations" },
        ],
      },
      aboutTeaser: {
        eyebrow: "About",
        title: ["Independent perspective.", "Practical experience."],
        body: "With 25+ years across enterprise transformation in multiple organisations and geographies, I bring an independent, vendor-neutral perspective. The focus is simple: help organisations make the right decisions, execute with discipline and achieve lasting impact.",
        cta: "More about me",
      },
      approach: {
        eyebrow: "The approach",
        flowTitle: "From first decision to lasting operation.",
        title: ["Assess. Plan.", "Deliver. Sustain."],
        lede: "A clear, client-side method that runs through every engagement — structured enough to de-risk the work, flexible enough to fit your context.",
        stages: [
          { step: "Assess", items: ["360° Assessments", "Maturity Reviews", "AI Readiness"] },
          { step: "Plan", items: ["Roadmaps", "Business Cases", "RFP & Vendor Selection"] },
          { step: "Deliver", items: ["SAP Programmes", "PMO & Governance", "Change Management"] },
          { step: "Sustain", items: ["AMS Operating Models", "Managed Service Designs", "Support Organisations"] },
        ],
      },
    },

    stats: [
      { figure: "25+", label: "Years in enterprise transformation" },
      { figure: "16", label: "Countries delivered across EMEA & MENA" },
      { figure: "€1M+", label: "Programmes delivered to plan" },
      { figure: "35%", label: "Operating-cost reduction delivered" },
    ],

    services: {
      eyebrow: "The practice areas",
      title: "Six practice areas, in detail.",
      lede: "Advisory across the full enterprise-transformation agenda — from strategy and vendor selection through delivery, go-live and the operating model. Technology is the easy half; the work that lasts is organisational change, governance and the people who carry it. Every engagement is run for the client's outcome, free of any product or vendor agenda.",
      items: [
        { title: "Bid, RFP & Vendor Advisory", short: "On the client's side of the table.", bullets: ["RFP / RFI design & evaluation", "Win strategy & solution shaping", "Pricing & commercial modelling", "Final-round negotiation support"], tags: ["RFP / RFI", "Win strategy", "Pricing"] },
        { title: "Program & Portfolio (PMO)", short: "Large programmes kept on track.", bullets: ["PMO setup & governance frameworks", "Portfolio oversight & reporting", "Risk, scope & budget control", "€1M+ programme delivery"], tags: ["PMO", "Governance", "Delivery"] },
        { title: "SAP S/4HANA", short: "Migration and transformation, end to end.", bullets: ["Staged, low-risk transformation roadmap", "Program leadership through go-live", "Target operating model & governance", "Stabilisation & post-go-live support"], tags: ["S/4HANA", "Roadmap", "Go-live"] },
        { title: "Artificial Intelligence & Data", short: "From AI pilots to production value.", bullets: ["Generative-AI strategy & use-case selection", "Data & decision governance", "Adoption & operating-model design", "From pilot to measurable value"], tags: ["GenAI", "Governance", "Adoption"] },
        { title: "Organisational Change & Transformation", short: "People-led change that actually sticks.", bullets: ["Leadership alignment & stakeholder engagement", "Communication & adoption strategy", "Change-readiness & impact assessment", "Training, enablement & go-live support"], tags: ["OCM", "Adoption", "Leadership"] },
        { title: "Managed Services, Operating Model & CoE", short: "Service models built to last.", bullets: ["ITIL-based service & operating models", "SLA / KPI frameworks & P&L ownership", "Multi-region delivery setup", "SAP / AI Centers of Excellence"], tags: ["ITIL", "Operating model", "CoE"] },
      ],
      healthcheck: {
        eyebrow: "Start here",
        title: "Transformation Health Check",
        body: "An independent diagnostic of where a programme or SAP landscape truly stands — risks, gaps and a clear set of next moves. Often the right first step before committing budget.",
        bullets: ["Programme & delivery risk review", "Operating-model & governance gaps", "Clear, prioritised recommendations"],
        cta: "Request a health check",
      },
      journey: {
        eyebrow: "01 — Services",
        title: "Beside you at every step of the journey.",
        lede: "From the first strategy conversation to a running, improving operation — these are the points where the work happens side by side. One accountable partner across the whole arc, not a hand-off between strategy, delivery and support.",
        steps: [
          { title: "Strategy Definition", body: "Align on vision, priorities and business value." },
          { title: "Vendor Selection & RFP", body: "Identify the right partners and build strong commercial foundations." },
          { title: "Programme Mobilisation", body: "Establish governance, plan, and set the programme up for success." },
          { title: "Delivery & Transformation", body: "Lead execution with discipline, transparency and continuous focus on value." },
          { title: "Change & Adoption", body: "Engage people, build capability and drive sustainable adoption." },
          { title: "Operating Model & CoE", body: "Design the right operating model and establish Centers of Excellence." },
          { title: "Managed Services & Continuous Improvement", body: "Operate, optimise and evolve for long-term impact." },
        ],
      },
    },

    approach: {
      eyebrow: "Method",
      title: "A cycle, not a straight line.",
      lede: "Every engagement follows the same rigour — and keeps looping: understand before advising, design before building, deliver, then improve and begin again.",
      steps: [
        { n: "01", title: "Diagnose & Define", body: "The landscape, operating model, risks and stakeholders are mapped — a clear, unvarnished read of where things truly stand, and what success means." },
        { n: "02", title: "Plan & Design", body: "A staged, low-risk roadmap and target operating model are defined, with governance, KPIs and a direct line to business value." },
        { n: "03", title: "Deliver & Improve", body: "Programmes are led through go-live and stabilisation — then measured, refined and continually improved, feeding the next cycle." },
      ],
      caption: "Strategy translated into a staged, governable, continually-improving programme.",
      tagline: "In a methodical approach, success is no accident — it is engineered.",
    },

    work: {
      eyebrow: "02 — Selected Engagements",
      title: "Engagements that set the reference.",
      items: [
        { result: "Turkey's first SAP HANA reference implementation in financial services — delivered to plan with a 22-person team.", sector: "Financial Services", role: "Programme Manager", client: "Eureko Sigorta" },
        { result: "Organisational change directed for the country's largest-ever ERP transformation — a ~150-person global programme.", sector: "Aviation", role: "OCM Lead", client: "Turkish Airlines" },
        { result: "Turkey's first SAP global support hub of 100+ FTE established from the ground up, consolidating worldwide delivery for a global OEM.", sector: "Automotive", role: "Senior Service Manager", client: "Daimler CoE" },
        { result: "A 75+ person regional IT service organisation built from zero in three months — demanding SLAs met from day one.", sector: "Manufacturing", role: "Service Delivery Lead", client: "Bosch-Siemens (B/S/H)" },
        { result: "Comprehensive master-data management implementation led with a 12-person team, strengthening data architecture and governance.", sector: "Consumer Durables", role: "Programme Manager", client: "Arçelik" },
        { result: "Managed-services portfolio doubled with strong recurring-revenue growth, while operating costs were reduced by 35% across global delivery.", sector: "Cross-industry", role: "Service Sales & Delivery Director", client: "NTT DATA" },
      ],
    },

    projects: {
      eyebrow: "Applied AI",
      title: "Projects built in-house.",
      lede: "Beyond advisory, artificial intelligence is applied directly — a growing portfolio of products built to test where AI creates real value, in enterprise transformation and beyond. Each began as a working experiment; several are live.",
      visit: "Visit project",
      details: "View details",
      all: "All projects",
      items: [
        { name: "SAP Activa", kind: "SAP × AI", status: "Active", body: "An AI toolkit that strengthens SAP programme management: project health scoring, risk prediction, resource optimisation and automated status reporting — SAP Activate methodology integrated with AI.", link: "#" },
        { name: "Segmentil", kind: "Analytics", status: "In development", body: "An AI platform that segments enterprise customer portfolios and predicts behaviour — RFM analysis, churn prediction and customer-lifetime-value, as a decision-support tool for sales and customer-success teams.", link: "#" },
        { name: "Yazbix", kind: "Applied AI", status: "Active", body: "An AI-assisted digital journal that captures thoughts, memories and notes — with speech-to-text, sentiment analysis and smart tagging, as a personal memory platform.", link: "#" },
        { name: "Social Media Studio", kind: "Applied AI", status: "In development", body: "An AI-assisted content and scheduling platform for small businesses and founders — content suggestions, timing optimisation and performance analytics.", link: "#" },
        { name: "English for Children", kind: "EdTech", status: "Active", body: "An interactive English-vocabulary platform for children: visual cards, spoken pronunciation and gamified repetition on an AI-personalised learning path.", link: "#" },
        { name: "In Progress", kind: "Coming soon", status: "Coming soon", body: "A new applied-AI project in development, aimed at a real problem in enterprise transformation. Details to follow — stay in touch.", link: "#contact" },
      ],
    },

    insights: {
      eyebrow: "Insights",
      title: "Notes from the transformation frontline.",
      lede: "Perspectives on SAP, AI and the operating models that make change last — written for CIOs and senior IT leaders.",
      readMore: "Read",
      all: "All insights",
      items: [
        { tag: "Article", read: "5 min read", title: "Why SAP S/4HANA migrations fail", text: "The root cause is rarely the technology — it is the gaps in people and process. What separates the programmes that endure." },
        { tag: "Article", read: "4 min read", title: "How AI is transforming the enterprise", text: "AI is not merely a technology; it is an organisational transformation. Where adoption actually succeeds — and why." },
        { tag: "Article", read: "3 min read", title: "Staying ahead of the sector", text: "Change is accelerating. The three areas CIOs need to prepare for today, before they become urgent." },
        { tag: "Article", read: "6 min read", title: "Ten critical mistakes in vendor selection", text: "The wrong vendor can be the single largest risk to a transformation programme. The ten mistakes that surface most often." },
        { tag: "Article", read: "4 min read", title: "Creating value in managed services", text: "ITIL is not just a framework; it is the foundation of operational excellence. How service models create — or destroy — value." },
        { tag: "Article", read: "5 min read", title: "A passing trend, or lasting change?", text: "Should every new technology be treated as a trend? A simple test for telling signal from noise." },
      ],
    },

    ctaBand: {
      eyebrow: "Let's talk",
      title: "Transformation that lasts starts with a conversation.",
      cta: "Arrange a consultation",
    },

    footprintHead: {
      eyebrow: "Global Footprint",
      title: "Sixteen countries. One standard of delivery.",
      lede: "Across EMEA & MENA, programmes and service organisations have been delivered in sixteen countries. Select a marker to see the work.",
      hint: "Select a country",
    },

    /* ---- ABOUT PAGE ---- */
    aboutPage: {
      eyebrow: "About",
      name: "Vildan Kara Kayacan",
      role: "Business, Technology & AI Transformation Executive",
      tags: "SAP & Enterprise Architecture · Managed Services · AI Transformation",
      lede: "Twenty-five years turning transformation strategy into measurable business value — for strategic enterprises across EMEA & MENA.",
      bio: [
        "Vildan Kara Kayacan is a business and technology transformation executive with 25+ years of experience leading large-scale transformation, managed services and global delivery for strategic enterprises across EMEA & MENA. The track record is concrete: a managed-services portfolio doubled, operating costs cut by a third, and multi-country delivery organisations built from the ground up.",
        "Her work sits at the rare intersection of enterprise SAP transformation and applied artificial intelligence — leading both the technology and the organisational change behind its adoption. Deep SAP delivery, hands-on AI and genuine change management within a single profile: precisely what large organisations need now.",
        "Today she advises CIOs and executive teams as a trusted partner — guiding them as they navigate S/4HANA migration, managed-services restructuring, AI adoption, the design of a Center of Excellence, or a high-stakes bid that warrants an experienced hand at the table. Engagements are accepted selectively, in an advisory or senior programme-leadership capacity.",
      ],
      cvLabel: "Download CV (PDF)",
      cvHref: "#",
      profileTitle: "Selected achievements",
      achievements: [
        "Established Turkey's first SAP global support hub (100+ FTE) to centralise worldwide service delivery for a global automotive OEM.",
        "Cut operating costs by 35% while improving service quality and delivery efficiency across global service operations.",
        "Built a 75+ person regional IT service organisation in three months — meeting demanding SLAs from day one.",
        "Led the financial-services sector's first SAP HANA reference implementation as an industry reference.",
        "Doubled the managed-services portfolio with significant recurring-revenue growth on strategic enterprise accounts.",
        "Delivered €1M+ transformation programmes consistently on time, on budget and with stable go-lives.",
      ],
      competenciesTitle: "Core competencies",
      competencies: ["Enterprise & Org. Transformation", "Managed Services & P&L", "Operating-Model Design", "Global Multi-Region Delivery", "Governance, Risk & Quality", "Enterprise Architecture (TOGAF)", "Bid & Proposal Management", "SLA / KPI & Performance", "AI Adoption & Change", "AI & Data-Led Transformation", "SAP / S/4HANA Transformation", "Program & Portfolio Leadership"],
      experienceTitle: "Professional experience",
      experience: [
        { company: "NTT DATA Business Solutions", dates: "Nov 2014 – Present", note: "Progressive leadership in service strategy, global delivery and programme management for major enterprises across EMEA & MENA.", roles: [
          { role: "Director, Service Sales & Delivery Strategy", points: ["Owned end-to-end multi-million-euro RFP/RFI processes for strategic IT and managed-services deals — win strategy, solution design, bid management, risk, pricing and final-round negotiation.", "Shaped commercial strategy for multi-year engagements: pricing frameworks, financial modelling, cost structures and contract design.", "Built service strategy and target operating models for managed services and large-scale transformation programmes."] },
          { role: "Director, Global Services Business Integration & Development", points: ["Led service integration and expansion across EMEA & MENA, scaling delivery centers and mentoring senior leaders.", "Managed strategic transitions from global to local delivery and from external providers to internal Centers of Excellence."] },
          { role: "Head of PMO & Customer Engagement Office", points: ["Set up and ran the PMO, standardising delivery methodology across the portfolio and directing a team of project managers.", "Served as Program / Transformation Lead on priority programmes (incl. B/S/H regional IT org and Daimler 100+ FTE global support hub)."] },
        ] },
        { company: "SAP Türkiye", dates: "May 2011 – Oct 2014", note: "Senior Business Transformation Project Manager — SAP S/4HANA transformation for sector leaders in manufacturing, automotive, financial services and aviation.", roles: [
          { role: "Selected programmes", points: ["Turkish Airlines — OCM Lead on the country's largest ERP transformation (~150 global team members).", "Eureko Sigorta — Programme Manager on the FS sector's first SAP HANA reference (22-person team).", "Arçelik — Programme Manager on a comprehensive MDM implementation (12-person team).", "Yapı Kredi Bank — trusted-advisor role on the first banking-sector ERP reference."] },
        ] },
        { company: "Metro Group Information AG — Düsseldorf, Germany", dates: "Oct 2005 – Apr 2011", note: "Senior Financial Consultant & Developer.", roles: [
          { role: "International SAP roll-outs", points: ["Progressed from ABAP development and SAP Basis into finance consulting, delivering international SAP roll-outs across Egypt, Kazakhstan, Slovakia, Türkiye, Belgium, Spain, Bulgaria and Pakistan."] },
        ] },
      ],
    },

    credentials: {
      eyebrow: "Capabilities",
      title: "Certified. Multilingual. Multi-country.",
      groups: [
        { label: "Certifications", items: ["PMI-RMP® — Risk Management Professional", "TOGAF® Enterprise Architecture", "ITIL® Foundation", "SAP Enterprise Architecture", "SAP Activate (Agile — Certified)", "SAP Business Transformation — SAP Academy", "Financial Reporting & Analysis — Deloitte"] },
        { label: "Education", items: ["B.Sc. Business Information Systems (Wirtschaftsinformatik)", "Marmara University — German programme (2000–2005)"] },
        { label: "Languages", items: ["Turkish — native", "English — fluent (written & spoken)", "German — advanced"] },
        { label: "Reach", items: ["EMEA & MENA", "Egypt · Kazakhstan · Slovakia · Austria", "Belgium · Spain · Bulgaria · Pakistan · UAE · KSA"] },
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's work together.",
      lede: "Whether a major bid is being prepared, an SAP or AI programme is underway, or an operating model needs rethinking, a conversation is welcome — including before the path is clear.",
      fields: { name: "Name", org: "Organisation", email: "Email", topic: "Area of interest", message: "How can I help?" },
      topics: ["SAP & S/4HANA", "Artificial Intelligence", "Managed Services", "Program & PMO", "Bid & RFP Advisory", "Center of Excellence", "Other"],
      send: "Send message",
      sent: "Thank you — your message has been received.",
      location: "Istanbul, Türkiye — available globally (remote & onsite)",
      email: "vildan@vildankara.com",
      phone: "+90 553 296 55 75",
      langs: "Turkish · English · German",
      linkedin: "LinkedIn",
    },

    footer: { tagline: "Executive advisory for enterprise transformation — SAP, AI, managed services and major bids, across EMEA & MENA.", copy: "© 2026 Vildan Kara Kayacan. All rights reserved.", colPages: "Pages", colContact: "Contact", colFollow: "Follow" },
  },

  tr: {
    brand: { name: "Vildan Kara Kayacan", role: "Executive Advisory" },
    nav: [
      { id: "services", label: "Hizmetler", href: "index.html#services" },
      { id: "projects", label: "Projeler", href: "projects.html" },
      { id: "insights", label: "Yazılar", href: "insights.html" },
      { id: "about", label: "Hakkında", href: "about.html" },
      { id: "contact", label: "İletişim", href: "index.html#contact" },
    ],
    cta: "Görüşme planlayın",

    hero: {
      eyebrow: "Executive Advisory",
      title: ["SAP. AI. İş Dönüşümü."],
      subline: "Teknoloji sistemleri değiştirir. İnsanlar kurumları değiştirir.",
      lede: "SAP, yapay zeka ve iş dönüşümü için executive advisory; strateji tanımı ve tedarikçi seçiminden program teslimatı ve işletme modeli tasarımına, iş önceliklerinize, stratejik hedeflerinize ve insanlarınıza uyumlu bağımsız rehberlik.",
      meta: ["25+ yıl", "EMEA & MENA", "İnsan odaklı değişim", "SAP × AI"],
      ctaPrimary: "Görüşme planlayın",
      ctaSecondary: "Hizmetleri görün",
      panelLabel: "Uzmanlık alanları",
    },

    landing: {
      eyebrow: "Hizmetler",
      hero1: {
        eyebrow: "Executive Advisory",
        headline: ["Strateji.", "Dönüşüm.", "Operasyon."],
        subhead: "Uçtan uca dönüşüm ortağınız.",
        lede: "Stratejik kararlardan teslimata, işletme modellerinden sürdürülebilir destek organizasyonlarına kadar dönüşümün tüm yaşam döngüsünde executive advisory.",
        ctaPrimary: "Görüşme ayarlayın",
        ctaSecondary: "Hizmetleri görün",
        enableLabel: "AI Enablement Katmanı",
        railNodes: [ { title: "Strateji" }, { title: "Dönüşüm" }, { title: "Operasyon" } ],
        pillars: [
          { title: "Strateji", bullets: ["360° hazırlık ve olgunluk değerlendirmeleri yapın", "Dönüşüm yol haritaları ve AI benimseme stratejileri tanımlayın", "İş gerekçeleri ve yatırım modelleri oluşturun", "RFP süreçlerini yönetin", "Tedarikçi değerlendirme ve seçimini destekleyin"] },
          { title: "Dönüşüm", bullets: ["SAP dönüşüm program yönetimi", "AI dönüşüm girişimlerini tanımlayın ve planlayın", "Yönetişim ve PMO yapıları kurun", "Teslimatı, riskleri ve değişimi yönetin", "Benimsemeyi sağlayın, değer realizasyonunu en üst düzeye çıkarın"] },
          { title: "Operasyon", bullets: ["Sürdürülebilir işletme modelleri tasarlayın", "Destek organizasyonlarını kurun ve yapılandırın", "AMS stratejisi ve yönetişimi tanımlayın", "Servis yönetimi ve raporlama kurun", "Sürekli iyileştirme ve operasyonel mükemmelliği sağlayın"] },
        ],
        tagline: "Bağımsız tavsiye. Sahada deneyim. Uçtan uca etki.",
      },
      headline: ["Uçtan uca yanınızda", "bir dönüşüm partneri."],
      lede: "Stratejiden proje yönetimine, sürdürülebilir destek organizasyonlarının kurulmasına kadar dönüşümün her aşamasında yanınızdayız.",
      features: [
        { icon: "target", title: "Bağımsız bakış açısı", body: "Objektif, deneyime dayalı ve çıkar odaklı olmayan öneriler." },
        { icon: "people", title: "Uçtan uca uzmanlık", body: "Strateji, dönüşüm ve operasyonun tüm aşamalarında sizinle birlikte." },
        { icon: "shield", title: "Sürdürülebilir değer", body: "Kısa vadeli sonuçların ötesinde, kalıcı ve ölçülebilir iş değeri odaklı yaklaşım." },
      ],
      servicesHead: {
        eyebrow: "Hizmetlerimiz",
        title: "Dönüşüm yolculuğunun her aşamasında yanınızdayız.",
        lede: "Stratejik kararların alınmasından programların başarıyla hayata geçirilmesine ve sürdürülebilir operasyonların kurulmasına kadar uçtan uca danışmanlık desteği sağlıyoruz.",
      },
      nodes: [ { title: "Strateji" }, { title: "Dönüşüm" }, { title: "Operasyon" } ],
      groups: [
        { title: "Strateji", sub: "Doğru temeli atmak.", tone: "navy", items: [
          { icon: "assessment", title: "IT & Dönüşüm Değerlendirmeleri", body: "Mevcut durum, olgunluk, risk ve hazırlık seviyenizi analiz ederiz." },
          { icon: "doc", title: "RFP & Tedarikçi Danışmanlığı", body: "İhtiyaçlarınızı tanımlar, RFP sürecinizi yönetir, tedarikçi değerlendirmesi yapar ve seçim kararınıza destek oluruz." },
          { icon: "route", title: "AI Stratejisi & Yol Haritaları", body: "Yapay zeka fırsatlarını belirler, önceliklerinizi netleştirir ve uygulanabilir AI yol haritaları oluştururuz." },
        ] },
        { title: "Dönüşüm", sub: "Vizyonu gerçeğe dönüştürmek.", tone: "navy-deep", items: [
          { icon: "layers", title: "SAP Dönüşüm Danışmanlığı", body: "SAP S/4HANA ve kurumsal dönüşüm inisiyatiflerinizde bağımsız danışmanlık sağlarız." },
          { icon: "pmo", title: "Program & Portföy Yönetimi", body: "Yönetişim, PMO kurulumu, risk yönetimi ve yönetici raporlama desteği sağlarız." },
          { icon: "people", title: "Organizasyonel Değişim & Adaptasyon", body: "Paydaşların dönüşüme uyumunu sağlar, değişim yönetimi ve iletişim programlarını yönetiriz." },
        ] },
        { title: "Operasyon", sub: "Kalıcı değeri güvence altına almak.", tone: "gold", items: [
          { icon: "opmodel", title: "İşletme Modeli Tasarımı", body: "İş hedeflerinize uygun geleceğin operasyonel modelini tasarlarız." },
          { icon: "headset", title: "AMS & Destek Organizasyonu Tasarımı", body: "Destek organizasyonlarını, yönetişim yapılarını ve kaynaklandırma modellerini kurgularız." },
          { icon: "barup", title: "CoE & Servis Mükemmelliği", body: "Mükemmeliyet merkezleri kurar, hizmet yönetimi ve sürekli iyileştirme kültürünü geliştiririz." },
        ] },
      ],
      trust: [
        { icon: "shield", title: "Deneyim", body: "20+ yıllık SAP ve dönüşüm danışmanlığı deneyimi." },
        { icon: "globe", title: "Bağımsızlık", body: "Hiçbir yazılım veya sistem vendorüne bağlı değiliz." },
        { icon: "trend", title: "Sonuç Odaklılık", body: "Ölçülebilir iş değerine ve sürdürülebilir sonuca odaklanırız." },
        { icon: "people", title: "Liderlik Desteği", body: "Üst yönetim seviyesinde stratejik rehberlik sunarız." },
      ],
      ctaBand: {
        title: "Dönüşüm yolculuğunuzu birlikte şekillendirelim.",
        body: "Stratejik önceliklerinizi konuşmak için bizimle iletişime geçin.",
        cta: "Görüşme ayarlayın",
      },
    },

    projectsSoon: {
      eyebrow: "Projeler",
      title: "Özenle hazırlıyoruz.",
      body: "Ülkemiz ve şirketlerimiz için en yüksek katma değeri yaratacak projeleri, yapay zekâ destekli çözümlerle titizlikle hazırlıyoruz. Amacımız; stratejik öncelikleri ölçülebilir ve sürdürülebilir sonuçlara dönüştüren, kurumsal değeri yüksek çözümleri hizmetinize sunmaktır. Çalışmalarımız olgunlaştıkça bu sayfada sizlerle paylaşacağız.",
      cta: "İletişime geçin",
    },

    home: {
      perspective: {
        eyebrow: "Bakış açımız",
        title: ["Dönüşüm, her şey birlikte", "hareket ettiğinde gerçekleşir."],
        lede: "Kalıcı değer; strateji, teknoloji, insan ve operasyonun hizalanmasından doğar. Tüm yolculuk boyunca noktaları birleştiriyorum — hiçbir aşama tesadüfe bırakılmıyor.",
        flow: [
          { icon: "target", title: "Strateji", body: "Doğru yolu değerlendirin, önceliklendirin ve planlayın." },
          { icon: "gear", title: "Dönüşüm", body: "Etki yaratan programları tasarlayın ve hayata geçirin." },
          { icon: "opmodel", title: "Operasyon", body: "Sürdürülebilir ve ölçeklenebilir işletme modelleri kurun." },
          { icon: "trend", title: "Değer", body: "Ölçülebilir değer ve sürekli etki yaratın." },
        ],
        enable: { label: "AI Enablement Katmanı", items: ["Veri", "Analitik", "Otomasyon", "Zeka"] },
        people: { label: "İnsan & Benimseme", body: "Değişimi yönetin ve yeni çalışma biçimlerini yerleştirin.", note: ["Dönüşüm sistemleri değiştirir.", "İnsanlar organizasyonları değiştirir."] },
      },
      whereIHelp: {
        eyebrow: "Nerede yardımcı oluyorum",
        title: "Üç cephe, tek sorumlu ortak.",
        cta: "Keşfet",
        items: [
          { icon: "target", title: "Strateji Danışmanlığı", sub: "Doğru kararları verin.", body: "Bütçe bağlanmadan önce doğru stratejileri, yol haritalarını ve ortakları değerlendirin, planlayın ve önceliklendirin." },
          { icon: "gear", title: "Dönüşüm Danışmanlığı", sub: "Stratejiyi gerçeğe dönüştürün.", body: "Sonuç getiren dönüşüm programlarını yönetin, değişimi yönetin ve benimsemeyi sağlayın." },
          { icon: "people", title: "Operasyon Danışmanlığı", sub: "Değeri sürdürün ve ölçekleyin.", body: "Uzun vadeli performansı güvence altına alan işletme modelleri ve destek organizasyonları tasarlayın." },
        ],
      },
      whyClients: {
        eyebrow: "Müşteriler neden beni arar",
        title: "Bağımsız. Deneyimli. Sonuç odaklı.",
        cta: "Daha fazla",
        items: [
          { icon: "target", title: "Strateji", sub: "Pragmatik. Sonuç odaklı.", body: "Teslimat tarafındaki yıllar bana en iyi stratejinin gerçekten uygulanabilen olduğunu öğretti. Pragmatik tercihlere, gerçekçi yol haritalarına ve ölçülebilir sonuçlara odaklanıyorum." },
          { icon: "gear", title: "Dönüşüm", sub: "Disiplinli. İnsan odaklı.", body: "Teknoloji nadiren başarısız olur — yönetişim, hizalama ve benimseme küçümsendiğinde dönüşümler başarısız olur. Sonuç getirmek ve değişimi yerleştirmek için yapı ve netlik getiriyorum." },
          { icon: "people", title: "Operasyon", sub: "Sürdürülebilir. Değer odaklı.", body: "Dönüşümün gerçek değeri go-live sonrası başlar. Uzun vadede performansı, verimliliği ve sürekli iyileştirmeyi sürdüren işletme modelleri tasarlıyorum." },
        ],
      },
      howIThink: {
        eyebrow: "Nasıl düşünüyorum",
        title: ["Dönüşümün gerçek değeri", "nasıl yerleştiğinde gizlidir."],
        quotes: [
          { text: "Teknoloji kolay kısmıdır. Programların başarısı ya da başarısızlığı yönetişim, hizalama ve benimsemede belli olur.", attr: "Dönüşüm üzerine" },
          { text: "Stratejideki sadelik stratejinin basit olduğu anlamına gelmez — zor düşüncenin önceden yapıldığı anlamına gelir.", attr: "Strateji üzerine" },
          { text: "Bir işletme modeli ancak organizasyon gerçekten çalıştırabiliyorsa değerlidir.", attr: "Operasyon üzerine" },
        ],
      },
      aboutTeaser: {
        eyebrow: "Hakkında",
        title: ["Bağımsız bakış açısı.", "Pratik deneyim."],
        body: "Birden fazla kurum ve coğrafyada kurumsal dönüşüm alanında 25+ yıllık deneyimle, bağımsız ve tedarikçiden bağımsız bir bakış açısı getiriyorum. Odak basit: kurumların doğru kararları vermesine, disiplinle uygulamasına ve kalıcı etki yaratmasına yardımcı olmak.",
        cta: "Hakkımda daha fazla",
      },
      approach: {
        eyebrow: "Yaklaşımımız",
        flowTitle: "İlk karardan kalıcı operasyona.",
        title: ["Değerlendir. Planla.", "Hayata Geçir. Sürdür."],
        lede: "Her projede işleyen, müşteri tarafında net bir yöntem — işi riskten arındıracak kadar yapısal, bağlamınıza uyacak kadar esnek.",
        stages: [
          { step: "Değerlendir", items: ["360° Değerlendirmeler", "Olgunluk İncelemeleri", "AI Hazırlığı"] },
          { step: "Planla", items: ["Yol Haritaları", "İş Gerekçeleri", "RFP & Tedarikçi Seçimi"] },
          { step: "Hayata Geçir", items: ["SAP Programları", "PMO & Yönetişim", "Değişim & Benimseme"] },
          { step: "Sürdür", items: ["İşletme Modelleri", "AMS Tasarımı", "Destek Organizasyonları"] },
        ],
      },
    },

    stats: [
      { figure: "25+", label: "Yıl kurumsal dönüşüm deneyimi" },
      { figure: "16", label: "EMEA & MENA genelinde ülke" },
      { figure: "€1M+", label: "Program plana uygun teslim edildi" },
      { figure: "%35", label: "Operasyonel maliyet düşüşü sağlandı" },
    ],

    services: {
      eyebrow: "Uzmanlık alanları",
      title: "Altı uzmanlık alanı, detaylıca.",
      lede: "Kurumsal dönüşüm gündeminin tamamında danışmanlık — stratejiden tedarikçi seçimine, teslimattan go-live'a ve işletme modeline kadar. Teknoloji işin kolay yarısı; kalıcı olan iş organizasyonel değişim, yönetişim ve onu taşıyan insanlardır. Her çalışma, hiçbir ürün veya tedarikçi gündeminden bağımsız, müşterinin sonucu için yürütülür.",
      items: [
        { title: "Organizasyonel Değişim & Dönüşüm", short: "Gerçekten yerleşen, insan odaklı değişim.", bullets: ["Liderlik hizalaması & paydaş katılımı", "İletişim & benimseme stratejisi", "Değişime hazırlık & etki analizi", "Eğitim, etkinleştirme & go-live desteği"], tags: ["OCM", "Benimseme", "Liderlik"] },
        { title: "SAP S/4HANA", short: "Uçtan uca geçiş ve dönüşüm.", bullets: ["Aşamalı, düşük riskli dönüşüm yol haritası", "Go-live'a kadar program liderliği", "Hedef işletme modeli & yönetişim", "Stabilizasyon & go-live sonrası destek"], tags: ["S/4HANA", "Yol haritası", "Go-live"] },
        { title: "Yapay Zeka & Veri", short: "AI pilotlarından üretim değerine.", bullets: ["GenAI stratejisi & kullanım senaryosu seçimi", "Veri & karar yönetişimi", "Benimseme & işletme modeli tasarımı", "Pilottan ölçülebilir değere"], tags: ["GenAI", "Yönetişim", "Benimseme"] },
        { title: "Yönetilen Hizmetler, İşletme Modeli & CoE", short: "Kalıcı kurulan servis modelleri.", bullets: ["ITIL tabanlı servis & işletme modelleri", "SLA / KPI çerçeveleri & P&L sahipliği", "Çok bölgeli teslimat kurulumu", "SAP / AI Mükemmeliyet Merkezleri"], tags: ["ITIL", "İşletme modeli", "CoE"] },
        { title: "Program & Portföy (PMO)", short: "Büyük programlar kontrol altında.", bullets: ["PMO kurulumu & yönetişim çerçeveleri", "Portföy denetimi & raporlama", "Risk, kapsam & bütçe kontrolü", "€1M+ program teslimatı"], tags: ["PMO", "Yönetişim", "Teslimat"] },
        { title: "İhale, RFP & Tedarikçi Danışmanlığı", short: "Masanın müşteri tarafında.", bullets: ["RFP / RFI tasarımı & değerlendirme", "Kazanma stratejisi & çözüm şekillendirme", "Fiyatlama & ticari modelleme", "Son tur müzakere desteği"], tags: ["RFP / RFI", "Strateji", "Fiyatlama"] },
      ],
      healthcheck: {
        eyebrow: "Buradan başlayın",
        title: "Dönüşüm Health Check",
        body: "Bir programın ya da SAP ortamının gerçekte nerede durduğuna dair bağımsız bir teşhis — riskler, boşluklar ve net bir sonraki adımlar seti. Bütçe ayrılmadan önce çoğu zaman doğru ilk adım.",
        bullets: ["Program & teslimat risk incelemesi", "İşletme modeli & yönetişim boşlukları", "Net, önceliklendirilmiş öneriler"],
        cta: "Health check talep edin",
      },
      journey: {
        eyebrow: "01 — Hizmetler",
        title: "Dönüşümün her adımında yanınızda.",
        lede: "İlk strateji görüşmesinden işleyen ve gelişen bir operasyona kadar — bunlar işin omuz omuza yapıldığı noktalar. Tüm yay boyunca tek ve sorumlu bir partner; strateji, teslimat ve destek arasında bir devir-teslim değil.",
        steps: [
          { title: "Strateji Tanımı", body: "Vizyon, öncelikler ve iş değeri üzerinde hizalanın." },
          { title: "Tedarikçi Seçimi & RFP", body: "Doğru partnerleri belirleyin ve güçlü ticari temeller kurun." },
          { title: "Program Mobilizasyonu", body: "Yönetişimi ve planı kurun, programı başarıya hazırlayın." },
          { title: "Teslimat & Dönüşüm", body: "Disiplin, şeffaflık ve değere sürekli odakla yürütme." },
          { title: "Değişim & Benimseme", body: "İnsanları dahil edin, yetkinlik inşa edin ve kalıcı benimsemeyi sağlayın." },
          { title: "İşletme Modeli & CoE", body: "Doğru işletme modelini tasarlayın ve Mükemmeliyet Merkezleri kurun." },
          { title: "Yönetilen Hizmetler & Sürekli İyileştirme", body: "İşletin, optimize edin ve uzun vadeli etki için geliştirin." },
        ],
      },
    },

    approach: {
      eyebrow: "Yöntem",
      title: "Düz bir çizgi değil, bir döngü.",
      lede: "Her çalışma aynı titizliği izler — ve döngü halinde devam eder: tavsiyeden önce anlamak, inşadan önce tasarlamak, teslim etmek, sonra iyileştirip yeniden başlamak.",
      steps: [
        { n: "01", title: "Teşhis & Tanımlama", body: "Ortam, işletme modeli, riskler ve paydaşlar haritalanır — gerçekte nerede durduğuna ve başarının ne anlama geldiğine dair net bir okuma." },
        { n: "02", title: "Planlama & Tasarım", body: "Aşamalı, düşük riskli bir yol haritası ve hedef işletme modeli tanımlanır; yönetişim, KPI'lar ve iş değerine doğrudan bir hat ile." },
        { n: "03", title: "Teslimat & İyileştirme", body: "Programlar go-live ve stabilizasyona kadar yönetilir — sonra ölçülür, rafine edilir ve sürekli iyileştirilir; bir sonraki döngüyü besler." },
      ],
      caption: "Strateji; aşamalı, yönetilebilir ve sürekli iyileşen bir programa dönüştürülür.",
      tagline: "Metodik bir yaklaşımda başarı tesadüf değildir — tasarlanır.",
    },

    work: {
      eyebrow: "02 — Seçili Çalışmalar",
      title: "Referans olan çalışmalar.",
      items: [
        { result: "Finans sektöründe Türkiye'nin ilk SAP HANA referans implementasyonu — 22 kişilik ekiple plana uygun teslim edildi.", sector: "Finans", role: "Program Yöneticisi", client: "Eureko Sigorta" },
        { result: "Ülkenin en büyük ERP dönüşümünde organizasyonel değişim yönetildi — ~150 kişilik global program.", sector: "Havacılık", role: "OCM Lideri", client: "Türk Hava Yolları" },
        { result: "Global bir OEM için dünya genelinde teslimatı birleştiren, Türkiye'nin ilk 100+ FTE SAP global destek merkezi sıfırdan kuruldu.", sector: "Otomotiv", role: "Kıdemli Servis Yöneticisi", client: "Daimler CoE" },
        { result: "75+ kişilik bölgesel IT servis organizasyonu üç ayda sıfırdan kuruldu — zorlu SLA'lar ilk günden karşılandı.", sector: "Üretim", role: "Servis Teslimat Lideri", client: "Bosch-Siemens (B/S/H)" },
        { result: "12 kişilik ekiple kapsamlı bir ana veri yönetimi (MDM) uygulaması yönetildi; veri mimarisi ve yönetişim güçlendirildi.", sector: "Dayanıklı Tüketim", role: "Program Yöneticisi", client: "Arçelik" },
        { result: "Yönetilen hizmetler portföyü, güçlü yinelenen gelir artışıyla ikiye katlandı; global teslimatta faaliyet maliyetleri %35 düşürüldü.", sector: "Sektörler arası", role: "Servis Satış & Teslimat Direktörü", client: "NTT DATA" },
      ],
    },

    projects: {
      eyebrow: "Uygulamalı AI",
      title: "Kendi geliştirdiği projeler.",
      lede: "Danışmanlığın ötesinde, yapay zeka doğrudan uygulanır — AI'ın kurumsal dönüşümde ve ötesinde nerede gerçek değer yarattığını sınamak için geliştirilmiş, büyüyen bir ürün portföyü. Her biri çalışan bir deney olarak başladı; bazıları yayında.",
      visit: "Projeyi gör",
      details: "Detayları gör",
      all: "Tüm projeler",
      items: [
        { name: "SAP Activa", kind: "SAP × AI", status: "Aktif", body: "SAP program yönetimini yapay zeka ile güçlendiren araç seti: proje sağlık skorlama, risk tahmini, kaynak optimizasyonu ve otomatik durum raporlama — SAP Activate metodolojisinin AI ile entegrasyonu.", link: "#" },
        { name: "Segmentil", kind: "Analitik", status: "Geliştiriliyor", body: "Kurumsal müşteri portföylerini yapay zeka ile segmentleyen ve davranış tahmini üreten platform — RFM analizi, churn tahmini ve müşteri yaşam boyu değeri; satış ve müşteri başarı ekipleri için karar destek aracı.", link: "#" },
        { name: "Yazbix", kind: "Uygulamalı AI", status: "Aktif", body: "Düşünceleri, anıları ve notları yapay zeka desteğiyle kayıt altına alan dijital anı defteri — sesten metne, duygu analizi ve akıllı etiketleme ile kişisel hafıza platformu.", link: "#" },
        { name: "Sosyal Medya Stüdyosu", kind: "Uygulamalı AI", status: "Geliştiriliyor", body: "Küçük işletmeler ve girişimciler için yapay zeka destekli içerik ve zamanlama platformu — içerik önerileri, zamanlama optimizasyonu ve performans analitikleri.", link: "#" },
        { name: "Çocuklar için İngilizce", kind: "EdTech", status: "Aktif", body: "Çocuklara yönelik interaktif İngilizce kelime platformu: görsel kartlar, sesli telaffuz ve oyunlaştırılmış tekrar — AI ile kişiselleştirilmiş öğrenme yolu.", link: "#" },
        { name: "Devam Eden Proje", kind: "Yakında", status: "Yakında", body: "Geliştirme aşamasında yeni bir uygulamalı AI projesi; kurumsal dönüşümdeki gerçek bir problemi hedefliyor. Yakında paylaşılacak — bağlantıda kalın.", link: "#contact" },
      ],
    },

    insights: {
      eyebrow: "Yazılar",
      title: "Dönüşümün sahasından notlar.",
      lede: "SAP, yapay zeka ve değişimi kalıcı kılan işletme modelleri üzerine bakışlar — CIO'lar ve üst düzey IT liderleri için.",
      readMore: "Oku",
      all: "Tüm yazılar",
      items: [
        { tag: "Makale", read: "5 dk okuma", title: "SAP S/4HANA geçişlerinde neden başarısız olunur?", text: "Temel neden teknoloji değil — insan ve süreç boyutundaki eksiklikler. Kalıcı programları ayıran nedir." },
        { tag: "Makale", read: "4 dk okuma", title: "Yapay zeka kurumları nasıl dönüştürüyor?", text: "AI sadece teknoloji değil, organizasyonel bir dönüşüm. Benimseme nerede gerçekten başarılı olur — ve neden." },
        { tag: "Makale", read: "3 dk okuma", title: "Sektörün önünde kalmak", text: "Değişim hızlanıyor. CIO'ların aciliyet kazanmadan önce bugün hazırlanması gereken üç alan." },
        { tag: "Makale", read: "6 dk okuma", title: "Tedarikçi seçiminde 10 kritik hata", text: "Yanlış tedarikçi seçimi bir dönüşüm programının en büyük riski olabilir. En sık karşılaşılan on hata." },
        { tag: "Makale", read: "4 dk okuma", title: "Yönetilen hizmetlerde değer yaratma", text: "ITIL sadece bir çerçeve değil, operasyonel mükemmelliğin temelidir. Servis modelleri değeri nasıl yaratır — ya da yok eder." },
        { tag: "Makale", read: "5 dk okuma", title: "Geçici trend mi, kalıcı değişim mi?", text: "Her yeni teknolojiyi trend olarak mı görmeli? Sinyali gürültüden ayırmak için basit bir test." },
      ],
    },

    ctaBand: {
      eyebrow: "Konuşalım",
      title: "Kalıcı dönüşüm bir görüşmeyle başlar.",
      cta: "Görüşme planlayın",
    },

    footprintHead: {
      eyebrow: "Global Erişim",
      title: "On altı ülke. Tek bir teslimat standardı.",
      lede: "EMEA & MENA genelinde on altı ülkede program ve servis organizasyonları yürütüldü. Detay için bir işaret seçin.",
      hint: "Bir ülke seçin",
    },

    aboutPage: {
      eyebrow: "Hakkında",
      name: "Vildan Kara Kayacan",
      role: "İş, Teknoloji & Yapay Zeka Dönüşüm Yöneticisi",
      tags: "SAP & Kurumsal Mimari · Yönetilen Hizmetler · AI Dönüşümü",
      lede: "Yirmi beş yıl boyunca dönüşüm stratejisini ölçülebilir iş değerine dönüştürdü — EMEA & MENA genelindeki stratejik kurumlar için.",
      bio: [
        "Vildan Kara Kayacan, EMEA & MENA genelindeki stratejik kurumlar için büyük ölçekli dönüşüm, yönetilen hizmetler ve global teslimatı yöneten, 25+ yıllık deneyime sahip bir iş ve teknoloji dönüşüm yöneticisidir. Sicili somuttur: ikiye katlanan bir yönetilen hizmetler portföyü, üçte bir oranında düşürülen faaliyet maliyetleri ve sıfırdan kurulan çok ülkeli teslimat organizasyonları.",
        "Çalışması, kurumsal SAP dönüşümü ile uygulanan yapay zekanın nadir kesişiminde yer alır — hem teknolojiyi hem de benimsemenin arkasındaki organizasyonel değişimi yönetir. Derin SAP teslimatı, sahada yapay zeka ve gerçek değişim yönetimi tek bir profilde: büyük kurumların bugün tam da ihtiyaç duyduğu şey.",
        "Bugün CIO'lara ve yönetim ekiplerine güvenilen bir partner olarak danışmanlık verir — S/4HANA geçişi, yönetilen hizmet yeniden yapılandırması, AI benimseme, bir Mükemmeliyet Merkezi tasarımı ya da deneyimli bir el gerektiren yüksek bahisli ihalelerde yön gösterir. Çalışmalar, danışmanlık veya kıdemli program liderliği rolünde, seçici biçimde kabul edilir.",
      ],
      cvLabel: "CV indir (PDF)",
      cvHref: "#",
      profileTitle: "Öne çıkan başarılar",
      achievements: [
        "Global bir otomotiv OEM'i için dünya geneli servis teslimatını merkezileştirmek üzere Türkiye'nin ilk SAP global destek merkezini (100+ FTE) kurdu.",
        "Global servis operasyonlarında servis kalitesini ve teslimat verimliliğini artırırken faaliyet maliyetlerini %35 düşürdü.",
        "Üç ayda 75+ kişilik bölgesel IT servis organizasyonu kurdu — zorlu SLA'ları ilk günden karşıladı.",
        "Finans sektörünün ilk SAP HANA referans uygulamasını sektör referansı olarak yönetti.",
        "Stratejik kurumsal hesaplarda önemli yinelenen gelir artışıyla yönetilen hizmetler portföyünü ikiye katladı.",
        "€1M+ dönüşüm programlarını tutarlı biçimde zamanında, bütçe dahilinde ve stabil go-live'larla teslim etti.",
      ],
      competenciesTitle: "Temel yetkinlikler",
      competencies: ["Kurumsal & Org. Dönüşümü", "Yönetilen Hizmetler & P&L", "İşletme Modeli Tasarımı", "Global Çok Bölgeli Teslimat", "Yönetişim, Risk & Kalite", "Kurumsal Mimari (TOGAF)", "Teklif & Öneri Yönetimi", "SLA / KPI & Performans", "AI Benimseme & Değişim", "AI & Veri Odaklı Dönüşüm", "SAP / S/4HANA Dönüşümü", "Program & Portföy Liderliği"],
      experienceTitle: "Profesyonel deneyim",
      experience: [
        { company: "NTT DATA Business Solutions", dates: "Kas 2014 – Günümüz", note: "EMEA & MENA'daki büyük kurumlar için servis stratejisi, global teslimat ve program yönetiminde aşamalı liderlik.", roles: [
          { role: "Direktör, Servis Satışı & Teslimat Stratejisi", points: ["Stratejik IT ve yönetilen hizmet anlaşmaları için uçtan uca çok milyon euroluk RFP/RFI süreçlerini yönetti — kazanma stratejisi, çözüm tasarımı, teklif yönetimi, risk, fiyatlama ve son tur müzakere.", "Çok yıllı angajmanlar için ticari strateji şekillendirdi: fiyatlama çerçeveleri, finansal modelleme, maliyet yapıları ve sözleşme tasarımı.", "Yönetilen hizmetler ve büyük ölçekli dönüşüm programları için servis stratejisi ve hedef işletme modelleri kurdu."] },
          { role: "Direktör, Global Servisler İş Entegrasyonu & Geliştirme", points: ["EMEA & MENA genelinde servis entegrasyonu ve genişlemesini yönetti; teslimat merkezlerini ölçeklendirdi ve üst düzey liderlere mentörlük yaptı.", "Global teslimattan yerel teslimata ve dış sağlayıcılardan iç Mükemmeliyet Merkezlerine stratejik geçişleri yönetti."] },
          { role: "PMO & Müşteri Katılım Ofisi Başkanı", points: ["PMO'yu kurdu ve yönetti; portföy genelinde teslimat metodolojisini standartlaştırdı ve bir proje yöneticileri ekibini yönlendirdi.", "Öncelikli programlarda (B/S/H bölgesel IT org. ve Daimler 100+ FTE global destek merkezi dahil) Program / Dönüşüm Lideri olarak görev yaptı."] },
        ] },
        { company: "SAP Türkiye", dates: "May 2011 – Eki 2014", note: "Kıdemli İş Dönüşümü Proje Yöneticisi — üretim, otomotiv, finans ve havacılık sektör liderleri için SAP S/4HANA dönüşümü.", roles: [
          { role: "Seçili programlar", points: ["Türk Hava Yolları — Ülkenin en büyük ERP dönüşümünde OCM Lideri (~150 global ekip üyesi).", "Eureko Sigorta — Finans sektörünün ilk SAP HANA referansında Program Yöneticisi (22 kişilik ekip).", "Arçelik — Kapsamlı bir MDM uygulamasında Program Yöneticisi (12 kişilik ekip).", "Yapı Kredi Bankası — İlk bankacılık sektörü ERP referansında güvenilen danışman rolü."] },
        ] },
        { company: "Metro Group Information AG — Düsseldorf, Almanya", dates: "Eki 2005 – Nis 2011", note: "Kıdemli Finansal Danışman & Geliştirici.", roles: [
          { role: "Uluslararası SAP roll-out'ları", points: ["ABAP geliştirme ve SAP Basis'ten finans danışmanlığına ilerledi; Mısır, Kazakistan, Slovakya, Türkiye, Belçika, İspanya, Bulgaristan ve Pakistan'da uluslararası SAP roll-out'ları gerçekleştirdi."] },
        ] },
      ],
    },

    credentials: {
      eyebrow: "Yetkinlikler",
      title: "Sertifikalı. Çok dilli. Çok ülkeli.",
      groups: [
        { label: "Sertifikalar", items: ["PMI-RMP® — Risk Yönetimi Uzmanı", "TOGAF® Kurumsal Mimari", "ITIL® Foundation", "SAP Kurumsal Mimari", "SAP Activate (Agile — Sertifikalı)", "SAP Business Transformation — SAP Academy", "Finansal Raporlama & Analiz — Deloitte"] },
        { label: "Eğitim", items: ["B.Sc. İş Bilgi Sistemleri (Wirtschaftsinformatik)", "Marmara Üniversitesi — Almanca program (2000–2005)"] },
        { label: "Diller", items: ["Türkçe — anadil", "İngilizce — ileri (yazılı & sözlü)", "Almanca — ileri"] },
        { label: "Kapsam", items: ["EMEA & MENA", "Mısır · Kazakistan · Slovakya · Avusturya", "Belçika · İspanya · Bulgaristan · Pakistan · BAE · S. Arabistan"] },
      ],
    },

    contact: {
      eyebrow: "İletişim",
      title: "Birlikte çalışalım.",
      lede: "İster büyük bir ihaleye hazırlanılıyor, ister bir SAP ya da AI programı yürütülüyor, ister bir işletme modeli yeniden ele alınıyor olsun — yol netleşmeden önce dahi bir görüşme memnuniyetle karşılanır.",
      fields: { name: "Ad Soyad", org: "Kurum", email: "E-posta", topic: "İlgi alanı", message: "Nasıl yardımcı olabilirim?" },
      topics: ["SAP & S/4HANA", "Yapay Zeka", "Yönetilen Hizmetler", "Program & PMO", "İhale & RFP Danışmanlığı", "Mükemmeliyet Merkezi", "Diğer"],
      send: "Mesaj gönder",
      sent: "Teşekkürler — mesajınız alındı.",
      location: "İstanbul, Türkiye — global çalışma (uzaktan & yerinde)",
      email: "vildan@vildankara.com",
      phone: "+90 553 296 55 75",
      langs: "Türkçe · İngilizce · Almanca",
      linkedin: "LinkedIn",
    },

    footer: { tagline: "Kurumsal dönüşüm için executive advisory — SAP, AI, yönetilen hizmetler ve büyük ihaleler, EMEA & MENA genelinde.", copy: "© 2026 Vildan Kara Kayacan. Tüm hakları saklıdır.", colPages: "Sayfalar", colContact: "İletişim", colFollow: "Takip" },
  },
};
