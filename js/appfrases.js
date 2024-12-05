const frases = [    
    {frase:'El que madruga, Dios lo ayuda', autor:'Pepito perez'},
    {frase:'El que mucho avanza', autor:'Juan paez'},
    {frase:'texto 1', autor:'tito mindo'},
    {frase:'La patria es de todos', autor:'Otto perez'},
    {frase:'Vacuna no', autor:'Pedro rez'},
    {frase:'texto jorge', autor:'Jorge tata'},
    {frase:'confirma texto andrea', autor:'Andrea Alban'},
    

]

const app = Vue.createApp({
    methods: {
        
    },
    data() {
        return {
            listaFrase: frases,
        }
    },

});
app.mount("#myapp");