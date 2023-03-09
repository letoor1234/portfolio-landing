import { classnames } from "@/utils/classnames";
import { Tooltip, useMediaQuery } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";

const Clock = ({ minClock }: { minClock: boolean }) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setInterval(() => moveClock(), 1000);
  });

  const [hourRotate, setHourRotate] = useState(0);
  const [minutesRotate, setMinutesRotate] = useState(0);
  const [secondsRotate, setSecondsRotate] = useState(0);

  const [hourDisplay, setHourDisplay] = useState("00:00");

  const moveClock = () => {
    const hourDegree = (360 / 12) * moment().hours();
    const minuteDegree = (360 / 60) * moment().minutes();
    const secondsDeegree = (360 / 60) * moment().second();

    setHourRotate(hourDegree);
    setMinutesRotate(minuteDegree);
    setSecondsRotate(secondsDeegree);

    setHourDisplay(`${moment().format("HH:mm")}`);
  };

  return (
    <Tooltip title={moment().format("HH:mm")} arrow>
      <div
        className="sticky flex items-center justify-center p-8"
        style={{
          display: minClock ? (isMd ? "flex" : "none") : "flex",
        }}
      >
        {/* Seconds */}
        <div
          className={classnames(
            minClock ? "w-24 h-24" : "w-52 h-52",
            "transition duration-1000 ease-linear absolute rounded-full border border-slate-400 flex items-center justify-center"
          )}
          style={{
            transform: `rotate(${secondsRotate}deg)`,
          }}
        >
          <div
            className={classnames(
              minClock ? "w-2.5 h-2.5 -top-1.5" : "w-5 h-5 -top-2.5",
              "absolute rounded-full bg-emerald-600 shadow-md"
            )}
          >
            <div
              className={classnames(
                minClock ? "w-2.5 h-2.5 " : "w-5 h-5 ",
                "rounded-full bg-emerald-600 shadow-md animate-ping"
              )}
            />
          </div>
        </div>
        {/* Minutes */}
        <div
          className={classnames(
            minClock ? "w-16 h-16" : "w-40 h-40",
            "transition duration-1000 ease-linear absolute rounded-full border border-slate-400 flex items-center justify-center"
          )}
          style={{
            transform: `rotate(${minutesRotate}deg)`,
          }}
        >
          <div
            className={classnames(
              minClock ? "w-2.5 h-2.5 -top-1.5" : "w-5 h-5 -top-2.5",
              "absolute rounded-full bg-blue-600 shadow-md"
            )}
          />
        </div>
        {/* Hours */}
        <div
          className={classnames(
            minClock ? "w-8 h-8" : "w-28 h-28",
            "transition duration-1000 ease-linear absolute rounded-full border border-slate-400 flex items-center justify-center"
          )}
          style={{
            transform: `rotate(${hourRotate}deg)`,
          }}
        >
          <div
            className={classnames(
              minClock ? "w-2.5 h-2.5 -top-1.5" : "w-5 h-5 -top-2.5",
              "absolute rounded-full bg-purple-600 shadow-md"
            )}
          />
        </div>
        <div
          className={classnames(
            minClock ? "opacity-0" : "opacity-1",
            "transition absolute w-28 h-28 flex items-center justify-center text-slate-50 clock"
          )}
        >
          {hourDisplay}
        </div>
      </div>
    </Tooltip>
  );
};

export default Clock;
