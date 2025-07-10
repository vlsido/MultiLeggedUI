import { AnimatePresence } from "motion/react";
import UserMessageCard, { type UserMessageCardProps } from "./UserMessageCard";
import { useEffect, useRef, useState } from "react";
import { userMessageManager } from "~/managers/userMessageManager";

function UserMessageHelper() {
  const [message, setMessage] = useState<UserMessageCardProps | null>(null);

  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = userMessageManager.subscribe((text, type, ms) => {
      setMessage({ text, type, ms });

      clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => {
        setMessage(null);
      }, ms);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AnimatePresence>
      {message != null && (
        <UserMessageCard
          text={message.text}
          type={message.type}
          ms={message.ms}
        />
      )}
    </AnimatePresence>
  );
}

export default UserMessageHelper;
