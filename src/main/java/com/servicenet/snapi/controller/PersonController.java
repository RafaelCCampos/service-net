package com.servicenet.snapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.servicenet.snapi.entities.Person;
import com.servicenet.snapi.service.PersonService;

@RestController
@RequestMapping(value = "persons")
public class PersonController {

	@Autowired
	private PersonService service;

	@GetMapping
	public ResponseEntity<List<Person>> findAll() {
		List<Person> list = service.findAll();
		return ResponseEntity.ok(list);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Person postPerson(@RequestBody Person person) {
		return service.savePerson(person);
	}

	@PutMapping("/{personId}")
	public ResponseEntity<Person> putPerson(@PathVariable Long personId, @RequestBody Person person) {
		person.setId(personId);
		service.savePerson(person);
		return ResponseEntity.ok(person);
	}
	
	@DeleteMapping("/{personId}")
	public ResponseEntity<Void> deletePerson(@PathVariable Long personId) {
		service.deletePerson(personId);
		return ResponseEntity.noContent().build();
	}
}
