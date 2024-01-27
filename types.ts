import { StaticImageData } from "next/image";

export interface CardData {
    id: number;
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
}
