# DAIZU合同会社 公式LP

SNS・ライブ配信クリエイティブ／AI活用支援／Web制作のクリエイティブカンパニー、
DAIZU合同会社のコーポレートランディングページ。

- 本番URL: https://daizuinc.jp
- 技術: 静的HTML + Tailwind (CDN) + React (CDN, Babel inline JSX)
- ビルド不要 / Node.js不要 / 静的ホスティングそのままでOK

---

## 📁 ファイル構成

```
.
├── index.html                  # エントリーポイント（公開時のトップ）
├── app.jsx                     # ルートReactコンポーネント
├── components/
│   ├── icons.jsx
│   ├── sections.jsx
│   └── works.jsx
├── assets/                     # 画像・ロゴ・OGP・favicon
│   └── works/
├── vercel.json                 # Vercel設定（キャッシュ・セキュリティヘッダ）
├── robots.txt
├── sitemap.xml
├── .gitignore
└── README.md                   # このファイル
```

> `DAIZU-LP-standalone.html` は1ファイル完結のオフライン配布版。
> 通常公開には使わないので `.gitignore` に入れています。

---

## 🚀 デプロイ手順（初回のみ）

### 推奨：GitHub + Vercel

#### 1. GitHubにpush

```bash
# このフォルダで
git init
git add .
git commit -m "Initial commit: DAIZU LP"

# GitHubで新規リポジトリ daizu-lp を作成し、URLを取得してから:
git remote add origin https://github.com/<YOUR_USERNAME>/daizu-lp.git
git branch -M main
git push -u origin main
```

#### 2. Vercelにインポート

1. https://vercel.com/new を開く
2. 「Import Git Repository」から `daizu-lp` を選ぶ
3. **Framework Preset = "Other"**（ビルド設定はそのままでOK）
4. 「Deploy」を押す → 30秒ほどで完了

#### 3. 独自ドメインを紐付け

1. Vercel管理画面 → プロジェクト → **Settings → Domains**
2. `daizuinc.jp` を追加
3. Vercelに表示されるDNSレコード（A or CNAME）を、
   ドメイン管理会社（お名前.com / Cloudflareなど）の
   DNS設定画面に登録
4. 数分〜数十分で `https://daizuinc.jp` が有効化（SSLも自動）

> サブドメイン `www.daizuinc.jp` も使いたい場合は、
> Vercel側で同様に追加して `daizuinc.jp` へリダイレクト設定すると◎

---

## 🔁 今後の修正フロー（毎回これだけ）

1. **Claude Designで修正を依頼**
   - 「ヒーローのコピーを変えて」「Worksに新しいカードを追加して」など
2. **更新されたファイルをこのリポジトリに反映**
   - Claude Designのプロジェクトから該当ファイルをダウンロード
   - ローカルの `daizu-lp/` 内のファイルを上書き
3. **gitでpush**
   ```bash
   git add .
   git commit -m "Update: ヒーローコピー修正"
   git push
   ```
4. **Vercelが自動デプロイ → 約30秒で本番反映**

> もっと楽にしたい場合は、Claude Designプロジェクトの
> 「Import from GitHub」機能を使うとリポジトリと直接同期できます。

---

## 🧪 ローカル確認

ビルド不要なので、お好きな静的サーバで開けばOKです。

```bash
# Pythonがあれば
python3 -m http.server 5173
# → http://localhost:5173

# Node.jsがあれば
npx serve .
```

`file://` で直接開いてもおおよそ見られますが、
fontsやReact CDNの読み込みのため、
**ローカルサーバ経由での確認を推奨**します。

---

## 🔧 主な編集ポイント

| やりたいこと | 触るファイル |
|---|---|
| ヒーロー・サービス紹介などのコピー変更 | `components/sections.jsx` |
| Works（実績）の差し替え | `index.html` 内 `#works-data` JSON ＋ `assets/works/` 画像 |
| アイコン | `components/icons.jsx` |
| 全体の配色・フォント | `index.html` 内 `tailwind.config` の `colors` / `fontFamily` |
| OGP / favicon | `assets/ogp.webp` / `assets/favicon.png` |
| メタタグ・titleタグ | `index.html` のhead内 |

---

## 📝 メモ

- 本番反映時にキャッシュが残って見える場合は、
  ブラウザのスーパーリロード（Cmd+Shift+R / Ctrl+F5）で確認してください。
- Vercelの無料プランで十分動きます（帯域100GB/月）。
- 転送量がさらに必要になったら **Cloudflare Pages**（無料・無制限）への
  乗り換えも簡単です（同じリポジトリをImportするだけ）。

---

© DAIZU合同会社
