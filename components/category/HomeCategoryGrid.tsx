import Image from "next/image";
import Link from "next/link";
import SingleCategoryGridItem from "./SingleCategoryGridItem";

export default function HomeCategoryGrid(){
    return(
        <>
        <section className="bg-blue-100 p-10 w-full flex flex-col">
            <div className="flex w-7xl mx-auto justify-between items-center border-b border-b-blue-900/10 pb-5">
                <h1 className="text-4xl font-semibold text-primary-950">Category List</h1>
                <Link href="/categories" className="text-lg font-semibold underline text-purple-900">View All...</Link>
            </div>
            <div className="w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 mt-5 gap-3">
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
                <SingleCategoryGridItem />
            </div>
        </section>
        </>
    )
}