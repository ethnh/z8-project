import Button from "../../Shared/Button";
import Container from "../../Shared/Container";
import Input from "../../Shared/Input";
import { FaDiceD6 } from "react-icons/fa";
import SocialButton from "../../Shared/SocialButton";
import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";


const BillingInformation = () => {
    return (
        <div className="p-6">
            <Container className={'bg-[#FBFBFB] p-8'}>
                <h1 className="text-lg font-bold">Billing Information</h1>
                <div className="flex-1">
                    <form className="flex gap-7 justify-between">
                        <div className="flex-1">
                            <div>
                                <label className="label">
                                    <span className="text-[15px] font-medium text-[#1D1D1B]">Business Name*</span>
                                </label>
                                <Input type="text" className="py-[8px]" placeholder='Visitor Analytics' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-[15px] font-medium text-[#1D1D1B]">Business Address*</span>
                                </label>
                                <Input type="text" className="py-[8px]" placeholder='Argentina' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-[15px] font-medium text-[#1D1D1B]">First Name*</span>
                                </label>
                                <Input type="text" className="py-[8px]" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div>
                                <label className="label">
                                    <span className="text-[15px] font-medium text-[#1D1D1B]">Business Sector*</span>
                                </label>
                                <Input type="text" className="py-[8px]" placeholder='Arts, Media & Entertainment' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-[15px] font-medium text-[#1D1D1B]">Country*</span>
                                </label>
                                <Input type="text" className="py-[8px]" placeholder='Argentina' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-[15px] font-medium text-[#1D1D1B]">Last Name*</span>
                                </label>
                                <Input type="text" className="py-[8px]" />
                            </div>
                        </div>
                    </form>
                </div>
            </Container>

            <Container className={'bg-[#FBFBFB] p-10 my-7'}>
                <div className="flex gap-10">
                    <div className="flex-1">
                        <h1 className="text-lg font-bold">Current Plan : Sr. Manager</h1>
                        <p>Thanks for being a premium member and supporting our development.</p>
                        <div className="flex justify-between items-center my-7">
                            <div className="flex gap-4 items-center my-7">
                                <div className="bg-[#EFF4FA] p-5 rounded-md">
                                    <FaDiceD6 className="text-2xl text-gray-500"></FaDiceD6>
                                </div>
                                <div>
                                    <p>Current Plan</p>
                                    <h1 className="text-[#1D1D1B] text-lg font-semibold">550.000 Monthly Visits</h1>
                                </div>
                            </div>
                            <div>
                                <CiCirclePlus className="text-xl cursor-pointer"></CiCirclePlus>
                            </div>
                        </div>
                        <div className="flex justify-start gap-4">
                            <Button className='px-3 py-2 text-white'>Change Plan</Button>
                            <SocialButton className='px-3 py-2 text-[#FF9898]'>Reset Plan</SocialButton>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-lg font-bold">Current Plan : Sr. Manager</h1>
                        <p>Thanks for being a premium member and supporting our development.</p>
                        <div className="flex justify-between items-center my-7">
                            <div className="flex gap-4 items-center my-7">
                                <div className="bg-[#EFF4FA] p-5 rounded-md">
                                    <CiCreditCard1 className="text-2xl text-gray-500"></CiCreditCard1>
                                </div>
                                <div>
                                    <p>Mastercard</p>
                                    <h1 className="text-[#1D1D1B] text-lg font-semibold">******20245</h1>
                                </div>
                            </div>
                            <div>
                                <CiEdit className="text-xl cursor-pointer"></CiEdit>
                            </div>
                        </div>

                        <p className="my-7">If you updated your payment method, it will only be dislpayed here after your next billing cycle.</p>
                        <div className="flex justify-start gap-4">
                            <SocialButton className='px-3 py-2 text-[#FF9898]'>Reset Plan</SocialButton>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end  gap-4 my-7">
                    <Button className='px-3 py-2 text-white'>Save</Button>
                    <SocialButton className='px-3 py-2 bg-[#FFEBEB] text-[#FF9898]'>Cancel</SocialButton>
                </div>
            </Container>
        </div>
    );
};

export default BillingInformation;