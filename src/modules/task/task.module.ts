import { Module } from "@nestjs/common";
import { StatusModule } from "../status/status.module";
import { UserModule } from "../user/user.module";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";

@Module({
    providers: [TaskService],
    controllers: [TaskController],
    imports: [UserModule, StatusModule]
})
export class TaskModule {}