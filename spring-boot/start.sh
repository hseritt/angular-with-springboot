#!/usr/bin/env bash

clear; reset;

mvn clean package && 
java -jar target/spring-boot-0.0.1-SNAPSHOT.jar

