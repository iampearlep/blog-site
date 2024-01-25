import Img1 from '@/public/images/architecture-03.jpg'
import Img2 from '@/public/images/art-culture-02.jpg'
import Img3 from '@/public/images/art-culture-04.jpg'
import Img4 from '@/public/images/travel-01.jpg'
import Img5 from '@/public/images/art-culture-01.jpg'
import Img6 from '@/public/images/architecture-01.jpg'
import Img7 from '@/public/images/travel-03.jpg'
import Img8 from '@/public/images/art-culture-05.jpg'
import Img9 from '@/public/images/travel-05.jpg'
import Img10 from '@/public/images/art-culture-03.jpg'
import Img11 from '@/public/images/architecture-02.jpg'
import Img12 from '@/public/images/travel-04.jpg'
import { StaticImageData } from 'next/image'

export interface CardProps {
    id: number;
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
}

export const data: CardProps[]  = [
    {
        id: 0,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Architecture",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img1,
    },
    {
        id: 1,
        title: "Minimum Resources, Maximum Impact: Sustainable Fashion Mastery by Gina and Lauren Schultz",
        category: "Art & Culture",
        description: "Reshaping the fashion industry, proving that limited resources can still result in high impact sustainable fashion line.",
        image: Img2,
    },
    {
        id: 2,
        title: "1790 Mornington Peninsula Brews Excellence with In-Demand Coffee",
        category: "Travel",
        description: "1790 is setting high standards in the local coffee scene with it's much sought after, top-quality blends.",
        image: Img3,
    },
    {
        id: 3,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Travel",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img4,
    },
    {
        id: 4,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Art & Culture",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img5,
    },
    {
        id: 5,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Architecture",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img6,
    },
    {
        id: 6,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Travel",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img7,
    },
    {
        id: 7,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Art & Culture",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img8,
    },
    {
        id: 8,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Travel",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img9,
    },
    {
        id: 9,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Art & Culture",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img10,
    },
    {
        id: 10,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Architecture",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img11,
    },
    {
        id: 11,
        title: "A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home",
        category: "Travel",
        description: "Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home",
        image: Img12,
    },
]