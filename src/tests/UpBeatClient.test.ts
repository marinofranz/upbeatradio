import { UpBeatClient } from "../index";
const Client = new UpBeatClient();

test("UpBeatStats", () => {
    Client.getStats().then(({ data }) => {
        expect(data).toHaveProperty("listeners");
    });
});

test("RecentlyPlayed", () => {
    Client.getRecentlyPlayed().then(({ data }) => {
        expect(data[0]).toHaveProperty("title");
    });
});

test("Booked", () => {
    Client.getBooked().then(({ data }) => {
        expect(data[0]).toHaveProperty("name");
    })
});