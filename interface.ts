import { StaticImageData } from "next/image";

export interface CardData {
    id: number;
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
}

export interface Posts {
    _id: number;
    title: string;
    excerpt: string;
    description: string;
    date: any;
    slug: string;
    category: string;
    coverImage: any;
    contentImage1: any;
    contentImage2: any;
    contentImage3: any;
    contentImage4: any;
    contentTextP1: string;
    contentTextP2: string;
    contentTextP3: string;
    contentTextP4: string;
    contentTextP5: string;
    contentH1: string;
    contentH2: string;
    contentBullet1: string;
    contentBullet1Text: string;
    contentBullet2: string;
    contentBullet2Text: string;
    contentBullet3: string;
    contentBullet3Text: string;
    contentBullet4: string;
    contentBullet4Text: string;
    authorName: string;
    authorImage: any;
}