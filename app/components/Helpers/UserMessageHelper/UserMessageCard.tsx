import { motion } from "motion/react";
import { CrossedLineIcon } from "~/components/Icons/CrossedLineIcon";

export interface UserMessageCardProps {
  text: string;
  type: "INFO" | "ERROR";
  /**
   * milliseconds
   */
  ms: number;
  onClose: () => void;
}

function UserMessageCard(props: UserMessageCardProps) {
  switch (props.type) {
    case "INFO":
      return (
        <motion.div
          className="absolute bg-white right-0 left-0 bottom-[100px] mx-auto self-center text-black max-w-[200px] min-w-[100px] p-2.5 border-black border-1 drop-shadow-xl z-1"
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
          className="absolute bg-red-800 right-[50px] top-[100px] mx-auto self-center rounded-md min-w-[100px] border-black border-1 drop-shadow-xl z-1 overflow-hidden"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: -50 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex gap-4 py-2.5 justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="flex rotate-45 p-[1px] mx-2.5 scale-150 rounded-full border-1 border-white">
                <CrossedLineIcon strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <p className="text-center text-white text-[16px] font-bold">
                  An error has occured
                </p>
                <p className="text-center text-white text-[14px]">
                  {props.text}
                </p>
              </div>
            </div>
            <button
              className="rotate-45 mx-2.5 scale-200 hover:opacity-50"
              onPointerUp={props.onClose}
            >
              <CrossedLineIcon strokeWidth={1} />
            </button>
          </div>
          <motion.div
            className="bg-white/35 w-full h-1"
            animate={{ width: 0 }}
            transition={{ duration: props.ms / 1000 }}
          />
        </motion.div>
      );
  }
}

export default UserMessageCard;
