var triangulate = require('./')
var test = require('tape').test

var contours2d = [
    [ [10,50], [55, 23], [15, 62], [23, 63], [63, 21], [11, -2] ]
]

var contours3d = [
    [ [10,50,50], [25,12,50], [-52,0,-10] ]
]

test("triangulates a series of contours", function(t) {
    var expected

    var empty = { cells: [], positions: [] }
    t.deepEqual(triangulate([]), empty, 'empty correct')
    t.deepEqual(triangulate([ [] ]), empty, 'empty correct')

    expected = { cells: [ [ 0, 1, 2 ], [ 1, 0, 3 ], [ 1, 4, 2 ], [ 4, 1, 5 ] ], positions: [ [ 23, 63 ], [ 55, 23 ], [ 63, 21 ], [ 15, 62 ], [ 11, -2 ], [ 10, 50 ] ] }
    t.deepEqual( triangulate(contours2d), expected, 'produces 2d result' )

    expected = { cells: [ [ 0, 1, 2 ] ], positions: [ [ 25, 12, 50 ], [ 10, 50, 50 ], [ -52, 0, -10 ] ] }
    t.deepEqual( triangulate(contours3d), expected, 'produces 3d result' )

    var c2d_2 = [
        [ [10,50], [25,12], [-52,0] ]
    ]
    t.deepEqual( triangulate(c2d_2), { cells: [ [ 0, 1, 2 ] ], positions: [ [ 25, 12 ], [ 10, 50 ], [ -52, 0 ] ] } )

    //tess2.js breaks on small paths
    // var c2d_3 = [
    //     [ [10,10], [10, 10], [10, 10] ]
    // ]
    // t.deepEqual( triangulate(c2d_3) ... )
    t.end()
})