---
title: "在Markdown中將內容折疊"
date: 2022-05-15
categories:
  - Blog
tags:
  - Markdown
  - html
---

在 `Markdown` 格式的文章中，使用 `html` 語法 `<details><summary> SOME TEXT </summary> SOME CONTENT </details>` 此方式可達成將折疊的內容點擊後展開，但可能會遇上一個問題。

當展開後的內容，無法以正確的 `Markdown` 格式呈現，則可以加入 `markdown="1"`, `markdown="block"`, `markdown="span"` 等標籤來使內容可以正確的呈現。

範例如下:

<details markdown="1">
<summary>點擊展開</summary>

#### 這是一個列表

- Vegetables
- Fruits
- Fish

</details>

程式碼:

```markdown
<details markdown="1">
<summary>點擊展開</summary>

#### 這是一個列表

- Vegetables
- Fruits
- Fish

</details>
```
