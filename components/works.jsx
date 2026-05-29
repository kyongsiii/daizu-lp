// Works, Flow, Company, CTA, Footer

// ---------- Works ----------
// Replaceable: edit src URLs in #works-data or pass `image` prop in WorksItem
const WorksPlaceholder = ({tone, title}) => {
  // Placeholders use tonal blocks + monospace label so user can swap the <img> later
  const palette = {
    dark:   { bg:"#0E0E10", fg:"#E6D5AE" },
    purple: { bg:"#2A1B3D", fg:"#E6D5AE" },
    cream:  { bg:"#F4EFE2", fg:"#0E0E10" },
    device: { bg:"#FBFAF7", fg:"#0E0E10" },
    light:  { bg:"#F2EEE3", fg:"#0E0E10" },
  }[tone] || { bg:"#F4F2EC", fg:"#0E0E10" };

  return (
    <div className="aspect-[4/3] w-full ph-stripe relative overflow-hidden border border-line"
         style={{background: palette.bg, color: palette.fg}}>
      {/* corner ticks */}
      <span className="absolute top-2 left-2 w-3 h-3 border-l border-t" style={{borderColor:"currentColor", opacity:0.4}}></span>
      <span className="absolute top-2 right-2 w-3 h-3 border-r border-t" style={{borderColor:"currentColor", opacity:0.4}}></span>
      <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b" style={{borderColor:"currentColor", opacity:0.4}}></span>
      <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b" style={{borderColor:"currentColor", opacity:0.4}}></span>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-[10.5px] tracking-[0.18em] opacity-70">[ {title} ]</span>
      </div>
    </div>
  );
};

const userGrowthData = [
  { period: "3/31", users: 4 },
  { period: "4/20", users: 4 },
  { period: "4/25", users: 15 },
  { period: "4/30", users: 68 },
  { period: "5/7", users: 224 },
  { period: "5/14", users: 394 },
  { period: "5/21", users: 544 },
  { period: "5/29", users: 750 },
];

const UserGrowthChart = () => {
  const [isCompact, setIsCompact] = React.useState(() => window.innerWidth < 640);

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsCompact(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const chartData = isCompact
    ? userGrowthData.filter((_, i) => [0, 2, 3, 4, 6, 7].includes(i))
    : userGrowthData;
  const width = isCompact ? 360 : 760;
  const height = isCompact ? 250 : 280;
  const pad = isCompact
    ? { top: 24, right: 18, bottom: 42, left: 42 }
    : { top: 24, right: 30, bottom: 46, left: 54 };
  const maxUsers = 800;
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const baseY = pad.top + plotH;
  const points = chartData.map((d, i) => ({
    ...d,
    x: pad.left + (plotW * i) / (chartData.length - 1),
    y: baseY - (d.users / maxUsers) * plotH,
  }));
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${baseY} L ${points[0].x} ${baseY} Z`;
  const yTicks = [0, 200, 400, 600, 800];

  return (
    <div className="mb-14 border border-line bg-paper p-5 md:p-7">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-6">
        <div>
          <div className="label-side mb-2">USER GROWTH</div>
          <h3 className="font-jp-serif font-semibold text-[20px] md:text-[24px] leading-[1.45] text-ink">
            LiveSpark登録ユーザー数の推移
          </h3>
          <p className="mt-2 text-[12.5px] leading-[1.8] text-mute max-w-[620px]">
            2026年3月末から5月末までの登録ユーザー数を累計で集計。TikTok LIVE配信者を中心に利用が広がっています。
          </p>
        </div>
        <div className="text-left md:text-right shrink-0">
          <div className="font-jp-serif font-semibold text-[34px] md:text-[42px] leading-none text-ink">
            750<span className="text-[18px] md:text-[22px] text-gold">+</span>
          </div>
          <div className="mt-1 text-[11px] tracking-[0.14em] text-gold2">REGISTERED USERS</div>
        </div>
      </div>

      <div>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label="LiveSpark登録ユーザー数の推移グラフ。横軸は時期、縦軸は人数。"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="userGrowthFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#C5A35D" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#C5A35D" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <line x1={pad.left} y1={baseY} x2={width - pad.right} y2={baseY} stroke="#D8D0C2" strokeWidth="1" />
          <line x1={pad.left} y1={pad.top} x2={pad.left} y2={baseY} stroke="#D8D0C2" strokeWidth="1" />

          {yTicks.map((tick) => {
            const y = baseY - (tick / maxUsers) * plotH;
            return (
              <g key={tick}>
                <line x1={pad.left} y1={y} x2={width - pad.right} y2={y} stroke="#E7E0D4" strokeWidth="1" strokeDasharray={tick === 0 ? "0" : "4 7"} />
                <text x={pad.left - 12} y={y + 4} textAnchor="end" className="fill-mute" fontSize="11">{tick}</text>
              </g>
            );
          })}

          <path d={areaPath} fill="url(#userGrowthFill)" />
          <path d={linePath} fill="none" stroke="#9D7A32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {points.map((p, i) => {
            const isLast = i === points.length - 1;
            return (
              <g key={p.period}>
                <line x1={p.x} y1={baseY} x2={p.x} y2={baseY + 5} stroke="#B8AA91" strokeWidth="1" />
                <text x={p.x} y={baseY + 23} textAnchor="middle" className="fill-mute" fontSize="11">{p.period}</text>
                <circle cx={p.x} cy={p.y} r={isLast ? 5 : 4} fill={isLast ? "#0E0E10" : "#FBFAF7"} stroke="#9D7A32" strokeWidth="2" />
                {isLast && (
                  <g>
                    <rect x={p.x - 31} y={p.y - 35} width="62" height="22" fill="#0E0E10" rx="11" />
                    <text x={p.x} y={p.y - 20} textAnchor="middle" fill="#E6D5AE" fontSize="11" fontWeight="600">750+</text>
                  </g>
                )}
              </g>
            );
          })}

          <text x={pad.left} y={height - 5} className="fill-mute" fontSize="11">時期</text>
          <text x="0" y="12" className="fill-mute" fontSize="11">人数</text>
        </svg>
      </div>

      <p className="mt-3 text-[11px] leading-[1.7] tracking-wide text-mute">
        ※数値は2026年5月29日時点・自社集計です。個人情報は含めず、登録日時のみを集計しています。
      </p>
    </div>
  );
};

const Works = () => {
  const data = JSON.parse(document.getElementById('works-data').textContent);
  return (
    <section id="works" className="section border-t border-line">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2">WORKS</div>
          <div>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <h2 className="font-jp-serif font-medium text-[26px] md:text-[34px] leading-[1.4] text-ink">
                Works / Output
              </h2>
              <span className="label-side">制作実績の一部イメージ。ビジュアルベースでご紹介します。</span>
            </div>

            {/* numbers bar */}
            <div className="border-y border-line py-7 mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {[
                { num: "750", suffix: "+", label: "LiveSpark登録ユーザー", sub: "TikTok LIVE配信者を中心に利用拡大中", highlight: true },
                { num: "250", suffix: "+", label: "Proユーザー",           sub: "月額利用者が継続的に増加", highlight: true },
                { num: "2",   suffix: "年", label: "配信事務所運営",         sub: "ライバー支援・配信現場で培った知見" },
                { num: "50",  suffix: "+", label: "制作実績",               sub: "オーバーレイ・ギフトアニメーション・SNS素材など" },
                { num: "3",   suffix: "",  label: "運用中アカウント",       sub: "SNS / 配信ノウハウを蓄積" },
              ].map((s, i) => (
                <div key={i} className={`flex flex-col ${i < 2 ? "lg:pr-8 lg:border-r lg:border-line" : ""}`}>
                  <div className="flex items-baseline gap-1">
                    <span className={`font-jp-serif font-semibold text-[36px] md:text-[52px] leading-none tabular-nums ${s.highlight ? "text-ink" : "text-ink"}`}>{s.num}</span>
                    <span className={`font-jp-serif text-[18px] md:text-[22px] ${s.highlight ? "text-gold" : "text-gold2"}`}>{s.suffix}</span>
                  </div>
                  <div className={`mt-2 text-[12px] tracking-[0.14em] ${s.highlight ? "text-gold" : "text-gold2"}`}>{s.label}</div>
                  <div className="mt-1 text-[11.5px] text-mute leading-[1.7] hidden sm:block">{s.sub}</div>
                </div>
              ))}
            </div>
            <p className="-mt-8 mb-12 text-[11px] leading-[1.8] tracking-wide text-mute">
              ※数値は2026年5月時点・自社集計です。
            </p>

            <UserGrowthChart />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {data.map((w, i) => (
                <figure key={i} className="group" data-works-slot={i}>
                  {w.image ? (
                    <div className="aspect-[4/3] w-full overflow-hidden border border-line bg-paper">
                      <img src={w.image} alt={w.title} loading="lazy"
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                  ) : (
                    <WorksPlaceholder tone={w.tone} title={w.title}/>
                  )}
                  <figcaption className="mt-4">
                    <div className="font-jp-serif text-[15.5px] text-ink">{w.title}</div>
                    <div className="text-[12px] tracking-wide text-mute mt-1.5">{w.caption}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Flow ----------
const Flow = () => {
  const steps = [
    { n:"01", icon:<Icon.Hearing width="22" height="22"/>, title:"ヒアリング",   body:"配信環境、導入目的、演出イメージ、現在の課題をお伺いします。" },
    { n:"02", icon:<Icon.Doc     width="22" height="22"/>, title:"課題整理",     body:"配信者・事務所・視聴者それぞれの目線で、必要な演出や導入方法を整理します。" },
    { n:"03", icon:<Icon.Bulb    width="22" height="22"/>, title:"企画・ラフ提案", body:"オーバーレイ、アニメーション、導入導線、運用方法などの方向性をご提案します。" },
    { n:"04", icon:<Icon.Code    width="22" height="22"/>, title:"制作・実装",   body:"LiveSparkや各種制作物に反映し、実際に使える形まで整えます。" },
    { n:"05", icon:<Icon.Chart   width="22" height="22"/>, title:"運用・改善",   body:"導入後の反応や使い勝手を見ながら、改善・追加提案を行います。" },
  ];
  return (
    <section className="section border-t border-line bg-paper2/40">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2">FLOW</div>
          <div>
            <h2 className="font-jp-serif font-medium text-[26px] md:text-[34px] leading-[1.4] text-ink mb-12">Flow</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((s, idx) => (
                <div key={s.n} className="relative">
                  <div className="card p-6 h-full">
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-7 h-7 rounded-full border border-gold text-gold2 flex items-center justify-center font-mono text-[11px]">{s.n}</span>
                      <span className="text-ink">{s.icon}</span>
                    </div>
                    <h3 className="font-jp-serif font-semibold text-[15px] text-ink">{s.title}</h3>
                    <p className="mt-3 text-[12.5px] leading-[1.9] text-mute">{s.body}</p>
                  </div>
                  {idx < steps.length-1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 items-center justify-center text-gold pointer-events-none -translate-y-1/2">
                      <Icon.ArrowRight width="14" height="14"/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Company ----------
const Company = () => {
  const rows = [
    ["会社名", "DAIZU合同会社"],
    ["代表",   "佐々木 響介"],
    ["設立",   "2024年9月"],
    ["所在地", "〒150-0002 東京都渋谷区渋谷2-19-15 宮益坂ビルディング619"],
    ["事業内容","配信演出SaaS「LiveSpark」の開発・運営\nTikTok LIVE向けカスタムオーバーレイ制作\n配信事務所運営 / ライバー支援\nギフトアニメーション / SNSクリエイティブ制作\nAI活用支援 / Web・LP制作"],
    ["Mail",   "sasaki@daizuinc.jp"],
    ["TEL",    "090-7673-0307"],
  ];
  return (
    <section id="company" className="section border-t border-line">
      <div className="container-x">
        <div className="row-with-label">
          <div className="label-side pt-2 whitespace-pre-line">ABOUT{"\n"}COMPANY</div>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <h2 className="font-jp-serif font-medium text-[26px] md:text-[34px] leading-[1.4] text-ink mb-6">About DAIZU</h2>
              <div className="text-[13.5px] leading-[2.1] text-ink2/85">
                <p>DAIZU合同会社は、TikTok LIVEを中心としたライブ配信領域で、配信演出SaaS「LiveSpark」の開発・運営、カスタムオーバーレイ制作、配信事務所運営・ライバー支援、ギフトアニメーション制作、AIを活用したクリエイティブ支援を行う会社です。</p>
                <p className="mt-4">配信者、ライバー事務所、関連企業に向けて、配信現場で実際に使われる演出と、導入しやすい仕組みづくりを支援します。</p>
              </div>
            </div>
            <div className="md:col-span-7">
              <dl className="border-t border-line">
                {rows.map(([k,v]) => (
                  <div key={k} className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] gap-4 py-4 border-b border-line">
                    <dt className="text-[12px] tracking-[0.14em] text-gold2 pt-1">{k}</dt>
                    <dd className="text-[13.5px] leading-[1.85] text-ink2/90 whitespace-pre-line">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- Final CTA ----------
const ContactForm = () => {
  const [state, setState] = React.useState({ name:"", company:"", email:"", category:"LiveSpark導入相談", message:"" });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setState({ ...state, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `【お問い合わせ】${state.category} / ${state.company || state.name}`;
    const body =
      `お名前: ${state.name}\n` +
      `会社名: ${state.company}\n` +
      `ご連絡先: ${state.email}\n` +
      `ご相談カテゴリ: ${state.category}\n\n` +
      `── ご相談内容 ──\n${state.message}\n`;
    window.location.href = `mailto:sasaki@daizuinc.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputCls = "w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-[14px] text-ink placeholder:text-mute2 transition-colors";
  const labelCls = "block text-[11px] tracking-[0.18em] text-gold2 mb-1";

  return (
    <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
      <div className="sm:col-span-1">
        <label className={labelCls}>お名前 <span className="text-gold">*</span></label>
        <input required value={state.name} onChange={update('name')} className={inputCls} placeholder="山田 太郎" />
      </div>
      <div className="sm:col-span-1">
        <label className={labelCls}>会社名</label>
        <input value={state.company} onChange={update('company')} className={inputCls} placeholder="株式会社○○" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls}>ご連絡先 <span className="text-gold">*</span></label>
        <input required type="email" value={state.email} onChange={update('email')} className={inputCls} placeholder="you@example.com" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls}>ご相談カテゴリ</label>
        <select value={state.category} onChange={update('category')} className={inputCls + " appearance-none bg-paper"}>
          <option>LiveSpark導入相談</option>
          <option>カスタムオーバーレイ制作</option>
          <option>配信事務所・ライバー支援</option>
          <option>ライバー事務所・法人提携</option>
          <option>ギフトアニメーション制作</option>
          <option>AI活用支援</option>
          <option>Web・LP制作</option>
          <option>その他</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls}>ご相談内容</label>
        <textarea required rows="4" value={state.message} onChange={update('message')} className={inputCls + " resize-none"} placeholder="現在のお悩みや、お問い合わせ内容をご記入ください。"></textarea>
      </div>
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
        <span className="text-[11.5px] tracking-wide text-mute">送信ボタンでメーラーが起動します。直接送信される方は <a href="mailto:sasaki@daizuinc.jp" className="text-gold2 underline">sasaki@daizuinc.jp</a></span>
        <button type="submit" className="btn-gold inline-flex items-center justify-between gap-8 px-7 py-4 text-[13px] tracking-[0.16em]">
          <span>{sent ? "送信しました" : "内容を送信する"}</span>
          <Icon.ArrowRight width="18" height="18" className="arrow-right"/>
        </button>
      </div>
    </form>
  );
};

const FinalCTA = () => (
  <section id="contact" className="section border-t border-line">
    <div className="container-x">
      <div className="row-with-label">
        <div className="label-side pt-2">CONTACT</div>
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="font-jp-serif font-semibold text-[30px] md:text-[42px] leading-[1.4] text-ink">
              配信演出・導入相談・<br/>提携のご相談はこちら。
            </h2>
            <p className="mt-5 text-[13.5px] leading-[2] text-ink2/85 max-w-[440px]">
              LiveSparkの導入相談、カスタムオーバーレイ制作、配信事務所・ライバー支援、ギフトアニメーション制作、ライバー事務所・関連企業様との提携相談まで、お気軽にご相談ください。
              <br/><br/>
              企画段階のご相談から、導入方法の整理、制作・運用、契約・請求まわりの事前確認まで柔軟に対応します。
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-[12.5px] text-gold2 tracking-wide">
              <span className="dot-gold"></span>
              <span>配信者・事務所・法人向けの相談に対応します</span>
            </div>
          </div>
          <div className="md:col-span-7">
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Footer ----------
const Footer = () => (
  <footer className="border-t border-line py-10">
    <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
      <div className="flex items-center gap-2.5">
        <Icon.Logo size={22}/>
        <span className="font-jp-serif font-semibold tracking-[0.2em] text-[13px]">DAIZU, LLC</span>
      </div>
      <div className="font-mono text-[10.5px] tracking-[0.2em] text-mute">
        TikTok LIVE SaaS / Live Management / Creative Support
      </div>
      <div className="font-mono text-[10.5px] tracking-[0.18em] text-mute2">
        © 2026 DAIZU合同会社
      </div>
    </div>
  </footer>
);

window.Works = Works;
window.Flow = Flow;
window.Company = Company;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
window.WorksPlaceholder = WorksPlaceholder;
