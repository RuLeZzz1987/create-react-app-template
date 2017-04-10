import { Geometry, Line, LineBasicMaterial, Vector3 } from "three";

const COLOR = 0xffffff;
const OPACITY = 0.8;
const X = 0.13; // crosshair size
const Y = 0.13; // crosshair size
const _SCALE = 3; // local scale factor to make the ring appear correct

class Cursor extends Line {
  constructor() {
    let material = new LineBasicMaterial({
      color: COLOR,
      transparent: true,
      opacity: OPACITY
    });

    let geometry = new Geometry();

    // crosshair
    geometry.vertices.push(new Vector3(0, Y, 0));
    geometry.vertices.push(new Vector3(0, -Y, 0));
    geometry.vertices.push(new Vector3(0, 0, 0));
    geometry.vertices.push(new Vector3(X, 0, 0));
    geometry.vertices.push(new Vector3(-X, 0, 0));

    super(geometry, material);
    this.SIZE = 0.1 * _SCALE;
  }
}

export default Cursor;
