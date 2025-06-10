import React from "react";
import shockwave from "../../assets/icons/shockwave.png";
import styles from "./Footer.module.css";
import { MdOutlineDesktopMac } from "react-icons/md";
import {
  BsDiscord,
  BsFacebook,
  BsTiktok,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

const socialLinks = [
  { href: "https://discord.com", icon: <BsDiscord /> },
  { href: "https://facebook.com", icon: <BsFacebook /> },
  { href: "https://tiktok.com", icon: <BsTiktok /> },
  { href: "https://youtube.com", icon: <BsYoutube /> },
  { href: "https://twitter.com", icon: <BsTwitter /> },
];

const Footer = () => {
  const links = [
    { label: "Home", url: "/" },
    { label: "Terms of Service", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Contact", url: "/contact" },
    { label: "Contribute", url: "/contribute" },
    { label: "Keyboard Shortcuts", url: "/shortcuts" },
    { label: "FAQ", url: "/faq" },
  ];
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navList}>
          {links.map((link, index) => (
            <React.Fragment key={link.label}>
              <li>
                <a href={link.url} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
              {index < links.length - 1 && (
                <li className={styles.separator}>|</li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
      <p className={styles.copyright}>© 2008-2025 Shockwave, LLC.</p>
      <div className={styles.socialContainer}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <button className={styles.btn}>
        Change Theme
        <MdOutlineDesktopMac className={styles.spanIcon} />
      </button>
      <img className={styles.shockwave} src={shockwave} alt="" />
    </div>
  );
};

export default Footer;
