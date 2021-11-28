//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;
use easy_crypt;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn test_encrypt () {
    assert_eq! (
        easy_crypt::encrypt (
            "a very special incredibly long-winded barely relevant secret",
            "a secret key to open secrets"
        ),
        ""
    )
}

fn test_decrypt () {
    assert_eq! (
        easy_crypt::decrypt (
            "",
            "a secret key to open secrets"
        ),
        "a very special incredibly long-winded barely relevant secret"
    )
}