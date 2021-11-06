_file_name="tube-hider-"
_file_extenssion=".zip"
_file_version=$(grep \"version\" addon/manifest.json | tr -d ' a-z:,\"')

_build_directory=""

if [[ $1 == "--release" ]]; then
    _build_directory="releases"
else
    _build_directory="builds"
fi

mkdir -p $_build_directory
cd addon
zip -r -FS ../$_build_directory/$_file_name$_file_version$_file_extenssion * --exclude '*.git'
cd ..
echo $_file_name$_file_version$_file_extenssion completed!
