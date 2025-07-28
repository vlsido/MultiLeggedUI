import { AnimatePresence } from "motion/react";
import UserMessageCard from "./UserMessageCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { userMessageManager } from "~/managers/userMessageManager";
import type { UserMessage } from "~/types/common";

function UserMessageHelper() {
  const [message, setMessage] = useState<UserMessage | null>(null);

  const timeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = userMessageManager.subscribe((text, type, ms?) => {
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

  const handleOnClose = useCallback(() => {
    setMessage(null);
  }, []);

  return (
    <AnimatePresence>
      {message != null && (
        <UserMessageCard
          text={message.text}
          type={message.type}
          ms={message.ms ?? 5000}
          onClose={handleOnClose}
        />
      )}
    </AnimatePresence>
  );
}

export default UserMessageHelper;
