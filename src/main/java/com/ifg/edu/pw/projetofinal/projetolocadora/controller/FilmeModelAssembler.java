package com.ifg.edu.pw.projetofinal.projetolocadora.controller;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import com.ifg.edu.pw.projetofinal.projetolocadora.model.Filme;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Component
public class FilmeModelAssembler implements RepresentationModelAssembler<Filme, EntityModel<Filme>> {

	@Override
	public EntityModel<Filme> toModel(Filme filme) {
		return EntityModel.of(filme,
		        linkTo(methodOn(FilmeController.class).one(filme.getId())).withSelfRel(),
		        linkTo(methodOn(FilmeController.class).all()).withRel("filmes")
		);
	}	
}
