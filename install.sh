#!/bin/bash

#get updates
echo "Installing Linux updates"
apt-get update
echo "update success"
echo "Installing sudo"
apt-get install sudo -y
#uncomment line below if you'll be installing an OCSPanel
#apt-get install libxml-parser-perl -y -f
echo "Installing VPS"
wget -q https://raw.githubusercontent.com/wdulpina/BonvScripts/master/DebianVPS-Installer && chmod +x DebianVPS-Installer && ./DebianVPS-Installer
rm -rf DebianVPS-Installer
echo "Installation Complete"
