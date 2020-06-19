var xOffSet = -2;
var yOffSet = 12;
var zOffSet = 14;
var initialParticlesIdx = 0;

var initialParticles = {};

[
    {x: xOffSet, y: yOffSet, z: zOffSet},

    {x: 2   + xOffSet, y: 2 + yOffSet, z: zOffSet},
    {x: 2   + xOffSet, y: -2 + yOffSet, z: zOffSet},
    {x: -2  + xOffSet, y: -2 + yOffSet, z: zOffSet},
    {x: -2  + xOffSet, y: 2 + yOffSet, z: zOffSet},

    {x: 4   + xOffSet, y: 4 + yOffSet, z: zOffSet},
    {x: 4   + xOffSet, y: yOffSet, z: zOffSet},
    {x: 4   + xOffSet, y: -4 + yOffSet, z: zOffSet},
    {x: xOffSet, y: 4 + yOffSet, z: zOffSet},
    {x: xOffSet, y: -4 + yOffSet, z: zOffSet},
    {x: -4  + xOffSet, y: 4 + yOffSet, z: zOffSet},
    {x: -4  + xOffSet, y: yOffSet, z: zOffSet},
    {x: -4  + xOffSet, y: -4 + yOffSet, z: zOffSet},

    {x: 6   + xOffSet, y: 2 + yOffSet, z: zOffSet},
    {x: 6   + xOffSet, y: -2 + yOffSet, z: zOffSet},
    {x: -6  + xOffSet, y: 2 + yOffSet, z: zOffSet},
    {x: -6  + xOffSet, y: -2 + yOffSet, z: zOffSet},
    {x: 2   + xOffSet, y: 6 + yOffSet, z: zOffSet},
    {x: -2  + xOffSet, y: 6 + yOffSet, z: zOffSet},
    {x: 2   + xOffSet, y: -6 + yOffSet, z: zOffSet},
    {x: -2  + xOffSet, y: -6 + yOffSet, z: zOffSet},

//{x:   0     + xOffSet, y: 8 + yOffSet, z: 0 + zOffSet},
//{x:   0     + xOffSet, y: -8 + yOffSet, z: 0 + zOffSet},
//{x:   8     + xOffSet, y: 0 + yOffSet, z: 0 + zOffSet},
//{x:   -8    + xOffSet, y: 0 + yOffSet, z: 0 + zOffSet},

    {x: xOffSet, y: 2 + yOffSet, z: 2 + zOffSet},
    {x: xOffSet, y: -2 + yOffSet, z: 2 + zOffSet},
    {x: -2  + xOffSet, y: yOffSet, z: 2 + zOffSet},
    {x: 2   + xOffSet, y: yOffSet, z: 2 + zOffSet},
    {x: xOffSet, y: 2 + yOffSet, z: -2 + zOffSet},
    {x: xOffSet, y: -2 + yOffSet, z: -2 + zOffSet},
    {x: -2  + xOffSet, y: yOffSet, z: -2 + zOffSet},
    {x: 2   + xOffSet, y: yOffSet, z: -2 + zOffSet},

    {x: 4   + xOffSet, y: 2 + yOffSet, z: 2 + zOffSet},
    {x: 4   + xOffSet, y: -2 + yOffSet, z: 2 + zOffSet},
    {x: -4  + xOffSet, y: 2 + yOffSet, z: 2 + zOffSet},
    {x: -4  + xOffSet, y: -2 + yOffSet, z: 2 + zOffSet},
    {x: 2   + xOffSet, y: 4 + yOffSet, z: 2 + zOffSet},
    {x: 2   + xOffSet, y: -4 + yOffSet, z: 2 + zOffSet},
    {x: -2  + xOffSet, y: 4 + yOffSet, z: 2 + zOffSet},
    {x: -2  + xOffSet, y: -4 + yOffSet, z: 2 + zOffSet},

    {x: 4   + xOffSet, y: 2 + yOffSet, z: -2 + zOffSet},
    {x: 4   + xOffSet, y: -2 + yOffSet, z: -2 + zOffSet},
    {x: -4  + xOffSet, y: 2 + yOffSet, z: -2 + zOffSet},
    {x: -4  + xOffSet, y: -2 + yOffSet, z: -2 + zOffSet},
    {x: 2   + xOffSet, y: 4 + yOffSet, z: -2 + zOffSet},
    {x: 2   + xOffSet, y: -4 + yOffSet, z: -2 + zOffSet},
    {x: -2  + xOffSet, y: 4 + yOffSet, z: -2 + zOffSet},
    {x: -2  + xOffSet, y: -4 + yOffSet, z: -2 + zOffSet},

    {x: 6   + xOffSet, y: yOffSet, z: 2 + zOffSet},
    {x: xOffSet, y: 6 + yOffSet, z: 2 + zOffSet},
    {x: -6  + xOffSet, y: yOffSet, z: 2 + zOffSet},
    {x: xOffSet, y: -6 + yOffSet, z: 2 + zOffSet},

    {x: 6   + xOffSet, y: yOffSet, z: -2 + zOffSet},
    {x: xOffSet, y: 6 + yOffSet, z: -2 + zOffSet},
    {x: -6  + xOffSet, y: yOffSet, z: -2 + zOffSet},
    {x: xOffSet, y: -6 + yOffSet, z: -2 + zOffSet},

    {x: xOffSet, y: yOffSet, z: 4 + zOffSet},
    {x: 2   + xOffSet, y: 2 + yOffSet, z: 4 + zOffSet},
    {x: 2   + xOffSet, y: -2 + yOffSet, z: 4 + zOffSet},
    {x: -2  + xOffSet, y: -2 + yOffSet, z: 4 + zOffSet},
    {x: -2  + xOffSet, y: 2 + yOffSet, z: 4 + zOffSet},

    {x: 4   + xOffSet, y: yOffSet, z: 4 + zOffSet},
    {x: xOffSet, y: -4 + yOffSet, z: 4 + zOffSet},
    {x: -4  + xOffSet, y: yOffSet, z: 4 + zOffSet},
    {x: xOffSet, y: 4 + yOffSet, z: 4 + zOffSet},

    {x: xOffSet, y: yOffSet, z: -4 + zOffSet},
    {x: 2   + xOffSet, y: 2 + yOffSet, z: -4 + zOffSet},
    {x: 2   + xOffSet, y: -2 + yOffSet, z: -4 + zOffSet},
    {x: -2  + xOffSet, y: -2 + yOffSet, z: -4 + zOffSet},
    {x: -2  + xOffSet, y: 2 + yOffSet, z: -4 + zOffSet},

    {x: 4   + xOffSet, y: yOffSet, z: -4 + zOffSet},
    {x: xOffSet, y: -4 + yOffSet, z: -4 + zOffSet},
    {x: -4  + xOffSet, y: yOffSet, z: -4 + zOffSet},
    {x: xOffSet, y: 4 + yOffSet, z: -4 + zOffSet},

    {x: xOffSet, y: 2 + yOffSet, z: 6 + zOffSet},
    {x: xOffSet, y: -2 + yOffSet, z: 6 + zOffSet},
    {x: -2  + xOffSet, y: yOffSet, z: 6 + zOffSet},
    {x: 2   + xOffSet, y: yOffSet, z: 6 + zOffSet},
    {x: xOffSet, y: 2 + yOffSet, z: -6 + zOffSet},
    {x: xOffSet, y: -2 + yOffSet, z: -6 + zOffSet},
    {x: -2  + xOffSet, y: yOffSet, z: -6 + zOffSet},
    {x: 2   + xOffSet, y: yOffSet, z: -6 + zOffSet},
].forEach(function(pos){
    var initialParticle = new Particle();
    initialParticle.head.position.set(pos.x, pos.y, pos.z);
    initialParticle.tail.position.set(pos.x, pos.y, pos.z);
    initialParticle.convertToRole("Inactive");
    initialParticles[initialParticlesIdx] = initialParticle;
    initialParticlesIdx++;
});

function renderInitialParticles(scene){
    for (let j = 0; j < Object.keys(initialParticles).length; j++) {
        scene.add(initialParticles[j].head);
        scene.add(initialParticles[j].tail);
        scene.add(initialParticles[j].headTailConnection);
        scene.add(initialParticles[j].targetConnection);
    }
}