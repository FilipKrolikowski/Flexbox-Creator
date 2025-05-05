import { type Layout } from "../../../data/dataTypes";
import { State } from "../../../types";
import styles from "./Layout.module.scss";
import Image from "next/image";

interface Props {
  layouts: Layout[];
  setState: (state: State) => void;
  clearSelected: () => void;
}

function Layout({ layouts, setState, clearSelected }: Props) {
  function handleClick(layout: State) {
    setState(layout);
    clearSelected();
  }

  return (
    <div className={styles.container}>
      <h2 className="title text-center mb-2 font-bold">Layouts</h2>
      <div className={styles.layout_container}>
        {layouts.map((layout, index) => (
          <div key={index} className={styles.layout} onClick={() => handleClick(layout.layout)}>
            {/* @ts-ignore */}
            <Image {...layout.img} alt={layout.name} />
            <h4 className={styles.layout__title}>{layout.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
