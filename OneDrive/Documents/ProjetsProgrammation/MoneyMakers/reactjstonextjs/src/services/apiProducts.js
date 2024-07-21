export async function getProducts(language) {

   try {
        //retrieve products from gumroad 
        const response = await fetch('https://api.gumroad.com/v2/products', {
            headers: {
                'Authorization': 'Bearer 29N2C-dm7Et1VZYIuGCQb6c1ODEwicVCBHF5iksCINo'
            }
        });


        if (!response.ok) {
            // Check if the response status is 4xx or 5xx to provide specific error messages
            if (response.status >= 400 && response.status < 500) {
              throw new Error('Client error: Failed to retrieve products from the server.');
            } else if (response.status >= 500) {
              throw new Error('Server error: An error occurred on the server.');
            }
        }


        const data = await response.json();
        const publishedProducts = data.products
                                  .filter(product => product.published === true)
                                  .filter(product => product.tags.includes(language)) //only display the templates of the selected language
        return publishedProducts

   }catch(e) {
        throw new Error(`Failed to fetch products: ${error.message}`);
   }

}