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
