# node-postgresql-typeorm  
Node.jsAPI  
Postmanで確認

## 全体の処理フロー
HTTP Request  
  ↓  
Controller(validation)  
  ↓  
Service(存在チェック)  
  ↓  
Repository(DB)  
  ↓  
Service  
  ↓  
Controller  
  ↓  
HTTP Response  

## 環境構築  

### .env作成  
ルートディレクトリで実行  
cp .env.sample .env  

### Nodeコンテナ  
$cd node  
$docker exec -it node sh  

### マイグレーション生成  
npm run migration:generate  

### マイグレーション実行  
npm run migration:run  

### シーディング実行  
npm run seed:run  

## pgAdmin設定  
pgAdminについて  
https://itsakura.com/pgadmin4-db-create  

### サーバー接続設定  
host: db  
port: 5432  
maintenance database: todo_db or postgres  
username: postgres  
password: postgres  

## API接続  
http://localhost:3000/api/todos  
todoの一覧取得→レスポンスが返ることを確認  

## API構成  
| 内容 | メソッド | URI |
|------|--------|-----|
| 全 Todo データを取得 | GET | /api/todos |
| Todo の ID に紐づく単一の Todo データを取得 | GET | /api/todos/:id |
| Todo 新規作成 | POST | /api/todos |
| Todo 更新 | PUT | /api/todos/:id |
| Todo 削除 | DELETE | /api/todos/:id |
