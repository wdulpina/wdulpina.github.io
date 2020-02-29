#!/bin/bash
echo "Removing Old Theme"
rm -rf /home/panel/html/assets
rm -rf /home/panel/html/view
rm -rf /home/panel/html/tmp/*
echo "Installing Template"
cd ~
mkdir phslicer
cd phslicer
rm -rf *
wget https://github.com/wdulpina/wdulpina.github.io/raw/master/phslicer.zip && unzip phslicer.zip
mv assets /home/panel/html
mv view /home/panel/html
echo "phslicer Template Successfully Installed"
