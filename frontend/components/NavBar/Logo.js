import React from 'react'
import { motion } from 'framer-motion'

const pathvariant = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1, transition: { duration: 1.5, yoyo: Infinity, ease: 'easeInOut' } }
}


export default function Logo() {
  return (
    <div className="logo-wrapper">
      <motion.svg
        initial={{ rotate: -180 }}
        animate={{ rotate: 0 }}
        className="logo"
        data-name="Layer 4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65 65"
      >
        <motion.path
          variants={pathvariant}
          animate="animate"
          initial="initial"
          d="M58.84,53.91a9.2,9.2,0,0,1-6.54-2.72L50.14,49a2.59,2.59,0,1,1,3.67-3.66L56,47.53a4.07,4.07,0,0,0,5.76,0L75.24,34.08a4.08,4.08,0,0,0,0-5.76L70.94,24a4.08,4.08,0,0,0-5.76,0l-6.76,6.73A2.59,2.59,0,0,1,54.76,27l6.76-6.73a9.27,9.27,0,0,1,13.09,0l4.31,4.33a9.27,9.27,0,0,1,0,13.09L65.39,51.21A9.22,9.22,0,0,1,58.84,53.91Z"
          transform="translate(-28.21 -17.61)"
          stroke="white"
          strokeLinecap="round"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          variants={pathvariant}
          animate="animate"
          initial="initial"
          d="M41.77,70.93a9.28,9.28,0,0,1-6.55-2.72l-4.31-4.33a9.27,9.27,0,0,1,0-13.09L44.44,37.33a9.26,9.26,0,0,1,13.09,0l2.16,2.16A2.59,2.59,0,1,1,56,43.17L53.86,41a4.07,4.07,0,0,0-5.76,0L34.59,54.46a4.08,4.08,0,0,0,0,5.76l4.32,4.33a4.08,4.08,0,0,0,5.76,0l6.75-6.73a2.59,2.59,0,1,1,3.66,3.67l-6.75,6.73A9.26,9.26,0,0,1,41.77,70.93Z"
          transform="translate(-28.21 -17.61)"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </motion.svg>
    </div>
  )
}

