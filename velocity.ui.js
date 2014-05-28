    /*
    animations is declared like this:
    - simple (one or more rules, in one duration):
    'name':{style:value,style2:value}
    - complex (one or more rules, split duration):
    'name':[
    [{style:value,style2:value},'unitless percentage of duration'||{options}],
    [{style:value,style2:value},'unitless percentage of duration'||{options}]
    ]
    */
    jQuery.velocity.add_sequence = function(name,calls){
        if(!Array.isArray(calls)){
            calls = [[calls,100]];
        }
       jQuery.velocity.Sequences[name] = function(el, options){
           var options = options || {},
               duration = options.duration || 1000,
               parts_count = calls.length;

               calls.forEach(function(call,i){
                   var opts = (/(\d)$/i.test(call[1])) ? {duration:call[1]} : call[1]; // nice with shorthand duration
                   if(i+1===parts_count) opts.complete = options.complete;
                   opts.duration = (duration/100)*opts.duration;

                   jQuery.velocity.animate(el,call[0],opts);
               });
       };
   };
   
/*!
 Animate.css - http://daneden.me/animate
 Licensed under the MIT license

 Copyright (c) 2013 Daniel Eden

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
    var _big = "2000px",
        _big_neg = "-"+_big,
        _small = "20px",
        _small_neg = "-"+_small;

    var add_sequence = jQuery.velocity.add_sequence;

    // attention seekers
    add_sequence('bounce',[
        [{translateY:[0,0]},20],
        [{translateY:'-30px'},20],
        [{translateY:0},10],
        [{translateY:'-15px'},10],
        [{translateY:0},20]
    ]);
    add_sequence('flash',[
        [{opacity:[0,1]},25],
        [{opacity:1},25],
        [{opacity:0},25],
        [{opacity:1},25]
    ]);
    add_sequence('pulse',[
        [{scaleX:[1.1,1],scaleY:[1.1,1]},50],
        [{scaleX:1,scaleY:1},50]
    ]);
    add_sequence('rubberBand',[
        [{scaleX:[1.25,1],scaleY:[0.75,1]},30],
        [{scaleX:0.75,scaleY:1.25},10],
        [{scaleX:1.15,scaleY:0.85},20],
        [{scaleX:1,scaleY:1},40]
    ]);
    add_sequence('shake',[
        [{translateX:['-10px',0]},10],
        [{translateX:'10px'},10],
        [{translateX:'-10px'},10],
        [{translateX:'10px'},10],
        [{translateX:'-10px'},10],
        [{translateX:'10px'},10],
        [{translateX:'-10px'},10],
        [{translateX:'10px'},10],
        [{translateX:'-10px'},10],
        [{translateX:0},10]
    ]);
    add_sequence('swing',[
        [{rotateZ:['15deg',0]},20],
        [{rotateZ:'-10deg'},20],
        [{rotateZ:'5deg'},20],
        [{rotateZ:'-5deg'},20],
        [{rotateZ:'0deg'},20]
    ]);
    add_sequence('tada',[
        [{scaleX:[0.9,1],scaleY:[0.9,1],rotateZ:['-3deg',0]},10],
        [{scaleX:0.9,scaleY:0.9,rotateZ:'-3deg'},10],
        [{scaleX:1.1,scaleY:1.1,rotateZ:'3deg'},10],
        [{scaleX:1.1,scaleY:1.1,rotateZ:'-3deg'},10],
        [{scaleX:1.1,scaleY:1.1,rotateZ:'3deg'},10],
        [{scaleX:1.1,scaleY:1.1,rotateZ:'-3deg'},10],
        [{scaleX:1.1,scaleY:1.1,rotateZ:'3deg'},10],
        [{scaleX:1.1,scaleY:1.1,rotateZ:'-3deg'},10],
        [{scaleX:1.1,scaleY:1.1,rotateZ:'3deg'},10],
        [{scaleX:1,scaleY:1,rotateZ:0},10]
    ]);
    add_sequence('wobble',[
        [{translateX:['-25%',0],rotateZ:'-5deg'},15],
        [{translateX:'20%',rotateZ:'3deg'},15],
        [{translateX:'-15%',rotateZ:'-3deg'},15],
        [{translateX:'10%',rotateZ:'2deg'},15],
        [{translateX:'-5%',rotateZ:'-1deg'},15],
        [{translateX:'0%',rotateZ:0},15]
    ]);

    // bouncing entrances
    add_sequence('bounceIn',[
        [{opacity:[1,0],scaleX:[1.05,0.3],scaleY:[1.05,0.3]},50],
        [{scaleX:0.9,scaleY:0.9},20],
        [{scaleX:1,scaleY:1},30]
    ]);
    add_sequence('bounceInDown',[
        [{opacity:[1,0],translateY:['30px',_big_neg]},60],
        [{translateY:'-10px'},20],
        [{translateY:0},20]
    ]);
    add_sequence('bounceInLeft',[
        [{opacity:[1,0],translateX:['30px',_big_neg]},60],
        [{translateX:'-10px'},20],
        [{translateX:0},20]
    ]);
    add_sequence('bounceInRight',[
        [{opacity:[1,0],translateX:['-30px',_big]},60],
        [{translateX:'10px'},20],
        [{translateX:0},20]
    ]);
    add_sequence('bounceInUp',[
        [{opacity:[1,0],translateY:['-30px',_big]},60],
        [{translateY:'10px'},20],
        [{translateY:0},20]
    ]);

    // bouncing exits
    add_sequence('bounceOut',[
        [{opacity:[1,1],scaleX:[0.95,1],scaleY:[0.95,1]},25],
        [{scaleX:1.1,scaleY:1.1},25],
        [{opacity:0,scaleX:0.3,scaleY:0.3},50]
    ]);
    add_sequence('bounceOutDown',[
        [{opacity:[1,1],translateY:[_small_neg,0]},20],
        [{opacity:0,translateY:_big},80]
    ]);
    add_sequence('bounceOutLeft',[
        [{opacity:[1,1],translateX:[_small,0]},20],
        [{opacity:0,translateX:_big_neg},80]
    ]);
    add_sequence('bounceOutRight',[
        [{opacity:[1,1],translateX:[_small_neg,0]},20],
        [{opacity:0,translateX:_big},80]
    ]);
    add_sequence('bounceOutUp',[
        [{opacity:[1,1],translateY:[_small,0]},20],
        [{opacity:0,translateY:_big_neg},80]
    ]);

    // fading entrances
    add_sequence('fadeIn',{
        opacity:[1,0]
    });
    add_sequence('fadeInDown',{
        opacity:[1,0],
        translateY:[0,_small_neg]
    });
    add_sequence('fadeInDownBig',{
        opacity:[1,0],
        translateY:[0,_big_neg]
    });
    add_sequence('fadeInLeft',{
        opacity:[1,0],
        translateX:[0,_small_neg]
    });
    add_sequence('fadeInLeftBig',{
        opacity:[1,0],
        translateX:[0,_big_neg]
    });
    add_sequence('fadeInRight',{
        opacity:[1,0],
        translateX:[0,_small]
    });
    add_sequence('fadeInRightBig',{
        opacity:[1,0],
        translateX:[0,_big]
    });
    add_sequence('fadeInUp',{
        opacity:[1,0],
        translateY:[0,_small]
    });
    add_sequence('fadeInUpBig',{
        opacity:[1,0],
        translateY:[0,_big]
    });

    // fading exits
    add_sequence('fadeOut',{
        opacity:[0,1]
    });
    add_sequence('fadeOutDown',{
        opacity:[0,1],
        translateY:[_small,0]
    });
    add_sequence('fadeOutDownBig',{
        opacity:[0,1],
        translateY:[_big,0]
    });
    add_sequence('fadeOutLeft',{
        opacity:[0,1],
        translateX:[_small_neg,0]
    });
    add_sequence('fadeOutLeftBig',{
        opacity:[0,1],
        translateX:[_big_neg,0]
    });
    add_sequence('fadeOutRight',{
        opacity:[0,1],
        translateX:[_small,0]
    });
    add_sequence('fadeOutRightBig',{
        opacity:[0,1],
        translateX:[_big,0]
    });
    add_sequence('fadeOutUp',{
        opacity:[0,1],
        translateY:[_small_neg,0]
    });
    add_sequence('fadeOutUpBig',{
        opacity:[0,1],
        translateY:[_big_neg,0]
    });

    // flippers .. not complete yet
    add_sequence('flip',[
        [{transformPerspective:[400,400],translateZ:['150px',0],rotateY:['170deg',0],scaleY:[1,1],scaleX:[1,1]},40],
        [{transformPerspective:400,rotateY:'190deg'},10],
        [{transformPerspective:400,translateZ:0,rotateY:'360deg',scaleY:0.95,scaleX:0.95},30],
        [{transformPerspective:400,scaleY:1,scaleX:1},20]
    ]);
    add_sequence('flipInX',[
        [{transformPerspective:[400,400],rotateX:['-10deg','90deg'],opacity:[0.4,0]},40],
        [{transformPerspective:400,rotateX:'10deg',opacity:0.7},30],
        [{transformPerspective:400,rotateX:0,opacity:1},30]
    ]);
    add_sequence('flipInY',[
        [{transformPerspective:[400,400],rotateY:['-10deg','90deg'],opacity:[0.4,0]},40],
        [{transformPerspective:400,rotateY:'10deg',opacity:0.7},30],
        [{transformPerspective:400,rotateY:0,opacity:1},30]
    ]);
    add_sequence('flipOutX',{transformPerspective:[400,400],rotateX:['90deg',0],opacity:[0,1]});
    add_sequence('flipOutY',{transformPerspective:[400,400],rotateY:['90deg',0],opacity:[0,1]});

    // lightspeed
    add_sequence('lightSpeedIn',[
        [{
            opacity:[1,0],
            translateX:['-20%','100%'],
            skewX:['30deg','-30deg']
        },60],
        [{
            translateX:'0%',
            skewX:'-15deg'
        },20],
        [{
            skewX:'0deg'
        },20]
    ]);
    add_sequence('lightSpeedOut',{
        opacity:[0,1],
        translateX:['100%','0%'],
        skewX:['-30deg','0deg']
    });

    // rotating entrances
    add_sequence('rotateIn',{transformOriginX:['50%','50%'],transformOriginY:['50%','50%'], transformOriginZ:['0','0'],rotateZ:[0,'-200deg'],opacity:[1,0]});
    add_sequence('rotateInDownLeft',{transformOriginX:['0','0'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'], rotateZ:[0,'-90deg'],opacity:[1,0]});
    add_sequence('rotateInDownRight',{transformOriginX:['100%','100%'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'],rotateZ:[0,'90deg'],opacity:[1,0]});
    add_sequence('rotateInUpLeft',{transformOriginX:['0','0'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'],rotateZ:[0,'90deg'],opacity:[1,0]});
    add_sequence('rotateInUpRight',{transformOriginX:['100%','100%'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'],rotateZ:[0,'-90deg'],opacity:[1,0]});

    // rotating exits
    add_sequence('rotateOut',{transformOriginX:['50%','50%'],transformOriginY:['50%','50%'], transformOriginZ:['0','0'],rotateZ:['200deg',0],opacity:[0,1]});
    add_sequence('rotateOutDownLeft',{transformOriginX:['0','0'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'], rotateZ:['90deg',0],opacity:[0,1]});
    add_sequence('rotateOutDownRight',{transformOriginX:['100%','100%'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'],rotateZ:['-90deg',0],opacity:[0,1]});
    add_sequence('rotateOutUpLeft',{transformOriginX:['0','0'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'],rotateZ:['-90deg',0],opacity:[0,1]});
    add_sequence('rotateOutUpRight',{transformOriginX:['100%','100%'],transformOriginY:['100%','100%'],transformOriginZ:['0','0'],rotateZ:['90deg',0],opacity:[0,1]});

    // sliders
    add_sequence('slideInDown',{translateY: [ 0, _big_neg ]});
    add_sequence('slideInLeft',{translateX: [ 0, _big_neg ]});
    add_sequence('slideInRight',{translateX: [ 0, _big ]});
    add_sequence('slideInUp',{translateY: [ 0, _big ]});
    add_sequence('slideOutDown',{translateY: [ _big, 0 ]});
    add_sequence('slideOutLeft',{translateX: [ _big_neg, 0 ]});
    add_sequence('slideOutRight',{translateX: [ _big, 0 ]});
    add_sequence('slideOutUp',{translateY: [ _big_neg, 0 ]});

    // specials
    add_sequence('hinge',[
        [{transformOriginX:['0','0'],transformOriginY:['0','0'],transformOriginZ:['0','0'], rotateZ:['80deg','easeInOut',0],opacity:[1,1]},40],
        [{rotateZ:['60deg','easeInOut']},40],
        [{rotateZ:['80deg','easeInOut']},40],
        [{rotateZ:['60deg','easeInOut'],translateY:0},40],
        [{translateY:'700px',opacity:[0,1]},40]
    ]);
    add_sequence('rollIn',{translateX:[0,'-100%'],opacity:[1,0],rotateZ:['0deg','-120deg']});
    add_sequence('rollOut',{opacity:[0,1],translateX:['100%',0],rotateZ:['120deg','0deg']});
/*!
 Magic - http://minimamente.com
 Licensed under the MIT license

 Copyright (c) 2014 Christian Pucci

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
// magic effects
    add_sequence('magic',{
        transformOriginX:['200%','100%'],
        transformOriginY:['500%','200%'],
        transformOriginZ:['0','0'],
        rotateZ:['270deg',0],
        scaleX:[0,1],
        scaleY:[0,1],
        opacity:[0,1]
    });
    add_sequence('twisterInDown',[
        [{
            transformOriginX:['0%','0%'],
            transformOriginY:['100%','100%'],
            transformOriginZ:['0','0'],
            rotateZ:['360deg','360deg'],
            scaleX:[0,0],
            scaleY:[0,0],
            translateY:['-100%','-100%'],
            opacity:[1,1]
        },30],
        [{
            transformOriginX:'100%',
            transformOriginY:'100%',
            transformOriginZ:'0',
            rotateZ:'0deg',
            scaleX:1,
            scaleY:1,
            translateY:'0%',
            opacity:1
        },70]
    ]);
    add_sequence('twisterInUp',[
        [{
            transformOriginX:['100%','100%'],
            transformOriginY:['0%','0%'],
            transformOriginZ:['0','0'],
            rotateZ:['360deg','360deg'],
            scaleX:[0,0],
            scaleY:[0,0],
            translateY:['100%','100%'],
            opacity:[1,0]
        },30],
        [{
            transformOriginX:'0',
            transformOriginY:'0',
            transformOriginZ:'0',
            rotateZ:'0deg',
            scaleX:1,
            scaleY:1,
            translateY:'0',
            opacity:1
        },70]
    ]);
    add_sequence('swap',{
        transformOriginX:['100%','0'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        scaleX:[1,0],
        scaleY:[1,0],
        translateX:['0','-700px'],
        translateY:['0','0'],
        opacity:[1,0]
    });

    // bling
    add_sequence('puffIn',{
        opacity:[1,0],
        transformOriginX:['50%','50%'],
        transformOriginY:['50%','50%'],
        transformOriginZ:['0','0'],
        scaleX:[1,2],
        scaleY:[1,2],
        blur:[0,'2px'] // not working yet
    });
    add_sequence('puffOut',{
        opacity:[0,1],
        transformOriginX:['50%','50%'],
        transformOriginY:['50%','50%'],
        transformOriginZ:['0','0'],
        scaleX:[2,1],
        scaleY:[2,1],
        blur:['2px',0] // not working yet
    });
    add_sequence('vanishIn',{
        opacity:[1,0],
        transformOriginX:['50%','50%'],
        transformOriginY:['50%','50%'],
        transformOriginZ:['0','0'],
        scaleX:[1,2],
        scaleY:[1,2],
        blur:[0,'90px'] // not working yet
    });
    add_sequence('vanishOut',{
        opacity:[0,1],
        transformOriginX:['50%','50%'],
        transformOriginY:['50%','50%'],
        transformOriginZ:['0','0'],
        scaleX:[2,1],
        scaleY:[2,1],
        blur:['20px',0] // not working yet
    });

    // Static Effects
    add_sequence('openDownLeft',{
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['-110deg','easeInOut',0]
    });
    add_sequence('openDownRight',{
        transformOriginX:['100%','100%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['110deg','easeInOut',0]
    });
    add_sequence('openUpLeft',{
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['110deg','easeInOut',0]
    });
    add_sequence('openUpRight',{
        transformOriginX:['100%','100%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['-110deg','easeInOut',0]
    });

    add_sequence('openDownLeftRetourn',{
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:[0,'easeInOut','-110deg']
    });
    add_sequence('openDownRightRetourn',{
        transformOriginX:['100%','100%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:[0,'easeInOut','110deg']
    });
    add_sequence('openUpLeftRetourn',{
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:[0,'easeInOut','110deg']
    });
    add_sequence('openUpRightRetourn',{
        transformOriginX:['100%','100%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:[0,'easeInOut','-110deg']
    });

    // Static Effects Out
    add_sequence('openDownLeftOut',{
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['-110deg','easeInOut',0],
        opacity:[0,1]
    });
    add_sequence('openDownRightOut',{
        transformOriginX:['100%','100%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['110deg','easeInOut',0],
        opacity:[0,1]
    });
    add_sequence('openUpLeftOut',{
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['110deg','easeInOut',0],
        opacity:[0,1]
    });
    add_sequence('openUpRightOut',{
        transformOriginX:['100%','100%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateZ:['-110deg','easeInOut',0],
        opacity:[0,1]
    });

    // Perspective
    add_sequence('perspectiveDown',{
        transformPerspective:[800,800],
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateX:['-180deg',0],
        perspective:['800','800'] // for the future
    });
    add_sequence('perspectiveUp',{
        transformPerspective:[800,800],
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateX:['180deg',0],
        perspective:['800','800'] // for the future
    });
    add_sequence('perspectiveLeft',{
        transformPerspective:[800,800],
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateY:['-180deg',0],
        perspective:['800','800'] // for the future
    });
    add_sequence('perspectiveRight',{
        transformPerspective:[800,800],
        transformOriginX:['100%','100%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateY:['180deg',0],
        perspective:['800','800'] // for the future
    });

    add_sequence('perspectiveDownRetourn',{
        transformPerspective:[800,800],
        transformOriginX:['0%','0%'],
        transformOriginY:['100%','100%'],
        transformOriginZ:['0','0'],
        rotateX:[0,'-180deg'],
        perspective:['800','800'] // for the future
    });
    add_sequence('perspectiveUpRetourn',{
        transformPerspective:[800,800],
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateX:[0,'180deg'],
        perspective:['800','800'] // for the future
    });
    add_sequence('perspectiveLeftRetourn',{
        transformPerspective:[800,800],
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateY:[0,'-180deg'],
        perspective:['800','800'] // for the future
    });
    add_sequence('perspectiveRightRetourn',{
        transformPerspective:[800,800],
        transformOriginX:['100%','100%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateY:[0,'180deg'],
        perspective:['800','800'] // for the future
    });

    // Rotate
    add_sequence('rotateDown',{
        transformOriginX:['50%','0%'],
        transformOriginY:['100%','0%'],
        transformOriginZ:['0','0'],
        rotateX:['-180deg',0],
        translateZ:['300px',0],
        opacity:[0,1],
        perspective:['800','800']
    });
    add_sequence('rotateUp',{
        transformOriginX:['50%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateX:['180deg',0],
        translateZ:['100px',0],
        opacity:[0,1],
        perspective:['800','800']
    });
    add_sequence('rotateLeft',{
        transformOriginX:['50%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateY:['180deg',0],
        translateZ:['300px',0],
        opacity:[0,1],
        perspective:['800','800']
    });
    add_sequence('rotateRight',{
        transformOriginX:['50%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        rotateY:['-180deg',0],
        translateZ:['150px',0],
        opacity:[0,1],
        perspective:['800','800']
    });

    // Slide
    add_sequence('slideDown',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateY:['100%',0]
    });
    add_sequence('slideUp',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateY:['-100%',0]
    });
    add_sequence('slideLeft',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateX:['-100%',0]
    });
    add_sequence('slideRight',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateX:['100%',0]
    });

    add_sequence('slideDownRetourn',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateY:[0,'100%']
    });
    add_sequence('slideUpRetourn',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateY:[0,'-100%']
    });
    add_sequence('slideLeftRetourn',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateX:[0,'-100%']
    });
    add_sequence('slideRightRetourn',{
        transformOriginX:['0%','0%'],
        transformOriginY:['0%','0%'],
        transformOriginZ:['0','0'],
        translateX:[0,'100%']
    });

    // Math
    add_sequence('swashOut',[
        [{
            transformOriginX:['50%','50%'],
            transformOriginY:['50%','50%'],
            transformOriginZ:['0','0'],
            scaleX:[0.9,1],
            scaleY:[0.9,1],
            opacity:[1,1]
        },80],
        [{
            transformOriginX:'50%',
            transformOriginY:'50%',
            transformOriginZ:'0',
            scaleX:0,
            scaleY:0,
            opacity:0
        },20]
    ]);
    add_sequence('swashIn',[
        [{
            transformOriginX:['50%','50%'],
            transformOriginY:['50%','50%'],
            transformOriginZ:['0','0'],
            scaleX:[0.9,0],
            scaleY:[0.9,0],
            opacity:[1,0]
        },90],
        [{
            transformOriginX:'50%',
            transformOriginY:'50%',
            transformOriginZ:'0',
            scaleX:1,
            scaleY:1,
            opacity:1
        },20]
    ]);
    add_sequence('foolishOut',[
        [{
            transformOriginX:['0%','50%'],
            transformOriginY:['0%','50%'],
            transformOriginZ:['0','0'],
            scaleX:[0.5,1],
            scaleY:[0.5,1],
            opacity:[1,1],
            rotateZ:[0,'360deg']
        },20],
        [{
            transformOriginX:'100%',
            transformOriginY:'0%',
            transformOriginZ:'0',
            scaleX:0.5,
            scaleY:0.5,
            opacity:1,
            rotateZ:0
        },20],
        [{
            transformOriginX:'0%',
            transformOriginY:'0%',
            transformOriginZ:'0',
            scaleX:0.5,
            scaleY:0.5,
            opacity:1,
            rotateZ:0
        },20],
        [{
            transformOriginX:'0%',
            transformOriginY:'100%',
            transformOriginZ:'0',
            scaleX:0.5,
            scaleY:0.5,
            opacity:1,
            rotateZ:0
        },20],
        [{
            transformOriginX:'50%',
            transformOriginY:'50%',
            transformOriginZ:'0',
            scaleX:0,
            scaleY:0,
            opacity:0,
            rotateZ:0
        },20]
    ]);
    add_sequence('foolishIn',[
        [{
            transformOriginX:['0%','50%'],
            transformOriginY:['100%','50%'],
            transformOriginZ:['0','0'],
            scaleX:[0.5,0],
            scaleY:[0.5,0],
            opacity:[1,0],
            rotateZ:[0,'360deg']
        },20],
        [{
            transformOriginX:'100%',
            transformOriginY:'100%',
            transformOriginZ:'0',
            scaleX:0.5,
            scaleY:0.5,
            opacity:1,
            rotateZ:0
        },20],
        [{
            transformOriginX:'0%',
            transformOriginY:'0%',
            transformOriginZ:'0',
            scaleX:0.5,
            scaleY:0.5,
            opacity:1,
            rotateZ:0
        },20],
        [{
            transformOriginX:'0%',
            transformOriginY:'0%',
            transformOriginZ:'0',
            scaleX:0.5,
            scaleY:0.5,
            opacity:1,
            rotateZ:0
        },20],
        [{
            transformOriginX:'50%',
            transformOriginY:'50%',
            transformOriginZ:'0',
            scaleX:1,
            scaleY:1,
            opacity:1,
            rotateZ:0
        },20]
    ]);
    add_sequence('holeOut',{
        transformOriginX:['50%','50%'],
        transformOriginY:['50%','50%'],
        transformOriginZ:['0','0'],
        opacity:[0,1],
        scaleX:[0,1],
        scaleY:[0,1],
        rotateY:['180deg',0]
    });
    add_sequence('holeIn',{
        transformOriginX:['50%','50%'],
        transformOriginY:['50%','50%'],
        transformOriginZ:['0','0'],
        opacity:[1,0],
        scaleX:[1,0],
        scaleY:[1,0],
        rotateY:[0,'180deg']
    });

    // Tin
    add_sequence('tinDownOut',[
        [{
            opacity:[1,1],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateY:[0,0]
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateY:0
        },10],
        [{
            opacity:1,
            scaleX:1.1,
            scaleY:1.1,
            translateY:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateY:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateY:0
        },10],
        [{
            opacity:0,
            scaleX:1,
            scaleY:1,
            translateY:'900%'
        },50]
    ]);
    add_sequence('tinUpOut',[
        [{
            opacity:[1,1],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateY:[0,0]
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateY:0
        },10],
        [{
            opacity:1,
            scaleX:1.1,
            scaleY:1.1,
            translateY:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateY:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateY:0
        },10],
        [{
            opacity:0,
            scaleX:1,
            scaleY:1,
            translateY:'-900%'
        },50]
    ]);
    add_sequence('tinLeftOut',[
        [{
            opacity:[1,1],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateX:[0,0]
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateX:0
        },10],
        [{
            opacity:1,
            scaleX:1.1,
            scaleY:1.1,
            translateX:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateX:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateX:0
        },10],
        [{
            opacity:0,
            scaleX:1,
            scaleY:1,
            translateX:'-900%'
        },50]
    ]);
    add_sequence('tinRightOut',[
        [{
            opacity:[1,1],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateX:[0,0]
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateX:0
        },10],
        [{
            opacity:1,
            scaleX:1.1,
            scaleY:1.1,
            translateX:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateX:0
        },10],
        [{
            opacity:1,
            scaleX:1,
            scaleY:1,
            translateX:0
        },10],
        [{
            opacity:0,
            scaleX:1,
            scaleY:1,
            translateX:'900%'
        },50]
    ]);

    add_sequence('tinDownIn',[
        [{
            opacity:[1,0],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateY:[0,'900%']
        },50],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10]
    ]);
    add_sequence('tinUpIn',[
        [{
            opacity:[1,0],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateY:[0,'-900%']
        },50],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10]
    ]);
    add_sequence('tinLeftIn',[
        [{
            opacity:[1,0],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateX:[0,'-900%']
        },50],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10]
    ]);
    add_sequence('tinRightIn',[
        [{
            opacity:[1,0],
            scaleX:[1.1,1],
            scaleY:[1.1,1],
            translateX:[0,'900%']
        },50],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10],
        [{
            scaleX:1.1,
            scaleY:1.1
        },10],
        [{
            scaleX:1,
            scaleY:1
        },10]
    ]);

    // Bomb
    add_sequence('bombLeftOut',[
        [{
            transformOriginX:['-100%','50%'],
            transformOriginY:['50%','50%'],
            transformOriginZ:['0','0'],
            opacity:[1,1],
            rotateZ:['-160deg',0],
            blur:[0,0] // for future
        },50],
        [{
            blur:'20px' // for future
        },50]
    ]);
    add_sequence('bombRightOut',[
        [{
            transformOriginX:['200%','50%'],
            transformOriginY:['50%','50%'],
            transformOriginZ:['0','0'],
            opacity:[1,1],
            rotateZ:['160deg',0],
            blur:[0,0] // for future
        },50],
        [{
            blur:'20px' // for future
        },50]
    ]);
