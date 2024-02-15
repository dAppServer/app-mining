import { Module } from "danet/mod.ts";
import {XmrigService} from "./src/xmrig/xmrig.service.ts";

@Module({
    controllers: [

    ],
    injectables: [
        XmrigService
    ],
})
export class AppsModule {}
