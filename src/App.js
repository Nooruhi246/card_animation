import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{ borderRadius: "1rem" }}>
        <motion.h2 layout="position"> Frame Work Motion </motion.h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="expand">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ex veritatis quaerat ipsum enim non alias ipsam quibusdam facere voluptates.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <button>Hello</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div >
  );
}

export default App;
