[![stars](https://img.shields.io/github/stars/marinofranz/upbeatradio?color=yellow&logo=github&style=for-the-badge)](https://github.com/marinofranz/upbeatradio)
[![forks](https://img.shields.io/github/forks/marinofranz/upbeatradio?color=green&logo=github&style=for-the-badge)](https://github.com/marinofranz/upbeatradio)
[![issues](https://img.shields.io/github/issues/marinofranz/upbeatradio?color=red&logo=github&style=for-the-badge)](https://github.com/marinofranz/upbeatradio)

<p align="center">
    <img src="https://images-ext-1.discordapp.net/external/o6Pk_1M2ATFpHyAuRz5Y4t7AslOA4g_e52ICZpApsUs/https/upbeatradio.net/Desktop.png?width=1032&height=581" alt="banner">
    <h2 align="center">UpBeatRadio</h2>
    <p align="center">Typescript Library</p>
</p>

# 📦 How to install
-   With Yarn: `yarn add upbeatradio`
-   With NPM: `npm i upbeatradio`

# 📁 Example Usage

```js
const UpBeat = require("upbeatradio");
const Client = new UpBeat.UpBeatClient();

Client.getStats().then(({ data }) => {
  console.log(data);
});
```

# 📄 Documenation

`.UpBeatClient`
<br>
The UpBeat client containing all functions (initialize the constructor to access functions)

<br>

`Client.getStats()`
<br>
Gets current metadata

<br>

`Client.getRecentlyPlayed()`
<br>
Gets recently played songs

<br>

`Client.getBooked()`
<br>
Gets booked slots