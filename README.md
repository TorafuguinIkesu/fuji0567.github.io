# FUJI 0567

Astro で作る、白黒ミニマルな個人ブログです。公開先は
`https://fuji0567.github.io/` を想定しています。

## 記事の追加

`src/content/blog/` に Markdown ファイルを追加します。最初からある
`first-post.md` は公開されない下書きサンプルです。コピーして使うか、
削除して大丈夫です。

```md
---
title: "記事タイトル"
description: "記事の短い説明。検索結果やSNSで使われます。"
pubDate: 2026-08-26
tags: ["日記", "技術"]
draft: false
---

ここから本文です。
```

`draft: true` の記事は、ブログ一覧・タグ・RSS・公開ページのすべてから
除外されます。公開するときは `false` に変えてください。

## ローカルで確認

```sh
npm install
npm run dev
```

公開用の確認は `npm run build` です。

## GitHub Pages の初回設定

このリポジトリの **Settings → Pages** で、Source を **GitHub Actions** に
一度だけ変更します。以後 `main` ブランチへ push するたびに、
`.github/workflows/deploy.yml` が自動公開します。

独自ドメインを使わない現在の設定では、Astro の `site` は
`https://fuji0567.github.io/` です。変更する場合は `astro.config.mjs` と
必要に応じて GitHub Pages の Custom domain を更新してください。
