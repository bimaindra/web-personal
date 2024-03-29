import { motion, Variants } from "framer-motion";
import { TimelinesPropsType } from "@/types";
import { IconCalendar, IconGraduate, IconLocation, IconWork } from "../Icon";
import { formatDate } from "@/utils/formatDate";

const cardVariants: Variants = {
  offscreen: {
    y: 120,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.35,
    },
  },
};

const Timeline = ({ timelines }: TimelinesPropsType) => {
  return (
    <ol className="relative ml-4 whitespace-normal break-words border-l border-gray-200 before:absolute before:-left-[4.5px] before:top-0 before:h-2 before:w-2 before:rounded-md before:bg-gray-200 after:absolute after:-left-[4.5px] after:bottom-0 after:h-2 after:w-2 after:rounded-md after:bg-gray-200 dark:border-white">
      {timelines.map((item, index) => {
        return (
          <motion.li
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            variants={cardVariants}
            className="relative mb-12 ml-9 last:mb-0 lg:mb-16 lg:ml-10">
            <span className="absolute -left-12 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 ring-8 ring-slate-200 dark:bg-slate-500 dark:ring-slate-500 lg:-left-[56px] lg:h-7 lg:w-7">
              {item.type === "education" ? (
                <>
                  <IconGraduate />
                </>
              ) : (
                <>
                  <IconWork />
                </>
              )}
            </span>
            <h3 className="mb-2 flex items-center text-lg font-medium text-gray-900 dark:text-slate-200 lg:text-xl">
              {item.title}
              {index === 0 ? (
                <span className="ml-3 mr-2 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                  Latest
                </span>
              ) : (
                ""
              )}
            </h3>
            <time className="mb-2 flex items-center gap-x-2 text-sm leading-none text-gray-800 dark:text-slate-200 md:text-sm">
              <IconCalendar />
              {item.type === "jobs" ? (
                <span>{`${formatDate(item.date)} - ${
                  item.endDate === null ? "Now" : formatDate(item.endDate)
                }`}</span>
              ) : (
                <span>{formatDate(item.endDate)}</span>
              )}
            </time>
            <span className="mb-2 flex items-center gap-x-2 text-sm leading-none text-gray-800 dark:text-slate-200 md:text-sm">
              <IconLocation />
              <span>{item.location}</span>
            </span>
            <p className="mb-2 text-base text-gray-500 dark:text-slate-300">
              {item.description}
            </p>
          </motion.li>
        );
      })}
    </ol>
  );
};

export default Timeline;
