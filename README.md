# triangulate-contours

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Triangulates a series of contours using [Tess2.js](https://github.com/memononen/tess2.js). Returns a simplicial complex with `{ positions, cells }`. Works with 2D and 3D coordinates, and contours can be in reverse winding order for holes. 

```js
var triangulate = require('triangulate-contours')

var contours = [
    [ [10,50], [55, 23], [15, 62], [23, 63], [63, 21], [11, -2] ],
    [ [50,50], [62,21], [24,52] ]
]

var results = triangulate(contours)

console.log(results)
/*
    { positions: [ ... ], cells: [ ... ] }
 */
```

`positions` are a series of points with the same number of components as the input, and `cells` is a list of faces with indices into the positions array. 

## Usage

[![NPM](https://nodei.co/npm/triangulate-contours.png)](https://nodei.co/npm/triangulate-contours/)

#### `triangulate(contours[, opts])`

Triangulates an array of polylines, each polyline representing a contour. The options will be pushed into `Tess2` constructor; but if no `vertexSize` is specified, it will be guessed based on the input array (i.e. 2-dimensional vs. 3-dimensional vectors).

Returns a [simplicial complex](https://github.com/mikolalysenko/simplicial-complex), i.e. a simple object: 

```js
{ 
    positions: [ [x,y], .. ], 
    cells: [ [a,b,c], .. ] 
}
```

## See Also

For more robust triangulation than Tess2, see the following:

- [triangulate-polyline](https://www.npmjs.com/package/triangulate-polyline)
- [cdt2d](https://www.npmjs.com/package/cdt2d)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/triangulate-contours/blob/master/LICENSE.md) for details.
