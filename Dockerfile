FROM mhart/alpine-node

# rasch/inkscape
RUN apk update && apk upgrade && apk add inkscape ttf-dejavu && \
  rm -rf /var/cache/apk/* && \
  adduser -D inkscaper

USER inkscaper

# Font
COPY fonts /home/inkscaper/.local/share/fonts/
RUN fc-cache -fv

WORKDIR /app
