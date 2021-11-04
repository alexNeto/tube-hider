_file_name="tube-hider-"
_file_extenssion=".zip"
_file_version=$(cat addon/manifest.json | grep version | tail -n 1 | tr -d ' a-z:,\"')


mkdir -p builds
cd addon
zip -r -FS ../builds/$_file_name$_file_version$_file_extenssion * --exclude '*.git'
cd ..
echo $_file_name$_file_version$_file_extenssion completed!
