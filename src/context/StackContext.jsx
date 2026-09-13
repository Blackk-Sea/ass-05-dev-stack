import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const StackContext = createContext(null);

/**
 * Holds the user's selected technologies so that both the cards and the
 * "Your Stack" panel stay in sync without prop drilling.
 */
export function StackProvider({ children }) {
  const [stack, setStack] = useState([]);

  const isInStack = useCallback((id) => stack.some((item) => item.id === id), [stack]);

  const addToStack = useCallback(
    (tech) => {
      // The same technology can never be added twice — warn instead.
      if (stack.some((item) => item.id === tech.id)) {
        toast.warning(`${tech.name} is already in your stack.`);
        return;
      }

      setStack((prev) => (prev.some((item) => item.id === tech.id) ? prev : [...prev, tech]));
      toast.success(`${tech.name} added to your stack.`);
    },
    [stack],
  );

  const removeFromStack = useCallback((tech) => {
    setStack((prev) => prev.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  }, []);

  const clearStack = useCallback(() => {
    setStack((prev) => {
      if (prev.length === 0) return prev;
      return [];
    });
    toast.info('Your stack has been cleared.');
  }, []);

  const value = useMemo(
    () => ({ stack, count: stack.length, addToStack, removeFromStack, clearStack, isInStack }),
    [stack, addToStack, removeFromStack, clearStack, isInStack],
  );

  return <StackContext.Provider value={value}>{children}</StackContext.Provider>;
}

export function useStack() {
  const context = useContext(StackContext);

  if (!context) {
    throw new Error('useStack must be used inside a <StackProvider>.');
  }

  return context;
}
