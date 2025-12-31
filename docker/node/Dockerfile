# ベースイメージ
FROM node:20-alpine

# 作業ディレクトリ
WORKDIR /app

# package.json と package-lock.json をコピー
COPY node/package.json node/package-lock.json* ./

# 依存関係をインストール
RUN npm install

# TypeScript と ts-node をグローバルインストール（CLI用）
RUN npm install -g typescript ts-node

# アプリコードをコピー
COPY node . 

# ポートを開放
EXPOSE 3000

# デフォルトコマンド（開発用）
CMD ["npm", "run", "dev"]
