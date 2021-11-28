mod utils;

use utils::set_panic_hook;
use wasm_bindgen::prelude::*;
use magic_crypt::{new_magic_crypt, MagicCryptTrait};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn encrypt(inp: String, key: String) -> String {
    set_panic_hook();
    
    let mc = new_magic_crypt!(key, 256);
    mc.encrypt_str_to_base64(inp)
}

#[wasm_bindgen]
pub fn decrypt(inp: String, key: String) -> String {
    set_panic_hook();

    let mc = new_magic_crypt!(key, 256);
    mc.decrypt_base64_to_string(inp).unwrap()
}