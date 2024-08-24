import { BsCheck2 } from "react-icons/bs";
import PricingBtn from "../../Shared/PricingBtn";



const PricingCard = ({ title, price, pragraph, btn, listOne, listTwo, CardTwoLists }) => {
    return (
        <div className="card card-compact">
            <div className="p-6">
                <span className="px-3 py-1 rounded-3xl text-[#161616] font-semibold text-base border border-[#D5E1E3]">{title}</span>
                <h1 className="text-[#161616] text-4xl font-bold my-6">{price}</h1>
                <p className="mb-6 text-[#404143]">{pragraph}</p>
                <PricingBtn className={'mb-6'}>{btn}</PricingBtn>

                <div>
                    {
                        CardTwoLists ? <ul>
                            {CardTwoLists.map((CardTwoLists, index) => (
                                <li className='flex items-center gap-2 text-[#282828] my-2' key={index}><BsCheck2 className='text-[#524FF6] text-[16px]'></BsCheck2> {CardTwoLists}</li>
                            ))}
                        </ul> : <></>
                    }
                    {
                        listOne ? <ul>
                            {listOne.map((listOne, index) => (
                                <li className='flex items-center gap-2 text-[#282828] my-2' key={index}><BsCheck2 className='text-[#524FF6] text-[16px]'></BsCheck2> {listOne}</li>
                            ))}
                        </ul> : <></>
                    }
                    {
                        listTwo ? <ul>
                            {listTwo.map((listTwo, index) => (
                                <li className='flex items-center gap-2 text-[#BDBDBD] my-2' key={index}><BsCheck2 className='text-[#C9C6F9] text-[16px]'></BsCheck2> {listTwo}</li>
                            ))}
                        </ul> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingCard;