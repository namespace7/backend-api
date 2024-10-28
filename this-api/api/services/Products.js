/**
 * 
 * Products services
 */

let i= 0;

module.exports = {

    getProducts(dataObj= {}){
        console.log('____________________________');
        console.log('dataObj->',dataObj);

        let data = 'Data Coming from Service';
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM `products` WHERE `name` IS NOT NULL AND `status` = ?'
            
            // SELECT * FROM `products` WHERE `name` IS NOT NULL AND `status` = 1

            let queryParams = [1];
            console.log(query);
            console.log(queryParams);console.log('i->',i);
            i++;
            db.query(query, queryParams, (err, result) => {
              if (err){
                console.log('error->',err);
                throw err
              }
              console.log('result->',result);
              if (!result || !result.affectedRows) return resolve(null);
              console.log('result->',result);
              return resolve(result);
            });
        });
    },
    addProduct(dataObj = {}){
        console.log('____________________________');
        console.log('dataObj->',dataObj);
    }

}