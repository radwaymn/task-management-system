import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusController } from "./status.controller";
import { StatusEntity } from "./status.entity";
import { StatusService } from "./status.service";

@Module({
    providers: [StatusService],
    controllers: [StatusController],
    exports: [StatusService]
})
export class StatusModule {}