import { AxiosResponse } from "axios";
import { UpBeatStats } from "../@types/types";
import { base } from "../constants";
import { HTTP } from "./HTTP";

export class UpBeatClient extends HTTP {
    public constructor(){
        super(base);
    }

    public getStats(): Promise<AxiosResponse<UpBeatStats>> {
        return this.instance.get<UpBeatStats>("/stats");
    }
}