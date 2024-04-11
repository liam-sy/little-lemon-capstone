import Card from './ui/Card.js';
import useFetch from "./hooks/useFetch.js";

const url = 'https://randomuser.me/api/??inc=name,nat,picture&results=4&nat=us,gb,au';

const potentialDescriptions = [
    "A gastronomic delight with impeccable service",
    "The freshness of ingredients shines through in every dish.",
    "Amazing variety, something for every taste bud.",
    "Little Lemon is the perfect spot for a memorable dining experience.",
    "A culinary gem! The chefs truly know their craft.",
    "Incredible cuisine! Left the place with a big smile.",
    "Every bite was a piece of heaven. Highly recommended!",
    "Service was top-notch, and the food was divine.",
    "Cozy atmosphere and heartwarming dishes. A must-visit!",
    "An absolute delight! The flavors danced on my palate.",
    'A feast for the senses with every plate presented!',
    'Little Lemon is a place where tradition meets innovation on your plate.',
    'Dishes crafted with passion, presented with pride.',
    'Little Lemon\'s ambiance added to the allure of the dining experience, with a service team that anticipated every need. It was hospitality at its finest.',
    'An evening spent here is an evening well spent!',
    'Little Lemon is a testament to what happens when passion meets plate. The dedication to crafting memorable meals is evident with every course served.',
    'From the moment I stepped in, Little Lemon delivered beyond expectations.',
];


function useTestimonials(url) {
    const { data, loading, error } = useFetch(url);

    //console.log("test")

    if (loading) {
        console.log('Data is loading...');
        return { testimonials: [], loading, error };
    }

    if (error) {
        console.log('Error:', error);
        return { testimonials: [], loading, error };
    }

    let testimonials = [];

    if (data && data.results.length > 0) {
        testimonials = data.results.map((personData) => ({
            name: `${personData.name.first} ${personData.name.last[0]}.`,
            price: Math.floor(Math.random() * 2) + 4,
            description: `"${potentialDescriptions[Math.floor(Math.random() * potentialDescriptions.length)]}"`,
            imageSrc: personData.picture.large
        }));
    }

    console.log(testimonials)

    return { testimonials, loading, error };
}

const Testimonials = () => {
    const { testimonials, loading, error } = useTestimonials(url);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
        <div className="testimonials-wrapper">
            <div className="testimonials-header">
                <h2>Testimonials</h2>
            </div>
            <div className="testimonials-card-wrapper">
            {testimonials.map((testimony) => (
                    <Card
                        className="testimonials-card"
                        key={testimony.name}
                        title={testimony.name}
                        price={testimony.price}
                        description={testimony.description}
                        imageSrc={testimony.imageSrc}
                        type={"testimony"}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Testimonials;