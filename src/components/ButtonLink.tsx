import { classnames } from "@/utils/classnames";
import { useEffect, useState } from "react";

const ButtonLink = ({ children, disableAnim, colorClass, ...props }: any) => {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (anim) setTimeout(() => setAnim(false), 1000);
  }, [anim]);

  return (
    <a
      className="relative top-0 z-20 "
      onMouseOver={() => (!disableAnim ? setAnim(true) : null)}
      {...props}
    >
      <span
        className="w-full h-full absolute"
        style={{
          top: 0,
          backgroundColor: "#2c2c2c",
          transform: "rotate(2.5deg)",
        }}
      />
      <span
        className={classnames(
          anim ? "animate-[ping_1s_ease-in-out_1]" : "",
          !colorClass ? "bg-emerald-400  hover:bg-emerald-500" : colorClass,
          "absolute w-full h-full"
        )}
      />
      <div
        className={classnames(
          !colorClass ? "bg-emerald-400  hover:bg-emerald-500" : colorClass,
          "relative py-2 px-4 top-0 w-full h-full text-center truncate text-slate-900 font-bold uppercase"
        )}
      >
        {children}
      </div>
    </a>
  );
};

export default ButtonLink;
