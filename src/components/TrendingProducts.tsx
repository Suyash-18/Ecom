import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        img: '/books/image1.webp',
        genre: 'Fiction',
        title: 'The Great Gatsby',
        price: 19.99
    },
    {
        id: 2,
        img: '/books/image2.webp',
        genre: 'Fiction',
        title: 'To Kill a Mockingbird',
        price: 29.99
    },
    {
        id: 3,
        img: '/books/image3.webp',
        genre: 'Science Fiction',
        title: '1984',
        price: 15.99
    },
    {
        id: 4,
        img: '/books/image4.webp',
        genre: 'Fiction',
        title: 'Pride and Prejudice',
        price: 25.99
    },
    {
        id: 5,
        img: '/books/image5.webp',
        genre: 'Fiction',
        title: 'The Catcher in the Rye',
        price: 9.99
    },
    {
        id: 6,
        img: '/books/image6.webp',
        genre: 'Fantasy',
        title: 'The Hobbit',
        price: 12.99
    },
    {
        id: 7,
        img: '/books/image7.webp',
        genre: 'Fiction',
        title: 'Moby Dick',
        price: 22.99
    }
    ,
    {
        id: 8,
        img: '/books/image8.webp',
        genre: 'Mystery',
        title: 'The Da Vinci Code',
        price: 18.99
    }
];

export default function TrendingProducts() {
    return(
        <div className="container mt-32">
            <div className="sm:flex justify-between items-center">
                <h2 className="text-4xl font-medium">Trending Products</h2>
                <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                    <div className="text-black">New</div>
                    <div>Featured</div>
                    <div>Top Sellers</div>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                {
                    products.map((item) => (
                    
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            genre={item.genre}
                        />))
                }
            </div>
        </div>
    )
}