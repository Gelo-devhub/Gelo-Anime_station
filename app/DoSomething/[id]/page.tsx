"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

const AnimePage = () => {
  const param = useSearchParams();
  const watch = useRef(null);
  const download = useRef(null);

  const copyWatch = () => {
    watch.current.select();
    document.execCommand("copy");
    watch.current.blur();
  };
  console.log(watch.current);
  const copyDownload = () => {
    download.current.select();
    document.execCommand("copy");
    download.current.blur();
  };

  return (
    <div className=" h-[100vw]">
      <div className="w-full flex flex-col justify-center items-center ">
        <div className=" bg-gray-800 mt-14 pb-5 rounded-lg overflow-hidden">
          <div className=" w-[350px] h-[450px] relative ">
            <Image fill alt="anime-images" src={param.get("img")} />
          </div>
          <h1 className=" text-2xl text-center mt-3">{param.get("name")}</h1>
          <div className=" px-2">
            <h3 className=" mt-2">Watch</h3>

            <input
              onClick={() => copyWatch()}
              ref={watch}
              className=" rounded w-full text-center bg-white/80 text-slate-950"
              type="text"
              value={`ani-cli ${param.get("name")}`}
            />
            <h3 className=" mt-2">Download</h3>

            <input
              ref={download}
              onClick={() => copyDownload()}
              className=" rounded w-full text-center bg-white/80 text-slate-950"
              type="text"
              value={`cd C:/Users/User/Desktop/EXTRA/Anime && mkdir ${param
                .get("name")
                ?.replace(/:|\s/g, "-")} && cd ${param
                .get("name")
                ?.replace(/:|\s/g, "-")} && ani-cli -d ${param.get(
                "name"
              )} -e 1-${param.get("episodes")}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
