import React from 'react'
import Image from 'next/image';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}



const ProductCard: React.FC<propsType> = ({img, title, desc, rating, price}) => {


    const generatingRating = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                    </div>
                );
                case 2:
                return (
                    <div className="flex gap-1 text-[20px] text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                    </div>
                );
                
                case 3:
                    return (
                        <div className="flex gap-1 text-[20px] text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        <FaRegStar />
                        </div>
                    );
                    case 4:
                        return (
                            <div className="flex gap-1 text-[20px] text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            <FaRegStar />
                            </div>
                        );
                        case 5:
                            return (
                                <div className="flex gap-1 text-[20px] text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt /> 
                                <FaRegStar />
                                </div>
                            );
                            case 6:
                                return (
                                    <div className="flex gap-1 text-[20px] text-yellow-500">
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt /> 
                                    <FaRegStar />
                                    </div>
                                );
        
            default:
                return null;
        }
    };


  return (
    <div className="px-6  border border-red-700 rounded-xl max-w-[400px] " >
      <div>
        <Image className="w-[300px] h-[250px] pt-3 hover:scale-110 transition-transform duration-300" src={img} width={200} height={300} alt={title} />
      </div>


<div className="space-y-2 py-2">
<h2 className="text-red-600 font-medium uppercase">{title} </h2>
    <p className="text-red-600 max-w-[150px]">{desc}</p>
    <div>{generatingRating(rating)} </div>

    <div className="font-bold flex ">
    <span className="text-red-600">PKR:{price}</span>
        PKR:{price}
        <del className="text-red-600 font-normal" >
            PKR:{parseInt(price) +  900}
            </del>


          

    </div>
</div>
    </div>



  )
}

export default ProductCard
