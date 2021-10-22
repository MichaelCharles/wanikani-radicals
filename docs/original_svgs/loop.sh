#!/bin/bash
for filename in ./*.svg; do
    svgexport "$filename" "../black_pngs/"$filename".png" "512:"
done