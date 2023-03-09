import { classnames } from "@/utils/classnames";
import { useEffect, useState } from "react";

const Button = ({
  children,
  disableAnim,
  colorClass,
  loading,
  ...props
}: any) => {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (anim) setTimeout(() => setAnim(false), 1000);
  }, [anim]);

  return (
    <button
      disabled={loading}
      className="relative top-0 z-20 disabled:opacity-50"
      onMouseOver={() => (!disableAnim ? setAnim(true) : null)}
      {...props}
    >
      <div
        className="w-full h-full absolute"
        style={{
          top: 0,
          backgroundColor: "#2c2c2c",
          transform: "rotate(2.5deg)",
        }}
      />
      <div
        className={classnames(
          anim ? "animate-[ping_1s_ease-in-out_1]" : "",
          !colorClass
            ? "bg-emerald-400 hover:bg-emerald-500"
            : colorClass,
          "absolute w-full h-full"
        )}
      />
      <div
        className={classnames(
          loading ? "animate-pulse" : "",
          !colorClass
            ? "bg-emerald-400 hover:bg-emerald-500"
            : colorClass,
          "relative py-2 px-4 top-0 w-full h-full text-center truncate text-slate-900 font-bold uppercase"
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
