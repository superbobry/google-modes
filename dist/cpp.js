(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^class(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\:\:|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\:\:)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\<)/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:\+\+|\-\-)/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^delete(?![a-zA-Z¡-￿_0-9])/, /^new(?![a-zA-Z¡-￿_0-9])/, /^sizeof(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 432]], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 11, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[7], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[49], -1,
   3, "keyword", e[34], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
   3, "type", e[33], -1,
   3, "type", e[35], -1,
   3, "keyword", e[32], -1,
   3, "atom", e[52], -1,
   1, 156, -1,
   3, "number", e[19], -1,
   2, 161, -1, {"name":"string","token":"string"},
   2, 166, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[41], -1,
   3, "operator", e[37], -1,
   2, 167, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[2], -1,
   3, "keyword", e[23], -1,
   3, "keyword", e[48], -1,
   3, "keyword", e[47], -1,
   3, "keyword", e[50], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[36], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[51], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 167, 9, {"name":"comment","token":"comment"},
   0, -1],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 12,
   3, "keyword", e[2], 32,
   3, "keyword", e[3], 40,
   3, "keyword", e[4], 44,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 65,
   2, 173, -1, {"name":"Template"},
   [7, "constructorAhead"], 77,
   0, 80,
   3, "keyword", e[7], 88,
   3, "keyword", e[8], 92,
   3, "keyword", e[9], 93,
   3, "keyword", e[10], 94,
   3, "keyword", e[11], 118,
   3, "keyword", e[12], 126,
   2, 182, -1, {"name":"Block"},
   3, "keyword", e[13], 130,
   3, "keyword", e[14], 132,
   3, "keyword", e[15], 136,
   3, "keyword", e[1], 140,
   2, 186, 146, {"name":"DeclType"},
   3, "keyword", e[16], 148,
   3, "keyword", e[17], 149,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 196]], 148,
   ";", -1,
   1, 197, 154],
  [1, 9, 13],
  [3, "keyword", e[18], 14,
   0, 15],
  [1, 9, 16],
  [1, 9, 17],
  ["(", 18],
  [1, 202, 19],
  [1, 9, 20],
  [1, 9, 21],
  [3, "number", e[19], 22],
  [":", 23,
   0, 24],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [")", 15],
  [3, "keyword", e[20], 28,
   0, 28],
  [";", -1,
   2, 210, -1, {"name":"ClassBody"}],
  [1, 9, 29],
  [3, "keyword", e[21], 30,
   0, 30],
  [1, 9, 31],
  [1, 216, 24],
  [1, 9, 33],
  [1, 202, 34,
   0, 34],
  [1, 9, 35],
  [3, "operator", "=", 36,
   2, 182, -1, {"name":"Block"}],
  [1, 9, 37],
  [1, 156, 38],
  [1, 9, 39],
  [";", -1],
  [1, 9, 41],
  [1, 197, 42],
  [1, 9, 43],
  [";", -1],
  [1, 9, 45],
  [2, 182, 46, {"name":"Block"}],
  [1, 9, 47],
  [3, "keyword", e[22], 48,
   0, -1],
  [1, 9, 49],
  ["(", 50],
  [1, 9, 51],
  [1, 216, 52],
  [1, 9, 53],
  [1, 226, 54,
   0, 54],
  [1, 9, 55],
  [")", 56],
  [1, 9, 57],
  [2, 182, 58, {"name":"Block"}],
  [1, 9, 47],
  [1, 9, 60],
  ["{", 61],
  [1, 9, 62],
  [2, 161, 63, {"name":"string","token":"string"}],
  [1, 9, 64],
  ["}", -1],
  [1, 9, 66],
  [3, "keyword", e[23], 67,
   3, "keyword", e[2], 68,
   0, 68],
  [1, 9, 69],
  [1, 9, 70],
  [1, 216, 71],
  [1, 156, 71],
  [1, 9, 72],
  ["=", 73,
   0, 74],
  [1, 9, 75],
  [1, 9, 76],
  [1, 216, 74],
  [";", -1],
  [1, 202, 78],
  [1, 9, 79],
  [2, 233, -1, {"name":"FunctionDef"}],
  [3, "meta", e[25], 81],
  [1, 9, 82],
  [0, 80,
   1, 259, 83,
   2, 266, 84, {"name":"qualifiedVariableName","token":"qualified"}],
  [1, 9, 85],
  [1, 9, 86],
  [1, 267, -1],
  [1, 278, 87,
   ";", -1],
  [1, 9, 86],
  [1, 9, 89],
  [1, 202, 90,
   0, 90],
  [1, 9, 91],
  [2, 295, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 95],
  [1, 9, 96],
  [1, 9, 97],
  ["(", 98],
  [2, 313, 99, {"name":"CondExpr"}],
  [2, 11, 100, {"name":"Statement"}],
  [1, 9, 101],
  [1, 9, 102],
  [1, 9, 103],
  [2, 11, 104, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[9], 105],
  [1, 9, 106],
  [1, 9, 107],
  [1, 197, 108,
   0, 108],
  [2, 313, 109, {"name":"CondExpr"}],
  [1, 9, 110],
  [1, 9, 111],
  [";", 112],
  [";", -1],
  [1, 9, 113],
  [1, 197, 114,
   0, 114],
  [1, 9, 115],
  [")", 116],
  [1, 9, 117],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 119],
  [2, 313, 120, {"name":"CondExpr"}],
  [1, 9, 121],
  [2, 11, 122, {"name":"Statement"}],
  [1, 9, 123],
  [3, "keyword", e[24], 124,
   0, -1],
  [1, 9, 125],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 127],
  [2, 313, 128, {"name":"CondExpr"}],
  [1, 9, 129],
  [2, 182, -1, {"name":"Block"}],
  [1, 9, 131],
  [";", -1],
  [1, 9, 133],
  [e[40], 134],
  [1, 9, 135],
  [";", -1],
  [1, 9, 137],
  [1, 197, 138,
   0, 138],
  [1, 9, 139],
  [";", -1],
  [1, 9, 141],
  [1, 202, 142,
   0, 142],
  [1, 9, 143],
  [2, 318, 144, {"name":"BlockOf"},
   0, 144],
  [1, 9, 145],
  [";", -1],
  [1, 9, 147],
  [1, 267, -1],
  [1, 9, 150],
  [1, 9, 151],
  [":", 152],
  [1, 197, 148],
  [1, 9, 153],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 155],
  [";", -1],
  [0, 157,
   3, "type", e[27], -1,
   3, "variable", e[26], 160,
   2, 328, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [3, "meta", e[25], 158],
  [0, 157,
   3, "variable qualified", e[26], 159,
   3, "type", e[27], -1,
   2, 266, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 329, -1, {"name":"TemplateArgs"}],
  [2, 329, -1, {"name":"TemplateArgs"}],
  [/^R\"(?:(?!\().)*\(/, 162,
   /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 163],
  [[0, [7, "rawStringContinues"], /^[^]/], 162,
   "\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 164],
  ["\\", 165,
   [0, /^(?!\")/, /^[^]/], 164,
   "\"", -1],
  [/^[^]/, 164],
  [3, "keyword", e[23], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 168,
   "/*", 172,
   /^\/\/.*/, -1],
  [0, 169,
   2, 334, 168, {"name":"doccomment.braced"},
   0, 170],
  [e[46], 171],
  [2, 342, 170, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 169,
   0, 168],
  [[0, /^(?!\*\/)/, /^[^]/], 172,
   "*/", -1],
  [3, "keyword", e[28], 174,
   0, 174],
  [1, 9, 175],
  [3, "keyword", e[29], 176],
  [1, 9, 177],
  [2, 350, 178, {"name":"TemplateParams"}],
  [1, 9, 179],
  [1, 9, 180],
  [1, 9, 181],
  [2, 11, -1, {"name":"Statement"}],
  ["{", 183],
  [1, 9, 184],
  [2, 11, 185, {"name":"Statement"},
   "}", -1],
  [1, 9, 184],
  [0, 187,
   0, 188,
   1, 259, -1],
  [3, "keyword", e[30], 189,
   3, "keyword", e[31], 189,
   3, "keyword", e[32], 189],
  [3, "type", e[33], 190],
  [1, 9, 191],
  [1, 9, 192],
  [0, 187,
   3, "keyword", e[34], 193,
   1, 355, 193],
  [0, 188,
   3, "type", e[35], 193,
   0, 193],
  [1, 9, 194],
  [1, 361, 195,
   0, -1],
  [1, 9, 194],
  [e[42], 196,
   /^\:(?!\:)/, -1],
  [1, 368, 198,
   1, 383, 199],
  [1, 9, 197],
  [1, 9, 200],
  [1, 278, 201,
   0, -1],
  [1, 9, 200],
  [3, "keyword", e[36], 203,
   0, 204,
   3, "def", e[38], -1],
  [3, "operator", e[37], -1,
   2, 166, -1, {"name":"prefixOp","token":"operator"}],
  [3, "meta", /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\<)/, 205,
   3, "meta", e[25], 206],
  [1, 9, 207],
  [0, 204,
   3, "qualified def", e[38], -1],
  [2, 329, 208, {"name":"TemplateArgs"}],
  [3, "meta", "::", 209],
  [3, "qualified def", e[38], 206],
  ["{", 211],
  [1, 9, 212],
  [3, "keyword", e[21], 213,
   2, 173, 214, {"name":"Template"},
   2, 404, 214, {"name":"ObjectMember"},
   "}", -1],
  [1, 9, 215],
  [1, 9, 212],
  [":", 214],
  [3, "keyword", e[23], 217,
   0, 219],
  [1, 9, 218],
  [1, 216, -1],
  [3, "keyword", e[30], 220,
   3, "keyword", e[31], 220,
   3, "keyword", e[32], 220,
   3, "keyword", e[1], 221,
   0, 221],
  [1, 9, 219],
  [1, 9, 222],
  [3, "keyword", e[34], 223,
   1, 355, 223],
  [1, 9, 224],
  [1, 361, 225,
   0, -1],
  [1, 9, 224],
  [0, 227,
   "(", 229],
  [/^(?:\*|\&\&|\&)/, 228,
   1, 202, -1],
  [1, 9, 227],
  [1, 9, 230],
  [1, 226, 231],
  [1, 9, 232],
  [")", -1],
  [2, 418, 234, {"name":"ParamList"}],
  [1, 9, 235],
  [3, "keyword", e[32], 236,
   /^(?:\&|\&\&)?/, 237],
  [1, 9, 235],
  [1, 9, 238],
  [3, "keyword", e[39], 239,
   3, "keyword", e[3], 240,
   0, 251],
  [1, 9, 241],
  [1, 9, 242],
  ["(", 243,
   0, 251],
  ["(", 244],
  [1, 9, 245],
  [1, 9, 246],
  [1, 197, 247],
  [1, 423, 248],
  [1, 9, 249],
  [1, 9, 250],
  [")", 251],
  [")", 251],
  [1, 9, 252],
  ["->", 253,
   0, 255],
  [1, 9, 254],
  [1, 216, 255],
  [1, 9, 256],
  [2, 429, 257, {"name":"InitializerList"},
   0, 257],
  [1, 9, 258],
  [";", -1,
   2, 182, -1, {"name":"Block"}],
  [3, "keyword", e[34], 263,
   3, "keyword", e[23], 260,
   e[53], 261],
  [1, 9, 262],
  [3, "meta", e[25], 261,
   3, "type", e[54], 263],
  [3, "meta", e[25], 262,
   3, "type", e[40], 263],
  [1, 9, 264],
  [1, 361, 265,
   0, -1],
  [1, 9, 264],
  [2, 328, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 226, 268],
  [1, 9, 269],
  [[5, 435], 270,
   1, 441, 271,
   0, 271],
  [2, 233, -1, {"name":"FunctionDef"}],
  [1, 9, 272],
  [",", 273,
   ";", -1],
  [1, 9, 274],
  [1, 202, 275],
  [1, 9, 276],
  [1, 441, 277,
   0, 277],
  [1, 9, 272],
  [2, 444, -1, {"name":"BlockOf"},
   2, 454, 279, {"name":"ArgList"},
   2, 454, -1, {"name":"ArgList"},
   "[", 281,
   3, "operator", e[41], -1,
   /^(?:\-\>|\.)/, 285,
   3, "operator", e[37], 287,
   "?", 289],
  [1, 9, 280],
  [2, 182, -1, {"name":"Block"},
   0, -1],
  [1, 9, 282],
  [1, 197, 283],
  [1, 9, 284],
  ["]", -1],
  [1, 9, 286],
  [2, 459, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 288],
  [1, 197, -1],
  [1, 9, 290],
  [1, 197, 291],
  [1, 9, 292],
  [":", 293],
  [1, 9, 294],
  [1, 197, -1],
  ["{", 296],
  [1, 9, 297],
  [1, 202, 298,
   0, 311],
  [1, 9, 299],
  [3, "operator", "=", 300,
   0, 301],
  [1, 9, 302],
  [1, 9, 303],
  [1, 197, 301],
  [",", 304,
   0, 311],
  [1, 9, 305],
  [1, 202, 306],
  [1, 9, 307],
  [3, "operator", "=", 308,
   0, 309],
  [1, 9, 310],
  [1, 9, 303],
  [1, 197, 309],
  [1, 9, 312],
  ["}", -1],
  ["(", 314],
  [1, 9, 315],
  [1, 197, 316,
   0, 316],
  [1, 9, 317],
  [")", -1],
  ["{", 319],
  [1, 9, 320],
  [1, 460, 321,
   0, 326],
  [1, 9, 322],
  [";", 323,
   0, 326],
  [1, 9, 324],
  [1, 460, 325],
  [1, 9, 322],
  [1, 9, 327],
  ["}", -1],
  [3, "callee", e[55], -1,
   e[40], -1],
  ["<", 330],
  [1, 9, 331],
  [1, 471, 332],
  [1, 9, 333],
  [">", -1],
  ["{", 335],
  [3, "tag", e[43], 336,
   3, "tag", e[44], 337,
   2, 497, 341, {"name":"doccomment.type","token":"type"}],
  [e[42], 336,
   "{", 338,
   0, 337],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 337,
   0, 341],
  [2, 497, 339, {"name":"doccomment.type","token":"type"}],
  ["}", 340],
  [e[42], 340,
   3, "def", e[45], 337,
   0, 337],
  ["}", -1],
  [3, "tag", e[43], 343,
   3, "tag", e[44], 347],
  [e[42], 343,
   "{", 344,
   0, 347],
  [2, 497, 345, {"name":"doccomment.type","token":"type"}],
  ["}", 346],
  [e[42], 346,
   3, "def", e[45], 347,
   0, 347],
  [0, 348,
   2, 334, 347, {"name":"doccomment.braced"},
   0, -1],
  [e[46], 349],
  [0, 348,
   0, 347],
  ["<", 351],
  [1, 9, 352],
  [1, 498, 353],
  [1, 9, 354],
  [">", -1],
  [0, 356,
   3, "keyword", e[23], 359,
   0, 360],
  [3, "type", e[33], 357],
  [0, 356,
   1, 9, 358,
   0, -1],
  [3, "type", e[35], -1],
  [1, 9, 360],
  [3, "meta", e[25], 360,
   3, "type", e[40], -1],
  [2, 329, -1, {"name":"TemplateArgs"},
   "::", 362,
   "[", 364,
   /^[\*\&]/, -1,
   3, "keyword", e[32], -1],
  [1, 9, 363],
  [1, 216, -1],
  [1, 9, 365],
  [3, "number", e[19], 366,
   0, 366],
  [1, 9, 367],
  ["]", -1],
  [3, "keyword", e[47], 369,
   3, "keyword", e[48], 373,
   2, 166, -1, {"name":"prefixOp","token":"operator"},
   3, "keyword", e[49], -1],
  [1, 9, 370],
  ["[", 371,
   0, -1],
  [1, 9, 372],
  ["]", -1],
  [1, 9, 374],
  ["[", 375,
   0, 376],
  [1, 9, 377],
  [1, 9, 378],
  ["]", 376],
  ["(", 379,
   0, -1],
  [1, 9, 380],
  [1, 197, 381],
  [1, 9, 382],
  [")", -1],
  [3, "keyword", e[50], -1,
   "[", 384,
   3, "keyword", e[51], 390,
   2, 530, 402, {"name":"ParenExpr"},
   3, "atom", e[52], -1,
   3, "number", e[19], -1,
   2, 161, -1, {"name":"string","token":"string"},
   2, 444, -1, {"name":"BlockOf"},
   1, 156, -1],
  [1, 9, 385],
  [1, 535, 386],
  [1, 9, 387],
  ["]", 388],
  [1, 9, 389],
  [2, 233, -1, {"name":"FunctionDef"}],
  [1, 9, 391],
  ["<", 392],
  [1, 9, 393],
  [1, 216, 394],
  [1, 9, 395],
  [">", 396],
  [1, 9, 397],
  ["(", 398],
  [1, 9, 399],
  [1, 197, 400],
  [1, 9, 401],
  [")", -1],
  [1, 9, 403],
  [1, 197, -1,
   0, -1],
  [3, "keyword", e[30], 405,
   3, "keyword", e[31], 405,
   3, "keyword", e[32], 405,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 408,
   1, 216, 406],
  [1, 9, 404],
  [1, 9, 407],
  [1, 226, 408],
  [1, 9, 409],
  [2, 233, -1, {"name":"FunctionDef"},
   1, 441, 410,
   ":", 411,
   "[", 412,
   0, 410],
  [1, 9, 413],
  [1, 9, 414],
  [1, 9, 415],
  [";", -1],
  [3, "number", e[19], 410],
  [3, "number", e[19], 416,
   0, 416],
  [1, 9, 417],
  ["]", 410],
  ["(", 419],
  [1, 9, 420],
  [1, 545, 421],
  [1, 9, 422],
  [")", -1],
  [1, 216, 424,
   0, -1],
  [1, 9, 425],
  [",", 426,
   0, -1],
  [1, 9, 427],
  [1, 216, 428],
  [1, 9, 425],
  [":", 430],
  [1, 9, 431],
  [1, 559, -1],
  [1, 9, 433],
  [1, 361, 433,
   1, 9, 434],
  [/^[a-zA-Z¡-￿_]/, -1],
  ["(", 436],
  [1, 9, 437],
  [")", -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "type", e[33], -1,
   3, "keyword", e[34], -1,
   3, "keyword", e[23], 438,
   e[53], 439],
  [1, 9, 440],
  [3, "meta", e[25], 439,
   3, "type", e[54], -1],
  [3, "meta", e[25], 440,
   3, "type", e[40], -1],
  [3, "operator", "=", 442,
   2, 444, -1, {"name":"BlockOf"},
   2, 454, -1, {"name":"ArgList"}],
  [1, 9, 443],
  [1, 197, -1],
  ["{", 445],
  [1, 9, 446],
  [1, 197, 447,
   0, 452],
  [1, 9, 448],
  [",", 449,
   0, 452],
  [1, 9, 450],
  [1, 197, 451],
  [1, 9, 448],
  [1, 9, 453],
  ["}", -1],
  ["(", 455],
  [1, 9, 456],
  [1, 565, 457],
  [1, 9, 458],
  [")", -1],
  [3, "callee", e[55], -1,
   e[40], -1],
  [1, 216, 461],
  [1, 9, 462],
  [2, 459, 463, {"name":"fieldName","token":"property"},
   0, 463],
  [1, 9, 464],
  [":", 465,
   "[", 466,
   0, -1],
  [1, 9, 467],
  [1, 9, 468],
  [3, "number", e[19], -1],
  [3, "number", e[19], 469,
   0, 469],
  [1, 9, 470],
  ["]", -1],
  [3, "keyword", e[29], 472,
   0, 473,
   0, 474,
   3, "number", e[19], 475,
   0, -1],
  [1, 9, 476],
  [1, 9, 477],
  [3, "keyword", e[30], 478,
   3, "keyword", e[31], 478,
   1, 216, 479],
  [1, 9, 480],
  [2, 329, 473, {"name":"TemplateArgs"}],
  [3, "keyword", e[0], 481,
   3, "keyword", e[23], 481],
  [1, 9, 474],
  [1, 9, 482],
  [",", 483,
   0, -1],
  [1, 9, 484],
  [1, 441, 475,
   0, 475],
  [1, 9, 485],
  [1, 216, 475],
  [3, "keyword", e[29], 486,
   0, 487,
   0, 488,
   3, "number", e[19], 489],
  [1, 9, 490],
  [1, 9, 491],
  [3, "keyword", e[30], 492,
   3, "keyword", e[31], 492,
   1, 216, 493],
  [1, 9, 480],
  [2, 329, 487, {"name":"TemplateArgs"}],
  [3, "keyword", e[0], 494,
   3, "keyword", e[23], 494],
  [1, 9, 488],
  [1, 9, 495],
  [1, 9, 496],
  [1, 441, 489,
   0, 489],
  [1, 216, 489],
  [1, 571, -1],
  [1, 575, 499,
   0, 500,
   0, -1],
  [1, 9, 501],
  [3, "keyword", e[30], 502,
   3, "keyword", e[31], 502,
   1, 216, 503],
  [",", 504,
   0, -1],
  [1, 9, 500],
  [1, 9, 505],
  [1, 9, 506],
  [1, 202, 507],
  [1, 575, 508,
   0, 509],
  [1, 9, 510],
  [1, 9, 501],
  [3, "keyword", e[30], 511,
   3, "keyword", e[31], 511,
   1, 216, 512],
  [3, "operator", "=", 513,
   0, 499],
  [1, 9, 509],
  [1, 9, 514],
  [1, 9, 515],
  [1, 202, 516],
  [1, 368, 517,
   1, 383, 518],
  [1, 9, 519],
  [1, 9, 515],
  [1, 9, 520],
  [3, "operator", "=", 521,
   0, 508],
  [e[56], 522,
   0, 499],
  [1, 9, 523],
  [1, 278, 524],
  [1, 368, 525,
   1, 383, 526],
  [1, 9, 520],
  [1, 9, 523],
  [1, 9, 527],
  [e[56], 528,
   0, 508],
  [1, 278, 529],
  [1, 9, 527],
  ["(", 531],
  [1, 9, 532],
  [1, 197, 533,
   0, 533],
  [1, 9, 534],
  [")", -1],
  ["&", 536,
   "=", 537,
   3, "keyword", e[50], 537,
   0, -1],
  [1, 9, 538],
  [1, 9, 539],
  [1, 156, 537,
   0, 537],
  [",", 540,
   0, -1],
  [1, 9, 541],
  ["&", 542,
   "=", 543,
   3, "keyword", e[50], 543],
  [1, 9, 544],
  [1, 9, 539],
  [1, 156, 543,
   0, 543],
  [1, 216, 546,
   0, -1],
  [1, 9, 547],
  [1, 226, 548,
   0, 549],
  [1, 9, 550],
  [1, 9, 551],
  [2, 418, 549, {"name":"ParamList"},
   0, 549],
  [",", 552,
   0, -1],
  [1, 9, 553],
  [1, 216, 554],
  [1, 9, 555],
  [1, 226, 556,
   0, 557],
  [1, 9, 558],
  [1, 9, 551],
  [2, 418, 557, {"name":"ParamList"},
   0, 557],
  [1, 586, 560,
   0, -1],
  [1, 9, 561],
  [",", 562,
   0, -1],
  [1, 9, 563],
  [1, 586, 564],
  [1, 9, 561],
  [1, 197, 566,
   0, -1],
  [1, 9, 567],
  [",", 568,
   0, -1],
  [1, 9, 569],
  [1, 197, 570],
  [1, 9, 567],
  [/^(?!\}|\*\/)/, 572,
   0, -1],
  ["{", 573,
   /^[^]/, 571],
  [1, 571, 574],
  [/^\}?/, 571],
  [3, "keyword", e[29], 576,
   0, 578],
  [1, 9, 577],
  [2, 329, 578, {"name":"TemplateArgs"}],
  [1, 9, 579],
  [3, "keyword", e[0], 580,
   3, "keyword", e[23], 580],
  [1, 9, 581],
  [3, "type def", e[40], 582],
  [1, 9, 583],
  [3, "operator", "=", 584,
   0, -1],
  [1, 9, 585],
  [1, 156, -1,
   3, "number", e[19], -1],
  [2, 459, 587, {"name":"fieldName","token":"property"}],
  [1, 9, 588],
  ["(", 589,
   "{", 590],
  [1, 9, 591],
  [1, 9, 592],
  [1, 565, 593],
  [1, 565, 594],
  [1, 9, 595],
  [1, 9, 596],
  [")", -1],
  ["}", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function getScope(context, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1) { return cx } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}
function isLocalType(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
    }
  } else if (varRE.test(type) && !/qualified/.test(type) &&
             isLocal(state.context, stream.current())) {
    type = type.replace(varRE, "$1variable-2$2");
  }
  return type
}

var typeRE = /(^|\s)type($|\s)/;

function markTypeLocals(type, scopes, stream, state) {
  if (type == "type def") {
    var scope = getScope(state.context, scopes);
    if (scope) {
      if (!scope.localTypes) { scope.localTypes = []; }
      scope.localTypes.push(stream.current());
    }
  } else if (typeRE.test(type) && !/qualified/.test(type) &&
             isLocalType(state.context, stream.current())) {
    type += " local";
  }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isNamespace(context) {
  return context && context.name == "Statement" &&
    /^namespace\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || isNamespace(cx.parent) ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 :
                cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos)) ? 2 * config.indentUnit :
                0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
  if (!ahead) { return false }
  while (cx.name != "Statement") { cx = cx.parent; }
  var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
  return className ? className[1] == ahead[1] : false
}

var rawStringOpen = /R"(.*?)\(/g;

function rawStringContinues(line, pos, cx) {
  rawStringOpen.lastIndex = cx.startPos;
  var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
  return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
}

var scopes = ["Block", "FunctionDef"];
var typeScopes = ["Template"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
