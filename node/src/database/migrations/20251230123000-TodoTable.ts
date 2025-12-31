import { MigrationInterface, QueryRunner } from "typeorm";

export class TodoTable20251230123000 implements MigrationInterface {
    name = 'TodoTable20251230123000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "todos" (
                "id" SERIAL PRIMARY KEY,
                "title" VARCHAR(50) NOT NULL,
                "content" TEXT NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now()
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`);
    }
}