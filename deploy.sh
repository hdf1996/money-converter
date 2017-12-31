eval `ssh-agent -s`
mkdir -p ~/.ssh
ls ~/.ssh
openssl aes-256-cbc -K $encrypted_f039dbbd3e6c_key -iv $encrypted_f039dbbd3e6c_iv -in github_deploy.enc -out ~/.ssh/id_rsa -d
mv github_deploy.pub ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa.pub
ssh-add ~/.ssh/id_rsa
GIT_SSH_COMMAND="ssh -i ~/,ssh/id_rsa"
git config --global user.email "hdf1986.6700+travis@gmail.com"
git config --global user.name "Travis CI"
git remote set-url origin git@github.com:hdf1986/money-converter.git


yarn install -s
yarn run deploy
