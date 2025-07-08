import { useAppSelector } from "~/hooks/reduxHooks";
import { AnimatePresence, motion } from "motion/react";

function UserMessageHelper() {
  const message = useAppSelector((state) => state.userMessage.message);

  return (
    <AnimatePresence>
      {message.text !== "" &&
        (message.type === "INFO" ? (
          <motion.div
            className="absolute bg-white right-0 left-0 bottom-[100px] mx-auto self-center text-black max-w-[200px] min-w-[100px] p-2.5 rounded-xl border-blue-500 border-1 drop-shadow-xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-center">{message.text}</p>
          </motion.div>
        ) : (
          <motion.div
            className="absolute bg-white right-[50px] top-[100px] mx-auto self-center text-black max-w-[200px] min-w-[100px] border-red-800 border-1 drop-shadow-xl"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -50 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-center p-2.5">{message.text}</p>
            <motion.div
              className="bg-red-800 w-full h-3.5 m-1"
              animate={{ width: 0 }}
              transition={{ duration: 3 }}
            />
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export default UserMessageHelper;
