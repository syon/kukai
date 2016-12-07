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

### Start Express server
```sh
$ docker run -it --rm -v (pwd):/app -p 3333:3000 syon/kukai node index.js
```

- http://localhost:3333

### Stop
```sh
$ docker ps
$ docker stop xxxxx
```


## TIPS

### Using Inkscape instantly
```sh
$ docker run -it --rm -v (pwd):/app syon/kukai inkscape -z -T -f ./sample.svg -l ./out.svg
```

### Listup fonts
```sh
# In Docker Container
/app $ fc-list | grep -v DejaVu
```
