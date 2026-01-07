"use client"

import { motion } from "framer-motion"

export default function LetterPage({ setCurrentPage }) {
  const handleContinue = () => {
    setCurrentPage("hug")
  }

  // Friend-themed messages and decorations
  const friends = [
    { img: 1, emojiTop: "🎉", emojiBottom: "😎", message: "You always make me laugh!" },
    { img: 2, emojiTop: "💫", emojiBottom: "🍀", message: "Your energy is contagious!" },
    { img: 3, emojiTop: "🦋", emojiBottom: "🌸", message: "Life’s brighter with you!" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-purple-900 via-pink-900 to-purple-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl text-pink-300 mb-8 mt-10 md:mt-0"
        >
          Hey friend! Check these out… 🌟
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {friends.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: -8 + Math.random() * 16, y: 30 }}
              animate={{ opacity: 1, rotate: -3 + Math.random() * 6, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative group cursor-pointer mx-auto"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Main polaroid */}
              <div className="bg-white p-3 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-pink-200/40 max-w-[200px]">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 to-purple-50">
                  <img
                    src={`/images/${f.img}.jpg`}
                    alt={`Friend memory ${i + 1}`}
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute top-1 right-1">
                    <span className="text-xs">{f.emojiTop}</span>
                  </div>
                </div>

                <div className="mt-3 px-2 py-2 bg-white">
                  <p className="text-sm text-purple-400">{f.message}</p>
                </div>
              </div>

              <div
                className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 rounded-md shadow-sm opacity-90 ${
                  i === 0
                    ? "bg-gradient-to-r from-yellow-200 to-yellow-300 border border-yellow-400/30"
                    : i === 1
                    ? "bg-gradient-to-r from-green-200 to-green-300 border border-green-400/30"
                    : "bg-gradient-to-r from-blue-200 to-blue-300 border border-blue-400/30"
                }`}
              ></div>

              {/* Floating emojis */}
              <motion.div
                className="absolute -top-1 -right-2 text-sm"
                animate={{ y: [0, -3, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                {f.emojiTop}
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 text-sm"
                animate={{ y: [0, -2, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
              >
                {f.emojiBottom}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="space-y-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl text-purple-200 leading-relaxed"
          >
            Friends like you make life brighter! 🌈
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg text-pink-200 leading-relaxed max-w-lg mx-auto"
          >
            Thanks for always being there. Let’s make more memories together! 🎉
          </motion.p>
        </motion.div>

        <motion.button
          onClick={handleContinue}
          className="mt-10 mb-10 md:mb-0 px-10 py-4 bg-gradient-to-r from-pink-500/25 to-purple-500/25 backdrop-blur-sm border border-pink-300/40 rounded-full text-pink-200 text-lg hover:from-pink-500/35 hover:to-purple-500/35 transition-all duration-300 shadow-lg shadow-pink-500/20"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 25px rgba(236, 72, 153, 0.3)",
            y: -1,
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          Continue the fun! 🎊
        </motion.button>
      </motion.div>
    </div>
  )
}
