const frases = [
  { frase: "El que madruga, Dios lo ayuda", autor: "Pepito perez" },
  { frase: "El que mucho avanza", autor: "Juan paez" },
  { frase: "texto 1", autor: "tito mindo" },
  { frase: "La patria es de todos", autor: "Otto perez" },
  { frase: "Vacuna no", autor: "Pedro rez" },
  { frase: "texto jorge", autor: "Jorge tata" },
  { frase: "confirma texto andrea", autor: "Andrea Alban" },
];
const app = Vue.createApp({
  methods: {
    agregarFrase() {
      console.log(this.frase);
      console.log(this.autor);
      const nuevaFrase = {
        frase: this.frase,
        autor: this.autor,
      };

      this.listafrases.unshift(nuevaFrase);
    },
    agregarFraseFinal() {
      console.log(this.frase);
      console.log(this.autor);
      const nuevaFrase = {
        frase: this.frase,
        autor: this.autor,
      };

      this.listafrases.push(nuevaFrase);
    },
    //desectructuracion de event con { }
    //para evitar escribir mucho event.target asi sucesivamente
    //console.log(event.charCode);
    eventoKeyPress({ charCode, cancelable, key,keyCode, target }) {
      if (key === "Enter") {
        //console.log("Evento");
        console.log(charCode);
        console.log(cancelable);
        console.log(key);
        console.log(keyCode);
        console.log(target.baseURI);
        this.agregarFraseFinal();
      }

      //la ruta completa de un event es event.target.value
      //por que el objeto event es un objeto de javascript
    },
    eventoKeyPressModificador() {
        if (key === "Enter") {
        console.log("Evento");
        console.log(charCode);
        console.log(cancelable);
        console.log(key);
        console.log(keyCode);
        console.log(target.baseURI);
        this.agregarFraseFinal();
        }

    },
  },
  data() {
    return {
      listafrases: frases,
      frase: null,
      //autor:'sin autor'
      autor: null,
    };
  },
});

app.mount("#myApp");
