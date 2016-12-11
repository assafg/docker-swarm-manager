# docker-swarm-manager

## Setup
This project contains 3 virtual servers represented by Vagrant files:
- master
- worker1
- worker2

start the the 3 virtual machines separately in different terminals.
Set the master VM to be a swarm manager - in the ./manager directory type:
```bash
$ vagrant ssh
$ sudo docker swarm init --advertise-addr 192.168.33.10
```

Follow the instructions to add the other VM`s to the swarm (see [this tutorial](https://docs.docker.com/engine/swarm/swarm-tutorial/create-swarm/) for more info on creating a swarm)
