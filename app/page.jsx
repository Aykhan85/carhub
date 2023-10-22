import { Hero, SearchBar, CustomFilter, ShowMore } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/contants";

export default async function Home({ searchParams }) {
  const cars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    year: searchParams.year || 2022
  })

  const isDataEmpty = !Array.isArray(cars) || cars.length === 0 || !cars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map(car => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        )
          : (
            <div>
              <h2>OOOPS! This car is not found</h2>

            </div>
          )}
      </div>
    </main>
  );
}
