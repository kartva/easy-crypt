import * as wasm from "wasm-easy-crypt";

document.getElementById("do_it_button").onclick = () => {
	let en = document.getElementById("encrypt");
	let de = document.getElementById("decrypt");
	let key = document.getElementById("key");
	if (en.value != "") {
		de.value = wasm.encrypt (en.value, key.value);
	} else if (de.value != "") {
		en.value = wasm.decrypt (de.value, key.value);
	} else {
		alert("Both Encrypt and decrypt fields are blank!");
	}
}