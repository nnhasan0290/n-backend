import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51La7LJCWTGW8asVQF4jQjuSeYEfPZHXJOiNwu5waAj1aJpRQiPdUPBcLBpWWrXatP6vZC3CKP6BEfyvJ4NDfPWFi00RhNB02pP");

(async () => {
  const customer = await stripe.customers.create({
    email: 'nazmulhasan0290@gmail.com',
  });

})();
export default stripe;