Kukai
=====

## Idea
- [IDEA.md](IDEA.md)

## Install

```sh
$ docker build -t syon/kukai .
```


## Dev

```sh
# Gulp watch
$ npm run watch
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
