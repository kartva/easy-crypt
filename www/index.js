import * as wasm from "wasm-easy-crypt";

let pl = document.getElementById("plaintext");
let cp = document.getElementById("ciphertext");
let key = document.getElementById("key");
let button = document.getElementById("do_it_button");

let example_encrypt = document.getElementById("enc_button");
let example_decrypt = document.getElementById("dec_button");

example_encrypt.onclick = () => {
	pl.value = "a very special incredibly long-winded barely relevant secret";
	cp.value = "";
	key.value = "a secret key";
	button.disabled = false;
	button.value = "Encrypt";
}

example_decrypt.onclick = () => {
	pl.value = "";
	cp.value = "uhyfPJ2/+DBosbZkURSQi+NTOtrWInP6nIM0hOBXP7xCeX7XojRLE8Q8ZLhZAwRswoouHZl20nvdyi/FUsonVg==";
	key.value = "a secret key";
	button.disabled = false;
	button.value = "Decrypt";
}

button.onclick = () => {
	try {
		if (pl.value != "") {
			cp.value = wasm.encrypt (pl.value, key.value);
		} else if (cp.value != "") {
			pl.value = wasm.decrypt (cp.value, key.value);
		} else {
			alert("Both Plaintext and Ciphertext fields are blank!");
		}
	} catch (error) {
		alert("Error converting. Are you sure you copy-pasted correctly?");
	}
}

pl.oninput = () => {
	//cp.disabled = (pl.value != "");
	cp.value = "";
	button.value = (pl.value == "" && cp.value == "") ? "Convert" : "Encrypt";
	button.disabled = (pl.value == "" && cp.value == "");
}

cp.oninput = () => {
	//pl.disabled = (cp.value != "");
	pl.value = "";
	button.value = (pl.value == "" && cp.value == "") ? "Convert" : "Decrypt";
	button.disabled = (pl.value == "" && cp.value == "");
}