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

Follow the instructions to add the other VM's to the swarm (see [this tutorial](https://docs.docker.com/engine/swarm/swarm-tutorial/create-swarm/) for more info on creating a swarm)

## Starting the manager
cd into the ./manager directory

```bash
$ vagrant ssh
[vagrant@localhost ~]$ cd /vagrant/manager-server/
[vagrant@localhost ~]$ sudo su
[vagrant@localhost ~]$ yarn install
[vagrant@localhost ~]$ npm start
```
In the host machine brows to [http://192.168.33.10:3000/](http://192.168.33.10:3000/)
