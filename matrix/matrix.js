export class Matrix {
  constructor(s) {
    this.matrix = s.split('\n').map(line =>
      line.split(/\s/).map(x => parseInt(x, 10))
    );
  }

  row(n) {
    return this.matrix[n];
  }

  column(n) {
    return this.rows.map(row => row[n]);
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.row(0).map((_, i) => this.column(i));
  }
}
