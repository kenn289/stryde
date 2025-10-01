import { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-background/80 backdrop-blur-md">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
        <div className="absolute inset-0 -m-6 blur-2xl opacity-40 gradient-hero rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default Loader;


