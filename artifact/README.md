---
---
# Logs存放位置

使用 [download-artifact](https://github.com/actions/download-artifact) 透過GitHub Actions儲存 log檔案

```yml
steps:
- uses: actions/checkout@v2

- uses: actions/download-artifact@v3
  with:
    name: my-artifact
    path: path/to/artifact

- name: Display structure of downloaded files
  run: ls -R
  working-directory: path/to/artifact
```
