Kukai
=====

## Install

```sh
$ docker build -t syon/kukai .
```


## Run

```sh
# Start Express
$ docker run -it --rm -v (pwd):/app -p 3333:3000 syon/kukai node index.js
```

```sh
# Use Inkscape
$ docker run -it --rm -v (pwd):/app syon/kukai inkscape -z -T -f ./sample.svg -l ./out.svg
```


## Listup fonts
```sh
/app $ fc-list | grep -v DejaVu
```
