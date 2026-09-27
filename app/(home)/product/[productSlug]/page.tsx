import Image from "next/image"

export default function ProductDetailPage(){
    return(<>
    <input type="checkbox" id="nav-toggle" className="peer sr-only" />
<main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center gap-1 text-xs text-gray-500">
      <li><a href="#" className="hover:text-gray-800">Home</a></li>
      <li aria-hidden="true">/</li>
      <li><a href="#" className="hover:text-gray-800">Tents &amp; shelters</a></li>
      <li aria-hidden="true">/</li>
      <li aria-current="page" className="text-gray-800">Kestrel 2P Ultralight</li>
    </ol>
  </nav>

  <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
    <div>
      <div className="overflow-hidden rounded-lg bg-gray-100">
        <Image
          width={1200}
          height={400}
          id="ProductGalleryImage"
          alt="Kestrel 2P Ultralight tent pitched on a ridgeline at dawn"
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200"
          className="aspect-square w-full object-cover"
        />
      </div>

      <ul className="mt-3 grid grid-cols-4 gap-3">
        <li>
          <button
            type="button"
            aria-pressed="true"
            data-gallery-image="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200"
            data-gallery-alt="Kestrel 2P Ultralight tent pitched on a ridgeline at dawn"
            className="overflow-hidden rounded-md aria-pressed:ring-2 aria-pressed:ring-emerald-700 aria-pressed:ring-offset-2"
          >
            <span className="sr-only">Show ridgeline photo</span>
            <Image
              width={200}
              height={400}
              alt=""
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=200"
              className="aspect-square w-full object-cover"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-pressed="false"
            data-gallery-image="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=1200"
            data-gallery-alt="Kestrel 2P Ultralight interior showing double-wall construction"
            className="overflow-hidden rounded-md aria-pressed:ring-2 aria-pressed:ring-emerald-700 aria-pressed:ring-offset-2"
          >
            <span className="sr-only">Show interior photo</span>
            <Image
                width={1200}
                height={400}
              alt=""
              src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=200"
              className="aspect-square w-full object-cover"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-pressed="false"
            data-gallery-image="https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&fit=crop&q=80&w=1200"
            data-gallery-alt="Kestrel 2P Ultralight packed down into its stuff sack"
            className="overflow-hidden rounded-md aria-pressed:ring-2 aria-pressed:ring-emerald-700 aria-pressed:ring-offset-2"
          >
            <span className="sr-only">Show packed photo</span>
            <Image
          width={1200}
          height={400}
              alt=""
              src="https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&fit=crop&q=80&w=200"
              className="aspect-square w-full object-cover"
            />
          </button>
        </li>
        <li>
          <button
            type="button"
            aria-pressed="false"
            data-gallery-image="https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&q=80&w=1200"
            data-gallery-alt="Kestrel 2P Ultralight with the storm fly pitched in wind"
            className="overflow-hidden rounded-md aria-pressed:ring-2 aria-pressed:ring-emerald-700 aria-pressed:ring-offset-2"
          >
            <span className="sr-only">Show storm-fly photo</span>
            <Image
          width={1200}
          height={400}
              alt=""
              src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&q=80&w=200"
              className="aspect-square w-full object-cover"
            />
          </button>
        </li>
      </ul>
    </div>

    <div>
      <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Kestrel 2P Ultralight</h1>

      <a href="#reviews" className="mt-2 flex items-center gap-2">
        <span className="flex items-center gap-0.5 text-amber-500">
          <span className="sr-only">Rated 4 out of 5 stars</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4 text-gray-200"
            aria-hidden="true"
          >
            <path
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            />
          </svg>
        </span>
        <span className="text-sm text-gray-500 underline underline-offset-2">126 reviews</span>
      </a>

      <p className="mt-4 text-2xl font-medium text-gray-900">$389.00</p>

      <p className="mt-4 text-gray-600">
        A freestanding 2-person shelter built for three-season trips where every gram in the
        pack has to earn its place. Double-wall construction sheds condensation without
        sacrificing the 1.4kg trail weight.
      </p>

      <div className="mt-6">
        <p className="text-sm font-medium text-gray-900">
          Colour: <span className="font-normal text-gray-600">Moss green</span>
        </p>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            aria-label="Moss green"
            className="size-8 rounded-full bg-emerald-700 ring-2 ring-emerald-700 ring-offset-2"
          ></button>
          <button
            type="button"
            aria-label="Slate grey"
            className="size-8 rounded-full bg-gray-500 ring-2 ring-transparent ring-offset-2 hover:ring-gray-300"
          ></button>
          <button
            type="button"
            aria-label="Burnt orange"
            className="size-8 rounded-full bg-orange-600 ring-2 ring-transparent ring-offset-2 hover:ring-gray-300"
          ></button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-end gap-4">
        <div>
          <label htmlFor="Quantity" className="block text-sm font-medium text-gray-900">Quantity</label>
          <div className="mt-1 flex items-center gap-1">
            <button
              type="button"
              className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
              &minus;
            </button>
            <input
              type="number"
              id="Quantity"
              defaultValue="1"
              className="h-10 w-16 rounded-md border-gray-300 text-center sm:text-sm"
            />
            <button
              type="button"
              className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
              &plus;
            </button>
          </div>
        </div>

        <button
          type="button"
          className="flex-1 rounded-md bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
        >
          Add to cart
        </button>
      </div>

      <ul className="mt-6 space-y-2 border-t border-gray-200 pt-6 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 text-emerald-700"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          In stock &mdash; ships within 2 business days
        </li>
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 text-emerald-700"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Free returns within 30 days
        </li>
      </ul>
    </div>
  </div>

  <div className="mt-16">
    <div className="border-b border-gray-200">
      <div role="tablist" className="-mb-px flex gap-6">
        <button
          type="button"
          id="tab-description"
          role="tab"
          aria-selected="true"
          aria-controls="description"
          className="border-b-2 py-3 text-sm font-medium aria-selected:border-emerald-700 aria-selected:text-emerald-700 aria-[selected=false]:border-transparent aria-[selected=false]:text-gray-500 aria-[selected=false]:hover:text-gray-700"
        >
          Description
        </button>
        <button
          type="button"
          id="tab-shipping"
          role="tab"
          aria-selected="false"
          aria-controls="shipping"
          tabIndex={-1}
          className="border-b-2 py-3 text-sm font-medium aria-selected:border-emerald-700 aria-selected:text-emerald-700 aria-[selected=false]:border-transparent aria-[selected=false]:text-gray-500 aria-[selected=false]:hover:text-gray-700"
        >
          Shipping &amp; returns
        </button>
        <button
          type="button"
          id="tab-reviews"
          role="tab"
          aria-selected="false"
          aria-controls="reviews"
          tabIndex={-1}
          className="border-b-2 py-3 text-sm font-medium aria-selected:border-emerald-700 aria-selected:text-emerald-700 aria-[selected=false]:border-transparent aria-[selected=false]:text-gray-500 aria-[selected=false]:hover:text-gray-700"
        >
          Reviews (126)
        </button>
      </div>
    </div>

    <div
      id="description"
      role="tabpanel"
      aria-labelledby="tab-description"
      className="mt-6 max-w-2xl text-gray-600"
    >
      <p>
        The Kestrel uses a single-hub aluminium pole set that pitches in under four minutes,
        even with cold hands. Colour-coded clips and a symmetrical fly mean there&quote;s only one way
        to get it wrong, and it&quote;s hard to.
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <li><span className="text-gray-500">Packed weight</span> &middot; 1.4kg</li>
        <li><span className="text-gray-500">Floor area</span> &middot; 2.7m&sup2;</li>
        <li><span className="text-gray-500">Peak height</span> &middot; 104cm</li>
        <li><span className="text-gray-500">Season rating</span> &middot; 3-season</li>
      </ul>
    </div>

    <div
      id="shipping"
      role="tabpanel"
      aria-labelledby="tab-shipping"
      hidden
      className="mt-6 max-w-2xl text-gray-600"
    >
      <p>
        Ships within 2 business days from our EU and US warehouses. Free returns within 30 days
        if it hasn&quote;t been pitched outside &mdash; unused, tags on, original packaging.
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <li><span className="text-gray-500">Delivery</span> &middot; 2&ndash;4 business days</li>
        <li><span className="text-gray-500">Returns window</span> &middot; 30 days</li>
        <li><span className="text-gray-500">Warranty</span> &middot; 2 years</li>
        <li><span className="text-gray-500">Repair kit</span> &middot; Included</li>
      </ul>
    </div>

    <div
      id="reviews"
      role="tabpanel"
      aria-labelledby="tab-reviews"
      hidden
      className="mt-6 max-w-2xl scroll-mt-20"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
        <span className="text-sm text-gray-500">4.6 average from 126 reviews</span>
      </div>

      <ul className="mt-6 space-y-4">
        <li className="rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-0.5 text-amber-500">
              <span className="sr-only">Rated 4 out of 5 stars</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 text-gray-200"
                aria-hidden="true"
              >
                <path
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                />
              </svg>
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-3.5"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              Verified purchase
            </span>
          </div>

          <p className="mt-3 text-sm font-medium text-gray-900">
            Kept us dry through a week of rain
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Pitched this in a downpour at 6,000ft and stayed dry all night. Poles are
            colour-coded so it went up in under four minutes even in the wind.
          </p>
          <p className="mt-3 text-xs text-gray-500">Freya Lindqvist &middot; 3 weeks ago</p>
        </li>

        <li className="rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-0.5 text-amber-500">
            <span className="sr-only">Rated 3 out of 5 stars</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
              aria-hidden="true"
            >
              <path
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
              aria-hidden="true"
            >
              <path
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4"
              aria-hidden="true"
            >
              <path
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 text-gray-200"
              aria-hidden="true"
            >
              <path
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 text-gray-200"
              aria-hidden="true"
            >
              <path
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
              />
            </svg>
          </div>

          <p className="mt-3 text-sm font-medium text-gray-900">Good pack, straps run narrow</p>
          <p className="mt-1 text-sm text-gray-600">
            Compression straps and the hip belt are excellent, but the shoulder straps dug in on
            longer days. Sizing up helped.
          </p>
          <p className="mt-3 text-xs text-gray-500">Owen Baptiste &middot; 2 months ago</p>
        </li>
      </ul>
    </div>
  </div>

  <div className="mt-16">
    <h2 className="text-lg font-semibold text-gray-900">You might also like</h2>

    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
      <li>
        <a href="#" className="group block">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <Image
          width={1200}
          height={400}
              alt=""
              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=600"
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-3 text-sm font-medium text-gray-900">Cairn 1P Solo</h3>
          <p className="mt-1 text-sm text-gray-600">$329</p>
        </a>
      </li>

      <li>
        <a href="#" className="group block">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              width={600}
              height={400}
              alt=""
              src="https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&q=80&w=600"
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-3 text-sm font-medium text-gray-900">Ridgeline 3P Family</h3>
          <p className="mt-1 text-sm text-gray-600">$419</p>
        </a>
      </li>

      <li>
        <a href="#" className="group block">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              width={600}
              height={400}
              alt=""
              src="https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&fit=crop&q=80&w=600"
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-3 text-sm font-medium text-gray-900">Hollow 1P Bivy</h3>
          <p className="mt-1 text-sm text-gray-600">$219</p>
        </a>
      </li>

      <li>
        <a href="#" className="group block">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              width={600}
              height={400}
              alt=""
              src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&q=80&w=600"
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-3 text-sm font-medium text-gray-900">Summit 2P Storm</h3>
          <p className="mt-1 text-sm text-gray-600">$589</p>
        </a>
      </li>
    </ul>
  </div>
</main>
    </>)
}