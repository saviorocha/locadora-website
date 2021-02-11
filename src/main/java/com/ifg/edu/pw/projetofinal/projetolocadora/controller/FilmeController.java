package com.ifg.edu.pw.projetofinal.projetolocadora.controller;

import java.util.List;  
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ifg.edu.pw.projetofinal.projetolocadora.model.Filme;
import com.ifg.edu.pw.projetofinal.projetolocadora.repository.FilmeRepository;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

/**
 * Controller de filme
 * @author savio
 *
 */
@RestController
public class FilmeController {
	private final FilmeRepository repository;
	private final FilmeModelAssembler assembler;

	public FilmeController(FilmeRepository repository, FilmeModelAssembler assembler) {
		this.repository = repository;
		this.assembler = assembler;
	}

	/**
	 * Retorna todos os filmes do repositório
	 * @return
	 */
	@GetMapping("/filmes")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Filme> all() {
		return repository.findAll();
	}

	/**
	 * Retorna um filme com id especifico
	 * @param id
	 * @return
	 */
	@GetMapping("/filmes/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public EntityModel<Filme> one(@PathVariable String id) {
		Filme filme = repository.findById(id)
				.orElseThrow(() -> new FilmeNotFoundException(id));

		return assembler.toModel(filme);
	}

	/**
	 * Adiciona uma novo filme
	 * @param newFilme
	 * @return
	 */
	@PostMapping("/filmes")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> newF(@RequestBody Filme newFilme) {

		  EntityModel<Filme> entityModel = assembler.toModel(repository.save(newFilme));

		  return ResponseEntity
		      .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri()) 
		      .body(entityModel);
	}

	
	/**
	 * Atualiza um filme a partir do id
	 * @param newFilme
	 * @param id
	 * @return
	 */
	@PutMapping("/filmes/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> replaceFilme(@RequestBody Filme newFilme, @PathVariable String id) {

		Filme updatedFilme = repository.findById(id)
				.map(filme -> {
					filme.setAno(newFilme.getAno());
					filme.setAtores(newFilme.getAtores());
					filme.setDiretores(newFilme.getDiretores());
					filme.setGenero(newFilme.getGenero());
					filme.setSinopse(newFilme.getSinopse());
					filme.setTitulo(newFilme.getTitulo());
					return repository.save(filme);
				}).orElseGet(() -> {
					newFilme.setId(id);
					return repository.save(newFilme);
				});

		EntityModel<Filme> entityModel = assembler.toModel(updatedFilme);

		return ResponseEntity
		      .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
		      .body(entityModel);
	}

	/**
	 * Deleta um filme a partir do id
	 * @param id
	 * @return
	 */
	@DeleteMapping("/filmes/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<?> deleteFilme(@PathVariable String id) {
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
