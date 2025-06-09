// HighScoreDisplay.tsx
import React from "react";
import styles from "./HightScoreDisplay.module.css";
import DropDown from "./DropDown/DropDown";

interface RowData {
  sr: number;
  name: string;
  speed: string;
  time: string;
}

const HighScoreDisplay: React.FC = () => {
  // Hardcoded data based on the provided image
  const data: RowData[] = [
    { sr: 1, name: "keegant", speed: "232 wpm", time: "59 minutes ago" },
    {
      sr: 2,
      name: "last.fm/user/xX0T1Xx (hospitalforsouls2)",
      speed: "186 wpm",
      time: "53 minutes ago",
    },
    { sr: 3, name: "clergy", speed: "181 wpm", time: "14 minutes ago" },
    {
      sr: 4,
      name: "GeekWho (hazard)",
      speed: "177 wpm",
      time: "48 minutes ago",
    },
    {
      sr: 5,
      name: "prince (lumsyn)",
      speed: "174 wpm",
      time: "42 minutes ago",
    },
    {
      sr: 6,
      name: "Max (17maxkxlivans)",
      speed: "169 wpm",
      time: "38 minutes ago",
    },
    {
      sr: 7,
      name: "tzyke (tzy_dvorak)",
      speed: "167 wpm",
      time: "6 minutes ago",
    },
    { sr: 8, name: "tspmoici", speed: "160 wpm", time: "9 minutes ago" },
    { sr: 9, name: "Rina (rina23)", speed: "151 wpm", time: "50 minutes ago" },
    {
      sr: 10,
      name: "warfaren3 (an66)",
      speed: "150 wpm",
      time: "20 minutes ago",
    },
    {
      sr: 11,
      name: "WhyAre (novelbear)",
      speed: "146 wpm",
      time: "59 minutes ago",
    },
    {
      sr: 12,
      name: "Euwern (euwerneese)",
      speed: "146 wpm",
      time: "38 minutes ago",
    },
    {
      sr: 13,
      name: "relativelyokaytyper2006 (liaharem)",
      speed: "145 wpm",
      time: "40 minutes ago",
    },
    {
      sr: 14,
      name: "Abishiek (abishiek_12)",
      speed: "143 wpm",
      time: "4 minutes ago",
    },
    {
      sr: 15,
      name: "Bun Bū Hué (wynos)",
      speed: "140 wpm",
      time: "17 seconds ago",
    },
    {
      sr: 16,
      name: "Musashi (noble_addition)",
      speed: "137 wpm",
      time: "12 minutes ago",
    },
    {
      sr: 17,
      name: "Christ is King (buhcky)",
      speed: "137 wpm",
      time: "19 minutes ago",
    },
    {
      sr: 18,
      name: "Luis (logarithmicluis)",
      speed: "136 wpm",
      time: "36 minutes ago",
    },
    {
      sr: 19,
      name: "Kolock (kolock)",
      speed: "135 wpm",
      time: "11 minutes ago",
    },
    {
      sr: 20,
      name: "Arl (arlimgibson)",
      speed: "134 wpm",
      time: "40 minutes ago",
    },
  ];

  return (
    <div className={styles.container}>
      <DropDown />
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.srColumn}> </th>

            <th>Name</th>
            <th>Speed</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.sr}>
              <td className={styles.srColumn}>{row.sr}</td>
              <td className={styles.nameCl}>{row.name}</td>
              <td className={styles.speedCl}>{row.speed}</td>
              <td className={styles.timeCl}>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreDisplay;
