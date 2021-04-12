/**
 * @author Glitch Bork <glitchbork.dev@gmail.com>
 */

/**
 * 
 */
function request(url, options = {}) {
    let response;

    let option_defaults = {
        method: 'GET'
    };

    Object.assign(options, option_defaults, options);

    let promise = new Promise( async ( resolve, reject ) => {
        response = await fetch(url, options)
            .then( res => res.json() )
            .catch( err => {
                reject(err);
                return console.error(err);
            });

        resolve(response);
    });

    return promise;
}