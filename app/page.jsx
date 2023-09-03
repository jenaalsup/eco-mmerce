import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Shop
            <br className="max-md:hiden" />
            <span className="orange_gradient text-center">Sustainable Products</span>
        </h1>
        <p className="desc text-center">
            Eco-mmerce is an online shopping hub that markets a curated list of
            items from verified sustainable brands. Build a more 
            sustainable future with Eco-mmerce.
        </p>

        <Feed />
    </section>
  )
}

export default Home