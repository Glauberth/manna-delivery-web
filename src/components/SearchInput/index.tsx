import { useState } from "react";
import styles from "./styles.module.css";
import SearchIcon from "./searchicon.svg";
import { useTenantStore } from "../../store/TenantStore";
// import { useAppContext } from "../../../contexts/app";

type Props = {
  onSearch: (searchValue: string) => void;
};

export default function SearchInput({ onSearch }: Props) {
  // const { tenant } = useAppContext();
  const [tenant] = useTenantStore((state) => [state.tenant]);

  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    //if (event.code === "Enter") {
    onSearch(searchValue);
    //}
  }

  // console.log("search", searchValue);

  return (
    <div className={styles.container} style={{ borderColor: focused ? tenant?.mainColor : "#FFFFFF" }}>
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        <SearchIcon color={tenant?.mainColor} />
      </div>

      <input
        type="text"
        placeholder="Digte para pesquisar"
        className={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
