import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";

import { NewsHeading, NewsInfo } from "@/components/Ui/Typography";

interface IProps {
  imageUrl: string;
  title: string;
  postedBy: string;
  isVerified: boolean;
  views: string;
  postedDate: string;
  cardClass?: string;
}

export const TopNewsCard = ({
  imageUrl,
  title,
  postedBy,
  isVerified,
  views,
  postedDate,
  cardClass = "",
}: IProps) => {
  return (
    <div className={`flex flex-col space-y-2 ${cardClass}`}>
      <Image
        src={imageUrl}
        alt="Top news image"
        width={220}
        height={220}
        className="w-full"
        objectFit="contain"
      />
      <div className="flex flex-row items-start">
        <NewsHeading title={title} titleClass="text-blue-black grow" />
        <BsThreeDotsVertical className="place-self-end text-xl text-blue-black" />
      </div>

      <div className="flex flex-row text-gray-600 items-start">
        <NewsInfo displayInfo={postedBy} infoClass="pr-3 " />
        {isVerified && <GoVerified className="text-blue-black" />}
      </div>

      <div className="flex xl:flex-row sm:flex-col text-gray-600 items-start justify-start">
        <NewsInfo displayInfo={`${views} views`} infoClass="pr-1" />
        <RxDotFilled className="text-gray-600 text-xs" />
        <NewsInfo displayInfo={`${postedDate} ago`} infoClass="pl-1" />
      </div>
    </div>
  );
};
