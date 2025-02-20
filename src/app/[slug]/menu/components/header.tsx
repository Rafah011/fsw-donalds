"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl" | "avatarImageUrl">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        onClick={handleBackClick}
        className="absolute top-4 left-4 z-50 rounded-full"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
      <Image
        src={restaurant?.avatarImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default RestaurantHeader;
