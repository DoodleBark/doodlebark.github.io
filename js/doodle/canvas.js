/**
 * The Doodle Canvas.
 * @author Glitch Bork <glitchbork.dev@gmail.com>
 */



/**
 * @param {HTMLElement}  canvas   
 * @param {Object}       options  
 * @constructor
 */
Doodle.Canvas = function( canvas, options = {} ) {
    // Self-referencer.
    const CANVAS = this;



    // Getting/setting variables.
    CANVAS.canvas = canvas || document.createElement('canvas');
    Object.assign(CANVAS.options, {
        background: '#FFF',
        target_fps: 30,
    }, options);

    CANVAS.running = false;
    CANVAS.fps     = -1;


    // Setting element attributes.
    this.canvas.classList.add('doodle-canvas');



    /////////////////////
    // #region // LOOP //

        let fps_timer = -1;
        let last_time = -1;
        let ms        = 1000 / CANVAS.options.target_fps;
        let delta     = 0;
        let frames    = 0;

        /**
         * The function that starts the loop.
         */
        CANVAS.loop.start = function() {
            CANVAS.running = true;
            CANVAS.fps     = 0;

            fps_timer = Date.now();
            last_time = Date.now();
            delta     = 0;
            frames    = 0;
            
            // Running loop.
            requestAnimationFrame(CANVAS.loop);
        };

        /**
         * The function that stops the loop.
         */
        CANVAS.loop.stop = function() {
            CANVAS.running = false;
            CANVAS.fps     = -1;

            fps_timer = -1;
            last_time = -1;
        };
    


        /**
         * The function that loops.
         */
        CANVAS.loop = function() {
            let now = Date.now();

            delta += ( now - last_time ) / ms;
            last_time = now;



            if(delta >= 1) {
                // Loop operations.
                // Update
                delta--;
                // Draw
                frames++;
            }



            // Getting FPS each calculatable second that passes.
            if( (now - timer) > 1000 ) {
                timer += 1000;
                CANVAS.fps = frames;
                frames = 0;
            }

            // Running loop again.
            if(CANVAS.running) requestAnimationFrame(CANVAS.loop);
        };

    // #endregion LOOP //
    /////////////////////
};