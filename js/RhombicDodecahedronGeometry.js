var RhombicDodecahedronGeometry = new THREE.Geometry();

// vertices
RhombicDodecahedronGeometry.vertices = [
    new THREE.Vector3( -1,  1, -1 ), // A       (0)     (A)
    new THREE.Vector3(  1,  1, -1 ), // B       (1)     (B)
    new THREE.Vector3(  1,  1,  1 ), // C       (2)     (C)
    new THREE.Vector3( -1,  1,  1 ), // D       (3)     (D)
    new THREE.Vector3( -1, -1, -1 ), // E       (4)     (E)
    new THREE.Vector3(  1, -1, -1 ), // F       (5)     (F)
    new THREE.Vector3(  1, -1,  1 ), // G       (6)     (G)
    new THREE.Vector3( -1, -1,  1 ), // H       (7)     (H)
    new THREE.Vector3( -2,  0,  0 ), // left    (8)     (I)
    new THREE.Vector3(  2,  0,  0 ), // right   (9)     (J)
    new THREE.Vector3(  0,  2,  0 ), // top     (10)    (K)
    new THREE.Vector3(  0, -2,  0 ), // bottom  (11)    (L)
    new THREE.Vector3(  0,  0,  2 ), // front   (12)    (M)
    new THREE.Vector3(  0,  0, -2 )  // back    (13)    (N)
];

var faceshape = new THREE.Face3(12, 2, 10);
faceshape.materialIndex


// faces - in counterclockwise winding order
RhombicDodecahedronGeometry.faces.push(
    // face (front, C, top, D)
    new THREE.Face3(12, 2, 10, 0),
    new THREE.Face3(12, 10, 3, 0),
    // face (front, G, right, C)
    new THREE.Face3(12, 6,  9, 1),
    new THREE.Face3(12,  9, 2, 1),
    // face (front, H, bottom, G)
    new THREE.Face3(12, 7, 11, 2),
    new THREE.Face3(12, 11, 6, 2),
    // face (front, D, left, H)
    new THREE.Face3(12, 3,  8, 3),
    new THREE.Face3(12,  8, 7, 3),
    // face (back, F, bottom, E)
    new THREE.Face3(13, 5, 11, 4),
    new THREE.Face3(13, 11, 4, 4),
    // face (back, E, left, A)
    new THREE.Face3(13, 4,  8, 5),
    new THREE.Face3(13,  8, 0, 5),
    // face (back, A, top, B)
    new THREE.Face3(13, 0, 10, 6),
    new THREE.Face3(13, 10, 1, 6),
    // face (back, B, right, F)
    new THREE.Face3(13, 1,  9, 7),
    new THREE.Face3(13,  9, 5, 7),
    // face (left, D, top, A)
    new THREE.Face3(8, 3, 10, 8),
    new THREE.Face3( 8, 10, 0, 8),
    // face (left, E, bottom, H)
    new THREE.Face3(8, 4, 11, 9),
    new THREE.Face3( 8, 11, 7, 9),
    // face (right, B, top, C)
    new THREE.Face3(9, 1, 10, 10),
    new THREE.Face3( 9, 10, 2, 10),
    // face( right, G, bottom, F)
    new THREE.Face3(9, 6, 11, 11),
    new THREE.Face3( 9, 11, 5, 11),
);


RhombicDodecahedronGeometry.computeFaceNormals();
RhombicDodecahedronGeometry.computeVertexNormals();

