echo "Switching to branch main"
git checkout main

echo "Building app... (Can also use npm instead of yarn)"
yarn run build

echo "Deploying files to server..."
scp -r build/* zero@172.105.114.191:/var/www/orispax

echo "Done!"