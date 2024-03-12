import * as React from "react"
 import { Heading, HStack, Image, Text, VStack, Flex} from "@chakra-ui/react";
import Button from "./Button";

const Card = ({ title, price, description, imageSrc, type }) => {
    if (type == "special") {
        return (
            <VStack
            className="special-card">
                <div id="card-img-container">
                  <Image src={imageSrc}/>
                </div>
                <Heading size="md">{title}</Heading>
                <Text className="card-price">{price}</Text>
                <Text fontSize="md" className="card-text">{description}</Text>
                <Button className="card-button" buttonLink={'/'} buttonText={"Order a Delivery!"} />
            </VStack>
        );
    } else if (type == "testimony") {
        return (
            <VStack
            className="testimonial-card">
                <Text className="card-price">{price}</Text>
                <div id="card-img-container">
                  <Image src={imageSrc}/>
                </div>
                <Heading size="md">{title}</Heading>
                <Text fontSize="md" className="card-text">{description}</Text>
                <Button className="card-button" buttonLink={'/'} buttonText={"Order a Delivery!"} />
            </VStack>
        );
    }

  };

export default Card;