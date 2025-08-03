# binomial.gs

> binomial function for goboscript

This is a binomial library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/faretek1/inflator).

It only works on integers, and uses a LUT.

## Credits

...

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/binomial`

add binomial to your `inflator.toml` config:
```toml
[dependencies]
# ...
binomial = "https://github.com/FAReTek1/binomial"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/binomial`
2. `cd binomial`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
