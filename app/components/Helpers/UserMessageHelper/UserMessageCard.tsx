import { motion } from "motion/react";

export interface UserMessageCardProps {
  text: string;
  type: "INFO" | "ERROR";
  /**
   * milliseconds
   */
  ms: number;
}

function UserMessageCard(props: UserMessageCardProps) {
  switch (props.type) {
    case "INFO":
      return (
        <motion.div
          className="absolute bg-white right-0 left-0 bottom-[100px] mx-auto self-center text-black max-w-[200px] min-w-[100px] p-2.5 border-black border-1 drop-shadow-xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -50 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-center">{props.text}</p>
        </motion.div>
      );
    case "ERROR":
      return (
        <motion.div
          className="absolute bg-white right-[50px] top-[100px] mx-auto self-center text-black max-w-[200px] min-w-[100px] border-black border-1 drop-shadow-xl"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: -50 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-center p-2.5">{props.text}</p>
          <motion.div
            className="bg-red-800 w-full h-5"
            animate={{ width: 0 }}
            transition={{ duration: props.ms / 1000 }}
          />
        </motion.div>
      );
  }
}

export default UserMessageCard;
