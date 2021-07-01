export function helloWorld() {
  // this line assumes sendMessage was injected before & is available on the global scope
  sendMessage("hello world!");
}
