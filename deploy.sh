snap install kubectl --classic
# pip install awscli
# curl -Lo kops https://github.com/kubernetes/kops/releases/download/$(curl -s https://api.github.com/repos/kubernetes/kops/releases/latest | grep tag_name | cut -d '"' -f 4)/kops-darwin-amd64
# chmod +x ./kops
# sudo mv ./kops /usr/local/bin/
kubectl version