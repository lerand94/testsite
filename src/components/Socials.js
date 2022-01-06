import classes from "./Socials.module.css";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";
import opensea from "../assets/opensea.svg";

const Socials = ({ column }) => {
  return (
    <ul
      className={
        !column ? classes.socials : [classes.socials, classes.column].join(" ")
      }
    >
      <li>
        <a href="#" target="_blank">
          <img src={opensea} />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={discord} />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src={twitter} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
