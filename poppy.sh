git fetch
echo "Switching to Crash"
git checkout crash
git pull
echo "Building"
npm run build
scp -r build/* technovate@172.16.61.176:/var/www/html/
echo "Done!"