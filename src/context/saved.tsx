import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useContext,
} from "react";

export type TRecord = {
  type: string;
  id: number;
  title: string;
  poster: string;
};

const SaveContext = createContext<{
  saved: TRecord[];
  save: (item: TRecord) => void;
  unsave: (item: Omit<TRecord, "title" | "poster">) => void;
}>({
  saved: [],
  save: () => {},
  unsave: () => {},
});

const SaveProvider = ({ children }: { children: ReactNode }) => {
  const [saved, setSaved] = useState<TRecord[]>(() => {
    const old = JSON.parse(localStorage.getItem("saved") || "null");

    if (Array.isArray(old)) {
      return old;
    }

    return [];
  });

  const save = useCallback((item: TRecord) => {
    setSaved((old) => {
      return [...old, item];
    });
  }, []);
  const unsave = useCallback((item: Omit<TRecord, "title" | "poster">) => {
    setSaved((old) => {
      const i = old.findIndex((v) => v.type === item.type && v.id === item.id);

      if (i >= 0) {
        return [...old.slice(0, i), ...old.slice(i + 1)];
      }

      return old;
    });
  }, []);

  return (
    <SaveContext.Provider value={{ saved, save, unsave }}>
      {children}
    </SaveContext.Provider>
  );
};

export const useSave = () => useContext(SaveContext);

export default SaveProvider;
