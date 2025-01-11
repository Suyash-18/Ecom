import ProductCard from "./ProductCard";

const products = [
    {
        id: 2,
        img: '/books/image2.webp',
        genre: 'Fiction',
        title: 'To Kill a Mockingbird',
        price: 29.99
    },
    {
        id: 4,
        img: '/books/image4.webp',
        genre: 'Fiction',
        title: 'Pride and Prejudice',
        price: 25.99
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

export default function NewArrival() {
    return(
        <div className="container mt-32">
            <div className="sm:flex justify-between items-center">
                <h2 className="text-4xl font-medium">New Arrival</h2>
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