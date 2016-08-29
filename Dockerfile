FROM mhart/alpine-node

# Inkscape
RUN apk update && apk upgrade && apk add inkscape ttf-dejavu && \
  rm -rf /var/cache/apk/*

# Font
COPY fonts /home/inkscaper/.local/share/fonts/
RUN fc-cache -fv

WORKDIR /app
