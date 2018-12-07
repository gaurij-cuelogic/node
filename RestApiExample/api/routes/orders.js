const express = require('express');
const router =  express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'ORDERS WERE FETCHED'
    });
})

router.post('/',(req,res,next)=>{
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'ORDER WAS CREATED',
        order: order
    });
})

router.get('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message: 'ORDERS DETAILS',
        orderId: req.params.orderId
    });
})

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message: 'ORDER DELETED',
        orderId: req.params.orderId
    });
})

module.exports= router;