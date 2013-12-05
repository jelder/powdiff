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
![screenshot](https://raw.github.com/jelder/powdiff/master/example_thumbnail.png)

If you find this useful, I may also suggest a bookmarklet I created for switching between Pow and Production: https://gist.github.com/jelder/7377297
