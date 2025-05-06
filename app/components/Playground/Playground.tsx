"use client";

import styles from "./Playground.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Resizable from "../UI/Resizable/Resizable";
import { Container } from "../../types";

interface Props {
  children: React.ReactNode;
  container: Container;
}

function Playground({ children, container }: Props) {
  return (
    <motion.div layout className={styles.playground_wrapper}>
      <Resizable className={styles.playground}>
        <motion.div layout className={styles.playground_view} id="playground_view" style={container}>
          <AnimatePresence mode="popLayout">{children}</AnimatePresence>
        </motion.div>
      </Resizable>
    </motion.div>
  );
}

export default Playground;
