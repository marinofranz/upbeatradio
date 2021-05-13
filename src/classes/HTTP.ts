import axios, { AxiosInstance } from "axios";

declare module "axios" {
    export interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HTTP {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string){
        this.instance = axios.create({ baseURL });
    }
}