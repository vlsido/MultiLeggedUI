type UserMessageListener = (
  message: string,
  type: "INFO" | "ERROR",
  ms: number,
) => void;

class UserMessageManager {
  private listeners = new Set<UserMessageListener>();

  showUserMessage(text: string, type: "INFO" | "ERROR", ms: number) {
    for (const listener of this.listeners) {
      listener(text, type, ms);
    }
  }

  subscribe(listener: UserMessageListener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export const userMessageManager = new UserMessageManager();
