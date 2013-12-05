powdiff
=======

Visually diff your production environment and your local Pow server

Usage
-----

Requires PhantomJS and ImageMagick.
```bash
$ brew install phantomjs imagemagick
```

This will render a diff between http://www.example.dev/ and https://www.example.com/.
```bash
$ ./powdiff http://www.example.dev/
```
![screenshot](https://raw.github.com/jelder/powdiff/master/diff_thumbnail.png)
