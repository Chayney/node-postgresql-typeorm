# node-postgresql-typeorm

## 全体の処理フロー
HTTP Request
  ↓
Controller（validation）
  ↓
Service（存在チェック）
  ↓
Repository（DB）
  ↓
Service
  ↓
Controller
  ↓
HTTP Response
