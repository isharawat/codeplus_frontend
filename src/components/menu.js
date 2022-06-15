import styles from "../styles/menu.module.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faBullhorn,
  faClipboardCheck,
  faMessage,
  faVenus,
  faSquarePollVertical,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Menubar() {
  return (
    <div className={styles.menubox}>
      <div className={styles.logo}>CodePlus</div>
      <div>
        <button className={styles.menubutton}>
          <a href="./">
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faBullhorn} className={styles.icon} />
              </span>
              Announcement
            </div>
          </a>
        </button>
        <button className={styles.menubutton}>
          <a href="./Questions">
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className={styles.icon}
                />
              </span>
              Todo-List
            </div>
          </a>
        </button>
        <button className={styles.menubutton}>
          <a href="./Discussions">
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faMessage} className={styles.icon} />
              </span>
              Discussions
            </div>
          </a>
        </button>
        <button className={styles.menubutton}>
          <a href="./WomenCommunity/womenDes">
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faVenus} className={styles.icon} />
              </span>
              Girls Community
            </div>
          </a>
        </button>
        <button className={styles.menubutton}>
          <a href="./Leaderboard">
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon
                  icon={faSquarePollVertical}
                  className={styles.icon}
                />
              </span>
              Leaderboard
            </div>
          </a>
        </button>
        <button className={styles.menubutton}>
          <a href="./topbar/topbar">
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
              </span>
              Lockout
            </div>
          </a>
        </button>
      </div>
      <div className={styles.footer}>
        <div></div>
        <FontAwesomeIcon icon={faCopyright} className={styles.iconi} />
        <span className={styles.span}>Developed by old freshers</span>
      </div>
    </div>
  );
}
