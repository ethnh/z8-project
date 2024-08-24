
import Container from "../../Shared/Container";
import PricingCard from "./PricingCard";
const listOneLists = [
    "Unlimited access to Swen",
    "Unrestriccted access to the app",
]
const listTwoLists = [
    "Print edition delivered direct to your door each week",
    "Unlimited customizations",
    "Connect Multiple Account"
]
const CardTwoLists = [
    "Unlimited access to Swen",
    "Unrestriccted access to the app",
    "Print edition delivered direct to your door each week",
    "Unlimited customizations",
    "Connect Multiple Account"
]

const Pricing = () => {


    return (
        <div className="flex gap-8 my-10 p-7">
            <Container className={'bg-white'}>
                <PricingCard title={'web, App Access'} price={'$4.99'} pragraph={'per/month billed monthly. Billing starts after the 14 days free trial'} listOne={listOneLists} listTwo={listTwoLists} btn='Start Free Trial'></PricingCard>
            </Container>
            <Container className={'bg-white duration-300'}>
                <PricingCard title={'web, App Access + Pricing'} price={'$6.99'} pragraph={'per/month billed monthly. Billing starts after the 14 days free trial'} CardTwoLists={CardTwoLists} btn='Start Free Trial'></PricingCard>
            </Container>
            <Container className={'bg-white duration-300'}>
                <PricingCard title={'web, App Access'} price={'$4.99'} pragraph={'per/month billed monthly. Billing starts after the 14 days free trial'} listOne={listOneLists} listTwo={listTwoLists} btn='Start Free Trial'></PricingCard>
            </Container>
        </div>
    );
};

export default Pricing;