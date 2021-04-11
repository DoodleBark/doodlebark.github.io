/**
 * Interpreter for the Doodle language.
 * @author Glitch Bork <glitchbork.dev@gmail.com>
 */

const Doodle = {};



////////////////////////////
// #region // ENVIRONMENT //

    /**
     * @constructor
     */
    Doodle.Environment = function() {
        const ENV = this;

        ENV.variables = {};

        ENV.pieces = [];
        ENV.interpreted = [];
    };



    ///////////////////////
    // #region // PIECES //

        /**
         * @constructor
         */
        Doodle.Environment.Segment = function() {};
        


        ///////////////////////////////
        // #region // VARIABLE TYPES //

            /**
             * @constructor
             */
            Doodle.Environment.String = function( value = '' ) {
                const STRING = this;

                STRING.value = value;
            }; // String

            /**
             * @constructor
             */
            Doodle.Environment.Number = function( value = '' ) {
                const NUMBER = this;

                NUMBER.value = value;
            }; // Number

            ///////////////////////
            // #region // STRUCT //
            
                /**
                 * @constructor
                 */
                Doodle.Environment.Struct = function() {
                    const STRUCT = this;

                    STRUCT.items = {};


                    // Getters/Setters
                    /**
                     * Gets item from struct.
                     * @param {String=}  key  Item key.
                     * @returns Returns item from struct with given key, or entire struct if no key given.
                     */
                    STRUCT.get = function( key = '' ) {
                        if(key.length) return STRUCT.items[key];
                        return STRUCT.items;
                    };

                    /**
                     * Sets value of item in struct with given key and value.
                     * @param {String=}  key    Item key.
                     * @param {*}        value  Item value.
                     * @returns Struct.
                     */
                    STRUCT.set = function( key = '', value = null ) {
                        if(key.length) STRUCT.items[key] = value;
                        return STRUCT;
                    };



                    /**
                     * Gets all the keys in the struct.
                     * @returns Struct keys.
                     */
                    STRUCT.keys = function() {
                        return Object.keys(STRUCT.items);
                    };

                    /**
                     * Gets number of items in struct.
                     * @returns Number of items.
                     */
                    STRUCT.count = function() {
                        return Object.keys(STRUCT.items).length;
                    };
                }; // Struct

                Doodle.Environment.Struct.assign = function() {};

            // #endregion STRUCT //
            ///////////////////////

            /**
             * @constructor
             */
            Doodle.Environment.Array = function() {
                const ARRAY = this;

                ARRAY.items = [];
            }; // Array
        
        // #endregion VARIABLE TYPES //
        ///////////////////////////////


        Doodle.Environment.Variable = function() {};
        Doodle.Environment.Function = function() {
            const FUNC = this;

            FUNC.variables = {};
        };
        Doodle.Environment.Comparison = function() {};
    
    // #endregion PIECES //
    ///////////////////////

// #endregion ENVIRONMENT //
////////////////////////////

////////////////////////////
// #region // INTERPRETER //

    /**
     * Interprets Doodle and turns it into something that can be rendered.
     */
    Doodle.interpreter = function( code ) {
    };

// #endregion INTERPRETER //
////////////////////////////