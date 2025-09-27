# binomial.gs

> binomial function for goboscript

This is a binomial library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/inflated-goboscript/inflator).

It only works on integers, and uses a LUT.

## Credits

...

## Installation

Make sure you have inflator installed. It's available on the gtp.

`inflate install binomial`

add binomial to your `inflator.toml` config:
```toml
[dependencies]
# ...
binomial = "binomial"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/inflated-goboscript/binomial`
2. `cd binomial`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
