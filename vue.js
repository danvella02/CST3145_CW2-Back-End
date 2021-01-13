let store = new Vue({
    data: { products: {} },
    // this function runs when creating the Vue instance
    created: function() {
        // replace the URL to your Heroku app and route
        fetch('https://cst3145-cw2.herokuapp.com/collection/products').then(
            function (response) {
                response.json().then(
                    function (json) {
                    // note that we used 'store.product' instead of 'this.product'
                    store.products = json;
                });
            })
    }
})
 
const newProduct = {title: 'new product', price: 49};
// set the url to your server and route
fetch('https://cst3145-cw2.herokuapp.com/collection/products', {
method: 'POST', // set the HTTP method as 'POST'
headers: {
    'Content-Type': 'application/json'
, // set the data type as JSON
    },
    body: JSON.stringify(newProduct), // need to stringify the JSON object
})
.then(response => response.json())
.then(responseJSON => {
console.log('Success:', responseJSON);
});

app.use(function(req, res, next) {
    // allow different IP address
    res.header("Access-Control-Allow-Origin","*");
    // allow different header fields
    res.header("Access-Control-Allow-Headers","*");
    next();
    });
    