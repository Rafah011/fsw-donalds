import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="pt-24 text-center space-y-2">
        <h3 className="text-2xl font-semibold">Seja bem Vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos a oferecer
          praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="pt-14 grid grid-cols-2">
        <ConsumptionMethodOption
          imageAlt="Para comer aqui"
          slug="{slug}"
          imageUrl="/in_local.svg"
          option="IN_LOCAL"
          buttonText="Para comer aqui"
        />
        <ConsumptionMethodOption
          slug={slug}
          imageAlt="Para levar"
          option="TAKEAWAY"
          imageUrl="/takeaway.svg"
          buttonText="Para levar"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
