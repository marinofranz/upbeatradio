import { AxiosResponse } from "axios";
import { RecentlyPlayed, Booked, UpBeatStats } from "../@types/types";
import { base } from "../constants";
import { HTTP } from "./HTTP";

export class UpBeatClient extends HTTP {
    public constructor(){
        super(base);
    }

    public getStats(): Promise<AxiosResponse<UpBeatStats>> {
        return this.instance.get<UpBeatStats>("/stats");
    }

    public getRecentlyPlayed(): Promise<AxiosResponse<RecentlyPlayed>> {
        return this.instance.get<RecentlyPlayed>("/recentlyPlayed");
    }

    public getBooked(): Promise<AxiosResponse<Booked>> {
        return this.instance.get<Booked>("/booked");
    }
}