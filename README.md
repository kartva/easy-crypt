# Easy-crypt
Hosted at [https://kartva.github.io/easy-crypt/](https://kartva.github.io/easy-crypt/)

A probably not-secure website built in an afternoon (and I really do mean _one_) to keep text secret.

I am **not** proud of this code, but it's so simple that it works. (probably)

Have a read through the code before using to check for any glaring flaws. (and file an issue if you find any, it's the polite thing to do.)

Built using [`rust-webpack-template`](https://github.com/rustwasm/rust-webpack-template).

## Build and deploy
```
wasm-pack build
cd www/
npm run build
npx gh-pages -d dist
```

## License

Licensed under either of

* Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
