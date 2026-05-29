// Main app — assembles all sections
const { Hero, About, ServicesOverview, ServiceDetail, Naming, Strengths,
        Consultation, Works, Flow, Company, FinalCTA, Footer, Header,
        Icon, WorksPlaceholder } = window;

// Decorative side panels for service detail sections
const SNSDetailSide = () => (
  <div className="relative">
    <div className="absolute -top-5 -right-5 hidden md:block z-10">
      <div className="w-24 h-24 rounded-full bg-paper border border-gold flex items-center justify-center text-gold2">
        <span className="font-mono text-[10px] tracking-[0.2em] text-center leading-[1.6]">MAIN<br/>BUSINESS</span>
      </div>
    </div>

    {/* LiveSpark product callout — placed within the core business detail. */}
    <a href="https://livespark.jp/" target="_blank" rel="noopener"
       className="group block bg-ink text-paper border border-ink relative overflow-hidden hover:border-gold transition-colors">
      <div aria-hidden="true" className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full pointer-events-none opacity-70"
           style={{background: "radial-gradient(circle, rgba(122,90,248,0.38), rgba(82,140,255,0.10) 50%, transparent 75%)"}}></div>
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="font-mono text-[10.5px] tracking-[0.22em] text-gold/90">OWN PRODUCT</div>
          <div className="flex items-center justify-center w-9 h-9 border border-paper/20 text-paper/70 group-hover:border-gold group-hover:text-gold transition-colors">
            <Icon.ArrowRight width="15" height="15" className="arrow-right"/>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 shrink-0 bg-black border border-paper/15 overflow-hidden flex items-center justify-center">
            <img src="assets/livespark-logo.jpeg" alt="LiveSparkのロゴ"
                 className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-jp-serif font-semibold text-[20px] leading-[1.2] tracking-[0.02em]">LiveSpark</div>
            <div className="mt-1 text-[11.5px] tracking-wider text-paper/55">TikTok LIVE Overlay SaaS</div>
          </div>
        </div>
        <p className="mt-5 text-[12.5px] leading-[1.9] text-paper/75">
          ギフト・コメント・いいねに反応する、TikTok LIVE配信者向けの配信演出SaaS。OBSやTikTok Live Studioのブラウザソースで導入できます。
        </p>
        <div className="mt-5 pt-4 border-t border-paper/15 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span className="font-mono text-[10px] tracking-[0.22em] text-gold/85">livespark.jp · 550+ USERS</span>
        </div>
      </div>
    </a>
  </div>
);

const AIDetailSide = () => (
  <div className="border border-line overflow-hidden bg-paper">
    <img src="assets/service-ai.webp" alt="AI活用支援のイメージ" loading="lazy" className="w-full h-auto block" />
  </div>
);

const WebDetailSide = () => (
  <div className="border border-line overflow-hidden bg-paper">
    <img src="assets/service-web.webp" alt="Web・LP制作のイメージ" loading="lazy" className="w-full h-auto block" />
  </div>
);

// ---------- LiveSpark dedicated section ----------
const LiveSpark = () => {
  const plans = [
    { name: "FREE",     price: "¥0",        priceSub: "",           desc: "基本オーバーレイが無料で使えます。まずはここから。" },
    { name: "PRO",      price: "¥1,480",    priceSub: "/ 月",       desc: "全オーバーレイ使い放題。配信画面を継続的に演出。", featured: true },
    { name: "CUSTOM",   price: "要相談",     priceSub: "",           desc: "事務所・配信者向けの専用オーバーレイを制作。" },
  ];
  const steps = [
    { n: "01", title: "演出を選ぶ",       body: "ギフト・コメント・いいねなど、配信に合わせたオーバーレイを選択。" },
    { n: "02", title: "URLをコピー",      body: "ブラウザソース用URLをコピーし、配信ソフトへ追加。" },
    { n: "03", title: "配信に反映",       body: "OBSやTikTok Live Studioで、リアルタイムな画面演出として利用できます。" },
  ];
  return (
    <section id="livespark" className="section border-t border-line bg-ink text-paper relative overflow-hidden">
      {/* subtle gold halo */}
      <div aria-hidden="true" className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full pointer-events-none"
           style={{background: "radial-gradient(circle, rgba(184,149,86,0.18), rgba(184,149,86,0) 70%)"}}></div>

      <div className="container-x relative">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.22em] text-gold whitespace-pre-line">{"OWN\nPRODUCT"}</div>
          </div>
          <div className="md:col-span-9">
            <div className="flex items-center gap-3 mb-5">
              <Icon.Spark width="24" height="24" className="text-gold"/>
              <span className="font-mono text-[11px] tracking-[0.22em] text-gold">CORE PRODUCT · LIVESPARK</span>
            </div>
            <h2 className="font-jp-serif font-semibold text-[34px] md:text-[52px] leading-[1.25] tracking-[0.01em]">
              LiveSparkで、配信画面に<br/>
              <span className="text-gold">リアルタイムな反応を。</span>
            </h2>
            <p className="mt-6 max-w-[640px] text-[14px] leading-[2.1] text-paper/80">
              TikTok LIVE配信者向けの配信演出SaaS。ギフト・コメント・いいねなどの反応を配信画面上に可視化し、配信者とリスナーのコミュニケーションが自然に盛り上がる体験をつくります。
            </p>

            <div className="mt-7 inline-flex items-center gap-3 px-4 py-2 border border-gold/40 bg-gold/5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
              <span className="font-mono text-[11px] tracking-[0.18em] text-gold">550+ REGISTERED USERS · 180+ PRO USERS</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="https://livespark.jp/" target="_blank" rel="noopener"
                 className="inline-flex items-center justify-between gap-6 px-7 py-4 text-[13.5px] tracking-[0.14em] bg-gold text-ink hover:bg-paper transition-colors">
                <span>LiveSparkを使ってみる</span>
                <Icon.ArrowRight width="18" height="18"/>
              </a>
              <a href="https://livespark.jp/contact" target="_blank" rel="noopener"
                 className="inline-flex items-center justify-between gap-6 px-7 py-4 text-[13.5px] tracking-[0.14em] border border-paper/30 text-paper hover:border-gold hover:text-gold transition-colors">
                <span>カスタム相談</span>
                <Icon.ArrowRight width="18" height="18"/>
              </a>
            </div>
          </div>
        </div>

        {/* plans */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {plans.map((p) => (
            <div key={p.name}
                 className={`p-7 border ${p.featured ? "border-gold bg-gold/5" : "border-paper/15 bg-paper/[0.02]"}`}>
              <div className="flex items-center justify-between mb-5">
                <span className={`font-mono text-[12px] tracking-[0.22em] ${p.featured ? "text-gold" : "text-paper/60"}`}>{p.name}</span>
                {p.featured && <span className="text-[10px] tracking-[0.2em] px-2 py-0.5 bg-gold text-ink">POPULAR</span>}
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-jp-serif font-semibold text-[28px] md:text-[34px] leading-none">{p.price}</span>
                <span className="text-[13px] text-paper/60">{p.priceSub}</span>
              </div>
              <p className="text-[12.5px] leading-[1.9] text-paper/75">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* getting started */}
        <div className="grid md:grid-cols-12 gap-8 pt-12 border-t border-paper/15">
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.22em] text-gold mb-3">GETTING STARTED</div>
            <h3 className="font-jp-serif font-medium text-[22px] leading-[1.5]">導入しやすい形で<br/>配信を演出</h3>
          </div>
          <div className="md:col-span-9 grid sm:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="border border-paper/15 p-6 bg-paper/[0.02]">
                <div className="font-mono text-[11px] tracking-[0.2em] text-gold">{s.n}</div>
                <div className="mt-3 font-jp-serif text-[16px]">{s.title}</div>
                <p className="mt-2 text-[12.5px] leading-[1.9] text-paper/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  // simple fade-in on scroll
  React.useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesOverview />
        <LiveSpark />

        <ServiceDetail
          label={"MAIN\nBUSINESS"}
          num="01 / LiveSpark · TikTok LIVE Creative"
          title="LiveSparkを中核に、TikTok LIVE領域の配信体験を広げる。"
          lead="DAIZUは、自社SaaS「LiveSpark」の開発・運営を中心に、TikTok LIVE配信者向けのリアルタイム演出、カスタムオーバーレイ、ギフトアニメーション制作を展開しています。"
          body="配信の現場で求められるのは、ただ見た目がきれいな素材ではなく、視聴者の反応が画面に伝わり、配信者とリスナーのコミュニケーションが自然に盛り上がる体験です。実際の配信現場で使われるプロダクトを運営しているからこそ、導入しやすさ、見やすさ、盛り上がり方まで含めて設計します。"
          bullets={[
            "配信演出SaaS「LiveSpark」の開発・運営",
            "ギフト・コメント・いいねに反応するオーバーレイ",
            "配信者・ライバー事務所向けのカスタム制作",
            "ギフトアニメーション / スタンプ / SNS素材制作",
            "OBS / TikTok Live Studioで使いやすい画面設計",
            "配信現場の声を反映した改善・運用",
          ]}
          side={<SNSDetailSide/>}
        />

        <ServiceDetail
          label={"SUPPORT\nAREA"}
          num="02 / AI Support"
          title="AIを活用し、配信・SNS事業の制作と運用を速くする。"
          lead="AI活用支援では、配信・SNS・クリエイティブ制作に関わる業務の整理、制作フローの改善、簡易プロトタイプ制作、外部ツール連携の検討などを支援します。"
          body="「AIを導入すること」自体を目的にするのではなく、実際の事業や制作現場で使える形に落とし込むことを重視しています。"
          bullets={[
            "配信・SNS事業の制作フロー整理",
            "AI活用方針のすり合わせ",
            "現場向けの簡易プロトタイプ制作",
            "外部パートナー連携",
          ]}
          side={<AIDetailSide/>}
        />

        <ServiceDetail
          label={"WEB\nPRODUCTION"}
          num="03 / Web · LP"
          title="配信・SNS事業の伝わり方を整えるWeb・LP制作。"
          lead="サービスサイト、LP、コーポレートサイトなど、事業の内容や強みが伝わるWebサイトを制作します。"
          body="特に、配信・SNS・キャラクター・AI活用など、言葉だけでは伝わりにくい事業の見せ方を整理し、公開後の運用や改善まで見据えた構成を設計します。"
          bullets={[
            "配信・SNS関連サービスサイト",
            "LP / キャンペーンページ",
            "コーポレートサイト",
            "公開後の運用・改善サポート",
          ]}
          side={<WebDetailSide/>}
        />

        <Naming />
        <Strengths />
        <Consultation />
        <Works />
        <Flow />
        <Company />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
