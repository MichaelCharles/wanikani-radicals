#!/bin/bash
for filename in ./*.svg; do
    if [ ! -f "../black_pngs/"$filename".png" ]
    then
        for ((i=0; i<=3; i++)); do
        svgexport "$filename" "../black_pngs/"$filename".png" "512:"
        done
    else
        echo "File found. ../black_pngs/"$filename".png"
    fi
    
done