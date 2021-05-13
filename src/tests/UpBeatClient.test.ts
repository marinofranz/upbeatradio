import { UpBeatClient } from "../index";
const Client = new UpBeatClient();

test("should return UpBeatStats", () => {
    Client.getStats().then(({data}) => {
        expect(data.listeners).toBe(String);
    });
});