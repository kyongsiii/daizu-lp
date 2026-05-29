// Sections of the DAIZU LP

// ---------- Header ----------
const Header = () => {
  const [active, setActive] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: "services", label: "Services" },
    { id: "about",    label: "About" },
    { id: "works",    label: "Works" },
    { id: "contact",  label: "Contact" },
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'}`}>
      <div className="container-x flex items-center justify-between h-[68px]">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <Icon.Logo size={28} />
          <span className="font-jp-serif font-semibold tracking-[0.18em] text-[15px]">DAIZU</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-[0.14em]">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${active===l.id?'active':''}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden sm:inline-flex md:hidden text-[12px] tracking-[0.14em] border border-ink px-3 py-1.5">CONTACT</a>
      </div>
    </header>
  );
};

// ---------- Hero ----------
const Hero = () => (
  <section id="top" className="relative pt-[120px] md:pt-[140px] pb-20 md:pb-28 overflow-hidden">
    <div className="container-x flex items-center justify-center md:min-h-[560px]">
      <div className="relative mx-auto w-full max-w-[920px] text-center min-w-0">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8">
          <span className="dot-gold"></span>
          <span className="label-side leading-[1.8] min-w-0 max-w-[300px] sm:max-w-full wrap-anywhere">TikTok LIVE Creative / LiveSpark SaaS / Custom Overlay</span>
        </div>
        <h1 className="font-jp-serif font-semibold text-[40px] sm:text-[58px] md:text-[76px] leading-[1.18] tracking-[0.02em] text-ink">
          ライブ配信の<span className="sm:hidden"><br/></span>現場を、<br/>もっと動かす。
        </h1>
        <div className="mt-5 mx-auto max-w-[310px] sm:max-w-none font-jp-serif text-[15px] md:text-[17px] tracking-[0.05em] text-gold2 wrap-anywhere">
          DAIZU合同会社 &nbsp;—&nbsp; Live Streaming SaaS & Creative Company
        </div>
        <div className="mt-7 mx-auto max-w-[330px] sm:max-w-[700px] text-[14.5px] leading-[2.05] text-ink2/85 wrap-anywhere">
          DAIZUは、TikTok LIVE領域で配信演出SaaS「LiveSpark」を開発・運営し、オーバーレイ制作、配信事務所運営、AI活用支援まで行っています。
        </div>
        <div className="mt-10 mx-auto max-w-[342px] sm:max-w-none flex flex-col sm:flex-row sm:justify-center gap-3">
          <a href="#contact" className="btn-gold w-full sm:w-auto inline-flex items-center justify-center sm:justify-between gap-4 sm:gap-6 px-7 py-4 text-[13.5px] tracking-[0.14em]">
            <span>法人・事務所向けに相談する</span>
            <Icon.ArrowRight width="18" height="18" className="arrow-right"/>
          </a>
          <a href="#services" className="btn-ghost w-full sm:w-auto inline-flex items-center justify-center sm:justify-between gap-4 sm:gap-6 px-7 py-4 text-[13.5px] tracking-[0.14em]">
            <span>サービスを見る</span>
            <Icon.ArrowRight width="18" height="18" className="arrow-right"/>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ---------- About (DAIZUについて) ----------
const About = () => (
  <section id="about" className="section border-t border-line">
    <div className="container-x">
      <div className="row-with-label">
        <div className="label-side pt-2">ABOUT</div>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h2 className="font-jp-serif font-medium text-[26px] md:text-[32px] leading-[1.55] text-ink">
              TikTok LIVE領域から、<br/>配信体験を設計する。
            </h2>
            <div className="mt-6 text-[14.5px] leading-[2.1] text-ink2/85">
              <p>DAIZUは、TikTok LIVE領域で配信演出とクリエイティブ支援を行う会社です。</p>
              <p className="mt-4">自社SaaS「LiveSpark」と配信事務所運営で得た現場知見をもとに、配信者・事務所が使いやすい演出を設計します。</p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="max-w-[420px] mx-auto md:ml-auto md:mr-0">
              <div className="label-side mb-3">01 / OUR ORIGIN</div>
              <div className="overflow-hidden border border-line bg-paper2/30">
                <img src="assets/about-soybean.webp" alt="DAIZUの名前の由来を表す大豆のビジュアル" loading="lazy"
                     className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Services Overview (4 areas) ----------
const ServicesOverview = () => {
  const areas = [
    {
      tag: "Core Product",
      icon: <Icon.Spark width="22" height="22" className="text-ink"/>,
      title: "LiveSpark — 配信演出SaaS",
      lead: "TikTok LIVE配信者向けの自社SaaS。",
      body: "ギフト・コメント・いいねに反応する配信オーバーレイを提供。OBSやTikTok Live Studioのブラウザソースで導入できます。",
      tags: ["TikTok LIVE領域", "OBS対応", "リアルタイム演出", "自社SaaS"],
    },
    {
      tag: "Custom Creative",
      icon: <Icon.Play width="22" height="22" className="text-ink"/>,
      title: "カスタムオーバーレイ / 配信演出制作",
      lead: "配信者・事務所・イベント向けの専用演出。",
      body: "ギフト演出、コメント表示、ランキング、目標達成演出など、配信の盛り上がりにつながる画面体験を制作します。",
      tags: ["カスタムオーバーレイ", "ギフト演出", "コメント演出", "事務所向け"],
    },
    {
      tag: "Live Management",
      icon: <Icon.Hands width="22" height="22" className="text-ink"/>,
      title: "配信事務所運営 / ライバー支援",
      lead: "配信現場で得た知見をプロダクトに反映。",
      body: "配信事務所運営・ライバー支援で得た現場知見を、LiveSparkやカスタム制作に反映します。",
      tags: ["配信事務所運営", "ライバー支援", "現場知見", "PC配信導入"],
    },
    {
      tag: "Animation / SNS Creative",
      icon: <Icon.Pen width="22" height="22" className="text-ink"/>,
      title: "ギフトアニメーション / SNSクリエイティブ",
      lead: "配信現場で使われるテンポと見え方を設計。",
      body: "ギフトアニメーション、ショート動画素材、スタンプ、バナーなどを制作します。",
      tags: ["ギフトアニメーション", "スタンプ制作", "SNS投稿画像", "キャラクター活用"],
    },
  ];
  return (
    <section id="services" className="section border-t border-line bg-paper2/40">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2">SERVICES<br/>OVERVIEW</div>
          <div>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-jp-serif font-medium text-[26px] md:text-[34px] leading-[1.5] text-ink">
                LiveSparkを中核に、配信領域の表現を広げる。
              </h2>
              <div className="mt-5 text-[13.5px] leading-[2] text-mute">
                SaaS、カスタム制作、事務所運営の知見、SNSクリエイティブを一体で提供します。
              </div>
              <div className="mt-6 mx-auto w-16 h-px gold-line"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {areas.map((a) => (
                <div key={a.title} className="card p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-full border border-line flex items-center justify-center">{a.icon}</div>
                    <span className="label-side text-right leading-[1.6]">{a.tag}</span>
                  </div>
                  <h3 className="font-jp-serif font-semibold text-[17px] leading-[1.5] text-ink">{a.title}</h3>
                  <div className="mt-2 text-[12.5px] text-gold2 tracking-wide">{a.lead}</div>
                  <p className="mt-4 text-[13.5px] leading-[2] text-ink2/85 flex-1">{a.body}</p>
                  <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-2">
                    {a.tags.map(t => (
                      <span key={t} className="text-[11.5px] tracking-wide px-2.5 py-1 border border-line text-mute">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Service Detail blocks (SNS / AI / Web) ----------
const ServiceDetail = ({label, num, title, lead, body, bullets, side}) => (
  <section className="section border-t border-line">
    <div className="container-x">
      <div className="row-with-label">
        <div className="label-side pt-2 whitespace-pre-line">{label}</div>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <div className="font-mono text-[12px] tracking-[0.2em] text-gold2">{num}</div>
            <h2 className="mt-3 font-jp-serif font-semibold text-[26px] md:text-[34px] leading-[1.4] text-ink">{title}</h2>
            <div className="mt-4 text-[14px] leading-[2] text-ink2/85 max-w-[640px]">{lead}</div>
            {body && <div className="mt-4 text-[13.5px] leading-[2] text-mute max-w-[640px]">{body}</div>}
            {bullets && (
              <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-[640px]">
                {bullets.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-ink2/90">
                    <Icon.Check width="16" height="16" className="text-gold2 mt-1 shrink-0"/>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="md:col-span-5">{side}</div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Naming (名前に込めた想い) ----------
const Naming = () => (
  <section className="section border-t border-line bg-paper2/40">
    <div className="container-x">
      <div className="row-with-label">
        <div className="label-side pt-2">OUR NAME</div>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <h2 className="font-jp-serif font-medium text-[28px] md:text-[36px] leading-[1.45] text-ink">
              小さくても、<br/>何にでもなれる。
            </h2>
            {/* dot trail with gold sparkle */}
            <div className="mt-10 flex items-center gap-4 text-mute2">
              <span className="w-2.5 h-2.5 rounded-full border border-mute2"></span>
              <span className="flex-1 h-px bg-line"></span>
              <span className="w-3 h-3 rounded-full border border-mute2"></span>
              <span className="flex-1 h-px bg-line"></span>
              <span className="w-3.5 h-3.5 rounded-full border border-gold"></span>
              <span className="flex-1 h-px bg-line"></span>
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-gold">
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="currentColor"/>
              </svg>
              <span className="flex-1 h-px bg-line"></span>
              <Icon.Logo size={26} className="text-ink"/>
            </div>
          </div>
          <div className="md:col-span-7 text-[14px] leading-[2.2] text-ink2/85">
            DAIZUという名前は、「大豆は小さくても、何にでもなれる」という想いから。<br/>
            SaaS開発、配信演出、事務所運営、AI/Web支援まで、必要に応じて形を変えながら価値を届けます。
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Strengths (DAIZUの強み) ----------
const Strengths = () => {
  const items = [
    { icon: <Icon.Play width="22" height="22"/>,  title: "TikTok LIVE領域への理解",      body: "リアルタイムな盛り上がりを踏まえて設計します。" },
    { icon: <Icon.Hands width="22" height="22"/>, title: "配信事務所運営で得た現場知見", body: "配信者・事務所側の困りごとを理解しています。" },
    { icon: <Icon.Code width="22" height="22"/>,  title: "自社SaaS運営による実装力",     body: "使いやすい管理画面と演出を磨いています。" },
    { icon: <Icon.Speed width="22" height="22"/>, title: "AIを活用したスピード感",       body: "企画から試作、改善まで素早く具体化します。" },
  ];
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2">WHY DAIZU</div>
          <div>
            <div className="max-w-3xl">
              <h2 className="font-jp-serif font-medium text-[26px] md:text-[34px] leading-[1.5] text-ink">
                配信現場とSaaS運営の両方を知るから、<br className="hidden md:block"/>
                実用的な提案ができる。
              </h2>
            </div>
            <div className="mt-12 grid md:grid-cols-4 gap-4">
              {items.map((i, idx) => (
                <div key={i.title} className="card p-6 relative">
                  {idx === 0 && (
                    <span className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.2em] text-gold2">MAIN</span>
                  )}
                  <div className={`w-11 h-11 rounded-full border ${idx === 0 ? "border-gold text-gold2" : "border-line text-ink"} flex items-center justify-center mb-5`}>{i.icon}</div>
                  <h3 className="font-jp-serif font-semibold text-[15px] leading-[1.6] text-ink">{i.title}</h3>
                  <p className="mt-3 text-[12.5px] leading-[1.9] text-mute">{i.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Consultation Examples ----------
const Consultation = () => {
  const cases = [
    "所属ライバー向けにLiveSparkを導入したい",
    "配信画面の演出を整えたい",
    "カスタムオーバーレイを作りたい",
    "ギフトやコメントに反応する演出を作りたい",
    "配信事務所向けの導入フローを相談したい",
    "PC配信やTikTok Live Studioの導入を整理したい",
    "ギフトアニメーションやSNS素材を制作したい",
    "AIで制作・運用を速くしたい",
    "サービスサイトやLPの見せ方を整えたい",
  ];
  return (
    <section className="section border-t border-line bg-paper2/40">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2 whitespace-pre-line">CONSULTATION{"\n"}EXAMPLES</div>
          <div>
            <h2 className="font-jp-serif font-medium text-[26px] md:text-[32px] leading-[1.5] text-ink">
              配信演出の導入前から、事務所・法人向けの相談まで。
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cases.map(c => (
                <div key={c} className="card px-5 py-5 flex items-start gap-3">
                  <Icon.Check width="18" height="18" className="text-gold mt-0.5 shrink-0"/>
                  <span className="text-[13px] leading-[1.7] text-ink2/90">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Header = Header;
window.Hero = Hero;
window.About = About;
window.ServicesOverview = ServicesOverview;
window.ServiceDetail = ServiceDetail;
window.Naming = Naming;
window.Strengths = Strengths;
window.Consultation = Consultation;
