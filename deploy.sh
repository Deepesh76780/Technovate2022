git fetch
echo "Switching to Master"
git checkout main
git pull
echo "Building"
npm run build
scp -r build/* root@$172.16.61.176:/var/www/html/
echo "Done!"