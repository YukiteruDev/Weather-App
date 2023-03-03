import { lato } from "@/api/fonts";
import { Icon } from "@iconify/react";
import SearchBar from "@/components/SearchBar";
import Appearance from "@/components/settings/Appearance";
import Scale from "@/components/settings/Scale";
import Link from "next/link";
import styles from "styles/Settings.module.css";

export default function Settings() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h1 className={lato.className}>Settings</h1>
        <Link href="/">
          <button>
            <Icon
              icon="material-symbols:arrow-back-ios-new-rounded"
              className={styles.topIcon}
            />
          </button>
        </Link>
      </div>
      <SearchBar isSettings={true} />
      <Appearance />
      <Scale />
    </header>
  );
}
