import Hapi from 'hapi';

//const server = new Hapi.Server();

const server = new Hapi.Server({  
    host: 'localhost',
    port: 8080
  })

server.route( {

    method: 'GET',
    path: '/hello',
    handler: ( request, reply ) => {
        return 'hello world';

    }

} );

server.start( err => {

    if( err ) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

} );