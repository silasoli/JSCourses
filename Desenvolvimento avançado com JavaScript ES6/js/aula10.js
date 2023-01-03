//only work in node

const EventEmitter = required("events");

const emitter = new EventEmitter();

emitter.on("User logged", (data) => {
  console.log(data);
});

emitter.emit("User logged", { user: "Silas Oli" });
