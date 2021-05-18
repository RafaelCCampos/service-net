package com.servicenet.snapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servicenet.snapi.entities.Person;
import com.servicenet.snapi.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository repository;

	public List<Person> findAll() {
		return repository.findAll();
	}

	public Person savePerson(Person person) {
		return repository.save(person);
	}

	public void deletePerson(Long personId) {
		repository.deleteById(personId);
	}
}
