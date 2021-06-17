import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1623942615445 implements MigrationInterface {
    name = 'firstMigration1623942615445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "done" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
