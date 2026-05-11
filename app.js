const db = firebase.database();

db.ref("test").set({
  mensaje: "hola firebase"
});

console.log("conectado a firebase");
