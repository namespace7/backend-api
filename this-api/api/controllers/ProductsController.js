/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Products = require("../services/Products");

module.exports = {
    //get products
    getProducts(req,res){
        let dataObj = {};
        dataObj = req.body;
        console.log('______________________________');
        // console.log('data->',data);
        // console.log(req.query);       
        // let data2 = req.params;
        // console.log('data2->',data);
        let data = Products.getProducts(dataObj);
        return res.ok({status: true, data: data, count: 1});

    },
    //add a new products
    addProducts(req,res){
        let data = req.body;
        console.log('________________________________');
        // console.log('data->',data);
        return res.ok();
    }
}