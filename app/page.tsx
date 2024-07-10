'use client'
import MainCarousel from "./components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "./components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../public/Data/MenKurta";

export default function HomePage() {
    return <div>
        <MainCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
        </div>
    </div>
}