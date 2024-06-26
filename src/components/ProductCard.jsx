import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ product, handleClick }) => {
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  const handleCardClick = () => {
    handleClick(product);
  };

  return (
    <Link
      to={{ pathname: '/productpage', state: { product } }}
      className="max-w-[300px] mx-auto h-[400px] flex flex-col"
    >
      <Card
        className="h-[100%] flex flex-col"
        onClick={handleCardClick}
      >
        <CardHeader shadow={false} floated={false} className="h-56 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-cover rounded-t-md"
          />
        </CardHeader>
        <CardBody className="p-4 flex-grow">
          <div className="mb-2">
            <Typography color="blue-gray" className="font-medium mb-1">
              {truncateString(product.title, 20)}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Från {product.price.toFixed(2)} SEK
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="mt-auto">
            {/* You can remove the button */}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
