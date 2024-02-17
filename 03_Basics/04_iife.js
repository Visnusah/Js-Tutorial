// Immediately Invoked Function Expressions (IIFE)

function database(){
    console.log(`DB connected!`);
    
}
database(); // if not put semi colon than error will occur when two IIFE used in single file.

/** Named IIFE */
// If we use two IIFE in single file than use (); at the last of iife either named iife or simple iife is used.

(function database_01() {
    console.log(`New_01 DB connected !`);
    
})();

/**  Simple IIFE */

(()=> {
    console.log(`New Database_02`);
}) ();

/** Parameter IIFE */

((name)=> {
    console.log(`New Database_02 of ${name}.`);
}) ("kamlesh");


