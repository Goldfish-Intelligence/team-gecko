export const name = 'Mensa über [kœri]werk';
export const key = 'muek';
export const regex = /^M(ü|ue)K(1(,2)?|2(,3)?|3(,4)?|4(,5)?|5(,6)?|6(,7)?|7(,8)?|8(,9)?|9(,10)?|10(,11)?|11(,12)?|12)([ai]?)$/i;
export const groups = {
  angle: 2,
  ring: 14,
};

// angle (1-12) → ring (i/a) → tables
// table: [x pos, y pos, is long table, orientation (true = horizontal)]
const tables = {
  1: {
    i: [],
    a: [],
  },
  2: {
    i: [
      [146, 44, true, true],
      [156, 44, false, true],
      [146, 58, true, true],
      [156, 58, false, true],
    ],
    a: [],
  },
  3: {
    i: [
      [146, 72, true, true],
      [156, 72, false, true],
    ],
    a: [
      [186, 65, false, true],
      [194, 65, false, true],
      [202, 65, false, true],
      [210, 65, false, true],
      [186, 78, false, true],
      [194, 78, false, true],
      [202, 78, false, true],
      [210, 78, false, true],
      [186, 91, false, true],
      [194, 91, false, true],
      [202, 91, false, true],
      [210, 91, false, true],
    ],
  },
  4: {
    i: [
      [146, 86, true, true],
      [156, 86, false, true],
      [146, 100, true, true],
      [156, 100, false, true],
    ],
    a: [
      [186, 104, false, true],
      [194, 104, false, true],
      [202, 104, false, true],
      [210, 104, false, true],
      [186, 117, false, true],
      [194, 117, false, true],
      [202, 117, false, true],
      [210, 117, false, true],
      [186, 130, false, true],
      [194, 130, false, true],
      [202, 130, false, true],
      [210, 130, false, true],
      [186, 143, false, true],
      [194, 143, false, true],
      [202, 143, false, true],
      [210, 143, false, true],
    ],
  },
  5: {
    i: [
      [138, 110, false, false],
      [138, 118, true, false],
      [126, 110, false, false],
      [126, 118, true, false],
    ],
    a: [
      [186, 156, false, true],
      [194, 156, false, true],
      [202, 156, false, true],
      [210, 156, false, true],
      [186, 169, false, true],
      [194, 169, false, true],
      [202, 169, false, true],
      [210, 169, false, true],
      [166, 150, false, false],
      [166, 158, false, false],
      [166, 166, false, false],
      [166, 174, false, false],
      [153, 150, false, false],
      [153, 158, false, false],
      [153, 166, false, false],
      [153, 174, false, false],
      [140, 150, false, false],
      [140, 158, false, false],
      [140, 166, false, false],
      [140, 174, false, false],
    ],
  },
  6: {
    i: [
      [114, 110, false, false],
      [114, 118, true, false],
      [102, 110, false, false],
      [102, 118, true, false],
    ],
    a: [
      [127, 150, false, false],
      [127, 158, false, false],
      [127, 166, false, false],
      [127, 174, false, false],
      [114, 150, false, false],
      [114, 158, false, false],
      [114, 166, false, false],
      [114, 174, false, false],
      [101, 150, false, false],
      [101, 158, false, false],
      [101, 166, false, false],
      [101, 174, false, false],
      [88, 150, false, false],
      [88, 158, false, false],
      [88, 166, false, false],
      [88, 174, false, false],
    ],
  },
  7: {
    i: [
      [90, 110, false, false],
      [90, 118, true, false],
      [78, 110, false, false],
      [78, 118, true, false],
    ],
    a: [
      [57, 156, false, false],
      [57, 164, false, false],
      [57, 172, true, false],
      [4, 172, false, true],
      [12, 172, false, true],
      [20, 172, true, true],
      [4, 158, true, true],
      [14, 158, false, true],
      [22, 158, false, true],
    ],
  },
  8: {
    i: [
      [58, 99, false, true],
      [66, 99, true, true],
      [58, 86, false, true],
      [66, 86, true, true],
    ],
    a: [
      [4, 144, true, true],
      [14, 144, false, true],
      [22, 144, false, true],
      [4, 130, true, true],
      [14, 130, false, true],
      [22, 130, false, true],
      [30, 130, true, true],
    ],
  },
  9: {
    i: [
      [58, 73, false, true],
      [66, 73, true, true],
    ],
    a: [
      [4, 82, false, true],
      [12, 82, false, true],
      [20, 82, true, true],
      [30, 82, false, true],
      [4, 69, false, true],
      [12, 69, false, true],
      [20, 69, false, true],
      [28, 69, false, true],
      [4, 56, false, true],
      [12, 56, false, true],
      [20, 56, false, true],
      [28, 56, false, true],
    ],
  },
  10: {
    i: [
      [58, 60, false, true],
      [66, 60, true, true],
      [58, 47, false, true],
      [66, 47, true, true],
    ],
    a: [
      [4, 43, false, true],
      [12, 43, false, true],
      [20, 43, false, true],
      [28, 43, false, true],
      [4, 30, false, true],
      [12, 30, false, true],
      [20, 30, false, true],
      [28, 30, false, true],
      [4, 17, false, true],
      [12, 17, false, true],
      [20, 17, false, true],
      [28, 17, false, true],
      [4, 4, true, true],
      [14, 4, false, true],
      [22, 4, true, true],
    ],
  },
  11: {
    i: [],
    a: [],
  },
  12: {
    i: [],
    a: [],
  },
};

const scaleFactor = 3;

function drawTable(canvasContext, table) {
  const tableLength = table[2] ? 10 : 8;
  const tableWidth = table[3] ? tableLength : 6;
  const tableHeight = table[3] ? 6 : tableLength;

  canvasContext.fillRect(table[0], table[1], tableWidth, tableHeight);
  canvasContext.strokeRect(table[0], table[1], tableWidth, tableHeight);
}

export function draw(canvas) {
  const ctx = canvas.getContext('2d');

  ctx.canvas.width = scaleFactor * 222;
  ctx.canvas.height = scaleFactor * 186;
  ctx.scale(scaleFactor, scaleFactor);

  // border
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'white';
  ctx.strokeRect(2, 2, 218, 182); // outer border
  ctx.strokeRect(78, 42, 66, 66); // stairwell

  // tables
  ctx.lineWidth = 1;
  ctx.fillStyle = 'yellowgreen';
  ctx.strokeStyle = 'darkgreen';
  for (const angle of Object.values(tables)) {
    for (const ring of Object.values(angle)) {
      for (const table of ring) {
        drawTable(ctx, table);
      }
    }
  }
}