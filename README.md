Kukai
=====

## Install

```sh
$ docker build -t syon/kukai .
```


## Run

```sh
$ docker run -it --rm -v (pwd):/app syon/kukai inkscape -z -T -f ./sample.svg -l ./out.svg
```
