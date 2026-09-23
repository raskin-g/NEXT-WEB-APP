import Image from "next/image";
import Link from "next/link";
import SingleProductListItem from "./SingleProductListItem";

export default function HomeProductListGrid() {
    return(<>
    <section className="w-full bg-blue-50 py-5">
        <div className="flex w-7xl mx-auto justify-between items-center border-b border-b-blue-900/10 pb-5">
                <h1 className="text-4xl font-semibold text-primary-950">Picked for you</h1>
            </div>
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 w-7xl mx-auto py-10">
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      <SingleProductListItem />
      
      </div>
    </section>
        </>
    )
}