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
