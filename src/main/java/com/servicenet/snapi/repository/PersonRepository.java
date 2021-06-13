package com.servicenet.snapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servicenet.snapi.entities.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {

}
