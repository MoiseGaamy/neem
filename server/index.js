const express = require('express');
const stripe = require('stripe');


const app = express();
const port = 5000

const public_key = "pk_test_51KmZ6wJTYLp9uVuoLj2PMClgIcKQlKLbn8sDV9atVKYPSpuI9femLRz44i3m47h83ObHXTxqnrTNry2v8a3vKDye00NVJoTnWX"
const secret_key = "sk_test_51KmZ6wJTYLp9uVuo9dXWvw6EDOk59pgonIhmg7uSNoxGk4tYP2y73cHH6vDdyQ2kFUIjmQ2u99GuyUpjo090cVZK00WV1hArj2"

 stripe(secret_key,{apiVersion:"2020-08-27"})
 

app.post('/create-payment-intent', async (req, res) =>
{
     try {
         const paymentIntent = await stripe.paymentIntents.create({
         amount: 1099,
         currency:"usd",
         payment_method_types: ["card"],
         })
         const clientSecret = paymentIntent.client_secret;
 
         res.json({
             clientSecret:clientSecret
         })
     } catch (error) {
         console.log(error.message);
         res.json({error:error.message})
     }
 })

 app.listen(port,()=> console.log(`server is running${port}`))
 
