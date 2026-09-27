import HomeCategoryGrid from "@/components/category/HomeCategoryGrid";
import HomeHero from "@/components/hero/HomeHero";
import HomeProductListGrid from "@/components/product/HomeProductListGrid";

export default function Home() {
  return(<>
  <main>
    <HomeHero />
    <HomeCategoryGrid />
    <HomeProductListGrid/>
  </main>
  </>)
}