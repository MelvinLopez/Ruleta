import React, { useState, useEffect } from 'react';
// import './index.css'

let g;
let ForLienzxo;

const P = [
   [1, 0],
   [1, -1],
   [0, -1],
   [-1, -1],
   [-1, 0],
   [-1, 1],
   [0, 1],
   [1, 1]
];
const p = [
   [0, 0],
   [.3, 1],
   [.75, 1],
   [.35, .9],
   [1, 0],
   [.4, -.2],
   [.75, 0],
   [.35, -.2]
];

let b = 15;
let m = 520;
let M = 520;
let y = [];
let I = [];
let x = [];
let T = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let S = 24;
let k = [];



const ContactUs = () => {
   // const [txtPal, setTxtPal] = useState(document.getElementById("txtPalabra"));
   const [lstWord, setlstWord] = useState([]);

   

   // useEffect(() => {
   //    txtPal.addEventListener("keypress", enter);
   // });
   // console.log("🚀 ~ file: GameAlphabetSoup.js ~ line 54 ~ k", k)
   // console.log("🚀 ~ file: GameAlphabetSoup.js ~ line 54 ~ I", I)

   const enter = (t) => {
      if (13 === t.keyCode) {
         addWord();
      };
   }

   const addWord = () => {
      let txtPal = document.getElementById("txtPalabra");
      // console.log('%cGameAlphabetSoup.js line:75 txtPal', 'color: #007acc;', txtPal.value.replace(" ", "").toUpperCase());
      if (txtPal.value.length > 0) {
         // lstWord.push(txtPal.value.replace(" ", "").toUpperCase());
         setlstWord([...lstWord, txtPal.value.replace(" ", "").toUpperCase()])

         // cargaLista(txtPal.value.replace(" ", "").toUpperCase());
         txtPal.value = "";
      } else {
         alert("Ingrese una palabrafghjfg.")
      }
   }

   const generate = () => {
    //   let b = document.getElementById("nSize").value;
      g = document.getElementById("lienzo");
      M = b * S + 20;
      m = b * S + 20;
      g.setAttribute("width", M);
      g.setAttribute("height", m + 110);
      ForLienzxo = g.getContext("2d");
      y = lstWord.slice(0);
      // console.log("🚀 ~ file: GameAlphabetSoup.js ~ line 80 ~ generate ~ y", y)
      k = [];
      if (y.length > 0) {
         e();
         a();
         o();
         l();
         i();
      } else{
         alert("Debe ingresar por lo menos una palabra")
      }
   // g = document.getElementById("lienzo"), M = b * S + 20, m = b * S + 20, g.setAttribute("width", M), g.setAttribute("height", m + 110), ForLienzxo = g.getContext("2d"), y = lstWord.slice(0), k = [], y.length > 0 ? (e(), a(), o(), l(), i()) : alert("Debe ingresar por lo menos una palabra")
   }

   const e = () => {
      // aqui todo bien
      for (let t = 0; m > t; t++) {
         I[t] = [];
         for (let e = 0; M > e; e++) I[t][e] = "*"
      }
   }

   const a = () => {
      // Aqui tambien
      for (let t = 0; t < y.length; t++) {
         // console.log(t < y.length)
         let e = parseInt(Math.floor(Math.random() * b));
         let a = parseInt(Math.floor(Math.random() * b));
         let o = parseInt(Math.floor(8 * Math.random()));
         n(y[t], e, a, P[o]) ? (k.push([e, a, P[o]]), r(y[t], e, a, P[o])) : t--
     }
   }

   const n = (t, e, a, n) => {
      // Aqui tambien
      let r = t.length;
      // console.log("🚀 ~ file: GameAlphabetSoup.js ~ line 113 ~ n ~ r", r)
      let o = !1;
      if (e + r * n[0] > 0 && e + r * n[0] < b && a + r * n[1] > 0 && a + r * n[1] < b)
         for (let l = 0; r > l; l++) {
            if ("*" != I[e + l * n[0]][a + l * n[1]] && I[e + l * n[0]][a + l * n[1]] != t.charAt(l)) {
               o = !1;
               break
            }
            o = !0
         } else o = !1;
      return o;
   }

   const r = (t, e, a, n) => {
      for (let r = 0; r < t.length; r++) I[e + r * n[0]][a + r * n[1]] = t.charAt(r)
   }

   const o = () => {
      ForLienzxo.beginPath();
      ForLienzxo.fillStyle = "#FFF";
      ForLienzxo.fillRect(0, 0, M, m + 110);
      ForLienzxo.closePath();
      ForLienzxo.fill();
      ForLienzxo.beginPath();
      ForLienzxo.strokeStyle = "#000";
      ForLienzxo.strokeRect(0, 0, M, m + 110);
      ForLienzxo.closePath();
      ForLienzxo.fill();
   }

   const l = () => {
      for (let t = T.length, e = 0; b > e; e++) {
         x[e] = [];
         for (let a = 0; b > a; a++) {
            let n;
            n = "*" == I[e][a] ? T.charAt(parseInt(Math.floor(Math.random() * t))) : I[e][a], x[e][a] = n, ForLienzxo.beginPath(), ForLienzxo.font = "13pt Tahoma", ForLienzxo.fillStyle = "#000", ForLienzxo.fillText(n, 15 + e * S, 30 + a * S), ForLienzxo.closePath(), ForLienzxo.fill()
         }
      }
   }

   const i = () => {
      ForLienzxo.beginPath();
      ForLienzxo.fillRect(10, m - 5, M - 20, 10);
      ForLienzxo.closePath();
      for (let t = 0, e = 0, a = 1; a <= y.length; a++) {
         ForLienzxo.beginPath();
         ForLienzxo.font = "10pt Tahoma";
         ForLienzxo.fillText(y[a - 1], 10 + 150 * t, m + 20 * e + S);
         ForLienzxo.closePath();
         ForLienzxo.fill();
         e++;
         if (a % 5 === 0) {
            t++;
            e = 0;
         }
      }
   }

   const solve2 = () => {
      for (let t = 0; t < k.length; t++) {
         let e = c(k[t][2]);
         let option1 = ForLienzxo;
         let option2 = 11 + k[t][0] * S + p[e][0] * S;
         let option3 = 15 + k[t][1] * S + p[e][1] * S;
         let option4 = y[t].length * S * k[t][2][0];
         let option5 = y[t].length * S * k[t][2][1];
         let option6 = 18;
         let option7 = k[t][2][0];
         let option8 = k[t][2][1];
         f(option1, option2, option3, option4, option5, option6, option7, option8)
      }
   }

   const clean = () => {
      o(), I = x.slice(), l(), i()
   }

   const c = (t) => {
      let e = 0;
      for (let a = 0; a < P.length; a++) {
         if (P[a][0] === t[0] && P[a][1] === t[1]) {
            console.log('entro');
            e = a;
            break;
         }
      }
      return e
   }

   const f = (t, e, a, n, r, o, l, i) => {
      let s;
      Math.abs(l) + Math.abs(i) == 2 ? (s = Math.PI / 4, n *= .92, r *= .92) : 1 == Math.abs(l) ? s = Math.PI / 2 : 1 == Math.abs(i) && (s = 0), t.beginPath(), t.strokeStyle = "rgba(255, 0, 0, 0.5)", t.fillStyle = "rgba(255, 255, 0, 0.25)", t.moveTo(e, a), t.lineTo(e + n, a + r), t.lineTo(e + n - (0 === l ? 1 : l) * o * Math.cos(s), a + r + (0 === i ? 1 : i) * o * Math.sin(s)), t.lineTo(e - (0 === l ? 1 : l) * o * Math.cos(s), a + (0 === i ? 1 : i) * o * Math.sin(s)), t.closePath(), t.fill(), t.stroke()
   }

   const save = () => {
      const t = document.getElementById("lienzo");
      window.open(t.toDataURL(), "Pupiletras", "left=0,top=0,width=" + M + ",height=" + m + ",toolbar=0,resizable=0")
   }
     


   return (
      <div>
         <div className="container" style={{marginTop: '2em'}}>
            <div className="row">
               <div className="col-xs-12 col-sm-3">
                  <div className="form-group">
                     <div className="input-group">
                        <input
                           type="text"
                           id="txtPalabra"
                           className="form-control"
                           placeholder="Ingrese palabra"
                           // onKeyPress={() => enter()}
                           style={{ textTransform: 'uppercase' }}
                        />
                        <span className="input-group-btn">
                           <button className="btn btn-info" onClick={() => addWord()} type="button">
                              <span className="glyphicon glyphicon-plus"></span>
                           </button>
                        </span>
                     </div>
                  </div>
                  <div className="form-group">
                     <label for="txt">Lista de Palabras</label>
                     <select id="lstPalabras" className="form-control" multiple="multiple">
                        {
                           lstWord.length >= 1 && lstWord.map((i,e) => (
                              <option key={e++}>{i}</option>
                           ))
                        }
                     </select>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-9">
                  <div className="row">
                     <div className="col-xs-12 text-center">
                        <input
                           type="button"
                           className="btn btn-primary"
                           id="btnInit"
                           name="inicio"
                           defaultValue="Generar"
                           // onclick="sopator.generate()"
                           onClick={() => generate()}
                        />
                        <input
                           type="button"
                           className="btn btn-info"
                           id="btnSolve"
                           name="solve"
                           defaultValue="Resolver"
                           // onclick="sopator.solve2()"
                           onClick={() => solve2()}
                        />
                        <input
                           type="button"
                           className="btn btn-default"
                           id="btnClean"
                           name="clean"
                           defaultValue="Limpiar"
                           // onclick="sopator.clean()"
                           onClick={() => clean()}
                        />
                     </div>
                     <hr />
                  </div>
                  <div className="row">
                     <div className="col-xs-12 text-center">
                        <canvas id="lienzo" style={{ width: '100%', height: '100%' }}></canvas>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
};

export default ContactUs;