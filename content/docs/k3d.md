## Installation

### Install Script

#### Install current latest release

```bash
wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
# or
curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
```

#### Uninstall

```bash
sudo rm $(which k3d)
```

### Homebrew

```bash
brew upgrade && brew install k3d
```



## Multi cluster

```shell
kubectl config use-context k3d-test
kubectl cluster-info

kubectl create deployment nginx --image=nginx
kubectl scale deployment nginx --replicas 3
```

