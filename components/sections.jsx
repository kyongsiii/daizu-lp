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
        <a href="#contact" className="md:hidden text-[12px] tracking-[0.14em] border border-ink px-3 py-1.5">CONTACT</a>
      </div>
    </header>
  );
};

// ---------- Hero ----------
const Hero = () => (
  <section id="top" className="relative pt-[120px] md:pt-[140px] pb-20 md:pb-28 overflow-hidden">
    <div className="container-x grid md:grid-cols-12 gap-10 md:gap-12 items-center md:min-h-[560px]">
      <div className="md:col-span-7 relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="dot-gold"></span>
          <span className="label-side">SNS Creative &nbsp;/&nbsp; AI Support &nbsp;/&nbsp; Web Production</span>
        </div>
        <h1 className="font-jp-serif font-semibold text-[44px] sm:text-[58px] md:text-[72px] leading-[1.15] tracking-[0.02em] text-ink">
          伝える、整える、<br className="hidden sm:block"/>広げる。
        </h1>
        <div className="mt-5 font-jp-serif text-[15px] md:text-[17px] tracking-[0.05em] text-gold2">
          DAIZU合同会社 &nbsp;—&nbsp; SNSクリエイティブカンパニー
        </div>
        <div className="mt-6 max-w-[560px] text-[14.5px] leading-[2] text-ink2/85">
          DAIZUは、SNS・ライブ配信クリエイティブを主軸に、企業やブランドの発信を支援するクリエイティブカンパニーです。配信オーバーレイ、ギフトアニメーション、スタンプ制作、配信事務所運営で培った見え方の知見を活かし、AI活用支援、Web制作、キャラクター活用まで、事業に合わせて柔軟にサポートします。
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="btn-gold inline-flex items-center justify-between gap-6 px-7 py-4 text-[13.5px] tracking-[0.14em]">
            <span>まずは相談してみる</span>
            <Icon.ArrowRight width="18" height="18" className="arrow-right"/>
          </a>
          <a href="#services" className="btn-ghost inline-flex items-center justify-between gap-6 px-7 py-4 text-[13.5px] tracking-[0.14em]">
            <span>サービスを見る</span>
            <Icon.ArrowRight width="18" height="18" className="arrow-right"/>
          </a>
        </div>
      </div>
      <div className="md:col-span-5 relative flex items-center justify-center">
        {/* soft gold halo behind logo */}
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[78%] aspect-square rounded-full"
               style={{background: "radial-gradient(circle, rgba(184,149,86,0.14), rgba(184,149,86,0) 65%)"}}></div>
        </div>
        <img src="assets/hero-logo-3d.webp" alt="" fetchpriority="high"
             className="relative w-full max-w-[440px] h-auto select-none"
             style={{filter: "drop-shadow(0 24px 40px rgba(14,14,16,0.18)) drop-shadow(0 8px 14px rgba(14,14,16,0.10))"}}
             draggable="false" />
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
              SNS時代の表現力で、<br/>事業の伝わり方を変える。
            </h2>
            <div className="mt-6 text-[14.5px] leading-[2.1] text-ink2/85">
              DAIZU合同会社は、ライブ配信・SNS領域のクリエイティブ制作を軸に、企業や個人の「伝える」を支援する会社です。SNS時代の表現力とAI活用のスピードを武器に、Web制作、キャラクター活用、AI活用支援、DX相談など、事業に合わせて柔軟に幅を広げています。
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="max-w-[420px] mx-auto md:ml-auto md:mr-0">
              <div className="label-side mb-3">01 / OUR ORIGIN</div>
              <div className="overflow-hidden border border-line bg-paper2/30">
                <img src="assets/about-soybean.webp" alt="" loading="lazy"
                     className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Services Overview (3 areas) ----------
const ServicesOverview = () => {
  const areas = [
    {
      tag: "Main Business",
      icon: <Icon.Play width="22" height="22" className="text-ink"/>,
      title: "SNS・ライブ配信クリエイティブ",
      lead: "DAIZUの主力事業。自社オーバーレイSaaS「LiveSpark」も運営。",
      body: "配信オーバーレイ、ギフトアニメーション、スタンプ、ショート動画演出、バナー、配信演出など、配信の現場で求められるビジュアルを制作しています。",
      tags: ["LiveSpark", "配信オーバーレイ", "ギフトアニメーション", "スタンプ制作", "配信事務所運営"],
    },
    {
      tag: "Support Area",
      icon: <Icon.AI width="22" height="22" className="text-ink"/>,
      title: "AI活用支援 / DX相談",
      lead: "AIだけのクライアントを引き受けます。",
      body: "AIの活用相談、業務の見直し、発信・制作実務の整理、システム連携の整理、簡易プロトタイプ制作などに対応します。",
      tags: ["AI活用相談", "業務改善", "整わら", "外部連携"],
    },
    {
      tag: "Web Production",
      icon: <Icon.Web width="22" height="22" className="text-ink"/>,
      title: "Web制作 / LP制作",
      lead: "SNS・キャラクター活用の知見を活かして設計します。",
      body: "事業の伝わり方を構造化し、見やすく、伝わるWebサイト・LPを制作します。必要に応じて運用までつなげる構成、公開後の改修や運用までを含めたWebサイトを支援します。",
      tags: ["コーポレートサイト", "LP制作", "サービスサイト", "運用サポート"],
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
                事業を支える、3つのサービス領域
              </h2>
              <div className="mt-5 text-[13.5px] leading-[2] text-mute">
                現在の主力であるSNS・ライブ配信クリエイティブを軸に、AI活用支援、Web制作まで柔軟にサポートします。
              </div>
              <div className="mt-6 mx-auto w-16 h-px gold-line"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {areas.map((a) => (
                <div key={a.title} className="card p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-full border border-line flex items-center justify-center">{a.icon}</div>
                    <span className="label-side">{a.tag}</span>
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
            DAIZUという名前は、「大豆は小さくても、何にでもなれる」という想いから生まれました。<br/>
            大豆は、きな粉にも、納豆にも、醤油にもなる。DAIZUも同じように、ひとつの形にとらわれず、SNSクリエイティブ、AI活用支援、Web制作、キャラクター企画など、事業に合わせて柔軟に形を変えながら、必要な価値を届けていきます。
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Strengths (DAIZUの強み) ----------
const Strengths = () => {
  const items = [
    { icon: <Icon.Play width="22" height="22"/>,  title: "SNS・配信領域で培った表現力",   body: "配信現場で求められる演出・テンポを理解した、見え方の設計が得意です。" },
    { icon: <Icon.Speed width="22" height="22"/>, title: "AIを活用したスピード感",         body: "整理・試作・検証を素早く回し、判断と着地までを早めます。" },
    { icon: <Icon.Bulb width="22" height="22"/>,  title: "若い感性と企画力",               body: "柔軟な発想で、新しい切り口の提案を行います。" },
    { icon: <Icon.Hands width="22" height="22"/>, title: "必要に応じた外部連携",           body: "事例パートナーと連携した対応ができる体制です。" },
  ];
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2">WHY DAIZU</div>
          <div>
            <div className="max-w-3xl">
              <h2 className="font-jp-serif font-medium text-[26px] md:text-[34px] leading-[1.5] text-ink">
                表現力、スピード、柔軟性。<br className="hidden md:block"/>
                DAIZUは、事業に合わせて形を変えながら伴走します。
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
    "SNSや発信の見せ方を整えたい",
    "配信用の素材が足りない",
    "オリジナルスタンプを作りたい",
    "キャラクターを活用したい",
    "ホームページを今風に整えたい",
    "AIをどう使えばいいか相談したい",
    "業務やシステムの流れを見直したい",
    "若い感性でアイデアを出してほしい",
  ];
  return (
    <section className="section border-t border-line bg-paper2/40">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2 whitespace-pre-line">CONSULTATION{"\n"}EXAMPLES</div>
          <div>
            <h2 className="font-jp-serif font-medium text-[26px] md:text-[32px] leading-[1.5] text-ink">
              まだ整理できていない段階でも、ご相談ください。
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
