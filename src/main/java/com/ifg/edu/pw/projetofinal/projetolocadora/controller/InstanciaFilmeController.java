package com.ifg.edu.pw.projetofinal.projetolocadora.controller;
 
import java.util.Date; 
import java.util.List; 
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ifg.edu.pw.projetofinal.projetolocadora.repository.InstanciaFilmeRepository;
import com.ifg.edu.pw.projetofinal.projetolocadora.model.InstanciaFilme;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
/**
 * Controller de instância de filme
 * @author savio
 *
 */
@RestController
public class InstanciaFilmeController {
	private final InstanciaFilmeRepository repository;
	private final InstanciaFilmeModelAssembler assembler;

	public InstanciaFilmeController(InstanciaFilmeRepository repository, InstanciaFilmeModelAssembler assembler) {
		this.repository = repository;
		this.assembler = assembler;
	}

	/**
	 * Retorna todas as instâncias
	 * @return
	 */
	@GetMapping("/instancias")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<InstanciaFilme> all() {
		return repository.findAll();
	}

	/**
	 * Retorna uma instânicia a partir do id
	 * @param id
	 * @return
	 */
	@GetMapping("/instancias/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public EntityModel<InstanciaFilme> one(@PathVariable String id) {
		InstanciaFilme instanciaFilme = repository.findById(id)
				.orElseThrow(() -> new InstanciaFilmeNotFoundException(id));

		return assembler.toModel(instanciaFilme);
	}

	/**
	 * Cria uma nova instânica
	 * @param newInstancia
	 * @return
	 */
	@PostMapping("/instancias")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> newInstanciaF(@RequestBody InstanciaFilme newInstancia) {

		  EntityModel<InstanciaFilme> entityModel = assembler.toModel(repository.save(newInstancia));

		  return ResponseEntity
		      .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri()) 
		      .body(entityModel);
	}

	/**
	 * Atualiza uma instância
	 * @param newInstanciaFilme
	 * @param id
	 * @return
	 */
	@PutMapping("/instancias/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> replaceInstanciaFilme(@RequestBody InstanciaFilme newInstanciaFilme, @PathVariable String id) {

		InstanciaFilme updatedInstanciaFilme = repository.findById(id)
				.map(instanciaFilme -> {
					instanciaFilme.setData_entrega(newInstanciaFilme.getData_entrega());
					instanciaFilme.setFilme(newInstanciaFilme.getFilme());
					return repository.save(instanciaFilme);
				}).orElseGet(() -> {
					newInstanciaFilme.setId(id);
					return repository.save(newInstanciaFilme);
				});

		EntityModel<InstanciaFilme> entityModel = assembler.toModel(updatedInstanciaFilme);

		return ResponseEntity
		      .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
		      .body(entityModel);
	}

	/**
	 * Deleta uma instância
	 * @param id
	 * @return
	 */
	@DeleteMapping("/instancias/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> deleteInstanciaFilme(@PathVariable String id) {
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
