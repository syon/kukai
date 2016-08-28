FROM rasch/inkscape

COPY fonts /home/inkscaper/.local/share/fonts/

RUN fc-cache -fv

WORKDIR /app
