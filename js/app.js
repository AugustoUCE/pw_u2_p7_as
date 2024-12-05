/**configuracion de vue js */
console.log(Vue);
const app = Vue.createApp({
  //   template: `
  //     <h1>Hola mundo</h1>
  //     <p>Con Vue.JS</p>
  //     <p>{{ [1,2,3,4,5] }}</p>
  //     <p>{{ {nombre:'Agusto',apellido:'Salazar'} }}</p>
  //     <p>{{ false ? 'Activo':'Inactivo' }}</p>
  //     <p> 1===1 </p>
  //     <p>{{ 1===1 }}</p>
  //     `,
  // options API

  methods: {
    cambiarMensaje(){
        this.mensaje = 'Metodo cambiar mensaje';
        this.edad = 30; 
    }

  },
  data() {
    return {
        mensaje: 'Hola mundo PWeb',
        edad: 35	   

    };
  },
});

app.mount("#myapp");
