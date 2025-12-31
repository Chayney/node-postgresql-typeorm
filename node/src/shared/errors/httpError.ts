// Errorでは全部500で返りステータスコードは不明
// 通常のErrorクラスにステータスコードは無いためhttp用に拡張

export class HttpError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        // Errorとして正しく動作するために必要
        super(message);

        this.statusCode = statusCode;
        this.name = message;
    }
}